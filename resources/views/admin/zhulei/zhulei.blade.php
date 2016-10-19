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
                  <!-- 搜索表单 开始-->
                  <form form-control>
                    <input type="text" name="name" >
                    <input type="submit" value="查询" >
                  </form>
                  <!-- 搜索表单  结束 -->
                  <table class="table table-bordered">
                    <tr>
                      <th style="width: 80px;text-align:center;">学号</th>
                      <th style="width: 80px;text-align:center;">父类id</th>
                      <th style="width: 80px;text-align:center;">路径</th>
                      <th style="width: 80px;text-align:center;">类名</th>
                      <th style="width: 100px;text-align:center;">操作</th>
                    </tr>
                     @foreach($data as $user)
                    <tr>
                      <td style="text-align:center;vertical-align:middle;">{{ $user->id }}</td>
                      <td style="text-align:center;vertical-align:middle;">{{ $user->pid }}</td>
                      <td style="text-align:center;vertical-align:middle;">{{ $user->path }}</td>
                      <td style="text-align:center;vertical-align:middle;">{{ $user->name }}</td>
                      <td style="text-align:center;vertical-align:middle;">
                        <a href="javascript:doDel({{ $user->id }});"><span class="glyphicon glyphicon-trash"></span></a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="/admin/stu/{{ $user->id }}/edit"><span class="glyphicon glyphicon-pencil"></span></a>
                      </td>
                    </tr>
                    @endforeach
                  </table>
                  <!-- 分页栏 -->

                  
                </div><!-- /.box-body -->
                <div class="box-footer clearfix">
                </div>
              </div><!-- /.box -->
            </div><!-- /.col -->
          </div><!-- /.row -->
        </section><!-- /.content -->
        <!-- 执行删除的js特效开始 -->
        <script type="text/javascript">
          function doDel(id){
            if(confirm('确定删除吗?')){
              // alert(id);
              //1 获得form表单节点对象
              var myform = document.myform;
              //2 设置提交方式 
              myform.action = "{{ URL('admin/stu') }}"+"/"+id;//提交地址 
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
@endsection