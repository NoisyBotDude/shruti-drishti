import React from 'react'

function Navbaar() {
    return (
        <div className='w-100 d-flex align-items-center justify-content-between' style={{ height: "80px", filter: "drop-shadow(1px 1px 10px grey)" }}>
            <div className='col-md-4 d-flex align-items-center justify-content-center' style={{ backgroundColor: "#7aad8c", height: "100%" }}>
                <h2 style={{ color: "#f6f2d2" }} className="neon"><b>LakShaya</b></h2>
            </div>
            <div className='col-md-8 d-flex align-items-center justify-content-around' style={{ backgroundColor: "#9fd2ca", height: "100%" }}>
                <a href='/home' className='text-decoration-none'><p className='m-0 ' style={{ fontSize: "20px", color: "#652f05" }}><b >Home</b></p></a>
                <a href='/search-results' className='text-decoration-none'><p className='m-0' style={{ fontSize: "20px", color: "#652f05" }}><b>Search-Results</b></p></a>
                <a href='/quiz' className='text-decoration-none'><p className='m-0' style={{ fontSize: "20px", color: "#652f05" }}><b>Quiz</b></p></a>
                <a href='/' className='text-decoration-none'><p className='m-0' style={{ fontSize: "20px", color: "#652f05" }}><b>Back</b></p></a>
            </div>
        </div>
    )
}

export default Navbaar