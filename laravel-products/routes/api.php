<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\SellerController;
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


Route::post('/seller', [SellerController::class, 'store']);

Route::get('/seller', [SellerController::class, 'index']);

Route::prefix('/product')->controller(ProductController::class)->group(function () {
    Route::post('', 'store');
    Route::get('', 'index');
    Route::get('/{product}', 'show');
    Route::put('/{product}', 'update');
    Route::delete('/{product}', 'destroy');
});




// $request->all() = retorna todos os dados da request
// $request->input() = retorna todos os inputs da request
// $request->file() = retorna todos os arquivos da request
// $request->all('name') = retorna um dado específico
// $request->input('name') = retorna um input específico
// $request->file('name') = retorna um arquivo específico
// $request->only('name', 'age') = retorna os dados específicos
// $request->except('name', 'age') = retorna todos os dados com exceção dos dados específicos



// C R U D
// Create -> método GET - retorna dados
// Read -> método POST - cria algo
// Update -> método PUT - atualiza algo
// Delete -> método DELETE - deleta algo




//camelCase
//PascalCase
//sanke_case
//kebab-case
