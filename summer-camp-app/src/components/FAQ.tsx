import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      q: 'Học sinh chưa biết về AI có tham gia được không?',
      a: 'Có. Chương trình được thiết kế theo hướng nhập môn, dễ hiểu và phù hợp với lứa tuổi THCS. Học sinh sẽ được làm quen từ những khái niệm cơ bản nhất.'
    },
    {
      q: 'Có cần mang máy tính cá nhân không?',
      a: 'Khuyến khích có, nhưng ban tổ chức có thể hướng dẫn theo điều kiện thực tế hoặc ghép nhóm thực hành trên lớp.'
    },
    {
      q: 'Chương trình tập trung vào lý thuyết hay thực hành?',
      a: 'Chương trình kết hợp cả hai, nhưng thiên về thực hành (70%). Học sinh sẽ được trải nghiệm trực tiếp các công cụ AI và làm mini project.'
    },
    {
      q: 'Sinh viên IT tham gia có được xác nhận không?',
      a: 'Có, ban tổ chức sẽ cấp giấy chứng nhận tham gia dự án cộng đồng/giáo dục hoặc thư xác nhận tham gia để sinh viên bổ sung vào CV.'
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Câu hỏi thường gặp
          </h2>
          <div className="w-24 h-1 bg-brand-cyan mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border ${openIdx === idx ? 'border-brand-electric' : 'border-slate-200'} rounded-2xl overflow-hidden transition-all duration-300`}
            >
              <button
                className="w-full flex justify-between items-center p-6 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="font-semibold text-brand-navy text-lg">{faq.q}</span>
                {openIdx === idx ? (
                  <ChevronUp className="w-5 h-5 text-brand-electric flex-shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0 ml-4" />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIdx === idx ? 'max-h-48 py-6 bg-white' : 'max-h-0 py-0'
                }`}
              >
                <p className="text-slate-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
