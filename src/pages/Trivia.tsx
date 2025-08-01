import { useState } from 'react';
import { Button } from '@/components/ui/button';
import PageContainer from '@/components/PageContainer';
import { Brain, Trophy, Sparkles } from 'lucide-react';

interface TriviaProps {
  onNext: () => void;
}

const questions = [
  {
    question: "Kapan pertama kali kamu chat aku di aplikasi HER?",
    options: [
      "Jumat, 6 September 2024",
      "Minggu, 8 September 2024", 
      "Senin, 9 September 2024",
      "Rabu, 11 September 2024"
    ],
    correct: 2
  },
  {
    question: "Kapan pertama kali aku kasih kamu bunga? yang di TW2 itu lhoo!!",
    options: [
      "Senin, 30 September 2024",
      "Rabu, 2 Oktober 2024",
      "Kamis, 3 Oktober 2024",
      "Jumat, 4 Oktober 2024"
    ],
    correct: 1
  },
  {
    question: "Kapan pertama kali kita call WA? HAYOOO PASTI GA INGET KANNN!!",
    options: [
      "Jumat, 27 September 2024",
      "Sabtu, 28 September 2024",
      "Minggu, 29 September 2024",
      "Senin, 30 September 2024"
    ],
    correct: 2
  },
  {
    question: "Kapan pertama kali kita foto bareng??? Aku yakin 100% kamu ga inget ini, WLEEEEE!!",
    options: [
      "Kamis, 3 Oktober 2024",
      "Jumat, 4 Oktober 2024",
      "Sabtu, 5 Oktober 2024",
      "Minggu, 6 Oktober 2024"
    ],
    correct: 1
  }
];

const Trivia = ({ onNext }: TriviaProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [romanticRating, setRomanticRating] = useState(5);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const nextQuestion = () => {
    if (selectedAnswer !== null) {
      const newAnswers = [...answers, selectedAnswer];
      setAnswers(newAnswers);
      setSelectedAnswer(null);
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
    }
  };

  const getResults = () => {
    const correctAnswers = answers.filter((answer, index) => answer === questions[index].correct).length;
    const totalQuestions = questions.length;
    
    if (correctAnswers >= 4) {
      return {
        message: `Kamu jawab ${correctAnswers} dari ${totalQuestions} dengan benar! Ciee yang hafal banget soal kita 💖`,
        emoji: "🏆",
        confetti: true
      };
    } else {
      return {
        message: `Hmm... cuma ${correctAnswers} yang benar. PARAHHHHHHH GA LULUS UJIAN NGD (National Girlfriend Day) 😆💕`,
        emoji: "😅",
        confetti: false
      };
    }
  };

  if (showResults) {
    const results = getResults();
    return (
      <PageContainer className="bg-gradient-to-br from-purple-50 to-pink-100">
        <div className="text-center max-w-lg mx-auto fade-in-up">
          {results.confetti && (
            <div className="text-6xl mb-4 confetti-fall">🎉</div>
          )}
          
          <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4 gentle-bounce" />
          
          <h1 className="text-3xl font-bold text-pink-600 mb-6">
            Hasil Quiz! {results.emoji}
          </h1>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg romantic-glow mb-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              {results.message}
            </p>
            
            <div className="mt-4 p-4 bg-pink-50 rounded-lg">
              <p className="text-pink-600 font-medium">
                Rating romantis kamu untuk aku: {romanticRating}/10 ✨
              </p>
            </div>
          </div>
          
          <Button 
            variant="romantic" 
            size="lg"
            onClick={onNext}
          >
            Next - Dengerin Playlist 🎵
          </Button>
        </div>
      </PageContainer>
    );
  }

  // Special rating question
  if (currentQuestion === 2 && selectedAnswer === null) {
    return (
      <PageContainer className="bg-gradient-to-br from-purple-50 to-pink-100">
        <div className="text-center max-w-lg mx-auto fade-in-up">
          <Brain className="w-12 h-12 text-pink-500 mx-auto mb-4" />
          
          <h1 className="text-2xl font-bold text-pink-600 mb-6">
            Question {currentQuestion + 1} of {questions.length + 1}
          </h1>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg romantic-glow mb-6">
            <h2 className="text-xl font-medium text-gray-800 mb-6">
              Rate seberapa romantis aku waktu kita pdkt-closure-awal jadian?
            </h2>
            
            <div className="space-y-4">
              <input
                type="range"
                min="0"
                max="10"
                value={romanticRating}
                onChange={(e) => setRomanticRating(parseInt(e.target.value))}
                className="w-full h-2 bg-pink-200 rounded-lg appearance-none cursor-pointer slider"
              />
              
              <div className="text-2xl font-bold text-pink-600">
                {romanticRating}/10
              </div>
              
              <div className="flex justify-between text-sm text-gray-500">
                <span>Ga romantis</span>
                <span>Sangat romantis!</span>
              </div>
            </div>
          </div>
          
          <Button 
            variant="romantic" 
            onClick={() => setSelectedAnswer(romanticRating)}
          >
            Lanjut ke Pertanyaan Berikutnya
          </Button>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer className="bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="text-center max-w-lg mx-auto fade-in-up">
        <Brain className="w-12 h-12 text-pink-500 mx-auto mb-4" />
        
        <h1 className="text-2xl font-bold text-pink-600 mb-2">
          Trivia Couple 🧠
        </h1>
        
        <p className="text-pink-500 mb-6">
          Question {currentQuestion + 1} of {questions.length}
        </p>
        
        <div className="bg-white p-6 rounded-2xl shadow-lg romantic-glow mb-6">
          <h2 className="text-xl font-medium text-gray-800 mb-6">
            {questions[currentQuestion].question}
          </h2>
          
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`w-full p-3 text-left rounded-lg border-2 transition-all ${
                  selectedAnswer === index
                    ? 'border-pink-400 bg-pink-50 text-pink-700'
                    : 'border-gray-200 hover:border-pink-200 hover:bg-pink-25'
                }`}
              >
                <span className="font-medium text-pink-600 mr-2">
                  {String.fromCharCode(65 + index)}.
                </span>
                {option}
              </button>
            ))}
          </div>
        </div>
        
        <Button 
          variant="romantic" 
          onClick={nextQuestion}
          disabled={selectedAnswer === null}
          className="disabled:opacity-50"
        >
          {currentQuestion === questions.length - 1 ? 'Lihat Hasil!' : 'Next Question'}
        </Button>
      </div>
    </PageContainer>
  );
};

export default Trivia;