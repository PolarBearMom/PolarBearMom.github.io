// src/Home/ProjectR/ProjectR.js
import React from "react";
import { useLang } from "../../LangContext";

export default function ProjectR() {
    const { lang } = useLang();

    const texts = {
        en: {
            title: "Project R",
            desc: "This is a demo gameplay video recorded in the actual environment.",
        },
        ko: {
            title: "프로젝트 R",
            desc: "실제 게임 플레이 환경에서 촬영한 영상입니다.",
        },
    };

    // lang 값이 잘못 들어오면 기본 en
    const t = texts[lang] || texts["en"];

    return (
        <div className="min-h-screen flex bg-gray-50">
            {/* 메인 컨텐츠 */}
            <main className="flex-1 flex flex-col items-center py-12">
                <h1 className="text-3xl font-bold mb-6">{t.title}</h1>

                {/* 비디오 */}
                <video
                    controls
                    autoPlay
                    muted
                    loop
                    className="w-3/4 rounded-lg shadow-lg mb-6"
                >
                    <source src="/projectR.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* 설명 */}
                <p className="text-gray-600">{t.desc}</p>
            </main>
        </div>
    );
}