<?php

namespace App\Http\Controllers;

use DB;
use App\MongoUsers;
use Illuminate\Http\Request;

class MongoUsersController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Get Mongo users.
     *
     * @return object
     */
    public function getUsers()
    {
        $users = MongoUsers::all();
        $users = DB::connection('mongodb')->collection('users')->get();

        return response()->json(['code' => 200, 'database' => 'mongo', 'users' => $users]);
    }
}
