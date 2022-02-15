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
                <div className="group w-[550px] h-96 bg-neutral-900 shadow-lg border border-neutral-800 rounded-md z-50">
                    <div className="bg-neutral-900 rounded-tl-md rounded-tr-md px-2 py-2 h-10">
                        <div className="flex items-center justify-between">
                            <h1 className="inline-flex justify-center items-center text-[#F1F1F1]">
                                {icon}
                                {title}
                            </h1>
                            <div onClick={onClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke="#F1F1F1" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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
