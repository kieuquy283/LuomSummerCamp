import React from 'react';
import { BrainCircuit, MessageSquare, ShieldCheck, Lightbulb } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <BrainCircuit className="w-8 h-8 text-brand-electric" />,
      title: 'Hiểu AI dễ dàng',
      description: 'Làm quen với AI qua ví dụ thực tế, gần gũi, không khô khan.',
      borderColor: 'border-brand-electric',
      bgColor: 'bg-brand-electric/5'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-brand-cyan" />,
      title: 'Học cách dùng AI thông minh',
      description: 'Biết đặt câu hỏi, tìm ý tưởng và hỗ trợ học tập hiệu quả.',
      borderColor: 'border-brand-cyan',
      bgColor: 'bg-brand-cyan/5'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
      title: 'An toàn thông tin',
      description: 'Nhận biết rủi ro, bảo vệ dữ liệu cá nhân và tài khoản.',
      borderColor: 'border-green-500',
      bgColor: 'bg-green-500/5'
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-brand-yellow" />,
      title: 'Tự tin sáng tạo',
      description: 'Thực hành mini project và thuyết trình sản phẩm cuối khóa.',
      borderColor: 'border-brand-yellow',
      bgColor: 'bg-brand-yellow/5'
    }
  ];

  return (
    <section className="py-20 bg-white" id="loi-ich">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Vì sao nên tham gia?
          </h2>
          <div className="w-24 h-1 bg-brand-cyan mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl p-8 border-t-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${benefit.borderColor}`}
            >
              <div className={`w-16 h-16 rounded-2xl ${benefit.bgColor} flex items-center justify-center mb-6`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
