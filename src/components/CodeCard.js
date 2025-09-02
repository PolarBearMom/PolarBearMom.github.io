import React, { useState } from "react";
import { Highlight } from "prism-react-renderer";
import vsLightThemeClassic from "../lib/vsLightThemeClassic";

const CodeCard = ({ code, language = "cpp", title, label }) => {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <div style={{
      borderRadius: '16px',
      border: '1px solid #e4e4e7',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      overflow: 'hidden',
      backgroundColor: 'white'
    }}>
      {/* header */}
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
          {label && (
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
          )}
          {title && (
            <span style={{ 
              color: '#6b7280',
              fontWeight: '500'
            }}>
              {title}
            </span>
          )}
        </div>
        <button
          onClick={onCopy}
          aria-label="Copy code"
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
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* code */}
      <div style={{ padding: '20px 20px 20px 16px' }}>
        <Highlight theme={vsLightThemeClassic} code={code.trimEnd()} language={language}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              style={{
                margin: 0,
                overflow: 'auto',
                fontFamily: "Consolas, 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, 'Courier New', monospace",
                fontSize: '13px',
                lineHeight: '1.7',
                background: 'transparent',
                whiteSpace: 'pre',
                // VS 느낌(얇고 선명)
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
                  minHeight: '22.1px',
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
                    fontSize: '13px',
                    lineHeight: '1.7'
                  }}>
                    {i + 1}
                  </span>
                  <span style={{ 
                    flex: 1, 
                    minWidth: 0,
                    fontSize: '13px',
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
  );
};

export default CodeCard;
