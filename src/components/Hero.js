import React from 'react';
import { FRONT_PAGE_DESC, FRONT_PAGE_NAME } from '../root.link';
import pro from '../images/Kmutnb-year-1.jpg'

const Hero = () => {


  return (
    <section className='my-16 px-5 md:my-32 flex flex-col flex-wrap space-y-16 md:space-y-0 patterns'>
      
      <div className='ml-auto w-72 md:w-96 lg:w-2/5'>
        <img src={pro} style={{ borderRadius: '50%', width: '500px', height: '500px', marginRight:'30px'}} alt={FRONT_PAGE_NAME}></img>
      </div>
      <div className='max-w-md mb-auto space-y-5'>
        <h1 className='text-5xl font-bold md:text-7xl'>Hello. I’m {FRONT_PAGE_NAME}</h1>
        <p className='tracking-wide leading-relaxed'>
          {FRONT_PAGE_DESC}{' '}
        </p>
        
      </div>
    </section>
  );
};

export default Hero;
