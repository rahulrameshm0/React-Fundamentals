import { useState } from "react"

export const LoginCard = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [message, setMessage] = useState("")

    const handleLogin = () => {
        setIsLoggedIn(!isLoggedIn)
    }

    const handleMessage = (event) => {
        setMessage(event.target.value)
    }
    return(
        <div>
            <button onClick={handleLogin}>{isLoggedIn ? "Logout": "Login"}</button>
            <input type="text" placeholder="Type a message" onChange={handleMessage} value={message}/>
            <p>{message}</p>
        </div>
    )

};