import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function PerformanceAccordion({ items }) {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="space-y-8">
      {items.map((it) => (
        <div key={it.id} className="m-0 p-0">
          <AccordionItem
            item={it}
            open={openId === it.id}
            onToggle={() => setOpenId((p) => (p === it.id ? null : it.id))}
          />
        </div>
      ))}
    </div>
  );
}

function AccordionItem({ item, open, onToggle }) {
  const { id, title, badge, preview, children } = item;
  const innerRef = useRef(null);
  const [maxH, setMaxH] = useState(0); // 접힘=0, 펼침=내용 높이

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    setMaxH(open ? el.scrollHeight : 0);
  }, [open, children]);

  return (
    <section className="rounded-2xl border border-zinc-200 bg-white/80 shadow-sm m-0 p-0">
      {/* Header */}
      <button
        id={`acc-btn-${id}`}
        aria-expanded={open}
        aria-controls={`acc-panel-${id}`}
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-3 text-left"
      >
        <div className="flex items-center gap-3">
          <span className="text-[18px] md:text-[20px] font-semibold">{title}</span>
          {badge && (
            <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50
                             px-2 py-[2px] text-[12px] md:text-[12.5px] text-emerald-700">
              {badge}
            </span>
          )}
        </div>
        <FaChevronDown
          className={`h-5 w-5 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

                        {/* Preview: 1줄만, 본문은 접힘 */}
                  {preview && !open && (
                    <div className="px-5 pb-2 text-lg text-zinc-600 line-clamp-1">{preview}</div>
                  )}

      {/* Content: 접힘=0, 펼침=scrollHeight */}
      <div
        id={`acc-panel-${id}`}
        role="region"
        aria-labelledby={`acc-btn-${id}`}
        className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
        style={{ maxHeight: open ? 'none' : `${maxH}px` }}
      >
        <div ref={innerRef} className="px-5 pt-1 pb-5 text-[15px] leading-7">
          {children}
        </div>
      </div>
    </section>
  );
}
