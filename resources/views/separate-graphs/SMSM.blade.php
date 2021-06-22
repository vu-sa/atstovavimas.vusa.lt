@extends('separate-graphs.template')

@section("graph-title")
<title>ŠMSM schema</title>
@endsection

@section("graph")
    @include("graphs.ŠMSM")
@endsection