import { useState } from 'react';
import { Button } from '@/components/ui/button';
import PageContainer from '@/components/PageContainer';
import { ChevronLeft, ChevronRight, Camera, ArrowLeft } from 'lucide-react';

interface GalleryProps {
  onNext: () => void;
  onBack: () => void;
}

const photos = [
  {
    url: '/images/gallery/valentine-date.jpg',
    caption: 'Waktu Valentine!!!'
  },
  {
    url: '/images/gallery/makan-enak.JPG',
    caption: 'KITA MAM ENAKKK'
  },
  {
    url: '/images/gallery/waktu-intim.JPG',
    caption: 'waktu intim kita'
  },
  {
    url: '/images/gallery/photobox-pertama.JPG',
    caption: 'pertama kali photobox'
  },
  {
    url: '/images/gallery/liburan-bareng.jpg',
    caption: 'liburan bareng'
  }
];

const Gallery = ({ onNext, onBack }: GalleryProps) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
    setImageLoading(true);
    setImageError(false);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
    setImageLoading(true);
    setImageError(false);
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
            <div className="relative">
              {imageLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-pink-50 rounded-xl">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div>
                </div>
              )}
              
              {imageError ? (
                <div className="w-full h-80 bg-pink-50 rounded-xl flex items-center justify-center">
                  <div className="text-center text-pink-400">
                    <Camera className="w-12 h-12 mx-auto mb-2" />
                    <p>Foto tidak dapat dimuat</p>
                  </div>
                </div>
              ) : (
                <img
                  src={photos[currentPhoto].url}
                  alt={photos[currentPhoto].caption}
                  className="w-full h-80 object-cover rounded-xl"
                  loading="lazy"
                  onLoad={() => setImageLoading(false)}
                  onError={(e) => {
                    console.error('Failed to load image:', photos[currentPhoto].url);
                    setImageLoading(false);
                    setImageError(true);
                  }}
                />
              )}
            </div>
            
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
              onClick={() => {
                setCurrentPhoto(index);
                setImageLoading(true);
                setImageError(false);
              }}
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

        <div className="flex gap-3 justify-center">
          <Button 
            variant="outline" 
            size="lg"
            onClick={onBack}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          
          <Button 
            variant="romantic" 
            size="lg"
            onClick={onNext}
          >
            Next - Baca Surat Cinta 💌
          </Button>
        </div>
      </div>
    </PageContainer>
  );
};

export default Gallery;