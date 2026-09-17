"use client";

import Link from "next/link";
import { ArrowLeft, Code2, Sparkles, Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function AboutMe() {
    const skills = [
    { 
        category: "Frontend", 
        items: ["React", "Next.js", "Tailwind CSS", "TypeScript"] 
    },
    { 
        category: "Backend & Data", 
        items: ["Node.js", "SQLite","MySQL", "PostgreSQL", "REST API"] 
    },
    { 
        category: "AI Practical & Integration", 
        items: ["LLM API Integration", "Local LLM Setup", "Ollama / LM Studio", "Prompt Engineering"] 
    },
    { 
        category: "AI Workflow & Automation", 
        items: ["Structured Outputs", "AI-Assisted Development", "Rapid Prototyping", "Model Testing"] 
    },
    { 
        category: "Tools & Ecosystem", 
        items: ["Git", "VS Code", "Figma", "Docker", "Vercel"] 
    },
    { 
        category: "Mindset & Growth", 
        items: ["Self-Taught Learner", "Practical Builder", "Problem Solving", "Adaptability"] 
    },
    ];

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200 p-6 dark:from-slate-950 dark:via-zinc-900 dark:to-slate-900 font-sans">
      {/* Background Glow */}
      <div className="absolute -top-24 -left-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-20 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative z-10 max-w-3xl w-full space-y-8 my-10">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" /> ย้อนกลับหน้าหลัก
        </Link>

        {/* Hero Section */}
        <div className="rounded-2xl bg-white/70 dark:bg-zinc-900/70 p-8 backdrop-blur-md border border-white/40 dark:border-zinc-800/80 shadow-md space-y-5">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-950/50 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400">
            <Sparkles size={14} /> My Story & Mindset
        </div>

        <h1 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-white">
            สวัสดีครับผม <span className="text-blue-600 dark:text-blue-400">พัสกร</span> 👋
        </h1>

        <div className="space-y-4 text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
        <p>
            ถ้าพูดกันตามตรง ตอนเด็กๆ ผมไม่ใช่เด็กสายเรียนเลยครับ เป็นสายกิจกรรม ชอบเที่ยว เล่นสนุกไปวันๆ ซะมากกว่า 
            จนวันหนึ่งเพื่อนท้าให้ลองสอบเข้ามหาวิทยาลัย ตอนนั้นผมยังไม่รู้จักระบบการสอบเลยด้วยซ้ำ นึกว่าต้องเดินไปยื่นสมัครทีละแห่ง 
            ก็เลยลองสอบไปแบบไม่ได้คิดอะไรมาก แต่ปรากฏว่าคะแนนออกมาดีเกินคาด จนเพื่อนๆ เริ่มทักว่า <span className="italic text-slate-800 dark:text-slate-100 font-medium">"ลองไปให้ไกลกว่านี้สิ"</span>
        </p>

        <p>
            นั่นคือจุดเปลี่ยนสำคัญที่เปิดประตูให้ผมได้ลองทำสิ่งใหม่ๆ ที่ไม่เคยคิดจะทำมาก่อน 
            ถึงแม้ในรั้วมหาวิทยาลัยผมอาจจะไม่ได้เป็นคนทำเกรดได้โดดเด่น แต่ผมกลับค้นพบตัวตนในการเรียนรู้นอกห้องเรียน 
            ผมชอบที่จะพัฒนาตัวเอง เอาชนะความท้าทายใหม่ๆ และลงมือแก้ปัญหาจริงด้วยตัวเองเสมอ
        </p>

        <p>
            จนกระทั่งได้มาเจอกับโลกของ <strong className="text-slate-800 dark:text-white font-semibold">Web Development และ AI</strong> 
            ซึ่งกลายเป็น Passion ใหม่ทันที ผมไม่ได้มอง AI ในมุมวิชาการทฤษฎีหนักๆ แต่หลงใหลในศักยภาพของมัน 
            ที่เข้ามาช่วยให้เราแก้ปัญหาได้เร็วขึ้น สร้างสรรค์งานได้มีประสิทธิภาพยิ่งขึ้น 
            เพื่อพิสูจน์ตัวเองและเป็นความภาคภูมิใจให้ครอบครัวต่อไปครับ
        </p>
        </div>
        </div>

        {/* Skills Section */}
        <div className="rounded-2xl bg-white/70 dark:bg-zinc-900/70 p-8 backdrop-blur-md border border-white/40 dark:border-zinc-800/80 shadow-md space-y-6">
          <div className="flex items-center gap-2">
            <Code2 className="text-blue-600 dark:text-blue-400" size={24} />
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Tech Stack & Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {skills.map((group) => (
              <div key={group.category} className="space-y-3 p-4 rounded-xl bg-slate-50 dark:bg-zinc-800/50">
                <h3 className="text-sm font-bold text-slate-700 dark:text-slate-300">{group.category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-medium bg-white dark:bg-zinc-700 text-slate-700 dark:text-slate-200 rounded-md border border-slate-200 dark:border-zinc-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md border border-white/40 dark:border-zinc-800/80 shadow-md">
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-all"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-all"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="mailto:phatsakon.son@dome.tu.ac.th"
              className="p-2.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-all"
            >
              <Mail size={18} />
            </a>
          </div>

            <a
            href="/Phatsakon_Sonsang_Resume.pdf"
            download="Phatsakon_Sonsang_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 text-sm font-semibold shadow-md transition-all active:scale-95"
            >
            <FileText size={16} /> Download Resume
            </a>
        </div>
      </div>
    </div>
  );
}