<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Pembayaran;
use Illuminate\Http\Request;
use Midtrans\Config;
use Midtrans\Snap;

class PembayaranController extends Controller
{
    public function __construct()
    {
        Config::$serverKey = config('midtrans.server_key');
        Config::$isProduction = config('midtrans.is_production');
        Config::$isSanitized = config('midtrans.is_sanitized');
        Config::$is3ds = config('midtrans.is_3ds');
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $perPage = $request->input('limit', 10);
        $page = $request->input('page', 1);

        $penjualan = Pembayaran::with(['penjualan.marketing'])
            ->where('status', '!=', 'paid')
            ->paginate($perPage, ['*'], 'page', $page);

        return response()->json($penjualan);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $penjualan = Pembayaran::with('penjualan')
            ->where('id', $id)
            ->first();
        // dd($penjualan);

        $transaction_details = [
            'order_id' => $penjualan->penjualan->transaction_number,
            'gross_amount' => $penjualan->amount,
        ];
        $transaction = [
            'transaction_details' => $transaction_details,
        ];
        // dd($transaction);
        $snapToken = Snap::getSnapToken($transaction);
        // dd($snapToken);
        return response()->json([
            'message' => 'Data pembayaran.',
            'data' => $transaction,
            'snapToken' => $snapToken
        ], 201);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'status' => 'required|string',
        ]);

        $status = $validated['status'];

        $payment = Pembayaran::where('id', $id)->first();
        if ($payment) {
            $payment->status = $status;
            $payment->save();
            return response()->json(['status' => 'success'], 200);
        }

        return response()->json(['status' => 'not found'], 404);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
