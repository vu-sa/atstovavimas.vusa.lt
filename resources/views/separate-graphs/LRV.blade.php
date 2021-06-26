@extends('separate-graphs.template')

@section("graph-title")
<title>Vyriausybės schema</title>
@endsection

@section("graph")
    @include("graphs.LRV")
@endsection