import React from 'react';
import { ClipboardList, MailCheck, PlayCircle, ArrowRight } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      step: 1,
      title: 'Đăng ký',
      desc: 'Điền thông tin đăng ký học sinh hoặc ứng tuyển sinh viên IT.',
      icon: <ClipboardList className="w-8 h-8 text-brand-electric" />
    },
    {
      step: 2,
      title: 'Xác nhận thông tin',
      desc: 'BTC xác nhận và gửi thông tin chi tiết về lịch học/huấn luyện.',
      icon: <MailCheck className="w-8 h-8 text-purple-500" />
    },
    {
      step: 3,
      title: 'Tham gia khai giảng',
      desc: 'Tham dự buổi khai giảng và bắt đầu hành trình AI & An toàn thông tin.',
      icon: <PlayCircle className="w-8 h-8 text-green-500" />
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Quy trình tham gia
          </h2>
          <div className="w-24 h-1 bg-brand-cyan mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>

          {steps.map((item, idx) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center text-center relative z-10 w-full md:w-1/3 mb-10 md:mb-0 group">
                <div className="w-20 h-20 bg-white rounded-full shadow-lg border-4 border-slate-50 flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-yellow text-brand-navy font-bold flex items-center justify-center shadow-md">
                    {item.step}
                  </div>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{item.title}</h3>
                <p className="text-slate-600 px-4">{item.desc}</p>
              </div>
              
              {/* Mobile Arrow */}
              {idx < steps.length - 1 && (
                <div className="md:hidden text-slate-300 mb-10">
                  <ArrowRight className="w-8 h-8 rotate-90" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
