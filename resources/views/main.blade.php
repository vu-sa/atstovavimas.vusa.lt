<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    @include('head')
</head>

<body>
    @include('nav')
    <main class="page-content p-5" id="content">

        <h1>Atstovavimo gidas<h1>
            <p>Grafikas neužbaigtas, žinau :) Prašome išsakyti komentarus tik dėl <strong>grafiko informacijos formato!</strong></p>    
            <ul>
                    <li>Modalinis langas: <strong>paspausk ant "LR Seimo nariai"</strong>;</li>
                    <li><i>Popover:</i> <strong>paspausk ant "LR Seimo kancleris"</strong>;</li>
                    <li><i>Tooltip:</i> <strong>užvesk pelytę ant "LR Seimo frakcijos"</strong>;</i>
                </ul>
                
                

                @include('graphs.seimasGraph')
                @include('texts.modalsSeimas')
                <hr>
                @include('texts.seimas')

                <br>
                <h2>Regioninė jaunimo politika</h2>
                @include('texts.regioninesPolitikosAprasas')
    </main>
</body>

<script>
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })
    
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)

    })

</script>

</html>
