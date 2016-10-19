<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class XiangqController extends Controller
{
    // show create store edit update destroy
    //1 查看所有
	public function index(Request $request)
	{
		 //1 获得一个连接的对象 
        $db = \DB::table("user");
        // dd($db);
        //2 封装搜索条件
        $where = [];   
        if($request->has('name')){
            $name = $request->input('name');
            $where['name'] = $name;
            $list = $db->where('userName', 'like', "%{$name}%")->paginate(6);//实现过滤 控制器
        }else{
        	//3 分页 
        	//数据 
       		$list = $db->paginate(6);
        }  
        //加载stu目录下的index模板 并且将$list数据添加到list中
		return view("待定")->with(["list"=>$list])->with(["where"=>$where]);
	}
    //2 查看单条 
	public function show($id)
	{
        // dd($id);
        $db = \DB::table("goodsinfo")->where("goodsId",$id)->get();
        // dd($db);
        return view("admin.xiangq.xiangq")->with(["db"=>$db]);

        // dd($db);
	}
    //3 添加表单
    public function createjia($id)
	{
	    $list = \DB::table("goodsinfo")->where('goodsId',$id)->get();
        $arr = $list->toArray();
         // dd($arr);
        return view("admin.xiangq.add")->with('list',$arr);
        // dd($id);
	}

    //4 执行添加 
    public function store(Request $request)
	{
        // dd($request);
        if(!$request->has("goodsId","goodsqiname","goodsTypes","goodsMassage","goodsColor","goodsPrice")){
            return back()->with('msg','请输入完整信息');
        } 
        // return 'aa';		//获得指定的下标对应的值 
		$data = $request->only("goodsId","goodsqiname","goodsTypes","goodsMassage","goodsColor","goodsPic","goodsPrice");
		// dd($data);
        //图片信息
        
        if($request->file("goodsPic")){
            // return 34;

            //获取上传信息
            $file = $request->file("goodsPic");
            // dd($file);
            //确认上传的文件是否成功
            if($file->isValid()){
                $picname = $file->getClientOriginalName(); //获取上传原文件名
                $ext = $file->getClientOriginalExtension(); //获取上传文件名的后缀名
                //执行移动上传文件
                $filename=time().rand(1000,9999).".".$ext;
                $data['goodsPic'] = $filename;
                $file->move("./phoneImg/",$filename);
            }
        }
        // return "ok";
		//2 写入数据库
		$id = \DB::table("goodsinfo")->insertGetid($data);//执行添加返回自增ID号
		  //3 判断是否添加成功
        if($id>0){
            return redirect("admin/zhuan");
        }else{
            return "添加失败";
        }
	}

    //5 修改表单
    public function edit($id)
	{
        // dd($id);
		// return "修改表单";
		 //1 获得需要修改的数据
        $db = \DB::table("goodsinfo")->where('id',$id)->first();//获得单条信息
        // dd($db);
        //2 加载修改表单
        return view("admin.xiangq.edit")->with('list',$db);
	}

    //6 执行修改 
    public function update(Request $request,$id)
	{
		// return 12;
        // dd($request);
		 //1 接收表单提交的值 
        $data = $request->only("goodsId","goodsqiname","goodsTypes","goodsMassage","goodsColor","goodsPic","goodsPrice");
        // dd($data);
        $file = $request->file("goodsPic");
        // dd($file);
        if($request->file("goodsPic")){
            // return 34;

            //获取上传信息
            $file = $request->file("goodsPic");
            // dd($file);
            //确认上传的文件是否成功
            if($file->isValid()){
                $picname = $file->getClientOriginalName(); //获取上传原文件名
                $ext = $file->getClientOriginalExtension(); //获取上传文件名的后缀名
                //执行移动上传文件
                $filename=time().rand(1000,9999).".".$ext;
                $data['goodsPic'] = $filename;
                $file->move("./phoneImg/",$filename);
            }
        }
        // return 213;
        //2 执行修改 
        \DB::table("goodsinfo")->where("id",$id)->update($data);
        //3 跳
        return redirect("admin/goods");
	}

    //7 执行删除
    public function destroy($id)
	{
        // return 12;
		//执行删除
		\DB::table('goodsinfo')->where('id',$id)->delete();
		//跳转
		return redirect("admin/goods");
	}
	// 8执行成功后的跳转
	public function zhuan()
	{
		// return 'lkjlkjlkj';
		return view('待定');
	}
}
