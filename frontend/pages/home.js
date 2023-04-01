import React from 'react'
import Navbaar from '../components/Navbaar'
import axios from 'axios'

export default function Home() {

    const [search, setSearch] = React.useState('')
    const [results, setResults] = React.useState([])

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleResponseData = (data) => {
        let videoItems = data.items.filter((item) => {
            if (item.id.kind === 'youtube#video') {
                return item
            }
        })

        videoItems = videoItems.slice(0, 3)

        localStorage.setItem('videoItems', JSON.stringify(videoItems))

        // redirect it to another page
        window.location.href = '/search-results'
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:8000/user/search', {
            query: search,
            max_results: 15,
        }).then((res) => {
            // console.log(res.data)
            handleResponseData(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    return (

        <>
            <div style={{ backgroundColor: "#9cd1cb", height: "100vh" }}>
                <Navbaar />
                <div className='d-flex'>
                    <div className="d-flex flex-column justify-content-between mb-4">
                        <div className='ps-5 pt-5 col-md-9'>
                            <h1 className='mb-3' style={{ color: "#652f05", textAlign: "start" }}>SYNAPSE</h1>
                            <p style={{ textAlign: "start", lineHeight: "1.6rem", fontSize: "large" }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            <p style={{ color: "#652f05", textAlign: "start", fontSize: "large" }}>Lorem ipsum dolor</p>
                        </div>

                        <div className='ps-5 pt-5'>
                            <button className='ps-3 pe-3 pt-2 pb-2' style={{ backgroundColor: "#f68349", color: "white", borderRadius: "20px" }} >Start Learning</button>
                        </div>
                    </div>
                    <div className='col-md-6 d-flex  justify-content-center ps-5 pt-5'>
                        <img src='./images/illustration.png' alt='illustration' height={450} />
                    </div>
                </div>
                <div className='col-md-12 mt-4 d-flex flex-column align-items-center justify-content-center'>
                    <p style={{ fontSize: "large" }}><b>What Are You Interested In Today?</b></p>
                    <div className='w-50 d-flex flex-row align-items-center'>
                        <input type="search" placeholder="Search" className='col-md-12' style={{ borderRadius: "20px", border: "none", padding: "10px", backgroundColor: "#f6f2d2" }}
                            value={search}
                            onChange={handleSearch}
                        />
                        <button className='ps-3 pe-3 pt-2 pb-2 ms-3' style={{ backgroundColor: "#f68349", color: "white", borderRadius: "20px" }}
                            onClick={handleSubmit}
                        >Search</button>

                    </div>
                </div>
            </div>
        </>
    )
}
