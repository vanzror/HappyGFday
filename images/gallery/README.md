# 📸 Gallery Photos

## Cara Upload Foto Lokal:

1. **Simpan foto Anda di folder ini** (`public/images/gallery/`)
2. **Gunakan nama file yang deskriptif**, contoh:
   - `valentine-date.jpg`
   - `makan-enak.jpg` 
   - `waktu-intim.jpg`
   - `photobox-pertama.jpg`
   - `liburan-bareng.jpg`

## Format yang Didukung:
- ✅ `.jpg` / `.jpeg`
- ✅ `.png`
- ✅ `.webp`
- ✅ `.gif`

## Tips:
- **Ukuran optimal**: 800x600px atau 1200x900px
- **Ukuran file**: Maksimal 2MB per foto untuk loading yang cepat
- **Nama file**: Gunakan huruf kecil dan strip (-) untuk spasi

## Contoh Struktur:
```
gallery/
├── valentine-date.jpg
├── makan-enak.jpg
├── waktu-intim.jpg
├── photobox-pertama.jpg
└── liburan-bareng.jpg
```

Setelah upload foto, edit file `src/pages/Gallery.tsx` dan ganti URL menjadi:
```javascript
url: '/images/gallery/nama-foto.jpg'
```

## 🚀 Auto Update (Recommended):
Jalankan script ini setelah menambah foto baru:
```bash
npm run update-gallery
```

Script ini akan otomatis:
- ✅ Scan semua foto di folder gallery
- ✅ Update Gallery.tsx dengan foto-foto baru
- ✅ Generate caption dari nama file

## 📝 Manual Update:
Jika ingin update manual, edit array `photos` di `src/pages/Gallery.tsx`:
```javascript
const photos = [
  {
    url: '/images/gallery/foto-baru.jpg',
    caption: 'Caption untuk foto'
  }
];
```
