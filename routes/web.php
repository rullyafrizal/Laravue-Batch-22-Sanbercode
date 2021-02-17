<?php

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
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::middleware(['auth', 'emailVerified'])->group(function(){
    Route::get('/route-1', 'PageController@route1');
});

Route::middleware(['auth', 'emailVerified', 'admin'])->group(function(){
    Route::get('/route-2', 'PageController@route2');
});

