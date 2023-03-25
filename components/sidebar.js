import {useState} from "react";

export default function Sidebar() {
    return (
        <>
            <div className="z-100 h-screen sticky top-0 overflow-auto bg-white pt-6 pb-10 flex-col flex-none text-sm w-full max-w-[220px] px-1">
                <div className="flex-col">
                    <a href="/">赴山茶市</a>
                    <a>最新简讯</a>
                </div>
            </div>
        </>
    )
}