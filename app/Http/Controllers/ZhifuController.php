<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests;

class ZhifuController extends Controller
{
    //订单页面
    public function Zhifu()
    {
    	// return 12 ;
    	return view('Zhifu');
    }
}
