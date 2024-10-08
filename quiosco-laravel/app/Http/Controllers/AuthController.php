<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequets;
use App\Http\Requests\RegistroRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

    public function register(RegistroRequest $request)
    {
        // Validar el registro
        $data = $request->validated();

        // Crear el usuario en la base de datos
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password'])
        ]);

        // Retornar una respuesta
        return [
            'token' => $user->createToken('token')->plainTextToken,
            'user' => 'user'
        ];
    }

    public function login(LoginRequets $request)
    {
        $data = $request->validated();

        // Validar la contraseña en el servidor
        if (!Auth::attempt($data)) {
            return response([
                'errors' => ['La Contraseña es Incorrecta']
            ], 422);
        }

        // Autenticación del Usuario
        $user = Auth::user();
        return [
            'token' => $user->createToken('token')->plainTextToken,
            'user' => 'user'
        ];
    }

    public function logout(Request $request) {}
}
