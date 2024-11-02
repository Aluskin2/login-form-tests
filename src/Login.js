import React, { useState } from "react";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // Pełny URL do API (zmień na odpowiedni URL)
            const response = await fetch("http://localhost:5000/api/users");
            const users = await response.json();

            const userFound = users.some(
                (user) => user.username === username && user.password === password
            );

            if (userFound) {
                setMessage("Zalogowano poprawnie");
            } else {
                setMessage("Błąd autoryzacji");
            }
        } catch (error) {
            console.error("Błąd podczas logowania", error);
            setMessage("Błąd serwera");
        }
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Login:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Hasło:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Zaloguj się</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Login;