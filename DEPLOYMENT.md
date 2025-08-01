# 🌐 Deploy Happy Girlfriend Day Website

## 🚀 Cara Deploy agar Bisa Diakses dari Mana Saja:

### **1. Vercel (Recommended - Gratis)**
```bash
# Install Vercel CLI
npm install -g vercel

# Login ke Vercel
vercel login

# Deploy
vercel --prod
```

### **2. Netlify (Gratis)**
1. Buka [netlify.com](https://netlify.com)
2. Drag & drop folder `dist/` ke halaman deploy
3. Atau connect dengan GitHub repo

### **3. GitHub Pages**
1. Push project ke GitHub
2. Settings → Pages → Deploy from branch `main`
3. Select folder `/dist`

### **4. Firebase Hosting**
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

## 🔗 Setelah Deploy:
- Website akan dapat diakses dari link seperti: `https://happy-gf-day.vercel.app`
- Bisa dibuka di HP mana saja dengan internet
- Link permanen dan bisa dishare

## 📱 Untuk Testing Lokal di HP:
- Pastikan HP dan laptop di WiFi yang sama
- Buka `http://192.168.1.2:8080` di browser HP
- Untuk akses global, wajib deploy online
