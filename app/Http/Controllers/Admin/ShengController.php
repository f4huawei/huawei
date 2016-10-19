<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class ShengController extends Controller
{
	public function index($id)
	{
		// dd($id);

		\DB::table("user")->where("id",$id)->update(['userType'=>1]);
		return redirect("/admin/putong");
	}
	
}
