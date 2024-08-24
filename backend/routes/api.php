<?php

use App\Http\Controllers\Api\KomisiController;
use App\Http\Controllers\Api\MarketingController;
use App\Http\Controllers\Api\PembayaranController;
use App\Http\Controllers\Api\PenjualanController;
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

Route::apiResource('penjualan', PenjualanController::class);
Route::apiResource('pembayaran', PembayaranController::class);
Route::apiResource('marketing', MarketingController::class);
Route::get('/komisi', [KomisiController::class, 'calculateKomisi']);
