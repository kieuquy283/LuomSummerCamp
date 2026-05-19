import React from 'react';
import { Presentation, ClipboardCheck, Users, CheckCircle2, ChevronRight } from 'lucide-react';

const InstructorRecruitment = () => {
  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden" id="tuyen-giang-vien">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      <div className="absolute -left-40 top-20 w-96 h-96 bg-brand-electric rounded-full blur-[150px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Vị trí <span className="text-brand-yellow">tuyển dụng</span>
          </h2>
          <div className="w-24 h-1 bg-brand-cyan mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-brand-deep/40 backdrop-blur-md border border-brand-electric/30 rounded-3xl p-8 lg:p-10 shadow-2xl relative z-10 hover:border-brand-electric/60 transition-all group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-brand-electric/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Presentation className="w-7 h-7 text-brand-electric" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">TNV Đứng lớp & Hỗ trợ chuyên môn</h3>
                <p className="text-brand-cyan text-sm mt-1">Số lượng: 02 người</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-brand-yellow font-semibold mb-3 flex items-center gap-2">
                <ClipboardCheck className="w-5 h-5" /> Nhiệm vụ:
              </h4>
              <ul className="text-slate-300 space-y-2 text-sm leading-relaxed list-disc list-inside">
                <li>Chủ trì điều phối các buổi học, trực tiếp hướng dẫn học sinh tiếp cận kiến thức và kỹ năng số.</li>
                <li>Thiết kế, chuẩn bị tài liệu và bài giảng dưới sự định hướng của Ban tổ chức.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" /> Yêu cầu:
              </h4>
              <ul className="text-slate-300 space-y-2 text-sm leading-relaxed">
                <li><strong className="text-white">Thái độ:</strong> Đúng giờ, có trách nhiệm với lớp học; kiên nhẫn, nhiệt tình và thân thiện với học sinh cấp 2.</li>
                <li><strong className="text-white">Kỹ năng:</strong> Giao tiếp tốt, truyền đạt rõ ràng. Ưu tiên sinh viên ngành Sư phạm/CNTT. Có kinh nghiệm đứng lớp là điểm cộng.</li>
              </ul>
            </div>
          </div>

          <div className="bg-brand-deep/40 backdrop-blur-md border border-brand-cyan/30 rounded-3xl p-8 lg:p-10 shadow-2xl relative z-10 hover:border-brand-cyan/60 transition-all group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-brand-cyan/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-7 h-7 text-brand-cyan" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">TNV Trợ giảng & Điều phối lớp học</h3>
                <p className="text-brand-yellow text-sm mt-1">Số lượng: 06 người</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-brand-yellow font-semibold mb-3 flex items-center gap-2">
                <ClipboardCheck className="w-5 h-5" /> Nhiệm vụ:
              </h4>
              <ul className="text-slate-300 space-y-2 text-sm leading-relaxed list-disc list-inside">
                <li>Hỗ trợ giáo viên chính quản lý lớp, hướng dẫn học sinh thực hành kỹ năng số tại chỗ.</li>
                <li>Hỗ trợ ban hậu cần chuẩn bị thiết bị, lớp học và ghi lại những khoảnh khắc đẹp (Media).</li>
              </ul>
            </div>

            <div>
              <h4 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" /> Yêu cầu:
              </h4>
              <ul className="text-slate-300 space-y-2 text-sm leading-relaxed">
                <li><strong className="text-white">Thái độ:</strong> Chủ động, cởi mở tiếp nhận phản hồi, tôn trọng quy trình và sẵn sàng hỗ trợ đồng đội.</li>
                <li><strong className="text-white">Kỹ năng:</strong> Sử dụng tốt công cụ số cơ bản (Adobe Illustrator, Canva, MS Office,...); có kỹ năng tổ chức và bao quát lớp.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="https://forms.gle/U1ryjVPUWGEJPEq27" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy font-bold px-10 py-4 rounded-full shadow-lg transition-all hover:-translate-y-1">
            Ứng tuyển ngay
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstructorRecruitment;
