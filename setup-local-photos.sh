#!/bin/bash

# Script untuk membantu setup foto lokal
# Jalankan dengan: ./setup-local-photos.sh

echo "🖼️  Setting up local photos for Gallery..."

# Cek apakah folder gallery sudah ada
if [ ! -d "public/images/gallery" ]; then
    echo "❌ Folder public/images/gallery tidak ditemukan!"
    echo "Membuat folder..."
    mkdir -p public/images/gallery
fi

echo "📁 Struktur folder photo:"
echo "public/"
echo "└── images/"
echo "    └── gallery/"
echo "        ├── valentine-date.jpg     (upload foto valentine)"
echo "        ├── makan-enak.jpg         (upload foto makan)"
echo "        ├── waktu-intim.jpg        (upload foto intim)"
echo "        ├── photobox-pertama.jpg   (upload foto photobox)"
echo "        └── liburan-bareng.jpg     (upload foto liburan)"

echo ""
echo "📋 Langkah-langkah:"
echo "1. Upload 5 foto ke folder public/images/gallery/"
echo "2. Rename sesuai nama di atas"
echo "3. Jalankan: npm run switch-to-local-photos"

echo ""
echo "✅ Setup selesai! Silakan upload foto Anda."
