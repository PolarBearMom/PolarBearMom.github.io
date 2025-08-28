import React from 'react';

const CombatSystem = () => {
  return (
    <div className="lg:ml-64">
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">전투 시스템</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            듀얼 무기, 자동 장착, 게이지 시스템 등 고급 전투 기능을 구현한 시스템입니다.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">전투 시스템 개요</h2>
            <p className="text-gray-600 mb-8">
              고급 전투 시스템으로 듀얼 무기 스왑, 자동 장착, 게이지 관리 등을 구현했습니다.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">구현된 기능</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>듀얼 무기 시스템:</strong> 무기 전환 및 게이지 관리</li>
                  <li>• <strong>자동 장착:</strong> 조건별 자동 장착 로직</li>
                  <li>• <strong>무기 스왑 예약:</strong> 스킬 사용 중 제한 처리</li>
                  <li>• <strong>게이지 관리:</strong> 스택 포인트 및 UI 동기화</li>
                  <li>• <strong>실시간 동기화:</strong> 무기 상태 실시간 업데이트</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">기술적 특징</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>태그 기반 제한:</strong> 스킬 사용 중 무기 변경 제한</li>
                  <li>• <strong>예약 시스템:</strong> 안전한 무기 전환</li>
                  <li>• <strong>FieldNotify:</strong> 자동 UI 업데이트</li>
                  <li>• <strong>실시간 게이지:</strong> 스택 포인트 동기화</li>
                  <li>• <strong>사용자 편의성:</strong> 70% 향상</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CombatSystem;
