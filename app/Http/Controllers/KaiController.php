<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests;

class KaiController extends Controller
{
    //订单页面
    public function Kai()
    {
    	return view('Kai');
    }
}
