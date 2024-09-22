import React, { useState } from 'react'
import './style.css'
import Numbers from '../numbers/Numbers'

function Hero({courseData, share}) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  return (
    <section className='hero-container p-2'>
        <div className="page-hero container p-3 p-md-3">
          <div className="row">
            <div className="col-md-7">
            <div className="d-flex gap-3 flex-wrap">
            <button className="tag-blue">POPULAR</button>
            <button className="tag-light"><i class="bi bi-code"></i> LEARN FROM BEST MENTORS</button>
            <i class="bi bi-share-fill fs-5" onClick={share}></i>
            </div>
           <div className="course-info mt-3">
           <small className="small text-main">{courseData.tag}</small>
           <h2 className="fs-4">{courseData.heroSubtitle}</h2>
           <h1 className="fs-1 text-green-gradient fw-bold">{courseData.courseName}</h1>
           <div>
      <div className={`fs-6 course-points ${expanded ? 'expanded' : ''}`}>
        <div dangerouslySetInnerHTML={{ __html: courseData.coursePoints }} />
      </div>
     <div className="d-flex justify-content-center">
     <button className="arrow-btn mt-2 mb-3" onClick={toggleExpanded}>
      {expanded ? <i class="bi bi-arrow-up-short"></i> :<i class="bi bi-arrow-down-short"></i>}
    </button>
     </div>
    </div>
           <div className="row">
           <div className="col-md-6">
           <button className="btn-outline w-100 mt-2">Download Syllabus</button>
           </div>
          <div className="col-md-6">
          <button className="btn-solid w-100 mt-2">Apply Now</button>
          </div>
           </div>
           </div>
            </div>
            <div className="col-md-5">
                
            </div>
          </div>
          <Numbers/>
        </div>
        
    </section>
  )
}

export default Hero