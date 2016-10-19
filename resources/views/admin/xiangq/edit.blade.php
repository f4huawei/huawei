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
                <form action="{{ URL('admin/xiangqing/') }}/{{ $list->id }}" role="form" class="form-horizontal" method="post" enctype="multipart/form-data">
                  <input type="hidden" name="_token" value="{{ csrf_token() }}">
                  <input type="hidden" name="_method" value="put">
                  <div class="box-body">
                     
                    <div class="form-group">
                      <label  class="col-sm-2 control-label">商品id不可改哦</label>
                      <div class="col-sm-4">
                        <input type="text" name="goodsId" value="{{ $list->goodsId }}" class="form-control">
                      </div>
                    </div>
                     <div class="form-group">
                      <label  class="col-sm-2 control-label">版本</label>
                      <div class="col-sm-4">
                        <input type="text" name="goodsTypes" value="{{ $list->goodsTypes }}" class="form-control">
                      </div>
                    </div>
                     <div class="form-group">
                      <label  class="col-sm-2 control-label">版本信息</label>
                      <div class="col-sm-4">
                        <input type="text" name="goodsMassage" value="{{ $list->goodsMassage }}" class="form-control">
                      </div>
                    </div>
                     <div class="form-group">
                      <label  class="col-sm-2 control-label">颜色</label>
                      <div class="col-sm-4">
                        <input type="text" name="goodsColor" value="{{ $list->goodsColor }}" class="form-control">
                      </div>
                    </div>
                     <div class="form-group">
                      <label  class="col-sm-2 control-label">图片</label>
                      <div class="col-sm-4">
                        <input type="file" name="goodsPic" value="修改">
                        <!-- <img name="goodsPic" style="height:200px;" src="/phoneImg/{{$list->goodsPic}}"> -->
                      </div>
                    </div>
                     <div class="form-group">
                      <label  class="col-sm-2 control-label">价格</label>
                      <div class="col-sm-4">
                        <input type="text" name="goodsPrice" value="{{ $list->goodsPrice }}" class="form-control">
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