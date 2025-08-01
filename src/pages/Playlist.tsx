import { Button } from '@/components/ui/button';
import PageContainer from '@/components/PageContainer';
import { Music, ExternalLink, Heart } from 'lucide-react';

interface PlaylistProps {
  onNext: () => void;
}

const songs = [
  {
    title: "Lagu Romantis 1",
    url: "https://open.spotify.com/track/45kauLYtwLqqGYHn497rDP?si=02eca06d7cc0425e"
  },
  {
    title: "Lagu Romantis 2", 
    url: "https://open.spotify.com/track/6IPwKM3fUUzlElbvKw2sKl?si=e49686baf308491a"
  },
  {
    title: "Lagu Romantis 3",
    url: "https://open.spotify.com/track/1oAwsWBovWRIp7qLMGPIet?si=ce669e4523e04638"
  }
];

const Playlist = ({ onNext }: PlaylistProps) => {
  return (
    <PageContainer className="bg-gradient-to-br from-indigo-50 to-pink-100">
      <div className="text-center max-w-lg mx-auto fade-in-up">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Music className="w-8 h-8 text-pink-500" />
          <h1 className="text-3xl font-bold text-pink-600">
            Lagu buat kamu 🎶
          </h1>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg romantic-glow mb-6">
          <div className="space-y-4">
            {songs.map((song, index) => (
              <div key={index} className="p-4 bg-pink-50 rounded-lg border border-pink-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-pink-400" />
                    <span className="text-gray-700 font-medium">
                      Lagu Romantis {index + 1}
                    </span>
                  </div>
                  
                  <a
                    href={song.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
                  >
                    <Music className="w-4 h-4" />
                    <span className="text-sm font-medium">Play</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-pink-100 to-rose-100 rounded-lg">
            <p className="text-pink-700 italic">
              "Dengerin sambil inget pelukanku 🫂"
            </p>
          </div>
        </div>

        <div className="text-sm text-pink-500 mb-6">
          💡 Tip: Klik "Play" untuk membuka di Spotify
        </div>

        <Button 
          variant="romantic" 
          size="lg"
          onClick={onNext}
        >
          Next - Pesan Terakhir 💌
        </Button>
      </div>
    </PageContainer>
  );
};

export default Playlist;