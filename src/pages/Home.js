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
        title: "ProjectR - MMORPG Client Development",
        date: "Date: 2023 ~ Present",
        desc: "A large-scale MMORPG project built with Unreal Engine 5. Led client-side development implementing comprehensive game systems including inventory management, equipment/gear system, party/community systems, and death/resurrection systems.",
        tags: ["MMORPG", "C++", "UnrealEngine5", "MVVM", "Network Programming"],
        role: "Unreal Client Programmer",
        teamSize: "100+ Developers",
        platforms: ["PC", "Mobile"]
      },
      technicalHighlights: {
        title: "Technical Highlights",
        architecture: {
          title: "MVVM Architecture",
          desc: "Implemented comprehensive MVVM pattern with 770+ ViewModels, Model-View separation, and delegate-based event handling for scalable UI architecture"
        },
        performance: {
          title: "Performance Optimization",
          desc: "Optimized network traffic with CMSG/CUP packet system, FieldNotify for efficient UI updates, and real-time data synchronization across 100+ concurrent users"
        },
        systems: {
          title: "Core Systems",
          desc: "Developed 13+ essential game systems including inventory management, equipment/gear system, party/community systems, and death/resurrection mechanics"
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
        title: "ProjectR - MMORPG 클라이언트 개발",
        date: "기간: 2023 ~ 현재",
        desc: "Unreal Engine 5로 구축된 대규모 MMORPG 프로젝트입니다. 클라이언트 개발을 주도하여 인벤토리 시스템, 장비/장착 시스템, 파티/커뮤니티 시스템, 사망/부활 시스템을 포함한 포괄적인 게임 시스템을 구현했습니다.",
        tags: ["MMORPG", "C++", "UnrealEngine5", "MVVM", "네트워크 프로그래밍"],
        role: "언리얼 클라이언트 프로그래머",
        teamSize: "100+ 개발자",
        platforms: ["PC", "모바일"]
      },
      technicalHighlights: {
        title: "기술적 하이라이트",
        architecture: {
          title: "MVVM 아키텍처",
          desc: "770개 이상의 ViewModel과 Model-View 분리, 델리게이트 기반 이벤트 핸들링을 통한 확장 가능한 UI 아키텍처 구현"
        },
        performance: {
          title: "성능 최적화",
          desc: "CMSG/CUP 패킷 시스템, FieldNotify를 통한 효율적인 UI 업데이트, 100명 이상 동시 접속자 실시간 데이터 동기화"
        },
        systems: {
          title: "핵심 시스템",
          desc: "인벤토리 관리, 장비/장착 시스템, 파티/커뮤니티 시스템, 사망/부활 메커니즘을 포함한 13개 이상의 필수 게임 시스템 개발"
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
            
            {/* 주요 기여 섹션 */}
            <div style={{ 
              background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)', 
              padding: '32px', 
              borderRadius: '16px',
              marginBottom: '40px',
              border: '1px solid #e2e8f0'
            }}>
              <h4 style={{ 
                fontSize: '1.6rem', 
                fontWeight: '700', 
                color: '#2d3748', 
                marginBottom: '20px',
                borderLeft: '4px solid #667eea',
                paddingLeft: '12px'
              }}>
                주요 기여
              </h4>
              <div style={{ display: 'grid', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ 
                    background: '#667eea', 
                    color: 'white', 
                    borderRadius: '50%', 
                    width: '24px', 
                    height: '24px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>1</span>
                  <p style={{ color: '#4a5568', fontSize: '1.1rem', margin: 0, lineHeight: '1.6' }}>
                    <strong>인벤토리/아이템/장비/퀵슬롯 등 핵심 게임 시스템 구현</strong><br/>
                    • 80개 이상의 인벤토리 관련 파일 개발 (InventoryModel, ItemData, StorageModel 등)<br/>
                    • 아이템 UID 기반 데이터 관리, 쿨타임 시스템, 자동 사용 기능 구현<br/>
                    • 장비 장착/해제, 강화, 분해, 아이템 박스 시스템 개발
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ 
                    background: '#667eea', 
                    color: 'white', 
                    borderRadius: '50%', 
                    width: '24px', 
                    height: '24px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>2</span>
                  <p style={{ color: '#4a5568', fontSize: '1.1rem', margin: 0, lineHeight: '1.6' }}>
                    <strong>MVVM 기반 뷰모델–모델 구조 적용으로 UI·로직 분리</strong><br/>
                    • 770개 이상의 ViewModel 클래스 설계 및 구현<br/>
                    • 델리게이트 기반 이벤트 핸들링 시스템 구축<br/>
                    • FieldNotify를 활용한 효율적인 UI 업데이트 메커니즘 개발
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ 
                    background: '#667eea', 
                    color: 'white', 
                    borderRadius: '50%', 
                    width: '24px', 
                    height: '24px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>3</span>
                  <p style={{ color: '#4a5568', fontSize: '1.1rem', margin: 0, lineHeight: '1.6' }}>
                    <strong>파티·커뮤니티 등 유저 관련 데이터 구조 설계</strong><br/>
                    • 파티 시스템: 파티 생성/해산, 멤버 관리, 타겟 공유, 분배 방식 설정<br/>
                    • 커뮤니티 시스템: 친구 관리, 길드 정보, 차단 기능, 실시간 상태 동기화<br/>
                    • 50개 이상의 네트워크 패킷 구조 설계 및 구현
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ 
                    background: '#667eea', 
                    color: 'white', 
                    borderRadius: '50%', 
                    width: '24px', 
                    height: '24px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>4</span>
                  <p style={{ color: '#4a5568', fontSize: '1.1rem', margin: 0, lineHeight: '1.6' }}>
                    <strong>서버 기반 쿨타임 UI 구축 및 동기화</strong><br/>
                    • 개별 아이템 쿨타임과 그룹 쿨타임 시스템 구현<br/>
                    • 실시간 쿨타임 UI 업데이트 및 서버 동기화<br/>
                    • CMSG/CUP 패킷 시스템을 통한 효율적인 네트워크 통신
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ 
                    background: '#667eea', 
                    color: 'white', 
                    borderRadius: '50%', 
                    width: '24px', 
                    height: '24px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>5</span>
                  <p style={{ color: '#4a5568', fontSize: '1.1rem', margin: 0, lineHeight: '1.6' }}>
                    <strong>100명 이상 협업 환경에서 대규모 UI/네트워크 시스템 안정화</strong><br/>
                    • 100+ 개발자와 협업하는 대규모 프로젝트 환경에서 안정적인 시스템 구축<br/>
                    • PC/모바일 멀티플랫폼 대응 및 크로스 플랫폼 호환성 확보<br/>
                    • 메모리 관리, 성능 최적화, 버그 수정을 통한 시스템 안정성 향상
                  </p>
                </div>
              </div>
            </div>

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
          <iframe
            width="100%"
            height="600"
            src="https://www.youtube.com/embed/slBGNvYOWIA"
            title="ProjectU Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              display: 'block',
              borderRadius: '20px'
            }}
          ></iframe>
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
