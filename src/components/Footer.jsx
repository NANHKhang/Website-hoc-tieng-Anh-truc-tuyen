import React from 'react';
import { BookOpen, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12 text-sm text-muted-foreground transition-colors">
      <div className="container-app">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary text-primary-foreground flex items-center justify-center shadow-sm">
              <BookOpen className="w-4 h-4" />
            </div>
            <span className="font-bold text-lg text-foreground tracking-tight">
              English<span className="text-secondary">Hub</span>
            </span>
            <span className="text-xs text-muted-foreground ml-2 hidden sm:inline">
              — Hệ thống thiết kế tham chiếu phong cách Parroto
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#skills" className="hover:text-primary transition-colors">Kỹ năng</a>
            <a href="#how-it-works" className="hover:text-primary transition-colors">Phương pháp</a>
            <a href="#daily-word" className="hover:text-primary transition-colors">Từ vựng</a>
            <a href="#design-tokens" className="hover:text-primary transition-colors">Design System</a>
          </div>

          <p className="text-xs text-muted-foreground">
            © 2026 EnglishHub. Tối ưu trải nghiệm học tiếng Anh trực quan.
          </p>
        </div>
      </div>
    </footer>
  );
}
