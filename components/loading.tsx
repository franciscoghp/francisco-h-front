import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

export default function Loading() {
  const [isClient, setIsClient] = useState(false);

  useEffect( () => {
    setIsClient(true);
  }, [])

  const renderLottie = () => {
    const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
    const animationData = require('../public/LoaderAnimation.json');

    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-white bg-opacity-50">
      <Lottie
        animationData={animationData}
        loop
        autoplay
        className="w-1/12"
      />
    </div>
    );
  };

  return (
    <div >
      {isClient && renderLottie()}
    </div>
    )
}