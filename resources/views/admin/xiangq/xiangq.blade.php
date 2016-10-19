@extends("admin.base.base")

@section("content")
      <!-- Content Header (Page header) -->
        <section class="content-header">
          <h1>
            信息输出表
            <small>表格管理</small>
          </h1>
          <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
            <li><a href="#">Tables</a></li>
            <li class="active">Simple</li>
          </ol>
        </section>
        <!-- Main content -->
        <section class="content">
          <div class="row">
            <div class="col-md-12">
              <div class="box">
                <div class="box-header with-border">
                  <span class="glyphicon glyphicon-th"></span><h3 class="box-title">学生信息管理</h3>
                </div><!-- /.box-header -->
                <div class="box-body">

                 
                  <table class="table table-bordered">
                    <tr>
                      <th style="width: 80px;text-align:center;">详情id</th>
                      <th style="width: 80px;text-align:center;">商品id</th>
                      <th style="width: 80px;text-align:center;">版本</th>
                      <th style="width: 80px;text-align:center;">版本信息</th>
                      <th style="width: 80px;text-align:center;">颜色</th>
                      <th style="width: 80px;text-align:center;">图片</th>
                      <th style="width: 80px;text-align:center;">价格</th>
                      <th style="width: 80px;text-align:center;">操作</th>
                      
                    @foreach($db as $user)

                    <tr>
                      <td style="text-align:center;vertical-align:middle;">{{ $user->id }}</td>
                      <td style="text-align:center;vertical-align:middle;">{{ $user->goodsId }}</td>
                      <td style="text-align:center;vertical-align:middle;">{{ $user->goodsTypes }}</td>
                      <td style="text-align:center;vertical-align:middle;">{{ $user->goodsMassage }}</td>
                      <td style="text-align:center;vertical-align:middle;">{{ $user->goodsColor }}</td>
                      <td class="dropdown user user-menu" style="text-align:center;vertical-align:middle;">
                        <img  style="height:100px;width:80px;"src="{{ asset('phoneImg') }}/{{ $user->goodsPic }} " class="user-image" alt="User Image" >
                      </td>
                      <td style="text-align:center;vertical-align:middle;">{{ $user->goodsPrice }}</td>
                     
                      <td style="text-align:center;vertical-align:middle;">
                        <a href="/admin/tJxiangQing/{{ $user->goodsId }}"><span class="glyphicon glyphicon-plus"> 添加详情</span></a>
                        <br>
                        <a href="javascript:doDel({{ $user->id }});"><span class="glyphicon glyphicon-trash"> 删除详情</span></a>
                        <br>
                        <a href="/admin/xiangqing/{{ $user->id }}/edit"><span class="glyphicon glyphicon-pencil"> 修改详情</span></a>
                      </td>
                    </tr>
                    @endforeach
                   
                  </table>
                <!-- 执行删除的js特效开始 -->
                <script type="text/javascript">
                  function doDel(id){
                    if(confirm('确定删除吗?')){
                      // alert(id);
                      //1 获得form表单节点对象
                      var myform = document.myform;
                      //2 设置提交方式 
                      myform.action = "{{ URL('admin/xiangqing') }}"+"/"+id;//提交地址 
                      myform.submit();//执行表单提交
                    }
                  }
                </script>
                <!-- 执行删除的js特效结束 -->
                <!-- 执行删除开始 -->
                <form action="" method="post" name="myform">
                  <input type="hidden" name="_token" value="{{ csrf_token()}}">
                  <input type="hidden" name="_method" value="delete">
                </form>
                <!-- 执行删除结束 -->
                 
                </div><!-- /.box-body -->
                
              </div><!-- /.box -->
            </div><!-- /.col -->
          </div><!-- /.row -->
        </section><!-- /.content -->
        
@endsection