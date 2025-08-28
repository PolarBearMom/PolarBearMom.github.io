import React from 'react';

const ProblemSolving = () => {
  return (
    <div className="lg:ml-64">
      <section className="bg-gradient-to-r from-purple-500 to-pink-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">문제해결</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            개발 과정에서 발생한 복잡한 기술적 문제들과 해결 과정을 소개합니다.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">문제해결 사례</h2>
            <p className="text-gray-600 mb-8">
              다양한 기술적 도전과 해결 과정을 통해 성장한 경험을 공유합니다.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">주요 문제들</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>메모리 누수:</strong> UObject 생명주기 관리</li>
                  <li>• <strong>댕글링 포인터:</strong> 안전한 포인터 관리</li>
                  <li>• <strong>UI 동기화:</strong> 실시간 데이터 업데이트</li>
                  <li>• <strong>네트워크 지연:</strong> 패킷 처리 최적화</li>
                  <li>• <strong>복잡한 상태 관리:</strong> MVVM 패턴 적용</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">해결 방법</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>체계적 분석:</strong> 문제 원인 파악</li>
                  <li>• <strong>단계적 접근:</strong> 작은 단위로 분해</li>
                  <li>• <strong>테스트 기반:</strong> 검증 가능한 해결책</li>
                  <li>• <strong>문서화:</strong> 재사용 가능한 지식 축적</li>
                  <li>• <strong>팀 협업:</strong> 다양한 관점 활용</li>
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
