@extends("admin.base.base")


<!-- 主题内容 -->
 @section('content')
	<h2 style="color:red;">网站管理后台</h2>
		<button onclick="Modal.alert(
		  {
		    msg: '内容',
		    title: '标题',
		    btnok: '确定',
		    btncl:'取消'
		  });">12314
		</button>

			
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
          <form id="fid" class="form-inline">
             
          </form>
        
        </section><!-- /.content -->

@endsection
<!-- 结尾内容 -->
@section('myscript')
	<script type="text/javascript">
      //js函数 实现select option节点的加载 
      function loadDistrict(upid){
        $.ajax({
          url:"{{ URL('admin/district/') }}"+"/"+upid,
          type:"get",
          dataType:"json",
          success:function (data){
            // alert(data);
            if(data.length==0){
              return;
            }

            var select = "<select class='form-contorl'>";
            select +="<option value='-2'>-请选择-</option>";
            for(var i=0;i<data.length;i++){
              select +="<option value='"+data[i].id+"'>"+data[i].name+"</option>";
            }
            select +="</select>";


            //select option 新产生的节点对象 添加到form表单中 
            // $("#fid").append(select);

            //高版本jquery不支持live 事件委派
            // $("select").live("change",function (){   });

            
            $(select).change(function (){
                // alert(123);
                //清空后面所有的select节点
                $(this).nextAll("select").remove();

                var id = $(this).find("option:selected").val()
                // alert(id);
                loadDistrict(id);

            }).appendTo('#fid');  
          }
        });
      }

      loadDistrict(0);

  </script>

	
@endsection