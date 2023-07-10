<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\SubCategoriesController;
use App\Http\Controllers\ProductController;





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

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('register',[AuthController::class,'register']);

    Route::post('login', [AuthController::class,'login']);
    Route::post('logout', [AuthController::class,'logout']);
    Route::post('refresh', [AuthController::class,'refresh']);
    Route::get('me', [AuthController::class,'me']);

});
Route::get('Categories',[CategoriesController::class,'index']);
Route::post('addCategories',[CategoriesController::class,'create']);
Route::delete('deleteCategories/{id}',[CategoriesController::class,'destroy']);
Route::put('updateCategories/{id}',[CategoriesController::class,'update']);

Route::get('subCategories',[SubCategoriesController::class,'index']);
Route::post('addSubCategories',[SubCategoriesController::class,'create']);
Route::delete('deleteSubCategories/{id}',[SubCategoriesController::class,'destroy']);
Route::put('updateSubCategories/{id}',[SubCategoriesController::class,'update']);

Route::get('product',[ProductController::class,'index']);
Route::post('addProduct',[ProductController::class,'create']);
Route::delete('deleteProduct/{id}',[ProductController::class,'destroy']);
Route::put('updateProduct/{id}',[ProductController::class,'update']);
