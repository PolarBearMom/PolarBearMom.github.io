import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGlobe } from 'react-icons/fa';
import { useLang } from '../LangContext';

const Navbar = () => {
  const location = useLocation();
  const { lang, toggleLang } = useLang();

  const navItems = [
    { path: '/', label: { en: 'About', ko: '소개' } },
    { path: '/contributions', label: { en: 'Experience', ko: '경력' } },
    { path: '/interactive-ui', label: { en: 'Projects', ko: '프로젝트' } },
    { path: '/optimization', label: { en: 'Skills', ko: '기술 스택' } },
    { path: '/problem-solving', label: { en: 'Additional', ko: '추가 경험' } },
    { path: '/growth', label: { en: 'Vision', ko: '비전' } },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const handleLanguageToggle = () => {
    toggleLang(lang === 'en' ? 'ko' : 'en');
  };

  return (
    <nav style={{
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
      padding: '20px 0',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      fontFamily: 'Noto Sans KR, -apple-system, BlinkMacSystemFont, sans-serif'
    }}>
      <div style={{ maxWidth: 'min(100%, 1200px)', margin: '0 auto', padding: '0 16px', width: '100%' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center'
        }}>
          {/* Logo */}
          <Link to="/" style={{ 
            textDecoration: 'none',
            color: '#1a202c'
          }}>
            <h1 style={{ 
              margin: 0, 
              fontSize: '2rem', 
              fontWeight: '800',
              color: '#1a202c',
              letterSpacing: '-0.025em',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Seongjae Park
            </h1>
          </Link>
          
          {/* Navigation Menu */}
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  color: isActive(item.path) ? '#667eea' : '#4a5568',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  transition: 'all 0.2s ease',
                  padding: '8px 0',
                  borderBottom: isActive(item.path) ? '3px solid #667eea' : '3px solid transparent',
                  position: 'relative'
                }}
              >
                {item.label[lang]}
              </Link>
            ))}
            
            {/* Language Toggle */}
            <button
              onClick={handleLanguageToggle}
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                border: 'none',
                color: 'white',
                fontSize: '1rem',
                cursor: 'pointer',
                padding: '10px 20px',
                borderRadius: '25px',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: '600',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              <FaGlobe size={14} />
              {lang === 'en' ? '한국어' : 'English'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
