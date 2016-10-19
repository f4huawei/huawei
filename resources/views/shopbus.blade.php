<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>我的购物车</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <!-- Bootstrap 3.3.5 -->
    <link rel="stylesheet" href="{{ ('admins/bootstrap/css/bootstrap.min.css') }}">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <!-- Ionicons -->
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <!-- DataTables -->
    <link rel="stylesheet" href="{{ ('admins/plugins/datatables/dataTables.bootstrap.css') }}">
    <!-- Theme style -->
    <link rel="stylesheet" href="{{ ('admins/dist/css/AdminLTE.min.css') }}">
    <!-- AdminLTE Skins. Choose a skin from the css/skins
         folder instead of downloading all of them to reduce the load. -->
    <link rel="stylesheet" href="{{ ('admins/dist/css/skins/_all-skins.min.css') }}">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <style type="text/css">
      .btn{
        float:right;
        width:300px;
      }


    </style>
  </head>
  <body>
    <h2>我的购物车</h2>
    <a href="/delcar/{{session('user')->id}}">清空购物车</a>
    　　　
    <a href="/" style="color:orange;">首页</a>
 <table id="example2" class="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>商品</th>
                        <th>规格</th>
                        <th>颜色</th>
                        <th>价钱</th>
                        <th>操作</th>
                      </tr>
                    </thead>
                    <tbody>
                @foreach($list as $goods)      
                      <tr>
                        <td>{{ $goods->xgoodsName }}</td>
                        <td>{{ $goods->goosMassage }}　　{{ $goods->goodsTypes }}</td>
                        <td>{{ $goods->goodsColor }}</td>
                        <td>￥{{ $goods->goosprice }}元</td>
                        <td><a href="del/{{ $goods->aa }}">删除</a></td>
                      </tr>
                @endforeach
                     </tbody>
                     
                  </table>
                  
                    　　<b><p>总价：{{ $num }}</p></b>

                  
  <a href="/phone"><button class='btn btn-block btn-danger btn-lg'>继续购物</button></a>　
  <br/><br/><br/>
  <a href="/ding/{{ $dd }}"<button class='btn btn-block btn-warning btn-lg'>去结算</button></a>
</body>