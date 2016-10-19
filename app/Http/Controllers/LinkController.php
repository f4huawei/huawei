<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class LinkController extends Controller
{
    //
    public function index(Request $request)
	{	
		//获取配置表数据
		$on = \DB::table("peizhi")->first();
		$write = \DB::table("indexpic")->get();
		// return '111';
		//  1 获得一个连接的对象 
        $list = \DB::table("links")->get();
        // dd($list);
        //加载stu目录下的index模板 并且将$list数据添加到list中
		return view("index")->with(['list'=>$list])->with(['on'=>$on])->with(['write'=>$write]);
	}

}
