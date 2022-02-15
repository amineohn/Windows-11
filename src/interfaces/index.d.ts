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
export type Tags = {
    title: string;
    description: string;
    url: string;
    image: string;
    themeColor: string;
    keywords: string;
    author: string;
    charSet: string;
    language: string;
    icons: {
        src: string;
        sizes: string;
        type: string;
    }[];
};
