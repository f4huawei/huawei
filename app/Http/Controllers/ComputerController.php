<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class ComputerController extends Controller
{
    //加载视图
    public function index()
    {
    	//获得所有电脑信息
    	$list = \DB::table('goods')->where('cid',2)->get();//信息传回去，叫$list
    	// dd($list);
    	//加载电脑列表视图
    	return view('computer',["list"=>$list]);
    }

}
