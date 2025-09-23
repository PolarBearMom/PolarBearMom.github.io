import React from 'react';
import { useLang } from '../LangContext';

const Optimization = () => {
  const { lang } = useLang();

  const content = {
    en: {
      title: "Collaboration & Communication",
      subtitle: "How I approach team collaboration and communication through innovative tools and processes.",
      overview: "I believe effective collaboration is the foundation of successful game development. Through developing practical tools and establishing clear communication processes, I've enhanced team productivity and streamlined workflows.",
      philosophy: {
        title: "Collaboration Philosophy",
        content: "I focus on creating tools and processes that enable seamless communication between different roles - developers, designers, QA, and server administrators. The goal is to reduce friction and increase efficiency.",
        principles: [
          "Tool-based collaboration over manual processes",
          "Real-time data synchronization across teams", 
          "Role-specific customization for different needs",
          "Automated workflows to reduce human error"
        ]
      },
      cheatTool: {
        title: "Dynamic Cheat Key System",
        subtitle: "Excel-based collaborative development tool",
        description: "Developed a comprehensive cheat key system that allows server administrators to add new cheat commands through Excel files, which automatically generate UI and handle packet communication.",
        features: [
          "Excel-based data management for easy editing",
          "SVN integration for version control",
          "Automatic UI generation from data",
          "Real-time packet communication",
          "Role-based access control"
        ],
        impact: [
          "Reduced development time for new cheat commands by 80%",
          "Enabled non-programmers to add cheat functionality",
          "Improved QA testing efficiency",
          "Enhanced cross-team collaboration"
        ]
      },
      communication: {
        title: "Communication Experience",
        content: "Through various projects, I've learned that effective communication requires both technical solutions and interpersonal skills.",
        experiences: [
          "Led cross-functional team meetings for system architecture decisions",
          "Mentored junior developers through code reviews and pair programming",
          "Facilitated knowledge sharing sessions on MVVM architecture",
          "Established clear documentation standards for team consistency"
        ]
      }
    },
    ko: {
      title: "소통/협업",
      subtitle: "혁신적인 도구와 프로세스를 통한 팀 협업 및 소통 방식을 소개합니다.",
      overview: "효과적인 협업이 성공적인 게임 개발의 기반이라고 믿습니다. 실용적인 도구 개발과 명확한 소통 프로세스 구축을 통해 팀 생산성을 향상시키고 워크플로우를 최적화했습니다.",
      philosophy: {
        title: "협업 철학",
        content: "개발자, 기획자, QA, 서버 관리자 등 다양한 역할 간의 원활한 소통을 가능하게 하는 도구와 프로세스 구축에 집중합니다. 마찰을 줄이고 효율성을 높이는 것이 목표입니다.",
        principles: [
          "수동 프로세스보다 도구 기반 협업",
          "팀 간 실시간 데이터 동기화",
          "역할별 맞춤형 커스터마이징",
          "인적 오류 감소를 위한 자동화 워크플로우"
        ]
      },
      cheatTool: {
        title: "동적 치트키 시스템",
        subtitle: "엑셀 기반 협업 개발 도구",
        description: "서버 관리자가 엑셀 파일을 통해 새로운 치트 명령어를 추가할 수 있는 포괄적인 치트키 시스템을 개발했습니다. 데이터에서 자동으로 UI를 생성하고 패킷 통신을 처리합니다.",
        features: [
          "쉬운 편집을 위한 엑셀 기반 데이터 관리",
          "버전 관리를 위한 SVN 연동",
          "데이터에서 자동 UI 생성",
          "실시간 패킷 통신",
          "역할 기반 접근 제어"
        ],
        impact: [
          "새 치트 명령어 개발 시간 80% 단축",
          "비개발자도 치트 기능 추가 가능",
          "QA 테스트 효율성 향상",
          "크로스팀 협업 강화"
        ]
      },
      communication: {
        title: "소통 경험",
        content: "다양한 프로젝트를 통해 효과적인 소통에는 기술적 솔루션과 대인관계 기술이 모두 필요하다는 것을 배웠습니다.",
        experiences: [
          "시스템 아키텍처 결정을 위한 크로스 기능팀 회의 주도",
          "코드 리뷰와 페어 프로그래밍을 통한 주니어 개발자 멘토링",
          "MVVM 아키텍처에 대한 지식 공유 세션 진행",
          "팀 일관성을 위한 명확한 문서화 표준 수립"
        ]
      }
    }
  };

  const t = content[lang] || content.en;

  return (
    <div className="lg:ml-64">
      <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">{t.title}</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Overview */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">{t.title} 개요</h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              {t.overview}
            </p>
          </div>

          {/* Philosophy */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">{t.philosophy.title}</h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              {t.philosophy.content}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">핵심 원칙</h3>
                <ul className="space-y-3 text-gray-600">
                  {t.philosophy.principles.map((principle, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-purple-600 mr-3 mt-1">•</span>
                      <span>{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Cheat Tool */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">{t.cheatTool.title}</h2>
            <p className="text-lg text-purple-600 mb-4 font-semibold">{t.cheatTool.subtitle}</p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              {t.cheatTool.description}
            </p>
            
            {/* Workflow Diagram */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">🔄 개발 워크플로우</h3>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                  <div className="bg-white px-4 py-2 rounded-lg shadow-md border-l-4 border-blue-500">
                    <span className="font-semibold text-blue-600">📊 Excel</span>
                    <p className="text-gray-600">데이터 입력</p>
                  </div>
                  <div className="text-2xl text-gray-400">→</div>
                  <div className="bg-white px-4 py-2 rounded-lg shadow-md border-l-4 border-green-500">
                    <span className="font-semibold text-green-600">📁 SVN</span>
                    <p className="text-gray-600">버전 관리</p>
                  </div>
                  <div className="text-2xl text-gray-400">→</div>
                  <div className="bg-white px-4 py-2 rounded-lg shadow-md border-l-4 border-purple-500">
                    <span className="font-semibold text-purple-600">🎮 Unreal</span>
                    <p className="text-gray-600">리임포트</p>
                  </div>
                  <div className="text-2xl text-gray-400">→</div>
                  <div className="bg-white px-4 py-2 rounded-lg shadow-md border-l-4 border-orange-500">
                    <span className="font-semibold text-orange-600">🖥️ UI</span>
                    <p className="text-gray-600">자동 생성</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Examples */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">📸 실제 구현 화면</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-100 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-gray-700">메인 치트 메뉴</h4>
                  <div className="bg-gray-800 rounded p-4 text-white text-sm">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-bold">Cheat Menu</span>
                      <span className="bg-orange-500 px-2 py-1 rounded text-xs">EXIT</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="bg-gray-700 p-2 rounded text-center">System</div>
                      <div className="bg-gray-700 p-2 rounded text-center">LEVEL/EXP</div>
                      <div className="bg-gray-700 p-2 rounded text-center">장착</div>
                      <div className="bg-gray-700 p-2 rounded text-center">재화</div>
                      <div className="bg-gray-700 p-2 rounded text-center">퀵슬롯</div>
                      <div className="bg-gray-700 p-2 rounded text-center">HP/MP</div>
                      <div className="bg-blue-600 p-2 rounded text-center">인벤토리</div>
                      <div className="bg-gray-700 p-2 rounded text-center">클래스</div>
                      <div className="bg-gray-700 p-2 rounded text-center">전투</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-100 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-gray-700">인벤토리 치트 기능</h4>
                  <div className="bg-gray-800 rounded p-4 text-white text-sm">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-bold">인벤토리</span>
                      <span className="bg-gray-600 px-2 py-1 rounded text-xs">뒤로가기</span>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-gray-700 p-2 rounded">
                        <div className="text-xs text-gray-300 mb-1">아이템얻기(인벤토리)</div>
                        <div className="flex gap-2 text-xs">
                          <input className="bg-gray-600 px-2 py-1 rounded w-20" placeholder="Int32 Type" />
                          <input className="bg-gray-600 px-2 py-1 rounded w-20" placeholder="아이템 ID" />
                          <input className="bg-gray-600 px-2 py-1 rounded w-16" placeholder="개수" />
                          <button className="bg-green-600 px-2 py-1 rounded">보내기</button>
                        </div>
                      </div>
                      <div className="bg-gray-700 p-2 rounded">
                        <div className="text-xs text-gray-300 mb-1">아이템삭제(인벤토리)</div>
                        <div className="flex gap-2 text-xs">
                          <input className="bg-gray-600 px-2 py-1 rounded w-20" placeholder="Int32 Type" />
                          <input className="bg-gray-600 px-2 py-1 rounded w-20" placeholder="아이템 ID" />
                          <button className="bg-red-600 px-2 py-1 rounded">보내기</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Excel Data Structure */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">📊 엑셀 데이터 구조</h3>
              <div className="bg-gray-50 rounded-lg p-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border px-2 py-0.5 text-left">Cheat Name</th>
                      <th className="border px-2 py-0.5 text-left">Group</th>
                      <th className="border px-2 py-0.5 text-left">StateMap</th>
                      <th className="border px-2 py-0.5 text-left">Packet</th>
                      <th className="border px-2 py-0.5 text-left">Int32 Params</th>
                      <th className="border px-2 py-0.5 text-left">Int64 Params</th>
                      <th className="border px-2 py-0.5 text-left">String Params</th>
                      <th className="border px-2 py-0.5 text-left">Explanation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-2 py-0.5">골드/다이아 얻기</td>
                      <td className="border px-2 py-0.5">재화</td>
                      <td className="border px-2 py-0.5">0</td>
                      <td className="border px-2 py-0.5">CMSG_GM_SET_GOLD_AND_DIA</td>
                      <td className="border px-2 py-0.5">다이아</td>
                      <td className="border px-2 py-0.5">골드</td>
                      <td className="border px-2 py-0.5"></td>
                      <td className="border px-2 py-0.5">입력한 수치만큼 골드와 다이아를 얻음</td>
                    </tr>
                    <tr>
                      <td className="border px-2 py-0.5">아이템얻기</td>
                      <td className="border px-2 py-0.5">인벤토리</td>
                      <td className="border px-2 py-0.5">0</td>
                      <td className="border px-2 py-0.5">CMSG_GM_GET_ITEM</td>
                      <td className="border px-2 py-0.5">아이템ID, 개수</td>
                      <td className="border px-2 py-0.5"></td>
                      <td className="border px-2 py-0.5"></td>
                      <td className="border px-2 py-0.5">지정한 아이템을 인벤토리에 추가</td>
                    </tr>
                    <tr>
                      <td className="border px-2 py-0.5">레벨 셋팅</td>
                      <td className="border px-2 py-0.5">LEVEL/EXP</td>
                      <td className="border px-2 py-0.5">0</td>
                      <td className="border px-2 py-0.5">CMSG_GM_SET_LEVEL</td>
                      <td className="border px-2 py-0.5">레벨, 경험치</td>
                      <td className="border px-2 py-0.5"></td>
                      <td className="border px-2 py-0.5"></td>
                      <td className="border px-2 py-0.5">캐릭터 레벨과 경험치를 설정</td>
                    </tr>
                    <tr>
                      <td className="border px-2 py-0.5">캐릭터 이름 변경</td>
                      <td className="border px-2 py-0.5">시스템</td>
                      <td className="border px-2 py-0.5">0</td>
                      <td className="border px-2 py-0.5">CMSG_GM_CHANGE_NAME</td>
                      <td className="border px-2 py-0.5"></td>
                      <td className="border px-2 py-0.5"></td>
                      <td className="border px-2 py-0.5">새이름</td>
                      <td className="border px-2 py-0.5">캐릭터 이름을 변경</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 실제 전송 코드 예시 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">💻 "보내기" 버튼 클릭 시 서버 전송 코드</h3>
              <div className="bg-gray-900 rounded-lg p-6 text-green-400 text-sm font-mono overflow-x-auto">
                <pre className="whitespace-pre-wrap">
{`// "보내기" 버튼 클릭 시 실행되는 핵심 코드
FString UNetSystem::CMSG_GM_COMMAND(cmsg_enum msgEnum, const TArray<int32>& params_int32, const TArray<int64>& params_int64, const TArray<FString>& params_str)
{
    // 1. 메시지 검증
    if (msgEnum <= cmsg_enum::CMSG_GM_START || msgEnum >= cmsg_enum::CMSG_GM_END)
    {
        return FString(TEXT("잘못된 메세지 요청입니다."));
    }

    // 2. 파라미터 개수 검증 (Int32: 4개, Int64: 2개, String: 2개)
    // ... 파라미터 검증 로직 ...

    // 3. 패킷 생성 및 데이터 설정
    auto* packet = new TSendNetPacket<req::gm_command>(msgEnum);
    auto* msg = packet->ptr();

    // 4. ... 파라미터 데이터 처리 ...

    // 5. 패킷 전송
    Send(packet);
    return FString();
}`}
                </pre>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">주요 기능</h3>
                <ul className="space-y-3 text-gray-600">
                  {t.cheatTool.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">성과</h3>
                <ul className="space-y-3 text-gray-600">
                  {t.cheatTool.impact.map((impact, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">📈</span>
                      <span>{impact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Communication Experience */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">{t.communication.title}</h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              {t.communication.content}
            </p>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">주요 경험</h3>
              <ul className="space-y-4 text-gray-600">
                {t.communication.experiences.map((experience, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-indigo-600 mr-3 mt-1">💬</span>
                    <span>{experience}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Optimization;
