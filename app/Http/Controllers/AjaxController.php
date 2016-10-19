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
}
