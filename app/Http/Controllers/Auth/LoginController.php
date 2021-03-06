<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function __invoke(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);

        try {
            if (!$token = auth()->attempt($request->only(['email', 'password']))) {
                return response()->json([
                    'response_code' => '01',
                    'response_message' => 'User Unauthorized'
                ], 401);
            }

            $user = User::where('email', request('email'))->first()->toArray();

            return response()->json([
                'response_code' => '00',
                'response_message' => 'User berhasil login',
                'data' => [
                    'token' => $token,
                    'user' => $user
                ]
            ]);
        } catch (QueryException $ex) {
            return response()->json([
                'message' => "Failed $ex->errorInfo"
            ]);
        }

    }
}
