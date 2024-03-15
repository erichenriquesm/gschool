<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name', 50); // coluna do tipo string(cadeia de caracteres)
            $table->longText('description')->nullable(); // temos uma coluna do tipo longText, pois permite mais caracteres e ela será nula caso não seja passado um valor
            $table->decimal('value', 8, 2, true); //coluna que nos permite salvar valores quebrados(15.99)
            $table->enum('status', ['inactive', 'active'])->default('active'); // coluna do tipo lista, definimos quais valores são permitidos, por padrão vai ser ativo
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
