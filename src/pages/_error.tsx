const Error = () => {
    return (
        <div className="w-screen h-screen px-6 pb-32 text-white bg-black sm:px-36 sm:pb-40 z-50">
            <div className="my-0 flex flex-col items-start justify-center space-y-10 fade-in">
                <h2 className="sr-only">Error Handling</h2>
                <div aria-hidden="true" className="text-d-h1 sm:text-d-j md:text-[length:120px]">
                    :)
                </div>
                <p className="sm:max-w-4xl md:text-[length:30px] md:leading-[40px] font-light">
                    Your device ran into a problem. and needs to restart. We're just collecting some error info, and then you can restart.
                </p>
                <div className="sm:max-w-4xl md:text-[length:30px] md:leading-[40px] font-light">100% complete</div>

                <div className="inline-flex space-x-5">
                    <img className="w-40 h-40" alt="" aria-hidden="true" src="/static/images/qrcode.png" />
                    <div className="flex flex-col space-y-2 font-light">
                        <span>For more information about this issue and possibles fixes visit</span>
                        <a href="https://www.windows.com/stopcode"> https://www.windows.com/stopcode</a>
                        <br />
                        <span>If you call a support person, give them this info:</span>
                        <span>Stop code: SESSION1_INITIALIZATION_FAILED</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Error;
