@extends('separate-graphs.template')

@section("graph-title")
<title>Seimo schema</title>
@endsection

@section("graph")
    @include("graphs.Seimas")
@endsection