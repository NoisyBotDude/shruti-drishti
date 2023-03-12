import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import handImage from '../public/images/hands.png';
import SkullImage from '../public/images/skull-1.png';
import xyro from '../public/images/xyro-1.png';
import Naavbaar from '../components/naavbaar'
import Link from 'next/link'

function main() {
    return (
        <>
            <div className='w-100 main ' style={{ fontFamily: "arial" }} >


                <Naavbaar />
                <div className='col-md-12 d-flex flex-row  justify-content-between pt-4 p-4 mb-3' >
                    <div className='col-md-4  mt-4 ps-2 pe-2' >
                        <div className='p-3' style={{ borderRadius: "15px", boxShadow: "0px 5px 20px rgba(259, 233, 252, 0.3);" }}>
                            <h3 className='neon p-2'>WE ARE SYNAPSE</h3>
                            <div className='header-subtext p-2 opacity-75 ' >
                                <p className='text-align-center m-0' >Our webapp is here to bridge the communication gap between the signers .
                                    <br /> <br />
                                    We have used machine learning algorithms to analyze sign language feed from videos to generate the text which will be done in real-time, allowing non-signers to understand and respond to sign language users more easily.
                                    <br /> <br />
                                    Similarly, our WebApp takes text input and translate it into sign language videos or images, making it easier for deaf individuals to communicate with non-signers.

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 d-flex align-items-start justify-content-center '>
                        <div className='p-2' style={{ border: "2px solid white", borderRadius: "15px" }}>
                            <Image src={handImage} alt="Picture of the author" style={{ filter: "drop-shadow(0 0 2rem #763dbb);", borderRadius: "15px" }} />

                        </div>
                    </div>
                    <div className='col-md-4  mt-4 ps-2 pe-2' >
                        <div className='p-3' style={{ borderRadius: "15px", boxShadow: "0px 5px 20px rgba(259, 233, 252, 0.3);" }}>
                            <h3 className='neon p-2'>OUR MISSION</h3>
                            <div className='header-subtext p-2 opacity-75 ' >
                                <p className='text-align-center m-0' >Allow deaf people to easily communicate with non-signers through text and sign languages.
                                    <br /> <br />
                                    Allow deaf people to easily communicate with non-signers through text and sign languages.
                                    <br /> <br />
                                    Improves the quality of the communication by providing accurate and reliable translations
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
                <div className='col-md-12 d-flex flex-row pb-4'>
                    <div className='col-md-4 d-flex align-items-center justify-content-center'>
                        <Image src={SkullImage} width={400} alt=""/>
                    </div>
                    <div className='col-md-4 d-flex align-items-center justify-content-center'>
                        <button className='glow-on-hover me-2'>
                            Text-To-Video
                        </button>
                        <Link href='/video-text' className='text-decoration-none text-white'>
                            <button className='glow-on-hover ms-2'>
                                RealTime Video-To-Text
                            </button>
                        </Link>
                    </div>
                    <div className='col-md-4 d-flex align-items-center justify-content-center'>
                        <Image src={xyro} width={200} alt=""/>
                    </div>

                </div>

            </div>

        </>
    )
}

export default main