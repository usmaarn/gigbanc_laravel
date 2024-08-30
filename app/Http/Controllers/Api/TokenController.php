<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TokenController extends Controller
{
    public function generate(Request $request)
    {
        $token = $request->user()->createToken($request->user()->username);
        return response()->json([
            'token' => $token->plainTextToken,
        ], 201);
    }

    public function delete(Request $request)
    {
        $request->user()->tokens()->delete();
        return response()->json(null, 204);
    }

    public function refresh(Request $request)
    {
        $request->user()->tokens()->delete();
        $token = $request->user()->createToken($request->user()->username);
        return response()->json([
            'token' => $token->plainTextToken,
        ]);
    }
}
