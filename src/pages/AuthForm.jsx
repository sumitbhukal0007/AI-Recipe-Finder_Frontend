import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";


export default function AuthForm() {
    const navigate = useNavigate();
    const [login, setLogin] = useState(true);                   // toggle login/register
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            console.log(name, email, password);

            if (login) {
                const res = await axios.post("http://localhost:5000/auth/login", {
                    email, password
                });
                console.log("login Success", res.data);
                localStorage.setItem("token", res.data.token)

                navigate("/chat")
            }
            else {

                const res = await axios.post("http://localhost:5000/auth/signup", {
                    name, email, password
                });
                console.log('registered Successfully', res.data)
                localStorage.setItem("token", res.body.token)


                navigate("/chat")
            }

        } catch (err) {
            console.error(err);
            setError(err.response?.data?.message || "Something went wrong in the AuthForm");
        }
    };

    return (
        <div>
            <button
                className='logo flex gap-2 items-center mt-2 p-2'
                onClick={() => navigate("/")}
            >
                <img src='src/assets/logo.svg' alt='logo' className='w-6' />
                <h1>Ai Recipe Finder</h1>
            </button>
            <div>

                <div className="w-full max-w-md mx-auto mt-10 p-6 rounded-2xl shadow-2xl bg-[#e1e1e1]-50">
                    <h2 className="center text-4xl pb-3 font-semibold ">
                        {login ? "Login" : "Register"}
                    </h2>
                    {error && <p className="text-red-500 mb-3">{error}</p>}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-4 shadow-lg m-4 p-4 rounded-2xl bg-[#c1c1c1]-50 ">
                        {!login && (
                            <input
                                id="name"
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="border-zinc-500 border-2 rounded-lg p-2"
                                autoComplete="true"

                            />
                        )}
                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="border-zinc-500 border-2 rounded-lg p-2"
                            autoComplete="true"

                        />
                        <input
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            // pattern="[A-Za-z0-9]{6,}"
                            required
                            className="border-zinc-500 border-2 rounded-lg p-2"
                            autoComplete="true"

                        />
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white rounded p-2 hover:bg-blue-700"
                        >
                            {login ? "Login" : "Register"}
                        </button>
                    </form>
                    <div className="mt-4 text-center">
                        <button
                            onClick={() => setLogin(!login)}
                            className="text-blue-600 hover:underline rounded-2xl"
                        >
                            {login ? "Don't have an account? Register" : "Already have an account? Login"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
