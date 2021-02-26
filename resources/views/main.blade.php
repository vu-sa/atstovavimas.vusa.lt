<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    @include('head')
</head>

<body>
    @include('nav')
    <main class="page-content p-5" id="content">
        <br>
        @include('graphs.regioninePolitika')
    </main>

    <script>
        var callback = function() {
            alert('A callback was triggered');
        }

    </script>
</body>

</html>
