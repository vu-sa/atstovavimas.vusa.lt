@extends('quizzes.template')

@section("html-title")
<title>Klausimai apie VU</title>
@endsection

@section("quiz-title")
    <h2>Pasitikrink žinias apie VU!</h2>
@endsection

@section("quiz-questions")
<script>
var questions = [{
    question: "Kas yra universiteto vadovas?",
    choices: ["Dekanas", "Rektorius", "Direktorius"],
    correctAnswer: 1
}, {
    question: "Ką veikia VU neakademiniai kamieniniai padaliniai?",
    choices: ["Užtikrina akademinių padalinių veiklą, teikia ir kitas neakademines Universiteto funkcijas", "Yra atsakingi už Universiteto finansus ir išteklius", "Pataria Rektoriui mokslo ir studijų klausimais"],
    correctAnswer: 0
}, {
    question: "Kas sudaro didįjį rektoratą?",
    choices: ["Rektorius ir studentų atstovai", "Prorektoriai ir rektoriaus patarėjai", "Rektorius, VU KAP vadovai ir studentų atstovas"],
    correctAnswer: 2
}, {
    question: "Kas sudaro Rektoriaus komandą?",
    choices: ["Studentų atstovybės deleguoti atstovai ir visuomenės lyderiai", "Vicerektorius, prorektoriai ir Rektoriaus patarėjai", "KAP vadovai"],
    correctAnswer: 1
}, {
    question: "Kas deleguoja studentų atstovus į įvairius VU darinius ir komisijas?",
    choices: ["Rektorius", "VU KAP vadovai", "VU SA"],
    correctAnswer: 2
}];

</script>
@endsection