<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class ShopCarController extends Controller
{
    //显示购买详情页面
	public function index()
	{
		// return 12;
		//显示订单页
		return view('/shopcar');
	}

}
