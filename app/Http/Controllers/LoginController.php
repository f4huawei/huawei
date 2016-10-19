<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests;
//登录控制器
class LoginController extends Controller
{
    //登录表单
    public function login()
    {
    	return view('login');
    }	

    //执行登录
    public function dologin(Request $request)
    {
    	$userName =	$request->input('userName'); 
    	$passWord = $request->input('passWord');
    	$ob = \DB::table('user')->where("userName",$userName)->first();
    	if($ob){
    		if($ob->userPass == $passWord){
    			//用户存在并且密码正确，存入session，名为user;
    			session()->set('user',$ob);	
    			
    			return redirect('/');
    		}else{
    			//密码错误
    			return back()->with('msg','密码错误');
    		}
		}else{
			//用户不存在
    		return back()->with('msg','用户名不存在');
    	}
    }
}
