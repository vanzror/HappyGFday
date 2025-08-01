import { Button } from '@/components/ui/button';
import PageContainer from '@/components/PageContainer';
import { Heart, Mail } from 'lucide-react';

interface LoveLetterProps {
  onNext: () => void;
}

const LoveLetter = ({ onNext }: LoveLetterProps) => {
  return (
    <PageContainer className="bg-gradient-to-br from-pink-50 to-peach-50">
      <div className="max-w-2xl mx-auto fade-in-up">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Mail className="w-8 h-8 text-pink-500" />
          <h1 className="text-3xl font-bold text-pink-600">
            Surat Cinta 💌
          </h1>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg romantic-glow relative">
          <div className="absolute top-4 right-4">
            <Heart className="w-6 h-6 text-pink-300 heart-beat" />
          </div>
          
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-pink-600 mb-2">
              Untuk NAIRENG,
            </h2>
            <p className="text-pink-500 italic">dari NAILONG</p>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="font-medium text-pink-600">
              Sayangku Cantikku Cintaku,
            </p>
            
            <p>
              Terimakasiii sudah hadir dalam hidup aku. Kamu adalah rumah ternyaman, 
              tawa paling hangat, dan peluk yang selalu bikin aku tenang. Hari ini 
              adalah Girlfriend Day, tapi sebenarnya setiap hari adalah hari spesial 
              karena ada kamu <span className="text-pink-500">♥</span>
            </p>
            
            <p>
              Aku bersyukur banget bisa jalanin hari-hari bareng kamu. Semoga kita 
              terus tumbuh, terus belajar, dan terus jatuh cinta… satu sama lain.
            </p>
            
            <p className="text-pink-600 font-medium text-center pt-4">
              I love you, now and always 💗
            </p>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            <Heart className="w-4 h-4 text-pink-400 floating-hearts" />
            <Heart className="w-3 h-3 text-rose-300 floating-hearts" style={{ animationDelay: '1s' }} />
            <Heart className="w-5 h-5 text-pink-300 floating-hearts" style={{ animationDelay: '2s' }} />
          </div>
        </div>

        <div className="text-center mt-8">
          <Button 
            variant="romantic" 
            size="lg"
            onClick={onNext}
          >
            Next - Main Trivia 🎯
          </Button>
        </div>
      </div>
    </PageContainer>
  );
};

export default LoveLetter;