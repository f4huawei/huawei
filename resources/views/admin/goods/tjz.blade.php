@extends("admin.base.base")

@section("content")
     <!-- Content Header (Page header) -->
        <section class="content-header">
          <h1>
            <span class="glyphicon glyphicon-calendar"></span>
            添加信息
           
          </h1>
          <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i> 首页</a></li>
            <li><a href="#">类别信息管理</a></li>
            <li class="active">添加信息</li>
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
                  <span class="glyphicon glyphicon-plus"></span><h3 class="box-title">添加商品信息</h3>
                </div><!-- /.box-header -->
                <!-- form start -->
                <form action="{{ URL('admin/zhixzhulei') }}" role="form" class="form-horizontal" method="post" enctype="multipart/form-data">
                  <input type="hidden" name="_token" value="{{ csrf_token() }}">
                  <div class="box-body">
                    @if(session('msg'))
                       <p style="color:red;margin-left:300px;" >{{ session('msg') }}</p>
                    @else

                    @endif
                   <!--  <div class="form-group">
                      <label  class="col-sm-2 control-label">父类</label>
                      <div class="col-sm-4">
                        <input type="text" name="pid" value="0"checked="checked" class="form-control">
                      </div>
                    </div>
                    <div class="form-group">
                      <label  class="col-sm-2 control-label">路径</label>
                      <div class="col-sm-4">
                        <input type="text" name="path" value="0"checked="checked" class="form-control">
                      </div>
                    </div> -->
                    <div class="form-group">
                      <label  class="col-sm-2 control-label">类别</label>
                      <div class="col-sm-4">
                        <input type="text" name="name" class="form-control">
                      </div>
                    </div>
                   
                    
                  </div><!-- /.box-body -->

                  <div class="box-footer">
                    <button type="submit" class="btn btn-primary">添加</button>
                    <button type="submit" class="btn btn-primary">重置</button>
                  </div>
                </form>
              </div><!-- /.box -->
          

             
            </div><!--/.col (left) -->
          
          </div>   <!-- /.row -->
        </section><!-- /.content -->
    
     
@endsection