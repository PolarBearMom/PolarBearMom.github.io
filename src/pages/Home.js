import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../LangContext';
import MvvmFlowDiagram from '../components/MvvmFlowDiagram';
import CodeCardCollapsible from '../components/CodeCardCollapsible';
import PerformanceAccordion from '../components/PerformanceAccordion';

const Home = () => {
  const { lang } = useLang();

  const content = {
    en: {
      title: "Seongjae Park",
      subtitle: "Game Client Developer",
      description: "C++ and Unreal Engine based MMORPG client programmer.<br/>Specialized in core game systems (Inventory, Equipment, QuickSlot) and MVVM-based UI architecture design and implementation.",
      projectU: {
        title: "ProjectR - MMORPG Client Development",
        date: "Date: 2021 ~ Present<br/><br/>",
        desc: "This project is a <strong>cross-platform (PC and mobile)</strong> large-scale MMORPG in the <strong>Lineage-like</strong> style, utilizing <strong>C++</strong> and <strong>Unreal Engine 5</strong> to achieve high graphics quality and optimal performance.<br/><br/>I joined the client development team as a team member in January 2022, taking charge of core aspects of the game including <strong>item systems</strong>, <strong>UI/UX</strong>, <strong>system architecture</strong> design, and optimization. We actively utilize the latest Unreal Engine 5 technologies such as <strong>World Partition</strong>, <strong>Nanite</strong>, and <strong>Gameplay Ability System (GAS)</strong>, and have introduced <strong>MVVM (Model-View-ViewModel)</strong> architecture for UI development to enhance code reusability and maintainability.<br/><br/>As this is currently an unreleased private project, the main content is text-focused.",
        tags: ["C++", "Unreal Engine 5", "MVVM", "Network Programming", "MMORPG"],
        role: "Unreal Client Programmer",
        teamSize: "100+ Developers",
        platforms: ["PC", "Mobile"]
      },
      technicalHighlights: {
        title: "Technical Highlights",
        architecture: {
          title: "MVVM Architecture",
          desc: "Implemented comprehensive MVVM pattern with 13 major game systems, Model-View separation, and delegate-based event handling for scalable UI architecture"
        },
        performance: {
          title: "Performance Optimization",
          desc: "Optimized network traffic with CMSG/CUP packet system, FieldNotify for efficient UI updates, and real-time data synchronization across 100+ concurrent users"
        },
        systems: {
          title: "Core Responsible Systems",
          desc: "Developed 13+ essential game systems including inventory management, equipment/gear system, party/community systems, and death/resurrection mechanics"
        }
      },
      contributions: {
        title: "Key Contributions",
        items: [
          {
            title: "Individual Game Systems (Inventory, Items, QuickSlot)",
            desc: "UID-based data management, client-server synchronization, automatic usage logic implementation",
            note: "Supporting essential individual gameplay features"
          },
          {
            title: "UI/UX System (MVVM Architecture)",
            desc: "13 major game systems MVVM implementation, complete UI/logic separation",
            note: "Improved maintainability and easy new feature expansion"
          },
          {
            title: "Multiplayer Interaction System (Party & Community)",
            desc: "Server data structuring → HUD/minimap/character tag reflection",
            note: "Providing collaboration and communication features between multiple users"
          },
          {
            title: "Network Optimization System (Cooldown Synchronization)",
            desc: "Server timestamp-based real-time cooldown synchronization",
            note: "Solving client time mismatch issues"
          }
        ]
      },
      bitMaskDetails: {
        bitDivision: "Bit Area Division: Integrating registration conditions (0~15bit) and exclusion conditions (16~31bit) into a single integer",
        o1Filtering: "O(1) Filtering: Simplifying complex if-else logic with bit operations",
        scalableDesign: "Scalable Design: Only need to allocate bits when adding new filter conditions",
        innovativeArchitecture: "Innovative architecture that logically separates and manages two opposing concepts (registration/exclusion) with a single integer",
        quote: "Dividing a single int32 into 0~15bit (registration) and 16~31bit (exclusion) to solve complex filtering with simple bit operations"
      },
      performanceOptimization: {
        summaryTitle: "Performance Optimization Core Summary",
        filtering: {
          title: "Filtering:",
          desc: "BitMask compression · O(1) judgment · unified condition management"
        },
        icon: {
          title: "Icon:",
          desc: "Property caching + slot delta updates to reduce unnecessary regeneration ↓"
        },
        inventory: {
          title: "Inventory:",
          desc: "Event-based UI synchronization with Observer + FieldNotify"
        },
        search: {
          title: "Search:",
          desc: "Grouping + multi-layer sorting for O(N) → O(N log N) optimization"
        }
      },
      accordionItems: {
        bitmask: {
          title: "🔍 BitMask-based O(1) Filtering System",
          badge: "Bit-unit compression management",
          preview: "A filtering system that integrates and manages registration/exclusion conditions by dividing a single integer into bit areas"
        },
        unifiedSlot: {
          title: "💡 Unified Slot Base System",
          badge: "Code duplication ↓",
          preview: "A system designed with a unified base architecture (UBaseSlot) for slot systems, applying automatic UI component registration and delta updates"
        },
        inventoryObserver: {
          title: "📝 Inventory Interface (Observer)",
          badge: "UI update calls -35%",
          preview: "Model delegate subscription → ViewModel FieldNotify → UI automatic synchronization"
        },
        prioritySearch: {
          title: "⚡ Priority-Based Search Optimization (Auto-Equip)",
          badge: "Search cost O(N) → O(N log N)",
          preview: "Instead of iterating through the entire inventory every time, search costs were significantly reduced by grouping items and selecting only optimal slots through lambda-based dynamic priority sorting."
        }
      },
      codeComments: {
        model: "// Model: Party data and server communication",
        viewModel: "// ViewModel: UI and Model connection, automatic updates with FieldNotify",
        private: "// Private:",
        members: "// Members:",
        delegate: "// Delegate:",
        updateMember: "// Called when updating party member info from server",
        onPartyChanged: "// Called when party member status changes (from global Model)",
        fieldNotify: "// UI auto-refresh with FieldNotify",
        etc: "etc...",
        bitmask: {
          enumDefinition: "// BitMask Unified Filter System - Registration conditions (0~15bit) and exclusion conditions (16~31bit)",
          registrationConditions: "// Registration conditions (0~15 bit)",
          exclusionConditions: "// Exclusion conditions (16~31 bit)",
          gradeNormal: "Grade_Normal = 1 << 0,    // Normal grade items",
          gradeGoodly: "Grade_Goodly = 1 << 1,   // Good grade items",
          gradeRare: "Grade_Rare = 1 << 2,      // Rare grade items",
          gradeEpic: "Grade_Epic = 1 << 3,      // Epic grade items",
          gradeLegendary: "Grade_Legendary = 1 << 4, // Legendary grade items",
          excludeStartBit: "ExcludeStartBit = 1 << 16, // Exclusion condition start bit",
          pvpMode: "PvP_Mode = 1 << 17,         // PvP mode exclusion",
          tradeDisabled: "Trade_Disabled = 1 << 18, // Trade disabled exclusion",
          usage: "// Usage example",
          filterExample: "int32_t filter = Grade_Goodly | Grade_Rare; // Registration: Good and Rare grades",
          exclusionExample: "int32_t exclusion = PvP_Mode; // Exclusion: PvP mode",
          resultExample: "bool result = (filter & target) && !(exclusion & target); // O(1) filtering result",
          visibleMaskComment: "// VisibleMask: Filter mask applied to all content",
          activeMaskComment: "// ActiveMask: Filter mask for active content state",
          excludeCheckComment: "// Check exclusion conditions first (16~31 bit)",
          registrationCheckComment: "// Check registration conditions (0~15 bit)"
        },
        unifiedSlot: {
          baseClass: "// Unified Slot Base System - Automatic UI registration and delta updates",
          nativeConstruct: "// Automatic UI registration",
          updateSlotDelta: "// Delta update - only update changed slots",
          registerComponents: "// Automatic UI component registration",
          bindEvents: "// Event binding",
          refreshUI: "// UI refresh - only update changed parts",
          inventorySlot: "// Inventory slot implementation - inherits all UBaseSlot functionality",
          widgetTypeAccess: "// O(1) access by widget type",
          enumExtension: "// Extend only Enum when adding new widget types",
          inheritanceStructure: "// Inheritance structure",
          itemSpecific: "// Item-specific function",
          skillSpecific: "// Skill-specific function",
          buffSpecific: "// Buff-specific function",
          iconConfigData: "// ===== Icon configuration data =====",
          coreDataStructure: "// Core data structure (basis for automatic UI processing)",
          usagePurpose: "// Purpose of use such as item/skill/buff",
          uniqueId: "// Unique ID (ItemId, SkillId, ClassId, etc.)",
          widgetAttributeList: "// Widget attribute list: Type + Action + Value combination",
          constructor: "// Constructor: Initialize basic attributes with Scope + UniqueID",
          autoGenerate: "// Automatically generate basic attributes according to Scope",
          systemDescription: "Designed slot system with unified base architecture (UBaseSlot), applying automatic UI component registration and delta updates. As a result, slot UI call count was reduced by ~40%, and new attribute additions became extensible with just Enum definitions, significantly reducing maintenance costs.",
          problemTitle: "🔎 Problem (Before)",
          problem1: "• Icons/slots implemented separately, increasing code duplication and management costs",
          problem2: "• Adding new attributes (e.g., cooldown, enhancement) requires modifying all slot classes",
          problem3: "• UI rebuilt entirely every time → frame drops, memory waste",
          solutionTitle: "🚀 Solution (System Design)",
          solution1: "• Unified base class to centralize icon UI/behavior",
          solution2: "• Automatic widget registration → just add Enum to extend",
          solution3: "• Delta update → only update changed slots",
          solution4: "• Common interaction provision → parent provides click·longpress events, children just reuse",
          resultTitle: "🎯 Results (After)",
          result1: "• Code duplication removed → slot-related code ↓ significantly reduced",
          result2: "• Extensibility secured → new attributes reflected immediately with just Enum definitions",
          result3: "• Rendering cost reduced → eliminated full rebuild, slot UI call count ↓ significantly reduced",
          result4: "• Maintainability improved → all slots inherit from single UBaseSlot, minimizing modification scope",
          otherScopeHandling: "// ... Other Scope handling",
          widgetTypeDefinition: "// Widget type definition",
          widgetTypeEnum: "Icon, Grade, Count, CoolTime, Equip, Lock, Reinforce, ToolTip",
          extensible: "// ... Extensible",
          widgetAttributeUnit: "// Widget attribute unit",
          widgetType: "// Which widget",
          widgetAction: "// Which action to perform (Visibility, ResourcePath, CoolTime, etc.)",
          numericValue: "// Numeric value (e.g., enhancement level, item count, grade value, remaining cooldown time, etc.)"
        },
        coreSystems: {
          gameplayTitle: "🎮 Gameplay Systems",
          gameplay1: "• <strong>Inventory & Item System</strong>: item management, decomposition, deletion, temporary storage",
          gameplay2: "• <strong>Equipment System</strong>: part-specific data management, dual weapon swap, auto-equip",
          gameplay3: "• <strong>Death System</strong>: integrated management of recovery/record/revenge/tracking related to death",
          gameplay4: "• <strong>Dungeon System</strong>: In-Progress-Wait-Out state-based dungeon management",
          contentTitle: "🏪 Content Systems",
          content1: "• <strong>NPC Shop</strong>: item trading system",
          content2: "• <strong>Preset System</strong>: save/load settings",
          content3: "• <strong>Game Events</strong>: cumulative login rewards",
          content4: "• <strong>Appearance System</strong>: character customization",
          techTitle: "🔧 Technical Systems",
          tech1: "• <strong>Toast Popup</strong>: user notification system",
          tech2: "• <strong>Cheat System</strong>: development/test support",
          tech3: "• <strong>Currency Management</strong>: gold, diamonds, etc.",
          tech4: "• <strong>Community</strong>: user community management (party, friends, blocked users, etc.)",
          detailTitle: "📊 Implementation Details",
          detail1Label: "Total Systems:",
          detail1Value: "13 major systems",
          detail2Label: "Total Files:",
          detail2Value: "80+ .h/.cpp files",
          detail3Label: "Architecture:",
          detail3Value: "MVVM pattern",
          detail4Label: "Network:",
          detail4Value: "CMSG/CUP based"
        },
        iconSystem: {
          title: "🏗️ Icon System Architecture",
          subtitle: "UBaseSlot Icon System Hierarchy Diagram",
          description: "Visual diagram of icon inheritance structure and data flow centered around UBaseSlot base class"
        },
        inventoryObserver: {
          modelClass: "// Inventory Observer Pattern - Model with automatic UI updates",
          delegateDeclaration: "// Delegate declaration for inventory changes",
          updateInventory: "// Inventory data update - automatically notifies UI",
          viewModelClass: "// ViewModel subscribing to Observer",
          beginPlay: "// Subscribe to model delegate",
          handleUpdate: "// Automatic UI update with FieldNotify",
          interfaceAbstract: "Abstract actions (select/deselect/activate) through interfaces",
          observerEvent: "Observer delivers only change events",
          commandDelegate: "Unify input with Command-style delegates",
          looseCoupling: "Loose coupling improves extensibility↑, code reusability↑, maintainability",
          modelDelegateFlow: "Model delegate subscription → ViewModel FieldNotify → UI automatic synchronization"
        },
        prioritySearch: {
          optimizerClass: "// Priority-Based Search Optimization - Grouped item search",
          findOptimalSlots: "// Grouped item search",
          groupItems: "// 1. Group items by type",
          priorityFunction: "// 2. Lambda-based dynamic priority sorting",
          multiLayerSort: "// 3. Apply multi-layer sorting",
          selectTopSlots: "// 4. Select only optimal slots (O(N log N))",
          groupByType: "// Group items by type",
          calculatePriority: "// Dynamic priority calculation",
          itemRarity: "// Item rarity priority",
          playerLevel: "// Player level compatibility",
          itemCondition: "// Item condition (durability, enhancement, etc.)",
          coreOptimizationPoint: "// ===== Core Optimization Point =====",
          beforeOptimization: "// Before: O(N) - All inventory traversal",
          afterOptimization: "// After: O(N log N) - Grouping + Sorting + Single Search",
          lambdaPriority: "// Core: Lambda-based dynamic priority application",
          powerComparison: "// 1st: Power comparison",
          situationalPriority: "// 2nd: If power is equal, apply situational priority with lambda",
          situationalLambda: "// Situational lambda priority functions",
          generalEquipPriority: "// Case 1: General equip priority (Equip status → UI_Order → Inventory order)",
          slotIndexPriority: "// Case 2: Slot index priority (Dual weapons, etc.)",
          highIndexPriority: "// Higher index priority",
          problemTitle: "🔎 Problem (Before)",
          problem1: "• Repeatedly searching the entire inventory when equipping an item",
          problem2: "• Redundant implementation of separate comparison functions for different priority rules depending on the situation",
          solutionTitle: "🚀 Solution (System Design)",
          solution1: "• Reduced search scope after grouping by item SubType",
          solution2: "• After primary comparison of combat power, applied dynamic priority by situation using lambda",
          solution3: "• Handled all situations with a single ComparePriority function (e.g., general equip, dual weapon)",
          resultTitle: "✅ Results (After)",
          result1: "• Search cost optimized from O(N) to O(N log N) sorting + single search",
          result2: "• Code duplication removed → all priority rules handled by a single function",
          result3: "• Ensured extensibility → easily add new priority rules with lambda",
          description: "Instead of iterating through the entire inventory every time, search costs were significantly reduced by grouping items and selecting only optimal slots through lambda-based dynamic priority sorting."
        }
      },
      sections: {
        experience: "Experience",
        projects: "Projects",
        skills: "Skills",
        vision: "Vision",
        viewDetails: "View Details"
      },
      contact: {
        title: "Contact",
        email: "Email",
        github: "GitHub"
      },
      vision: {
        description: "Discover the vision and goals as a game developer"
      }
    },
    ko: {
      title: "박성재",
      subtitle: "게임 클라이언트 개발자",
      description: "C++와 Unreal Engine 기반의 MMORPG 클라이언트 프로그래머입니다.<br/>인벤토리·장비·퀵슬롯 등 핵심 게임 시스템과 MVVM 기반 UI 아키텍처 설계·구현에 전문성을 갖추고 있습니다.",
      projectU: {
        title: "ProjectR - MMORPG 클라이언트 개발",
        date: "기간: 2021 ~ 현재<br/><br/>",
        desc: "본 프로젝트는 <strong>크로스플랫폼(PC 및 모바일)</strong> 기반의 <strong>리니지 라이크(Lineage-like)</strong> 스타일 대규모 MMORPG로, <strong>C++</strong>과 <strong>Unreal Engine 5</strong>를 활용해 높은 그래픽 품질과 최적의 성능 구현을 목표로 합니다.<br/><br/>2022년 1월부터 클라이언트 개발팀의 팀원으로 합류하여, <strong>아이템 시스템</strong>, <strong>UI/UX</strong>, <strong>시스템 아키텍처</strong> 설계 및 최적화 등 게임의 핵심적인 부분들을 담당하고 있습니다. <strong>World Partition</strong>, <strong>Nanite</strong>, <strong>Gameplay Ability System(GAS)</strong> 등 언리얼 엔진 5의 최신 기술을 적극적으로 활용하고 있으며, UI 개발에는 <strong>MVVM(Model-View-ViewModel)</strong> 아키텍처를 도입하여 코드의 재사용성과 유지보수성을 높였습니다.<br/><br/>현재 출시 미정인 비공개 프로젝트라 주요 내용은 텍스트 중심으로 구성했습니다.",
        tags: ["C++", "Unreal Engine 5", "MVVM", "네트워크 프로그래밍", "MMORPG"],
        role: "언리얼 클라이언트 프로그래머",
        teamSize: "100+ 개발자",
        platforms: ["PC", "모바일"]
      },
      technicalHighlights: {
        title: "기술적 하이라이트",
        architecture: {
          title: "MVVM 아키텍처",
          desc: "13개 주요 게임 시스템의 MVVM 아키텍처 구현과 Model-View 분리,<br/>델리게이트 기반 이벤트 핸들링을 통한 확장 가능한 UI 시스템 구축"
        },
        performance: {
          title: "성능 최적화",
          desc: "CMSG/CUP 패킷 시스템, FieldNotify를 통한 효율적인 UI 업데이트,<br/>100명 이상 동시 접속자 실시간 데이터 동기화"
        },
        systems: {
          title: "핵심 담당 시스템",
          desc: "인벤토리 관리, 장비/장착 시스템, 파티/커뮤니티 시스템,<br/>사망/부활 메커니즘을 포함한 13개 이상의 필수 게임 시스템 개발"
        }
      },
      contributions: {
        title: "주요 기여",
        items: [
          {
            title: "인벤토리 관리 시스템",
            desc: "UID 기반 데이터 관리, 클라이언트–서버 동기화, 아이템 동작 및 상태 갱신 로직 구현",
            note: "아이템 사용, 장착/해제, 보관, 정리, 처리 등 전체 기능 구현"
          },
          {
            title: "UI/UX 시스템 (MVVM 아키텍처)",
            desc: "13개 주요 게임 시스템 MVVM 구현, UI/로직 완전 분리",
            note: "유지보수성 향상 및 신규 기능 확장 용이"
          },
          {
            title: "멀티플레이어 상호작용 시스템 (파티·커뮤니티)",
            desc: "서버 데이터 구조화 → HUD/미니맵/캐릭터 태그 반영",
            note: "다중 유저 간 협력·소통 기능 제공"
          },
          {
            title: "네트워크 최적화 시스템 (쿨타임 동기화)",
            desc: "서버 타임스탬프 기반 실시간 쿨타임 동기화",
            note: "클라이언트 간 시간 불일치 문제 해결"
          }
        ]
      },
      performanceOptimization: {
        summaryTitle: "📊 성능 최적화 핵심 요약",
        filtering: {
          title: "필터링:",
          desc: "BitMask 압축 · O(1) 판정 · 조건 통합 관리"
        },
        icon: {
          title: "아이콘:",
          desc: "속성 캐싱 + 슬롯 델타 갱신으로 불필요 재생성 ↓"
        },
        inventory: {
          title: "인벤토리:",
          desc: "Observer + FieldNotify로 이벤트 기반 UI 동기화"
        },
        search: {
          title: "탐색:",
          desc: "그룹화 + 다층 정렬로 O(N) → O(N log N) 최적화"
        }
      },
      accordionItems: {
        bitmask: {
          title: "🔍 BitMask 기반 O(1) 필터링 시스템",
          badge: "비트 단위 압축 관리",
          preview: "하나의 정수를 비트 영역 분할하여 등록/제외 조건을 통합 관리하는 필터링 시스템"
        },
        unifiedSlot: {
          title: "💡 통합 슬롯 베이스 시스템 (Unified Slot Base System)",
          badge: "코드 중복 ↓",
          preview: "슬롯 시스템을 통합 베이스 아키텍처(UBaseSlot)로 설계해, UI 컴포넌트 자동 등록과 델타 업데이트를 적용한 시스템"
        },
        inventoryObserver: {
          title: "📝 인벤토리 인터페이스 (Observer)",
          badge: "UI 업데이트 호출 -35%",
          preview: "모델 델리게이트 구독 → ViewModel FieldNotify → UI 자동 동기화"
        },
        prioritySearch: {
          title: "⚡ 우선순위 기반 탐색 최적화 (자동 장착)",
          badge: "탐색 비용 O(N) → O(N log N)",
          preview: "인벤토리 전체를 매번 순회하는 대신, 아이템을 그룹화하고 람다 기반 동적 우선순위 정렬로 최적 슬롯만 선택하는 방식으로 탐색 비용을 크게 줄였습니다."
        }
      },
      bitMaskDetails: {
        bitDivision: "비트 영역 분할: 등록 조건(0~15bit)과 제외 조건(16~31bit)을 하나의 정수로 통합",
        o1Filtering: "O(1) 필터링: 비트 연산으로 복잡한 if-else 로직을 단순화",
        scalableDesign: "확장 가능한 설계: 새로운 필터 조건 추가 시 비트만 할당",
        innovativeArchitecture: "하나의 정수로 반대되는 두 개념(등록/제외)을 논리적으로 분리하여 관리하는 혁신적 아키텍처",
        quote: "하나의 int32를 0~15bit(등록), 16~31bit(제외)로 분할하여 복잡한 필터링을 단순한 비트 연산으로 해결"
      },
      sections: {
        experience: "경력",
        projects: "프로젝트",
        skills: "소통/협업",
        vision: "비전",
        viewDetails: "자세히 보기"
      },
      contact: {
        title: "연락처",
        email: "이메일",
        github: "깃허브"
      },
      vision: {
        description: "게임 개발자로서의 비전과 목표를 알아보세요"
      },
      codeComments: {
        model: "// Model: 파티 데이터와 서버 통신",
        viewModel: "// ViewModel: UI와 Model 연결, FieldNotify로 자동 업데이트",
        private: "// Private:",
        members: "// Members:",
        delegate: "// Delegate:",
        updateMember: "// 서버에서 파티원 정보 업데이트 시 호출",
        onPartyChanged: "// 파티원 상태 변경 시 호출 (글로벌 Model에서)",
        fieldNotify: "// FieldNotify로 UI 자동 갱신",
        etc: "etc...",
        bitmask: {
          enumDefinition: "// BitMask 통합 필터 시스템 - 등록 조건(0~15bit)과 제외 조건(16~31bit)",
          registrationConditions: "// 등록 조건 (0~15 bit)",
          exclusionConditions: "// 제외 조건 (16~31 bit)",
          gradeNormal: "Grade_Normal = 1 << 0,    // 일반 등급 아이템",
          gradeGoodly: "Grade_Goodly = 1 << 1,   // 좋은 등급 아이템",
          gradeRare: "Grade_Rare = 1 << 2,      // 레어 등급 아이템",
          gradeEpic: "Grade_Epic = 1 << 3,      // 에픽 등급 아이템",
          gradeLegendary: "Grade_Legendary = 1 << 4, // 전설 등급 아이템",
          excludeStartBit: "ExcludeStartBit = 1 << 16, // 제외 조건 시작 비트",
          pvpMode: "PvP_Mode = 1 << 17,         // PvP 모드 제외",
          tradeDisabled: "Trade_Disabled = 1 << 18, // 거래 불가 제외",
          usage: "// 사용 예시",
          filterExample: "int32_t filter = Grade_Goodly | Grade_Rare; // 등록: 좋은 등급과 레어 등급",
          exclusionExample: "int32_t exclusion = PvP_Mode; // 제외: PvP 모드",
          resultExample: "bool result = (filter & target) && !(exclusion & target); // O(1) 필터링 결과",
          visibleMaskComment: "// VisibleMask: 각 컨텐츠 전체 적용 대상 필터 마스크",
          activeMaskComment: "// ActiveMask: 컨텐츠 활성화 상태의 필터 마스크",
          excludeCheckComment: "// 제외 조건 먼저 체크 (16~31 bit)",
          registrationCheckComment: "// 등록 조건 체크 (0~15 bit)"
        },
        unifiedSlot: {
          baseClass: "// 통합 슬롯 베이스 시스템 - 자동 UI 등록과 델타 업데이트",
          nativeConstruct: "// 자동 UI 등록",
          updateSlotDelta: "// 델타 업데이트 - 변경된 슬롯만 업데이트",
          registerComponents: "// 자동 UI 컴포넌트 등록",
          bindEvents: "// 이벤트 바인딩",
          refreshUI: "// UI 갱신 - 변경된 부분만 업데이트",
          inventorySlot: "// 인벤토리 슬롯 구현 - UBaseSlot의 모든 기능을 상속받음",
          widgetTypeAccess: "// 위젯 타입별 O(1) 접근",
          enumExtension: "// 새로운 위젯 타입 추가 시 Enum만 확장",
          inheritanceStructure: "// 상속 구조",
          itemSpecific: "// 아이템 전용 기능",
          skillSpecific: "// 스킬 전용 기능",
          buffSpecific: "// 버프 전용 기능",
          iconConfigData: "// ===== 아이콘 설정 데이터 =====",
          coreDataStructure: "// 핵심 데이터 구조 (UI 자동 처리의 기반)",
          usagePurpose: "// 아이템/스킬/버프 등 사용 목적",
          uniqueId: "// 고유 번호 (ItemId, SkillId, ClassId 등)",
          widgetAttributeList: "// 위젯 속성 리스트: Type + Action + Value 조합",
          constructor: "// 생성자: Scope + UniqueID로 기본 속성 초기화",
          autoGenerate: "// Scope에 따라 기본 속성 자동 생성",
          systemDescription: "슬롯 시스템을 통합 베이스 아키텍처(UBaseSlot)로 설계해, UI 컴포넌트 자동 등록과 델타 업데이트를 적용했습니다. 그 결과 슬롯 UI 호출 횟수를 ~40% 줄였고, 신규 속성 추가도 Enum 정의만으로 확장 가능하게 하여 유지보수 비용을 크게 절감했습니다.",
          problemTitle: "🔎 문제 (Before)",
          problem1: "• 아이콘/슬롯이 각각 따로 구현돼 중복 코드와 관리 비용 증가",
          problem2: "• 새로운 속성(예: 쿨타임, 강화 등) 추가 시 모든 슬롯 클래스 수정 필요",
          problem3: "• UI 전체를 매번 재빌드 → 프레임 드랍, 메모리 낭비 발생",
          solutionTitle: "🚀 해결 (System 설계)",
          solution1: "• 통합 베이스 클래스로 아이콘 UI/동작을 일원화",
          solution2: "• 자동 위젯 등록 → Enum만 추가하면 확장",
          solution3: "• 델타 업데이트 → 변경된 슬롯만 갱신",
          solution4: "• 공통 인터랙션 제공 → 클릭·롱프레스 이벤트를 부모에서 제공, 자식은 재사용만",
          resultTitle: "🎯 성과 (After)",
          result1: "• 코드 중복 제거 → 슬롯 관련 코드 ↓ 대폭 감소",
          result2: "• 확장성 확보 → 신규 속성 추가 시 Enum 정의만으로 즉시 반영",
          result3: "• 렌더링 비용 절감 → 전체 재빌드 제거, 슬롯 UI 호출 횟수 ↓ 대폭 감소",
          result4: "• 유지보수 용이성 → 모든 슬롯이 UBaseSlot 하나만 상속받으므로 수정 범위 ↓ 최소화",
          otherScopeHandling: "// ... 기타 Scope 처리",
          widgetTypeDefinition: "// 위젯 타입 정의",
          widgetTypeEnum: "Icon, Grade, Count, CoolTime, Equip, Lock, Reinforce, ToolTip",
          extensible: "// ... 확장 가능",
          widgetAttributeUnit: "// 위젯 속성 단위",
          widgetType: "// 어떤 위젯인지",
          widgetAction: "// 어떤 동작을 수행 할지 (Visibility, ResourcePath, CoolTime 등)",
          numericValue: "// 수치 값 (예: 강화 단계, 아이템 개수, 등급 값, 남은 쿨타임 시간 등)"
        },
        coreSystems: {
          gameplayTitle: "🎮 게임플레이 시스템",
          gameplay1: "• <strong>인벤토리&아이템 시스템</strong>: 아이템 관리, 분해, 삭제, 임시보관함",
          gameplay2: "• <strong>장착 시스템</strong>: 부위별 데이터 관리, 듀얼 무기 스왑, 자동 장착",
          gameplay3: "• <strong>사망 시스템</strong>: 복구/기록/복수/추적 등 사망 관련 통합 관리",
          gameplay4: "• <strong>던전 시스템</strong>: In-Progress-Wait-Out 상태 기반 던전 관리",
          contentTitle: "🏪 컨텐츠 시스템",
          content1: "• <strong>NPC 상점</strong>: 아이템 거래 시스템",
          content2: "• <strong>프리셋 시스템</strong>: 설정 저장/불러오기",
          content3: "• <strong>게임 이벤트</strong>: 누적 접속 보상",
          content4: "• <strong>외형 시스템</strong>: 캐릭터 커스터마이징",
          techTitle: "🔧 기술 시스템",
          tech1: "• <strong>토스트 팝업</strong>: 사용자 알림 시스템",
          tech2: "• <strong>치트키 시스템</strong>: 개발/테스트 지원",
          tech3: "• <strong>재화 관리</strong>: 골드, 다이아 등",
          tech4: "• <strong>커뮤니티</strong>: 유저간 커뮤니티 관리(파티, 친구, 경계대상 등)",
          detailTitle: "📊 구현 상세 정보",
          detail1Label: "총 시스템:",
          detail1Value: "13개 주요 시스템",
          detail2Label: "총 파일:",
          detail2Value: "80+ .h/.cpp 파일",
          detail3Label: "아키텍처:",
          detail3Value: "MVVM 패턴",
          detail4Label: "네트워크:",
          detail4Value: "CMSG/CUP 기반"
        },
        iconSystem: {
          title: "🏗️ 아이콘 시스템 아키텍처",
          subtitle: "UBaseSlot 아이콘 시스템 계층 구조 다이어그램",
          description: "UBaseSlot 베이스 클래스를 중심으로 한 아이콘 상속 구조와 데이터 흐름을 시각화한 다이어그램"
        },
        inventoryObserver: {
          modelClass: "// 인벤토리 Observer 패턴 - 자동 UI 업데이트가 있는 모델",
          delegateDeclaration: "// 인벤토리 변경을 위한 델리게이트 선언",
          updateInventory: "// 인벤토리 데이터 업데이트 - 자동으로 UI에 알림",
          viewModelClass: "// Observer를 구독하는 ViewModel",
          beginPlay: "// 모델 델리게이트 구독",
          handleUpdate: "// FieldNotify로 자동 UI 업데이트",
          interfaceAbstract: "인터페이스로 액션(선택/해제/활성)을 추상화",
          observerEvent: "Observer로 변경 이벤트만 전달",
          commandDelegate: "Command-style 델리게이트로 입력 일원화",
          looseCoupling: "느슨한 결합으로 확장성↑, 코드 재사용성↑, 유지보수성 향상",
          modelDelegateFlow: "모델 델리게이트 구독 → ViewModel FieldNotify → UI 자동 동기화"
        },
        prioritySearch: {
          optimizerClass: "// 우선순위 기반 탐색 최적화 - 그룹화된 아이템 탐색",
          findOptimalSlots: "// 그룹화된 아이템 탐색",
          groupItems: "// 1. 아이템 타입별 그룹화",
          priorityFunction: "// 2. 람다 기반 동적 우선순위 정렬",
          multiLayerSort: "// 3. 다층 정렬 적용",
          selectTopSlots: "// 4. 최적 슬롯만 선택 (O(N log N))",
          groupByType: "// 아이템 타입별 그룹화",
          calculatePriority: "// 동적 우선순위 계산",
          itemRarity: "// 아이템 등급 우선순위",
          playerLevel: "// 플레이어 레벨 적합성",
          itemCondition: "// 아이템 상태 (내구도, 강화 등)",
          coreOptimizationPoint: "// ===== 핵심 최적화 포인트 =====",
          beforeOptimization: "// Before: O(N) - 모든 인벤토리 순회",
          afterOptimization: "// After: O(N log N) - 그룹화 + 정렬 + 단일 탐색",
          lambdaPriority: "// 핵심: 람다 기반 동적 우선순위 적용",
          powerComparison: "// 1차: 전투력 비교",
          situationalPriority: "// 2차: 전투력이 같으면 람다로 상황별 우선순위 적용",
          situationalLambda: "// 상황별 람다 우선순위 함수들",
          generalEquipPriority: "// Case 1: 일반 장착 우선순위 (장착상태 → UI_Order → 인벤토리순서)",
          slotIndexPriority: "// Case 2: 슬롯 인덱스 우선순위 (듀얼 웨폰 등)",
          highIndexPriority: "// 높은 인덱스 우선",
          problemTitle: "🔎 문제 (Before)",
          problem1: "• 아이템 장착 시 모든 인벤토리를 반복 탐색",
          problem2: "• 상황별로 다른 우선순위 규칙을 위해 별도 비교 함수들 중복 구현",
          solutionTitle: "🚀 해결 (System 설계)",
          solution1: "• 아이템 SubType 기준으로 그룹화 후 탐색 범위 축소",
          solution2: "• 전투력 1차 비교 후, 람다로 상황별 동적 우선순위 적용",
          solution3: "• 하나의 ComparePriority 함수로 모든 상황 처리 (일반 장착, 듀얼 웨폰 등)",
          resultTitle: "✅ 성과 (After)",
          result1: "• 탐색 비용 O(N) → O(N log N) 정렬 + 단일 탐색으로 최적화",
          result2: "• 코드 중복 제거 → 하나의 함수로 모든 우선순위 규칙 처리",
          result3: "• 확장성 확보 → 새로운 우선순위 규칙을 람다로 쉽게 추가",
          description: "인벤토리 전체를 매번 순회하는 대신, 아이템을 그룹화하고 람다 기반 동적 우선순위 정렬로 최적 슬롯만 선택하는 방식으로 탐색 비용을 크게 줄였습니다."
        }
      }
    }
  };

  const t = content[lang];

  return (
    <div style={{
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      minHeight: '100vh',
      padding: '20px'
    }}>
      {/* Hero Section */}
      <section style={{
        textAlign: 'center',
        marginBottom: '80px',
        padding: '60px 20px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '30px',
        color: 'white',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      }}>
        <h1 className="text-hero-title mb-xs">
          {t.title}
        </h1>
        <h2 className="text-hero-subtitle mb-xs">
          {t.subtitle}
        </h2>
        <p className="text-hero-body" style={{ maxWidth: '800px', margin: '0 auto', marginTop: '24px' }} dangerouslySetInnerHTML={{ __html: t.description }} />
      </section>

      {/* ProjectU Main Card */}
      <section style={{ marginBottom: '80px' }}>
        <div className="w-full min-w-0" style={{
          background: '#ffffff',
          borderRadius: '24px',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          overflow: 'hidden',
          maxWidth: 'min(100%, 1200px)',
          margin: '0 auto'
        }}>
          <div style={{ overflow: 'hidden' }}>
            <img
              src="/projectR.jpg"
              alt="ProjectU"
              style={{
                width: '100%',
                height: '500px',
                objectFit: 'cover',
                transition: 'transform 0.5s ease'
              }}
            />
          </div>

          <div style={{ padding: '48px' }}>
            <h3 className="text-section-subtitle mb-xs" style={{ fontSize: '3rem' }}>
              🎮 {t.projectU.title}
            </h3>
            <p className="text-body mb-xs" style={{ color: '#718096', fontStyle: 'italic', fontSize: '1.4rem' }} dangerouslySetInnerHTML={{ __html: t.projectU.date }} />
            <p className="text-body mb-md" style={{ color: '#2d3748', fontSize: '1.8rem', lineHeight: '1.7' }} dangerouslySetInnerHTML={{ __html: t.projectU.desc }} />
            
            {/* 주요 기여 섹션 */}
            <div style={{ 
              background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)', 
              padding: '32px', 
              borderRadius: '16px',
              marginBottom: '40px',
              border: '1px solid #e2e8f0'
            }}>
              <h4 className="text-subtitle-small mb-xs" style={{ 
                color: '#2d3748', 
                borderLeft: '4px solid #667eea',
                marginBottom: '16px',
                paddingLeft: '12px'
              }}>
                {t.contributions.title}
              </h4>
              <div style={{ display: 'grid', gap: '16px' }}>
                {t.contributions.items.map((item, index) => (
                  <div key={index}>
                    {index > 0 && (
                      <div style={{ 
                        height: '1px', 
                        background: '#e2e8f0', 
                        margin: '20px 0' 
                      }}></div>
                    )}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                   <span style={{ 
                     background: '#667eea', 
                     color: 'white', 
                     borderRadius: '50%', 
                     width: '24px', 
                     height: '24px', 
                     display: 'flex', 
                     alignItems: 'center', 
                     justifyContent: 'center',
                     fontSize: '0.8rem',
                     fontWeight: '600',
                     flexShrink: 0,
                     marginTop: '2px'
                    }}>{index + 1}</span>
                   <div style={{ flex: 1 }}>
                     <p className="text-description" style={{ color: '#1a202c', margin: '0 0 8px 0', fontWeight: '700', fontSize: '1.7rem' }}>
                        {item.title}
                     </p>
                     <p className="text-text" style={{ color: '#2d3748', margin: '0 0 8px 0', fontSize: '1.4rem', lineHeight: '1.6' }}>
                        {item.desc}
                     </p>
                     <p className="text-small" style={{ color: '#4a5568', margin: 0, fontStyle: 'italic', fontSize: '1.3rem' }}>
                        {item.note}
                     </p>
                   </div>
                 </div>
                    </div>
                ))}
              </div>
            </div>

                         {/* Project Details */}
             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '40px' }}>
               <div style={{ textAlign: 'center', padding: '24px', background: '#f7fafc', borderRadius: '12px' }}>
                 <h4 style={{ fontSize: '1.4rem', fontWeight: '600', color: '#2d3748', marginBottom: '12px' }}>👤 Role</h4>
                 <p style={{ color: '#4a5568', fontSize: '1.2rem' }}>{t.projectU.role}</p>
               </div>
               <div style={{ textAlign: 'center', padding: '24px', background: '#f7fafc', borderRadius: '12px' }}>
                 <h4 style={{ fontSize: '1.4rem', fontWeight: '600', color: '#2d3748', marginBottom: '12px' }}>👥 Team Size</h4>
                 <p style={{ color: '#4a5568', fontSize: '1.2rem' }}>{t.projectU.teamSize}</p>
               </div>
               <div style={{ textAlign: 'center', padding: '24px', background: '#f7fafc', borderRadius: '12px' }}>
                 <h4 style={{ fontSize: '1.4rem', fontWeight: '600', color: '#2d3748', marginBottom: '12px' }}>💻 Platforms</h4>
                 <p style={{ color: '#4a5568', fontSize: '1.2rem' }}>{t.projectU.platforms.join(', ')}</p>
               </div>
             </div>

            {/* Tags */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {t.projectU.tags.map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    padding: '14px 24px',
                    borderRadius: '25px',
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Highlights Section */}
      <section aria-label="Technical Highlights" className="px-4 sm:px-6 lg:px-8" style={{ marginBottom: '80px' }}>
        <h2 className="text-title mb-md" style={{
          textAlign: 'left',
          borderLeft: '8px solid #667eea',
          paddingLeft: '20px',
          display: 'inline-block',
          fontSize: '3.2rem',
          marginBottom: '40px'
        }}>
          ⚡ {t.technicalHighlights.title}
        </h2>
        
        {/* 1 → 2 → 3 고정 전환 - 왼쪽부터 시작 */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-6 gap-x-4 sm:gap-x-5 lg:gap-x-6 items-stretch justify-items-start">
          {/* MVVM Architecture */}
          <article className="w-full min-w-0 h-full rounded-2xl border border-zinc-200 bg-white shadow-sm flex flex-col" style={{
            background: '#ffffff',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            border: '1px solid #e2e8f0',
            boxSizing: 'border-box',
            overflow: 'hidden'
          }}>
            <h3 className="text-section-subtitle" style={{ marginBottom: '28px', fontSize: '2.2rem' }}>
              🏗️ {t.technicalHighlights.architecture.title}
            </h3>
            <p className="text-body" style={{ color: '#2d3748', marginBottom: '28px', fontSize: '1.6rem', fontWeight: '500' }} dangerouslySetInnerHTML={{ __html: t.technicalHighlights.architecture.desc }} />
            {/* PC와 모바일 모두에서 세로 배치 유지 */}
            <div className="min-w-0 mvvm-architecture-content" style={{ 
              display: 'grid', 
              gap: '16px',
              gridTemplateColumns: '1fr'  // 항상 1열 (세로 배치)
            }}>
              <div className="min-w-0">
                <MvvmFlowDiagram />
            </div>
              
              {/* Actual Implementation Code */}
              <div className="min-w-0">
                <CodeCardCollapsible
                  code={`${t.codeComments.model}
class UPartyModel : public UObject
{
private:
    UPROPERTY()
    TMap<uint8, FPartyData> Members;
    
    UPROPERTY()
    FOnPartyChanged OnPartyChanged;
    
    DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FOnPartyChanged, uint8, Num);

public:
    ${t.codeComments.updateMember}
    void UpdateMember(const FPartyData& NewData)
    {
        if (Members.Contains(NewData.Num))
        {
            Members[NewData.Num] = NewData;
            OnPartyChanged.Broadcast(NewData.Num);
        }
    }
};

${t.codeComments.viewModel}
class UPartyVM : public UMVVMViewModelBase
{
private:
   UPROPERTY(BlueprintReadOnly, FieldNotify, meta = (AllowPrivateAccess = "true"))
    uint8 PartyNum;
    
   UPROPERTY(BlueprintReadOnly, FieldNotify, meta = (AllowPrivateAccess = "true"))
    EPartyState State;

private:
    ${t.codeComments.onPartyChanged}
    void OnPartyChanged(uint8 Num)
    {
        if (Num == PartyNum)
        {
            ${t.codeComments.fieldNotify}
            UE_MVVM_BROADCAST_FIELD_VALUE_CHANGED(GetState);
            UE_MVVM_BROADCAST_FIELD_VALUE_CHANGED(GetStateText);
            ${t.codeComments.etc}
        }
    }
};`}
                  language="cpp"
                  label="C++"
                  title="Party System MVVM Example"
                  collapsedHeight={400}
                />
          </div>
            </div>
          </article>
          
          {/* Performance Optimization */}
                      <article 
              aria-label="Performance Optimization"
              className="w-full min-w-0 h-full rounded-2xl border border-zinc-200 bg-white shadow-sm flex flex-col"
              style={{
            background: '#ffffff',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                border: '1px solid #e2e8f0',
                boxSizing: 'border-box',
                overflow: 'hidden'
          }}>
            <h3 className="text-section-subtitle" style={{ marginBottom: '28px' }}>
              🚀 {t.technicalHighlights.performance.title}
            </h3>
            <p className="text-body" style={{ color: '#2d3748', marginBottom: '28px', fontSize: '1.6rem', fontWeight: '500' }} dangerouslySetInnerHTML={{ __html: t.technicalHighlights.performance.desc }} />
            
            {/* 성능 최적화 핵심 요약 */}
            <div style={{ 
              background: '#f8fafc', 
              padding: '20px', 
              borderRadius: '16px',
              border: '1px solid #e5e7eb',
              marginBottom: '24px'
            }}>
              <h4 className="text-subtitle-small mb-xs" style={{ color: '#1f2937' }}>
                {t.performanceOptimization.summaryTitle}
              </h4>
              <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
                <div style={{ padding: '20px', background: '#f0f9ff', borderRadius: '12px', border: '1px solid #bae6fd' }}>
                  <strong className="text-subtitle-xs" style={{ color: '#0369a1' }}>{t.performanceOptimization.filtering.title}</strong> 
                  <span className="text-text" style={{ color: '#0c4a6e' }}> {t.performanceOptimization.filtering.desc}</span>
                </div>
                <div style={{ padding: '20px', background: '#fef3c7', borderRadius: '12px', border: '1px solid #fbbf24' }}>
                  <strong className="text-subtitle-xs" style={{ color: '#92400e' }}>{t.performanceOptimization.icon.title}</strong> 
                  <span className="text-text" style={{ color: '#78350f' }}>{t.performanceOptimization.icon.desc}</span>
                </div>
                <div style={{ padding: '20px', background: '#ecfdf5', borderRadius: '12px', border: '1px solid #34d399' }}>
                  <strong className="text-subtitle-xs" style={{ color: '#065f46' }}>{t.performanceOptimization.inventory.title}</strong> 
                  <span className="text-text" style={{ color: '#064e3b' }}>{t.performanceOptimization.inventory.desc}</span>
                </div>
                <div style={{ padding: '20px', background: '#f3e8ff', borderRadius: '12px', border: '1px solid #a78bfa' }}>
                  <strong className="text-subtitle-xs" style={{ color: '#6b21a8' }}>{t.performanceOptimization.search.title}</strong> 
                  <span className="text-text" style={{ color: '#581c87' }}>{t.performanceOptimization.search.desc}</span>
                </div>
              </div>
            </div>
            
            {/* Performance Optimization Details */}
            <PerformanceAccordion
              items={[
                {
                  id: "bitmask",
                  title: t.accordionItems.bitmask.title,
                  badge: t.accordionItems.bitmask.badge,
                  preview: t.accordionItems.bitmask.preview,

                                      children: (
                      <>
                        <p className="text-text" style={{ color: '#4b5563', marginBottom: '20px', fontStyle: 'italic', padding: '12px', background: '#f8fafc', borderRadius: '8px' }}>
                          "{t.bitMaskDetails.quote}"
                        </p>
                        <ul className="text-text" style={{ color: '#374151', margin: 0, paddingLeft: '24px', marginBottom: '20px' }}>
                          <li style={{ marginBottom: '8px' }}><strong>{t.bitMaskDetails.bitDivision}</strong></li>
                          <li style={{ marginBottom: '8px' }}><strong>{t.bitMaskDetails.o1Filtering}</strong></li>
                          <li style={{ marginBottom: '8px' }}><strong>{t.bitMaskDetails.scalableDesign}</strong></li>
                        </ul>
                        <div className="text-text" style={{ marginBottom: '16px', padding: '12px', background: '#f0f9ff', borderRadius: '8px', color: '#0c4a6e', border: '1px solid #bae6fd' }}>
                          {t.bitMaskDetails.innovativeArchitecture}
            </div>
                        <CodeCardCollapsible
                          code={`${t.codeComments.bitmask.enumDefinition}
UENUM()
enum class EItemFilterFlag : int32
{
    ${t.codeComments.bitmask.registrationConditions}
    ${t.codeComments.bitmask.gradeNormal}
    ${t.codeComments.bitmask.gradeGoodly}
    ${t.codeComments.bitmask.gradeRare}
    ${t.codeComments.bitmask.gradeEpic}
    ${t.codeComments.bitmask.gradeLegendary}
    
    ${t.codeComments.bitmask.exclusionConditions}
    ${t.codeComments.bitmask.excludeStartBit}
    ${t.codeComments.bitmask.pvpMode}
    ${t.codeComments.bitmask.tradeDisabled}
};
ENUM_CLASS_FLAGS(EItemFilterFlag)

// ${t.codeComments.bitmask.usage}
bool IsItemVisible(const FItemData& Item, EFilterMask VisibleMask, EFilterMask ActiveMask)
{
    ${t.codeComments.bitmask.visibleMaskComment}
    ${t.codeComments.bitmask.activeMaskComment}
    
    ${t.codeComments.bitmask.excludeCheckComment}
    if (ActiveMask & 0xFFFF0000 && IsExcludeMatched(Item, ActiveMask))
        return false;
    
    ${t.codeComments.bitmask.registrationCheckComment}
    return (Item.Grade & VisibleMask & 0xFFFF) && 
           EnumHasAnyFlags(ActiveMask & 0xFFFF, Item.Grade);
}`}
                          language="cpp"
                          title="BitMask Unified Filter System"
                          label="C++"
                          collapsedHeight={120}
                        />
                      </>
                    ),
                },
                {
                  id: "icon",
                  title: t.accordionItems.unifiedSlot.title,
                  badge: t.accordionItems.unifiedSlot.badge,
                  preview: t.accordionItems.unifiedSlot.preview,

                                      children: (
                      <>
                        <p className="text-text" style={{ color: '#4b5563', marginBottom: '20px', fontStyle: 'italic', padding: '12px', background: '#f8fafc', borderRadius: '8px' }}>
                          "{t.codeComments.unifiedSlot.systemDescription}"
                        </p>
                        
                        {/* ${t.codeComments.unifiedSlot.problemTitle} */}
                        <div style={{ marginBottom: '20px', padding: '16px', background: '#fef2f2', borderRadius: '12px', border: '1px solid #fecaca' }}>
                          <h6 className="text-text" style={{ fontWeight: '600', marginBottom: '12px', color: '#dc2626' }}>
                            {t.codeComments.unifiedSlot.problemTitle}
                          </h6>
                          <ul className="text-text" style={{ color: '#991b1b', margin: 0, paddingLeft: '20px' }}>
                            <li style={{ marginBottom: '6px' }}>{t.codeComments.unifiedSlot.problem1}</li>
                            <li style={{ marginBottom: '6px' }}>{t.codeComments.unifiedSlot.problem2}</li>
                            <li style={{ marginBottom: '6px' }}>{t.codeComments.unifiedSlot.problem3}</li>
                          </ul>
          </div>
          
                        {/* ${t.codeComments.unifiedSlot.solutionTitle} */}
                        <div style={{ marginBottom: '20px', padding: '16px', background: '#f0f9ff', borderRadius: '12px', border: '1px solid #bae6fd' }}>
                          <h6 className="text-text" style={{ fontWeight: '600', marginBottom: '12px', color: '#0369a1' }}>
                            {t.codeComments.unifiedSlot.solutionTitle}
                          </h6>
                          <ul className="text-text" style={{ color: '#0c4a6e', margin: 0, paddingLeft: '20px' }}>
                            <li style={{ marginBottom: '6px' }}>{t.codeComments.unifiedSlot.solution1}</li>
                            <li style={{ marginBottom: '6px' }}>{t.codeComments.unifiedSlot.solution2}</li>
                            <li style={{ marginBottom: '6px' }}>{t.codeComments.unifiedSlot.solution3}</li>
                            <li style={{ marginBottom: '6px' }}>{t.codeComments.unifiedSlot.solution4}</li>
                          </ul>
                        </div>

                        {/* ${t.codeComments.unifiedSlot.resultTitle} */}
                        <div style={{ marginBottom: '20px', padding: '16px', background: '#f0fdf4', borderRadius: '12px', border: '1px solid #bbf7d0' }}>
                          <h6 className="text-text" style={{ fontWeight: '600', marginBottom: '12px', color: '#16a34a' }}>
                            {t.codeComments.unifiedSlot.resultTitle}
                          </h6>
                          <ul className="text-text" style={{ color: '#15803d', margin: 0, paddingLeft: '20px' }}>
                            <li style={{ marginBottom: '6px' }}>{t.codeComments.unifiedSlot.result1}</li>
                            <li style={{ marginBottom: '6px' }}>{t.codeComments.unifiedSlot.result2}</li>
                            <li style={{ marginBottom: '6px' }}>{t.codeComments.unifiedSlot.result3}</li>
                            <li style={{ marginBottom: '6px' }}>{t.codeComments.unifiedSlot.result4}</li>
                          </ul>
                        </div>
                        <CodeCardCollapsible
                          code={`${t.codeComments.unifiedSlot.baseClass}
${t.codeComments.unifiedSlot.widgetTypeAccess}
TMap<EWidgetType, UWidget*> WidgetMap;

${t.codeComments.unifiedSlot.updateSlotDelta}
void RefreshComponent(const FWidgetDetails& Details) {
    if (UWidget* Target = WidgetMap.FindRef(Details.Type))
        ApplyAction(Target, Details);
}

${t.codeComments.unifiedSlot.registerComponents}
void RegisterComponents();  ${t.codeComments.unifiedSlot.enumExtension}

${t.codeComments.unifiedSlot.inheritanceStructure}
class UItemSlot : public UBaseSlot;      ${t.codeComments.unifiedSlot.itemSpecific}
class USkillSlot : public UBaseSlot;     ${t.codeComments.unifiedSlot.skillSpecific}
class UBuffSlot : public UBaseSlot;      ${t.codeComments.unifiedSlot.buffSpecific}


${t.codeComments.unifiedSlot.iconConfigData}
${t.codeComments.unifiedSlot.coreDataStructure}
struct FIconAttributes 
{
    ESlotScope Scope;      ${t.codeComments.unifiedSlot.usagePurpose}
    int64 UniqueID;        ${t.codeComments.unifiedSlot.uniqueId}

    ${t.codeComments.unifiedSlot.widgetAttributeList}
    TMap<EWidgetType, FWidgetDetail> Attributes;

    ${t.codeComments.unifiedSlot.constructor}
    FIconAttributes(ESlotScope InScope, int64 InID)
        : Scope(InScope), UniqueID(InID)
    {
        Init();
    }
  
private:
    ${t.codeComments.unifiedSlot.autoGenerate}
    void Init()
    {
        switch (Scope)
        {
            case ESlotScope::ItemNo:          GenerateByItemNo(); break;
            case ESlotScope::InventorySlotNo: GenerateByInventorySlotNo(); break;
            case ESlotScope::SkillNo:         GenerateBySkillNo(); break;
            case ESlotScope::ClassNo:         GenerateByClassNo(); break;
            case ESlotScope::NPCBaseNo:       GenerateByNPCBaseNo(); break;
            ${t.codeComments.unifiedSlot.otherScopeHandling}
        }
    }
};

${t.codeComments.unifiedSlot.widgetTypeDefinition}
enum class EWidgetType : uint8 
{
    ${t.codeComments.unifiedSlot.widgetTypeEnum}
    ${t.codeComments.unifiedSlot.extensible}
};

${t.codeComments.unifiedSlot.widgetAttributeUnit}
struct FWidgetDetail 
{
    EWidgetType Type;       ${t.codeComments.unifiedSlot.widgetType}
    EWidgetAction Action;   ${t.codeComments.unifiedSlot.widgetAction}
    int64 Value;            ${t.codeComments.unifiedSlot.numericValue}
};`}
                          language="cpp"
                          title="Unified Slot Base System Architecture"
                          label="C++"
                          collapsedHeight={200}
                        />

                        {/* 🏗️ 아이콘 시스템 아키텍처 */}
                        <div style={{ marginTop: '24px', padding: '20px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                          <h5 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '16px', color: '#374151' }}>
                            {t.codeComments.iconSystem.title}
                          </h5>
                          <div style={{ 
                            textAlign: 'center', 
                            marginBottom: '16px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                          }}>
                            <img 
                              src="/UBaseSlot.jpg" 
                              alt={t.codeComments.iconSystem.subtitle}
                              style={{ 
                                maxWidth: '400px', 
                                width: '100%', 
                                height: 'auto',
                                display: 'block',
                                margin: '0 auto'
                              }}
                            />
                          </div>
                          <p style={{ fontSize: '0.95rem', color: '#6b7280', textAlign: 'center', margin: 0 }}>
                            {t.codeComments.iconSystem.description}
                          </p>
                        </div>
                      </>
                    ),
                },
                {
                  id: "inventory",
                  title: t.accordionItems.inventoryObserver.title,
                  badge: t.accordionItems.inventoryObserver.badge,
                  preview: t.accordionItems.inventoryObserver.preview,

                                      children: (
                      <>
                        <p className="text-text" style={{ color: '#4b5563', marginBottom: '20px', fontStyle: 'italic', padding: '12px', background: '#f8fafc', borderRadius: '8px' }}>
                          "{t.codeComments.inventoryObserver.modelDelegateFlow}"
                        </p>
                        <ul className="text-text" style={{ color: '#374151', margin: 0, paddingLeft: '24px', marginBottom: '20px' }}>
                          <li style={{ marginBottom: '8px' }}><strong>{t.codeComments.inventoryObserver.interfaceAbstract}</strong></li>
                          <li style={{ marginBottom: '8px' }}><strong>{t.codeComments.inventoryObserver.observerEvent}</strong></li>
                          <li style={{ marginBottom: '8px' }}><strong>{t.codeComments.inventoryObserver.commandDelegate}</strong></li>
                        </ul>
                        <div className="text-text" style={{ marginBottom: '16px', padding: '12px', background: '#f0fdf4', borderRadius: '8px', color: '#16a34a', border: '1px solid #bbf7d0' }}>
                          {t.codeComments.inventoryObserver.looseCoupling}
                        </div>
                        <CodeCardCollapsible
                          code={`${t.codeComments.inventoryObserver.modelClass}
class UInventoryModel : public UObject {
  GENERATED_BODY()
  
public:
  ${t.codeComments.inventoryObserver.delegateDeclaration}
  DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FOnInventoryChanged, const FInventoryData&, NewData);
  
  UPROPERTY(BlueprintAssignable)
  FOnInventoryChanged OnInventoryChanged;
  
  ${t.codeComments.inventoryObserver.updateInventory}
  void UpdateInventory(const FInventoryData& NewData) {
    InventoryData = NewData;
    OnInventoryChanged.Broadcast(NewData);
  }
};

${t.codeComments.inventoryObserver.viewModelClass}
class UInventoryViewModel : public UObject {
  GENERATED_BODY()
  
public:
  virtual void BeginPlay() override {
    Super::BeginPlay();
    ${t.codeComments.inventoryObserver.beginPlay}
    if (InventoryModel) {
      InventoryModel->OnInventoryChanged.AddDynamic(this, &UInventoryViewModel::HandleInventoryUpdate);
    }
  }
  
  ${t.codeComments.inventoryObserver.handleUpdate}
  UFUNCTION()
  void HandleInventoryUpdate(const FInventoryData& NewData) {
    UpdateInventoryUI(NewData);
  }
};`}
                          language="cpp"
                          title="Inventory Observer Pattern Implementation"
                          label="C++"
                          collapsedHeight={120}
                        />
                      </>
                    ),
                },
                {
                  id: "priority-search",
                  title: t.accordionItems.prioritySearch.title,
                  badge: t.accordionItems.prioritySearch.badge,
                  preview: t.accordionItems.prioritySearch.preview,

                  children: (
                    <>
                      <p style={{ color: '#4b5563', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '20px', fontStyle: 'italic', padding: '12px', background: '#f8fafc', borderRadius: '8px' }}>
                        "{t.codeComments.prioritySearch.description}"
                      </p>

                      {/* ${t.codeComments.prioritySearch.problemTitle} */}
                      <div style={{ marginBottom: '20px', padding: '16px', background: '#fef2f2', borderRadius: '12px', border: '1px solid #fecaca' }}>
                        <h6 className="text-text" style={{ fontWeight: '600', marginBottom: '12px', color: '#dc2626' }}>
                          {t.codeComments.prioritySearch.problemTitle}
                        </h6>
                        <ul className="text-text" style={{ color: '#991b1b', margin: 0, paddingLeft: '20px' }}>
                          <li style={{ marginBottom: '6px' }}>{t.codeComments.prioritySearch.problem1}</li>
                          <li style={{ marginBottom: '6px' }}>{t.codeComments.prioritySearch.problem2}</li>
                        </ul>
                      </div>

                      {/* ${t.codeComments.prioritySearch.solutionTitle} */}
                      <div style={{ marginBottom: '20px', padding: '16px', background: '#f0f9ff', borderRadius: '12px', border: '1px solid #bae6fd' }}>
                        <h6 className="text-text" style={{ fontWeight: '600', marginBottom: '12px', color: '#0369a1' }}>
                          {t.codeComments.prioritySearch.solutionTitle}
                        </h6>
                        <ul className="text-text" style={{ color: '#0c4a6e', margin: 0, paddingLeft: '20px' }}>
                          <li style={{ marginBottom: '6px' }}>{t.codeComments.prioritySearch.solution1}</li>
                          <li style={{ marginBottom: '6px' }}>{t.codeComments.prioritySearch.solution2}</li>
                          <li style={{ marginBottom: '6px' }}>{t.codeComments.prioritySearch.solution3}</li>
                        </ul>
                      </div>

                      {/* ${t.codeComments.prioritySearch.resultTitle} */}
                      <div style={{ marginBottom: '20px', padding: '16px', background: '#f0fdf4', borderRadius: '12px', border: '1px solid #bbf7d0' }}>
                        <h6 className="text-text" style={{ fontWeight: '600', marginBottom: '12px', color: '#16a34a' }}>
                          {t.codeComments.prioritySearch.resultTitle}
                        </h6>
                        <ul className="text-text" style={{ color: '#15803d', margin: 0, paddingLeft: '20px' }}>
                          <li style={{ marginBottom: '6px' }}>{t.codeComments.prioritySearch.result1}</li>
                          <li style={{ marginBottom: '6px' }}>{t.codeComments.prioritySearch.result2}</li>
                          <li style={{ marginBottom: '6px' }}>{t.codeComments.prioritySearch.result3}</li>
                        </ul>
                      </div>

                      <CodeCardCollapsible
                        code={`${t.codeComments.prioritySearch.optimizerClass}
${t.codeComments.prioritySearch.groupItems}
GroupBySubType(InventoryItems);

${t.codeComments.prioritySearch.multiLayerSort}
SortItemsByPriority(CandidateItems);

${t.codeComments.prioritySearch.selectTopSlots}
for (auto& Item : CandidateItems)
{
    if (CheckEquipable(Item))
    {
        Equip(Item);
        break;
    }
}

${t.codeComments.prioritySearch.coreOptimizationPoint}
${t.codeComments.prioritySearch.beforeOptimization}
${t.codeComments.prioritySearch.afterOptimization}

${t.codeComments.prioritySearch.lambdaPriority}
bool ComparePriority(const Item& A, const Item& B, TFunction<bool()> CustomRule)
{
    ${t.codeComments.prioritySearch.powerComparison}
    if (A.Power != B.Power) return A.Power > B.Power;
    ${t.codeComments.prioritySearch.situationalPriority}
    return CustomRule != nullptr ? CustomRule() : false;
}

${t.codeComments.prioritySearch.situationalLambda}
${t.codeComments.prioritySearch.generalEquipPriority}
[A, B, &ItemList]() { return A.IsEquipped > B.IsEquipped || A.UIOrder < B.UIOrder || ItemList.Find(A.Slot) < ItemList.Find(B.Slot); }

${t.codeComments.prioritySearch.slotIndexPriority}
[&SlotA, &SlotB]() { return SlotA.Index > SlotB.Index; ${t.codeComments.prioritySearch.highIndexPriority} }`}
                        language="cpp"
                        title="Priority-Based Search Optimization"
                        label="C++"
                        collapsedHeight={200}
                      />
                    </>
                  ),
                },
              ]}
            />
            

          </article>
          
          {/* Core Systems */}
          <article className="w-full min-w-0 h-full rounded-2xl border border-zinc-200 bg-white shadow-sm flex flex-col" style={{
            background: '#ffffff',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            border: '1px solid #e2e8f0',
            boxSizing: 'border-box',
            overflow: 'hidden'
          }}>
            <h3 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '28px', color: '#1a202c' }}>
              ⚙️ {t.technicalHighlights.systems.title}
            </h3>
            <p style={{ color: '#2d3748', lineHeight: '1.8', fontSize: '1.6rem', marginBottom: '28px', fontWeight: '500' }} dangerouslySetInnerHTML={{ __html: t.technicalHighlights.systems.desc }} />
            
            {/* Core Systems Grid */}
            <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              
              {/* Gameplay Systems */}
            <div style={{ 
                background: '#f8fafc', 
                padding: '20px', 
              borderRadius: '12px',
                border: '1px solid #e2e8f0' 
              }}>
                <h4 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '16px', color: '#1a202c' }}>
                  {t.codeComments.coreSystems.gameplayTitle}
                </h4>
                <ul style={{ color: '#4a5568', fontSize: '1.5rem', lineHeight: '1.6' }}>
                  <li dangerouslySetInnerHTML={{ __html: t.codeComments.coreSystems.gameplay1 }}></li>
                  <li dangerouslySetInnerHTML={{ __html: t.codeComments.coreSystems.gameplay2 }}></li>
                  <li dangerouslySetInnerHTML={{ __html: t.codeComments.coreSystems.gameplay3 }}></li>
                  <li dangerouslySetInnerHTML={{ __html: t.codeComments.coreSystems.gameplay4 }}></li>
                </ul>
            </div>

              {/* Content Systems */}
              <div style={{ 
                background: '#f8fafc', 
                padding: '20px', 
                borderRadius: '12px', 
                border: '1px solid #e2e8f0' 
              }}>
                <h4 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '16px', color: '#1a202c' }}>
                  {t.codeComments.coreSystems.contentTitle}
                </h4>
                <ul style={{ color: '#4a5568', fontSize: '1.5rem', lineHeight: '1.6' }}>
                  <li dangerouslySetInnerHTML={{ __html: t.codeComments.coreSystems.content1 }}></li>
                  <li dangerouslySetInnerHTML={{ __html: t.codeComments.coreSystems.content2 }}></li>
                  <li dangerouslySetInnerHTML={{ __html: t.codeComments.coreSystems.content3 }}></li>
                  <li dangerouslySetInnerHTML={{ __html: t.codeComments.coreSystems.content4 }}></li>
                </ul>
          </div>

              {/* Technical Systems */}
              <div style={{ 
                background: '#f8fafc', 
                padding: '20px', 
                borderRadius: '12px', 
                border: '1px solid #e2e8f0' 
              }}>
                <h4 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '16px', color: '#1a202c' }}>
                  {t.codeComments.coreSystems.techTitle}
                </h4>
                <ul style={{ color: '#4a5568', fontSize: '1.5rem', lineHeight: '1.6' }}>
                  <li dangerouslySetInnerHTML={{ __html: t.codeComments.coreSystems.tech1 }}></li>
                  <li dangerouslySetInnerHTML={{ __html: t.codeComments.coreSystems.tech2 }}></li>
                  <li dangerouslySetInnerHTML={{ __html: t.codeComments.coreSystems.tech3 }}></li>
                  <li dangerouslySetInnerHTML={{ __html: t.codeComments.coreSystems.tech4 }}></li>
                </ul>
              </div>

            </div>

            {/* Implementation Details */}
            <div style={{ 
              marginTop: '24px', 
              padding: '20px', 
              background: '#f1f5f9', 
              borderRadius: '12px',
              border: '1px solid #cbd5e1'
            }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '12px', color: '#1e293b' }}>
                {t.codeComments.coreSystems.detailTitle}
              </h4>
              <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                <div>
                  <strong style={{ color: '#1e293b' }}>{t.codeComments.coreSystems.detail1Label}</strong> {t.codeComments.coreSystems.detail1Value}
                </div>
                <div>
                  <strong style={{ color: '#1e293b' }}>{t.codeComments.coreSystems.detail2Label}</strong> {t.codeComments.coreSystems.detail2Value}
                </div>
                <div>
                  <strong style={{ color: '#1e293b' }}>{t.codeComments.coreSystems.detail3Label}</strong> {t.codeComments.coreSystems.detail3Value}
                </div>
                <div>
                  <strong style={{ color: '#1e293b' }}>{t.codeComments.coreSystems.detail4Label}</strong> {t.codeComments.coreSystems.detail4Value}
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Project Video Section */}
      <section style={{ marginBottom: '80px' }}>
        <h2 style={{
          fontSize: '3.5rem',
          fontWeight: '800',
          marginBottom: '40px',
          color: '#1a202c',
          textAlign: 'center',
          borderLeft: '8px solid #667eea',
          paddingLeft: '20px',
          display: 'inline-block'
        }}>
          {lang === 'ko' ? '프로젝트 영상' : 'Project Video'}
        </h2>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }}>
          <iframe
            width="100%"
            height="600"
            src="https://www.youtube.com/embed/slBGNvYOWIA"
            title="ProjectU Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              display: 'block',
              borderRadius: '20px'
            }}
          ></iframe>
        </div>
      </section>

      {/* Navigation Cards */}
      <section style={{ marginBottom: '80px' }}>
        <div className="responsive-grid-navigation">
        <Link to="/contributions" style={{ textDecoration: 'none' }}>
            <div className="mobile-card" style={{
            background: '#ffffff',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              border: '1px solid #e2e8f0',
              transition: 'transform 0.2s, box-shadow 0.2s',
            cursor: 'pointer',
              height: '100%',
              width: '100%',
              maxWidth: '100%',
              boxSizing: 'border-box',
              overflow: 'hidden',
              contain: 'layout',
              flexShrink: '1',
              flexGrow: '0'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
            }}>
              <h3 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '16px', color: '#1a202c' }}>
                💼 {t.sections.experience}
            </h3>
              <p style={{ color: '#4a5568', fontSize: '1.4rem', lineHeight: '1.6', marginBottom: '24px' }}>
                {lang === 'ko' ? '프로젝트 경험과 기술적 성과를 자세히 살펴보세요' : 'Explore project experience and technical achievements in detail'}
            </p>
              <div style={{ color: '#667eea', fontSize: '1.4rem', fontWeight: '600' }}>
                {t.sections.viewDetails} →
              </div>
          </div>
        </Link>

        <Link to="/interactive-ui" style={{ textDecoration: 'none' }}>
            <div className="mobile-card" style={{
            background: '#ffffff',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              border: '1px solid #e2e8f0',
              transition: 'transform 0.2s, box-shadow 0.2s',
            cursor: 'pointer',
              height: '100%',
              width: '100%',
              maxWidth: '100%',
              boxSizing: 'border-box',
              overflow: 'hidden',
              contain: 'layout',
              flexShrink: '1',
              flexGrow: '0'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
            }}>
              <h3 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '16px', color: '#1a202c' }}>
                🎮 {t.sections.projects}
            </h3>
              <p style={{ color: '#4a5568', fontSize: '1.4rem', lineHeight: '1.6', marginBottom: '24px' }}>
                {lang === 'ko' ? '인터랙티브 UI 시스템과 게임플레이 메커니즘을 확인하세요' : 'Check out interactive UI systems and gameplay mechanisms'}
            </p>
              <div style={{ color: '#667eea', fontSize: '1.4rem', fontWeight: '600' }}>
                {t.sections.viewDetails} →
              </div>
          </div>
        </Link>

        <Link to="/optimization" style={{ textDecoration: 'none' }}>
            <div className="mobile-card" style={{
            background: '#ffffff',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              border: '1px solid #e2e8f0',
              transition: 'transform 0.2s, box-shadow 0.2s',
            cursor: 'pointer',
              height: '100%',
              width: '100%',
              maxWidth: '100%',
              boxSizing: 'border-box',
              overflow: 'hidden',
              contain: 'layout',
              flexShrink: '1',
              flexGrow: '0'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
            }}>
              <h3 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '16px', color: '#1a202c' }}>
                🔧 {t.sections.skills}
            </h3>
              <p style={{ color: '#4a5568', fontSize: '1.4rem', lineHeight: '1.6', marginBottom: '24px' }}>
                {lang === 'ko' ? '치트키 툴 개발, 엑셀 기반 동적 시스템 등 팀 협업 도구를 확인하세요' : 'Check out team collaboration tools including cheat key development and Excel-based dynamic systems'}
            </p>
              <div style={{ color: '#667eea', fontSize: '1.4rem', fontWeight: '600' }}>
                {t.sections.viewDetails} →
              </div>
          </div>
        </Link>

          <Link to="/vision" style={{ textDecoration: 'none' }}>
            <div className="mobile-card" style={{
            background: '#ffffff',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              border: '1px solid #e2e8f0',
              transition: 'transform 0.2s, box-shadow 0.2s',
            cursor: 'pointer',
              height: '100%',
              width: '100%',
              maxWidth: '100%',
              boxSizing: 'border-box',
              overflow: 'hidden',
              contain: 'layout',
              flexShrink: '1',
              flexGrow: '0'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
            }}>
              <h3 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '16px', color: '#1a202c' }}>
                🚀 {t.sections.vision}
            </h3>
              <p style={{ color: '#4a5568', fontSize: '1.4rem', lineHeight: '1.6', marginBottom: '24px' }}>
                {t.vision.description}
            </p>
              <div style={{ color: '#667eea', fontSize: '1.4rem', fontWeight: '600' }}>
                {t.sections.viewDetails} →
              </div>
          </div>
        </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{
          fontSize: '3.5rem',
          fontWeight: '800',
          marginBottom: '32px',
          color: '#1a202c'
        }}>
          📧 {t.contact.title}
        </h2>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '32px',
          flexWrap: 'wrap'
        }}>
          <a href="mailto:seongjae.park.dev@gmail.com" style={{
            background: '#667eea',
            color: 'white',
            padding: '16px 32px',
            borderRadius: '25px',
                textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1.3rem',
            transition: 'transform 0.2s, box-shadow 0.2s',
            display: 'inline-block'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 10px 20px rgba(102, 126, 234, 0.4)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            📧 {t.contact.email}
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" style={{
            background: '#2d3748',
            color: 'white',
            padding: '16px 32px',
            borderRadius: '25px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1.3rem',
            transition: 'transform 0.2s, box-shadow 0.2s',
            display: 'inline-block'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 10px 20px rgba(45, 55, 72, 0.4)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            🐙 {t.contact.github}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
