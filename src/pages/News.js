import React from 'react'
import {useNavigate} from 'react-router-dom'

function News () {
    const navigate = useNavigate()
    return (
        <div>
            <h1>News</h1>
            <button onClick = {() => navigate("/contact")}>Go to Contact page</button>


        </div>

    )
}
export default News;