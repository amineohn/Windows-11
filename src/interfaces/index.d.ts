import { ReactNode } from "react";

export interface HoverMenuProps {
    open: boolean;
    onClick: () => void;
    isImage: boolean;
    icon: any;
    className: string;
    action: string;
}

export interface IIconProps {
    icon: any;
    className: string;
    onClick?: () => void;
    action: string;
}
export interface MenuIconProps {
    icon: ReactNode;
    title: string;
}
export interface openWindowProps {
    onClick: () => void;
    icon: ReactNode;
    title: string;
}
export interface WindowProps {
    title: string;
    content: ReactNode;
    icon: ReactNode;
    onClick: () => void;
    open: boolean;
}

export interface OpenViewCalendarProps {
    onClick: () => void;
    open: boolean;
    openCalendar: boolean;
}
