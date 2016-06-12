<?php

namespace App\Http\Controllers;

use DB;
use App\Users;
use Illuminate\Http\Request;

class UsersController extends Controller
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
        $users = Users::all();

        return response()->json(['code' => 200, 'database' => 'mysql', 'users' => $users]);
    }
}
