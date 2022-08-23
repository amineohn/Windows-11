import { openWindowProps } from "@/interfaces";

const OpenWindow = ({ onClick, icon, title }: openWindowProps) => {
    return (
        <div onClick={onClick} className="flex justify-center items-center flex-col hover:bg-white/10 rounded-lg transition-colors py-3 px-6 cursor-pointer space-y-1.5">
            {icon}
            <span className="text-white/90 text-sm font-normal">{title}</span>
        </div>
    );
};

export default OpenWindow;
