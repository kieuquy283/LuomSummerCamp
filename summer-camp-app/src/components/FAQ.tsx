import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      q: 'MÃ¬nh khÃ´ng há»c ngÃ nh SÆ° pháº¡m vÃ  chÆ°a tá»«ng cÃ³ kinh nghiá»‡m dáº¡y há»c/trá»£ giáº£ng thÃ¬ cÃ³ thá»ƒ Ä‘Äƒng kÃ½ tham gia khÃ´ng?',
      a: 'HoÃ n toÃ n Ä‘Æ°á»£c nhÃ©! Dá»± Ã¡n ráº¥t chÃ o Ä‘Ã³n cÃ¡c báº¡n tráº» cÃ³ nhiá»‡t huyáº¿t vÃ  tinh tháº§n trÃ¡ch nhiá»‡m. TrÆ°á»›c khi chÃ­nh thá»©c Ä‘á»©ng lá»›p, Äá»™i sáº½ tá»• chá»©c cÃ¡c buá»•i táº­p huáº¥n chuyÃªn mÃ´n bÃ i báº£n vá» ká»¹ nÄƒng sÆ° pháº¡m, cÃ¡ch quáº£n lÃ½ lá»›p há»c vÃ  ná»™i dung bÃ i giáº£ng. Chá»‰ cáº§n báº¡n tá»± tin vÃ  sáºµn sÃ ng há»c há»i lÃ  Ä‘Æ°á»£c nha.'
    },
    {
      q: 'Thá»i gian há»c dá»± kiáº¿n lÃ  "2 buá»•i/tuáº§n, kÃ©o dÃ i 4 tuáº§n tá»« giá»¯a thÃ¡ng 6", váº­y lá»‹ch há»c cá»¥ thá»ƒ vÃ o thá»© máº¥y vÃ  ca nÃ o?',
      a: 'Hiá»‡n táº¡i Ban tá»• chá»©c Ä‘ang lÃ m viá»‡c vá»›i trÆ°á»ng THCS TÃ´ Hiá»‡u Ä‘á»ƒ chá»‘t lá»‹ch phÃ¹ há»£p (thÆ°á»ng sáº½ rÆ¡i vÃ o cÃ¡c ngÃ y trong tuáº§n, tá»« thá»© 2 Ä‘áº¿n thá»© 6, thá»i gian ban ngÃ y). Sau khi báº¡n vÆ°á»£t qua vÃ²ng Ä‘Äƒng kÃ½, Äá»™i sáº½ gá»­i form kháº£o sÃ¡t lá»‹ch ráº£nh cá»§a cÃ¡c báº¡n TNV Ä‘á»ƒ sáº¯p xáº¿p lá»‹ch lÃªn lá»›p tá»‘i Æ°u nháº¥t cho cáº£ Ä‘á»™i.'
    },
    {
      q: 'Há»c sinh lÃ  khá»‘i lá»›p 6 - lá»›p 8, váº­y cÃ¡c em sáº½ Ä‘Æ°á»£c há»c nhá»¯ng ná»™i dung gÃ¬ cá»¥ thá»ƒ áº¡?',
      a: 'VÃ¬ Ä‘Ã¢y lÃ  mÃ´ hÃ¬nh "BÃ¬nh dÃ¢n há»c vá»¥ sá»‘" káº¿t há»£p nÃ¢ng cao nÄƒng lá»±c sá»‘, cÃ¡c em há»c sinh sáº½ Ä‘Æ°á»£c hÆ°á»›ng dáº«n cÃ¡c ká»¹ nÄƒng cÃ´ng nghá»‡ thiáº¿t thá»±c vÃ  an toÃ n trÃªn khÃ´ng gian máº¡ng (VÃ­ dá»¥: cÃ¡ch sá»­ dá»¥ng Internet an toÃ n, báº£o máº­t thÃ´ng tin, á»©ng dá»¥ng cÃ´ng nghá»‡/AI vÃ o há»c táº­p, cÃ¡c cÃ´ng cá»¥ lÃ m bÃ i thuyáº¿t trÃ¬nh, tÆ° duy sá»‘ cÆ¡ báº£n,...). Ná»™i dung sáº½ Ä‘Æ°á»£c thiáº¿t káº¿ gáº§n gÅ©i, trá»±c quan vÃ  cÃ³ tÃ­nh tÆ°Æ¡ng tÃ¡c cao chá»© khÃ´ng náº·ng lÃ½ thuyáº¿t.'
    },
    {
      q: 'Tham gia dá»± Ã¡n nÃ y mÃ¬nh cÃ³ Ä‘Æ°á»£c há»— trá»£ chi phÃ­ Ä‘i láº¡i hay phá»¥ cáº¥p gÃ¬ khÃ´ng?',
      a: 'VÃ¬ Ä‘Ã¢y lÃ  chiáº¿n dá»‹ch tÃ¬nh nguyá»‡n hÃ¨ do ÄoÃ n phÆ°á»ng tá»• chá»©c nháº±m há»— trá»£ cá»™ng Ä‘á»“ng vÃ  há»c sinh trÃªn Ä‘á»‹a bÃ n, chÆ°Æ¡ng trÃ¬nh sáº½ khÃ´ng cÃ³ phá»¥ cáº¥p báº±ng tiá»n máº·t (lÆ°Æ¡ng/trá»£ cáº¥p ngÃ y). Tuy nhiÃªn, ÄoÃ n phÆ°á»ng sáº½ há»— trá»£ cÃ¡c Ä‘iá»u kiá»‡n cÆ¡ sá»Ÿ váº­t cháº¥t tá»‘t nháº¥t táº¡i trÆ°á»ng THCS TÃ´ Hiá»‡u, nÆ°á»›c uá»‘ng táº¡i lá»›p há»c vÃ  chuáº©n bá»‹ Ä‘áº§y Ä‘á»§ cÃ¡c trang thiáº¿t bá»‹ phá»¥c vá»¥ giáº£ng dáº¡y cho cÃ¡c em.'
    },
    {
      q: 'Quyá»n lá»£i lá»›n nháº¥t mÃ  mÃ¬nh nháº­n Ä‘Æ°á»£c khi tham gia Äá»™i lÃ  gÃ¬ áº¡?',
      a: 'Báº¡n sáº½ Ä‘Æ°á»£c cáº¥p Chá»©ng nháº­n Ä‘Ã³ng gÃ³p tÃ­ch cá»±c cho cá»™ng Ä‘á»“ng tá»« ÄoÃ n thanh niÃªn phÆ°á»ng VÄ©nh PhÃºc (Ä‘iá»ƒm cá»™ng lá»›n cho CV xin viá»‡c, há»c bá»•ng hoáº·c xÃ©t Danh hiá»‡u Sinh viÃªn 5 tá»‘t). NgoÃ i ra, báº¡n cÃ²n Ä‘Æ°á»£c rÃ¨n luyá»‡n "thá»±c chiáº¿n" cÃ¡c ká»¹ nÄƒng má»m nhÆ° thuyáº¿t trÃ¬nh, quáº£n lÃ½ lá»›p, lÃ m viá»‡c nhÃ³m vÃ  cÃ³ cÆ¡ há»™i káº¿t báº¡n, giao lÆ°u vá»›i nhá»¯ng ngÆ°á»i tráº» siÃªu nÄƒng Ä‘á»™ng.'
    },
    {
      q: 'Náº¿u mÃ¬nh bá»‹ trÃ¹ng lá»‹ch báº­n 1 - 2 buá»•i trong vÃ²ng 4 tuáº§n Ä‘Ã³ thÃ¬ cÃ³ thá»ƒ xin nghá»‰ vÃ  nhá» báº¡n khÃ¡c dáº¡y thay Ä‘Æ°á»£c khÃ´ng?',
      a: 'ÄÆ°á»£c báº¡n nhÃ©, nhÆ°ng cáº§n háº¡n cháº¿ tá»‘i Ä‘a. Dá»± Ã¡n hoáº¡t Ä‘á»™ng theo mÃ´ hÃ¬nh nhÃ³m (má»—i lá»›p sáº½ cÃ³ cáº£ GV chÃ­nh vÃ  Trá»£ giáº£ng). Náº¿u báº¡n cÃ³ viá»‡c Ä‘á»™t xuáº¥t hoáº·c lá»‹ch thi cá»­, báº¡n cáº§n bÃ¡o trÆ°á»›c vá»›i TrÆ°á»Ÿng Ä‘á»™i Ã­t nháº¥t 48 tiáº¿ng Ä‘á»ƒ BTC sáº¯p xáº¿p nhÃ¢n sá»± giáº£ng dáº¡y thay tháº¿, Ä‘áº£m báº£o tiáº¿n Ä‘á»™ vÃ  cháº¥t lÆ°á»£ng lá»›p há»c cho cÃ¡c em há»c sinh.'
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            CÃ¡c cÃ¢u há»i thÆ°á»ng gáº·p (FAQ)
          </h2>
          <div className="w-24 h-1 bg-brand-cyan mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600">Äá»™i BÃ¬nh dÃ¢n há»c vá»¥ sá»‘</p>
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
                <span className="font-semibold text-brand-navy text-lg pr-4">{faq.q}</span>
                {openIdx === idx ? (
                  <ChevronUp className="w-5 h-5 text-brand-electric flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIdx === idx ? 'max-h-96 py-6 bg-white' : 'max-h-0 py-0'
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


