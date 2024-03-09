<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function test(Request $request)
    {
        /**
         * - Definir duas variáveis chamadas name e age e atribuir os valores que vierem da request
         * - Retornar uma frase com esses dados concatenados
         */
        $name = $request->input('name'); // -> Define a variável nome
        $age = $request->input('age'); // -> Define a variável idade
        return "Meu nome é $name e eu tenho $age anos"; // Retorna a frase concatenada
    }

    //camelCase
    //PascalCase
    //snake_case
    //kebab-case

    //all() - retornar todas as informações da request, independente do tipo

    /*input() - retornar apenas os campos que vierem de um input, 
se passar um parâmetro com o nome de um propriedade, será acessado o valor dela 
*/

    //file() - retorna apenas os dados do tipo arquivo

}
