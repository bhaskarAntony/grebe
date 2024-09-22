import React from 'react'
import './style.css'

function Numbers() {
  return (
    <div className='p-2 text-center number-container'>
        <div className="row">
                <div className="col-6 col-md-3">
                    <div className="number-card">
                        <h1 className="fs-1 text-green-gradient">100+</h1>
                        <p className="fs-6">Live Hours</p>
                    </div>
                </div>
                <div className="col-6 col-md-3">
                    <div className="number-card border-md-0">
                        <h1 className="fs-1 text-green-gradient">15+</h1>
                        <p className="fs-6">Tools</p>
                    </div>
                </div>
                <div className="col-6 col-md-3">
                    <div className="number-card">
                        <h1 className="fs-1 text-green-gradient">18</h1>
                        <p className="fs-6">Projects</p>
                    </div>
                </div>
                <div className="col-6 col-md-3">
                    <div className="number-card border-0">
                        <h1 className="fs-1 text-green-gradient">300+</h1>
                        <p className="fs-6">Assesments</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Numbers