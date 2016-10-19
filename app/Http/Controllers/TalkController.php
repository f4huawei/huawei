<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class TalkController extends Controller
{
	//显示视图
    public function index()
    {
    	return view('talk');
    }
    public function insert(Request $request)
    {
    	// dd($request);
    	//往表中存值
    	$data = $request->only("text","name");
    	// // // dd($data);
        $id = \DB::table('talk')->insertGetId($data);
    	return back();


    	

    }
    public function with()
    {
        $list = \DB::table('talk')->get();
        return json_encode($list);
    }
}
