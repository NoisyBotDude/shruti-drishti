import React from 'react'

function naavbaar() {
    return (
        <div> <nav class="navbar navbar-expand-lg" style={{ boxShadow: "0px 5px 10px rgba(259, 233, 252, 0.1);" }}>
            <div class="container-fluid">
                <a class="navbar-brand text-white neon" href="#"><h1 className='m-0'>SYNAPSE</h1></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse w-100 d-flex flex-row justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active text-white neon" aria-current="page" href="/main"><h5 className='m-0'>HOME</h5></a>
                        <a class="nav-link active text-white neon" href="#"><h5 className='m-0'>CONTACT US</h5></a>
                    </div>
                </div>
            </div>
        </nav></div>
    )
}

export default naavbaar