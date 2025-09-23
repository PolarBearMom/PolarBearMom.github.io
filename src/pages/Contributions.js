import React from 'react';
import { FaArrowUp, FaBox, FaDumbbell, FaSkull, FaCogs, FaShieldAlt, FaRocket } from 'react-icons/fa';
import { useLang } from '../LangContext';

const Contributions = () => {
  const { lang } = useLang();

  const content = {
    en: {
      title: "Experience",
      subtitle: "Key achievements and contributions in game development projects",
      contributions: [
        {
          id: 1,
          title: "Complete Inventory System Design & Implementation",
          icon: <FaBox className="text-3xl text-orange-500" />,
          items: [
            "Fully implemented 6 detailed features: main inventory, disassembly, deletion, temporary storage, auto-use, and shared UI.",
            "Applied MVVM pattern to separate UI and business logic, maximizing code reusability.",
            "Implemented real-time data synchronization with systematic CMSG/CUP-based network communication structure."
          ]
        },
        {
          id: 2,
          title: "Advanced Equipment System",
          icon: <FaDumbbell className="text-3xl text-blue-500" />,
          items: [
            "Built advanced combat system by implementing dual weapon swap system and gauge stack management.",
            "Developed automatic equipment system to greatly improve user convenience.",
            "Implemented tag-based reservation system to restrict weapon changes during skill usage."
          ]
        },
        {
          id: 3,
          title: "Death Recovery System Implementation",
          icon: <FaSkull className="text-3xl text-red-500" />,
          items: [
            "Implemented complex recovery conditions and cost calculation system to adjust game balance.",
            "Implemented time limit system and recovery time limit and expiration handling.",
            "Efficiently handled recovery system activation/deactivation with real-time state management."
          ]
        },
        {
          id: 4,
          title: "Various Content System Development",
          icon: <FaCogs className="text-3xl text-green-500" />,
          items: [
            "Implemented various game contents such as Abyss Tower, NPC shop, preset system, etc.",
            "Built scalable structure by applying consistent MVVM pattern to each system.",
            "Improved development efficiency by increasing code reusability through shared component design."
          ]
        },
        {
          id: 5,
          title: "Performance Optimization & Stability",
          icon: <FaShieldAlt className="text-3xl text-purple-500" />,
          items: [
            "Greatly improved game stability by fixing memory leaks and dangling pointer bugs.",
            "Optimized performance with automatic UI updates through FieldNotify.",
            "Enhanced user experience with systematic error handling and toast popup system."
          ]
        }
      ]
    },
    ko: {
      title: "경력",
      subtitle: "게임 개발 프로젝트에서의 주요 성과와 기여도",
      contributions: [
        {
          id: 1,
          title: "인벤토리 시스템 전체 설계 및 구현",
          icon: <FaBox className="text-3xl text-orange-500" />,
          items: [
            "메인 인벤토리, 분해, 삭제, 임시 보관함, 자동 사용, 공용 UI 등 6개 세부 기능을 완전히 구현했습니다.",
            "MVVM 패턴을 적용하여 UI와 비즈니스 로직을 분리하고 코드 재사용성을 극대화했습니다.",
            "CMSG/CUP 기반의 체계적인 네트워크 통신 구조로 실시간 데이터 동기화를 구현했습니다."
          ]
        },
        {
          id: 2,
          title: "장착 시스템 고도화",
          icon: <FaDumbbell className="text-3xl text-blue-500" />,
          items: [
            "듀얼 무기 스왑 시스템과 게이지 스택 관리를 구현하여 고급 전투 시스템을 구축했습니다.",
            "자동 장착 시스템을 개발하여 사용자 편의성을 크게 향상시켰습니다.",
            "스킬 사용 중 무기 변경 제한을 위한 예약 시스템을 태그 기반으로 구현했습니다."
          ]
        },
        {
          id: 3,
          title: "사망 복구 시스템 구현",
          icon: <FaSkull className="text-3xl text-red-500" />,
          items: [
            "복잡한 복구 조건과 비용 계산 시스템을 구현하여 게임 밸런스를 조정했습니다.",
            "시간 제한 시스템과 복구 가능 시간 제한 및 만료 처리를 구현했습니다.",
            "실시간 상태 관리로 복구 시스템 활성화/비활성화를 효율적으로 처리했습니다."
          ]
        },
        {
          id: 4,
          title: "다양한 콘텐츠 시스템 개발",
          icon: <FaCogs className="text-3xl text-green-500" />,
          items: [
            "심연의 탑, NPC 상점, 프리셋 시스템 등 다양한 게임 콘텐츠를 구현했습니다.",
            "각 시스템에 일관된 MVVM 패턴을 적용하여 확장 가능한 구조를 구축했습니다.",
            "공용 컴포넌트 설계로 코드 재사용성을 높이고 개발 효율성을 향상시켰습니다."
          ]
        },
        {
          id: 5,
          title: "성능 최적화 및 안정성 확보",
          icon: <FaShieldAlt className="text-3xl text-purple-500" />,
          items: [
            "메모리 누수와 댕글링 포인터 버그를 수정하여 게임 안정성을 크게 개선했습니다.",
            "FieldNotify를 통한 자동 UI 업데이트로 성능을 최적화했습니다.",
            "체계적인 에러 처리와 토스트 팝업 시스템으로 사용자 경험을 향상시켰습니다."
          ]
        }
      ]
    }
  };

  const t = content[lang] || content.en;

  return (
    <div className="lg:ml-64">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">
            {t.title}
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Contributions Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {t.contributions.map((contribution, index) => (
              <div
                key={contribution.id}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    {contribution.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {contribution.title}
                    </h3>
                  </div>
                  <div className="text-orange-500">
                    <FaArrowUp />
                  </div>
                </div>
                
                <ul className="space-y-4">
                  {contribution.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Highlights */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            기술적 하이라이트
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl text-orange-500 mb-4">6</div>
              <h3 className="text-xl font-semibold mb-2">인벤토리 기능</h3>
              <p className="text-gray-600">메인, 분해, 삭제, 임시보관함, 자동사용, 공용UI</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl text-blue-500 mb-4">80+</div>
              <h3 className="text-xl font-semibold mb-2">개발 파일</h3>
              <p className="text-gray-600">C++ 헤더 및 소스 파일</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl text-green-500 mb-4">50+</div>
              <h3 className="text-xl font-semibold mb-2">네트워크 패킷</h3>
              <p className="text-gray-600">CMSG/CUP 기반 통신 패킷</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Summary */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            프로젝트 영향도
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2">40%</div>
              <p className="text-green-100">코드 유지보수성 향상</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2">20%</div>
              <p className="text-blue-100">네트워크 트래픽 감소</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2">70%</div>
              <p className="text-purple-100">사용자 편의성 향상</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2">60%</div>
              <p className="text-orange-100">코드 재사용성 향상</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contributions;
