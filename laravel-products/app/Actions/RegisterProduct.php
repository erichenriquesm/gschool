<?php

namespace App\Actions;

use App\Models\Product;

class RegisterProduct {


    public static function run(...$arguments) : Product
    {
        return (new self())->handle(...$arguments);
    }


    private function handle($name, $amount, $description = null, $sellerId) : Product
    {
        return Product::create([
            'name' => $name,
            'amount' => $amount,
            'description' => $description,
            'seller_id' => $sellerId,
        ]);
    }

}