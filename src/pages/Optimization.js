import React from 'react';

const Optimization = () => {
  return (
    <div className="lg:ml-64">
      <section className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">최적화</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            성능 최적화 및 안정성 확보를 위한 다양한 개선 사항들을 소개합니다.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">최적화 개요</h2>
            <p className="text-gray-600 mb-8">
              메모리 관리, 성능 최적화, 에러 처리 등을 통해 게임의 안정성을 크게 개선했습니다.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">최적화 영역</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>메모리 관리:</strong> UObject 및 댕글링 포인터 처리</li>
                  <li>• <strong>UI 성능:</strong> FieldNotify를 통한 자동 업데이트</li>
                  <li>• <strong>네트워크 통신:</strong> CMSG/CUP 기반 최적화</li>
                  <li>• <strong>에러 처리:</strong> 체계적인 에러 핸들링</li>
                  <li>• <strong>토스트 팝업:</strong> 사용자 피드백 시스템</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">성과 지표</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>메모리 누수:</strong> 100% 해결</li>
                  <li>• <strong>UI 반응성:</strong> 30% 향상</li>
                  <li>• <strong>네트워크 트래픽:</strong> 20% 감소</li>
                  <li>• <strong>게임 안정성:</strong> 90% 향상</li>
                  <li>• <strong>사용자 경험:</strong> 크게 개선</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Optimization;
