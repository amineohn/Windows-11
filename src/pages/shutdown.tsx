const Shutdown = () => {
    return (
        <div className="dark:bg-black bg-blue-200 w-screen min-h-screen z-[9999] fade-in">
            <div className="flex h-screen space-y-10 flex-col justify-center items-center">
                <div className="border-t-transparent w-36 h-36 border-4 border-black dark:border-white border-dotted rounded-full animate-spin"></div>
                <span className="text-2xl dark:text-white">Shutting down</span>
            </div>
        </div>
    );
};
export default Shutdown;
