<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <script src='/js/app.js'></script>
    <style>
        .cssClass > rect{
        fill:#FF0000;
        stroke:#FFFF00;
        stroke-width:4px;
    }
    </style>
    <script>
        var callback = function(){
            alert('A callback was triggered');
        }
      </script>

    <script>
        mermaid.initialize({
            er: {
                layoutDirection: 'LR',
                diagramPadding: 10,
                entityPadding: 8,
                minEntityHeight: 40,
                minEntityWidth: 65
            },
            startOnLoad: true
        });

    </script>
</head>

<body>
    <div class="mermaid">
        graph LR;
        A-->B;
        B-->C;
        C-->D;
        click A callback "Tooltip for a callback"
        click B "http://www.github.com" "This is a tooltip for a link"
        click A call callback() "Tooltip for a callback"
        click B href "http://www.github.com" "This is a tooltip for a link"
    </div>
</body>

</html>
