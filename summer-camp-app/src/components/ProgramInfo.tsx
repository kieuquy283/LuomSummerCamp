import React from 'react';
import { Users, MapPin, Clock, BookOpen, GraduationCap } from 'lucide-react';

const ProgramInfo = () => {
  const infos = [
    {
      icon: <Users className="w-6 h-6 text-brand-electric" />,
      title: 'Đối tượng',
      desc: 'Học sinh cấp 2 yêu thích công nghệ'
    },
    {
      icon: <MapPin className="w-6 h-6 text-brand-cyan" />,
      title: 'Địa điểm',
      desc: 'Trường Tiểu học Tô Hiệu'
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-500" />,
      title: 'Thời lượng',
      desc: '2 buổi/tuần trong 4 tuần'
    },
    {
      icon: <Users className="w-6 h-6 text-brand-yellow" />,
      title: 'Sĩ số',
      desc: '20–25 học sinh/lớp'
    },
    {
      icon: <BookOpen className="w-6 h-6 text-green-500" />,
      title: 'Hình thức',
      desc: 'Học trực tiếp, có thực hành và hoạt động nhóm'
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Thông tin chương trình
          </h2>
          <div className="w-24 h-1 bg-brand-cyan mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {infos.map((info, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center mb-4">
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
