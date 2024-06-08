import React from 'react'
import Navbar from './Navbar'

const Addtodo = () => {
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row g-3">

                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-16 col-xxl-6">
                        <label htmlFor="" className="form-label">Task Name</label>
                        <input type="Task Name" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-16 col-xxl-6">
                        <label htmlFor="" className="form-label">TaskID</label>
                        <input type="Photo ID" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-16 col-xxl-6">
                        <label htmlFor="" className="form-label">Level</label></div>
                    <select name="" id="" className="form-control">
                        <option value="High">High</option>
                        <option value="Medium">Medum</option>
                        <option value="Low">Low</option>

                    </select>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Source</label>
                    <input type="Source" className="form-control" />
                </div>

                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Description</label>
                </div>


                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-16 col-xxl-6">
                    <button className="btn btn-primary">Submit</button>
                </div>

            </div>

        </div>
        </div >
    )
}

export default Addtodo