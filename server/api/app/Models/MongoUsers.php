<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class MongoUsers extends Eloquent{

	use SoftDeletes;
	protected $connection = 'mongodb';
	//protected $collection = 'users';

}

?>
