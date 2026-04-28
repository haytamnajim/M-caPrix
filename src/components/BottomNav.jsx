export default function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-4 pt-2 bg-slate-950/80 backdrop-blur-xl border-t border-white/10 shadow-2xl">
      <button className="flex flex-col items-center justify-center text-blue-500 bg-blue-500/10 rounded-2xl p-2 px-4 transition-transform active:scale-90">
        <span className="material-symbols-outlined" data-icon="menu_book">menu_book</span>
        <span className="font-inter text-[10px] font-medium mt-1">Catalogue</span>
      </button>
      <button className="flex flex-col items-center justify-center text-slate-400 p-2 hover:text-blue-400 transition-transform active:scale-90">
        <span className="material-symbols-outlined" data-icon="search">search</span>
        <span className="font-inter text-[10px] font-medium mt-1">Recherche</span>
      </button>
      <button className="flex flex-col items-center justify-center text-slate-400 p-2 hover:text-blue-400 transition-transform active:scale-90">
        <span className="material-symbols-outlined" data-icon="favorite">favorite</span>
        <span className="font-inter text-[10px] font-medium mt-1">Favoris</span>
      </button>
      <button className="flex flex-col items-center justify-center text-slate-400 p-2 hover:text-blue-400 transition-transform active:scale-90">
        <span className="material-symbols-outlined" data-icon="person">person</span>
        <span className="font-inter text-[10px] font-medium mt-1">Profil</span>
      </button>
    </nav>
  );
}
