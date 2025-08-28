import React from 'react';

const Growth = () => {
  return (
    <div className="lg:ml-64">
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">성장</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            ProjectU 프로젝트를 통해 얻은 기술적 성장과 미래 계획을 소개합니다.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">기술적 성장</h2>
            <p className="text-gray-600 mb-8">
              ProjectU 프로젝트를 통해 다양한 기술적 역량을 키우고 성장했습니다.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">획득한 기술</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Unreal Engine 5:</strong> 고급 게임 개발</li>
                  <li>• <strong>C++:</strong> 시스템 프로그래밍</li>
                  <li>• <strong>MVVM 아키텍처:</strong> 설계 패턴</li>
                  <li>• <strong>네트워크 프로그래밍:</strong> 실시간 통신</li>
                  <li>• <strong>성능 최적화:</strong> 메모리 및 성능 관리</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">미래 계획</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>고급 게임 개발:</strong> 더 복잡한 시스템 구현</li>
                  <li>• <strong>아키텍처 설계:</strong> 시스템 설계 역량 강화</li>
                  <li>• <strong>팀 리더십:</strong> 기술 리더 역할</li>
                  <li>• <strong>새로운 기술:</strong> 최신 게임 개발 기술 습득</li>
                  <li>• <strong>지식 공유:</strong> 개발 경험 공유 및 멘토링</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Growth;
