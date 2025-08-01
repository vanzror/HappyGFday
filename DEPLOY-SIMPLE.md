# 🚀 Cara Deploy Manual ke Netlify (Tanpa Login CLI)

## Step 1: Buka netlify.com
1. Kunjungi [netlify.com](https://netlify.com)
2. Klik "Sign up" atau "Deploy to Netlify"

## Step 2: Drag & Drop Deploy
1. Scroll ke bawah sampai ada area "Deploy with Drag & Drop"
2. Drag folder `dist/` dari Finder ke area tersebut
3. Tunggu upload selesai (1-2 menit)

## Step 3: Dapatkan Link
- Netlify akan generate link seperti: `https://amazing-name-123456.netlify.app`
- Link ini bisa diakses dari HP mana saja!

## 📱 Alternative: Surge.sh (Super Simple)
```bash
npm install -g surge
cd dist
surge
```

Pilih domain gratis atau custom domain.

---

**File yang perlu di-upload ke Netlify:**
- Folder: `dist/` (hasil dari `npm run build`)
- Isi folder dist sudah siap untuk production
