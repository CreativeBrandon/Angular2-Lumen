<?php

//namespace Acme\Http\Middleware;
namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Cache;

class RateLimiterMiddleware
{
    /**
     * Default rate limit, maximum number of requests.
     */
    const DEFAULT_LIMIT = 1000;

    /**
     * Default request cost per request.
     */
    const DEFAULT_COST = 1;

    /**
     * Default period which the requests are limited (minutes).
     */
    const DEFAULT_PERIOD = 1;

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure                 $next
     * @param int                       $limit   The overall request limit (defaults to 1000)
     * @param int                       $cost    The cost of the request (defaults to 1)
     *
     * @return mixed
     */
    public function handle(
        $request,
        Closure $next,
        $limit = self::DEFAULT_LIMIT,
        $cost = self::DEFAULT_COST)
    {
        // Rate limit by IP address
        $count = sprintf('api:count:%s', $request->getClientIp());
        $reset = sprintf('api:reset:%s', $request->getClientIp());

        // Add if doesn't exist, remember for the limit period
        Cache::add($reset, time() + (self::DEFAULT_PERIOD * 60), self::DEFAULT_PERIOD);
        Cache::add($count, 0, self::DEFAULT_PERIOD);

        $reset_time = Cache::get($reset, time());
        $remaining = $limit - Cache::increment($count, $cost);

        $response = $next($request);

        // Break out and return an error message
        if ($remaining <= 0) {
            $response->setContent([
                "status" => 429,
                "message" => "Rate limit exceeded"
            ])->setStatusCode(429);
        }

        // Set rate limit headers
        $response
            ->header('X-RateLimit-Cost', $cost)
            ->header('X-RateLimit-Limit', $limit)
            ->header('X-RateLimit-Remaining', max($remaining, 0))
            ->header('X-RateLimit-Reset', $reset_time)
            ->header('X-RateLimit-Reset-Ttl', max($reset_time - time(), 0));

        return $response;
    }
}
