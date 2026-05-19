import { MapPin, Calendar, Rocket, Users, ChevronRight, Shield, Cpu, MessageSquareText, Lock } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-brand-navy pt-20 pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-deep rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-cyan rounded-full blur-[150px] opacity-20"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-electric/10 border border-brand-electric/30 text-brand-cyan mb-6 text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-brand-cyan mr-2 animate-pulse"></span>
              Tuyển Tình Nguyện Viên 2026
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.6] mb-6">
              Dự án giáo dục <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-electric">Nâng cao năng lực số</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Đội Bình dân học vụ số phường Vĩnh Phúc tìm kiếm tình nguyện viên đồng hành chiến dịch mùa hè. Mang kiến thức công nghệ và tư duy số đến gần hơn với học sinh THCS!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <a href="#tuyen-giang-vien" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-brand-yellow hover:bg-brand-yellow-hover text-white font-bold rounded-full shadow-[0_0_20px_rgba(251,191,36,0.4)] transition-all hover:-translate-y-1">
                Vị trí tìm kiếm
              </a>
              <a href="#loi-ich" className="w-full sm:w-auto px-8 py-3.5 bg-transparent hover:bg-white/5 border border-slate-500 hover:border-white text-white font-medium rounded-full transition-all flex items-center justify-center group">
                Tìm hiểu chương trình
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm flex flex-col items-center lg:items-start text-center lg:text-left hover:bg-white/10 transition-colors">
                <MapPin className="w-6 h-6 text-brand-cyan mb-2" />
                <span className="text-xs text-slate-400 font-medium">Địa điểm</span>
                <span className="text-sm text-white font-semibold mt-1">Trường THCS Tô Hiệu</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm flex flex-col items-center lg:items-start text-center lg:text-left hover:bg-white/10 transition-colors">
                <Calendar className="w-6 h-6 text-brand-electric mb-2" />
                <span className="text-xs text-slate-400 font-medium">Thời gian</span>
                <span className="text-sm text-white font-semibold mt-1">2 buổi/tuần • 4 tuần</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm flex flex-col items-center lg:items-start text-center lg:text-left hover:bg-white/10 transition-colors">
                <Rocket className="w-6 h-6 text-brand-yellow mb-2" />
                <span className="text-xs text-slate-400 font-medium">Bắt đầu</span>
                <span className="text-sm text-white font-semibold mt-1">Giữa tháng 6</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm flex flex-col items-center lg:items-start text-center lg:text-left hover:bg-white/10 transition-colors">
                <Users className="w-6 h-6 text-green-400 mb-2" />
                <span className="text-xs text-slate-400 font-medium">Học sinh</span>
                <span className="text-sm text-white font-semibold mt-1">Khối lớp 6 - 8</span>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] w-full hidden lg:block">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-brand-electric to-brand-deep rounded-3xl rotate-12 opacity-80 blur-lg animate-pulse"></div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-brand-cyan/30 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
              <div className="w-56 h-56 border border-brand-electric/40 rounded-full flex items-center justify-center animate-[spin_15s_linear_infinite_reverse]">
              </div>
            </div>

            <div className="absolute top-[15%] left-[10%] bg-brand-navy/80 backdrop-blur-md border border-brand-cyan/50 p-6 rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.3)] transform -rotate-6 hover:rotate-0 transition-transform duration-500 z-20">
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="p-3 bg-brand-cyan/20 rounded-xl">
                  <Cpu className="w-10 h-10 text-brand-cyan" />
                </div>
                <div className="text-center">
                  <p className="text-white font-bold">Giảng dạy</p>
                  <p className="text-brand-cyan text-xs">Kiến thức số</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[20%] right-[5%] bg-brand-navy/80 backdrop-blur-md border border-brand-electric/50 p-6 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.3)] transform rotate-6 hover:rotate-0 transition-transform duration-500 z-20">
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="relative">
                  <Shield className="w-14 h-14 text-brand-electric" />
                  <Lock className="w-6 h-6 text-brand-yellow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <div className="text-center">
                  <p className="text-white font-bold">An toàn</p>
                  <p className="text-brand-electric text-xs">Không gian mạng</p>
                </div>
              </div>
            </div>

            <div className="absolute top-[30%] right-[15%] bg-brand-navy/90 backdrop-blur-sm border border-brand-yellow/30 p-4 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl shadow-xl transform translate-x-4 -translate-y-4 z-20 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="flex items-center gap-3">
                <MessageSquareText className="w-6 h-6 text-brand-yellow" />
                <p className="text-sm text-white font-medium">Trở thành tình nguyện viên!</p>
              </div>
            </div>

            <svg className="absolute inset-0 w-full h-full z-10" pointerEvents="none">
              <path d="M 120 150 Q 200 250 300 350" fill="transparent" stroke="rgba(6, 182, 212, 0.2)" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite]" />
              <path d="M 350 150 Q 250 250 150 350" fill="transparent" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite_reverse]" />
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: 1000; }
        }
      `}</style>
    </section>
  );
};

export default Hero;


