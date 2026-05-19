import React from 'react';
import { Presentation, MessageCircle, FileText, Users, Network, Award, CheckCircle2, ChevronRight, Code2 } from 'lucide-react';

const InstructorRecruitment = () => {
  const benefits = [
    { icon: <Presentation className="w-5 h-5 text-brand-cyan" />, text: 'Kinh nghiệm đứng lớp' },
    { icon: <MessageCircle className="w-5 h-5 text-brand-cyan" />, text: 'Rèn kỹ năng giao tiếp' },
    { icon: <FileText className="w-5 h-5 text-brand-cyan" />, text: 'Làm đẹp CV/Portfolio' },
    { icon: <Users className="w-5 h-5 text-brand-cyan" />, text: 'Làm việc nhóm & tổ chức' },
    { icon: <Network className="w-5 h-5 text-brand-cyan" />, text: 'Mở rộng network' },
    { icon: <Award className="w-5 h-5 text-brand-cyan" />, text: 'Giấy chứng nhận / hỗ trợ chi phí' }
  ];

  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden" id="tuyen-giang-vien">
      {/* Background Decorative */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      <div className="absolute -left-40 top-20 w-96 h-96 bg-brand-electric rounded-full blur-[150px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Cơ hội dành cho <span className="text-brand-yellow">sinh viên IT</span>
            </h2>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed">
              Chúng tôi tìm kiếm 2–3 sinh viên CNTT/AI/An toàn thông tin đồng hành cùng chương trình để hỗ trợ giảng dạy và dẫn dắt hoạt động thực hành.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors">
                  {item.icon}
                  <span className="text-slate-200 text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Callout Card */}
          <div className="relative">
            {/* Visual element floating behind */}
            <div className="absolute -right-8 -top-8 text-brand-cyan/20 animate-pulse">
              <Code2 className="w-32 h-32" />
            </div>

            <div className="bg-brand-deep/40 backdrop-blur-md border border-brand-electric/30 rounded-3xl p-8 lg:p-10 shadow-2xl relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-brand-yellow rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(251,191,36,0.5)]">
                  <CheckCircle2 className="w-8 h-8 text-brand-navy" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Yêu cầu cơ bản</h3>
                  <p className="text-brand-cyan text-sm">Tham gia cùng chúng tôi</p>
                </div>
              </div>
              
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                "Sinh viên năm 2+, yêu thích giáo dục công nghệ, có trách nhiệm, giao tiếp tốt."
              </p>

              <button className="w-full bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy font-bold py-4 rounded-xl shadow-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-2 group">
                Ứng tuyển giảng viên
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InstructorRecruitment;
