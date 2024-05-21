<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/dashboard2', function () {
    return Inertia::render('Dashboard2');
})->middleware(['auth', 'verified'])->name('dashboard2');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Route::get('/react', function () {
//     return Inertia::render('App');
// });

Route::get('/test', function () {
    return Inertia::render('App');
})->name('test');

Route::get('/test/jobs', function () {
    return Inertia::render('Laracasts/Jobs');
})->name('test.jobs');

Route::get('/test/contact', function () {
    return Inertia::render('Laracasts/Contact');
})->name('test.contact');

Route::get('/inertia', function () {
    return Inertia::render('Inertia/Home', ['name' => 'MSS', 'frameworks' => [
        'Laravel', 'React', 'Inertia'
    ]]);
})->name('inertia');

Route::get('/inertia/users', function () {
    return Inertia::render('Inertia/Users', [
        'time' => now()->toTimeString()
    ]);
})->name('inertia.users');

Route::get('/inertia/settings', function () {
    return Inertia::render('Inertia/Settings');
})->name('inertia.settings');

// Route::post('/inertia/logout', function () {
//     return dd('logging the user out');
// })->name('inertia.logout');

Route::post('/inertia/logout', function () {
    dd('tes');
})->name('inertia.logout');

require __DIR__ . '/auth.php';
