<!DOCTYPE html>
<html lang="lt">

<head>
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
