import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../LangContext';
import MvvmFlowDiagram from '../components/MvvmFlowDiagram';
import CodeCardCollapsible from '../components/CodeCardCollapsible';
import PerformanceAccordion from '../components/PerformanceAccordion';

const Home = () => {
  const { lang } = useLang();

  const content = {
    en: {
      title: "Seongjae Park",
      subtitle: "Game Client Developer",
      description: "C++ and Unreal Engine based MMORPG client programmer.<br/>Specialized in core game systems (Inventory, Equipment, QuickSlot) and MVVM-based UI architecture design and implementation.",
      projectU: {
        title: "ProjectR - MMORPG Client Development",
        date: "Date: 2021 ~ Present",
        desc: "Led client development for a large-scale MMORPG project built with Unreal Engine 5. Implemented core game systems including inventory/item systems, equipment/gear systems, party/community systems, and death/resurrection systems, applying MVVM architecture and network UI synchronization.",
        tags: ["C++", "Unreal Engine 5", "MVVM", "Network Programming", "MMORPG"],
        role: "Unreal Client Programmer",
        teamSize: "100+ Developers",
        platforms: ["PC", "Mobile"]
      },
      technicalHighlights: {
        title: "Technical Highlights",
        architecture: {
          title: "MVVM Architecture",
          desc: "Implemented comprehensive MVVM pattern with 13 major game systems, Model-View separation, and delegate-based event handling for scalable UI architecture"
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
      contributions: {
        title: "Key Contributions",
        items: [
          {
            title: "Individual Game Systems (Inventory, Items, QuickSlot)",
            desc: "UID-based data management, client-server synchronization, automatic usage logic implementation",
            note: "Supporting essential individual gameplay features"
          },
          {
            title: "UI/UX System (MVVM Architecture)",
            desc: "13 major game systems MVVM implementation, complete UI/logic separation",
            note: "Improved maintainability and easy new feature expansion"
          },
          {
            title: "Multiplayer Interaction System (Party & Community)",
            desc: "Server data structuring → HUD/minimap/character tag reflection",
            note: "Providing collaboration and communication features between multiple users"
          },
          {
            title: "Network Optimization System (Cooldown Synchronization)",
            desc: "Server timestamp-based real-time cooldown synchronization",
            note: "Solving client time mismatch issues"
          }
        ]
      },
      codeComments: {
        model: "// Model: Party data and server communication",
        viewModel: "// ViewModel: UI and Model connection, automatic updates with FieldNotify",
        private: "// Private:",
        members: "// Members:",
        delegate: "// Delegate:",
        updateMember: "// Called when updating party member info from server",
        onPartyChanged: "// Called when party member status changes (from global Model)",
        fieldNotify: "// UI auto-refresh with FieldNotify",
        etc: "etc..."
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
      },
      vision: {
        description: "Discover the vision and goals as a game developer"
      }
    },
    ko: {
      title: "박성재",
      subtitle: "게임 클라이언트 개발자",
      description: "C++와 Unreal Engine 기반의 MMORPG 클라이언트 프로그래머입니다.<br/>인벤토리·장비·퀵슬롯 등 핵심 게임 시스템과 MVVM 기반 UI 아키텍처 설계·구현에 전문성을 갖추고 있습니다.",
      projectU: {
        title: "ProjectR - MMORPG 클라이언트 개발",
        date: "기간: 2021 ~ 현재",
        desc: "Unreal Engine 5 기반 대규모 MMORPG 프로젝트에서 클라이언트 개발을 주도했습니다. 인벤토리, 장비/장착, 파티/커뮤니티 등 핵심 게임 시스템을 구현하고, MVVM 아키텍처와 네트워크 UI 동기화를 적용했습니다.",
        tags: ["C++", "Unreal Engine 5", "MVVM", "네트워크 프로그래밍", "MMORPG"],
        role: "언리얼 클라이언트 프로그래머",
        teamSize: "100+ 개발자",
        platforms: ["PC", "모바일"]
      },
      technicalHighlights: {
        title: "기술적 하이라이트",
        architecture: {
          title: "MVVM 아키텍처",
          desc: "13개 주요 게임 시스템의 MVVM 아키텍처 구현과 Model-View 분리, 델리게이트 기반 이벤트 핸들링을 통한 확장 가능한 UI 시스템 구축"
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
      contributions: {
        title: "주요 기여",
        items: [
          {
            title: "개인 게임 시스템 (인벤토리, 아이템, 퀵슬롯)",
            desc: "UID 기반 데이터 관리, 클라이언트–서버 동기화, 자동 사용 로직 구현",
            note: "플레이어 개인 게임 플레이 필수 기능 지원"
          },
          {
            title: "UI/UX 시스템 (MVVM 아키텍처)",
            desc: "13개 주요 게임 시스템 MVVM 구현, UI/로직 완전 분리",
            note: "유지보수성 향상 및 신규 기능 확장 용이"
          },
          {
            title: "멀티플레이어 상호작용 시스템 (파티·커뮤니티)",
            desc: "서버 데이터 구조화 → HUD/미니맵/캐릭터 태그 반영",
            note: "다중 유저 간 협력·소통 기능 제공"
          },
          {
            title: "네트워크 최적화 시스템 (쿨타임 동기화)",
            desc: "서버 타임스탬프 기반 실시간 쿨타임 동기화",
            note: "클라이언트 간 시간 불일치 문제 해결"
          }
        ]
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
      },
      vision: {
        description: "게임 개발자로서의 비전과 목표를 알아보세요"
      },
      codeComments: {
        model: "// Model: 파티 데이터와 서버 통신",
        viewModel: "// ViewModel: UI와 Model 연결, FieldNotify로 자동 업데이트",
        private: "// Private:",
        members: "// Members:",
        delegate: "// Delegate:",
        updateMember: "// 서버에서 파티원 정보 업데이트 시 호출",
        onPartyChanged: "// 파티원 상태 변경 시 호출 (글로벌 Model에서)",
        fieldNotify: "// FieldNotify로 UI 자동 갱신",
        etc: "etc..."
      }
    }
  };

  const t = content[lang];

  return (
    <div style={{
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      minHeight: '100vh',
      padding: '20px'
    }}>
      {/* Hero Section */}
      <section style={{
        textAlign: 'center',
        marginBottom: '80px',
        padding: '60px 20px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '30px',
        color: 'white',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      }}>
        <h1 style={{
          fontSize: '4rem',
          fontWeight: '800',
          marginBottom: '20px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          {t.title}
        </h1>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '600',
          marginBottom: '30px',
          opacity: '0.9'
        }}>
          {t.subtitle}
        </h2>
        <p style={{
          fontSize: '1.3rem',
          lineHeight: '1.8',
          maxWidth: '800px',
          margin: '0 auto',
          opacity: '0.95'
        }} dangerouslySetInnerHTML={{ __html: t.description }} />
      </section>

      {/* ProjectU Main Card */}
      <section style={{ marginBottom: '80px' }}>
        <div className="w-full min-w-0" style={{
          background: '#ffffff',
          borderRadius: '24px',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          overflow: 'hidden',
          maxWidth: 'min(100%, 1200px)',
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
              🎮 {t.projectU.title}
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
                {t.contributions.title}
              </h4>
              <div style={{ display: 'grid', gap: '16px' }}>
                {t.contributions.items.map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
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
                    }}>{index + 1}</span>
                    <div style={{ flex: 1 }}>
                      <p style={{ color: '#2d3748', fontSize: '1.2rem', margin: '0 0 8px 0', fontWeight: '600' }}>
                        {item.title}
                      </p>
                      <p style={{ color: '#4a5568', fontSize: '1rem', margin: '0 0 8px 0' }}>
                        {item.desc}
                      </p>
                      <p style={{ color: '#718096', fontSize: '0.9rem', margin: 0, fontStyle: 'italic' }}>
                        {item.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '40px' }}>
              <div style={{ textAlign: 'center', padding: '24px', background: '#f7fafc', borderRadius: '12px' }}>
                <h4 style={{ fontSize: '1.4rem', fontWeight: '600', color: '#2d3748', marginBottom: '12px' }}>👤 Role</h4>
                <p style={{ color: '#4a5568', fontSize: '1.2rem' }}>{t.projectU.role}</p>
              </div>
              <div style={{ textAlign: 'center', padding: '24px', background: '#f7fafc', borderRadius: '12px' }}>
                <h4 style={{ fontSize: '1.4rem', fontWeight: '600', color: '#2d3748', marginBottom: '12px' }}>👥 Team Size</h4>
                <p style={{ color: '#4a5568', fontSize: '1.2rem' }}>{t.projectU.teamSize}</p>
              </div>
              <div style={{ textAlign: 'center', padding: '24px', background: '#f7fafc', borderRadius: '12px' }}>
                <h4 style={{ fontSize: '1.4rem', fontWeight: '600', color: '#2d3748', marginBottom: '12px' }}>💻 Platforms</h4>
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

      {/* Technical Highlights Section */}
      <section aria-label="Technical Highlights" className="px-4 sm:px-6 lg:px-8" style={{ marginBottom: '80px' }}>
        <h2 style={{
          fontSize: '3.5rem',
          fontWeight: '800',
          marginBottom: '40px',
          color: '#1a202c',
          textAlign: 'left',
          borderLeft: '8px solid #667eea',
          paddingLeft: '20px',
          display: 'inline-block'
        }}>
          ⚡ {t.technicalHighlights.title}
        </h2>
        
        {/* 1 → 2 → 3 고정 전환 - 왼쪽부터 시작 */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-6 gap-x-4 sm:gap-x-5 lg:gap-x-6 items-stretch justify-items-start">
          {/* MVVM Architecture */}
          <article className="w-full min-w-0 h-full rounded-2xl border border-zinc-200 bg-white shadow-sm flex flex-col" style={{
            background: '#ffffff',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            border: '1px solid #e2e8f0',
            boxSizing: 'border-box',
            overflow: 'hidden'
          }}>
            <h3 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '28px', color: '#1a202c' }}>
              🏗️ {t.technicalHighlights.architecture.title}
            </h3>
            <p style={{ color: '#4a5568', lineHeight: '1.8', fontSize: '1.5rem', marginBottom: '28px' }}>
              {t.technicalHighlights.architecture.desc}
            </p>
            {/* PC와 모바일 모두에서 세로 배치 유지 */}
            <div className="min-w-0 mvvm-architecture-content" style={{ 
              display: 'grid', 
              gap: '16px',
              gridTemplateColumns: '1fr'  // 항상 1열 (세로 배치)
            }}>
              <div className="min-w-0">
                <MvvmFlowDiagram />
              </div>
              
              {/* Actual Implementation Code */}
              <div className="min-w-0">
                <CodeCardCollapsible
                  code={`${t.codeComments.model}
class UPartyModel : public UObject
{
private:
    UPROPERTY()
    TMap<uint8, FPartyData> Members;
    
    UPROPERTY()
    FOnPartyChanged OnPartyChanged;
    
    DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FOnPartyChanged, uint8, Num);

public:
    ${t.codeComments.updateMember}
    void UpdateMember(const FPartyData& NewData)
    {
        if (Members.Contains(NewData.Num))
        {
            Members[NewData.Num] = NewData;
            OnPartyChanged.Broadcast(NewData.Num);
        }
    }
};

${t.codeComments.viewModel}
class UPartyVM : public UMVVMViewModelBase
{
private:
   UPROPERTY(BlueprintReadOnly, FieldNotify, meta = (AllowPrivateAccess = "true"))
    uint8 PartyNum;
    
   UPROPERTY(BlueprintReadOnly, FieldNotify, meta = (AllowPrivateAccess = "true"))
    EPartyState State;

private:
    ${t.codeComments.onPartyChanged}
    void OnPartyChanged(uint8 Num)
    {
        if (Num == PartyNum)
        {
            ${t.codeComments.fieldNotify}
            UE_MVVM_BROADCAST_FIELD_VALUE_CHANGED(GetState);
            UE_MVVM_BROADCAST_FIELD_VALUE_CHANGED(GetStateText);
            ${t.codeComments.etc}
        }
    }
};`}
                  language="cpp"
                  label="C++"
                  title="Party System MVVM Example"
                  collapsedHeight={400}
                />
              </div>
            </div>
          </article>
          
          {/* Performance Optimization */}
                      <article 
              aria-label="Performance Optimization"
              className="w-full min-w-0 h-full rounded-2xl border border-zinc-200 bg-white shadow-sm flex flex-col"
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                border: '1px solid #e2e8f0',
                boxSizing: 'border-box',
                overflow: 'hidden'
              }}>
            <h3 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '28px', color: '#1a202c' }}>
              🚀 {t.technicalHighlights.performance.title}
            </h3>
            <p style={{ color: '#4a5568', lineHeight: '1.8', fontSize: '1.5rem', marginBottom: '28px' }}>
              {t.technicalHighlights.performance.desc}
            </p>
            
            {/* 성능 최적화 핵심 요약 */}
            <div style={{ 
              background: '#f8fafc', 
              padding: '20px', 
              borderRadius: '16px',
              border: '1px solid #e5e7eb',
              marginBottom: '24px'
            }}>
              <h4 style={{ fontSize: '1.6rem', fontWeight: '600', marginBottom: '24px', color: '#1f2937' }}>
                📊 성능 최적화 핵심 요약
              </h4>
              <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
                <div style={{ padding: '20px', background: '#f0f9ff', borderRadius: '12px', border: '1px solid #bae6fd' }}>
                  <strong style={{ color: '#0369a1', fontSize: '1.4rem' }}>필터링:</strong> 
                  <span style={{ color: '#0c4a6e', fontSize: '1.3rem' }}>BitMask + Enum 최적화로 상수시간 필터링 & 최소 렌더</span>
                </div>
                <div style={{ padding: '20px', background: '#fef3c7', borderRadius: '12px', border: '1px solid #fbbf24' }}>
                  <strong style={{ color: '#92400e', fontSize: '1.4rem' }}>아이콘:</strong> 
                  <span style={{ color: '#78350f', fontSize: '1.3rem' }}>속성 캐싱 + 슬롯 델타 갱신으로 불필요 재생성 제거</span>
                </div>
                <div style={{ padding: '20px', background: '#ecfdf5', borderRadius: '12px', border: '1px solid #34d399' }}>
                  <strong style={{ color: '#065f46', fontSize: '1.4rem' }}>인벤토리:</strong> 
                  <span style={{ color: '#064e3b', fontSize: '1.3rem' }}>Observer + FieldNotify로 이벤트 기반 UI 동기화</span>
                </div>
              </div>
            </div>
            
            {/* Performance Optimization Details */}
            <PerformanceAccordion
              items={[
                {
                  id: "bitmask",
                  title: "🔍 BitMask 기반 O(1) 필터링",
                  badge: "필터링 처리 0.2ms → 0.03ms",
                  preview: "32bit BitMask + Enum 순회 최적화로 상수 시간 필터링, Delta Update만 렌더",

                                      children: (
                      <>
                        <p style={{ color: '#4b5563', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '20px', fontStyle: 'italic', padding: '12px', background: '#f8fafc', borderRadius: '8px' }}>
                          "32bit BitMask + Enum 순회 최적화로 상수 시간 필터링, Delta Update만 렌더"
                        </p>
                        <ul style={{ color: '#374151', fontSize: '1.2rem', lineHeight: '1.7', margin: 0, paddingLeft: '24px', marginBottom: '20px' }}>
                          <li style={{ marginBottom: '8px' }}><strong>비트 OR/AND로 on/off:</strong> 상태는 정수 1개에 압축 저장</li>
                          <li style={{ marginBottom: '8px' }}><strong>ForEachEnum&lt;Filter&gt;로 활성 토글만 순회</strong></li>
                          <li style={{ marginBottom: '8px' }}><strong>FieldNotify로 변경 필드만 브로드캐스트</strong></li>
                        </ul>
                        <div style={{ marginBottom: '16px', padding: '12px', background: '#f0f9ff', borderRadius: '8px', fontSize: '1.1rem', color: '#0c4a6e', border: '1px solid #bae6fd' }}>
                          필터 상태는 Enum+BitMask로 압축 저장, 캐시 친화적인 연속 메모리 접근
                        </div>
                        <CodeCardCollapsible
                          code={`Mask |= (1u << (uint8)Filter);     // add
Mask &= ~(1u << (uint8)Filter);     // remove
UE_MVVM_BROADCAST_FIELD_VALUE_CHANGED(GetFiltered); // delta UI`}
                          language="cpp"
                          title="BitMask Filter Operations"
                          label="C++"
                          collapsedHeight={120}
                        />
                      </>
                    ),
                },
                {
                  id: "icon",
                  title: "🎨 Asset Icon Caching & Batch Update",
                  badge: "아이콘 재생성 0회(델타만)",
                  preview: "아이콘 속성 TMap 캐싱 + 슬롯 단위 배치 갱신으로 재생성 제거",

                                      children: (
                      <>
                        <p style={{ color: '#4b5563', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '20px', fontStyle: 'italic', padding: '12px', background: '#f8fafc', borderRadius: '8px' }}>
                          "아이콘 속성 TMap 캐싱 + 슬롯 단위 배치 갱신으로 재생성 제거"
                        </p>
                        <ul style={{ color: '#374151', fontSize: '1.2rem', lineHeight: '1.7', margin: 0, paddingLeft: '24px', marginBottom: '20px' }}>
                          <li style={{ marginBottom: '8px' }}><strong>슬롯ID 키로 필요한 속성만 저장/갱신</strong></li>
                          <li style={{ marginBottom: '8px' }}><strong>동일 Slot이면 변경분만 Refresh (전체 재빌드 X)</strong></li>
                          <li style={{ marginBottom: '8px' }}><strong>리스트 스크롤 시 캐시 재사용</strong></li>
                        </ul>
                        <div style={{ marginBottom: '16px', padding: '12px', background: '#fef3c7', borderRadius: '8px', fontSize: '1.1rem', color: '#78350f', border: '1px solid #fbbf24' }}>
                          메모리 효율↑, 호출 횟수↓, 캐시 재사용으로 중복 처리 방지
                        </div>
                        <CodeCardCollapsible
                          code={`PropsBySlot.FindOrAdd(SlotId).Add(Tag, Attr);
if (Changed(SlotId)) RefreshSlotDelta(SlotId);
// 캐시 재사용으로 재생성 제거`}
                          language="cpp"
                          title="Asset Icon Caching Implementation"
                          label="C++"
                          collapsedHeight={120}
                        />
                      </>
                    ),
                },
                {
                  id: "inventory",
                  title: "🔧 Inventory Interfaces (Observer)",
                  badge: "UI 업데이트 호출 -35%",
                  preview: "모델 델리게이트 구독 → ViewModel FieldNotify → UI 자동 동기화",

                                      children: (
                      <>
                        <p style={{ color: '#4b5563', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '20px', fontStyle: 'italic', padding: '12px', background: '#f8fafc', borderRadius: '8px' }}>
                          "모델 델리게이트 구독 → ViewModel FieldNotify → UI 자동 동기화"
                        </p>
                        <ul style={{ color: '#374151', fontSize: '1.2rem', lineHeight: '1.7', margin: 0, paddingLeft: '24px', marginBottom: '20px' }}>
                          <li style={{ marginBottom: '8px' }}><strong>인터페이스로 액션(선택/해제/활성)을 추상화</strong></li>
                          <li style={{ marginBottom: '8px' }}><strong>Observer로 변경 이벤트만 전달</strong></li>
                          <li style={{ marginBottom: '8px' }}><strong>Command-style 델리게이트로 입력 일원화</strong></li>
                        </ul>
                        <div style={{ marginBottom: '16px', padding: '12px', background: '#ecfdf5', borderRadius: '8px', fontSize: '1.1rem', color: '#064e3b', border: '1px solid #34d399' }}>
                          느슨한 결합으로 확장성↑, 코드 재사용성↑, 유지보수성 향상
                        </div>
                        <CodeCardCollapsible
                          code={`Inventory.OnChanged.AddUObject(this, &ThisVM::OnChanged);
UE_MVVM_BROADCAST_FIELD_VALUE_CHANGED(GetItems);
UE_MVVM_BROADCAST_FIELD_VALUE_CHANGED(GetSelected);`}
                          language="cpp"
                          title="Inventory Observer Pattern Implementation"
                          label="C++"
                          collapsedHeight={120}
                        />
                      </>
                    ),
                },
              ]}
            />
            

          </article>
          
          {/* Core Systems */}
          <article className="w-full min-w-0 h-full rounded-2xl border border-zinc-200 bg-white shadow-sm flex flex-col" style={{
            background: '#ffffff',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            border: '1px solid #e2e8f0',
            boxSizing: 'border-box',
            overflow: 'hidden'
          }}>
            <h3 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '28px', color: '#1a202c' }}>
              ⚙️ {t.technicalHighlights.systems.title}
            </h3>
            <p style={{ color: '#4a5568', lineHeight: '1.8', fontSize: '1.5rem', marginBottom: '28px' }}>
              {t.technicalHighlights.systems.desc}
            </p>
            
            {/* Core Systems Grid */}
            <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              
              {/* Gameplay Systems */}
              <div style={{ 
                background: '#f8fafc', 
                padding: '20px', 
                borderRadius: '12px', 
                border: '1px solid #e2e8f0' 
              }}>
                <h4 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '16px', color: '#1a202c' }}>
                  🎮 게임플레이 시스템
                </h4>
                <ul style={{ color: '#4a5568', fontSize: '1rem', lineHeight: '1.6' }}>
                  <li>• <strong>인벤토리 시스템</strong>: 아이템 관리, 분해, 삭제, 임시보관함</li>
                  <li>• <strong>장착 시스템</strong>: 듀얼 무기, 자동 장착</li>
                  <li>• <strong>사망 시스템</strong>: 부활 및 상태 복원</li>
                  <li>• <strong>심연의 탑</strong>: 층별 도전 및 랭킹</li>
                </ul>
              </div>

              {/* Content Systems */}
              <div style={{ 
                background: '#f8fafc', 
                padding: '20px', 
                borderRadius: '12px', 
                border: '1px solid #e2e8f0' 
              }}>
                <h4 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '16px', color: '#1a202c' }}>
                  🏪 컨텐츠 시스템
                </h4>
                <ul style={{ color: '#4a5568', fontSize: '1rem', lineHeight: '1.6' }}>
                  <li>• <strong>NPC 상점</strong>: 아이템 거래 시스템</li>
                  <li>• <strong>프리셋 시스템</strong>: 설정 저장/불러오기</li>
                  <li>• <strong>게임 이벤트</strong>: 누적 접속 보상</li>
                  <li>• <strong>외형 시스템</strong>: 캐릭터 커스터마이징</li>
                </ul>
              </div>

              {/* Technical Systems */}
              <div style={{ 
                background: '#f8fafc', 
                padding: '20px', 
                borderRadius: '12px', 
                border: '1px solid #e2e8f0' 
              }}>
                <h4 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '16px', color: '#1a202c' }}>
                  🔧 기술 시스템
                </h4>
                <ul style={{ color: '#4a5568', fontSize: '1rem', lineHeight: '1.6' }}>
                  <li>• <strong>토스트 팝업</strong>: 사용자 알림 시스템</li>
                  <li>• <strong>치트키 시스템</strong>: 개발/테스트 지원</li>
                  <li>• <strong>재화 관리</strong>: 골드, 다이아 등</li>
                  <li>• <strong>커뮤니티</strong>: 파티, 채팅 시스템</li>
                </ul>
              </div>

            </div>

            {/* Implementation Details */}
            <div style={{ 
              marginTop: '24px', 
              padding: '20px', 
              background: '#f1f5f9', 
              borderRadius: '12px',
              border: '1px solid #cbd5e1'
            }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '12px', color: '#1e293b' }}>
                📊 구현 상세 정보
              </h4>
              <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                <div>
                  <strong style={{ color: '#1e293b' }}>총 시스템:</strong> <span style={{ color: '#059669' }}>13개 주요 시스템</span>
                </div>
                <div>
                  <strong style={{ color: '#1e293b' }}>총 파일:</strong> <span style={{ color: '#059669' }}>80+ .h/.cpp 파일</span>
                </div>
                <div>
                  <strong style={{ color: '#1e293b' }}>아키텍처:</strong> <span style={{ color: '#059669' }}>MVVM 패턴</span>
                </div>
                <div>
                  <strong style={{ color: '#1e293b' }}>네트워크:</strong> <span style={{ color: '#059669' }}>CMSG/CUP 기반</span>
                </div>
              </div>
            </div>
          </article>
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
          {lang === 'ko' ? '프로젝트 영상' : 'Project Video'}
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
      <section style={{ marginBottom: '80px' }}>
        <div className="responsive-grid-navigation">
          <Link to="/contributions" style={{ textDecoration: 'none' }}>
            <div className="mobile-card" style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              border: '1px solid #e2e8f0',
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'pointer',
              height: '100%',
              width: '100%',
              maxWidth: '100%',
              boxSizing: 'border-box',
              overflow: 'hidden',
              contain: 'layout',
              flexShrink: '1',
              flexGrow: '0'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
            }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '16px', color: '#1a202c' }}>
                💼 {t.sections.experience}
              </h3>
              <p style={{ color: '#4a5568', lineHeight: '1.6', marginBottom: '24px' }}>
                {lang === 'ko' ? '프로젝트 경험과 기술적 성과를 자세히 살펴보세요' : 'Explore project experience and technical achievements in detail'}
              </p>
              <div style={{ color: '#667eea', fontWeight: '600' }}>
                {t.sections.viewDetails} →
              </div>
            </div>
          </Link>
          
          <Link to="/interactive-ui" style={{ textDecoration: 'none' }}>
            <div className="mobile-card" style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              border: '1px solid #e2e8f0',
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'pointer',
              height: '100%',
              width: '100%',
              maxWidth: '100%',
              boxSizing: 'border-box',
              overflow: 'hidden',
              contain: 'layout',
              flexShrink: '1',
              flexGrow: '0'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
            }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '16px', color: '#1a202c' }}>
                🎮 {t.sections.projects}
              </h3>
              <p style={{ color: '#4a5568', lineHeight: '1.6', marginBottom: '24px' }}>
                {lang === 'ko' ? '인터랙티브 UI 시스템과 게임플레이 메커니즘을 확인하세요' : 'Check out interactive UI systems and gameplay mechanisms'}
              </p>
              <div style={{ color: '#667eea', fontWeight: '600' }}>
                {t.sections.viewDetails} →
              </div>
            </div>
          </Link>
          
          <Link to="/optimization" style={{ textDecoration: 'none' }}>
            <div className="mobile-card" style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              border: '1px solid #e2e8f0',
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'pointer',
              height: '100%',
              width: '100%',
              maxWidth: '100%',
              boxSizing: 'border-box',
              overflow: 'hidden',
              contain: 'layout',
              flexShrink: '1',
              flexGrow: '0'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
            }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '16px', color: '#1a202c' }}>
                🔧 {t.sections.skills}
              </h3>
              <p style={{ color: '#4a5568', lineHeight: '1.6', marginBottom: '24px' }}>
                {lang === 'ko' ? 'C++, Unreal Engine, MVVM 등 보유 기술 스택을 확인하세요' : 'Check out technical skills including C++, Unreal Engine, MVVM'}
              </p>
              <div style={{ color: '#667eea', fontWeight: '600' }}>
                {t.sections.viewDetails} →
              </div>
            </div>
          </Link>
          
          <Link to="/vision" style={{ textDecoration: 'none' }}>
            <div className="mobile-card" style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              border: '1px solid #e2e8f0',
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'pointer',
              height: '100%',
              width: '100%',
              maxWidth: '100%',
              boxSizing: 'border-box',
              overflow: 'hidden',
              contain: 'layout',
              flexShrink: '1',
              flexGrow: '0'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
            }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '16px', color: '#1a202c' }}>
                🚀 {t.sections.vision}
              </h3>
              <p style={{ color: '#4a5568', lineHeight: '1.6', marginBottom: '24px' }}>
                {t.vision.description}
              </p>
              <div style={{ color: '#667eea', fontWeight: '600' }}>
                {t.sections.viewDetails} →
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: '800',
          marginBottom: '32px',
          color: '#1a202c'
        }}>
          📧 {t.contact.title}
        </h2>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '32px',
          flexWrap: 'wrap'
        }}>
          <a href="mailto:seongjae.park.dev@gmail.com" style={{
            background: '#667eea',
            color: 'white',
            padding: '16px 32px',
            borderRadius: '25px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1.1rem',
            transition: 'transform 0.2s, box-shadow 0.2s',
            display: 'inline-block'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 10px 20px rgba(102, 126, 234, 0.4)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            📧 {t.contact.email}
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" style={{
            background: '#2d3748',
            color: 'white',
            padding: '16px 32px',
            borderRadius: '25px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1.1rem',
            transition: 'transform 0.2s, box-shadow 0.2s',
            display: 'inline-block'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 10px 20px rgba(45, 55, 72, 0.4)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            🐙 {t.contact.github}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
