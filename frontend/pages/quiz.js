import React, { useState } from 'react'




function Quiz() {
    const [correct, setCorrect] = useState(false);
    const [incorrect, setIncorrect] = useState(false);
    const [neutral, setNeutral] = useState(true);
    return (
        <>
            <div style={{ backgroundColor: "#9cd1cb", height: "100vh" }}>
                <div className='w-100 d-flex align-items-center justify-content-between' style={{ height: "80px", filter: "drop-shadow(1px 1px 10px grey)" }}>
                    <div className='col-md-4 d-flex align-items-center justify-content-center' style={{ backgroundColor: "#7aad8c", height: "100%" }}>
                        <h2 style={{ color: "#f6f2d2" }} className="neon"><b>EduKare</b></h2>
                    </div>
                    <div className='col-md-8 d-flex align-items-center justify-content-around' style={{ backgroundColor: "#9fd2ca", height: "100%" }}>
                        <a href='/' className='text-decoration-none'><p className='m-0 ' style={{ fontSize: "20px", color: "#652f05" }}><b >Home</b></p></a>
                        <a href='/' className='text-decoration-none'><p className='m-0' style={{ fontSize: "20px", color: "#652f05" }}><b>About</b></p></a>
                        <a href='/' className='text-decoration-none'><p className='m-0' style={{ fontSize: "20px", color: "#652f05" }}><b>Contact</b></p></a>
                    </div>
                </div>
                <div className='d-flex flex-row align-items-center justify-content-center pt-5 pb-5 ps-3 pe-3 w-100'>
                    <div className='w-100 d-flex flex-column align-items-center'>
                        <h1 className='mb-5'>Quiz</h1>
                        <div className='col-md-12 d-flex flex-row align-items-center justify-content-around'>
                            <div className='col-md-4'>
                                <p style={{ fontSize: "large" }}>1.What is the capital of India?</p>

                                <div className='p-3 border rounded' style={{ backgroundColor: correct ? "lightgreen" : (incorrect ? "red" : "white") }} >
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style={{ height: "22px", width: "22px" }} />
                                    <label for="vehicle1"><p className='mb-0 ms-5' style={{ fontSize: "large" }}>Delhi</p> </label>
                                </div>
                                <br />
                                <div className='p-3 border rounded bg-light' >
                                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Bike" style={{ height: "22px", width: "22px" }} />
                                    <label for="vehicle2"><p className='mb-0 ms-5' style={{ fontSize: "large" }}>Jodhpur</p> </label>
                                </div>
                                <br />
                                <div className='p-3 border rounded bg-light' >
                                    <input type="checkbox" id="vehicle3" name="vehicle3" value="Bike" style={{ height: "22px", width: "22px" }} />
                                    <label for="vehicle3"><p className='mb-0 ms-5' style={{ fontSize: "large" }}>Jaipur</p> </label>
                                </div>
                                <br />
                                <div className='p-3 border rounded bg-light' >
                                    <input type="checkbox" id="vehicle4" name="vehicle4" value="Bike" style={{ height: "22px", width: "22px" }} />
                                    <label for="vehicle4"><p className='mb-0 ms-5' style={{ fontSize: "large" }}>Kolkata</p> </label>
                                </div>
                                <br />

                            </div>
                            <div className='col-md-4'>
                                <p style={{ fontSize: "large" }}>1.What is the capital of India?</p>
                                <div className='p-3 border rounded bg-light' >
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style={{ height: "22px", width: "22px" }} />
                                    <label for="vehicle1"><p className='mb-0 ms-5' style={{ fontSize: "large" }}>Delhi</p> </label>
                                </div>
                                <br />
                                <div className='p-3 border rounded bg-light' >
                                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Bike" style={{ height: "22px", width: "22px" }} />
                                    <label for="vehicle2"><p className='mb-0 ms-5' style={{ fontSize: "large" }}>Jodhpur</p> </label>
                                </div>
                                <br />
                                <div className='p-3 border rounded bg-light' >
                                    <input type="checkbox" id="vehicle3" name="vehicle3" value="Bike" style={{ height: "22px", width: "22px" }} />
                                    <label for="vehicle3"><p className='mb-0 ms-5' style={{ fontSize: "large" }}>Jaipur</p> </label>
                                </div>
                                <br />
                                <div className='p-3 border rounded bg-light' >
                                    <input type="checkbox" id="vehicle4" name="vehicle4" value="Bike" style={{ height: "22px", width: "22px" }} />
                                    <label for="vehicle4"><p className='mb-0 ms-5' style={{ fontSize: "large" }}>Kolkata</p> </label>
                                </div>
                                <br />

                            </div>
                        </div>
                        <div className='mt-4'>
                            <button className='btn btn-primary pe-5 ps-5' style={{ backgroundColor: "#7aad8c", border: "none", fontSize: "large" }}>Submit</button>
                        </div>
                    </div>



                </div>


            </div>
        </>
    )
}

export default Quiz