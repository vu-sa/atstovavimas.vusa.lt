@extends('separate-graphs.template')

@section("graph-title")
<title>Aukštojo mokslo schema</title>
@endsection

@section("graph")
    @include("graphs.AM")
@endsection