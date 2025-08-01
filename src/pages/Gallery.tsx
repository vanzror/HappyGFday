import { useState } from 'react';
import { Button } from '@/components/ui/button';
import PageContainer from '@/components/PageContainer';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';

interface GalleryProps {
  onNext: () => void;
}

const photos = [
  {
    url: 'https://i.postimg.cc/3RdnqW70/IMG-5835.jpg',
    caption: 'Waktu Valentine!!!'
  },
  {
    url: 'https://i.postimg.cc/KvsCvXp2/08708-B7-F-30-B6-40-D5-B827-81379359-BD1-A-4314-00001-E466-DB3397-E.jpg',
    caption: 'KITA MAM ENAKKK'
  },
  {
    url: 'https://i.postimg.cc/J0zdMKb0/Photo-on-25-11-24-at-00-13-2.jpg',
    caption: 'waktu intim kita'
  },
  {
    url: 'https://i.postimg.cc/y8Zp1DSm/IMG-1010.jpg',
    caption: 'pertama kali photobox'
  },
  {
    url: 'https://i.postimg.cc/hj6pRgPy/IMG-2758.jpg',
    caption: 'liburan bareng'
  }
];

const Gallery = ({ onNext }: GalleryProps) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <PageContainer className="bg-gradient-to-br from-rose-50 to-pink-100">
      <div className="text-center max-w-lg mx-auto fade-in-up">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Camera className="w-8 h-8 text-pink-500" />
          <h1 className="text-3xl font-bold text-pink-600">
            Kenangan Kita 📸
          </h1>
        </div>

        <div className="relative mb-6">
          <div className="bg-white p-4 rounded-2xl shadow-lg romantic-glow">
            <img
              src={photos[currentPhoto].url}
              alt={photos[currentPhoto].caption}
              className="w-full h-80 object-cover rounded-xl"
              onError={(e) => {
                e.currentTarget.src = '/placeholder.svg';
              }}
            />
            
            <div className="mt-4 p-3 bg-pink-50 rounded-lg">
              <p className="text-pink-700 font-medium">
                {photos[currentPhoto].caption}
              </p>
            </div>
          </div>

          <Button
            variant="soft"
            size="icon"
            onClick={prevPhoto}
            className="absolute left-2 top-1/2 transform -translate-y-1/2"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <Button
            variant="soft"
            size="icon"
            onClick={nextPhoto}
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex justify-center gap-2 mb-6">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPhoto(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentPhoto
                  ? 'bg-pink-500 scale-125'
                  : 'bg-pink-200 hover:bg-pink-300'
              }`}
            />
          ))}
        </div>

        <div className="text-sm text-pink-500 mb-6">
          {currentPhoto + 1} dari {photos.length} foto
        </div>

        <Button 
          variant="romantic" 
          size="lg"
          onClick={onNext}
        >
          Next - Baca Surat Cinta 💌
        </Button>
      </div>
    </PageContainer>
  );
};

export default Gallery;