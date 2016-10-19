<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests;

class EnrollController extends Controller
{
    //注册页面
    public function enroll()
    {
        return view('enroll');
    }
    //执行注册
    public function store(REQUEST $request)
    {
        // 1.验证码
        $mycode = session()->get('code');
        if($mycode != $request->input('userCode')){
            return back()->with('codeMsg','验证码错误');
        }
        // 2.获取用户信息
        $userName = $request->input('userName');
        $userPass = $request->input('userPass');
        $userPhone = $request->input('userPhone'); 
        $userSex = $request->input('userSex');

        // 3.执行添加
        $data = $request->only("userName","userPass","userPhone","userSex");
        $id = \DB::table('user')->insertGetId($data);
        // 3.判断是否添加成功
        if($id>0){
            //成功返回首页并且存入session
            return redirect('/');
            Session::flash('user',$data);
            
        }else{
            //失败返回注册页面，带着codeMsg值
            return back()->with("codeMsg","注册失败");  
        }
    }
}
