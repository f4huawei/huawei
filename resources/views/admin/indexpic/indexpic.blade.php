@extends("admin.base.base")

@section("content")
	    <!-- Content Header (Page header) -->
        <section class="content-header">
          <h1>
            链接信息
            <small>链接管理</small>
          </h1>
          <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
            <li><a href="#">Tables</a></li>
            <li class="active">Simple</li>
          </ol>
        </section>

        <!-- Main content -->
        <section class="content">
          <div class="raow">
            <div class="col-md-12">
              <div class="box">
                <div class="box-header with-border">
                  <span class="glyphicon glyphicon-th"></span><h3 class="box-title">链接信息管理</h3>
                </div><!-- /.box-header -->
                <div class="box-body">
                   <!-- 搜索表单 开始
                  <form form-control>
                    <input type="text" name="name" >
                    <input type="submit" value="查询" >
                  </form>
                  搜索表单  结束 -->
                  <table class="table table-bordered">
                    <tr>
                      <th style="width: 80px;text-align:center;">序号</th>
                      <th style="width: 80px;text-align:center;">图片</th>
                      <th style="width: 80px;text-align:center;">链接地址</th>
                      <th style="width: 100px;text-align:center;">大标题</th>
                      <th style="width: 100px;text-align:center;">小标题</th>
                      <th style="width: 100px;text-align:center;">操作</th>
                    </tr>
                    @foreach($list as $indexpic)
                    <tr>
                      <td style="text-align:center;vertical-align:middle;">{{ $indexpic->id }}</td>
                      <td style="text-align:center;vertical-align:middle;">{{ $indexpic->photo }}</td>
                      <td style="text-align:center;vertical-align:middle;">{{ $indexpic->url }}</td>
                      <td style="text-align:center;vertical-align:middle;">{{ $indexpic->btitle }}</td>
                      <td style="text-align:center;vertical-align:middle;">{{ $indexpic->stitle }}</td>
                      
                      <td style="text-align:center;vertical-align:middle;">
                        <a href="javascript:doDel({{ $indexpic->id }});"><span class="glyphicon glyphicon-trash"></span></a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="/admin/write/{{ $indexpic->id }}/edit"><span class="glyphicon glyphicon-pencil"></span></a>
                      </td>
                    </tr>
                    @endforeach
                  </table>
                  <!-- 分页栏 -->
                  {!! $list->appends($where)->render() !!}
                </div><!-- /.box-body -->
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
              myform.action = "{{ URL('admin/write') }}"+"/"+id;//提交地址 
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