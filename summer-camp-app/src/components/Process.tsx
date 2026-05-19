import React from 'react';
import { Send, Link as LinkIcon, Users, ArrowRight } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      step: 1,
      title: 'Nhắn tin Fanpage',
      desc: 'Gửi tin nhắn trực tiếp cho Fanpage Lượm - Giáo dục vì Cộng đồng hoặc liên hệ hotline.',
      icon: <Send className="w-8 h-8 text-brand-electric" />
    },
    {
      step: 2,
      title: 'Nhận Link Đăng ký',
      desc: 'Ban tổ chức sẽ gửi link form đăng ký ứng tuyển chi tiết cùng thông tin dự án.',
      icon: <LinkIcon className="w-8 h-8 text-purple-500" />
    },
    {
      step: 3,
      title: 'Tham gia Tập huấn',
      desc: 'Phỏng vấn ngắn gọn và tham gia các buổi tập huấn chuyên môn bài bản.',
      icon: <Users className="w-8 h-8 text-green-500" />
    }
  ];

  return (
    <section className="py-20 bg-slate-50" id="ung-tuyen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Cách thức ứng tuyển
          </h2>
          <div className="w-24 h-1 bg-brand-cyan mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 text-lg">
            Các bạn quan tâm và muốn dành trọn một mùa hè rực rỡ, ý nghĩa vui lòng thực hiện theo các bước sau:
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>

          {steps.map((item, idx) => {
            const isFanpageStep = item.step === 1;
            const CardWrapper = isFanpageStep ? 'a' : 'div';
            const extraProps = isFanpageStep ? { href: 'https://www.facebook.com/luom.lvcd', target: '_blank', rel: 'noopener noreferrer' } : {};

            return (
              <React.Fragment key={idx}>
                <CardWrapper 
                  {...extraProps}
                  className={`flex flex-col items-center text-center relative z-10 w-full md:w-1/3 mb-10 md:mb-0 group ${isFanpageStep ? 'cursor-pointer' : ''}`}
                >
                  <div className={`w-20 h-20 bg-white rounded-full shadow-lg border-4 border-slate-50 flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform duration-300 ${isFanpageStep ? 'group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:border-brand-electric/20' : ''}`}>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-yellow text-brand-navy font-bold flex items-center justify-center shadow-md">
                      {item.step}
                    </div>
                    {item.icon}
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${isFanpageStep ? 'text-brand-electric group-hover:text-brand-deep transition-colors' : 'text-brand-navy'}`}>{item.title}</h3>
                  <p className="text-slate-600 px-4">{item.desc}</p>
                </CardWrapper>
                
                {/* Mobile Arrow */}
                {idx < steps.length - 1 && (
                  <div className="md:hidden text-slate-300 mb-10">
                    <ArrowRight className="w-8 h-8 rotate-90" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
