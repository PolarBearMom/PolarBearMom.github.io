import React from 'react';
import { useLang } from '../LangContext';

const MvvmFlowDiagram = () => {
  const { lang } = useLang();

  const t = {
    en: {
      title: 'ProjectU MVVM Implementation',
      network: 'Network',
      model: 'Model',
      viewmodel: 'ViewModel',
      ui: 'View',
      networkDesc: 'Server',
      modelDesc: 'Server Comm\nData Parsing\nBusiness Logic',
      viewmodelDesc: 'FieldNotify\nUI Mediation',
      uiDesc: 'UMG Widget\nUser Events',
      description: 'Real Implementation: Server → Data Processing → UI Notification → User Interaction'
    },
    ko: {
      title: 'ProjectU MVVM 구현',
      network: '네트워크',
      model: '모델',
      viewmodel: '뷰모델',
      ui: '뷰',
      networkDesc: '서버',
      modelDesc: '서버 통신\n데이터 파싱\n비즈니스 로직',
      viewmodelDesc: 'FieldNotify\nUI 중개',
      uiDesc: 'UMG 위젯\n사용자 이벤트',
      description: '실제 구현: 서버 → 데이터 가공 → UI 알림 → 사용자 상호작용'
    }
  }[lang];

  return (
    <div style={{
      width: '100%',
      background: '#ffffff',
      borderRadius: '12px',
      border: '1px solid #e2e8f0',
      padding: '20px'
    }}>
      <h4 style={{
        margin: '0 0 16px 0',
        color: '#2d3748',
        fontSize: '1.1rem',
        fontWeight: 700,
        textAlign: 'center'
      }}>{t.title}</h4>

      {/* Central Banner Description */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '12px 24px',
        borderRadius: '25px',
        textAlign: 'center',
        margin: '0 auto 20px auto',
        maxWidth: '500px',
        fontSize: '1.1rem',
        fontWeight: '600',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        {t.description}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <svg width="700" height="140" viewBox="0 0 700 140" role="img" aria-label="MVVM flow diagram">
          <defs>
            <marker id="arrow" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L6,3 L0,6 Z" fill="#4a90e2" />
            </marker>
            <marker id="arrow-back" markerWidth="6" markerHeight="6" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
              <path d="M6,0 L0,3 L6,6 Z" fill="#4a90e2" />
            </marker>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.1" />
            </filter>
          </defs>

          {/* Unified Flow Boxes with 3-color theme */}
          <g filter="url(#shadow)">
            {/* Network/Server */}
            <rect x="20" y="20" width="140" height="100" rx="8" fill="#ffebee" stroke="#e74c3c" strokeWidth="2" />
            <text x="90" y="60" textAnchor="middle" fontSize="18" fill="#1a202c" fontWeight="700">{t.network}</text>
            <text x="90" y="80" textAnchor="middle" fontSize="14" fill="#2d3748" fontWeight="600">{t.networkDesc}</text>

            {/* Model */}
            <rect x="190" y="20" width="140" height="100" rx="8" fill="#e8f5e8" stroke="#27ae60" strokeWidth="2" />
            <text x="260" y="60" textAnchor="middle" fontSize="18" fill="#1a202c" fontWeight="700">{t.model}</text>
            <text x="260" y="75" textAnchor="middle" fontSize="12" fill="#2d3748" fontWeight="600">{t.modelDesc.split('\n')[0]}</text>
            <text x="260" y="90" textAnchor="middle" fontSize="12" fill="#2d3748" fontWeight="600">{t.modelDesc.split('\n')[1]}</text>
            <text x="260" y="105" textAnchor="middle" fontSize="12" fill="#2d3748" fontWeight="600">{t.modelDesc.split('\n')[2]}</text>

            {/* ViewModel */}
            <rect x="360" y="20" width="140" height="100" rx="8" fill="#e3f2fd" stroke="#3498db" strokeWidth="2" />
            <text x="430" y="60" textAnchor="middle" fontSize="18" fill="#1a202c" fontWeight="700">{t.viewmodel}</text>
            <text x="430" y="80" textAnchor="middle" fontSize="12" fill="#2d3748" fontWeight="600">{t.viewmodelDesc.split('\n')[0]}</text>
            <text x="430" y="95" textAnchor="middle" fontSize="12" fill="#2d3748" fontWeight="600">{t.viewmodelDesc.split('\n')[1]}</text>

            {/* View */}
            <rect x="530" y="20" width="140" height="100" rx="8" fill="#f3e5f5" stroke="#9b59b6" strokeWidth="2" />
            <text x="600" y="60" textAnchor="middle" fontSize="18" fill="#1a202c" fontWeight="700">{t.ui}</text>
            <text x="600" y="80" textAnchor="middle" fontSize="12" fill="#2d3748" fontWeight="600">{t.uiDesc.split('\n')[0]}</text>
            <text x="600" y="95" textAnchor="middle" fontSize="12" fill="#2d3748" fontWeight="600">{t.uiDesc.split('\n')[1]}</text>
          </g>

          {/* Main Flow Arrows - Bold Solid Lines */}
          <line x1="160" y1="70" x2="190" y2="70" stroke="#4a90e2" strokeWidth="3" markerEnd="url(#arrow)" />
          <line x1="330" y1="70" x2="360" y2="70" stroke="#4a90e2" strokeWidth="3" markerEnd="url(#arrow)" />
          <line x1="500" y1="70" x2="530" y2="70" stroke="#4a90e2" strokeWidth="3" markerEnd="url(#arrow)" />

          {/* Return Flow Arrows - Dashed Lines */}
          <line x1="530" y1="70" x2="500" y2="70" stroke="#4a90e2" strokeWidth="2" markerEnd="url(#arrow-back)" strokeDasharray="4,4" />
          <line x1="360" y1="70" x2="330" y2="70" stroke="#4a90e2" strokeWidth="2" markerEnd="url(#arrow-back)" strokeDasharray="4,4" />
          <line x1="190" y1="70" x2="160" y2="70" stroke="#4a90e2" strokeWidth="2" markerEnd="url(#arrow-back)" strokeDasharray="4,4" />
        </svg>
      </div>
    </div>
  );
};

export default MvvmFlowDiagram;
