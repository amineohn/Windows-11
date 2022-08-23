import { MenuIconProps } from "@/interfaces";
const MenuIcon = ({ icon, title }: MenuIconProps) => {
    return (
        <div className="w-[96px] h-[84px] hover:bg-black/5 dark:hover:bg-white/10 transition-colors ease-in-out duration-150 rounded-md">
            <div className="flex justify-center items-center flex-col space-y-2 mt-2">
                {icon}
                <span className="text-black/90 dark:text-white/90 text-xs">{title}</span>
            </div>
        </div>
    );
};
export default MenuIcon;
