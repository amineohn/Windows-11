import moment from "moment";
import { useRouter } from "next/router";
export default function Home() {
    moment().locale("fr");
    const date = moment().format("dddd MMMM Do");
    const time = moment().format("HH:mm");
    const router = useRouter();
    return (
        <>
            <div className="flex flex-col justify-between backdrop-blur-lg" onClick={() => router.push("/login")}>
                <main className="flex flex-col justify-center min-h-screen items-center w-full h-full">
                    <div className="slide-in-top flex flex-col justify-center items-center">
                        <h1 className="text-7xl text-white">{time}</h1>
                        <h1 className="text-white">{date}</h1>
                        <div className="mt-3">
                            <button
                                className="bg-neutral-900/70 hover:bg-neutral-900/80 transition-colors text-white px-12 rounded-lg py-3 focus:outline-none focus:shadow-outline"
                                onClick={() => router.push("/login")}>
                                Connexion
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
