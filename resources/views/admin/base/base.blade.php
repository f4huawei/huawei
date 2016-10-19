<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>后台主页</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <!-- Bootstrap 3.3.5 -->
    <link rel="stylesheet" href="{{ asset('admins/bootstrap/css/bootstrap.min.css') }}">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <!-- Ionicons -->
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="{{ asset('admins/dist/css/AdminLTE.min.css') }}">
    <!-- AdminLTE Skins. Choose a skin from the css/skins
         folder instead of downloading all of them to reduce the load. -->
    <link rel="stylesheet" href="{{ asset('admins/dist/css/skins/_all-skins.min.css') }}">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body class="hold-transition skin-blue sidebar-mini">
    <div class="wrapper">
      <!-- 头部开始 31-279 -->
      <header class="main-header">
        <!-- Logo -->
        <a href="../../index2.html" class="logo">
          <!-- mini logo for sidebar mini 50x50 pixels -->
          <span class="logo-mini"><b>兄</b>弟连</span>
          <!-- logo for regular state and mobile devices -->
          <span class="logo-lg"><b>网站管理</b>后台</span>
        </a>
        <!-- Header Navbar: style can be found in header.less -->
        <nav class="navbar navbar-static-top" role="navigation">
          <!-- Sidebar toggle button-->
          <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </a>
          <div class="navbar-custom-menu">
            <ul class="nav navbar-nav">
              <!-- Messages: style can be found in dropdown.less-->
              <li class="dropdown messages-menu">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <i class="fa fa-envelope-o"></i>
                  <span class="label label-success">4</span>
                </a>
                <ul class="dropdown-menu">
                  <li class="header">You have 4 messages</li>
                  <li>
                    <!-- inner menu: contains the actual data -->
                    <ul class="menu">
                      <li><!-- start message -->
                        <a href="#">
                          <div class="pull-left">
                            <img src="../../dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
                          </div>
                          <h4>
                            Support Team
                            <small><i class="fa fa-clock-o"></i> 5 mins</small>
                          </h4>
                          <p>Why not buy a new awesome theme?</p>
                        </a>
                      </li><!-- end message -->
                      <li>
                        <a href="#">
                          <div class="pull-left">
                            <img src="../../dist/img/user3-128x128.jpg" class="img-circle" alt="User Image">
                          </div>
                          <h4>
                            AdminLTE Design Team
                            <small><i class="fa fa-clock-o"></i> 2 hours</small>
                          </h4>
                          <p>Why not buy a new awesome theme?</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div class="pull-left">
                            <img src="../../dist/img/user4-128x128.jpg" class="img-circle" alt="User Image">
                          </div>
                          <h4>
                            Developers
                            <small><i class="fa fa-clock-o"></i> Today</small>
                          </h4>
                          <p>Why not buy a new awesome theme?</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div class="pull-left">
                            <img src="../../dist/img/user3-128x128.jpg" class="img-circle" alt="User Image">
                          </div>
                          <h4>
                            Sales Department
                            <small><i class="fa fa-clock-o"></i> Yesterday</small>
                          </h4>
                          <p>Why not buy a new awesome theme?</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div class="pull-left">
                            <img src="../../dist/img/user4-128x128.jpg" class="img-circle" alt="User Image">
                          </div>
                          <h4>
                            Reviewers
                            <small><i class="fa fa-clock-o"></i> 2 days</small>
                          </h4>
                          <p>Why not buy a new awesome theme?</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="footer"><a href="#">See All Messages</a></li>
                </ul>
              </li>
              <!-- Notifications: style can be found in dropdown.less -->
              <li class="dropdown notifications-menu">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <i class="fa fa-bell-o"></i>
                  <span class="label label-warning">10</span>
                </a>
                <ul class="dropdown-menu">
                  <li class="header">You have 10 notifications</li>
                  <li>
                    <!-- inner menu: contains the actual data -->
                    <ul class="menu">
                      <li>
                        <a href="#">
                          <i class="fa fa-users text-aqua"></i> 5 new members joined today
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-warning text-yellow"></i> Very long description here that may not fit into the page and may cause design problems
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-users text-red"></i> 5 new members joined
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-shopping-cart text-green"></i> 25 sales made
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-user text-red"></i> You changed your username
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="footer"><a href="#">View all</a></li>
                </ul>
              </li>
              <!-- Tasks: style can be found in dropdown.less -->
              <li class="dropdown tasks-menu">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <i class="fa fa-flag-o"></i>
                  <span class="label label-danger">9</span>
                </a>
                <ul class="dropdown-menu">
                  <li class="header">You have 9 tasks</li>
                  <li>
                    <!-- inner menu: contains the actual data -->
                    <ul class="menu">
                      <li><!-- Task item -->
                        <a href="#">
                          <h3>
                            Design some buttons
                            <small class="pull-right">20%</small>
                          </h3>
                          <div class="progress progress-xs">
                            <div class="progress-bar progress-bar-aqua" style="width: 20%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                              <span class="sr-only">20% Complete</span>
                            </div>
                          </div>
                        </a>
                      </li><!-- end task item -->
                      <li><!-- Task item -->
                        <a href="#">
                          <h3>
                            Create a nice theme
                            <small class="pull-right">40%</small>
                          </h3>
                          <div class="progress progress-xs">
                            <div class="progress-bar progress-bar-green" style="width: 40%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                              <span class="sr-only">40% Complete</span>
                            </div>
                          </div>
                        </a>
                      </li><!-- end task item -->
                      <li><!-- Task item -->
                        <a href="#">
                          <h3>
                            Some task I need to do
                            <small class="pull-right">60%</small>
                          </h3>
                          <div class="progress progress-xs">
                            <div class="progress-bar progress-bar-red" style="width: 60%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                              <span class="sr-only">60% Complete</span>
                            </div>
                          </div>
                        </a>
                      </li><!-- end task item -->
                      <li><!-- Task item -->
                        <a href="#">
                          <h3>
                            Make beautiful transitions
                            <small class="pull-right">80%</small>
                          </h3>
                          <div class="progress progress-xs">
                            <div class="progress-bar progress-bar-yellow" style="width: 80%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                              <span class="sr-only">80% Complete</span>
                            </div>
                          </div>
                        </a>
                      </li><!-- end task item -->
                    </ul>
                  </li>
                  <li class="footer">
                    <a href="#">View all tasks</a>
                  </li>
                </ul>
              </li>
              <!-- User Account: style can be found in dropdown.less -->
              <li class="dropdown user user-menu">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <img src="{{ asset('admins/dist/img/user2-160x160.jpg') }}" class="user-image" alt="User Image">
                  <span class="hidden-xs">{{ session('adminuser')->userName }}</span>
                </a>
                <ul class="dropdown-menu">
                  <!-- User image -->
                  <li class="user-header">
                    <img src="{{ asset('admins/dist/img/user2-160x160.jpg') }}" class="img-circle" alt="User Image">
                    <p>
                      {{ session('adminuser')->userName }}
                      <small>Member since Nov. 2012</small>
                    </p>
                  </li>
                  <!-- Menu Body -->
                  <li class="user-body">
                    <div class="col-xs-4 text-center">
                      <a href="#">Followers</a>
                    </div>
                    <div class="col-xs-4 text-center">
                      <a href="#">Sales</a>
                    </div>
                    <div class="col-xs-4 text-center">
                      <a href="#">Friends</a>
                    </div>
                  </li>
                  <!-- Menu Footer-->
                  <li class="user-footer">
                    <div class="pull-left">
                      <a href="#" class="btn btn-default btn-flat">Profile</a>
                    </div>
                    <div class="pull-right">
                      <a href="{{ URL('admin/logout') }}" class="btn btn-default btn-flat">退出</a>
                    </div>
                  </li>
                </ul>
              </li>
              
            </ul>
          </div>
        </nav>
      </header>
      <!-- 左侧边栏开始 281-443 -->
      <!-- Left side column. contains the logo and sidebar -->
      <aside class="main-sidebar">
        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">
          <!-- Sidebar user panel -->
          <div class="user-panel">
            <div class="pull-left image">
              <img src="{{ asset('admins/dist/img/user2-160x160.jpg') }}" class="img-circle" alt="User Image">
            </div>
            <div class="pull-left info">
              <p>{{ session('adminuser')->userName }}</p>
              <a href="#"><i class="fa fa-circle text-success"></i> 在线</a>
            </div>
          </div>
         
          <!-- sidebar menu: : style can be found in sidebar.less -->
          <ul class="sidebar-menu">
            <li class="header">主导航</li>
            <li class="treeview">
              <a href="#">

                <i class="fa fa-dashboard"></i> <span>管理员信息管理</span> <i class="fa fa-angle-left pull-right"></i>
              </a>
              <ul class="treeview-menu">
                <li><a href="{{ URL('admin/stu') }}"><i class="fa fa-circle-o"></i> 管理员主页 </a></li>
                <li><a href="{{ URL('admin/stu/create') }}"><i class="fa fa-circle-o"></i> 新增管理员 </a></li>
              </ul>
            </li>

            <li class="treeview">
              <a href="#">
                <i class="fa fa-dashboard"></i> <span>普通用户信息管理</span> <i class="fa fa-angle-left pull-right"></i>
              </a>
              <ul class="treeview-menu">
                <li><a href="{{ URL('admin/putong') }}"><i class="fa fa-circle-o"></i> 普通用户主页 </a></li>
                <li><a href="{{ URL('admin/putong/create') }}"><i class="fa fa-circle-o"></i> 新增普通用户 </a></li>

              </ul>
            </li>

            <li class="treeview">
              <a href="#">
                <i class="fa fa-files-o"></i>
                <span>商品管理</span>
                <span class="label label-primary pull-right">3</span>
              </a>
              <ul class="treeview-menu">
                <li><a href="{{ URL('admin/goods') }}"><i class="fa fa-circle-o"></i>查看商品信息</a></li>
                <li><a href="{{ URL('admin/goods/create') }}"><i class="fa fa-circle-o"></i>添加</a></li>
                <li><a href="{{ URL('admin/zhulei') }}"><i class="fa fa-circle-o"></i>添加主类</a></li>
                <!-- <li><a href="../layout/fixed.html"><i class="fa fa-circle-o"></i> Fixed</a></li>
                <li><a href="../layout/collapsed-sidebar.html"><i class="fa fa-circle-o"></i> Collapsed Sidebar</a></li>


               -->
             </ul>
            </li>

            <li class="treeview">
              <a href="#">
                <i class="fa fa-files-o"></i>
                <span>类别管理</span>
                <span class="label label-primary pull-right">2</span>
              </a>
              <ul class="treeview-menu">

                <li><a href="{{ URL('admin/chakzhulei') }}"><i class="fa fa-circle-o"></i>查看类别信息</a></li>
                <li><a href="{{ URL('admin/zhulei') }}"><i class="fa fa-circle-o"></i>添加主类</a></li>
                <!-- <li><a href="../layout/fixed.html"><i class="fa fa-circle-o"></i> Fixed</a></li>
                <li><a href="../layout/collapsed-sidebar.html"><i class="fa fa-circle-o"></i> Collapsed Sidebar</a></li>
                
               -->
              </ul>
            </li>

            <!-- <li>
              <a href="../widgets.html">
                <i class="fa fa-th"></i> <span>Widgets</span> <small class="label pull-right bg-green">new</small>
              </a>
            </li> -->

            <li class="treeview">
              <a href="#">
                <i class="fa fa-pie-chart"></i>
                <span>友情链接</span>
                <i class="fa fa-angle-left pull-right"></i>
                 <span class="label label-primary pull-right">2</span>
              </a>
              <ul class="treeview-menu">
                <li><a href="{{ URL('admin/links') }}"><i class="fa fa-circle-o"></i> 连接管理</a></li>
                <li><a href="{{ URL('admin/links/create') }}"><i class="fa fa-circle-o"></i> 添加链接</a></li>
                <!-- <li><a href="../charts/flot.html"><i class="fa fa-circle-o"></i> Flot</a></li>
                <li><a href="../charts/inline.html"><i class="fa fa-circle-o"></i> Inline charts</a></li> -->
              </ul>
            </li>

            <li class="treeview">
              <a href="#">
                <i class="fa fa-pie-chart"></i>
                <span>首页管理</span>
                <i class="fa fa-angle-left pull-right"></i>
                 <span class="label label-primary pull-right">2</span>
              </a>
              <ul class="treeview-menu">
                <li><a href="{{ URL('admin/write') }}"><i class="fa fa-circle-o"></i> 板块管理</a></li>
                <li><a href="{{ URL('admin/write/create') }}"><i class="fa fa-circle-o"></i> 添加板块</a></li>
                <!-- <li><a href="../charts/flot.html"><i class="fa fa-circle-o"></i> Flot</a></li>
                <li><a href="../charts/inline.html"><i class="fa fa-circle-o"></i> Inline charts</a></li> -->
              </ul>
            </li>

            <li class="treeview">
              <a href="{{ URL('admin/on') }}">
                <i class="fa fa-laptop"></i>
                <span>网站开关</span>
              </a>
            </li>

            <!-- <li class="treeview">
              <a href="#">
                <i class="fa fa-share"></i> <span>Multilevel</span>
                <i class="fa fa-angle-left pull-right"></i>
              </a>
              <ul class="treeview-menu">
                <li><a href="#"><i class="fa fa-circle-o"></i> Level One</a></li>
                <li>
                  <a href="#"><i class="fa fa-circle-o"></i> Level One <i class="fa fa-angle-left pull-right"></i></a>
                  <ul class="treeview-menu">
                    <li><a href="#"><i class="fa fa-circle-o"></i> Level Two</a></li>
                    <li>
                      <a href="#"><i class="fa fa-circle-o"></i> Level Two <i class="fa fa-angle-left pull-right"></i></a>
                      <ul class="treeview-menu">
                        <li><a href="#"><i class="fa fa-circle-o"></i> Level Three</a></li>
                        <li><a href="#"><i class="fa fa-circle-o"></i> Level Three</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><a href="#"><i class="fa fa-circle-o"></i> Level One</a></li>
              </ul>
            </li> -->

            <!-- <li><a href="{{ URL('admin/wirte') }}"><i class="fa fa-book"></i> <span>首页管理</span></a></li> -->
            <!-- <li class="header">LABELS</li>
            <li><a href="#"><i class="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
            <li><a href="#"><i class="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
            <li><a href="#"><i class="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li> -->

          </ul>
        </section>
        <!-- /.sidebar -->
      </aside>
      <!-- 左侧边栏结束 -->
          <!-- 主体内容开始 447-536 -->
          <!-- Content Wrapper. Contains page content -->
          <div class="content-wrapper">
            @yield("content")
          </div><!-- /.content-wrapper -->
      <!-- 主体内容结束 -->
      <!-- 页脚开始 538-544 -->
      <footer class="main-footer">
        <div class="pull-right hidden-xs">
          <b>Version</b> 2.3.0
        </div>
        <strong>Copyright &copy; 2014-2015 <a href="http://almsaeedstudio.com">Almsaeed Studio</a>.</strong> All rights reserved.
      </footer>
      <!-- 页脚结束 -->
      <!-- system modal start -->
      <div id="ycf-alert" class="modal">
        <div class="modal-dialog modal-sm">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
              <h5 class="modal-title"><i class="fa fa-exclamation-circle"></i> [Title]</h5>
            </div>
            <div class="modal-body small">
              <p>[Message]</p>
            </div>
            <div class="modal-footer" >
              <button type="button" class="btn btn-primary ok" data-dismiss="modal">[BtnOk]</button>
              <button type="button" class="btn btn-default cancel" data-dismiss="modal">[BtnCancel]</button>
            </div>
          </div>
        </div>
      </div>
      <!-- system modal end -->
      <!-- Add the sidebar's background. This div must be placed
           immediately after the control sidebar -->
      <div class="control-sidebar-bg"></div>
    </div><!-- ./wrapper -->

    <!-- jQuery 2.1.4 -->
    <script src="{{ asset('admins/plugins/jQuery/jQuery-2.1.4.min.js') }}"></script>
    <!-- Bootstrap 3.3.5 -->
    <script src="{{ asset('admins/bootstrap/js/bootstrap.min.js') }}"></script>
    <!-- Slimscroll -->
    <script src="{{ asset('admins/plugins/slimScroll/jquery.slimscroll.min.js') }}"></script>
    <!-- FastClick -->
    <script src="{{ asset('admins/plugins/fastclick/fastclick.min.js') }}"></script>

    <!-- AdminLTE App -->
    <script src="{{ asset('admins/dist/js/app.min.js') }}"></script>
    <!-- AdminLTE for demo purposes -->
    <script src="{{ asset('admins/dist/js/demo.js') }}"></script>
    <!-- 加载bootstrap的 js-->
    <script src="{{ asset('admins/plugins/fastclick/bootsp.min.js') }}"></script>
    <!-- 加载bootstrap的 HTML开始 -->
      
    <!-- 加载bootstrap的 HTML结束 -->
    @section("myscript")
    @show
  </body>
</html>
