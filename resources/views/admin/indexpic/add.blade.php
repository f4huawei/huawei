@extends("admin.base.base")

@section("content")
     <!-- Content Header (Page header) -->
        <section class="content-header">
          <h1>
            <span class="glyphicon glyphicon-calendar"></span>
            添加信息
           
          </h1>
        </section>

        <!-- Main content -->
        <section class="content">
          <div class="row">
            <!-- left column -->
            <div class="col-md-12">
                    <!-- general form elements -->
              <div class="box box-primary">
                <div class="box-header with-border">
                  <span class="glyphicon glyphicon-plus"></span><h3 class="box-title">添加板块信息</h3>
                </div><!-- /.box-header -->
                <!-- form start -->
                <form action="{{ URL('admin/write') }}" role="form" class="form-horizontal" method="post" enctype="multipart/form-data">
                  <input type="hidden" name="_token" value="{{ csrf_token() }}">
                  <div class="box-body">
                    @if(session('msg'))
                       <p style="color:red;margin-left:300px;" >{{ session('msg') }}</p>
                    @else

                    @endif
                    <div class="form-group">
                      <label  class="col-sm-2 control-label">大标题</label>
                      <div class="col-sm-4">
                        <input type="text" name="btitle" class="form-control">
                      </div>
                    </div>
                    <div class="form-group">
                      <label  class="col-sm-2 control-label">小标题</label>
                      <div class="col-sm-4">
                        <input type="text" name="stitle" class="form-control">
                      </div>
                    </div>
                    <div class="form-group">
                      <label  class="col-sm-2 control-label">上传图片</label>
                      <div class="col-sm-4">
                        <input type="file" name="photo">
                      </div>
                    </div>
                    <div class="form-group">
                      <label  class="col-sm-2 control-label">链接</label>
                      <div class="col-sm-4">
                        <input type="text" name="url" class="form-control">
                      </div>
                    </div>
                    
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