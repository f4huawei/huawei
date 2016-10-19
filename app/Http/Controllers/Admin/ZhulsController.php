<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class ZhulsController extends Controller
{
	//主类便历
	public function chaxuu()
	{
		// return 12;
		$db = \DB::table("typetable")->get();
		
	 
        //加载页面
		return view("admin.zhulei.zhulei")->with(["data"=>$db]);
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
