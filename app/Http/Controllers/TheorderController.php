<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests;

class TheorderController extends Controller
{
    
        //显示页面
    public function onend($id)
    {
    	//dd($id);
        //1 获得一个连接的对象 
        // $db = \DB::table("goods")
        //     ->join('typetable','goods.cid','=','typetable.id')
        //     ->select('goods.*','typetable.name');
    	// $list = \DB::table('details')->where('yhid',$id)->get();
        $list = \DB::table("details")
            ->join('goodsinfo','details.sxid','=','goodsinfo.id')
            ->select('details.*','goodsinfo.*')
            ->get();
    	// dd($list);
        return view("Theorder")->with(["list"=>$list]);
    	// return view('Theorder',["list"=>$list]);
        // return 256;
    	//dd($list);
    }
}
