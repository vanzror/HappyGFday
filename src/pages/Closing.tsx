import { Button } from '@/components/ui/button';
import PageContainer from '@/components/PageContainer';
import { Heart, Share, Sparkles } from 'lucide-react';

const Closing = () => {
  const shareToWhatsApp = () => {
    const message = encodeURIComponent(
      `💖 Happy Girlfriend Day! 💖\n\nAku udah buatin website romantis khusus buat hari spesial ini. Liat yuk! ✨\n\n${window.location.origin}`
    );
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <PageContainer className="bg-gradient-to-br from-rose-50 to-purple-100">
      <div className="text-center max-w-lg mx-auto fade-in-up">
        <div className="relative mb-8">
          <Sparkles className="w-16 h-16 text-pink-400 mx-auto mb-4 floating-hearts" />
          <div className="absolute -top-2 -right-4">
            <Heart className="w-8 h-8 text-rose-300 heart-beat" />
          </div>
          <div className="absolute -bottom-2 -left-4">
            <Heart className="w-6 h-6 text-pink-300 gentle-bounce" />
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-6 leading-tight">
          The End?<br />
          <span className="text-rose-500">No. It's just the beginning.</span>
        </h1>

        <div className="bg-white p-8 rounded-2xl shadow-lg romantic-glow mb-8">
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg font-medium text-pink-600">
              Makasih udah buka website ini.
            </p>
            
            <p>
              Aku sayang banget sama kamu. Semoga hal ini bisa buat hari kamu 
              senang yaa!!
            </p>
            
            <p className="text-xl font-bold text-pink-600 pt-4">
              Selamat Girlfriend Day,<br />
              pacarku tersayang 🫶
            </p>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {[...Array(5)].map((_, i) => (
              <Heart 
                key={i}
                className="w-4 h-4 text-pink-400 floating-hearts" 
                style={{ animationDelay: `${i * 0.5}s` }}
              />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <Button 
            variant="romantic" 
            size="lg"
            onClick={shareToWhatsApp}
            className="w-full"
          >
            <Share className="w-5 h-5 mr-2" />
            Share ke WhatsApp 💚
          </Button>
          
          <p className="text-sm text-pink-500">
            Bagikan kebahagiaan ini dengan yang tersayang ✨
          </p>
        </div>
      </div>
    </PageContainer>
  );
};

export default Closing;