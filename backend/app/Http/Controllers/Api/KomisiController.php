<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class KomisiController extends Controller
{
    public function calculateKomisi(Request $request)
    {
        // $month = $request->query('month');
        // $year = $request->query('year');

        $results = DB::table('penjualans')
            ->join('marketings', 'penjualans.marketing_id', '=', 'marketings.id')
            ->select(DB::raw('marketings.name as marketing_name, SUM(grand_total) as omzet, DATE_FORMAT(date, "%Y-%m") as period'))
            // ->whereMonth('date', $month)
            // ->whereYear('date', $year)

            ->groupBy('marketing_id', 'marketings.name', 'period')
            ->orderBy('period', 'DESC')
            ->get();

        $komisi = $results->map(function ($item) {
            $percent = 0;

            if ($item->omzet >= 500000000) {
                $percent = 10;
            } elseif ($item->omzet >= 200000000) {
                $percent = 5;
            } elseif ($item->omzet >= 100000000) {
                $percent = 2.5;
            }

            $komisiNominal = ($percent / 100) * $item->omzet;

            $bulan = Carbon::parse($item->period)->format('F - Y');

            return [
                'marketing' => $item->marketing_name,
                'bulan' => $bulan,
                'omzet' => number_format($item->omzet),
                'komisi_percent' => $percent . '%',
                'komisi_nominal' => number_format($komisiNominal),
            ];
        });

        // return response()->json($komisi);
        return response()->json([
            'message' => 'Data Komisi Marketing.',
            'data' => $komisi
        ], 201);
    }
}
