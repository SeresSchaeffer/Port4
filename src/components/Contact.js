import React, { useState, useRef } from 'react';
import emailjs from "@emailjs/browser";
import { ADDRESS, EMAIL_ID, FIRST_NAME, GITHUB_USERNAME, LAST_NAME, RESUME_PATH, FACEBOOK_USERNAME } from '../root.link'

const Contact = () => {
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  window.addEventListener('scroll', toggleVisible);

  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0oyy9dp",
        "template_b0dw4w7",
        form.current,
        "tPWloVwatfW-JOdCn"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(
        setTimeout(()=>{
          setDone(false);
        }, 5000)
      );
  };

  return (
    <section className='my-28' id='contact'>
      <header className='px-5 text-2xl font-bold pt-10'>
        <h2>Contact Me</h2>
        <p className='text-base font-thin'>I'd love to hear your thoughts!</p>
      </header>
      <div className='md:mx-6 flex flex-col flex-wrap md:flex-row justify-between'>
        <div className='md:w-6/12 md:px-0 p-5 my-5'>
          <div>
            <p className='font-bold'>{FIRST_NAME} {LAST_NAME}</p>
            <p className='font-thin'>{ADDRESS}</p>
            <a href={`mailto: ${EMAIL_ID}`} className='border-b-2 mt-3 inline-block border-gray-500'>
              {EMAIL_ID}
            </a>
          </div>
          <a className='border-b-2 mt-3 inline-block border-gray-500' href={RESUME_PATH} target='_blank' rel='noreferrer'>
            Resume
          </a>
          <div className='flex flex-row flex-wrap mt-7'>
            

            <div className='mr-4'>
              <a href={`https://github.com/${GITHUB_USERNAME}`} target='_blank' rel='noreferrer'>
                <span className='mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm'>
                  <img src='./images/icons/github.svg' alt='' width='24px' height='24px' className='mr-1' />
                  GitHub
                </span>
              </a>
            </div>
            <div className='mr-4'>
              <a href={`https://www.facebook.com/${FACEBOOK_USERNAME}`} target='_blank' rel='noreferrer'>
                <span className='mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm'>
                  <img src='./images/icons/facebook-svgrepo-com.svg' alt='' width='24px' height='24px' className='mr-1' />
                  Facebook
                </span>
              </a>
            </div>
            
          </div>
        </div>

        <div className='bg-gray px-5 py-10 md:py-8 sm:p-8 my-2 md:rounded-lg shadow-lg  justify-between w-full  md:w-6/12 '>
          <form className='flex flex-col space-y-3 m-auto w-full' name='contact' form ref={form} onSubmit={sendEmail}>
            <input type='hidden' name='form-name' value='contact' />

            <label htmlFor='name'>Name</label>
            <input type='text' name='user_name' id='name' className='gradient' required></input>
            <label htmlFor='email'>Email</label>
            <input type='email' name='user_email' id='email' className='gradient' required></input>
            <label htmlFor='message'>Message</label>
            <textarea name='message' id='message' cols='25' rows='5' className='gradient' required></textarea>
            <button type='submit' className='border border-gray-500 p-2 rounded-lg w-auto mr-auto shadow-md' >
              Send Message
            </button>
            <span>{done && "Thanks for Contacting me"}</span>
          </form>
        </div>
      </div>
      <div className='relative md:bottom-56 mr-auto ml-auto md:mr-auto md:ml-0 max-w-xs md:max-w-sm' onClick={() => window.scroll(0, 0)}>
        <picture onClick={scrollToTop} style={{display: visible ? 'inline' : 'none' , height:'30px', width:'30px', cursor:'pointer'}}>
          <source srcSet='./images/rocket-320.webp 320w, ./images/rocket.webp 768w' type='image/webp' />
          <source srcSet='./images/rocket.png' sizes='(min-width: 768px) 50vw, 100vw' type='image/png' />
          <img width='500px' height='500px' loading='lazy' alt='red rocket flying' />
        </picture>
      </div>
      
    </section>
  );
};

export default Contact;
