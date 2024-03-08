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

Route::post('/teste', [ProductController::class, 'teste']);

//camelCase
//PascalCase
//snake_case
//kebab-case

// 'http://127.0.0.1:8000/api/teste?name=Eric&teste=ok&phone=44564545'
// 127.0.0.1:8000/api/teste

//GET - buscar dados
//POST - envia dados (cadastrar algo)
//PUT - envia dados (atualizar alguma coisa)
//DELETE - deletar dados

// C R U D