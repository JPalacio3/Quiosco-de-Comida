<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password as PasswordRules;

class RegistroRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules()
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'unique:users,email'],
            'password' => [
                'required',
                'confirmed',
                PasswordRules::min(8)
                    ->letters()
                    ->numbers()
            ],
        ];
    }

    public function messages()
    {
        return [
            'name' => 'El Nombre es Obligatorio',
            'email.required' => 'El Email es Obligatorio',
            'email.email' => 'El Email NO es Válido',
            'email.unique' => 'El Usuario ya está registrado',
            'password' => 'La contraseña debe contener al menos 8 caracteres, 1 letra mayúscula y un número'
        ];
    }
}
