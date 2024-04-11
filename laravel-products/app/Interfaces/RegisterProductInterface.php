<?php

interface RegisterProductInterface {
    public static function handle(string $name, float $amount, $description = null, int $sellerId);
}