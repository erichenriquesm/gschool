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
            $table->string('name', 40); // cria uma coluna do tipo string chamada name e restringe a qtd de carcteres para 40
            $table->longText('description')->nullable(); //como a descrição é opcional, a coluna description poderá ser nula, ou seja não conter nada
            $table->decimal('amount', 8, 2, true); // cria uma coluna chamada amount que terá no máximo 6 digitos, 2 casas após a vírgula e será unsigned(apenas valores positivos)
            $table->enum('status', ['active', 'inactive'])->default('active');
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
