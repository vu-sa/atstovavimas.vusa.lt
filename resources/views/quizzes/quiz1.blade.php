@extends('quizzes.template')

@section("html-title")
<title>Klausimai apie VU KAP</title>
@endsection

@section("quiz-title")
    <h2>Pasitikrink žinias apie VU kamieninius akademinius padalinius!</h2>
@endsection

@section("quiz-questions")
<script>
var questions = [{
    question: "Kurį iš šių vienasmenių VU KAP sprendimų priėmėjų renka KAP darbuotojai?",
    choices: ['KAP vadovą', 'ŠAP vadovą', 'KAP Tarybos pirmininką', 'Nei vieno iš jų'],
    correctAnswer: 3
}, {
    question: "Kuris KAP organas padeda suformuoti su studijomis susijusius sprendimus Pavaduotojui studijoms?",
    choices: ['SPK', 'Studijų kolegija', 'Doktorantūros mokykla'],
    correctAnswer: 1
}, {
    question: "Kuriame iš šių KAP darinių nėra studentų atstovo?",
    choices: ['Rinkimų komisijoje', 'Dekanate', 'ŠAP'],
    correctAnswer: 2
}, {
    question: "Kas gali nuspręsti sudaryti laikinąją darbo grupę KAP studijų programų strategijai parengti?",
    choices: ['KAP Tarybos pirmininkas', 'KAP vadovo pavaduotojas studijų organizavimui', 'KAP vadovas'],
    correctAnswer: 2
}, {
    question: "Kas sprendžia Šakiniame akademiniame padalinyje su moksliniais tyrimais dirbančio mokslininko sutarties su Universitetu pratęsimo klausimą?",
    choices: ['KAP Priėmimo-atestacinė komisija', 'ŠAP vadovas', 'KAP vadovas'],
    correctAnswer: 0
}];

</script>
@endsection