@extends('separate-graphs.template')

@section("graph-title")
<title>VU schema</title>
@endsection

@section("graph")
    @include("graphs.VU")
@endsection