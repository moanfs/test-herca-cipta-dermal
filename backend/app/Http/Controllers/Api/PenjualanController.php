<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Penjualan;
use Illuminate\Http\Request;

class PenjualanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $perPage = $request->input('limit', 10);
        $page = $request->input('page', 1);

        // $penjualan = Penjualan::with('marketing')->get();

        $penjualan = Penjualan::with('marketing')
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
        $validated = $request->validate([
            'marketing_id' => 'required|exists:marketings,id',
            'date' => 'required|date',
            'cargo_fee' => 'required|numeric',
            'total_balance' => 'required|numeric',
        ]);

        $count = Penjualan::count() + 1;
        $transaction_number = 'TRX' . str_pad($count, 3, '0', STR_PAD_LEFT);
        $grand_total = $validated['cargo_fee'] + $validated['total_balance'];

        $validated['transaction_number'] = $transaction_number;
        $validated['grand_total'] = $grand_total;

        $penjualan = Penjualan::create($validated);

        return response()->json([
            'message' => 'Data penjualan berhasil disimpan.',
            'data' => $penjualan
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $penjualan = Penjualan::findOrFail($id);
        return response()->json([
            'message' => 'Data Penjualan.',
            'data' => $penjualan
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
            'transaction_number' => 'required|string',
            'marketing_id' => 'required|exists:marketings,id',
            'date' => 'required|date',
            'cargo_fee' => 'required|numeric',
            'total_balance' => 'required|numeric',
            'grand_total' => 'required|numeric',
        ]);

        $penjualan = Penjualan::findOrFail($id);
        $penjualan->update($validated);

        return response()->json($penjualan);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $penjualan = Penjualan::findOrFail($id);
        $penjualan->delete();

        return response()->json(null, 204);
    }
}
