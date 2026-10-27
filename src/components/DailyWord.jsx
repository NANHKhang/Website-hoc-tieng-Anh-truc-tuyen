import React, { useState } from 'react';
import { Volume2, Sparkles, ChevronRight, CheckCircle2, Bookmark, RotateCcw } from 'lucide-react';

const SAMPLE_WORDS = [
  {
    word: "Perseverance",
    type: "noun",
    phonetic: "/ˌpɜːsɪˈvɪərəns/",
    meaning: "Sự kiên trì, bền bỉ vượt qua khó khăn để đạt mục tiêu.",
    example: "Through deliberate practice and perseverance, anyone can attain English fluency.",
    exampleVi: "Nhờ luyện tập có chủ đích và sự kiên trì, bất kỳ ai cũng có thể làm chủ tiếng Anh."
  },
  {
    word: "Shadowing",
    type: "noun / method",
    phonetic: "/ˈʃædəʊɪŋ/",
    meaning: "Kỹ thuật nhại lại giọng người bản xứ ngay khi nghe để cải thiện ngữ điệu và phát âm.",
    example: "Shadowing real video dialogues trains your brain to speak with native-like rhythm.",
    exampleVi: "Nhại lại các đoạn hội thoại video thực tế giúp rèn luyện nhịp điệu tự nhiên như người bản xứ."
  },
  {
    word: "Dictation",
    type: "noun / method",
    phonetic: "/dɪkˈteɪʃn/",
    meaning: "Phương pháp nghe chép chính tả từng từ giúp bắt âm chính xác và tăng phản xạ nghe sâu.",
    example: "Dictation exercise forces you to catch subtle linking sounds and reductions.",
    exampleVi: "Bài tập chép chính tả buộc bạn phải nhận biết các âm nối và nuốt âm tinh tế."
  }
];

export default function DailyWord() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMeaning, setShowMeaning] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const current = SAMPLE_WORDS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SAMPLE_WORDS.length);
    setIsSaved(false);
  };

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(current.word);
      utterance.lang = 'en-US';
      utterance.rate = 0.85;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Trình duyệt không hỗ trợ Web Speech API.");
    }
  };

  return (
    <section id="daily-word" className="section-spacing">
      <div className="container-narrow">
        <div className="text-center mb-8">
          <span className="badge-accent mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Học Từ Vựng Theo Ngữ Cảnh (SRS Flashcard)
          </span>
          <h2 className="text-3xl font-extrabold text-foreground tracking-tight">
            Từ Vựng & Phát Âm Mỗi Ngày
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mt-2 max-w-lg mx-auto">
            Học từ vựng gắn liền với ngữ cảnh thực tế, phiên âm chuẩn quốc tế và luyện nghe trực tiếp.
          </p>
        </div>

        {/* Interactive Word Card */}
        <div className="bg-gradient-to-b from-primary via-primary/95 to-brand-navy-dark text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden border border-primary/20">
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />

          {/* Card Header Controls */}
          <div className="flex items-center justify-between mb-8 relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs uppercase tracking-wider text-blue-200 font-semibold">
                Thẻ học Spaced Repetition #{currentIndex + 1}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsSaved(!isSaved)}
                className={`p-2 rounded-xl transition-colors ${
                  isSaved
                    ? 'bg-secondary text-white'
                    : 'bg-white/10 hover:bg-white/20 text-blue-200'
                }`}
                title="Lưu từ vào sổ tay"
              >
                <Bookmark className="w-4 h-4" />
              </button>

              <button
                onClick={handleNext}
                className="flex items-center gap-1.5 text-xs font-medium text-white bg-white/10 hover:bg-white/20 px-3.5 py-2 rounded-xl transition-all"
              >
                Từ tiếp theo
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Word Details */}
          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-4 flex-wrap">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                {current.word}
              </h3>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary/30 text-blue-100 border border-secondary/30">
                {current.type}
              </span>
              <button
                onClick={handleSpeak}
                disabled={isSpeaking}
                title="Nghe phát âm chuẩn US"
                className="p-3 rounded-full bg-secondary hover:bg-secondary-dark text-white shadow-glow transition-all active:scale-95 disabled:opacity-50"
              >
                <Volume2 className={`w-5 h-5 ${isSpeaking ? 'animate-bounce' : ''}`} />
              </button>
            </div>

            {/* Phonetic transcription with Mono typography */}
            <p className="font-mono text-base text-blue-200 tracking-wide">
              {current.phonetic}
            </p>

            {/* Meaning & Contextual Sentence */}
            <div className="pt-2">
              <button
                onClick={() => setShowMeaning(!showMeaning)}
                className="text-xs text-blue-300 hover:text-white underline underline-offset-4 mb-3 inline-block transition-colors"
              >
                {showMeaning ? 'Ẩn nghĩa tiếng Việt' : 'Hiển thị nghĩa & ngữ cảnh'}
              </button>

              {showMeaning && (
                <div className="space-y-4 bg-white/10 border border-white/15 rounded-2xl p-5 sm:p-6 backdrop-blur-md">
                  <div>
                    <span className="text-xs font-semibold text-blue-300 uppercase tracking-wider block mb-1">
                      Giải nghĩa ngữ cảnh
                    </span>
                    <p className="text-white text-base leading-relaxed">{current.meaning}</p>
                  </div>

                  <div className="pt-3 border-t border-white/10">
                    <span className="text-xs font-semibold text-blue-300 uppercase tracking-wider block mb-1">
                      Ví dụ thực tế
                    </span>
                    <p className="text-blue-50 italic text-sm sm:text-base leading-relaxed">
                      "{current.example}"
                    </p>
                    <p className="text-blue-200/80 text-xs sm:text-sm mt-1">
                      {current.exampleVi}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
