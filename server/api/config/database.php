<?php
// Example Configure multiple connections

return [

      /*
      |--------------------------------------------------------------------------
      | PDO Fetch Style
      |--------------------------------------------------------------------------
      |
      | By default, database results will be returned as instances of the PHP
      | stdClass object; however, you may desire to retrieve records in an
      | array format for simplicity. Here you can tweak the fetch style.
      |
      */
      'fetch' => PDO::FETCH_CLASS, // Important
      'default' => 'angular_app',

      'connections' => [
          //Primary connection
          'angular_app' => [
              'driver'    => 'mysql',
              'host'      => 'localhost',
              'database'  => 'angular_app',
              'username'  => 'root',
              'password'  => 'root',
              'charset'   => 'utf8mb4',
              'collation' => 'utf8mb4_unicode_ci',
              'prefix'    => '',
              'debug'     => 'true',
              'options'   => array(
                    //PDO::ATTR_PERSISTENT => true,
              ),
          ],

		// Mongo Connection
		'mongodb' => [
			'driver'    => 'mongodb',
            'host'      => 'localhost',
            'Port'      => 27017,
            'database'  => 'test',
            'username'  => '',
            'password'  => '',
            'options'   => [
                'database' => 'admin' // sets the authentication database required by mongo 3
            ]
		],

        // IF mongo vars are set in env file
        'mongo' => [
            'driver'   => 'mongodb',
            'host'     => env('DB_HOST', 'localhost'),
            'port'     => env('DB_PORT', 27017),
            'database' => env('DB_DATABASE', 'test'),
            'username' => env('DB_USERNAME'),
            'password' => env('DB_PASSWORD'),
            'options' => [
                'database' => 'admin' // sets the authentication database required by mongo 3
            ]
        ],

            // Example settings
            /*
            'mysql' => [
                  'driver'    => 'mysql',
                  'host'      => env('DB_HOST', env('OPENSHIFT_MYSQL_DB_HOST', 'localhost')),
                  'port'      => env('DB_PORT', env('OPENSHIFT_MYSQL_DB_PORT', 3306)),
                  'database'  => env('DB_DATABASE', env('OPENSHIFT_APP_NAME', 'forge')),
                  'username'  => env('DB_USERNAME', env('OPENSHIFT_MYSQL_DB_USERNAME', 'forge')),
                  'password'  => env('DB_PASSWORD', env('OPENSHIFT_MYSQL_DB_PASSWORD', '')),
                  'charset'   => 'utf8',
                  'collation' => 'utf8_unicode_ci',
                  'prefix'    => '',
                  'strict'    => false,
            ],
            */
	],

      /*
      |--------------------------------------------------------------------------
      | Migration Repository Table
      |--------------------------------------------------------------------------
      |
      | This table keeps track of all the migrations that have already run for
      | your application. Using this information, we can determine which of
      | the migrations on disk haven't actually been run in the database.
      |
      */
      'migrations' => 'migrations',

      /*
      |--------------------------------------------------------------------------
      | Redis Databases
      |--------------------------------------------------------------------------
      |
      | Redis is an open source, fast, and advanced key-value store that also
      | provides a richer set of commands than a typical key-value systems
      | such as APC or Memcached. Laravel makes it easy to dig right in.
      |
      | OpenShift Notes:
      |   Redis:       https://hub.openshift.com/addons/34-redis
      |   Redis Cloud: https://hub.openshift.com/addons/17-rediscloud
      |
      */
      'redis' => [
            'cluster' => false,
            'default' => [
                  'host'     => '127.0.0.1',
                  'port'     => 6379,
                  'database' => 0,
            ],
      ],
]

?>
