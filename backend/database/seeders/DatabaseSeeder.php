<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        DB::table('users')->insert([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('password'),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('marketings')->insert([
            [
                'name' => 'Alfandy',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Mery',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Mery',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);

        // DB::table('penjualans')->insert([
        //     [
        //         'transaction_number' => 'TRX001',
        //         'marketing_Id' => 1,
        //         'date' => '2023-05-22',
        //         'cargo_fee' => 25000,
        //         'total_balance' => 3000000,
        //         'grand_total' => 3025000,
        //         'created_at' => Carbon::now(),
        //         'updated_at' => Carbon::now(),
        //     ],
        //     [
        //         'transaction_number' => 'TRX001',
        //         'marketing_Id' => 1,
        //         'date' => '2023-05-22',
        //         'cargo_fee' => 25000,
        //         'total_balance' => 3000000,
        //         'grand_total' => 3025000,
        //         'created_at' => Carbon::now(),
        //         'updated_at' => Carbon::now(),
        //     ],
        //     [
        //         'transaction_number' => 'TRX001',
        //         'marketing_Id' => 1,
        //         'date' => '2023-05-22',
        //         'cargo_fee' => 25000,
        //         'total_balance' => 3000000,
        //         'grand_total' => 3025000,
        //         'created_at' => Carbon::now(),
        //         'updated_at' => Carbon::now(),
        //     ],
        // ]);
    }
}
