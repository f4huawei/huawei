<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Http\Controllers\Controller;
use Gregwar\Captcha\CaptchaBuilder;//使用验证码的类


class LoginController extends Controller
{
    //登录
    public function Login()
    {
        return view('admin.login');
        // return 33333;
    }

    //2 执行登录 
    public function dologin(Request $request)
    {
        // //1 验证码

            $mycode = session()->get("code");
            // dd($mycode);
            
            // dd($request->input('code'));
            if($mycode!=$request->input('code')){
                return back()->with("msg","验证码错误");//后退
                // session()->flash("msg","验证码错误");//写入错误信息
                // return redirect("admin/login");//重定向
            }
        //2 用户名
            //21 获得表单提交的用户和密码
            $user = $request->input('user');
            $pwd = $request->input('passwd');
            // dd(user);
            $ob = \DB::table('user')->where("userName",$user)->first();
            // dd($ob->userType);
            if($ob){
                // return "111";
                //3 密码
                if($ob->userPass==$pwd){
                    //判断是否是管理员
                    if($ob->userType==1){
                        //31写入session
                        session()->set("adminuser",$ob);
                        //32跳转到后台首页
                        return redirect("admin/index");
                    }

                    return back()->with("msg","只需998一秒变管理");
                }
                return back()->with("msg","用户或密码错误");
            }
            return back()->with("msg","用户或密码错误");
    }
    //验证码
     public function captcha($tmp)
    {
        //生成验证码图片的Builder对象，配置相应属性
        $builder = new CaptchaBuilder;
        //可以设置图片宽高及字体
        $builder->build($width = 100, $height = 40, $font = null);
        //获取验证码的内容
        $phrase = $builder->getPhrase();
        // dd($phrase);
        //把内容存入session
        session()->flash('code',$phrase);
        //生成图片
        return response($builder->output())->header('Content-Type','image/jpeg');
    }
    //4 执行退出
    public function logout()
    {
        // return 12;
        // 忘记session
        session()->forget("adminuser");
        //重定向
        return redirect("admin/login");
    }

}
