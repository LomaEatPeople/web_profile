"use client";

import Link from "next/link";
import Image from "next/image"; // นำเข้า Component Image จาก Next.js
import { User, Briefcase, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200 p-6 dark:from-slate-950 dark:via-zinc-900 dark:to-slate-900 font-sans">
      {/* Background Glow Elements */}
      <div className="absolute -top-24 -left-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-20 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center gap-10 max-w-4xl w-full">
        
        {/* === Title Section === */}
        <div className="text-center space-y-2">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-slate-800 dark:text-white drop-shadow-sm">
            Phatsakon<span className="text-blue-600 dark:text-blue-400">_web</span>
          </h1>
          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium">
            Welcome to my personal workspace
          </p>
        </div>

        {/* === 🔥 New: Profile Image Section (อยู่ตรงกลาง) 🔥 === */}
        <div className="relative">
          {/* เอฟเฟกต์แสงเรืองรอบรูป (Glow) */}
          <div className="absolute inset-0 rounded-full bg-blue-500/15 dark:bg-blue-400/20 blur-xl"></div>
          
          <div className="relative h-36 w-36 md:h-40 md:w-40 overflow-hidden rounded-full border-4 border-white/60 dark:border-zinc-800/80 shadow-2xl backdrop-blur-sm">
            <Image
              src="/my-profile.jpg" // 👈 แก้ไขเป็น Path ของรูปคุณในโฟลเดอร์ public
              alt="Phatsakon Profile"
              fill // ใช้ fill เพื่อให้รูปเต็มตามขนาด Container
              priority // โหลดรูปนี้เป็นอันดับแรก (เพราะเป็น LCP)
              className="object-cover transition-transform duration-500 hover:scale-105" // ใส่ hover effect เล็กน้อย
            />
          </div>
        </div>

        {/* === Navigation Cards Container === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* About Me Card */}
          <Link
            href="/About_me"
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white/70 dark:bg-zinc-900/70 p-6 backdrop-blur-md border border-white/40 dark:border-zinc-800/80 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-500/30 dark:hover:border-blue-400/30"
          >
            <div>
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/50 p-3 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                <User size={24} />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                About Me
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                นี่คือพื้นที่สำหรับแนะนำตัวเอง บอกเล่าเรื่องราวของคุณ ความสามารถ หรือสิ่งที่คุณสนใจ
              </p>
            </div>
            <div className="mt-6 flex items-center text-xs font-semibold text-blue-600 dark:text-blue-400 opacity-80 group-hover:opacity-100">
              <span>อ่านเพิ่มเติม</span>
              <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          {/* My Portfolio Card */}
          <Link
            href="/My_portfolio"
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white/70 dark:bg-zinc-900/70 p-6 backdrop-blur-md border border-white/40 dark:border-zinc-800/80 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-purple-500/30 dark:hover:border-purple-400/30"
          >
            <div>
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-purple-50 dark:bg-purple-950/50 p-3 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300">
                <Briefcase size={24} />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                My Portfolio
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                แสดงผลงานและโปรเจกต์ต่างๆ ใส่ลิงก์ไปยังชิ้นงาน รูปภาพ หรือรายละเอียดงานที่เคยทำ
              </p>
            </div>
            <div className="mt-6 flex items-center text-xs font-semibold text-purple-600 dark:text-purple-400 opacity-80 group-hover:opacity-100">
              <span>ชมผลงานทั้งหมด</span>
              <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>

        {/* === Profile Button === */}
        <Link
          href="/Profile"
          className="inline-flex items-center justify-center rounded-full bg-slate-900 dark:bg-white px-6 py-2.5 text-sm font-medium text-white dark:text-slate-900 shadow-md hover:bg-slate-800 dark:hover:bg-slate-100 hover:shadow-lg transition-all active:scale-95"
        >
          Go to Profile
        </Link>
      </div>
    </div>
  );
}