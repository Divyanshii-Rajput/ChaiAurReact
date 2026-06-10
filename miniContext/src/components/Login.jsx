import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'
import Profile from './Profile'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                backgroundColor: "lightblue",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "100px"
            }}
        >
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                />

                <br />

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />

                <br />
                <br />

                <button type="submit">
                    Submit
                </button>
            </form>

            <br />
            <br />

            <Profile />
        </div>
    )
}

export default Login