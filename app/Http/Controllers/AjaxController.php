<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class AjaxController extends Controller
{
    //颜色
    public function color(Request $request)
    {
        $color = $request->goodsColor;
        $id = $request->goodsId;
        $db = \DB::table('goodsinfo')
            ->where("goodsColor","=",$color)
            ->where("goodsId","=",$id)
            ->select('goodsMassage')->get();
            // select goodsMassage from goodsinfo where goodsColor = '屎黄色' and goodsId = '1';
        return json_encode($db);

    }

    //价格
    public function massage(Request $request)
    {
        // return 2356;
        $color = $request->goodsColor;
        $id = $request->goodsId;
        $size = $request->goodsMassage;
        $jg = \DB::table('goodsinfo')
            ->where("goodsColor","=",$color)
            ->where("goodsId","=",$id)
            ->where("goodsMassage","=",$size)
            ->select('goodsinfo.*')->first();
        return json_encode($jg);

    }
    public function car($id)
    {   
        $pid= session('user')->id;
        $ob = \DB::table('goodsinfo')->where('id',$id)->first();
        // dd($ob);
        $goodsId = $ob->goodsId;
        $goodsTypes = $ob->goodsTypes;
        $goodsMassage = $ob->goodsMassage;
        $goodsColor = $ob->goodsColor;
        $goodsprice = $ob->goodsPrice;
        $xgoodsName = $ob->xgoodsName;
        // dd($xgoodsName);
        \DB::table('shopcar')->insert(
    ['uid' => $pid,'shopid'=>$id,'goodsId'=>$goodsId,'goodsTypes'=>$goodsTypes,'goosMassage'=>$goodsMassage,'goodsColor'=>$goodsColor,'goosprice'=>$goodsprice,'xgoodsName'=>$xgoodsName]
   
);
        return back();





    }
    //购物车页面
    public function carpage()
    {   
        $id = session('user')->id;
        $num = 0;
        $list = \DB::table('shopcar')->where('uid',$id)->get();
        foreach($list as $v){
            $num += $v->goosprice; 
        }
        $dd = $list[0]->shopid;
        // dd($list[0]->shopid);
        // dd($num);
        return view('shopbus')->with('list',$list)->with('num',$num)->with('dd',$dd);
    }
    public function del($aa)
    {
        \DB::table('shopcar')->where('aa',$aa)->delete();
        return back(); 

    }
    public function delcar($id)
    {
        \DB::table('shopcar')->where('uid',$id)->delete();
        return back();

    }
 
}
