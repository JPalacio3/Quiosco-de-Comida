<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequets extends FormRequest
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
    public function rules(): array
    {
        return [
            'email' => ['required', 'email', 'exists:users,email'],
            'password' => ['required']
        ];
    }
    public function messages()
    {
        return [
            'email.required' => 'El Email es Obligatorio',
            'email.email' => 'El Email NO es válido',
            'email.exists' => 'Usuario NO Registrado',
            'password' => 'El Password es Obligatorio'
        ];
    }
}
