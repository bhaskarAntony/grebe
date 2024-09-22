import React from 'react'
import Graph from '../graph/Graph'
import './style.css'

function Why({courseData}) {
  return (
    <section className='p-2 mt-5'>
       <div className="container">
        <small className="small text-main">WHY FULLSTACK DEVELOPMENT</small>
        <h1 className="fs-1"><span className="text-green-gradient">Rising Demand </span><br /> and Career Growth</h1>
        <hr />
       <div className="row mt-4">
            <div className="col-md-4">
                <div className="why-card">
                    <Graph/>
                    <p className="fs-6  c-top">{courseData.AnnualSalary}</p>
                </div>
            </div>
            <div className="col-md-4 m-md-0">
                <h5 className="fs-5 fw-bold mb-4">Leading Global Companies Seeking Full Developers Globally</h5>
               <div className="d-flex gap-3 flex-wrap mt-4 companies-icons">
               <img src="https://www.mphasis.com/content/dam/mphasis-com/global/logo/mphasis-logo.png.thumb.468.468.png" alt="mphasis hiring at be practical" width={130} />
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1024px-IBM_logo.svg.png" alt="mphasis hiring at be practical" width={130}  />
               <img src="https://www.pc-tablet.co.in/wp-content/uploads/2024/06/Xerox-Partners-with-TCS-for-IT-Upgrade-Using-Cloud-and-AI.png" alt="mphasis hiring at be practical" width={130}  />
               <img src="https://awsmp-logos.s3.amazonaws.com/f097e641-5662-4b8d-87aa-368b56271d23/3899e43a042abf3ca26752e327be7345.png" alt="mphasis hiring at be practical" width={130}  />
               <img src="https://content.unqork.com/hs-fs/hubfs/Infosys.png?width=500&name=Infosys.png" alt="mphasis hiring at be practical" width={130}  />
               <img src="https://media.licdn.com/dms/image/v2/C560BAQHeJgrt1rlWPQ/company-logo_200_200/company-logo_200_200/0/1630565803651/datatemplate_logo?e=2147483647&v=beta&t=qPCREsXTpQxL3XIYJSCD7zuLsHLmD3G561oX_ZU3KzA" alt="mphasis hiring at be practical" width={130}  />
               </div>
               <p className="text-center text-secondary">and more...</p>
            </div>

            <div className="col-md-4">
                <div className="why-card">
                    <h5 className="fs-5 fw-bold mb-4">Designation</h5>
                <div className='fs-6 job-points' dangerouslySetInnerHTML={{ __html: courseData.Designation }} />
                </div>
            </div>
        </div>
       </div>
    </section>
  )
}

export default Why