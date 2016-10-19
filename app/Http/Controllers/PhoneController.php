<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class PhoneController extends Controller
{
    //加载视图
    public function index()
    {
    	//获得所有手机信息
    	$list = \DB::table('goods')->where('cid',1)->get();//信息传回去，叫$list
    	// dd($list);

    	//加载手机列表视图
    	return view('phone',["list"=>$list]);
    }
}
