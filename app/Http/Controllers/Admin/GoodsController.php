<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class GoodsController extends Controller
{
    //商品管理后台页面
    public function index(Request $request)
    {
        
         //1 获得一个连接的对象 
        $db = \DB::table("goods")
            ->join('typetable','goods.cid','=','typetable.id')
            ->select('goods.*','typetable.name');

        // dd($db);
        //2 封装搜索条件
        $where = [];   
        if($request->has('name')){
            $name = $request->input('name');
            $where['name'] = $name;

            $list = $db->where('goodsName', 'like', "%{$name}%")->paginate(5);//实现过滤 控制器
        }else{
            //3 分页 
            //数据 
            $list = $db->paginate(5);
        }  

        //加载stu目录下的index模板 并且将$list数据添加到list中
        return view("admin.goods.goods")->with(["list"=>$list])->with(["where"=>$where]);
    }

    //2 查看单条 
	public function show($id)
	{

	}
     //3 添加信息
    public function create()
    {
        //1.链接数据库查询所属类(下拉)
        $list = \DB::table("typeTable")->where('pid','0')->get();
        return view("admin.goods.add")->with('list',$list);
        // return 4444;
    }
    //添加主类
    public function tjzhulei()
    {
        // return "tianjia";
        return view("admin.goods.tjz");
    }

   
    //4 执行添加 
    public function store(Request $request)

    {
        // 判断输入的信息是否存在
        // dd(!$request->has("cid","goodsName","shopPrice","Img","goodsStock","isOnsale","desCription"));
        if(!$request->has("cid","goodsName","shopPrice","goodsStock","isOnsale","desCription")){
            return back()->with('msg','请输入完整信息');
        } 
        //获得指定的下标对应的值 
        $data = $request->only("cid","goodsName","shopPrice","Img","goodsStock","isOnsale","desCription");
        //图片信息

        if($request->file("Img")){

            //获取上传信息
            $file = $request->file("Img");
            // dd($file);
            //确认上传的文件是否成功
            if($file->isValid()){
                $picname = $file->getClientOriginalName(); //获取上传原文件名
                $ext = $file->getClientOriginalExtension(); //获取上传文件名的后缀名
                //执行移动上传文件
                $filename=time().rand(1000,9999).".".$ext;
                $data['Img'] = $filename;
                $file->move("./phoneImg/",$filename);
            }
        }
        // dd($data);
        //2 写入数据库
        $id = \DB::table("goods")->insertGetid($data);//执行添加返回自增ID号
        // dd($id);
          //3 判断是否添加成功
        if($id>0){
            return redirect("admin/goods");
            // return "OK";
        }else{
            return "添加失败";
        }
    }

      //5 修改表单
    public function edit($id)
    {
        // dd($id);
        // // return "修改表单";
        //  //1 获得需要修改的数据
        $db = \DB::table("goods")
            ->join('typeTable','goods.cid','=','typeTable.id')
            ->select('goods.*','typeTable.name')
            ->get();
        // dd($db);
        //添加where条件
        $list= $db->where('id','=',$id);
         // dd($list);
        //2 加载修改表单
        return view("admin.goods.edit")->with(["db"=>$list]);
    }

    //6 执行修改 
    public function update(Request $request,$id)

    {
        // return "OK";
        //  //1 接收表单提交的值 
        $data = $request->only("goodsName","shopPrice","Img","goodsStock","isOnsale","desCription");

        // dd($data);
        // //获取上传信息
        $file = $request->file("Img");
        // dd($file);
        // // 确认上传的文件是否成功
        if($file->isValid()){
            $picname = $file->getClientOriginalName(); //获取上传原文件名
            $ext = $file->getClientOriginalExtension(); //获取上传文件名的后缀名
            //执行移动上传文件
            $filename=time().rand(1000,9999).".".$ext;
            $data['Img'] = $filename;
            $file->move("./phoneImg/",$filename);
        }
         //2 执行修改 
        \DB::table("goods")->where("id",$id)->update($data);
        // return 555;
        //3 跳
        return redirect("/admin/goods");
    }

    //7 执行删除
    public function destroy($id)
	{
		//执行删除
		\DB::table('goods')->where('id',$id)->delete();
		//跳转
		return redirect("admin/goods");
        // return "删除成功";
	}
	// 8执行成功后的跳转
	public function zhuan()
	{
		// return 'lkjlkjlkj';
		return view('admin.goods.zhuan');
	}

        //网站开关显示视图
    public function onoff()
    {
        return view('admin.on.on');
    }
    public function doonoff(Request $request)
    {
    // $data = $request;
    $data = $request->only('on');
    // dd($data);
       \DB::table("peizhi")->where("id",'1')->update($data);
       return back();
       // dd($v);
    }

}
