<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return response()->json(Product::paginate($request->input('per_page') ?? 10));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validation = Validator::make($request->all(), [
            'name' => 'required|string|min:3|max:40|unique:products,name',
            'amount' => 'required|numeric',
            'description' => 'string'
        ]);

        if($validation->fails()){
            return response()->json($validation->errors(), 422);
        }

        $product = Product::create([
            'name' => $request->input('name'),
            'amount' => $request->input('amount'),
            'description' => $request->input('description')
        ]);

        return response()->json([
            'message' => 'Product created!',
            'product' => $product
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return response()->json($product);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        $validation = Validator::make($request->all(), [
            'name' => 'string|min:3|max:40|unique:products,name',
            'amount' => 'numeric',
            'description' => 'string',
            'status' => 'string|in:active,inactive'
        ]);

        if($validation->fails()){
            return response()->json($validation->errors(), 422);
        }
        
        $product->fill($request->all())->update();

        return response()->json([
            'message' => 'Product updated!',
            'product' => $product
        ]);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
