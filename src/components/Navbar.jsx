export default function Navbar() {
  return (
    <header className="bg-slate-950/70 backdrop-blur-md flex justify-between items-center px-6 py-4 w-full z-50 fixed top-0 border-b border-white/10 shadow-xl transition-all duration-300 ease-in-out">
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-blue-500" data-icon="build">build</span>
        <h1 className="text-xl font-black text-white tracking-widest uppercase font-inter">MécaPrix</h1>
      </div>
      
      <nav className="hidden md:flex items-center gap-8">
        <a className="text-blue-500 font-button text-button transition-all duration-300" href="#">Catalogue</a>
        <a className="text-slate-400 font-button text-button hover:bg-white/5 px-3 py-1 rounded transition-all duration-300" href="#">Recherche</a>
        <a className="text-slate-400 font-button text-button hover:bg-white/5 px-3 py-1 rounded transition-all duration-300" href="#">Favoris</a>
      </nav>

      <div className="flex items-center gap-4">
        <button className="p-2 text-white hover:bg-white/5 rounded-full transition-all duration-300">
          <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
        </button>
        <button className="p-2 text-white hover:bg-white/5 rounded-full md:hidden">
          <span className="material-symbols-outlined" data-icon="menu">menu</span>
        </button>
      </div>
    </header>
  );
}
