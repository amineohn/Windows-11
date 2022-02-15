import { Transition } from "@headlessui/react";
import { ReactNode } from "react";
import Icons from "./Icons";

interface HoverMenuProps {
    open: boolean;
    onClick: () => void;
    isImage: boolean;
    icon: ReactNode;
    className: string;
}
const HoverMenu = ({ open, onClick, icon, className, isImage }: HoverMenuProps) => {
    return (
        <Transition
            show={open}
            enter="transition-opacity duration-400 ease-in"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-400 ease-out"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div
                onClick={onClick}
                className={`${open ? "bg-white/10" : ""} flex flex-col justify-center items-center w-10 h-10 hover:bg-white/10 transition-colors ease-in-out duration-150 rounded-md`}>
                {isImage ? <Icons icon={icon} className={className} /> : icon}
                {open ? <div className="w-2 h-0.5 rounded-full bg-white/40 mt-0.5" /> : ""}
            </div>
        </Transition>
    );
};
export default HoverMenu;
