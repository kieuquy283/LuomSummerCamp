import React from 'react';
import { Shield, MapPin, Calendar, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center flex-shrink-0 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-yellow/10 border border-brand-yellow/20 mr-3">
                <Shield className="w-6 h-6 text-brand-yellow" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight tracking-wide">
                  AI Smart & Safe
                </span>
                <span className="text-brand-cyan text-sm font-medium leading-tight">
                  Summer Camp
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Trại hè giúp học sinh khám phá Trí tuệ nhân tạo và hình thành kỹ năng an toàn thông tin trong môi trường số.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Chương trình</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-brand-cyan transition-colors text-sm">Giới thiệu</a></li>
              <li><a href="#loi-ich" className="text-slate-400 hover:text-brand-cyan transition-colors text-sm">Lợi ích tham gia</a></li>
              <li><a href="#chuong-trinh" className="text-slate-400 hover:text-brand-cyan transition-colors text-sm">Nội dung 4 tuần</a></li>
              <li><a href="#faq" className="text-slate-400 hover:text-brand-cyan transition-colors text-sm">Câu hỏi thường gặp</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Thông tin liên hệ</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-electric mt-0.5" />
                <div>
                  <p className="text-slate-300 text-sm font-medium">Địa điểm</p>
                  <p className="text-slate-400 text-sm">Trường Tiểu học Tô Hiệu</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-brand-cyan mt-0.5" />
                <div>
                  <p className="text-slate-300 text-sm font-medium">Thời gian</p>
                  <p className="text-slate-400 text-sm">Bắt đầu từ giữa tháng 6</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-yellow mt-0.5" />
                <div>
                  <p className="text-slate-300 text-sm font-medium">Email</p>
                  <p className="text-slate-400 text-sm">summercamp@example.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-green-400 mt-0.5" />
                <div>
                  <p className="text-slate-300 text-sm font-medium">Hotline</p>
                  <p className="text-slate-400 text-sm">0123 456 789</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800 text-center md:flex md:justify-between md:text-left">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} AI Smart & Safe Summer Camp. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 space-x-4 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors">Chính sách bảo mật</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Điều khoản dịch vụ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
