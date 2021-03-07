<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    @include('head')
</head>

<body>
    @include('nav')
    <main class="page-content p-5" id="content">

        <h2>Su modaliniais langais</h2>
        @include('graphs.seimasGraph1')
        @include('texts.modalsSeimas')
        <hr>

        <h2>Su popoveriais</h2>
        @include('graphs.seimasGraph2')

        <hr>

        <h2> Tooltipai + su nuslinkimu į apačią</h2>
        @include('graphs.seimasGraph3')
        
        <hr>
        @include('texts.seimas')

        <br>
        <h2>Regioninė jaunimo politika</h2>
        @include('texts.regioninesPolitikosAprasas')
    </main>
</body>

</html>
