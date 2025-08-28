import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

export default function Sidebar() {
    const location = useLocation();
    const [open, setOpen] = useState(false);

    // ✅ 현재 경로가 /ProjectR 관련이면 자동 펼침
    useEffect(() => {
        if (location.pathname.startsWith("/ProjectR")) {
            setOpen(true);
        }
    }, [location.pathname]);

    return (
        <aside className="w-64 bg-white shadow-md p-4">
            <nav>
                <ul className="space-y-2">
                    {/* Projects */}
                    <li>
                        <Link
                            to="/"
                            className={`font-bold hover:text-blue-500 ${location.pathname === "/" ? "text-blue-500" : ""
                                }`}
                        >
                            Projects
                        </Link>
                    </li>

                    {/* Project R */}
                    <li>
                        <div
                            onClick={() => setOpen(!open)}
                            className="flex items-center justify-between cursor-pointer font-semibold hover:text-blue-500"
                        >
                            <span
                                className={`${location.pathname.startsWith("/ProjectR")
                                        ? "text-blue-500"
                                        : ""
                                    }`}
                            >
                                Project R
                            </span>
                            {open ? <FiChevronDown /> : <FiChevronRight />}
                        </div>

                        {open && (
                            <ul className="ml-4 mt-1 space-y-1 text-sm text-gray-600">
                                <li>
                                    <Link
                                        to="/ProjectR"
                                        className={`block hover:text-blue-500 ${location.pathname === "/ProjectR"
                                                ? "text-blue-500 font-semibold"
                                                : ""
                                            }`}
                                    >
                                        Overview
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/ProjectR/inventory"
                                        className={`block hover:text-blue-500 ${location.pathname === "/ProjectR/inventory"
                                                ? "text-blue-500 font-semibold"
                                                : ""
                                            }`}
                                    >
                                        Inventory System
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/ProjectR/quickslot"
                                        className={`block hover:text-blue-500 ${location.pathname === "/ProjectR/quickslot"
                                                ? "text-blue-500 font-semibold"
                                                : ""
                                            }`}
                                    >
                                        Quick Slot & HUD
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
        </aside>
    );
}