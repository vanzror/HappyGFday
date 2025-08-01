import { useState } from 'react';
import Welcome from './Welcome';
import Gallery from './Gallery';
import LoveLetter from './LoveLetter';
import Trivia from './Trivia';
import Playlist from './Playlist';
import Closing from './Closing';

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    <Welcome onNext={() => setCurrentPage(1)} />,
    <Gallery onNext={() => setCurrentPage(2)} />,
    <LoveLetter onNext={() => setCurrentPage(3)} />,
    <Trivia onNext={() => setCurrentPage(4)} />,
    <Playlist onNext={() => setCurrentPage(5)} />,
    <Closing />
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
