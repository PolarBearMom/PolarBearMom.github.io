import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../LangContext';

const Home = () => {
  const { lang } = useLang();

  const content = {
    en: {
      title: "Seongjae Park",
      subtitle: "Game Client Developer",
      description: "C++ and Unreal Engine based game client developer with extensive MMORPG development experience. Specialized in designing and implementing core game systems including inventory management, equipment/gear system, party/community systems, and death/resurrection systems. Applied MVVM architecture to improve code maintainability and provided optimized user experience through real-time network synchronization.",
      projectU: {
        title: "ProjectU - MMORPG Client Development",
        date: "Date: 2023 ~ Present",
        desc: "A large-scale MMORPG project built with Unreal Engine 5. Led client-side development implementing comprehensive game systems including inventory management, equipment/gear system, party/community systems, and death/resurrection systems.",
        tags: ["MMORPG", "C++", "UnrealEngine5", "MVVM", "Network Programming"],
        role: "Client Programmer",
        teamSize: "50+ Developers",
        platforms: ["PC", "Mobile"]
      },
      technicalHighlights: {
        title: "Technical Highlights",
        architecture: {
          title: "MVVM Architecture",
          desc: "Implemented MVVM pattern for UI/business logic separation, improving code maintainability by 40%"
        },
        performance: {
          title: "Performance Optimization",
          desc: "Reduced network traffic by 20% through efficient packet handling and real-time data synchronization"
        },
        systems: {
          title: "Core Systems",
          desc: "Developed 13+ essential game systems including inventory, equipment/gear, party/community, and death/resurrection systems"
        }
      },
      sections: {
        experience: "Experience",
        projects: "Projects",
        skills: "Skills",
        vision: "Vision",
        viewDetails: "View Details"
      },
      contact: {
        title: "Contact",
        email: "Email",
        github: "GitHub"
      }
    },
    ko: {
      title: "박성재",
      subtitle: "게임 클라이언트 개발자",
      description: "C++와 Unreal Engine 기반의 게임 클라이언트 개발자로 대규모 MMORPG 개발 경험을 보유하고 있습니다. 인벤토리 시스템, 장비/장착 시스템, 파티/커뮤니티 시스템, 사망/부활 시스템 등 핵심 게임 시스템 설계 및 구현에 전문성을 가지고 있습니다. MVVM 아키텍처를 적용하여 코드 유지보수성을 향상시키고, 실시간 네트워크 동기화를 통한 최적화된 사용자 경험을 제공합니다.",
      projectU: {
        title: "ProjectU - MMORPG 클라이언트 개발",
        date: "기간: 2023 ~ 현재",
        desc: "Unreal Engine 5로 구축된 대규모 MMORPG 프로젝트입니다. 클라이언트 개발을 주도하여 인벤토리 시스템, 장비/장착 시스템, 파티/커뮤니티 시스템, 사망/부활 시스템을 포함한 포괄적인 게임 시스템을 구현했습니다.",
        tags: ["MMORPG", "C++", "UnrealEngine5", "MVVM", "네트워크 프로그래밍"],
        role: "클라이언트 프로그래머",
        teamSize: "50+ 개발자",
        platforms: ["PC", "모바일"]
      },
      technicalHighlights: {
        title: "기술적 하이라이트",
        architecture: {
          title: "MVVM 아키텍처",
          desc: "UI/비즈니스 로직 분리를 위한 MVVM 패턴 구현으로 코드 유지보수성 40% 향상"
        },
        performance: {
          title: "성능 최적화",
          desc: "효율적인 패킷 처리와 실시간 데이터 동기화를 통해 네트워크 트래픽 20% 감소"
        },
        systems: {
          title: "핵심 시스템",
          desc: "인벤토리, 장비/장착, 파티/커뮤니티, 사망/부활 시스템을 포함한 13개 이상의 필수 게임 시스템 개발"
        }
      },
      sections: {
        experience: "경력",
        projects: "프로젝트",
        skills: "기술 스택",
        vision: "비전",
        viewDetails: "자세히 보기"
      },
      contact: {
        title: "연락처",
        email: "이메일",
        github: "깃허브"
      }
    }
  };

  const t = content[lang];

  return (
    <div style={{
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      minHeight: '100vh',
      padding: '32px',
      fontFamily: 'Noto Sans KR, -apple-system, BlinkMacSystemFont, sans-serif'
    }}>
      {/* Hero Section */}
      <section style={{
        textAlign: 'center',
        marginBottom: '80px',
        padding: '80px 0'
      }}>
        <h1 style={{
          fontSize: '6rem',
          fontWeight: '800',
          marginBottom: '24px',
          color: '#1a202c',
          letterSpacing: '-0.025em',
          textShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          {t.title}
        </h1>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '600',
          marginBottom: '48px',
          color: '#4a5568'
        }}>
          {t.subtitle}
        </h2>
        <p style={{
          fontSize: '1.5rem',
          maxWidth: '1000px',
          margin: '0 auto',
          lineHeight: '1.8',
          color: '#2d3748'
        }}>
          {t.description}
        </p>
      </section>

      {/* ProjectU Main Card */}
      <section style={{ marginBottom: '80px' }}>
        <div style={{
          background: '#ffffff',
          borderRadius: '24px',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          overflow: 'hidden',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{ overflow: 'hidden' }}>
            <img
              src="/projectR.jpg"
              alt="ProjectU"
              style={{
                width: '100%',
                height: '500px',
                objectFit: 'cover',
                transition: 'transform 0.5s ease'
              }}
            />
          </div>

          <div style={{ padding: '48px' }}>
            <h3 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '20px', color: '#1a202c' }}>
              {t.projectU.title}
            </h3>
            <p style={{ fontSize: '1.3rem', color: '#718096', marginBottom: '28px', fontStyle: 'italic' }}>
              {t.projectU.date}
            </p>
            <p style={{ color: '#4a5568', marginBottom: '40px', lineHeight: '1.8', fontSize: '1.3rem' }}>
              {t.projectU.desc}
            </p>

            {/* Project Details */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '40px' }}>
              <div style={{ textAlign: 'center', padding: '24px', background: '#f7fafc', borderRadius: '12px' }}>
                <h4 style={{ fontSize: '1.4rem', fontWeight: '600', color: '#2d3748', marginBottom: '12px' }}>Role</h4>
                <p style={{ color: '#4a5568', fontSize: '1.2rem' }}>{t.projectU.role}</p>
              </div>
              <div style={{ textAlign: 'center', padding: '24px', background: '#f7fafc', borderRadius: '12px' }}>
                <h4 style={{ fontSize: '1.4rem', fontWeight: '600', color: '#2d3748', marginBottom: '12px' }}>Team Size</h4>
                <p style={{ color: '#4a5568', fontSize: '1.2rem' }}>{t.projectU.teamSize}</p>
              </div>
              <div style={{ textAlign: 'center', padding: '24px', background: '#f7fafc', borderRadius: '12px' }}>
                <h4 style={{ fontSize: '1.4rem', fontWeight: '600', color: '#2d3748', marginBottom: '12px' }}>Platforms</h4>
                <p style={{ color: '#4a5568', fontSize: '1.2rem' }}>{t.projectU.platforms.join(', ')}</p>
              </div>
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {t.projectU.tags.map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    padding: '14px 24px',
                    borderRadius: '25px',
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Highlights */}
      <section style={{ marginBottom: '80px' }}>
        <h2 style={{
          fontSize: '3.5rem',
          fontWeight: '800',
          marginBottom: '48px',
          color: '#1a202c',
          textAlign: 'center',
          borderLeft: '8px solid #667eea',
          paddingLeft: '20px',
          display: 'inline-block'
        }}>
          {t.technicalHighlights.title}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          <div style={{
            background: '#ffffff',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            border: '1px solid #e2e8f0'
          }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '24px', color: '#1a202c' }}>
              🏗️ {t.technicalHighlights.architecture.title}
            </h3>
            <p style={{ color: '#4a5568', lineHeight: '1.8', fontSize: '1.3rem', marginBottom: '24px' }}>
              {t.technicalHighlights.architecture.desc}
            </p>
            <div style={{ 
              background: '#f7fafc', 
              padding: '24px', 
              borderRadius: '12px',
              border: '2px dashed #cbd5e0'
            }}>
              <p style={{ color: '#718096', fontSize: '1.1rem', textAlign: 'center', margin: 0 }}>
                📊 MVVM 다이어그램 및 아키텍처 설명 추가 예정
              </p>
            </div>
          </div>
          
          <div style={{
            background: '#ffffff',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            border: '1px solid #e2e8f0'
          }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '24px', color: '#1a202c' }}>
              ⚡ {t.technicalHighlights.performance.title}
            </h3>
            <p style={{ color: '#4a5568', lineHeight: '1.8', fontSize: '1.3rem', marginBottom: '24px' }}>
              {t.technicalHighlights.performance.desc}
            </p>
            <div style={{ 
              background: '#f7fafc', 
              padding: '24px', 
              borderRadius: '12px',
              border: '2px dashed #cbd5e0'
            }}>
              <p style={{ color: '#718096', fontSize: '1.1rem', textAlign: 'center', margin: 0 }}>
                📈 성능 최적화 플로우차트 및 벤치마크 추가 예정
              </p>
            </div>
          </div>
          
          <div style={{
            background: '#ffffff',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            border: '1px solid #e2e8f0'
          }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '24px', color: '#1a202c' }}>
              🎮 {t.technicalHighlights.systems.title}
            </h3>
            <p style={{ color: '#4a5568', lineHeight: '1.8', fontSize: '1.3rem', marginBottom: '24px' }}>
              {t.technicalHighlights.systems.desc}
            </p>
            <div style={{ 
              background: '#f7fafc', 
              padding: '24px', 
              borderRadius: '12px',
              border: '2px dashed #cbd5e0'
            }}>
              <p style={{ color: '#718096', fontSize: '1.1rem', textAlign: 'center', margin: 0 }}>
                💻 C++ 코드 예시 및 시스템 설계 다이어그램 추가 예정
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Video Section */}
      <section style={{ marginBottom: '80px' }}>
        <h2 style={{
          fontSize: '3.5rem',
          fontWeight: '800',
          marginBottom: '40px',
          color: '#1a202c',
          textAlign: 'center',
          borderLeft: '8px solid #667eea',
          paddingLeft: '20px',
          display: 'inline-block'
        }}>
          프로젝트 영상
        </h2>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }}>
          <video
            controls
            style={{
              width: '100%',
              height: 'auto',
              display: 'block'
            }}
          >
            <source src="/projectR.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Navigation Cards */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '32px',
        marginBottom: '80px'
      }}>
        <Link to="/contributions" style={{ textDecoration: 'none' }}>
          <div style={{
            background: '#ffffff',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            border: '1px solid #e2e8f0'
          }}>
            <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '20px', color: '#1a202c' }}>
              {t.sections.experience}
            </h3>
            <p style={{ color: '#718096', marginBottom: '24px', fontSize: '1.3rem' }}>
              ProjectU MMORPG 개발 경험 및 기술적 성과
            </p>
            <span style={{ color: '#667eea', fontWeight: '600', fontSize: '1.2rem' }}>{t.sections.viewDetails} →</span>
          </div>
        </Link>

        <Link to="/interactive-ui" style={{ textDecoration: 'none' }}>
          <div style={{
            background: '#ffffff',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            border: '1px solid #e2e8f0'
          }}>
            <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '20px', color: '#1a202c' }}>
              {t.sections.projects}
            </h3>
            <p style={{ color: '#718096', marginBottom: '24px', fontSize: '1.3rem' }}>
              인벤토리, 장비/장착, 파티/커뮤니티 시스템 등 핵심 게임 시스템
            </p>
            <span style={{ color: '#667eea', fontWeight: '600', fontSize: '1.2rem' }}>{t.sections.viewDetails} →</span>
          </div>
        </Link>

        <Link to="/optimization" style={{ textDecoration: 'none' }}>
          <div style={{
            background: '#ffffff',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            border: '1px solid #e2e8f0'
          }}>
            <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '20px', color: '#1a202c' }}>
              {t.sections.skills}
            </h3>
            <p style={{ color: '#718096', marginBottom: '24px', fontSize: '1.3rem' }}>
              C++, Unreal Engine 5, MVVM, 네트워크 프로그래밍
            </p>
            <span style={{ color: '#667eea', fontWeight: '600', fontSize: '1.2rem' }}>{t.sections.viewDetails} →</span>
          </div>
        </Link>

        <Link to="/growth" style={{ textDecoration: 'none' }}>
          <div style={{
            background: '#ffffff',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            border: '1px solid #e2e8f0'
          }}>
            <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '20px', color: '#1a202c' }}>
              {t.sections.vision}
            </h3>
            <p style={{ color: '#718096', marginBottom: '24px', fontSize: '1.3rem' }}>
              기술적 성장과 목표, 향후 계획
            </p>
            <span style={{ color: '#667eea', fontWeight: '600', fontSize: '1.2rem' }}>{t.sections.viewDetails} →</span>
          </div>
        </Link>
      </section>

      {/* Contact Section */}
      <section style={{ textAlign: 'center' }}>
        <h2 style={{
          fontSize: '3.5rem',
          fontWeight: '800',
          borderLeft: '8px solid #667eea',
          paddingLeft: '20px',
          marginBottom: '32px',
          display: 'inline-block',
          color: '#1a202c'
        }}>
          {t.contact.title}
        </h2>
        <ul style={{ color: '#4a5568', listStyle: 'none', padding: 0, fontSize: '1.4rem' }}>
          <li style={{ marginBottom: '16px' }}>
            {t.contact.email}: <span style={{ fontWeight: '600', color: '#1a202c' }}>snsdl123123@email.com</span>
          </li>
          <li>
            {t.contact.github}:{" "}
            <a 
              href="https://github.com/PolarBearMom"
              style={{ 
                color: '#667eea', 
                textDecoration: 'none',
                fontWeight: '600'
              }}
            >
              github.com/PolarBearMom
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
