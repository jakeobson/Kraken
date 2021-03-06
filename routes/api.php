<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/documents', 'DocumentsController@index')->name('documents.get');
Route::post('/documents', 'DocumentsController@store')->name('documents.store');
Route::delete('/documents/{document}', 'DocumentsController@delete')->name('documents.delete');

Route::post('/documents/search', 'DocumentsController@search')->name('documents.search');
