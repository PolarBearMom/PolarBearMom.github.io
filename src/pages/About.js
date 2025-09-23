import React from 'react';
import { useLang } from '../LangContext';

const About = () => {
  const { lang } = useLang();

  const content = {
    en: {
      title: "About",
      subtitle: "Introduction to my experience as a dedicated inventory system developer in the ProjectU project.",
      projectOverview: "ProjectU Project Overview",
      projectInfo: "Project Information",
      achievements: "Key Achievements",
      details: {
        projectName: "Project Name",
        duration: "Development Period",
        teamSize: "Team Size",
        role: "Personal Role",
        scale: "Project Scale"
      },
      values: {
        projectName: "ProjectU",
        duration: "2 years",
        teamSize: "50+ members",
        role: "Client Programmer (Inventory System Specialist)",
        scale: "Large-scale MMORPG"
      },
      achievementsList: {
        systems: "13 major systems implemented",
        files: "80+ development files written",
        packets: "50+ network packets designed and implemented",
        architecture: "MVVM architecture applied",
        optimization: "Performance optimization and stability secured"
      }
    },
    ko: {
      title: "소개",
      subtitle: "ProjectU 프로젝트에서 인벤토리 시스템 전담 개발자로 활동한 경험을 소개합니다.",
      projectOverview: "ProjectU 프로젝트 개요",
      projectInfo: "프로젝트 정보",
      achievements: "주요 성과",
      details: {
        projectName: "프로젝트명",
        duration: "개발 기간",
        teamSize: "팀 규모",
        role: "개인 역할",
        scale: "프로젝트 규모"
      },
      values: {
        projectName: "ProjectU",
        duration: "2년",
        teamSize: "50+ 명",
        role: "클라이언트 프로그래머 (인벤토리 시스템 전담)",
        scale: "대규모 MMORPG"
      },
      achievementsList: {
        systems: "13개 주요 시스템 구현",
        files: "80+ 개발 파일 작성",
        packets: "50+ 네트워크 패킷 설계 및 구현",
        architecture: "MVVM 아키텍처 적용",
        optimization: "성능 최적화 및 안정성 확보"
      }
    }
  };

  const t = content[lang] || content.en;

  return (
    <div className="lg:ml-64">
      <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-16 px-6">
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
            <h2 className="text-3xl font-bold mb-6 text-gray-800">{t.projectOverview}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{t.projectInfo}</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>{t.details.projectName}:</strong> {t.values.projectName}</li>
                  <li>• <strong>{t.details.duration}:</strong> {t.values.duration}</li>
                  <li>• <strong>{t.details.teamSize}:</strong> {t.values.teamSize}</li>
                  <li>• <strong>{t.details.role}:</strong> {t.values.role}</li>
                  <li>• <strong>{t.details.scale}:</strong> {t.values.scale}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{t.achievements}</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>{t.achievementsList.systems}</strong></li>
                  <li>• <strong>{t.achievementsList.files}</strong></li>
                  <li>• <strong>{t.achievementsList.packets}</strong></li>
                  <li>• <strong>{t.achievementsList.architecture}</strong></li>
                  <li>• <strong>{t.achievementsList.optimization}</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
