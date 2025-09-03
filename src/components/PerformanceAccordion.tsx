import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

type Item = {
  id: string;
  title: string;
  badge?: string;
  collapsedHeight?: number; // 기본 미리보기 높이(px) — 노란 라인까지
  preview?: React.ReactNode; // 접힘 상태에서 상단에 보여줄 한 줄 요약(선택)
  children: React.ReactNode; // 전체 내용
};

export default function PerformanceAccordion({ items }: { items: Item[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-5">
      {items.map((it) => (
        <AccordionItem
          key={it.id}
          item={it}
          open={openId === it.id}
          onToggle={() => setOpenId((p) => (p === it.id ? null : it.id))}
        />
      ))}
    </div>
  );
}

function AccordionItem({
  item,
  open,
  onToggle,
}: {
  item: Item;
  open: boolean;
  onToggle: () => void;
}) {
  const { id, title, badge, collapsedHeight = 220, preview, children } = item;
  const innerRef = useRef<HTMLDivElement>(null);
  const [maxH, setMaxH] = useState<number>(collapsedHeight);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    // 펼칠 때 자연스러운 애니메이션을 위해 scrollHeight 사용
    setMaxH(open ? el.scrollHeight : collapsedHeight);
  }, [open, children, collapsedHeight]);

  // 컨텐츠 변화(폰트 로드 등)에도 높이 재계산
  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      if (open) setMaxH(el.scrollHeight);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [open]);

  return (
    <section className="rounded-2xl border border-zinc-200 bg-white/80 backdrop-blur p-0 shadow-sm">
      {/* Header (클릭 영역 전체) */}
      <button
        id={`acc-btn-${id}`}
        aria-expanded={open}
        aria-controls={`acc-panel-${id}`}
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left"
      >
        <div className="flex items-center gap-3">
          <span className="text-base md:text-lg font-semibold">{title}</span>
          {badge && (
            <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs text-emerald-700">
              {badge}
            </span>
          )}
        </div>
        <FaChevronDown
          className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      {/* Preview 한 줄(선택) */}
      {preview && !open && (
        <div className="px-5 pb-2 text-sm text-zinc-600">{preview}</div>
      )}

      {/* Content (접힘/펼침) */}
      <div
        id={`acc-panel-${id}`}
        role="region"
        aria-labelledby={`acc-btn-${id}`}
        className="relative overflow-hidden transition-[max-height] duration-500 ease-in-out"
        style={{ maxHeight: `${maxH}px` }}
      >
        {/* 접힘 상태일 때 하단 그라데이션 */}
        {!open && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white to-transparent" />
        )}

        <div ref={innerRef} className="px-5 pb-5 pt-1 text-[15px] leading-7 md:text-[16px]">
          {children}
        </div>
      </div>
    </section>
  );
}
