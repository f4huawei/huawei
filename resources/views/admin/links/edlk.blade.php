@extends("admin.base.base")

@section("content")
     <!-- Content Header (Page header) -->
        <section class="content-header">
          <h1>
            <span class="glyphicon glyphicon-calendar"></span>
            修改信息
           
          </h1>
          <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i> 首页</a></li>
            <li><a href="#">修改商品管理</a></li>
            <li class="active">修改信息</li>
          </ol>
        </section>

        <!-- Main content -->
        <section class="content">
          <div class="row">
            <!-- left column -->
            <div class="col-md-12">
                    <!-- general form elements -->
              <div class="box box-primary">
                <div class="box-header with-border">
                  <span class="glyphicon glyphicon-plus"></span><h3 class="box-title">修改商品信息</h3>
                </div><!-- /.box-header -->
                <!-- form start -->
                <form action='{{ URL("admin/links/{$vo->id}") }}' role="form" class="form-horizontal" method="post" >
                  <input type="hidden" name="_method" value="put">  
                  <input type="hidden" name="_token" value="{{ csrf_token() }}">
                  <div class="box-body">
                        <input type="hidden" name="id" value="{{ $vo->id }}" class="form-control">
                    <div class="form-group">
                      <label  class="col-sm-2 control-label">名称</label>
                      <div class="col-sm-4">
                        <input type="text" name="linkName" value="{{ $vo->linkName }}" class="form-control">
                      </div>
                    </div>
                    <div class="form-group">
                      <label  class="col-sm-2 control-label">链接</label>
                      <div class="col-sm-4">
                        <input type="text" name="linkAddress" value="{{ $vo->linkAddress }}" class="form-control">
                      </div>
                    
                    </div><!-- /.box-body -->

                  <div class="box-footer">
                    <button type="submit" class="btn btn-primary">确认修改</button>
                    <button type="submit" class="btn btn-primary">重置</button>
                  </div>
                </form>
              </div><!-- /.box -->
            </div><!--/.col (left) -->
          </div>   <!-- /.row -->
        </section><!-- /.content -->
    
     
@endsection