import { useState } from "react"
import { Navigate } from "react-router-dom"

export default function Home() {
    const [user, setUser] = useState('mario')

    if (!user) {
        return <Navigate to='/' replace={true}/>
    }

    return (
        <div className="about">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad ea minus cupiditate odio error fugit officiis nobis quasi reprehenderit, eligendi ullam, exercitationem sapiente, voluptate at perferendis? Voluptates doloremque expedita nulla.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad ea minus cupiditate odio error fugit officiis nobis quasi reprehenderit, eligendi ullam, exercitationem sapiente, voluptate at perferendis? Voluptates doloremque expedita nulla.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad ea minus cupiditate odio error fugit officiis nobis quasi reprehenderit, eligendi ullam, exercitationem sapiente, voluptate at perferendis? Voluptates doloremque expedita nulla.</p>
            <button onClick={() => setUser(null)}>Logout</button>
        </div>
    )
}