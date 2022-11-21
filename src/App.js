import React, { lazy, Suspense, useState } from 'react';
import Spinner from "react-spinners/CircleLoader";
import { FaArrowCircleUp } from 'react-icons/fa';

const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));
const Project = lazy(() => import('./components/Project'));
const Skill = lazy(() => import('./components/Skill'));
const Contact = lazy(() => import('./components/Contact'));
const Education = lazy(() => import('./components/Education'))
function App() {

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);
  return (
    <Suspense
      fallback={
        <Spinner />
      }
    >
      <div className='App container my-10 mx-auto max-w-screen-lg bg-black'>
        <Header />
        <main>
          <Hero />
          <Education />
          <Project />
          <Skill />
          <Contact />
          <button style={{position: 'fixed', width: '100%', left: '47%', bottom: '60px', height: '20px', fontSize: '3rem', zIndex: '1', cursor: 'pointer', color: 'pink'}}>
            <FaArrowCircleUp onClick={scrollToTop}
              style={{ display: visible ? 'inline' : 'none' }} />
          </button>
        </main>
      </div>
    </Suspense>
  );
}

export default App;
