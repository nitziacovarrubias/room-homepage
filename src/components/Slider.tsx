import { useState } from 'react';
import angleLeft from '../assets/images/icon-angle-left.svg'
import angleRight from '../assets/images/icon-angle-right.svg'

interface SliderProps {
  images: {
    mobile: string[];
    desktop: string[];
  };
}

export default function Slider({ images }: SliderProps) {
  const [heroImageIdx, setHeroImageIdx] = useState(0);
  const btnClass = "bg-black p-4 hover:opacity-50 hover:cursor-pointer xl:p-[33px]";
  const device = window.innerWidth > 375 ? 'desktop' : 'mobile';
  const arrLength = images[device].length;

  function onNextImage() {
    setHeroImageIdx((prevIdx) =>
      prevIdx + 1 < arrLength ? prevIdx + 1 : 0
  );
  }

  function onPrevImage() {
    setHeroImageIdx((prevIdx) =>
      prevIdx - 1 >= 0 ? prevIdx - 1 : arrLength - 1
  );
  }

  return (
    <div className='relative min-w-[375px] xl:min-w-[840px]'>
        <img src={images.mobile[heroImageIdx]} alt="Mobile" className="block md:hidden" />
        <img src={images.desktop[heroImageIdx]} alt="Desktop" className="hidden md:block" />
        <div className='absolute right-0 bottom-0 xl:right-[-159px]'>
          <button className={btnClass} onClick={() => onNextImage()}><img src={angleLeft} alt="" /></button>
          <button className={btnClass} onClick={() => onPrevImage()}><img src={angleRight} alt="" /></button>
        </div>
    </div>
  );
}