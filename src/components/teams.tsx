import { OpenTeamsProps } from "@/interfaces";
import { Transition } from "@headlessui/react";
import Icons from "./icons";

const Teams = ({ open }: OpenTeamsProps) => {
    return (
        <Transition
            show={open}
            enter="transition-opacity duration-500 ease-in slide-in-bottom"
            enterFrom="opacity-0"
            enterTo="opacity-400 slide-in-bottom"
            leave="transition-opacity duration-500 ease-out slide-out-bottom"
            leaveFrom="opacity-100"
            leaveTo="opacity-0 duration-500 slide-out-bottom"
            className={`absolute mr-36 items-center bottom-[65px] w-[300px] h-[520px] flex flex-col bg-blue-200 dark:bg-neutral-800/90  border border-blue-100 dark:border-neutral-600 backdrop-filter backdrop-blur-3xl rounded-lg shadow-2xl duration-200 overflow-hidden`}>
            <div className="h-[60px] dark:bg-neutral-900/30 bg-blue-300/30 w-full">
                <div className="flex justify-start items-center mx-4 my-3">
                    <div className="inline-flex space-x-3 items-center">
                        <img src="/static/images/user.png" className="w-8 h-8 rounded-full shadow-lg" />
                        <span className="dark:text-white/90 text-black/90 font-medium">Amine Ouhani</span>
                    </div>
                </div>
            </div>
            <div className="py-5 h-full">
                <div className="flex justify-between items-center space-x-5 ml-3.5">
                    <div className="space-x-2">
                        <button className="shadow-lg dark:text-[#9EA2FF] text-[#6264A7] font-medium text-md px-6 py-1.5 border dark:bg-neutral-900 dark:border-gray-800 bg-white border-gray-200 rounded-md">
                            <div className="inline-flex space-x-4 items-center">
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.96094 12C1.70052 12 1.45052 11.9479 1.21094 11.8438C0.976562 11.7344 0.768229 11.5911 0.585938 11.4141C0.408854 11.2318 0.265625 11.0234 0.15625 10.7891C0.0520833 10.5495 0 10.2995 0 10.0391V1.96094C0 1.70052 0.0520833 1.45312 0.15625 1.21875C0.265625 0.979167 0.408854 0.770833 0.585938 0.59375C0.768229 0.411458 0.976562 0.268229 1.21094 0.164062C1.45052 0.0546875 1.70052 0 1.96094 0H9.03906C9.29948 0 9.54688 0.0546875 9.78125 0.164062C10.0208 0.268229 10.2292 0.411458 10.4062 0.59375C10.5885 0.770833 10.7318 0.979167 10.8359 1.21875C10.9453 1.45312 11 1.70052 11 1.96094V10.0391C11 10.2995 10.9453 10.5495 10.8359 10.7891C10.7318 11.0234 10.5885 11.2318 10.4062 11.4141C10.2292 11.5911 10.0208 11.7344 9.78125 11.8438C9.54688 11.9479 9.29948 12 9.03906 12H1.96094ZM12 8.5V3.5L14.3984 1.69531C14.5755 1.5651 14.7734 1.5 14.9922 1.5C15.1276 1.5 15.2552 1.52604 15.375 1.57812C15.5 1.63021 15.6068 1.70312 15.6953 1.79688C15.7891 1.88542 15.862 1.98958 15.9141 2.10938C15.9714 2.22917 16 2.35938 16 2.5V9.5C16 9.63542 15.974 9.76562 15.9219 9.89062C15.8698 10.0104 15.7969 10.1172 15.7031 10.2109C15.6146 10.2995 15.5078 10.3698 15.3828 10.4219C15.263 10.474 15.1354 10.5 15 10.5C14.776 10.5 14.5755 10.4323 14.3984 10.2969L12 8.5Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <span>Meet</span>
                            </div>
                        </button>
                        <button className="shadow-lg dark:text-[#9EA2FF] text-[#6264A7] font-medium text-md px-6 py-1.5 border dark:bg-neutral-900 dark:border-gray-800 bg-white border-gray-200 rounded-md">
                            <div className="inline-flex space-x-4 items-center">
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0.5 15.5C0.5 15.3646 0.520833 15.224 0.5625 15.0781C0.609375 14.9323 0.648438 14.7943 0.679688 14.6641C0.799479 14.1693 0.924479 13.6797 1.05469 13.1953C1.1849 12.7109 1.3099 12.2214 1.42969 11.7266C1.1224 11.1536 0.890625 10.5547 0.734375 9.92969C0.578125 9.30469 0.5 8.66667 0.5 8.01562C0.5 7.28125 0.59375 6.57292 0.78125 5.89062C0.973958 5.20312 1.24219 4.5625 1.58594 3.96875C1.9349 3.375 2.35156 2.83594 2.83594 2.35156C3.32552 1.86198 3.86719 1.44271 4.46094 1.09375C5.05469 0.744792 5.69271 0.476562 6.375 0.289062C7.05729 0.0963542 7.76562 0 8.5 0C9.23438 0 9.9401 0.0963542 10.6172 0.289062C11.2995 0.476562 11.9375 0.744792 12.5312 1.09375C13.125 1.44271 13.6641 1.85938 14.1484 2.34375C14.638 2.82812 15.0573 3.36719 15.4062 3.96094C15.7552 4.55469 16.0234 5.19271 16.2109 5.875C16.4036 6.55208 16.5 7.25781 16.5 7.99219C16.5 8.72135 16.4036 9.42708 16.2109 10.1094C16.0234 10.7865 15.7578 11.4219 15.4141 12.0156C15.0703 12.6094 14.6562 13.151 14.1719 13.6406C13.6875 14.1302 13.1484 14.5495 12.5547 14.8984C11.9661 15.2474 11.3333 15.5182 10.6562 15.7109C9.97917 15.9036 9.27344 16 8.53906 16C7.89323 16 7.25781 15.9271 6.63281 15.7812C6.00781 15.6302 5.40885 15.4062 4.83594 15.1094L1.11719 15.9844C1.0651 15.9948 1.02604 16 1 16C0.859375 16 0.739583 15.9531 0.640625 15.8594C0.546875 15.7604 0.5 15.6406 0.5 15.5ZM8.46875 15C9.11458 15 9.73698 14.9167 10.3359 14.75C10.9349 14.5833 11.4948 14.349 12.0156 14.0469C12.5365 13.7448 13.0104 13.3828 13.4375 12.9609C13.8698 12.5339 14.237 12.0599 14.5391 11.5391C14.8464 11.0182 15.0833 10.4583 15.25 9.85938C15.4167 9.26042 15.5 8.63802 15.5 7.99219C15.5 7.34635 15.4167 6.72656 15.25 6.13281C15.0833 5.53385 14.8464 4.97656 14.5391 4.46094C14.237 3.94531 13.8724 3.47396 13.4453 3.04688C13.0182 2.61979 12.5443 2.25521 12.0234 1.95312C11.5026 1.65104 10.9427 1.41667 10.3438 1.25C9.75 1.08333 9.13281 1 8.49219 1C7.85156 1 7.23177 1.08333 6.63281 1.25C6.03906 1.41667 5.48177 1.65104 4.96094 1.95312C4.44531 2.25521 3.97396 2.61979 3.54688 3.04688C3.125 3.46875 2.76042 3.9375 2.45312 4.45312C2.15104 4.96875 1.91667 5.52604 1.75 6.125C1.58333 6.71875 1.5 7.33594 1.5 7.97656C1.5 8.3151 1.52083 8.6276 1.5625 8.91406C1.60417 9.20052 1.66406 9.48177 1.74219 9.75781C1.82031 10.0286 1.91406 10.2995 2.02344 10.5703C2.13281 10.8411 2.25781 11.125 2.39844 11.4219C2.4401 11.5052 2.46094 11.5859 2.46094 11.6641C2.46094 11.7214 2.44531 11.8281 2.41406 11.9844C2.38281 12.1406 2.34115 12.3203 2.28906 12.5234C2.23698 12.7266 2.17969 12.9453 2.11719 13.1797C2.0599 13.4141 2.0026 13.638 1.94531 13.8516C1.88802 14.0651 1.83594 14.2604 1.78906 14.4375C1.74219 14.6094 1.70833 14.737 1.6875 14.8203C2.04167 14.737 2.39062 14.6536 2.73438 14.5703C3.08333 14.487 3.4349 14.401 3.78906 14.3125C3.96615 14.2708 4.15104 14.2214 4.34375 14.1641C4.53646 14.1068 4.72396 14.0781 4.90625 14.0781C4.94792 14.0781 4.98698 14.0859 5.02344 14.1016C5.0599 14.112 5.09896 14.125 5.14062 14.1406C5.42188 14.2708 5.69271 14.3906 5.95312 14.5C6.21875 14.6042 6.48438 14.6927 6.75 14.7656C7.01562 14.8385 7.28906 14.8958 7.57031 14.9375C7.85156 14.9792 8.15104 15 8.46875 15ZM6 7C5.86458 7 5.7474 6.95052 5.64844 6.85156C5.54948 6.7526 5.5 6.63542 5.5 6.5C5.5 6.36458 5.54948 6.2474 5.64844 6.14844C5.7474 6.04948 5.86458 6 6 6H11C11.1354 6 11.2526 6.04948 11.3516 6.14844C11.4505 6.2474 11.5 6.36458 11.5 6.5C11.5 6.63542 11.4505 6.7526 11.3516 6.85156C11.2526 6.95052 11.1354 7 11 7H6ZM6 10C5.86458 10 5.7474 9.95052 5.64844 9.85156C5.54948 9.7526 5.5 9.63542 5.5 9.5C5.5 9.36458 5.54948 9.2474 5.64844 9.14844C5.7474 9.04948 5.86458 9 6 9H9C9.13542 9 9.2526 9.04948 9.35156 9.14844C9.45052 9.2474 9.5 9.36458 9.5 9.5C9.5 9.63542 9.45052 9.7526 9.35156 9.85156C9.2526 9.95052 9.13542 10 9 10H6Z"
                                        fill="currentColor"
                                    />
                                </svg>

                                <span>Chat</span>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="space-x-2 w-full mt-5">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-black/90 dark:text-white font-medium">Recents</h1>
                        </div>
                        <div>
                            <svg className="text-black/90 dark:text-white " width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14 5.5C14 6.00521 13.9349 6.49219 13.8047 6.96094C13.6745 7.42969 13.4896 7.86979 13.25 8.28125C13.0104 8.6875 12.724 9.05729 12.3906 9.39062C12.0573 9.72396 11.6849 10.0104 11.2734 10.25C10.8672 10.4896 10.4297 10.6745 9.96094 10.8047C9.49219 10.9349 9.00521 11 8.5 11C7.85417 11 7.22656 10.8906 6.61719 10.6719C6.01302 10.4531 5.46615 10.138 4.97656 9.72656L0.851562 13.8516C0.752604 13.9505 0.635417 14 0.5 14C0.364583 14 0.247396 13.9505 0.148438 13.8516C0.0494792 13.7526 0 13.6354 0 13.5C0 13.3646 0.0494792 13.2474 0.148438 13.1484L4.27344 9.02344C3.86198 8.53385 3.54688 7.98698 3.32812 7.38281C3.10938 6.77344 3 6.14583 3 5.5C3 4.99479 3.0651 4.50781 3.19531 4.03906C3.32552 3.5651 3.51042 3.125 3.75 2.71875C3.98958 2.3125 4.27604 1.94271 4.60938 1.60938C4.94271 1.27604 5.3125 0.989583 5.71875 0.75C6.125 0.510417 6.5625 0.325521 7.03125 0.195312C7.5 0.0651042 7.98958 0 8.5 0C9.00521 0 9.49219 0.0651042 9.96094 0.195312C10.4297 0.325521 10.8672 0.510417 11.2734 0.75C11.6849 0.989583 12.0573 1.27604 12.3906 1.60938C12.724 1.94271 13.0104 2.3151 13.25 2.72656C13.4896 3.13281 13.6745 3.57031 13.8047 4.03906C13.9349 4.50781 14 4.99479 14 5.5ZM13 5.5C13 4.88021 12.8802 4.29688 12.6406 3.75C12.4062 3.20312 12.0859 2.72656 11.6797 2.32031C11.2734 1.91406 10.7969 1.59375 10.25 1.35938C9.70312 1.11979 9.11979 1 8.5 1C7.88021 1 7.29688 1.11979 6.75 1.35938C6.20312 1.59375 5.72656 1.91406 5.32031 2.32031C4.91406 2.72656 4.59115 3.20312 4.35156 3.75C4.11719 4.29688 4 4.88021 4 5.5C4 6.125 4.11719 6.71094 4.35156 7.25781C4.58594 7.80469 4.90625 8.28125 5.3125 8.6875C5.71875 9.09375 6.19531 9.41406 6.74219 9.64844C7.28906 9.88281 7.875 10 8.5 10C9.125 10 9.71094 9.88281 10.2578 9.64844C10.8047 9.41406 11.2812 9.09375 11.6875 8.6875C12.0938 8.28125 12.4141 7.80469 12.6484 7.25781C12.8828 6.71094 13 6.125 13 5.5Z"
                                    fill="currentColor"
                                    fillOpacity="0.8956"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-3">
                        <div className="inline-flex mt-5 space-x-2">
                            <img src="/static/images/users.png" alt="avatar" className="w-10 h-10 rounded-full" />
                            <div className="flex justify-center flex-col items-start">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h1 className="text-sm font-medium text-black/90 dark:text-white">The Squad</h1>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-normal text-black/90 dark:text-white">Cora: I agree! Mica is indeed good.</p>
                                </div>
                            </div>
                        </div>
                        <div className="inline-flex mt-5 space-x-2">
                            <img src="/static/images/users.png" alt="avatar" className="w-10 h-10 rounded-full" />
                            <div className="flex justify-center flex-col items-start">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h1 className="text-sm font-medium text-black/90 dark:text-white">The Squad</h1>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-normal text-black/90 dark:text-white">Cora: I agree! Mica is indeed good.</p>
                                </div>
                            </div>
                        </div>
                        <div className="inline-flex mt-5 space-x-2">
                            <img src="/static/images/users.png" alt="avatar" className="w-10 h-10 rounded-full" />
                            <div className="flex justify-center flex-col items-start">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h1 className="text-sm font-medium text-black/90 dark:text-white">The Squad</h1>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-normal text-black/90 dark:text-white">Cora: I agree! Mica is indeed good.</p>
                                </div>
                            </div>
                        </div>
                        <div className="inline-flex mt-5 space-x-2">
                            <img src="/static/images/users.png" alt="avatar" className="w-10 h-10 rounded-full" />
                            <div className="flex justify-center flex-col items-start">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h1 className="text-sm font-medium text-black/90 dark:text-white">The Squad</h1>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-normal text-black/90 dark:text-white">Cora: I agree! Mica is indeed good.</p>
                                </div>
                            </div>
                        </div>
                        <div className="inline-flex mt-5 space-x-2">
                            <img src="/static/images/users.png" alt="avatar" className="w-10 h-10 rounded-full" />
                            <div className="flex justify-center flex-col items-start">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h1 className="text-sm font-medium text-black/90 dark:text-white">The Squad</h1>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-normal text-black/90 dark:text-white">Cora: I agree! Mica is indeed good.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="inline-flex space-x-2 items-center mt-6 mr-4">
                            <Icons icon="teams2" className="w-5 h-5 hover:scale-[0.80] hover:transition hover:transform ease-in-out duration-300" onClick={() => null} action={""} />
                            <span className="text-sm dark:text-gray-50 text-gray-600">Open Microsoft Teams</span>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    );
};
export default Teams;
