<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class ShopController extends Controller
{
    //显示购买详情页面
	public function show($id)
	{
		$db = \DB::table("goodsinfo")
            ->join('goods','goodsinfo.goodsId','=','goods.id')
            ->select('goodsinfo.*','goods.goodsName','goods.Img');
        $list = $db->where("goodsId",$id)->get();
        // dd($list);
        $attr=[];	//存放颜色的数组
         foreach ($list as $v) {
            $attr[] = $v->goodsColor;
        }
        $attr = array_unique($attr);//去除重复

        $shos=[];   //存放id的数组
         foreach ($list as $p) {
            $shos[] = $p->goodsId;
        }
        $shos = array_unique($shos);//去除重复

        $na=[];   //存放名字的数组
         foreach ($list as $a) {
            $na[] = $a->goodsName;
        }
        $na = array_unique($na);//去除重复

        $xh=[];   //存放型号的数组
         foreach ($list as $x) {
            $xh[] = $x->goodsMassage;
        }
        $xh = array_unique($xh);//去除重复

        $tp=[];   //存放型号的数组
         foreach ($list as $s) {
            $tp[] = $s->goodsTypes;
        }
        $tp = array_unique($tp);//去除重复

        $pic=[];   //存放图片的数组
         foreach ($list as $d) {
            $pic[] = $d->Img;
        }
        $pic = array_unique($pic);//去除重复
		//带着数据显示购买页
		 return view('shop')->with(['list'=>$list])->with(["attr"=>$attr])->with(['na'=>$na])->with(['xh'=>$xh])->with(['tp'=>$tp])->with(['pic'=>$pic])->with(['shos'=>$shos]);
	}
}
