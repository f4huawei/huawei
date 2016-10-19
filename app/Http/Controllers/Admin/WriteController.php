<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class WriteController extends Controller
{
     public function index(Request $request)
  	{
  		 //1 获得一个连接的对象 
          $db = \DB::table("indexpic");
          $where = [];   
          if($request->has('btitle')){
              $btitle = $request->input('btitle');
              $where['btitle'] = $btitle;
              $list = $db->where('btitle', 'like', "%{$btitle}%")->paginate(6);//实现过滤 控制器
          }else{
          	//3 分页 
          	//数据 
         		$list = $db->paginate(6);
          }  
          //加载stu目录下的index模板 并且将$list数据添加到list中
          // return 2453;
  		return view("admin.indexpic.indexpic")->with(["list"=>$list])->with(["where"=>$where]);
  	}
  	//添加信息
  	 public function create()
    {
        return view("admin.indexpic.add");
    }

     // 执行添加 
    public function store(Request $request)

    {
    	// return 2435;
       // 判断输入的信息是否存在
        // dd(!$request->has("cid","goodsName","shopPrice","Img","goodsStock","isOnsale","desCription"));
        if(!$request->has("btitle","stitle","url")){
            return back()->with('msg','请输入完整信息');
        } 
        //获得指定的下标对应的值 
        $data = $request->only("btitle","stitle","photo","url");
        //图片信息

        if($request->file("photo")){

            //获取上传信息
            $file = $request->file("photo");
            // dd($file);
            //确认上传的文件是否成功
            if($file->isValid()){
                $picname = $file->getClientOriginalName(); //获取上传原文件名
                $ext = $file->getClientOriginalExtension(); //获取上传文件名的后缀名
                //执行移动上传文件
                $filename=time().rand(1000,9999).".".$ext;
                $data['photo'] = $filename;
                $file->move("./phoneImg/",$filename);
            }
        }
        // dd($data);
        //2 写入数据库
        $id = \DB::table("indexpic")->insertGetid($data);//执行添加返回自增ID号
        // dd($id);
          //3 判断是否添加成功
        if($id>0){
            return redirect("admin/write");
            // return "OK";
        }else{
            return "添加失败";

        }
    }

      // 修改表单
    public function edit($id)
    {
        // dd($id);
        // return "修改表单";
        //1 获得需要修改的数据
       	$list = \DB::table("indexpic")->where('id',$id)->first();
        // dd($list);
        //2 加载修改表单
        return view("admin.indexpic.edit")->with(["list"=>$list]);
    }

    // 执行修改 
    public function update(Request $request,$id)

    {
        // return "OK";
        //  //1 接收表单提交的值 
        $data = $request->only("stitle","btitle","url");

        // dd($data);
        // //获取上传信息
        $file = $request->file("photo");
        // dd($file);
        // // 确认上传的文件是否成功
        if($file->isValid()){
            $picname = $file->getClientOriginalName(); //获取上传原文件名
            $ext = $file->getClientOriginalExtension(); //获取上传文件名的后缀名
            //执行移动上传文件
            $filename=time().rand(1000,9999).".".$ext;
            $data['photo'] = $filename;
            $file->move("./phoneImg/",$filename);
        }
         //2 执行修改 
        \DB::table("indexpic")->where("id",$id)->update($data);
        // return 555;
        //3 跳
        return redirect("/admin/write");
    }

     // 执行删除
    public function destroy($id)
	{
		//执行删除
		\DB::table('indexpic')->where('id',$id)->delete();
		//跳转
		return redirect("admin/write");
        // return "删除成功";
	}
}
