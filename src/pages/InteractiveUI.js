import React from 'react';

const InteractiveUI = () => {
  return (
    <div className="lg:ml-64">
      <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">인벤토리 시스템</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            ProjectU의 핵심 시스템인 인벤토리 시스템의 상세 구현 내용을 소개합니다.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">인벤토리 시스템 개요</h2>
            <p className="text-gray-600 mb-8">
              MVVM 아키텍처를 기반으로 한 6개 세부 기능을 포함한 완전한 인벤토리 시스템을 구현했습니다.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">구현된 기능</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>메인 인벤토리:</strong> 기본 아이템 관리</li>
                  <li>• <strong>분해 시스템:</strong> 아이템 분해 및 재료 획득</li>
                  <li>• <strong>삭제 시스템:</strong> 안전한 아이템 삭제</li>
                  <li>• <strong>임시 보관함:</strong> 임시 아이템 저장</li>
                  <li>• <strong>자동 사용:</strong> 조건별 자동 아이템 사용</li>
                  <li>• <strong>공용 UI:</strong> 재사용 가능한 UI 컴포넌트</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">기술적 특징</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>MVVM 패턴:</strong> UI와 비즈니스 로직 분리</li>
                  <li>• <strong>FieldNotify:</strong> 자동 UI 업데이트</li>
                  <li>• <strong>CMSG/CUP:</strong> 체계적인 네트워크 통신</li>
                  <li>• <strong>Delegate:</strong> 느슨한 결합 구현</li>
                  <li>• <strong>실시간 동기화:</strong> 서버와 클라이언트 동기화</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InteractiveUI;
