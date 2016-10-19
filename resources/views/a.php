<?php
public function Money(Request $request)
    {   
        //添加订单收货地址
        $gid = $request->id;
        $price = Skus::where("id",$gid)->first()->price;
        $list = $request->dis;
        $id = $list[0];
        $upid = $list[1];
        $cid = $list[2];
        $data = array();
        $data['goods_id'] = $gid;
        $data['province'] = \DB::table('district')->where('id',$id)->first()->name;
        $data['city'] = \DB::table('district')->where('id',$upid)->first()->name;
        $data['district']= \DB::table('district')->where('id',$cid)->first()->name;
        if (isset($list[3])){
        $data['address']= \DB::table('district')->where('id',$list[3])->first()->name;   
        }
        $data['user_id'] = session()->get("user")->id;
        $data['order_status'] = 0;
        $data['goods_num'] = 2;
        $data['del_name'] = $request->del_name;
        $data['phone'] = $request->phone;
        $data['ctime'] = date("Y-m-d H:i:s",time());
        // Orders::insert($data);
        $ppid = Orders::insertGetId($data);
      // dd($ppid);
        return view('home.goods.pay')->with(['data'=>$data])->with(['price'=>$price])->with(['ppid'=>$ppid]);
    }