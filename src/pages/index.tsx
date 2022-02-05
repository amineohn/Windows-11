import Icons from "@/components/Icons";

export default function Home() {
    return (
        <div className="flex flex-col justify-between">
            <main className="flex justify-center min-h-screen items-center w-full h-full">
                <div className="flex flex-col">
                    <div className="w-[550px] h-96 bg-white rounded-md">
                        <div className="bg-white rounded-tl-md rounded-tr-md px-2 py-2 h-10">
                            <div className="flex items-center justify-between">
                                <div>Warning</div>
                                <div>Close</div>
                            </div>
                        </div>
                        <div className="px-3 py-3">Not finished yet.</div>
                    </div>
                </div>
            </main>
            <div className="bg-[#F3F3F3]/90 backdrop-blur-sm py-1">
                <div className="flex justify-center items-center space-x-3">
                    <Icons icon="start" className="w-6 h-6" />
                    <Icons icon="search" className="w-6 h-6" />
                    <Icons icon="teams" className="w-6 h-6" />
                    <Icons icon="explorer" className="w-6 h-6" />
                    <Icons icon="edge" className="w-6 h-6" />
                    <div className="flex items-center justify-end">
                        <div className="flex justify-end items-center w-20 h-10">
                            <Icons icon="battery" className="w-6 h-6" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
