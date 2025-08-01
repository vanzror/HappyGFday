// File konfigurasi untuk foto lokal
// Ganti array photos di Gallery.tsx dengan array ini setelah upload foto

export const localPhotos = [
  {
    url: '/images/gallery/valentine-date.jpg',
    caption: 'Waktu Valentine!!!'
  },
  {
    url: '/images/gallery/makan-enak.jpg',
    caption: 'KITA MAM ENAKKK'
  },
  {
    url: '/images/gallery/waktu-intim.jpg',
    caption: 'waktu intim kita'
  },
  {
    url: '/images/gallery/photobox-pertama.jpg',
    caption: 'pertama kali photobox'
  },
  {
    url: '/images/gallery/liburan-bareng.jpg',
    caption: 'liburan bareng'
  }
];

// Cara menggunakan:
// 1. Upload foto ke folder public/images/gallery/
// 2. Sesuaikan nama file di array di atas
// 3. Import array ini di Gallery.tsx:
//    import { localPhotos } from '@/data/local-photos';
// 4. Ganti 'const photos = [...]' dengan 'const photos = localPhotos;'
