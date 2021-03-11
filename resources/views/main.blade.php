<!DOCTYPE html>
<html lang="lt">

<head>
    @include('head')
</head>

<body>
    @include('elements.nav')
    <div class="container-lg" style="margin-bottom:50px">
        <main class="page-content col-xl-9 flex-shrink-0" id="content">
        
                @include('elements.entry')
                <hr>
                @include('texts.intro')
                <hr>
                @include('texts.AM')  
                <hr>  
                @include('texts.Seimas')
                <hr>
                @include('texts.LRV')
                <hr>
                @include('texts.SMSM')

                <p><strong>ĮSTATYMŲ LEIDYBOS IR VYRIAUSYBĖS NUTARIMO PRIĖMIMO PROCESO SCHEMOS DAR NEĮDĖTOS</strong></p>

                @include('texts.VyriausybesNutarimai')

                <p>Šioje dalyje pristatėme aukštojo mokslo politikos dalyvių schemas – jei kilo papildomų klausimų, į kuriuos atsakymų šiame leidinyje nepavyko rasti, kreipkitės į savo studentus atstovaujančią organizaciją.</p>

                <p>O toliau leidinyje pateikta II dalis: Studentų atstovo veikla ir kompetencijos.</p>

                <hr>
                @include('texts.atstovuKompetencijos')
                @include('elements.ES')
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
