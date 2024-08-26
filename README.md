## Laravel + Vite

Link Demo : https://herca.moanfs.com

Test developer pada PT Herca Cipta Dermal, pada test ini dibuat menggunakan tech berikut:

- [Laravel 10 (Backend)](https://laravel.com/docs/10.x).
- [Vite (Frontend)](https://vitejs.dev/guide/).
- [Mysql](https://www.mysql.com/).
- [Midtrans](https://midtrans.com/id).
- [Tailwind](https://tailwindcss.com/).
- [Postman](https://www.postman.com/).

## Installation

```
git clone https://github.com/moanfs/test-herca-cipta-dermal.git

```

## Usege

### backend

1. pada folder root jalankan

```
cd backend
composer install
```

2. setelah rename file dengan nama .evn.example menjasi .env

```
mv .env.example .env
```

3. Masukan ini di backend pada .env
   (daftar akun untuk menapatkan api midtrans)

```
MIDTRANS_MERCHANT_ID=your-id
MIDTRANS_CLIENT_KEY=your-client-key
MIDTRANS_SERVER_KEY=your-server-key
MIDTRANS_IS_PRODUCTION=false
MIDTRANS_IS_SANITIZED=true
MIDTRANS_IS_3DS=true
```

4. setelah itu generate key dengan copy dibawah

```
php artisan key:generate
```

5. lanjut dengan migrasi database dan seeder

```
php artisan migrate --seed
```

6. lanjut dengan menjalankan project dengan

```
php artisan serve
```

### Fontend

1. pada folder root jalankan

```
cd frontend
npm install
```

2. setelah rename file dengan nama evn.example menjasi .env

```
mv env.example .env
```

lalu ganti ini ini di .env forntend anda dengan serve-key anda

```
VITE_MIDTRANS_SERVER_KEY=your-server-key
```

3. lanjut dengan menjalankan project dengan

```
npm run dev
```
