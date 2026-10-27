import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SkillCard from './components/SkillCard';
import DailyWord from './components/DailyWord';
import DesignSystemShowcase from './components/DesignSystemShowcase';
import Footer from './components/Footer';
import {
  Headphones,
  Mic,
  BookOpen,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Play,
  CheckCircle2,
  Volume2,
  TrendingUp,
  Compass,
  Layers,
  Award
} from 'lucide-react';

export default function App() {
  const [isPlayingMockAudio, setIsPlayingMockAudio] = useState(false);

  const skills = [
    {
      icon: Headphones,
      title: 'Nghe Chép Chính Tả (Dictation)',
      desc: 'Luyện nghe sâu từng từ qua các đoạn video thực tế. Rèn luyện phản xạ bắt âm nối và ngữ điệu tự nhiên.',
      tag: 'Deep Listening',
      gradient: 'from-blue-600 to-cyan-500',
      actionText: 'Luyện nghe ngay',
    },
    {
      icon: Mic,
      title: 'Nhại Giọng Nói (Shadowing)',
      desc: 'Lặp lại tức thì theo ngữ điệu người bản ngữ với hệ thống chấm điểm phát âm, trọng âm theo thời gian thực.',
      tag: 'AI Speech Scoring',
      gradient: 'from-indigo-600 to-blue-500',
      actionText: 'Luyện nói ngay',
    },
    {
      icon: BookOpen,
      title: 'Từ Vựng Ngữ Cảnh (SRS Vocab)',
      desc: 'Tự động lưu từ mới khi đang học và ghi nhớ dài hạn qua thuật toán lặp lại ngắt quãng (Spaced Repetition).',
      tag: 'Spaced Repetition',
      gradient: 'from-sky-600 to-teal-500',
      actionText: 'Học từ vựng',
    },
    {
      icon: MessageSquare,
      title: 'Phản Xạ Giao Tiếp (Speaking)',
      desc: 'Luyện phản xạ đối thoại theo các tình huống thường ngày và phòng luyện nói theo cấp độ từ A1 đến C1.',
      tag: 'Conversation',
      gradient: 'from-violet-600 to-indigo-500',
      actionText: 'Bắt đầu nói',
    },
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Chọn Bài Học Thực Tế',
      desc: 'Học qua các đoạn phim, podcast, tin tức hoặc hội thoại đời sống đúng với cấp độ của bạn.',
    },
    {
      step: '02',
      title: 'Nghe & Chép Lại',
      desc: 'Gõ lại chính xác từng từ bạn nghe được để rèn luyện thính giác nhận diện từng âm tiết.',
    },
    {
      step: '03',
      title: 'Shadowing Theo Giọng Bản Xứ',
      desc: 'Thu âm nhại lại ngay sau phát âm chuẩn để AI chấm điểm độ trôi chảy và ngữ điệu.',
    },
    {
      step: '04',
      title: 'Ghi Nhớ Qua Thuật Toán SRS',
      desc: 'Hệ thống tự động nhắc nhở ôn tập lại những từ vựng bạn hay phát âm sai hoặc chưa nhớ.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-brand-blue selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* =========================================================================
            HERO SECTION (Parroto-inspired layout, visual presentation & typography)
            ========================================================================= */}
        <section className="section-spacing pt-12 sm:pt-16 lg:pt-20 overflow-hidden">
          <div className="container-app">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column: Headline & Call-to-actions */}
              <div className="lg:col-span-7 text-center lg:text-left space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-muted border border-border text-primary text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-secondary" />
                  <span>Phương pháp học tiếng Anh hiện đại: Dictation & Shadowing</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
                  Làm chủ tiếng Anh qua{' '}
                  <span className="gradient-text-brand">
                    nghe sâu & nhại giọng
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Rèn luyện phản xạ ngôn ngữ tự nhiên từ video thực tế thay vì lý thuyết khô khan. Luyện nghe từng âm nối, thực hành nhại giọng và mở rộng vốn từ vựng với SRS.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <a
                    href="#skills"
                    className="btn-pill-hero w-full sm:w-auto"
                  >
                    <span>Khám phá các kỹ năng</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>

                  <a
                    href="#daily-word"
                    className="btn-outline h-14 px-7 text-base rounded-full w-full sm:w-auto"
                  >
                    Học thử từ vựng hôm nay
                  </a>
                </div>

                {/* Trust / Feature micro-stats */}
                <div className="pt-6 border-t border-border flex items-center justify-center lg:justify-start gap-8 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                    <span>Học theo video thực tế</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                    <span>Phản hồi phát âm AI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                    <span>Lộ trình từ A1 đến C1</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Parroto-style Interactive Product Presentation Mockup */}
              <div className="lg:col-span-5 relative">
                {/* Decorative ambient gradient backdrop */}
                <div className="absolute -inset-4 bg-gradient-to-r from-secondary/15 to-primary/10 rounded-3xl blur-2xl pointer-events-none" />

                <div className="relative bg-card rounded-3xl border border-border shadow-card-hover p-6 sm:p-7 space-y-5">
                  {/* Mock Player Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400" />
                      <span className="text-xs font-mono text-muted-foreground ml-2">
                        lesson-dictation-01.mp4
                      </span>
                    </div>
                    <span className="badge-accent">
                      B2 • Intermediate
                    </span>
                  </div>

                  {/* Mock Video / Audio Waves Waveform */}
                  <div className="bg-muted/70 rounded-2xl p-5 border border-border/70 space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground">
                      <span>Shadowing & Dictation Preview</span>
                      <span className="font-mono text-primary">00:14 / 00:45</span>
                    </div>

                    {/* Audio visualizer bars */}
                    <div className="flex items-end justify-between h-14 gap-1 px-1 py-1">
                      {[40, 65, 25, 80, 95, 60, 30, 70, 85, 45, 90, 75, 35, 60, 100, 50, 40, 80, 65, 30, 70].map((height, i) => (
                        <div
                          key={i}
                          style={{ height: `${height}%` }}
                          className={`w-full rounded-full transition-all duration-300 ${
                            i < 12 ? 'bg-secondary' : 'bg-border-dark'
                          }`}
                        />
                      ))}
                    </div>

                    <div className="flex items-center justify-center pt-1">
                      <button
                        onClick={() => setIsPlayingMockAudio(!isPlayingMockAudio)}
                        className="btn-secondary h-10 px-5 rounded-full inline-flex items-center gap-2 shadow-sm text-xs font-semibold"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>{isPlayingMockAudio ? 'Tạm dừng bài nghe' : 'Nghe mẫu câu thực tế'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Mock Dictation & AI Evaluation Feedback */}
                  <div className="space-y-3 pt-1">
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Câu nghe mẫu & Phiên âm
                    </div>
                    <p className="text-sm font-medium text-foreground bg-card p-3 rounded-xl border border-border">
                      "Consistency in daily practice is the key to natural fluency."
                    </p>

                    {/* Instant AI Pronunciation Score Card */}
                    <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200/80 rounded-xl p-3 text-xs">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-emerald-600" />
                        <div>
                          <p className="font-bold text-emerald-900">Điểm phát âm AI: 96%</p>
                          <p className="text-emerald-700 text-[11px]">Trọng âm chuẩn xác • Nhịp điệu tự nhiên</p>
                        </div>
                      </div>
                      <span className="font-mono font-bold text-emerald-700 text-sm">
                        CEFR C1
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SKILLS SECTION ("One platform, every English skill")
            ========================================================================= */}
        <section id="skills" className="section-spacing bg-muted/40 border-y border-border">
          <div className="container-app">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="badge-primary mb-3">
                <Compass className="w-3.5 h-3.5" />
                Toàn diện 4 kỹ năng cốt lõi
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                Một nền tảng, mọi kỹ năng tiếng Anh
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base mt-3 leading-relaxed">
                Tập trung vào phương pháp đào tạo phản xạ tự nhiên giúp bạn không chỉ hiểu mà còn tự tin giao tiếp chuẩn xác.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <SkillCard key={index} {...skill} />
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            HOW IT WORKS (Workflow Steps layout inspired by Parroto)
            ========================================================================= */}
        <section id="how-it-works" className="section-spacing">
          <div className="container-app">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="badge-accent mb-3">
                Quy trình luyện tập
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                Cách thức hoạt động hiệu quả
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base mt-3 leading-relaxed">
                4 bước đơn giản được tối ưu hóa theo khoa học thần kinh học ngôn ngữ để ghi nhớ sâu và phản xạ nhanh.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {workflowSteps.map((item, index) => (
                <div key={index} className="card-flat relative">
                  <div className="text-3xl font-extrabold text-secondary/30 mb-4 font-mono">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            DAILY WORD (Flashcard & Text-to-speech)
            ========================================================================= */}
        <DailyWord />

        {/* =========================================================================
            DESIGN SYSTEM SHOWCASE (Visual Token Reference)
            ========================================================================= */}
        <DesignSystemShowcase />
      </main>

      <Footer />
    </div>
  );
}
