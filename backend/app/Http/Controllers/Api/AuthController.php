<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::attempt($validated)) {
            $user = Auth::user();
            return response()->json([
                'message' => 'Login Berhasil.',
                'data' => $user->createToken('sangatrahasia')->plainTextToken
            ], 200);
        }

        return response()->json([
            'message' => 'Login Gagal. Kredensial tidak valid.',
        ], 401);
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
        return response()->json([
            'message' => 'Logout Berhasil',
        ], 200);
    }
}
