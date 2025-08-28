import React, { createContext, useState, useContext } from "react";

const LangContext = createContext();

export const LangProvider = ({ children }) => {
    // ✅ 초기값을 소문자로 통일
    const [lang, setLang] = useState("en");

    const toggleLang = (newLang) => {
        // ✅ 버튼에서 en/ko 그대로 전달받도록
        setLang(newLang.toLowerCase());
    };

    return (
        <LangContext.Provider value={{ lang, toggleLang }}>
            {children}
        </LangContext.Provider>
    );
};

export const useLang = () => useContext(LangContext);