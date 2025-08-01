import { Button } from '@/components/ui/button';
import PageContainer from '@/components/PageContainer';
import { Heart } from 'lucide-react';

interface WelcomeProps {
  onNext: () => void;
}

const Welcome = ({ onNext }: WelcomeProps) => {
  return (
    <PageContainer className="bg-gradient-to-br from-pink-50 to-rose-100">
      <div className="text-center max-w-md mx-auto fade-in-up">
        <div className="relative mb-8">
          <Heart className="text-pink-400 w-16 h-16 mx-auto mb-4 heart-beat" />
          <div className="absolute -top-2 -right-2">
            <Heart className="text-rose-300 w-8 h-8 floating-hearts" />
          </div>
          <div className="absolute -bottom-2 -left-2">
            <Heart className="text-pink-300 w-6 h-6 floating-hearts" style={{ animationDelay: '1s' }} />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4 leading-tight">
          Happy Girlfriend Day,<br />
          <span className="text-rose-500">sayang!</span>
        </h1>
        
        <div className="flex items-center justify-center gap-2 text-pink-500 mb-8">
          <p className="text-lg">
            1 Agustus 2025 — Hari kamu, hari kita 💖
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="text-pink-400 text-sm">
            Website khusus untukmu ✨
          </div>
          
          <Button 
            variant="romantic" 
            size="xl"
            onClick={onNext}
            className="romantic-glow"
          >
            Lanjut ke Kejutan 💕
          </Button>
        </div>
      </div>
    </PageContainer>
  );
};

export default Welcome;