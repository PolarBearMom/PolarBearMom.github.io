import React from 'react';

const About = () => {
  return (
    <div className="lg:ml-64">
      <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">소개</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            ProjectU 프로젝트에서 인벤토리 시스템 전담 개발자로 활동한 경험을 소개합니다.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">ProjectU 프로젝트 개요</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">프로젝트 정보</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>프로젝트명:</strong> ProjectU</li>
                  <li>• <strong>개발 기간:</strong> 2년</li>
                  <li>• <strong>팀 규모:</strong> 50+ 명</li>
                  <li>• <strong>개인 역할:</strong> 클라이언트 프로그래머 (인벤토리 시스템 전담)</li>
                  <li>• <strong>프로젝트 규모:</strong> 대규모 MMORPG</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">주요 성과</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>13개 주요 시스템</strong> 구현</li>
                  <li>• <strong>80+ 개발 파일</strong> 작성</li>
                  <li>• <strong>50+ 네트워크 패킷</strong> 설계 및 구현</li>
                  <li>• <strong>MVVM 아키텍처</strong> 적용</li>
                  <li>• <strong>성능 최적화</strong> 및 안정성 확보</li>
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
