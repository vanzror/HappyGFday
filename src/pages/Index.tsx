import { useState } from 'react';
import Welcome from './Welcome';
import Gallery from './Gallery';
import LoveLetter from './LoveLetter';
import Trivia from './Trivia';
import Playlist from './Playlist';
import Closing from './Closing';

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const goNext = () => setCurrentPage(prev => prev + 1);
  const goBack = () => setCurrentPage(prev => prev - 1);
  const restart = () => setCurrentPage(0);

  const pages = [
    <Welcome onNext={goNext} />,
    <Gallery onNext={goNext} onBack={goBack} />,
    <LoveLetter onNext={goNext} onBack={goBack} />,
    <Trivia onNext={goNext} onBack={goBack} />,
    <Playlist onNext={goNext} onBack={goBack} />,
    <Closing onBack={goBack} onRestart={restart} />
  ];

  return (
    <div className="min-h-screen">
      <div className="slide-in-right">
        {pages[currentPage]}
      </div>
    </div>
  );
};

export default Index;
