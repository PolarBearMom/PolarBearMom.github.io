// src/Home/Home.js
import React from "react";
import { useLang } from "../LangContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const { lang } = useLang();
    const navigate = useNavigate();

    const translations = {
        en: {
            projectR: {
                title: "Project R",
                date: "Date: Sep 2023 ~ Present",
                desc: "A large-scale MMORPG project supporting cross-platform (PC, Mobile), similar to Lineage style.",
                tags: ["MMORPG", "C++", "UnrealEngine5"],
            },
            contact: {
                title: "Contact",
                email: "Email",
                github: "GitHub",
            },
        },
        ko: {
            projectR: {
                title: "프로젝트 R",
                date: "기간: 2023.09 ~ 현재",
                desc: "크로스플랫폼(PC, Mobile)을 지원하는 리니지 라이크 대규모 MMORPG 개발 프로젝트입니다.",
                tags: ["MMORPG", "C++", "UnrealEngine5"],
            },
            contact: {
                title: "연락처",
                email: "이메일",
                github: "깃허브",
            },
        },
    };

    const t = translations[lang];

    return (
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen p-8 font-sans">
            {/* ===== 프로젝트 카드 ===== */}
            <section className="mb-16">
                <div
                    onClick={() => navigate("/ProjectR")}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl ml-0 transform transition duration-300 hover:scale-[1.01] hover:shadow-2xl cursor-pointer"
                >
                    <div className="overflow-hidden">
                        <img
                            src="/projectR.jpg"
                            alt="Project R"
                            className="w-full object-cover h-96 transform transition duration-500 hover:scale-105"
                        />
                    </div>

                    <div className="p-8">
                        <h3 className="text-2xl font-bold mb-2">{t.projectR.title}</h3>
                        <p className="text-sm text-gray-500 mb-4 italic">{t.projectR.date}</p>
                        <p className="text-gray-700 mb-6">{t.projectR.desc}</p>

                        {/* 태그 */}
                        <div className="flex gap-3 flex-wrap">
                            {t.projectR.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="bg-gradient-to-r from-blue-200 to-blue-300 text-gray-800 px-4 py-1 rounded-full text-sm font-semibold shadow-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== Contact 섹션 ===== */}
            <section className="text-center">
                <h2 className="text-3xl font-bold border-l-8 border-blue-500 pl-3 mb-6 inline-block">{t.contact.title}</h2>
                <ul className="text-gray-700 space-y-2">
                    <li>
                        {t.contact.email}: <span className="font-semibold">snsdl123123@email.com</span>
                    </li>
                    <li>
                        {t.contact.github}:{" "}
                        <a className="text-blue-500 hover:underline" href="https://github.com/PolarBearMom">
                            github.com/PolarBearMom
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    );
}