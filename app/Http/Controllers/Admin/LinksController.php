<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class LinksController extends Controller
{
     public function index(Request $request)
	{
		 //1 获得一个连接的对象 
        $db = \DB::table("links");
        // dd($db);
        //2 封装搜索条件
        $where = [];   
        if($request->has('linksName')){
            $linksName = $request->input('linksName');
            $where['linksName'] = $linksName;
            $list = $db->where('linksName', 'like', "%{$linksName}%")->paginate(6);//实现过滤 控制器
        }else{
        	//3 分页 
        	//数据 
       		$list = $db->paginate(6);
        }  
        //加载stu目录下的index模板 并且将$list数据添加到list中
		return view("admin.links.links")->with(["list"=>$list])->with(["where"=>$where]);
	}

    //2 查看单条 
	public function show($id)
	{

	}
     //3 添加信息
    public function create()
    {
       return view("admin.links.add");
    }
    
    //4 执行添加 
    public function store(Request $request)

    {
       $data = $request->only("linkName","linkAddress");
       // dd($data);
       $id = \DB::table("links")->insertGetid($data);
        //判断是否添加成功
        if($id>0){
            return redirect("/admin/links");
            // return "OK";
        }else{
            return back();
        }
    }

      //5 修改表单
    public function edit($id)
    {
        // return "修改表单";
        //  //1 获得需要修改的数据
        $db = \DB::table("links")->where('id',$id)->first();
        // dd($db);
        // //2 加载修改表单
        return view("admin.links.edlk")->with(["vo"=>$db]);
    }

    //6 执行修改 
    public function update(Request $request,$id)

    {
         $data = $request->only("id","linkName","linkAddress");
         // dd($data);
          \DB::table("links")->where("id",$id)->update($data);
          return redirect("/admin/links");
       
    }

     //7 执行删除
    public function destroy($id)
	{
		//执行删除
		\DB::table('links')->where('id',$id)->delete();
		//跳转
		return redirect("admin/links");
        // return "删除成功";
	}

}
