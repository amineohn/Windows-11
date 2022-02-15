import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
export default function Home() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const router = useRouter();
    const handleSubmit = (e: FormEvent<HTMLElement>) => {
        e.preventDefault();
        if (password === "") {
            setError("Please, enter the password");
            setSuccess("");
        }
        if (password === "password") {
            router.push("/home");
            setError("");
            setSuccess("Welcome to Windows 11.");
            localStorage.setItem("isLogged", "true");
            localStorage.setItem("password", password);
        }
        if (password !== "password") {
            setError("Password is incorrect");
            setSuccess("");
        }
    };
    return (
        <>
            <div className="flex flex-col justify-between backdrop-blur-lg" onDragEnter={() => router.push("/login")}>
                <main className="flex flex-col justify-center min-h-screen items-center w-full h-full">
                    <div className="">
                        <div className="space-y-2">
                            <div className="flex justify-center items-center">
                                <img src="https://avatars.githubusercontent.com/u/38817327?v=4" className="w-48 h-48 rounded-full" alt="me" />
                            </div>
                            <form method="POST" onSubmit={handleSubmit}>
                                <input
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={`w-80 h-12 px-4 py-4 rounded-lg bg-neutral-900/70 text-gray-100 placeholder-gray-100 border-b-[3px] border-r-2 border-r-neutral-800 border-l-2 border-l-neutral-800 border-t-2 border-t-neutral-800 ${
                                        error ? "border-b-red-700" : "border-b-rose-700"
                                    } ${success ? "border-b-green-700" : "border-b-rose-700"} focus:outline-none focus:shadow-outline`}
                                    placeholder="Password"
                                    autoComplete="off"
                                />
                                {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
                                {success && <p className="text-green-600 text-sm mt-2">{success}</p>}
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
