import React from 'react';
import { Users, MapPin, Clock, School } from 'lucide-react';

const ProgramInfo = () => {
  const infos = [
    {
      icon: <MapPin className="w-6 h-6 text-brand-cyan" />,
      title: 'Địa điểm',
      desc: 'Trường THCS Tô Hiệu'
    },
    {
      icon: <School className="w-6 h-6 text-brand-electric" />,
      title: 'Đối tượng',
      desc: 'Học sinh khối lớp 6 – lớp 8'
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-500" />,
      title: 'Thời gian',
      desc: '2 buổi/tuần (4 tuần), dự kiến từ giữa tháng 6/2026'
    },
    {
      icon: <Users className="w-6 h-6 text-brand-yellow" />,
      title: 'Quy mô',
      desc: 'Khoảng 20 - 25 học sinh/lớp'
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Thông tin chương trình
          </h2>
          <div className="w-24 h-1 bg-brand-cyan mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infos.map((info, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-slate-50 rounded-full shadow-sm flex items-center justify-center mb-4">
                {info.icon}
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">{info.title}</h3>
              <p className="text-slate-600 text-sm">{info.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramInfo;
