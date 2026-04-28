import { useState } from 'react';

export default function PartsTable({ parts, searchQuery }) {
  const [selectedPartForOrder, setSelectedPartForOrder] = useState(null);

  const filteredParts = parts.filter(part => 
    part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    part.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case 'freinage': return 'settings_input_component';
      case 'entretien': return 'opacity';
      case 'électrique': return 'bolt';
      case 'suspension': return 'compress';
      default: return 'build';
    }
  };

  if (filteredParts.length === 0) {
    return (
      <div className="glass-card rounded-2xl p-12 text-center text-muted col-span-full">
        <span className="material-symbols-outlined text-4xl mb-3 block opacity-50" data-icon="search_off">search_off</span>
        Aucune pièce trouvée pour "{searchQuery}".
      </div>
    );
  }

  return (
    <section className="mb-12 relative z-10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-h3 text-xl font-bold text-white tracking-wide">Pièces Compatibles</h3>
        <div className="flex gap-2">
          <button className="glass-card p-2 rounded-lg text-muted hover:text-accent transition-colors duration-200">
            <span className="material-symbols-outlined" data-icon="filter_list">filter_list</span>
          </button>
          <button className="glass-card p-2 rounded-lg text-muted hover:text-accent transition-colors duration-200">
            <span className="material-symbols-outlined" data-icon="sort">sort</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
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
            <div 
              key={part.id} 
              style={{ animationDelay: `${idx * 0.03}s` }}
              className="glass p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-200 transform hover:scale-[1.01] hover:bg-card hover:border-primary/40 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] group animate-fade-in-up"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="w-14 h-14 shrink-0 rounded-xl bg-background border border-white/5 flex items-center justify-center p-2 group-hover:border-primary/30 transition-colors duration-300">
                  <span className="material-symbols-outlined text-muted group-hover:text-primary transition-colors duration-300" data-icon={icon}>{icon}</span>
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <p className="font-bold text-textMain truncate text-lg group-hover:text-white transition-colors">{part.name}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <p className="text-xs text-muted font-mono bg-black/20 px-2 py-0.5 rounded-md">OEM: {Math.floor(Math.random() * 9000000) + 1000000}</p>
                    <span className="px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-wider">
                      {category}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-6 sm:w-auto w-full border-t border-white/5 sm:border-t-0 pt-3 sm:pt-0">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${statusColor}`}></div>
                  <span className="text-xs font-medium text-muted">{statusText}</span>
                </div>
                
                <div className="text-right">
                  <p className="font-bold text-xl text-primary drop-shadow-[0_2px_4px_rgba(59,130,246,0.3)]">
                    {part.price.toLocaleString('fr-FR')} <span className="text-sm font-medium text-accent">MAD</span>
                  </p>
                </div>
                
                <button 
                  onClick={() => setSelectedPartForOrder(part)}
                  className="bg-primary hover:bg-accent text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 transform active:scale-95 shadow-[0_4px_14px_rgba(59,130,246,0.25)] hover:shadow-[0_6px_20px_rgba(34,211,238,0.4)] flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                  <span className="hidden sm:inline">Commander</span>
                </button>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <p className="text-xs text-muted font-medium bg-black/20 py-2 px-4 rounded-full border border-white/5">Affichage de {filteredParts.length} résultats</p>
        <div className="flex gap-2">
           <button className="w-10 h-10 flex items-center justify-center glass-card rounded-xl text-muted hover:text-primary disabled:opacity-30 disabled:hover:text-muted transition-colors" disabled>
            <span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary text-white font-bold shadow-[0_0_10px_rgba(59,130,246,0.4)]">1</button>
          <button className="w-10 h-10 flex items-center justify-center glass-card rounded-xl text-muted hover:text-white transition-colors">2</button>
          <button className="w-10 h-10 flex items-center justify-center glass-card rounded-xl text-muted hover:text-white transition-colors">3</button>
          <button className="w-10 h-10 flex items-center justify-center glass-card rounded-xl text-muted hover:text-primary transition-colors">
            <span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
          </button>
        </div>
      </div>

      {/* Checkout Form Modal */}
      {selectedPartForOrder && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedPartForOrder(null)}
          ></div>
          
          {/* Modal Content */}
          <div className="bg-card border border-white/10 rounded-2xl p-6 w-full max-w-md relative z-10 shadow-[0_0_40px_rgba(0,0,0,0.5)] animate-fade-in-up">
            <button 
              className="absolute top-4 right-4 text-muted hover:text-white transition-colors"
              onClick={() => setSelectedPartForOrder(null)}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            
            <h3 className="text-2xl font-bold text-white mb-1">Passer la commande</h3>
            <p className="text-sm text-muted mb-6 object-truncate pr-8">
              {selectedPartForOrder.name} - <span className="text-accent font-bold">{selectedPartForOrder.price.toLocaleString('fr-FR')} MAD</span>
            </p>

            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              alert("Commande confirmée !"); 
              setSelectedPartForOrder(null);
            }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-muted ml-1">Nom</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:border-primary/50 focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-white/30" placeholder="Votre nom" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-muted ml-1">Prénom</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:border-primary/50 focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-white/30" placeholder="Votre prénom" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-muted ml-1">Numéro de téléphone</label>
                <input required type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:border-primary/50 focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-white/30" placeholder="06 XX XX XX XX" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-muted ml-1">Adresse de livraison</label>
                <textarea required rows="2" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:border-primary/50 focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-white/30 resize-none" placeholder="Votre adresse complète..."></textarea>
              </div>

              <div className="flex gap-3 pt-4 border-t border-white/10 mt-6">
                <button 
                  type="button" 
                  onClick={() => setSelectedPartForOrder(null)}
                  className="flex-1 py-3 px-4 rounded-xl font-bold bg-white/5 hover:bg-white/10 text-white transition-colors"
                >
                  Annuler
                </button>
                <button 
                  type="submit" 
                  className="flex-1 py-3 px-4 rounded-xl font-bold bg-primary hover:bg-accent text-white shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all transform hover:-translate-y-0.5"
                >
                  Confirmer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
