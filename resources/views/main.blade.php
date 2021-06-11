<!DOCTYPE html>
<html lang="lt">

<head>
    <title>Atstovavimo gidas</title>

    <script src={{ 'js/atstovavimas.js' }}></script>

    <link rel="stylesheet" href="{{ 'css/atstovavimas.css' }}">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>

    @include('head')
</head>

<body>
    @include('elements.nav')
    <div class="container-lg" style="margin-bottom:25px">
        <main class="page-content col-xl-9 flex-shrink-0" style="margin-top: 3em" id="content">
            @include('elements.entry')
            @include('texts.intro')
            <hr>
            @include('texts.KAP')
            <hr>
            @include('texts.VU')
            <hr>
            @include('texts.miestas')
            <hr>
            @include('texts.AM')
            <hr>
            @include('texts.Seimas')
            <hr>
            @include('texts.LRV')
            <hr>
            @include('texts.SMSM')
            <hr>
            @include('texts.procesai')

            <p>Šioje dalyje pristatėme aukštojo mokslo politikos dalyvių schemas – jei kilo papildomų klausimų, į
                kuriuos atsakymų šiame leidinyje nepavyko rasti, kreipkitės į savo studentus atstovaujančią
                organizaciją.</p>

            <hr>
            @include('texts.SAO')
            <hr>
            @include('texts.atstovuKompetencijos')
            <hr>
            @include('texts.baigiamasisZodis')
        </main>
    </div>

</body>

<script>
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })

</script>

</html>
