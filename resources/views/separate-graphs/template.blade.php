<!DOCTYPE html>
<html>
	<head>
		@yield("graph-title")
		@include('head')
		<script src={{ 'js/atstovavimas.js' }}></script>

		<link rel="stylesheet" href="{{ 'css/atstovavimas.css' }}">
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
	</head>
	<body>
		<div class="container-xl" style="margin-bottom:25px;margin-top:25px">
		@yield("graph")
		</div>

		<div class="container-xl" style="margin-bottom:25px">
			<p><a href="/"><- Grįžti į pagrindinį</a></p>
		</div>
	</body>
	<script>
		var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
		var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
			return new bootstrap.Popover(popoverTriggerEl)
		})
	
	</script>
</html>
