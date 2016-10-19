@extends("admin.base.base")

@section("content")
     <!-- Content Header (Page header) -->
        <section class="content-header">
          <h1>
            <span class="glyphicon glyphicon-calendar"></span>
            类别信息管理
           
          </h1>
          <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i> 首页</a></li>
            <li><a href="#">类别信息管理</a></li>
            <li class="active">添加类别信息</li>
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
                  <span class="glyphicon glyphicon-plus"></span><h3 class="box-title">添加类别信息</h3>
                </div><!-- /.box-header -->
                <!-- form start -->
                <form action="{{ URL('admin/putong/') }}/{{ $vo->id }}" role="form" class="form-horizontal" method="post">
                  <input type="hidden" name="_token" value="{{ csrf_token() }}">
                  <input type="hidden" name="_method" value="put">
                  <div class="box-body">
                    <div class="form-group">
                      <label  class="col-sm-2 control-label">姓名</label>
                      <div class="col-sm-4">
                        <input type="text" name="userName" value="{{ $vo->userName }}" class="form-control">
                      </div>
                    </div>
                    <div class="form-group">
                      <label  class="col-sm-2 control-label">密码</label>
                      <div class="col-sm-4">
                        <input type="password" name="userPass" value="{{ $vo->userPass }}" class="form-control">
                      </div>
                    </div>
                    <div class="form-group">
                      <label  class="col-sm-2 control-label">性别</label>
                      <div class="col-sm-4">
                        <input type="radio" name="userSex" value="1" {{ ($vo->userSex==1)? "checked":"" }}>男

                        <input type="radio" name="userSex" value="0" {{ ($vo->userSex==0)? "checked":"" }}>女
                      </div>
                    </div>
                    <div class="form-group">
                      <label  class="col-sm-2 control-label">电话</label>
                      <div class="col-sm-4">
                        <input type="text" name="userPhone" value="{{ $vo->userPhone }}" class="form-control">
                      </div>
                    </div>
                    <div class="form-group">
                      <label  class="col-sm-2 control-label">地址</label>
                      <div class="col-sm-4">
                        <input type="text" name="userAddress" value="{{ $vo->userAddress }}" class="form-control">
                      </div>
                    </div>


                    <div class="checkbox">
                      <label>
                        <input type="checkbox"> 是否启用
                      </label>
                    </div>
                  </div><!-- /.box-body -->

                  <div class="box-footer">
                    <button type="submit" class="btn btn-primary">修改</button>
                    <button type="submit" class="btn btn-primary">重置</button>
                  </div>
                </form>
              </div><!-- /.box -->
          

             
            </div><!--/.col (left) -->
          
          </div>   <!-- /.row -->
        </section><!-- /.content -->
    
     
@endsection