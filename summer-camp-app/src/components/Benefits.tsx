import { Presentation, TrendingUp, Users, Award } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Presentation className="w-8 h-8 text-brand-electric" />,
      title: 'Trải nghiệm thực chiến',
      description: 'Trực tiếp đứng lớp, thiết kế bài giảng và hỗ trợ nâng cao năng lực số cho các em học sinh khối THCS.',
      borderColor: 'border-brand-electric',
      bgColor: 'bg-brand-electric/5'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-brand-cyan" />,
      title: 'Phát triển kỹ năng',
      description: 'Rèn luyện kỹ năng sư phạm thực tế, năng lực giao tiếp, làm việc nhóm và quản lý lớp học.',
      borderColor: 'border-brand-cyan',
      bgColor: 'bg-brand-cyan/5'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Mở rộng kết nối',
      description: 'Gặp gỡ, giao lưu và làm việc cùng những người bạn trẻ nhiệt huyết, chung chí hướng trong màu áo xanh tình nguyện.',
      borderColor: 'border-green-500',
      bgColor: 'bg-green-500/5'
    },
    {
      icon: <Award className="w-8 h-8 text-brand-yellow" />,
      title: 'Ghi nhận đóng góp',
      description: 'Được tập huấn trước khi tham gia và nhận Chứng nhận đóng góp tích cực cho cộng đồng từ Đoàn thanh niên phường Vĩnh Phúc.',
      borderColor: 'border-brand-yellow',
      bgColor: 'bg-brand-yellow/5'
    }
  ];

  return (
    <section className="py-20 bg-white" id="loi-ich">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Quyền lợi
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


