import React, { useEffect, useRef, useState } from "react";
import { Highlight } from "prism-react-renderer";
import vsLightThemeClassic from "../lib/vsLightThemeClassic";

const CodeCardCollapsible = ({
  code,
  language = "cpp",
  title,
  label = "C++",
  collapsedHeight = 380,
}) => {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isOverflow, setIsOverflow] = useState(false);
  const wrapRef = useRef(null);

  // 오버플로우 판단
  const checkOverflow = () => {
    const el = wrapRef.current;
    if (!el) return;
    // 강제 리플로우로 정확한 높이 계산
    void el.offsetHeight;
    setIsOverflow(el.scrollHeight > el.clientHeight + 2);
  };

  useEffect(() => {
    checkOverflow();
    const onResize = () => checkOverflow();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [code]);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  // 모바일에서 기본 높이 조금 더 낮춤
  const clampHeight = open ? "none" : "calc(var(--clamp, 380px))";

  return (
    <>
             <div style={{
         borderRadius: '16px',
         border: '1px solid #e4e4e7',
         boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
         overflow: 'hidden',
         backgroundColor: 'white'
       }}>
        {/* Header */}
                 <div style={{
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'space-between',
           height: '40px',
           padding: '0 16px',
           borderBottom: '1px solid #e4e4e7',
           backgroundColor: '#f8f9fa'
         }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '12px',
            color: '#6b7280'
          }}>
            <span style={{
              padding: '3px 8px',
              borderRadius: '4px',
              backgroundColor: 'white',
              border: '1px solid #e4e4e7',
              fontSize: '11px',
              fontWeight: '500',
              color: '#374151'
            }}>
              {label}
            </span>
            {title && (
              <span style={{ color: '#6b7280', fontWeight: '500' }}>
                {title}
              </span>
            )}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={() => setShowModal(true)}
              style={{
                fontSize: '12px',
                color: '#6b7280',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '4px 8px',
                borderRadius: '4px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#374151'}
              onMouseLeave={(e) => e.target.style.color = '#6b7280'}
              aria-label="Open fullscreen"
            >
              Fullscreen
            </button>
            <button
              onClick={onCopy}
              style={{
                fontSize: '12px',
                color: copied ? '#10b981' : '#6b7280',
                background: copied ? '#f0fdf4' : 'transparent',
                border: '1px solid',
                borderColor: copied ? '#10b981' : '#d1d5db',
                cursor: 'pointer',
                padding: '4px 12px',
                borderRadius: '4px',
                transition: 'all 0.2s ease',
                fontWeight: '500'
              }}
              onMouseEnter={(e) => {
                if (!copied) {
                  e.target.style.color = '#374151';
                  e.target.style.borderColor = '#9ca3af';
                }
              }}
              onMouseLeave={(e) => {
                if (!copied) {
                  e.target.style.color = '#6b7280';
                  e.target.style.borderColor = '#d1d5db';
                }
              }}
              aria-label="Copy code"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* Code area (collapsible) */}
        <div
          ref={wrapRef}
          style={{
            position: 'relative',
            padding: '20px 20px 20px 16px',
            overflow: 'auto',
            scrollbarWidth: 'thin',
            scrollbarColor: '#cbd5e1 #f1f5f9',
            ...(open ? {
              maxHeight: 'none',
              height: 'auto'
            } : {
              maxHeight: `clamp(280px, 40vh, ${collapsedHeight}px)`,
              height: 'auto'
            })
          }}
        >
          {!open && isOverflow && (
            <div style={{
              pointerEvents: 'none',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '64px',
              background: 'linear-gradient(to top, white, transparent)'
            }} />
          )}

          <Highlight theme={vsLightThemeClassic} code={code.trimEnd()} language="cpp">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                              <pre
                  style={{
                    margin: 0,
                    fontFamily: "Consolas, 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, 'Courier New', monospace",
                    fontSize: '15px',
                    lineHeight: '1.7',
                    background: 'transparent',
                    whiteSpace: 'pre',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                    textRendering: 'optimizeLegibility',
                    tabSize: 4
                  }}
                >
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line, key: i })} style={{
                      whiteSpace: 'pre',
                      display: 'flex',
                      minHeight: '25.5px',
                      alignItems: 'center'
                    }}>
                      {/* line number */}
                      <span style={{
                        width: '3ch',
                        textAlign: 'right',
                        paddingRight: '12px',
                        userSelect: 'none',
                        color: '#9aa1ac',
                        flexShrink: 0,
                        fontSize: '15px',
                        lineHeight: '1.7'
                      }}>
                        {i + 1}
                      </span>
                      <span style={{
                        flex: 1,
                        minWidth: 0,
                        fontSize: '15px',
                        lineHeight: '1.7'
                      }}>
                      {line.map((token, key) => {
                        const tokenProps = getTokenProps({ token, key });
                        
                        // 디버깅: 모든 토큰 정보 출력 (TMap, uint8, FPartyData 찾기)
                        if (token.content.includes('TMap') || token.content.includes('uint8') || token.content.includes('FPartyData')) {
                          console.log('Found target token:', {
                            content: token.content,
                            types: token.types,
                            style: tokenProps.style
                          });
                        }
                        
                        // 수동으로 자료형 색상 적용 (변수명은 제외)
                        let customColor = tokenProps.style?.color || '#1f2328';
                        
                        // 자료형만 노란색으로 적용
                        if (token.content === 'TMap' || 
                            token.content === 'uint8' || 
                            token.content === 'FPartyData' ||
                            token.content === 'FOnPartyChanged' ||
                            token.content === 'EPartyState') {
                          customColor = '#D7BA7D'; // 진한 노란색
                        }
                        // 변수명은 기본 검정색 유지 (OnPartyChanged, PartyNum, State 등)
                        
                        return (
                          <span 
                            key={key} 
                            {...tokenProps}
                            style={{
                              ...tokenProps.style,
                              color: customColor,
                              fontWeight: customColor === '#1E90FF' ? '600' : 'normal'
                            }}
                          />
                        );
                      })}
                    </span>
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>

        {/* Footer actions (펼치기/접기) */}
        {isOverflow && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            padding: '8px',
            borderTop: '1px solid #e4e4e7',
            backgroundColor: '#f8f9fa'
          }}>
                         <button
               onClick={() => {
                 const newOpen = !open;
                 setOpen(newOpen);
                 
                 // Collapse할 때 버튼 위치로 빠르게 스크롤
                 if (!newOpen) {
                   setTimeout(() => {
                     const button = document.activeElement;
                     if (button) {
                       button.scrollIntoView({ 
                         behavior: 'auto',
                         block: 'center' 
                       });
                     }
                   }, 50);
                 }
               }}
               style={{
                 fontSize: '12px',
                 padding: '4px 12px',
                 borderRadius: '6px',
                 border: '1px solid #d1d5db',
                 backgroundColor: 'white',
                 cursor: 'pointer',
                 transition: 'all 0.2s ease'
               }}
               onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f4f6'}
               onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
             >
               {open ? "Collapse" : "Show more"}
             </button>
          </div>
        )}
      </div>

      {/* Fullscreen modal */}
      {showModal && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 50,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px'
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '108rem',
              height: '80vh',
              borderRadius: '16px',
              backgroundColor: 'white',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '40px',
              padding: '0 16px',
              borderBottom: '1px solid #e4e4e7',
              backgroundColor: '#f8f9fa'
            }}>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>
                {title || "Code"}
              </div>
              <button 
                style={{
                  fontSize: '12px',
                  color: '#6b7280',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px 8px'
                }}
                onMouseEnter={(e) => e.target.style.color = '#374151'}
                onMouseLeave={(e) => e.target.style.color = '#6b7280'}
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
            <div style={{
              height: 'calc(100% - 40px)',
              overflow: 'auto',
              padding: '20px'
            }}>
              <Highlight theme={vsLightThemeClassic} code={code.trimEnd()} language="cpp">
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                  <pre
                    style={{
                      margin: 0,
                      fontFamily: "Consolas, 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, 'Courier New', monospace",
                      fontSize: '15px',
                      lineHeight: '1.7',
                      background: 'transparent',
                      tabSize: 4
                    }}
                  >
                    {tokens.map((line, i) => (
                      <div key={i} {...getLineProps({ line, key: i })} style={{
                        whiteSpace: 'pre',
                        display: 'flex',
                        minHeight: '25.5px',
                        alignItems: 'center'
                      }}>
                        <span style={{
                          width: '3ch',
                          textAlign: 'right',
                          paddingRight: '12px',
                          userSelect: 'none',
                          color: '#9aa1ac',
                          flexShrink: 0,
                          fontSize: '15px',
                      lineHeight: '1.7'
                        }}>
                          {i + 1}
                        </span>
                        <span style={{
                          flex: 1,
                          minWidth: 0,
                          fontSize: '15px',
                          lineHeight: '1.7'
                        }}>
                          {line.map((token, key) => (
                            <span key={key} {...getTokenProps({ token, key })} />
                          ))}
                        </span>
                      </div>
                    ))}
                  </pre>
                )}
              </Highlight>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CodeCardCollapsible;
