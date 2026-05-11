import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'vi' | 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<Language, Record<string, string>> = {
  vi: {
    'nav.solutions': 'Giải Pháp',
    'nav.products': 'Sản Phẩm',
    'nav.partners': 'Đối Tác',
    'nav.about': 'Về Chúng Tôi',
    'nav.support': 'Hỗ Trợ Kỹ Thuật',
    'nav.login': 'Đăng Nhập',
    'nav.hotline': 'Hotline',
    'nav.solutions.camera': 'Camera AI Giám sát',
    'nav.solutions.camera.desc': 'Nhận diện khuôn mặt, cảnh báo thông minh.',
    'nav.solutions.internet': 'Hạ tầng Internet',
    'nav.solutions.internet.desc': 'Wifi doanh nghiệp, cáp quang tốc độ cao.',
    'nav.solutions.server': 'Giải pháp Máy chủ',
    'nav.solutions.server.desc': 'Lưu trữ dữ liệu an toàn, hiệu suất tối đa.',
    'nav.solutions.office': 'Thiết bị văn phòng',
    'nav.solutions.office.desc': 'Thiết bị hội họp trực tuyến, máy in, máy tính, laptop.',
    'nav.products.camera': 'Camera & Đầu ghi',
    'nav.products.camera.desc': 'Hikvision, Dahua, KBVision chính hãng.',
    'nav.products.computer': 'Máy tính & Phụ kiện',
    'nav.products.computer.desc': 'Laptop Dell, HP, Macbook, PC Custom.',
    'nav.products.printer': 'Máy in & Thiết bị VP',
    'nav.products.printer.desc': 'Máy in Canon, HP, máy scan, máy photocopy.',
    'nav.products.network': 'Thiết bị Mạng',
    'nav.products.network.desc': 'Router, Switch, Access Point chuyên dụng.',
    'hero.tagline': 'Giải Pháp IT Toàn Diện Cho Doanh Nghiệp',
    'hero.title': 'Máy Tính Chiến Linh',
    'hero.title.suffix': 'Công Nghệ Cho Sự Phát Triển',
    'hero.title.camera': '- Giải Pháp <span class="text-gold italic uppercase">Camera AI</span>',
    'hero.title.internet': '- Hạ Tầng <span class="text-gold italic uppercase">Internet</span> Doanh Nghiệp',
    'hero.title.office': '- <span class="text-gold italic uppercase">Thiết Bị</span> Văn Phòng',
    'hero.description': 'Chúng tôi tư vấn, cung cấp và vận hành hệ sinh thái IT đồng bộ để doanh nghiệp của bạn tập trung vào tăng trưởng, không phải vào sự cố kỹ thuật.',
    'hero.cta': 'Khám Phá Ngay',
    'stats.years': 'Năm Hoạt Động',
    'stats.years.desc': 'Uy tín và chuyên nghiệp',
    'stats.projects': 'Dự Án',
    'stats.projects.desc': 'Trên toàn quốc',
    'stats.partners': 'Đối Tác',
    'stats.partners.desc': 'Doanh nghiệp & Tổ chức',
    'stats.satisfaction': 'Hài Lòng',
    'stats.satisfaction.desc': 'Chất lượng phục vụ',
    'solutions.title': 'Giải Pháp Cốt Lõi',
    'solutions.tagline': 'Lĩnh Vực Hoạt Động',
    'solutions.cta.tagline': 'Sẵn sàng bắt đầu?',
    'solutions.cta.title': 'Nhận tư vấn <span class="text-gold italic">miễn phí</span> từ chuyên gia',
    'solutions.cta.desc': 'Khảo sát thực địa, đề xuất giải pháp và báo giá chi tiết — hoàn toàn không ràng buộc.',
    'solutions.cta.button': 'ĐỂ LẠI THÔNG TIN',
    'solutions.support': 'Hỗ Trợ Kỹ Thuật',
    'solutions.hotline': 'Hotline Tư Vấn',
    'products.title': 'Trang thiết bị chính hãng',
    'products.tagline': 'Hệ sinh thái thiết bị',
    'partners.title': 'Đối Tác Tin Cậy',
    'partners.tagline': 'Mạng Lưới Kết Nối',
    'about.title': 'Hỗ trợ doanh nghiệp <span class="text-gold italic">phát triển</span>',
    'about.description': 'Từ năm 2019, MÁY TÍNH CHIẾN LINH đã đồng hành cùng hơn 1.500 doanh nghiệp, từ tổ chức lớn nhỏ đến nhà máy sản xuất quy mô lớn.',
    'about.philosophy': '"Triết lý của chúng tôi rất đơn giản: công nghệ phải vô hình — nó phục vụ con người, không làm gián đoạn công việc, và luôn ở đó khi bạn cần."',
    'about.more': 'Tìm hiểu thêm về tầm nhìn',
    'footer.description': 'Đơn vị tiên phong trong lĩnh vực cung cấp thiết bị máy tính, tích hợp AI vào giám sát an ninh và hạ tầng mạng thông minh.',
    'footer.contact': 'Liên Hệ',
    'footer.address': 'Địa chỉ: Số 123 Đường Công Nghệ, TP. Hà Nội',
    'footer.rights': '© 2026 MÁY TÍNH CHIẾN LINH. Bảo lưu mọi quyền.',
    'lang.vi': 'Tiếng Việt',
    'lang.en': 'English',
    'lang.zh': '简体中文'
  },
  en: {
    'nav.solutions': 'Solutions',
    'nav.products': 'Products',
    'nav.partners': 'Partners',
    'nav.about': 'About Us',
    'nav.support': 'Technical Support',
    'nav.login': 'Log In',
    'nav.hotline': 'Hotline',
    'nav.solutions.camera': 'AI Surveillance Camera',
    'nav.solutions.camera.desc': 'Facial recognition, smart alerts.',
    'nav.solutions.internet': 'Internet Infrastructure',
    'nav.solutions.internet.desc': 'Enterprise Wifi, high-speed fiber.',
    'nav.solutions.server': 'Server Solutions',
    'nav.solutions.server.desc': 'Secure data storage, maximum performance.',
    'nav.solutions.office': 'Smart Office',
    'nav.solutions.office.desc': 'Online meeting equipment, central control.',
    'nav.products.camera': 'Camera & Recorder',
    'nav.products.camera.desc': 'Genuine Hikvision, Dahua, KBVision.',
    'nav.products.computer': 'Computers & Accessories',
    'nav.products.computer.desc': 'Dell, HP Laptops, Macbook, PC Custom.',
    'nav.products.printer': 'Printers & Off. Equipment',
    'nav.products.printer.desc': 'Canon, HP printers, scanners, photocopiers.',
    'nav.products.network': 'Network Equipment',
    'nav.products.network.desc': 'Dedicated Router, Switch, Access Point.',
    'hero.tagline': 'Comprehensive IT Solutions for Business',
    'hero.title': 'Chien Linh Computer',
    'hero.title.suffix': 'Technology for Growth',
    'hero.title.camera': '- AI <span class="text-gold italic uppercase">Camera</span> Solutions',
    'hero.title.internet': '- Enterprise <span class="text-gold italic uppercase">Internet</span> Infrastructure',
    'hero.title.office': '- Office <span class="text-gold italic uppercase">Equipment</span>',
    'hero.description': 'We advise, provide, and operate a synchronous IT ecosystem so your business focuses on growth, not technical incidents.',
    'hero.cta': 'Explore Now',
    'stats.years': 'Years of Operation',
    'stats.years.desc': 'Reputation and Professionalism',
    'stats.projects': 'Projects',
    'stats.projects.desc': 'Nationwide',
    'stats.partners': 'Partners',
    'stats.partners.desc': 'Businesses & Organizations',
    'stats.satisfaction': 'Satisfaction',
    'stats.satisfaction.desc': 'Service Quality',
    'solutions.title': 'Core Solutions',
    'solutions.tagline': 'Our Areas',
    'solutions.cta.tagline': 'Ready to start?',
    'solutions.cta.title': 'Get <span class="text-gold italic">free</span> expert advice',
    'solutions.cta.desc': 'Site survey, solution proposal and detailed quote — completely non-binding.',
    'solutions.cta.button': 'LEAVE INFORMATION',
    'solutions.support': 'Technical Support',
    'solutions.hotline': 'Consulation Hotline',
    'products.title': 'Genuine Equipment',
    'products.tagline': 'Equipment Ecosystem',
    'partners.title': 'Trusted Partners',
    'partners.tagline': 'Network Connection',
    'about.title': 'Empowering business <span class="text-gold italic">growth</span>',
    'about.description': 'Since 2019, CHIEN LINH COMPUTER has accompanied more than 1,500 businesses, from small organizations to large-scale manufacturing plants.',
    'about.philosophy': '"Our philosophy is simple: technology should be invisible — it serves people, does not interrupt work, and is always there when you need it."',
    'about.more': 'Learn more about our vision',
    'footer.description': 'Pioneer in providing computer equipment, integrating AI into security surveillance and smart network infrastructure.',
    'footer.contact': 'Contact Us',
    'footer.address': 'Address: 123 Technology Road, Hanoi City',
    'footer.rights': '© 2026 CHIEN LINH COMPUTER. All rights reserved.',
    'lang.vi': 'Vietnamese',
    'lang.en': 'English',
    'lang.zh': 'Chinese (Simplified)'
  },
  zh: {
    'nav.solutions': '解决方案',
    'nav.products': '产品展示',
    'nav.partners': '合作伙伴',
    'nav.about': '关于我们',
    'nav.support': '技术支持',
    'nav.login': '登录',
    'nav.hotline': '热线',
    'nav.solutions.camera': 'AI 监控摄像头',
    'nav.solutions.camera.desc': '人脸识别、智能预警。',
    'nav.solutions.internet': '网络基础设施',
    'nav.solutions.internet.desc': '企业级 Wifi、高速光纤。',
    'nav.solutions.server': '服务器解决方案',
    'nav.solutions.server.desc': '安全数据存储，最高性能。',
    'nav.solutions.office': '智能办公室',
    'nav.solutions.office.desc': '在线会议设备、中央控制。',
    'nav.products.camera': '摄像头与录像机',
    'nav.products.camera.desc': '原装海康威视、大华、KBVision。',
    'nav.products.computer': '电脑及配件',
    'nav.products.computer.desc': '戴尔、惠普笔记本电脑、Macbook、定制 PC。',
    'nav.products.printer': '打印机及办公设备',
    'nav.products.printer.desc': '佳能、惠普打印机、扫描仪、复印机。',
    'nav.products.network': '网络设备',
    'nav.products.network.desc': '专用路由器、交换机、接入点。',
    'hero.tagline': '全面的企业 IT 解决方案',
    'hero.title': '战士灵计算机',
    'hero.title.suffix': '助力发展的技术',
    'hero.title.camera': '- AI <span class="text-gold italic uppercase">摄像机</span>解决方案',
    'hero.title.internet': '- 企业<span class="text-gold italic uppercase">互联网</span>基础设施',
    'hero.title.office': '- <span class="text-gold italic uppercase">办公设备</span>',
    'hero.description': '我们提供建议、供应并运营同步的 IT 生态系统，让您的企业专注于增长，而不是技术故障。',
    'hero.cta': '立即探索',
    'stats.years': '运营年数',
    'stats.years.desc': '声誉与专业',
    'stats.projects': '成功项目',
    'stats.projects.desc': '遍布全国',
    'stats.partners': '合作伙伴',
    'stats.partners.desc': '企业与组织',
    'stats.satisfaction': '客户满意度',
    'stats.satisfaction.desc': '服务质量',
    'solutions.title': '核心解决方案',
    'solutions.tagline': '服务领域',
    'solutions.cta.tagline': '准备好开始了？',
    'solutions.cta.title': '获取专家的<span class="text-gold italic">免费</span>建议',
    'solutions.cta.desc': '实地考察、方案建议和详细报价——完全无约束力。',
    'solutions.cta.button': '留下信息',
    'solutions.support': '技术支持',
    'solutions.hotline': '咨询热线',
    'products.title': '原装正品设备',
    'products.tagline': '设备生态系统',
    'partners.title': '合作伙伴',
    'partners.tagline': '网络连接',
    'about.title': '助力企业<span class="text-gold italic">成长</span>',
    'about.description': '自 2019 年以来，战士灵计算机已陪伴超过 1,500 家企业，从小型机构到大型生产工厂。',
    'about.philosophy': '“我们的理念很简单：技术应该是无形的——它服务于人，不干扰工作，并在您需要时随时待命。”',
    'about.more': '了解更多关于我们的愿景',
    'footer.description': '提供计算机设备、将人工智能集成到安全监控和智能网络基础设施方面的先驱。',
    'footer.contact': '联系我们',
    'footer.address': '地址：河内市科技路 123 号',
    'footer.rights': '© 2026 战士灵计算机。保留所有权利。',
    'lang.vi': '越南语',
    'lang.en': '英语',
    'lang.zh': '简体中文'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'vi';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
