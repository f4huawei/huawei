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
                 @foreach($db as $vo)
                <form action='{{ URL("admin/goods/$vo->id") }}' role="form" class="form-horizontal" method="post" enctype="multipart/form-data">
                @endforeach  
                  <input type="hidden" name="_method" value="put">  
                  <input type="hidden" name="_token" value="{{ csrf_token() }}">
                  <div class="box-body">
                   
                    <!-- <div class="form-group">
                      <label  class="col-sm-2 control-label">类别</label>
                      <div class="col-sm-4">
                        <input type="text" name="cid" value="{{ $vo->name }}" class="form-control" >
                      </div>
                    </div> -->
                    
                    <div class="form-group">
                      <label  class="col-sm-2 control-label">商品名</label>
                      <div class="col-sm-4">
                        <input type="text" name="goodsName" value="{{ $vo->goodsName }}" class="form-control">
                      </div>
                    </div>
                    <div class="form-group">
                      <label  class="col-sm-2 control-label">价格</label>
                      <div class="col-sm-4">
                        <input type="text" name="shopPrice" value="{{ $vo->shopPrice }}" class="form-control">
                      </div>
                    </div>
                    <div class="form-group">
                      <label  class="col-sm-2 control-label">上传图片</label>
                      <div class="col-sm-4">
                        <input type="file" name="Img">
                      </div>
                    </div>
                    <div class="form-group">
                      <label  class="col-sm-2 control-label">库存</label>
                      <div class="col-sm-4">
                        <input type="text" name="goodsStock" value="{{ $vo->goodsStock }}" class="form-control">
                      </div>
                    </div>
                    <div class="form-group">
                     <label  class="col-sm-2 control-label">是否上架</label>
                      <div class="col-sm-4">
                        <!-- <input type="text" name="isOnsale" class="form-control"> -->
                        <input type="radio" name="isOnsale" value="1" id="up" checked="checked"/><label for="up">上架</label>
                        <input type="radio" name="isOnsale" value="2" id="down"/><label for="down">下架</label>
                      </div>
                    </div>
                    <!-- <div class="form-group">
                      <label  class="col-sm-2 control-label">是否放入回收站</label>
                      <div class="col-sm-4">
                        <input type="text" name="isBin" value="{{ $vo->isBin }}" class="form-control">
                      </div>
                    </div> -->
                    <div class="form-group">
                      <label  class="col-sm-2 control-label">描述</label>
                      <div class="col-sm-4">
                        <input type="text" name="desCription" value="{{ $vo->desCription }}" class="form-control">
                      </div>
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