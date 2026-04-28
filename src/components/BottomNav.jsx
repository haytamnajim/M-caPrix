export default function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-6 left-6 right-6 z-[100] flex justify-around items-center py-4 bg-background/60 backdrop-blur-3xl border border-white/5 rounded-[2rem] shadow-2xl">
      <button className="flex flex-col items-center justify-center text-primary group">
        <span className="material-symbols-outlined text-2xl group-active:scale-90 transition-transform" data-icon="menu_book">menu_book</span>
        <span className="text-[8px] font-black tracking-widest uppercase mt-1">Catalogue</span>
      </button>
      <button className="flex flex-col items-center justify-center text-muted hover:text-white transition-colors group">
        <span className="material-symbols-outlined text-2xl group-active:scale-90 transition-transform" data-icon="search">search</span>
        <span className="text-[8px] font-black tracking-widest uppercase mt-1">Recherche</span>
      </button>
      <button className="flex flex-col items-center justify-center text-muted hover:text-white transition-colors group">
        <span className="material-symbols-outlined text-2xl group-active:scale-90 transition-transform" data-icon="person">person</span>
        <span className="text-[8px] font-black tracking-widest uppercase mt-1">Compte</span>
      </button>
    </nav>
  );
}
