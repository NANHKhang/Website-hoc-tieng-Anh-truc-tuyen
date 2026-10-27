import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function SkillCard({ icon: Icon, title, desc, tag, gradient, actionText = 'Luyện tập ngay' }) {
  return (
    <div className="group card-interactive">
      <div className="flex items-center justify-between mb-5">
        <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${gradient} text-white w-fit shadow-md group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 h-6" />
        </div>
        <span className="badge-primary">
          {tag}
        </span>
      </div>

      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>

      <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
        {desc}
      </p>

      <div className="pt-4 border-t border-border flex items-center justify-between text-sm font-semibold text-secondary group-hover:text-primary transition-colors">
        <span>{actionText}</span>
        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
      </div>
    </div>
  );
}
