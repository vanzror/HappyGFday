import { ReactNode } from 'react';
import FloatingHearts from './FloatingHearts';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

const PageContainer = ({ children, className = '' }: PageContainerProps) => {
  return (
    <div className={`min-h-screen relative flex flex-col ${className}`}>
      <FloatingHearts />
      <div className="flex-1 flex flex-col justify-center items-center px-4 py-8 relative z-10">
        {children}
      </div>
    </div>
  );
};

export default PageContainer;