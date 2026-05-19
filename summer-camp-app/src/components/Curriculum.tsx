import { Brain, Sparkles, ShieldAlert, Rocket } from 'lucide-react';

const Curriculum = () => {
  const weeks = [
    {
      week: 1,
      title: 'Làm quen với AI',
      description: 'AI là gì, AI xuất hiện ở đâu, trải nghiệm công cụ AI cơ bản.',
      icon: <Brain className="w-6 h-6 text-brand-electric" />,
      color: 'bg-brand-electric',
      lightColor: 'bg-brand-electric/10',
      textColor: 'text-brand-electric'
    },
    {
      week: 2,
      title: 'Sử dụng AI trong học tập',
      description: 'Cách đặt prompt tốt, tóm tắt bài học, tìm ý tưởng, tư duy phản biện.',
      icon: <Sparkles className="w-6 h-6 text-purple-500" />,
      color: 'bg-purple-500',
      lightColor: 'bg-purple-500/10',
      textColor: 'text-purple-500'
    },
    {
      week: 3,
      title: 'An toàn thông tin trong AI',
      description: 'Thông tin cá nhân, tin giả, deepfake, lừa đảo, link độc hại.',
      icon: <ShieldAlert className="w-6 h-6 text-green-500" />,
      color: 'bg-green-500',
      lightColor: 'bg-green-500/10',
      textColor: 'text-green-500'
    },
    {
      week: 4,
      title: 'Mini Project cuối khóa',
      description: 'Thiết kế poster, bài thuyết trình hoặc sản phẩm nhỏ ứng dụng AI.',
      icon: <Rocket className="w-6 h-6 text-brand-yellow" />,
      color: 'bg-brand-yellow',
      lightColor: 'bg-brand-yellow/10',
      textColor: 'text-brand-yellow-hover'
    }
  ];

  return (
    <section className="py-20 bg-slate-50" id="chuong-trinh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Học sinh sẽ học gì trong 4 tuần?
          </h2>
          <div className="w-24 h-1 bg-brand-cyan mx-auto rounded-full"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 rounded-full z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
            {weeks.map((item, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center lg:items-start group">
                
                {/* Mobile connecting line */}
                {index !== weeks.length - 1 && (
                  <div className="lg:hidden absolute top-16 bottom-[-32px] left-8 w-1 bg-slate-200 -z-10"></div>
                )}

                <div className="flex flex-row lg:flex-col items-center lg:items-center w-full mb-4">
                  {/* Circle Marker */}
                  <div className={`w-16 h-16 rounded-full ${item.color} text-white flex items-center justify-center text-2xl font-bold shadow-lg mb-0 lg:mb-6 flex-shrink-0 border-4 border-white group-hover:scale-110 transition-transform duration-300`}>
                    {item.week}
                  </div>
                  
                  {/* Mobile Only Header inside flex */}
                  <div className="lg:hidden ml-6 flex-1">
                    <h3 className={`text-xl font-bold ${item.textColor}`}>Tuần {item.week}</h3>
                    <p className="text-lg font-semibold text-brand-navy">{item.title}</p>
                  </div>
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 w-full ml-20 lg:ml-0 group-hover:shadow-xl transition-shadow duration-300 h-full relative overflow-hidden">
                  {/* Decorative background circle */}
                  <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full ${item.lightColor} opacity-50`}></div>
                  
                  <div className="hidden lg:block text-center mb-4 relative z-10">
                    <h3 className={`text-lg font-bold ${item.textColor} mb-1`}>Tuần {item.week}</h3>
                    <p className="text-xl font-bold text-brand-navy min-h-[56px] flex items-center justify-center">{item.title}</p>
                  </div>
                  
                  <div className="flex items-start gap-4 relative z-10">
                    <div className={`mt-1 p-2 rounded-lg ${item.lightColor}`}>
                      {item.icon}
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;


