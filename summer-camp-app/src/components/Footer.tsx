import React from 'react';
import { Shield, MapPin, Phone, Globe } from 'lucide-react';

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
                  Đội Bình dân học vụ số
                </span>
                <span className="text-brand-cyan text-sm font-medium leading-tight">
                  Phường Vĩnh Phúc
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Dự án giáo dục nâng cao năng lực số dành cho học sinh THCS, do Đội Bình dân học vụ số phường Vĩnh Phúc tổ chức.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Chương trình</h4>
            <ul className="space-y-3">
              <li><a href="#loi-ich" className="text-slate-400 hover:text-brand-cyan transition-colors text-sm">Tại sao nên tham gia?</a></li>
              <li><a href="#tuyen-giang-vien" className="text-slate-400 hover:text-brand-cyan transition-colors text-sm">Vị trí tuyển dụng</a></li>
              <li><a href="#ung-tuyen" className="text-slate-400 hover:text-brand-cyan transition-colors text-sm">Cách thức ứng tuyển</a></li>
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
                  <p className="text-slate-300 text-sm font-medium">Địa điểm giảng dạy</p>
                  <p className="text-slate-400 text-sm">Trường THCS Tô Hiệu</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-brand-cyan mt-0.5" />
                <div>
                  <p className="text-slate-300 text-sm font-medium">Fanpage</p>
                  <a href="https://www.facebook.com/luom.lvcd" target="_blank" rel="noopener noreferrer" className="text-slate-400 text-sm hover:text-brand-cyan transition-colors">Lượm - Giáo dục vì Cộng đồng</a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:col-span-2">
                <Phone className="w-5 h-5 text-brand-yellow mt-0.5" />
                <div>
                  <p className="text-slate-300 text-sm font-medium">Hotline / Zalo</p>
                  <p className="text-slate-400 text-sm">0968.397.725 (gặp Chị Trần Trà My)</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800 text-center md:flex md:justify-between md:text-left">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Lượm - Giáo dục vì Cộng đồng. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
