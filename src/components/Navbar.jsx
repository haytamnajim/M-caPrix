export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] nav-blur py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
            <span className="material-symbols-outlined text-primary text-2xl group-hover:scale-110 transition-transform" data-icon="handyman">handyman</span>
          </div>
          <h1 className="text-xl font-black text-white tracking-[0.2em] uppercase font-inter transition-all group-hover:text-primary">MÉCAPRIX</h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-10">
          <a className="text-primary font-semibold text-sm tracking-widest uppercase transition-all hover:text-white" href="#">Catalogue</a>
          <a className="text-muted font-semibold text-sm tracking-widest uppercase transition-all hover:text-white" href="#">Recherche</a>
          <a className="text-muted font-semibold text-sm tracking-widest uppercase transition-all hover:text-white" href="#">Favoris</a>
        </nav>

        <div className="flex items-center gap-2">
          <button className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/5 rounded-xl transition-all duration-300 relative group">
            <span className="material-symbols-outlined text-muted group-hover:text-white transition-colors" data-icon="shopping_cart">shopping_cart</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-background shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
          </button>
          <button className="w-10 h-10 flex md:hidden items-center justify-center text-white hover:bg-white/5 rounded-xl">
            <span className="material-symbols-outlined" data-icon="menu">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
