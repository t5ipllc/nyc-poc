<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $currentDomain = app('current.domain');

    return Inertia::render('landing-page', [
        'domain' => $currentDomain,
        'host' => request()->getHost(),
        'message' => "Welcome to " . request()->getHost(),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
