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
                <form action="{{ URL('admin/xiangqing') }}" role="form" class="form-horizontal" method="post" enctype="multipart/form-data">
                  <input type="hidden" name="_token" value="{{ csrf_token() }}">
                  <div class="box-body">
                    @if(session('msg'))
                       <p style="color:red;margin-left:300px;" >{{ session('msg') }}</p>
                    @else

                    @endif
                    <!-- 获取商品id -->
                    <div class="form-group">
                      <label  class="col-sm-2 control-label">商品id不可更改哦</label>
                      <!-- <div class="col-sm-4">
                        <select  name="cid" class="form-control">
                          <option value="">---- 请选择 ----</option>
                          @foreach($list as $typeTable)
                          <option name="{{ $typeTable->goodsId }}">{{ $typeTable->goodsqiname }}</option>
                          @endforeach
                        </select>
                      </div> -->
                      <div class="col-sm-4">
                        @foreach($list as $value)
                        <input type="text" name="goodsId" value="{{ $value->goodsId }}">
                        @endforeach
                      </div>
                    </div>
                    <!-- 获取商品名 -->
                    <div class="form-group">
                      <label  class="col-sm-2 control-label">商品名不可更改哦</label>
                      <!-- <div class="col-sm-4">
                        <select  name="cid" class="form-control">
                          <option value="">---- 请选择 ----</option>
                          @foreach($list as $typeTable)
                          <option name="{{ $typeTable->goodsId }}">{{ $typeTable->goodsqiname }}</option>
                          @endforeach
                        </select>
                      </div> -->
                      <div class="col-sm-4">
                        @foreach($list as $value)
                        <input type="text" name="goodsqiname" value="{{ $value->goodsqiname }}">
                        @endforeach
                      </div>
                    </div>

                    <div class="form-group">
                      <label  class="col-sm-2 control-label">版本</label>
                      <div class="col-sm-4">
                        <input type="text" name="goodsTypes" class="form-control">
                      </div>
                    </div>
                     <div class="form-group">
                      <label  class="col-sm-2 control-label">版本信息</label>
                      <div class="col-sm-4">
                        <input type="text" name="goodsMassage" class="form-control">
                      </div>
                    </div>
                     <div class="form-group">
                      <label  class="col-sm-2 control-label">颜色</label>
                      <div class="col-sm-4">
                        <input type="text" name="goodsColor" class="form-control">
                      </div>
                    </div>
                    <div class="form-group">
                      <label  class="col-sm-2 control-label">图片</label>
                      <div class="col-sm-4">
                        <!-- <input type="text" name="goodsPic" class="form-control"> -->
                        <input type="file" name="goodsPic">
                      </div>
                    </div>
                     <div class="form-group">
                      <label  class="col-sm-2 control-label">价格</label>
                      <div class="col-sm-4">
                        <input type="text" name="goodsPrice" class="form-control">
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