import React from 'react';
import { useLang } from '../LangContext';

const Vision = () => {
  const { lang } = useLang();

  const content = {
    en: {
      title: "Vision",
      subtitle: "My vision as a game developer and future goals in the industry.",
      developerGoals: "Developer Goals",
      technicalVision: "Technical Vision", 
      longTermGoals: "Long-term Goals",
      learningPlan: "Learning Plan",
      goals: {
        title: "My Goals as a Game Developer",
        content: "To become a leading game development expert who creates innovative and engaging gaming experiences through cutting-edge technology and creative problem-solving."
      },
      technical: {
        title: "Technical Vision",
        content: "To master advanced game development technologies, design scalable architectures, and contribute to the evolution of game development practices through continuous learning and innovation."
      },
      longTerm: {
        title: "Long-term Aspirations",
        content: "To become a technical leader who mentors other developers, contributes to open-source projects, and shapes the future of game development through thought leadership and community engagement."
      },
      learning: {
        title: "Continuous Learning",
        content: "Committed to staying current with emerging technologies, expanding expertise in multiplayer architectures, and exploring new frontiers in game development."
      },
      goalsList: {
        item1: "Become a game development expert",
        item2: "Demonstrate technical leadership",
        item3: "Design innovative architectures",
        item4: "Contribute to team growth"
      },
      technicalList: {
        item1: "Master latest game engine technologies",
        item2: "Design scalable and maintainable systems",
        item3: "Optimize performance and user experience",
        item4: "Improve code quality and practices"
      },
      longTermList: {
        item1: "Lead development teams",
        item2: "Mentor junior developers",
        item3: "Contribute to open-source projects",
        item4: "Share knowledge through blogs and talks"
      },
      learningList: {
        item1: "Advanced game engine features",
        item2: "Multiplayer and networking architectures",
        item3: "Machine learning and AI integration",
        item4: "Cloud computing and DevOps practices"
      }
    },
    ko: {
      title: "비전",
      subtitle: "게임 개발자로서의 비전과 업계에서의 미래 목표를 소개합니다.",
      developerGoals: "개발자 목표",
      technicalVision: "기술적 비전",
      longTermGoals: "장기 목표",
      learningPlan: "학습 계획",
      goals: {
        title: "게임 개발자로서의 목표",
        content: "최첨단 기술과 창의적인 문제 해결을 통해 혁신적이고 매력적인 게임 경험을 만들어내는 선도적인 게임 개발 전문가가 되는 것입니다."
      },
      technical: {
        title: "기술적 비전",
        content: "고급 게임 개발 기술을 숙달하고, 확장 가능한 아키텍처를 설계하며, 지속적인 학습과 혁신을 통해 게임 개발 관행의 진화에 기여하는 것입니다."
      },
      longTerm: {
        title: "장기적 포부",
        content: "다른 개발자들을 멘토링하고, 오픈소스 프로젝트에 기여하며, 사고 리더십과 커뮤니티 참여를 통해 게임 개발의 미래를 형성하는 기술 리더가 되는 것입니다."
      },
      learning: {
        title: "지속적 학습",
        content: "새로운 기술을 지속적으로 학습하고, 멀티플레이어 아키텍처 전문성을 확장하며, 게임 개발의 새로운 영역을 탐구하는 것에 전념합니다."
      },
      goalsList: {
        item1: "게임 개발 전문가가 되기",
        item2: "기술적 리더십 발휘",
        item3: "혁신적인 아키텍처 설계",
        item4: "팀의 성장에 기여"
      },
      technicalList: {
        item1: "최신 게임 엔진 기술 숙달",
        item2: "확장 가능하고 유지보수 가능한 시스템 설계",
        item3: "성능과 사용자 경험 최적화",
        item4: "코드 품질과 관행 개선"
      },
      longTermList: {
        item1: "개발 팀을 이끌기",
        item2: "주니어 개발자 멘토링",
        item3: "오픈소스 프로젝트 기여",
        item4: "블로그와 강의를 통한 지식 공유"
      },
      learningList: {
        item1: "고급 게임 엔진 기능",
        item2: "멀티플레이어 및 네트워킹 아키텍처",
        item3: "머신러닝 및 AI 통합",
        item4: "클라우드 컴퓨팅 및 DevOps 관행"
      }
    }
  };

  const t = content[lang] || content.en;

  return (
    <div className="lg:ml-64">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-8">{t.title}</h1>
          <p className="text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="w-full">
          
          {/* Developer Goals */}
          <div className="bg-white rounded-2xl shadow-lg border-l-8 border-l-blue-500 p-16 mb-24 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-12">
              <span className="text-6xl mr-6">🎯</span>
              <h2 className="text-6xl font-bold text-blue-600">{t.developerGoals}</h2>
            </div>
            <p className="text-4xl text-gray-700 mb-16 leading-relaxed">
              {t.goals.content}
            </p>
            <ul className="space-y-8 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-8 text-4xl leading-tight">•</span>
                <span className="text-4xl leading-tight"><strong>{t.goalsList.item1}</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-8 text-4xl leading-tight">•</span>
                <span className="text-4xl leading-tight"><strong>{t.goalsList.item2}</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-8 text-4xl leading-tight">•</span>
                <span className="text-4xl leading-tight"><strong>{t.goalsList.item3}</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-8 text-4xl leading-tight">•</span>
                <span className="text-4xl leading-tight"><strong>{t.goalsList.item4}</strong></span>
              </li>
            </ul>
          </div>

          {/* Divider Line */}
          <div className="border-t border-gray-300 my-16"></div>

          {/* Technical Vision */}
          <div className="bg-white rounded-2xl shadow-lg border-l-8 border-l-green-500 p-16 mb-24 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-12">
              <span className="text-6xl mr-6">💡</span>
              <h2 className="text-6xl font-bold text-green-600">{t.technicalVision}</h2>
            </div>
            <p className="text-4xl text-gray-700 mb-16 leading-relaxed">
              {t.technical.content}
            </p>
            <ul className="space-y-8 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-8 text-4xl leading-tight">•</span>
                <span className="text-4xl leading-tight"><strong>{t.technicalList.item1}</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-8 text-4xl leading-tight">•</span>
                <span className="text-4xl leading-tight"><strong>{t.technicalList.item2}</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-8 text-4xl leading-tight">•</span>
                <span className="text-4xl leading-tight"><strong>{t.technicalList.item3}</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-8 text-4xl leading-tight">•</span>
                <span className="text-4xl leading-tight"><strong>{t.technicalList.item4}</strong></span>
              </li>
            </ul>
          </div>

          {/* Divider Line */}
          <div className="border-t border-gray-300 my-16"></div>

          {/* Long-term Goals */}
          <div className="bg-white rounded-2xl shadow-lg border-l-8 border-l-orange-500 p-16 mb-24 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-12">
              <span className="text-6xl mr-6">🚀</span>
              <h2 className="text-6xl font-bold text-orange-600">{t.longTermGoals}</h2>
            </div>
            <p className="text-4xl text-gray-700 mb-16 leading-relaxed">
              {t.longTerm.content}
            </p>
            <ul className="space-y-8 text-gray-700">
              <li className="flex items-start">
                <span className="text-orange-600 mr-8 text-4xl leading-tight">•</span>
                <span className="text-4xl leading-tight"><strong>{t.longTermList.item1}</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-8 text-4xl leading-tight">•</span>
                <span className="text-4xl leading-tight"><strong>{t.longTermList.item2}</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-8 text-4xl leading-tight">•</span>
                <span className="text-4xl leading-tight"><strong>{t.longTermList.item3}</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-8 text-4xl leading-tight">•</span>
                <span className="text-4xl leading-tight"><strong>{t.longTermList.item4}</strong></span>
              </li>
            </ul>
          </div>

          {/* Divider Line */}
          <div className="border-t border-gray-300 my-16"></div>

          {/* Learning Plan */}
          <div className="bg-white rounded-2xl shadow-lg border-l-8 border-l-red-500 p-16 mb-24 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-12">
              <span className="text-6xl mr-6">📚</span>
              <h2 className="text-6xl font-bold text-red-600">{t.learningPlan}</h2>
            </div>
            <p className="text-4xl text-gray-700 mb-16 leading-relaxed">
              {t.learning.content}
            </p>
            <ul className="space-y-8 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-8 text-4xl leading-tight">•</span>
                <span className="text-4xl leading-tight"><strong>{t.learningList.item1}</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-8 text-4xl leading-tight">•</span>
                <span className="text-4xl leading-tight"><strong>{t.learningList.item2}</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-8 text-4xl leading-tight">•</span>
                <span className="text-4xl leading-tight"><strong>{t.learningList.item3}</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-8 text-4xl leading-tight">•</span>
                <span className="text-4xl leading-tight"><strong>{t.learningList.item4}</strong></span>
              </li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Vision;
