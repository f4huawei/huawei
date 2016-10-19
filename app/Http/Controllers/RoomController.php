<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class RoomController extends Controller
{
	//加载页面
	public function index()
	{	
		// session()->forget('user');

		// dd($request);
		// return 1;
		// $id = session('user')->id;
		// return redirect('/myroom');
	}
    //显示页面
    public function show($id)
    {
    	$list = \DB::table('user')->where('id',$id)->get();
    	// dd($list);
    	return view('myroom',["list"=>$list]);
    	// dd($list);
    }
    //执行修改
    public function update(Request $request,$id)
	{
		// dd($id);
		 //1 接收表单提交的值 
        $data = $request->only("userName","userPass","userSex","userPhone","userAddress","userPhoto","userAbout");
        // dd($request->file('userPhoto'));
        if($request->file("userPhoto")){
            //获取上传信息
            $file = $request->file("userPhoto");
            // dd($file);
            //确认上传的文件是否成功
            if($file->isValid()){
                $picname = $file->getClientOriginalName(); //获取上传原文件名
                $ext = $file->getClientOriginalExtension(); //获取上传文件名的后缀名
                //执行移动上传文件
                
                $filename=time().rand(1000,9999).".".$ext;
                $data['userPhoto'] = $filename;
                $file->move("./myRooms/userImg",$filename);
            
            }
        }
        // //2 执行修改 
         \DB::table("user")->where("id",$id)->update($data);
        // //3 跳
         // dd($id);
        return redirect('/logout');
	}
}
