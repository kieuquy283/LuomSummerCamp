import React from 'react';
import { Shield } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-brand-electric rounded-[100%] blur-[120px] opacity-30"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Shield Icon Decoration */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Shield className="w-24 h-24 text-brand-electric opacity-20 absolute -inset-2 blur-md" />
            <Shield className="w-20 h-20 text-brand-cyan relative z-10" />
          </div>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Sẵn sàng cùng học sinh khám phá AI một cách <span className="text-brand-yellow">thông minh</span> và <span className="text-brand-cyan">an toàn</span>?
        </h2>
        
        <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto">
          Đăng ký tham gia trại hè hoặc ứng tuyển trở thành giảng viên đồng hành ngay hôm nay.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button className="w-full sm:w-auto px-10 py-4 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy font-bold rounded-full shadow-[0_0_20px_rgba(251,191,36,0.4)] transition-all hover:-translate-y-1 text-lg">
            Đăng ký học sinh
          </button>
          <button className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-brand-cyan hover:bg-brand-cyan/10 text-brand-cyan font-bold rounded-full transition-all hover:-translate-y-1 text-lg shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            Ứng tuyển sinh viên IT
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
