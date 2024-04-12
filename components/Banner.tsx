import React from 'react';
import Image from 'next/image';

interface BannerProps {
  bannerSrc: string;
}

const Banner: React.FC<BannerProps> = ({ bannerSrc }) => {
  return (
    <div className='max-w-7xl mx-auto w-full'>
      <div className='w-full'>
        <Image src={bannerSrc} alt="Banner" width={2000} height={500} />
      </div>
    </div>
  );
}

export default Banner;