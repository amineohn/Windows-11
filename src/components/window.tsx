import { WindowProps } from "@/interfaces";
import { Transition } from "@headlessui/react";
import Draggable from "react-draggable";

const Window = ({ open, onClick, title, icon, content }: WindowProps) => {
    return (
        <Transition
            show={open}
            enter="transition-opacity duration-500 ease-in scale-in-bottom"
            enterFrom="opacity-0"
            enterTo="opacity-100 scale-in-bottom"
            leave="transition-opacity duration-500 ease-out scale-out-bottom"
            leaveFrom="opacity-100"
            leaveTo="opacity-0 duration-500 scale-out-bottom">
            <Draggable>
                <div className="group w-[600px] h-96 bg-white dark:bg-neutral-900 shadow-lg border border-gray-50 dark:border-neutral-600 rounded-md">
                    <div className="bg-white dark:bg-neutral-900 rounded-tl-md rounded-tr-md px-2 py-2 h-10">
                        <div className="flex items-center justify-between">
                            <div className="bg-black px-5 py-1.5 rounded-t-md w-60 h-8 z-1">
                                <h1 className="inline-flex justify-center items-center text-[#F1F1F1] font-light text-sm">
                                    {icon}
                                    {title}
                                </h1>
                            </div>
                            <div onClick={onClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    {content}
                </div>
            </Draggable>
        </Transition>
    );
};
export default Window;
