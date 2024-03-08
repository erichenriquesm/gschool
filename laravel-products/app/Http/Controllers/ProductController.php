<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    //all() - retorna todos os dados independente do tipo
    //input() - retornar os dados digitáveis
    //file() - retornar todos os dados de arquivos
    //only('name', 'age') - retorna apenas os campos que quisermos
    //except('name', 'age') - retorna todos os campos exceto o quer passarmos no método
    public function teste(Request $request)
    {
        //definir 2 variáveis (name e age) que vão conter as informções das proprieadades

        $name = $request->input('name');
        $age = $request->input('age');

        return 'Olá, meu nome é ' . $name . ' e tenho ' . $age . ' anos de idade!';

    }
}
