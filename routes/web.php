<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('main');
});

# Quizzai

Route::get('/quiz1', function () {
    return view('quizzes.quiz1');
});

Route::get('/quiz2', function () {
    return view('quizzes.quiz2');
});

Route::get('/quiz3', function () {
    return view('quizzes.quiz3');
});

Route::get('/quiz4', function () {
    return view('quizzes.quiz4');
});

# Schemos atskirai

Route::get('/schema-kap', function () {
    return view('separate-graphs.KAP');
});

Route::get('/schema-vu', function () {
    return view('separate-graphs.VU');
});

Route::get('/schema-am', function () {
    return view('separate-graphs.AM');
});

Route::get('/schema-lrv', function () {
    return view('separate-graphs.LRV');
});

Route::get('/schema-smsm', function () {
    return view('separate-graphs.SMSM');
});

Route::get('/schema-seimas', function () {
    return view('separate-graphs.Seimas');
});

