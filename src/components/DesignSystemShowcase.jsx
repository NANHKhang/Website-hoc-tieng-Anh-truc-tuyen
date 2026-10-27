import React from 'react';
import { Palette, Type, Layers, MousePointer, ShieldCheck } from 'lucide-react';

export default function DesignSystemShowcase() {
  const colorTokens = [
    { name: 'Primary (Brand Navy)', var: '--primary', hex: '#262c57', class: 'bg-primary text-primary-foreground' },
    { name: 'Secondary (Cyan-Blue)', var: '--secondary', hex: '#3c94d4', class: 'bg-secondary text-secondary-foreground' },
    { name: 'Foreground (Dark Navy)', var: '--foreground', hex: '#1a1a2e', class: 'bg-brand-dark text-white' },
    { name: 'Muted Surface (Ice Wash)', var: '--muted', hex: '#f0f4ff', class: 'bg-muted text-foreground border border-border' },
    { name: 'Border (Hairline Slate)', var: '--border', hex: '#e2e8f0', class: 'bg-border text-foreground' },
    { name: 'Success (Accuracy)', var: '--success', hex: '#22c55e', class: 'bg-success text-white' },
  ];

  return (
    <section id="design-tokens" className="section-spacing border-t border-border bg-muted/30">
      <div className="container-app">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="badge-primary mb-3">
            <Layers className="w-3.5 h-3.5" />
            Kiến Trúc Giao Diện (Design System)
          </span>
          <h2 className="text-3xl font-extrabold text-foreground tracking-tight">
            Design Tokens & Reusable Primitives
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mt-2">
            Tổng hợp các nguyên tắc thiết kế được trích xuất từ nghiên cứu Parroto: Typography, Bảng màu, Khoảng cách, Nút bấm và Thẻ tương tác.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Color Tokens Panel */}
          <div className="card-flat">
            <div className="flex items-center gap-2.5 mb-6 text-foreground font-bold text-lg">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-secondary flex items-center justify-center">
                <Palette className="w-5 h-5" />
              </div>
              <span>Hệ Thống Bảng Màu (Color Tokens)</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {colorTokens.map((c) => (
                <div key={c.name} className="p-3 rounded-xl border border-border bg-card">
                  <div className={`h-12 w-full rounded-lg mb-2.5 flex items-center justify-center text-xs font-semibold ${c.class}`}>
                    {c.hex}
                  </div>
                  <p className="text-xs font-semibold text-foreground truncate">{c.name}</p>
                  <code className="text-[10px] text-muted-foreground font-mono block mt-0.5">{c.var}</code>
                </div>
              ))}
            </div>
          </div>

          {/* Button & Interactive Primitives */}
          <div className="card-flat">
            <div className="flex items-center gap-2.5 mb-6 text-foreground font-bold text-lg">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 text-primary flex items-center justify-center">
                <MousePointer className="w-5 h-5" />
              </div>
              <span>Nút Bấm & Trạng Thái (Button Primitives)</span>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <button className="btn-pill-hero text-sm h-11 px-6">
                  Hero Pill CTA
                </button>
                <button className="btn-primary">
                  Primary Button
                </button>
                <button className="btn-secondary">
                  Secondary Button
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button className="btn-outline">
                  Outline Button
                </button>
                <button className="btn-ghost">
                  Ghost Nav Link
                </button>
                <button className="p-2.5 rounded-xl border border-border hover:bg-muted text-foreground transition-colors">
                  <ShieldCheck className="w-4 h-4 text-secondary" />
                </button>
              </div>

              <div className="pt-3 border-t border-border flex flex-wrap items-center gap-2">
                <span className="badge-primary">badge-primary</span>
                <span className="badge-accent">badge-accent</span>
                <span className="badge-success">badge-success</span>
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-muted text-foreground border border-border">
                  font-mono / IPA transcription
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

