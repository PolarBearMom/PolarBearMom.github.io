import React from 'react';
import { useLang } from '../LangContext';

const MvvmVennDiagram = () => {
  const { lang } = useLang();

  const t = {
    en: {
      title: 'Implementation Structure',
      model: 'Model',
      view: 'View',
      viewModel: 'ViewModel',
      modelDesc: 'Network\nData Processing',
      viewDesc: 'UMG Widget\nUser Events',
      viewModelDesc: 'FieldNotify\nDelegate Binding',
      note: '770+ ViewModels with clear responsibilities'
    },
    ko: {
      title: '구현 구조',
      model: '모델',
      view: '뷰',
      viewModel: '뷰모델',
      modelDesc: '네트워크 처리\n데이터 가공',
      viewDesc: 'UMG 위젯\n사용자 이벤트',
      viewModelDesc: 'FieldNotify\n델리게이트 바인딩',
      note: '770개+ 뷰모델로 명확한 책임 분리'
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
        margin: '0 0 12px 0',
        color: '#2d3748',
        fontSize: '1.1rem',
        fontWeight: 700,
        textAlign: 'center'
      }}>{t.title}</h4>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <svg width="400" height="140" viewBox="0 0 400 140" role="img" aria-label="MVVM roles diagram">
          <defs>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#000" floodOpacity="0.08" />
            </filter>
          </defs>

          {/* Simple circles */}
          <g filter="url(#shadow)">
            <circle cx="100" cy="70" r="50" fill="#c6f6d5" fillOpacity="0.8" stroke="#38a169" strokeWidth="2" />
            <circle cx="200" cy="70" r="50" fill="#e9d8fd" fillOpacity="0.8" stroke="#805ad5" strokeWidth="2" />
            <circle cx="300" cy="70" r="50" fill="#faf089" fillOpacity="0.8" stroke="#d69e2e" strokeWidth="2" />
          </g>

          {/* Labels - implementation focused */}
          <text x="100" y="65" textAnchor="middle" fontSize="13" fill="#1a202c" fontWeight="700">{t.model}</text>
          <text x="200" y="65" textAnchor="middle" fontSize="13" fill="#1a202c" fontWeight="700">{t.viewModel}</text>
          <text x="300" y="65" textAnchor="middle" fontSize="13" fill="#1a202c" fontWeight="700">{t.view}</text>

          {/* Implementation details */}
          <text x="100" y="80" textAnchor="middle" fontSize="9" fill="#4a5568">{t.modelDesc.split('\n')[0]}</text>
          <text x="100" y="92" textAnchor="middle" fontSize="9" fill="#4a5568">{t.modelDesc.split('\n')[1]}</text>
          
          <text x="200" y="80" textAnchor="middle" fontSize="9" fill="#4a5568">{t.viewModelDesc.split('\n')[0]}</text>
          <text x="200" y="92" textAnchor="middle" fontSize="9" fill="#4a5568">{t.viewModelDesc.split('\n')[1]}</text>
          
          <text x="300" y="80" textAnchor="middle" fontSize="9" fill="#4a5568">{t.viewDesc.split('\n')[0]}</text>
          <text x="300" y="92" textAnchor="middle" fontSize="9" fill="#4a5568">{t.viewDesc.split('\n')[1]}</text>
        </svg>
      </div>

      <p style={{
        color: '#718096',
        fontSize: '0.85rem',
        textAlign: 'center',
        margin: '8px 0 0 0'
      }}>
        {t.note}
      </p>
    </div>
  );
};

export default MvvmVennDiagram;


