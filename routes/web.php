<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

// 实验ajax
Route::get("/ajax",function(){
	return view("admin.ajax");
});


//前台登录路由
//登录表单
Route::get("/login","LoginController@login");
//执行登陆
Route::post("/dologin","LoginController@dologin");
//执行退出
Route::get("/logout",function(){
	session()->forget('user');
	return redirect('/');
});
//注册表单
Route::get("/enroll","EnrollController@enroll");
//执行注册
Route::resource("/doenroll","EnrollController");


Route::get('/', function () {
	return view('index');
});
//页面(查询友情链接)
Route::get("/","LinkController@index");

//前台订单表单
Route::get("/ding","DingController@ding");

// 前台手机遍历
Route::resource("/phone","PhoneController");
//前台电脑遍历
Route::resource("/computer","ComputerController");
//前台个人中心
Route::resource("/myroom","RoomController");
//前台商品购买页面
Route::get('/shopping/{id?}',"ShopController@show");
//颜色ajax
Route::get('/color',"AjaxController@color");
//内存ajax
Route::get('/massage',"AjaxController@massage");


//订单页
Route::get('/shopcar','ShopcarController@index');

Route::get('/admin',function(){
	return view('admin.login');
});
//在线客服显示视图
Route::get('/talk','TalkController@index');
Route::post('/talkup','TalkController@insert');
Route::get('/talkwith','TalkController@with');
//页面(开发者链接)
Route::get("/Kai","KaiController@Kai");
//购物车
Route::get("/car/{id}","AjaxController@car");
//购物车页面
Route::get("/carpage","AjaxController@carpage");
//删除
Route::get('/del/{aa}','AjaxController@del');
//清空购物车
Route::get('/delcar/{id}','AjaxController@delcar');






//查看验证码
// Route::get("code/{tttttmp}","DemoController@captcha");

//后台界面 需要登录才能访问的内容 
	Route::group(["prefix"=>"admin","middleware"=>"myauth"],function(){
		Route::get("/district/{upid?}","Admin\DistrictController@find");


		Route::get("index","Admin\IndexController@index");//网站后台首页

		Route::get("logout","Admin\LoginController@logout");//执行退出 

		Route::resource("stu","Admin\StuController");//管理员信息增删改查
		Route::get("jiang/{id}","Admin\JiangController@index");//降级为普通用户的
		Route::get("sheng/{id}","Admin\ShengController@index");//升级为普通用户的
		Route::resource("putong","Admin\PuController");//普通信息增删改查

		Route::resource("goods","Admin\GoodsController"); //商品管理
		Route::get("chakzhulei","Admin\ZhulsController@chaxuu");//查看主类
		Route::get("zhulei","Admin\GoodsController@tjzhulei");//添加主类
		Route::resource("zhixzhulei","Admin\ZhulsController");//执行添加主类

		Route::resource("xiangqing","Admin\XiangqController");//详情的管理
		Route::get("tJxiangQing/{id}","Admin\XiangqController@createjia");
		Route::resource("links","Admin\LinksController");	//友情连接管理	--郑勇新添加

		// Route::get("zhuan","Admin\GoodsController@zhuan");	//成功后指向
		Route::get("zhuan","Admin\StuController@zhuan");//执行成功的跳转
		Route::get("on","Admin\GoodsController@onoff");
		Route::post("change","Admin\GoodsController@doonoff");
	});

//1 登录表单 
	Route::get("admin/login","Admin\LoginController@login");
//2 执行登录 
	Route::post("admin/dologin","Admin\LoginController@dologin");
//3 验证码
	Route::get("admin/captcha/{tmp}","Admin\LoginController@captcha");
