import { HeartHandshake, ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-brand-electric rounded-[100%] blur-[120px] opacity-30"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <HeartHandshake className="w-24 h-24 text-brand-yellow opacity-20 absolute -inset-2 blur-md" />
            <HeartHandshake className="w-20 h-20 text-brand-yellow relative z-10" />
          </div>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Dành trọn một mùa hè <span className="text-brand-yellow">rực rỡ</span> và <span className="text-brand-cyan">ý nghĩa</span>
        </h2>

        <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto">
          Cùng Đội Bình dân học vụ số phường Vĩnh Phúc mang kiến thức công nghệ đến gần hơn với các em học sinh. Hãy tham gia ngay hôm nay!
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a href="https://forms.gle/U1ryjVPUWGEJPEq27" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-4 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy font-bold rounded-full shadow-[0_0_20px_rgba(251,191,36,0.4)] transition-all hover:-translate-y-1 text-lg flex justify-center items-center gap-2 group">
            Ứng tuyển ngay
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="https://zalo.me/0968397725" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-brand-cyan hover:bg-brand-cyan/10 text-brand-cyan font-bold rounded-full transition-all hover:-translate-y-1 text-lg shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            Liên hệ Zalo (0968.397.725)
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;


