<?php

use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group(['prefix' => '/product', 'controller' => ProductController::class], function (){
    Route::post('/test', 'test');
});

// Route::controller(ProductController::class)->prefix('/product')->group(function (){
//     Route::post('/test', 'test');
// });




//C R U D

// C = Create -> POST - criar algo enviando informações

// R = Read -> GET - busca dados

// PUT - atualizar algo enviando informações

// DELETE - deletar al/go

