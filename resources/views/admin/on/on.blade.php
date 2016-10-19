@extends("admin.base.base")

@section("content")
      <h1>网站开关</h1>
  <form action="{{ URL('admin/change') }}" method="post">
  <input type="hidden" name="_token" value="{{csrf_token()}}">
    　
      开<input type="radio" name="on" value="1" >
      　　　　
      关<input type="radio" name="on" value="0" >
      　　　
      <input type="submit" value="修改" class="btn btn-block btn-danger btn-lg" style="width:100px;" >
  </form>
@endsection