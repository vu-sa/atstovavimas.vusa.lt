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

Route::get('/quiz1', function () {
    return view('quizzes.quiz1');
});

## VU struktūros schema

Route::get('/quiz2', function () {
    return view('quizzes.quiz2');
});

Route::get('/quiz3', function () {
    return view('quizzes.quiz3');
});

Route::get('/quiz4', function () {
    return view('quizzes.quiz4');
});