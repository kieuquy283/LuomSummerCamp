import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      q: 'Mình không học ngành Sư phạm và chưa từng có kinh nghiệm dạy học/trợ giảng thì có thể đăng ký tham gia không?',
      a: 'Hoàn toàn được nhé! Dự án rất chào đón các bạn trẻ có nhiệt huyết và tinh thần trách nhiệm. Trước khi chính thức đứng lớp, Đội sẽ tổ chức các buổi tập huấn chuyên môn bài bản về kỹ năng sư phạm, cách quản lý lớp học và nội dung bài giảng. Chỉ cần bạn tự tin và sẵn sàng học hỏi là được nha.'
    },
    {
      q: 'Thời gian học dự kiến là "2 buổi/tuần, kéo dài 4 tuần từ giữa tháng 6", vậy lịch học cụ thể vào thứ mấy và ca nào?',
      a: 'Hiện tại Ban tổ chức đang làm việc với trường THCS Tô Hiệu để chốt lịch phù hợp (thường sẽ rơi vào các ngày trong tuần, từ thứ 2 đến thứ 6, thời gian ban ngày). Sau khi bạn vượt qua vòng đăng ký, Đội sẽ gửi form khảo sát lịch rảnh của các bạn TNV để sắp xếp lịch lên lớp tối ưu nhất cho cả đội.'
    },
    {
      q: 'Học sinh là khối lớp 6 - lớp 8, vậy các em sẽ được học những nội dung gì cụ thể ạ?',
      a: 'Vì đây là mô hình "Bình dân học vụ số" kết hợp nâng cao năng lực số, các em học sinh sẽ được hướng dẫn các kỹ năng công nghệ thiết thực và an toàn trên không gian mạng (ví dụ: cách sử dụng Internet an toàn, bảo mật thông tin, ứng dụng công nghệ/AI vào học tập, các công cụ làm bài thuyết trình, tư duy số cơ bản,...). Nội dung sẽ được thiết kế gần gũi, trực quan và có tính tương tác cao chứ không nặng lý thuyết.'
    },
    {
      q: 'Tham gia dự án này mình có được hỗ trợ chi phí đi lại hay phụ cấp gì không?',
      a: 'Vì đây là chiến dịch tình nguyện hè do Đoàn phường tổ chức nhằm hỗ trợ cộng đồng và học sinh trên địa bàn, chương trình sẽ không có phụ cấp bằng tiền mặt (lương/trợ cấp ngày). Tuy nhiên, Đoàn phường sẽ hỗ trợ các điều kiện cơ sở vật chất tốt nhất tại trường THCS Tô Hiệu, nước uống tại lớp học và chuẩn bị đầy đủ các trang thiết bị phục vụ giảng dạy cho các em.'
    },
    {
      q: 'Quyền lợi lớn nhất mà mình nhận được khi tham gia Đội là gì ạ?',
      a: 'Bạn sẽ được cấp Chứng nhận đóng góp tích cực cho cộng đồng từ Đoàn thanh niên phường Vĩnh Phúc (điểm cộng lớn cho CV xin việc, học bổng hoặc xét Danh hiệu Sinh viên 5 tốt). Ngoài ra, bạn còn được rèn luyện "thực chiến" các kỹ năng mềm như thuyết trình, quản lý lớp, làm việc nhóm và có cơ hội kết bạn, giao lưu với những người trẻ siêu năng động.'
    },
    {
      q: 'Nếu mình bị trùng lịch bận 1 - 2 buổi trong vòng 4 tuần đó thì có thể xin nghỉ và nhờ bạn khác dạy thay được không?',
      a: 'Được bạn nhé, nhưng cần hạn chế tối đa. Dự án hoạt động theo mô hình nhóm (mỗi lớp sẽ có cả GV chính và Trợ giảng). Nếu bạn có việc đột xuất hoặc lịch thi cử, bạn cần báo trước với Trưởng đội ít nhất 48 tiếng để BTC sắp xếp nhân sự giảng dạy thay thế, đảm bảo tiến độ và chất lượng lớp học cho các em học sinh.'
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Các câu hỏi thường gặp (FAQ)
          </h2>
          <div className="w-24 h-1 bg-brand-cyan mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600">Đội Bình dân học vụ số</p>
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


