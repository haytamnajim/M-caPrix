import { SiAudi, SiBmw, SiRenault, SiVolkswagen, SiFord } from 'react-icons/si';
import { TbBrandMercedes } from 'react-icons/tb';

const getBrandIcon = (brand) => {
  switch (brand) {
    case "Audi": return <SiAudi className="w-10 h-10" />;
    case "BMW": return <SiBmw className="w-10 h-10" />;
    case "Mercedes-Benz": return <TbBrandMercedes className="w-12 h-12" strokeWidth={1.5} />;
    case "Renault": return <SiRenault className="w-10 h-10" />;
    case "Volkswagen": return <SiVolkswagen className="w-10 h-10" />;
    case "Ford": return <SiFord className="w-10 h-10" />;
    default: return null;
  }
};

export default function BrandSelector({ brands, activeBrand, setActiveBrand }) {
  return (
    <section className="mb-12 relative z-10 animate-fade-in-up">
      <div className="flex items-end justify-between border-b border-white/10 pb-4 mb-6">
        <h3 className="font-h3 text-xl font-bold text-white tracking-wide">Marques Premium</h3>
        <button className="text-sm font-medium text-primary hover:text-accent transition-colors duration-200">Voir tout le catalogue</button>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {brands.map((brand, idx) => {
          const isActive = activeBrand === brand;
          return (
            <button
              key={brand}
              onClick={() => setActiveBrand(brand)}
              style={{ animationDelay: `${idx * 0.05}s` }}
              className={`glass-card p-4 rounded-xl flex flex-col items-center justify-center gap-3 group transition-all duration-300 transform animate-fade-in-up
                ${isActive 
                  ? 'border-accent bg-card ring-1 ring-accent drop-shadow-[0_0_12px_rgba(34,211,238,0.4)] scale-105' 
                  : 'hover:scale-[1.02]'}`}
            >
               <div className={`transition-all duration-300 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>
                 {getBrandIcon(brand)}
               </div>
              <span className={`text-[11px] font-bold uppercase tracking-wider transition-colors duration-300 ${isActive ? 'text-accent' : 'text-muted group-hover:text-textMain'}`}>
                {brand === "Mercedes-Benz" ? "Mercedes" : (brand === "Volkswagen" ? "VW" : brand)}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
