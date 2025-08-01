// Contoh menggunakan foto lokal
// Letakkan foto Anda di folder public/images/
// Lalu import seperti ini:

export const localPhotos = [
  {
    url: '/images/valentine.jpg',
    caption: 'Waktu Valentine!!!'
  },
  {
    url: '/images/makan-enak.jpg', 
    caption: 'KITA MAM ENAKKK'
  },
  {
    url: '/images/waktu-intim.jpg',
    caption: 'waktu intim kita'
  },
  {
    url: '/images/photobox.jpg',
    caption: 'pertama kali photobox'
  },
  {
    url: '/images/liburan.jpg',
    caption: 'liburan bareng'
  }
];

// Atau menggunakan import dinamis:
export const importedPhotos = [
  {
    url: new URL('/public/images/valentine.jpg', import.meta.url).href,
    caption: 'Waktu Valentine!!!'
  },
  // dst...
];
