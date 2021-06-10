<!DOCTYPE html>
<html>
	<head>
		@yield("html-title")
		<link type='text/css' rel='stylesheet' href='quiz/quiz.css'/>
		<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap" rel="stylesheet">
	</head>
	<body>
		<div id='container'>
			<div id='title'>
			@yield("quiz-title")
			</div>
  			<div id='quiz'></div>
    		<div class='button' id='next'><a href='#'>Kitas</a></div>
    		<div class='button' id='prev'><a href='#'>Grįžti</a></div>
    		<div class='button' id='start'> <a href='#'>Iš naujo!</a></div>
    	</div>

		<script type='text/javascript' src='https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js'></script>
		@yield("quiz-questions")
		<script type='text/javascript' src='quiz/quiz.js'></script>
	</body>
</html>
