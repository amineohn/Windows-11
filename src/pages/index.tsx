import { Transition } from "@headlessui/react";
import { format } from "date-fns";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function Home() {
    const time = format(new Date(), "HH:mm");
    const date = format(new Date(), "EEEE, MMMM dd");

    const [startWindows, setStartWindows] = useState(true);
    const [showLogin, setShowLogin] = useState(false);
    const router = useRouter();
    useEffect(() => {
        setInterval(() => {
            setStartWindows(false);
        }, 1500);
        setInterval(() => {
            setShowLogin(true);
        }, 1501);
        if (localStorage.getItem("isLogged")) {
            router.push("/home");
        }
    }, []);
    return (
        <>
            <div className="flex flex-col bg-black/10 justify-between backdrop-blur-lg" onClick={() => router.push("/login")}>
                <main className="flex flex-col justify-center min-h-screen items-center w-full h-full">
                    <Transition
                        show={startWindows}
                        enter="transition-opacity duration-500 ease-in"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-500 ease-out"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0 duration-500"
                        className="bg-black w-screen min-h-screen z-[9999]">
                        <div className="flex h-screen space-y-10 flex-col justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" version="1.1" viewBox="0 0 48.745 48.747">
                                <g fill="#0078d4">
                                    <rect x="2.2848e-15" y="-.00011033" width="23.105" height="23.105" />
                                    <rect x="25.64" y="-.00011033" width="23.105" height="23.105" />
                                    <rect x="2.2848e-15" y="25.642" width="23.105" height="23.105" />
                                    <rect x="25.64" y="25.642" width="23.105" height="23.105" />
                                </g>
                            </svg>
                            <div className="border-t-transparent w-10 h-10 border-4 border-white border-dotted rounded-full animate-spin"></div>
                        </div>
                    </Transition>
                    <Transition
                        show={showLogin}
                        enter="transition-opacity duration-500 ease-in"
                        enterFrom="opacity-0"
                        enterTo="opacity-100 duration-500"
                        leave="transition-opacity duration-500 ease-out"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0 duration-500">
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-7xl text-white">{time}</h1>
                            <h1 className="text-white">{date}</h1>
                            <div className="mt-3">
                                <button
                                    className="bg-neutral-900/70 hover:bg-neutral-900/80 transition-colors text-white border-t-transparent border-l-transparent border-r-transparent px-12 rounded-lg py-2.5 focus:outline-none focus:shadow-outline"
                                    onClick={() => router.push("/login")}>
                                    Login
                                </button>
                            </div>
                        </div>
                    </Transition>
                </main>
            </div>
        </>
    );
}
