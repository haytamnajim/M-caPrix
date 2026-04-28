import { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function PartsTable({ parts, searchQuery }) {
  const [selectedPartForOrder, setSelectedPartForOrder] = useState(null);

  const filteredParts = parts.filter(part => 
    part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    part.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredParts.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card rounded-2xl p-12 text-center text-muted col-span-full"
      >
        <span className="material-symbols-outlined text-4xl mb-3 block opacity-50" data-icon="search_off">search_off</span>
        Aucune pièce trouvée pour "{searchQuery}".
      </motion.div>
    );
  }

  return (
    <section className="mb-12 relative z-10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white tracking-widest uppercase flex items-center gap-2">
          <span className="w-1 h-6 bg-primary rounded-full"></span>
          Pièces Compatibles
        </h3>
      </div>

      <div className="flex flex-col gap-4">
        {filteredParts.map((part, idx) => {
          const isSurCommande = part.price > 3000;
          const statusColor = isSurCommande ? 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]' : 'bg-success shadow-[0_0_8px_rgba(16,185,129,0.6)]';
          const statusText = isSurCommande ? 'Sur commande' : 'En stock';
          
          let category = part.category;
          let icon = 'build';
          if (part.name.includes("Frein") || part.name.includes("Plaquette") || part.name.includes("Disque")) { category = "Freinage"; icon = "settings_input_component" }
          else if (part.name.includes("Filtre") || part.name.includes("Huile") || part.name.includes("Eau")) { category = "Entretien"; icon = "opacity" }
          else if (part.name.includes("Alternateur") || part.name.includes("Batterie") || part.name.includes("Démarreur")) { category = "Électrique"; icon = "bolt" }
          else if (part.name.includes("Amortisseur") || part.name.includes("Triangle") || part.name.includes("Biellette") || part.name.includes("Rotule")) { category = "Suspension"; icon = "compress" }

          return (
            <motion.div 
              key={part.id} 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.01, x: 5 }}
              className="glass p-5 rounded-3xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 transition-all duration-300 border border-white/5 hover:border-primary/20 hover:bg-white/5 group shadow-lg"
            >
              <div className="flex items-center gap-5 flex-1">
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-surface border border-white/5 flex items-center justify-center p-2 group-hover:border-primary/20 transition-all duration-300">
                  <span className="material-symbols-outlined text-muted group-hover:text-primary group-hover:scale-110 transition-all text-2xl" data-icon={icon}>{icon}</span>
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <p className="font-bold text-textMain truncate text-xl group-hover:text-white transition-colors">{part.name}</p>
                  <div className="flex items-center gap-4 mt-1.5 text-[10px] font-bold tracking-widest uppercase">
                    <span className="text-muted bg-white/5 px-2.5 py-1 rounded-lg">OEM: {Math.floor(Math.random() * 9000000) + 1000000}</span>
                    <span className="text-primary">{category}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-10 sm:w-auto w-full border-t border-white/5 sm:border-t-0 pt-4 sm:pt-0">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${statusColor}`}></div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-muted">{statusText}</span>
                </div>
                
                <div className="text-right">
                  <p className="font-black text-2xl text-white group-hover:text-primary transition-colors">
                    {part.price.toLocaleString('fr-FR')} <span className="text-xs font-medium text-muted">MAD</span>
                  </p>
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedPartForOrder(part)}
                  className="bg-primary hover:bg-brandBlue text-white px-8 py-3.5 rounded-2xl font-bold text-xs tracking-widest uppercase transition-all shadow-blue-glow flex items-center gap-2 btn-glow"
                >
                  <span className="material-symbols-outlined text-lg">shopping_bag</span>
                  <span className="hidden sm:inline">Commander</span>
                </motion.button>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Checkout Form Modal */}
      <AnimatePresence>
        {selectedPartForOrder && document.body && createPortal(
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
          >
            <div 
              className="absolute inset-0 bg-background/90 backdrop-blur-md"
              onClick={() => setSelectedPartForOrder(null)}
            ></div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-surface border border-white/10 rounded-[2.5rem] p-10 w-full max-w-md relative z-10 shadow-2xl"
            >
              <button 
                className="absolute top-8 right-8 text-muted hover:text-white transition-colors"
                onClick={() => setSelectedPartForOrder(null)}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
              
              <h3 className="text-3xl font-black text-white mb-2 tracking-tight">Finaliser la commande</h3>
              <p className="text-sm text-muted mb-10">
                {selectedPartForOrder.name} • <span className="text-primary font-bold">{selectedPartForOrder.price.toLocaleString('fr-FR')} MAD</span>
              </p>

              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                alert("Commande transmise avec succès ! Nos experts vous rappelleront sous peu."); 
                setSelectedPartForOrder(null);
              }}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted ml-1">Nom</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/5 rounded-2xl px-5 py-4 text-white focus:border-primary/30 outline-none transition-all placeholder:text-muted/30" placeholder="Nom" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted ml-1">Prénom</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/5 rounded-2xl px-5 py-4 text-white focus:border-primary/30 outline-none transition-all placeholder:text-muted/30" placeholder="Prénom" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted ml-1">Téléphone</label>
                  <input required type="tel" className="w-full bg-white/5 border border-white/5 rounded-2xl px-5 py-4 text-white focus:border-primary/30 outline-none transition-all placeholder:text-muted/30" placeholder="06 XX XX XX XX" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted ml-1">Adresse de livraison</label>
                  <textarea required rows="3" className="w-full bg-white/5 border border-white/5 rounded-2xl px-5 py-4 text-white focus:border-primary/30 outline-none transition-all placeholder:text-muted/30 resize-none" placeholder="Adresse complète..."></textarea>
                </div>

                <div className="flex flex-col gap-3 pt-6">
                  <button 
                    type="submit" 
                    className="w-full py-5 rounded-2xl font-black tracking-[0.1em] uppercase text-xs bg-primary hover:bg-brandBlue text-white shadow-blue-glow transition-all transform hover:-translate-y-1 btn-glow"
                  >
                    Confirmer l'achat
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setSelectedPartForOrder(null)}
                    className="w-full py-5 rounded-2xl font-bold tracking-[0.1em] uppercase text-[10px] text-muted hover:text-white transition-colors"
                  >
                    Revenir en arrière
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>,
          document.body
        )}
      </AnimatePresence>
    </section>
  );
}
