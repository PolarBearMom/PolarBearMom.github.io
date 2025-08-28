import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useLang } from "../LangContext";

export default function MainLayout() {
    const { lang, toggleLang } = useLang();

    const translations = {
        en: {
            title: "Seongjae Park",
            subtitle: "Unreal Engine Client Developer | UI/UX Systems",
        },
        ko: {
            title: "박성재",
            subtitle: "언리얼 엔진 클라이언트 개발자 | UI/UX 시스템 담당",
        },
    };

    const t = translations[lang.toLowerCase()] || translations.en;

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar />

            {/* 오른쪽 컨텐츠 */}
            <div className="flex-1 flex flex-col">
                {/* 상단 영역: 이름/직책 + 언어 선택 */}
                <div className="flex justify-center items-center p-4 bg-gray-100 shadow-sm relative">
                    {/* 이름 + 직책 */}
                    <div className="text-center">
                        <h1 className="text-2xl font-bold">{t.title}</h1>
                        <p className="text-sm text-gray-600">{t.subtitle}</p>
                    </div>

                    {/* 언어 선택 버튼 - 오른쪽 상단에 고정 */}
                    <div className="absolute right-4">
                        <button
                            onClick={() => toggleLang("en")}
                            className={`px-3 py-1 rounded ${lang === "en" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                        >
                            EN
                        </button>
                        <button
                            onClick={() => toggleLang("ko")}
                            className={`ml-2 px-3 py-1 rounded ${lang === "ko" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                        >
                            KR
                        </button>
                    </div>
                </div>

                {/* 본문 */}
                <main className="flex-1 p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}