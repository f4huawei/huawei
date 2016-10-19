<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class StuController extends Controller
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

            $list = $db->where('userName', 'like', "%{$name}%",'and','userType','=','1')->paginate(3);//实现过滤 控制器
        }else{
        	//3 分页 
        	//数据 
       		$list = $db->where('userType','1')->paginate(3);

        }  
        //加载stu目录下的index模板 并且将$list数据添加到list中
		return view("admin.stu.index")->with(["list"=>$list])->with(["where"=>$where]);
	}
    //2 查看单条 
	public function show($id)
	{

	}
    //3 添加表单
    public function create()
	{
		return view("admin.stu.add");
	}

    //4 执行添加 
    public function store(Request $request)
	{
		//获得指定的下标对应的值 
		$data = $request->only("userName","userPass","userSex","userPhone","userAddress");
		// dd($data);
		//2 写入数据库
		$id = \DB::table("user")->insertGetid($data);//执行添加返回自增ID号
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
		// return "修改表单";
		 //1 获得需要修改的数据
        $stu = \DB::table("user")->where('id',$id)->first();//获得单条信息
        // dd($stu);
        //2 加载修改表单
        return view("admin.stu.edit",['vo'=>$stu]);
	}

    //6 执行修改 
    public function update(Request $request,$id)
	{
		// return 12;
		 //1 接收表单提交的值 
        $data = $request->only("userName","userPass","userSex","userPhone","userAddress");

        //2 执行修改 
        \DB::table("user")->where("id",$id)->update($data);
        //3 跳
        return redirect("/admin/stu");
	}

    //7 执行删除
    public function destroy($id)
	{
		//执行删除
		\DB::table('user')->where('id',$id)->delete();
		//跳转
		return redirect("admin/stu");
	}
	// 8执行成功后的跳转
	public function zhuan()
	{
		// return 'lkjlkjlkj';
		return view('admin.stu.zhuan');
	}
}
