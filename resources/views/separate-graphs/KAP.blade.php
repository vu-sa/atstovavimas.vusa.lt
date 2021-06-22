@extends('separate-graphs.template')

@section("graph-title")
<title>KAP schema</title>
@endsection

@section("graph")
    @include("graphs.KAP")
@endsection