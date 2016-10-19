<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    //网站管理后台界面
    public function index()
    {
    	return view("admin.index.index");
    	// return "123456";
    }

    //执行主类添加
     public function store(Request $request)
	{
		// return "ads";
		// dd($request);

		$data = $request->only("name");
		// dd($data); 
		$id = \DB::table("typetable")->insertGetid($data);//执行添加返回自增ID号
		// dd($id);
		if($id>0){
            return redirect("admin/zhuan");
            // return "hkjhkj";
        }else{
            return "添加失败";
        }
	}	

}
