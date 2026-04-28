import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import BrandSelector from './components/BrandSelector';
import ModelSelector from './components/ModelSelector';
import PartsTable from './components/PartsTable';
import Footer from './components/Footer';
import { database, brands } from './data';

function App() {
  const [activeBrand, setActiveBrand] = useState(brands[0]);
  const [activeModel, setActiveModel] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showCatalog, setShowCatalog] = useState(false);

  // When brand changes, reset model to the first model of that brand
  useEffect(() => {
    if (activeBrand) {
      const models = Object.keys(database[activeBrand]);
      setActiveModel(models[0]);
    }
  }, [activeBrand]);

  const currentModels = activeBrand ? Object.keys(database[activeBrand]) : [];
  const currentParts = (activeBrand && activeModel && database[activeBrand]?.[activeModel]) || [];

  return (
    <div className="flex flex-col min-h-screen relative w-full">
      <Navbar />

      <main className="flex-grow pt-[4rem] relative overflow-hidden bg-cinematic">
        {!showCatalog ? (
          <>
            {/* Landing Page Content */}
            <div className="relative z-10 w-full mb-12 py-20 px-margin text-center min-h-[60vh] flex flex-col items-center justify-center">
              <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-8 backdrop-blur-md animate-fade-in-up">
                Première plateforme de pièces auto
              </div>
              <h1 className="font-h1 text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-lg mb-6 max-w-4xl mx-auto leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Le bon prix, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">la bonne pièce</span>
              </h1>
              <p className="font-body-lg text-lg text-on-surface-variant max-w-2xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Expertise technique et performance pour votre véhicule. Commandez vos pièces détachées parmi les plus grandes marques mondiales avec une qualité premium garantie.
              </p>

              <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <button 
                  onClick={() => setShowCatalog(true)}
                  className="group relative px-8 py-4 bg-primary text-white rounded-full font-button text-lg transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] hover:-translate-y-1 flex items-center gap-3 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                  <span className="relative z-10 font-bold">Voir le catalogue</span>
                  <span className="material-symbols-outlined relative z-10 transition-transform duration-300 group-hover:translate-x-2" data-icon="arrow_forward">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Technical Excellence Section from Home */}
            <div className="relative w-full z-10 py-20 mt-12 mb-12 before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.05),transparent_50%)] border-t border-white/5">
              <div className="max-w-7xl mx-auto px-margin grid md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-6 md:col-start-1 space-y-8 animate-fade-in-up">
                  <div className="space-y-4">
                    <span className="text-muted text-[11px] font-bold tracking-[0.2em] uppercase">Standards de Précision</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                      L'assurance qualité MécaPrix <br className="hidden lg:block"/>pour chaque kilomètre.
                    </h2>
                    <p className="text-muted text-base md:text-lg max-w-lg leading-relaxed">
                      Nos pièces sont sélectionnées selon des critères rigoureux de durabilité et de compatibilité. Chaque commande bénéficie de notre expertise technique intégrée.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {[
                      { icon: 'verified', title: 'Certifié OEM', desc: "Qualité d'origine garantie" },
                      { icon: 'support_agent', title: 'Expert en ligne', desc: 'Accompagnement 7j/7' },
                      { icon: 'local_shipping', title: 'Livraison 24h', desc: 'Partout au Maroc' },
                      { icon: 'security', title: 'Garantie 2 ans', desc: 'Achat sans compromis' }
                    ].map((feature, i) => (
                      <div key={i} className="bg-card/80 backdrop-blur-md rounded-2xl p-5 border border-white/5 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_8px_25px_rgba(34,211,238,0.1)] group flex flex-col gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40 transition-colors">
                          <span className="material-symbols-outlined text-primary group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all" data-icon={feature.icon}>{feature.icon}</span>
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-sm mb-1">{feature.title}</h4>
                          <p className="text-muted text-xs">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <div className="rounded-3xl overflow-hidden bg-card p-2 shadow-[0_0_40px_rgba(34,211,238,0.08)] ring-1 ring-white/10 relative group transform transition-all duration-500 hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none"></div>
                    <div className="bg-background rounded-2xl h-[350px] sm:h-[450px] lg:h-[550px] w-full flex items-center justify-center overflow-hidden relative">
                      <img alt="Engineering" className="w-full h-full object-cover opacity-80 mix-blend-lighten transition-transform duration-1000 group-hover:scale-110" src="/engine.png"/>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-transparent to-transparent opacity-80"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Catalog View Content */}
            <div className="relative z-10 w-full mb-12 pt-8 pb-4 px-margin text-center animate-fade-in-up">
              <h2 className="font-h1 text-3xl md:text-4xl text-white mb-8">
                Catalogue de pièces
              </h2>
              <div className="flex justify-center w-full max-w-2xl mx-auto">
                <div className="relative w-full">
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-full py-4 px-14 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white/10 focus:border-primary/50 transition-all outline-none" 
                    placeholder="Chercher une référence, une pièce..." 
                  />
                  <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-white/50" data-icon="search">search</span>
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary hover:bg-accent text-white px-6 py-2 rounded-full font-button text-sm transition-all shadow-lg hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                    Rechercher
                  </button>
                </div>
              </div>
            </div>

            {/* Filters and Table */}
            <div className="max-w-7xl mx-auto px-margin relative z-10 w-full mb-24 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <BrandSelector 
                brands={brands} 
                activeBrand={activeBrand} 
                setActiveBrand={setActiveBrand} 
              />

              <ModelSelector 
                models={currentModels} 
                activeModel={activeModel} 
                setActiveModel={setActiveModel} 
              />

              <PartsTable 
                parts={currentParts} 
                searchQuery={searchQuery} 
              />
            </div>
          </>
        )}
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
}

export default App;
