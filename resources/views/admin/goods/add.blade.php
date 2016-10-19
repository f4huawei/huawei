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
                <form action="{{ URL('admin/goods') }}" role="form" class="form-horizontal" method="post" enctype="multipart/form-data">
                  <input type="hidden" name="_token" value="{{ csrf_token() }}">
                  <div class="box-body">
                    @if(session('msg'))
                       <p style="color:red;margin-left:300px;" >{{ session('msg') }}</p>
                    @else

                    @endif
                    <div class="form-group">
                      <label  class="col-sm-2 control-label">类别</label>
                      <div class="col-sm-4">
                        <select  name="cid" class="form-control">
                          <option value="">---- 请选择 ----</option>
                          @foreach($list as $typeTable)
                          <option value="{{ $typeTable->id }}">{{ $typeTable->name }}</option>
                          @endforeach
                        </select>
                      </div>
                    </div>
                    <!-- <div class="form-group">
                      <label  class="col-sm-2 control-label">类名</label>
                      <div class="col-sm-4">
                        <input type="text" name="bagName" class="form-control">
                      </div>
                    </div> -->
                    <div class="form-group">
                      <label  class="col-sm-2 control-label">商品名</label>
                      <div class="col-sm-4">
                        <input type="text" name="goodsName" class="form-control">
                      </div>
                    </div>
                    <div class="form-group">
                      <label  class="col-sm-2 control-label">价格</label>
                      <div class="col-sm-4">
                        <input type="text" name="shopPrice" class="form-control">
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
                        <input type="text" name="goodsStock" class="form-control">
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
                        <input type="text" name="isBin" class="form-control">
                        <input type="radio" name="isBin" value="0" id="Y"/><label for="Y">是</label>
                        <input type="radio" name="isBin" value="1" id="N" checked="checked"/><label for="N">否</label>
                      </div>
                    </div> -->
                    <div class="form-group">
                      <label  class="col-sm-2 control-label">描述</label>
                      <div class="col-sm-4">
                        <input type="text" name="desCription" class="form-control">
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