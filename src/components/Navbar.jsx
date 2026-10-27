import React from 'react';
import { BookOpen, Sparkles, Globe, ArrowRight } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md border-b border-border shadow-subtle transition-all">
      <div className="container-app h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary text-primary-foreground flex items-center justify-center shadow-md shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
            <BookOpen className="w-5 h-5" />
          </div>
          <span className="font-extrabold text-xl tracking-tight text-foreground">
            English<span className="text-secondary">Hub</span>
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5">
          <a
            href="#skills"
            className="px-3.5 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:bg-muted hover:text-primary transition-colors"
          >
            Kỹ năng học
          </a>
          <a
            href="#how-it-works"
            className="px-3.5 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:bg-muted hover:text-primary transition-colors"
          >
            Phương pháp
          </a>
          <a
            href="#daily-word"
            className="px-3.5 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:bg-muted hover:text-primary transition-colors"
          >
            Từ vựng hàng ngày
          </a>
          <a
            href="#design-tokens"
            className="px-3.5 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:bg-muted hover:text-primary transition-colors"
          >
            Hệ thống Design
          </a>
        </nav>

        {/* Right Action buttons */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-border text-muted-foreground bg-muted/50">
            <Globe className="w-3.5 h-3.5 text-secondary" />
            <span>Tiếng Việt / EN</span>
          </div>

          <a
            href="#daily-word"
            className="btn-primary text-xs sm:text-sm h-9 sm:h-10 px-4 rounded-xl shadow-sm inline-flex items-center gap-1.5"
          >
            <span>Bắt đầu học</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
