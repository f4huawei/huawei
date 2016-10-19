<?php
  // echo 'aa';
  $list = \DB::table("goodsinfo")->select('goodsPic')->first();
  return json_encode($list);
  