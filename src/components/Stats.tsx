import { motion } from 'motion/react';
import { Briefcase, ShieldCheck, Users, Heart } from 'lucide-react';

const STATS = [
  { value: '07+', label: 'Năm Hoạt Động', desc: 'Uy tín và chuyên nghiệp' },
  { value: '1500+', label: 'Dự Án Hoàn Thành', desc: 'Trên toàn quốc' },
  { value: '500+', label: 'Đối Tác Tin Cậy', desc: 'Doanh nghiệp & Tổ chức' },
  { value: '98%', label: 'Hài Lòng', desc: 'Chất lượng phục vụ' },
];

export default function Stats() {
  return (
    <section className="py-6 lg:py-10 bg-navy-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold blur-[150px]"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-8">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-2 lg:p-4 flex flex-col items-center text-center group transition-all"
            >
              <div className="text-xl sm:text-2xl lg:text-5xl font-light text-white mb-1 lg:mb-3 tracking-tight group-hover:text-gold transition-colors leading-none">
                {stat.value}
              </div>
              <div className="text-[7px] sm:text-[9px] lg:text-[12px] uppercase tracking-[0.2em] text-gold/80 font-medium mb-0.5 lg:mb-2 leading-none whitespace-nowrap group-hover:text-gold transition-colors">
                {stat.label}
              </div>
              <div className="hidden lg:block text-[10px] text-white/20 uppercase tracking-widest font-light">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
