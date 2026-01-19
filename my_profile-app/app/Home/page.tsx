"use client";

import Link from "next/link";
import { useState } from 'react';

export default function Home() {
    const [isAboutMeHovered, setIsAboutMeHovered] = useState(false);

    return(
        <div className="flex flex-col min-h-screen items-center justify-center gap-8 bg-zinc-50 font-sans dark:bg-black p-8">
            <div>
                <h1 className="text-5xl font-bold">Phatsakon_web</h1>
            </div>

            {/* Container for side-by-side sections */}
            <div className="flex flex-row gap-8 w-full max-w-4xl items-start">
                {/* About Me Section with Hover Effect */}
                <div
                    onMouseEnter={() => setIsAboutMeHovered(true)}
                    onMouseLeave={() => setIsAboutMeHovered(false)}
                    className={`w-1/2 bg-white dark:bg-zinc-800 rounded-lg shadow-md cursor-pointer
                                transition-all duration-300 ease-in-out flex flex-col
                                ${isAboutMeHovered ? 'p-6 items-center' : 'h-28 justify-center items-center'}`}
                >
                    <Link href="/About_me" className="text-center">
                        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">About Me</h2>
                        {isAboutMeHovered && (
                            <p className="text-zinc-700 dark:text-zinc-300 mt-4">
                                นี่คือพื้นที่สำหรับแนะนำตัวเอง บอกเล่าเรื่องราวของคุณ, ความสามารถ, หรือสิ่งที่คุณสนใจ
                            </p>
                        )}
                    </Link>
                </div>

                {/* My Portfolio Section (Unchanged) */}
                <div className="w-1/2 bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">My Portfolio</h2>
                    <p className="text-zinc-700 dark:text-zinc-300">
                        ส่วนนี้สำหรับแสดงผลงานต่างๆ ของคุณ อาจจะมีลิงก์ไปยังโปรเจกต์, รูปภาพ, หรือรายละเอียดงานที่เคยทำ
                    </p>
                </div>
            </div>

            <a href="/Profile" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Go to Profile
            </a>
        </div>
    );
}