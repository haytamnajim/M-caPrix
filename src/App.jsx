import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <div className="flex flex-col min-h-screen relative w-full bg-background selection:bg-primary/30">
      <Navbar />

      <main className="flex-grow pt-[4rem] relative overflow-hidden">
        <AnimatePresence mode="wait">
          {!showCatalog ? (
            <motion.section 
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="relative min-h-screen flex flex-col items-center justify-center pt-20"
            >
              {/* Background with cinematic overlay */}
              <div className="absolute inset-0 bg-cinematic z-0 scale-105" />
              
              {/* Subtle mesh gradient glow */}
              <div className="mesh-gradient opacity-60" />

              <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-xl mb-8">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">Première plateforme de pièces auto</span>
                  </div>

                  <h1 className="font-inter text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-8">
                    Le bon prix, <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-glow">
                      la bonne pièce
                    </span>
                  </h1>

                  <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted leading-relaxed mb-12">
                    Expertise technique et performance pour votre véhicule. 
                    Commandez vos pièces détachées parmi les plus grandes marques mondiales.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <motion.button 
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setShowCatalog(true)}
                      className="group relative px-10 py-5 bg-primary text-white rounded-2xl font-bold text-lg transition-all shadow-blue-glow flex items-center gap-3 btn-glow"
                    >
                      <span>Voir le catalogue</span>
                      <span className="material-symbols-outlined transition-transform group-hover:translate-x-1" data-icon="arrow_forward">arrow_forward</span>
                    </motion.button>
                    
                    <motion.button 
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-bold text-lg backdrop-blur-xl border border-white/5 transition-all"
                    >
                      Explorer les catégories
                    </motion.button>
                  </div>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="mt-32 pt-12 border-t border-white/5"
                >
                  <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-muted mb-10">Qualité Certifiée par l'Industrie</p>
                  <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 grayscale contrast-125">
                    {['BOSCH', 'BREMBO', 'VALEO', 'MICHELIN', 'CASTROL'].map((brand) => (
                      <span key={brand} className="text-xl font-black tracking-tighter text-white">{brand}</span>
                    ))}
                  </div>
                </motion.div>

                {/* Guarantees */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-5xl mx-auto">
                    {[
                      { icon: 'verified', label: 'Certifié OEM' },
                      { icon: 'local_shipping', label: 'Livraison 24h' },
                      { icon: 'support_agent', label: 'Support Expert' },
                      { icon: 'security', label: 'Garantie 2 ans' }
                    ].map((item, i) => (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + (i * 0.1) }}
                        key={i} 
                        className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm"
                      >
                        <span className="material-symbols-outlined text-primary text-xl">{item.icon}</span>
                        <span className="text-[10px] font-bold tracking-widest uppercase text-textMain">{item.label}</span>
                      </motion.div>
                    ))}
                </div>
              </div>
            </motion.section>
          ) : (
            <motion.section 
              key="catalog"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-7xl mx-auto px-6 py-20"
            >
              {/* Catalog Header */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Catalogue de pièces</h2>
                <div className="flex justify-center w-full max-w-2xl mx-auto">
                  <div className="relative w-full group">
                    <input 
                      type="text" 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl py-5 px-16 text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white/10 transition-all shadow-xl" 
                      placeholder="Chercher une référence, une pièce..." 
                    />
                    <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-primary transition-colors" data-icon="search">search</span>
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary hover:bg-brandBlue text-white px-8 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg">
                      Rechercher
                    </button>
                  </div>
                </div>
              </div>

              {/* Selection Interface */}
              <div className="space-y-12">
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

              {/* Back Button */}
              <button 
                onClick={() => setShowCatalog(false)}
                className="mt-12 text-muted hover:text-primary flex items-center gap-2 font-bold tracking-widest uppercase text-xs transition-colors"
              >
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                Retour à l'accueil
              </button>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
}

export default App;
