import { Presentation, TrendingUp, Users, Award } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Presentation className="w-8 h-8 text-brand-electric" />,
      title: 'Tráº£i nghiá»‡m thá»±c chiáº¿n',
      description: 'Trá»±c tiáº¿p Ä‘á»©ng lá»›p, thiáº¿t káº¿ bÃ i giáº£ng vÃ  há»— trá»£ nÃ¢ng cao nÄƒng lá»±c sá»‘ cho cÃ¡c em há»c sinh khá»‘i THCS.',
      borderColor: 'border-brand-electric',
      bgColor: 'bg-brand-electric/5'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-brand-cyan" />,
      title: 'PhÃ¡t triá»ƒn ká»¹ nÄƒng',
      description: 'RÃ¨n luyá»‡n ká»¹ nÄƒng sÆ° pháº¡m thá»±c táº¿, nÄƒng lá»±c giao tiáº¿p, lÃ m viá»‡c nhÃ³m vÃ  quáº£n lÃ½ lá»›p há»c.',
      borderColor: 'border-brand-cyan',
      bgColor: 'bg-brand-cyan/5'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Má»Ÿ rá»™ng káº¿t ná»‘i',
      description: 'Gáº·p gá»¡, giao lÆ°u vÃ  lÃ m viá»‡c cÃ¹ng nhá»¯ng ngÆ°á»i báº¡n tráº» nhiá»‡t huyáº¿t, chung chÃ­ hÆ°á»›ng trong mÃ u Ã¡o xanh tÃ¬nh nguyá»‡n.',
      borderColor: 'border-green-500',
      bgColor: 'bg-green-500/5'
    },
    {
      icon: <Award className="w-8 h-8 text-brand-yellow" />,
      title: 'Ghi nháº­n Ä‘Ã³ng gÃ³p',
      description: 'ÄÆ°á»£c táº­p huáº¥n trÆ°á»›c khi tham gia vÃ  nháº­n Chá»©ng nháº­n Ä‘Ã³ng gÃ³p tÃ­ch cá»±c cho cá»™ng Ä‘á»“ng tá»« ÄoÃ n thanh niÃªn phÆ°á»ng VÄ©nh PhÃºc.',
      borderColor: 'border-brand-yellow',
      bgColor: 'bg-brand-yellow/5'
    }
  ];

  return (
    <section className="py-20 bg-white" id="loi-ich">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Táº¡i sao báº¡n nÃªn tham gia?
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


