import React from 'react'
import educationHistory from '../ExData'
import './style.ex.css'
function Education() {
    return (
        <div id="Education">
            <section className='my-28 px-5' id='projects'>
                <header className='text-2xl font-bold pt-10'>
                    <h2>Education</h2>
                </header>
                <div className=''>
                    <div className="main-cont">
                        <section id="cd-timeline" className="cd-container">
                            {educationHistory && educationHistory.map((study) => (
                                <div className="cd-timeline-block">
                                    <div className="cd-timeline-img cd-picture"></div>
                                    <div className="cd-timeline-content">
                                        <h1 className="uppercase font-bold text-2xl pl-3 pt-2 flex">{study?.schoolName}
                                            <span>
                                            {study?.link &&
                                                <div className='w-auto flex space-x-5 ml-2 mt-1x relative'>

                                                    <a href={study.link} target='_blank' rel='noreferrer'>
                                                        <img src='./images/icons/external-link.svg' alt='link to live website' width='24px' height='24px' />
                                                    </a>
                                                </div>
                                            }
                                        </span></h1>
                                        <h1 className="uppercase font-bold text-xl pl-3 pt-2">{study?.schoolFullName}</h1>
                                        <h4 className="uppercase font-bold text-base pl-3 pt-2">{study?.role}</h4>

                                        <div class="timeline-content-info">
                                            <h5 className='text-sm' >{study.duration}</h5>
                                        </div>
                                        <div className='pl-2'>
                                            {study?.Des && study.Des.map((x) => (
                                                <h4 className='text-base pt-2'> <span className="text-2xl">-</span> {x} </h4>
                                            ))}
                                            
                                        </div>
                                        
                                        
                                    </div>
                                </div>
                            ))}
                            
                            
                            
                        </section>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Education
