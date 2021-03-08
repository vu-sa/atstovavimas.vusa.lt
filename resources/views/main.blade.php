<!DOCTYPE html>
<html lang="lt">

<head>
    @include('head')
</head>

<body class="d-flex flex-column h-100">
    {{-- @include(elements.nav') --}}
    <main class="page-content p-5 flex-shrink-0" id="content">
        <div class="container">
            <h1>Atstovavimo gidas<h1>
                @include('texts.AM')    
                @include('texts.seimas')

                    <br>

                    <h2>Regioninė jaunimo politika</h2>
                    @include('texts.regioninePolitika')
        </div>
    </main>
    @include('elements.ES')
</body>

<script>
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })
</script>

</html>
