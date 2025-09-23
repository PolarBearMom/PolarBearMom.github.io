import React from 'react';
import { useLang } from '../LangContext';

const ProblemSolving = () => {
  const { lang } = useLang();

  const content = {
    en: {
      title: "Problem Solving",
      subtitle: "Introducing complex technical problems encountered during development and their resolution processes.",
      sectionTitle: "Problem Solving Cases",
      sectionSubtitle: "Sharing experiences of growth through various technical challenges and resolution processes.",
      problems: {
        title: "Key Problems",
        items: [
          "Memory Leaks: UObject lifecycle management",
          "Dangling Pointers: Safe pointer management", 
          "UI Synchronization: Real-time data updates",
          "Network Latency: Packet processing optimization",
          "Complex State Management: MVVM pattern application"
        ]
      },
      solutions: {
        title: "Solution Methods",
        items: [
          "Systematic Analysis: Problem root cause identification",
          "Step-by-step Approach: Breaking down into smaller units",
          "Test-driven: Verifiable solutions",
          "Documentation: Building reusable knowledge",
          "Team Collaboration: Utilizing diverse perspectives"
        ]
      }
    },
    ko: {
      title: "문제해결",
      subtitle: "개발 과정에서 발생한 복잡한 기술적 문제들과 해결 과정을 소개합니다.",
      sectionTitle: "문제해결 사례",
      sectionSubtitle: "다양한 기술적 도전과 해결 과정을 통해 성장한 경험을 공유합니다.",
      problems: {
        title: "주요 문제들",
        items: [
          "메모리 누수: UObject 생명주기 관리",
          "댕글링 포인터: 안전한 포인터 관리",
          "UI 동기화: 실시간 데이터 업데이트",
          "네트워크 지연: 패킷 처리 최적화",
          "복잡한 상태 관리: MVVM 패턴 적용"
        ]
      },
      solutions: {
        title: "해결 방법",
        items: [
          "체계적 분석: 문제 원인 파악",
          "단계적 접근: 작은 단위로 분해",
          "테스트 기반: 검증 가능한 해결책",
          "문서화: 재사용 가능한 지식 축적",
          "팀 협업: 다양한 관점 활용"
        ]
      }
    }
  };

  const t = content[lang] || content.en;

  return (
    <div className="lg:ml-64">
      <section className="bg-gradient-to-r from-purple-500 to-pink-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">{t.title}</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">{t.sectionTitle}</h2>
            <p className="text-gray-600 mb-8">
              {t.sectionSubtitle}
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{t.problems.title}</h3>
                <ul className="space-y-2 text-gray-600">
                  {t.problems.items.map((item, index) => (
                    <li key={index}>• <strong>{item}</strong></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{t.solutions.title}</h3>
                <ul className="space-y-2 text-gray-600">
                  {t.solutions.items.map((item, index) => (
                    <li key={index}>• <strong>{item}</strong></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProblemSolving;
