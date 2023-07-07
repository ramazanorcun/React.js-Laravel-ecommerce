<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class AuthController extends Controller
{
      /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','register']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['email', 'password']);
        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }


        return response()->json([
            'user' => auth()->user(),
            'token' => $this->respondWithToken($token)->original,
       ] );
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {

        auth()->logout();


        return response()->json(['message' => 'Successfully logged out']);
    }
    public function register()
    {
        $validator= validator()->make(request()->all(),[
            'name'      => 'required | string',
            'email'     => 'required | email',
            'password'  => 'required | string'
        ]);

        if($validator->fails()){
            return response()-> json([
                'message'   => request()->get('name'). ' '. request()-> get(' '). ' ' . request()-> get('password')
            ]);
        }else{
            $data = User::create([
                'name'      => request()->get('name'),
                'email'     => request()->get('email'),
                'password'  => bcrypt( request()->get('password')),
                'user_level'=> "2",
            ]);
            return $data;
        }
}

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}
