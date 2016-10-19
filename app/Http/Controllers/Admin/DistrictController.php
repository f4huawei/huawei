<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class DistrictController extends Controller
{
	public function find($upid=0)
    {
    	// select * from district where upid=0;
    	$list = \DB::table("district")->where("upid",$upid)->get();
    	// dd($list);
    	return json_encode($list);
    }
}
