<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Producto;
use App\Http\Resources\ProductoCollection;

class ProductoController extends Controller
{
    public function index()
    {
        return new ProductoCollection(Producto::where('disponible', 1)->orderBy('id', 'DESC')->get());
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
    public function show(Producto $producto)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Producto $producto)
    {
        // Marcar un producto como agotado
        $producto->disponible = 0;
        $producto->save();
        return [
            'producto' => $producto
        ];
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Producto $producto)
    {
        //
    }
}
