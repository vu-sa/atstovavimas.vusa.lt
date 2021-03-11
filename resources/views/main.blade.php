<!DOCTYPE html>
<html lang="lt">

<head>
    @include('head')
</head>

<body class="d-flex flex-column h-100">
    @include('elements.nav')
    <div class="container">
        <main class="page-content col-9 flex-shrink-0 mb-5" id="content">
        
                @include('elements.entry')
                @include('texts.intro')
                @include('texts.AM')    
                @include('texts.seimas')
                @include('texts.LRV')
                @include('texts.SMSM')

                <p><strong>ĮSTATYMŲ LEIDYBOS IR VYRIAUSYBĖS NUTARIMO PRIĖMIMO PROCESO SCHEMOS DAR NEĮDĖTOS</strong></p>

                @include('texts.VyriausybesNutarimai')

                <p>Šioje dalyje pristatėme aukštojo mokslo politikos dalyvių schemas – jei kilo papildomų klausimų, į kuriuos atsakymų šiame leidinyje nepavyko rasti, kreipkitės į savo studentus atstovaujančią organizaciją.</p>

                <p>O toliau leidinyje pateikta II dalis: Studentų atstovo veikla ir kompetencijos.</p>

                @include('texts.atstovuKompetencijos')
        
    </main>
</div>
    @include('elements.ES')
</body>

<script>
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })
</script>

</html>
