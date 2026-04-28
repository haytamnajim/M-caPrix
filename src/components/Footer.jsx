export default function Footer() {
  return (
    <footer className="bg-slate-950 w-full py-12 px-8 border-t border-white/5 mt-20 pb-32 md:pb-12 shadow-none relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-4">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-blue-500" data-icon="build">build</span>
            <span className="text-blue-500 font-bold font-inter">MécaPrix</span>
          </div>
          <p className="font-inter text-sm text-slate-500">© 2026 MécaPrix. Performance & Précision.</p>
        </div>
        <div className="flex gap-8">
          <a className="font-inter text-sm text-slate-500 hover:text-white transition-colors cursor-pointer" href="#">Mentions Légales</a>
          <a className="font-inter text-sm text-slate-500 hover:text-white transition-colors cursor-pointer" href="#">Contact</a>
          <a className="font-inter text-sm text-slate-500 hover:text-white transition-colors cursor-pointer" href="#">CGV</a>
        </div>
      </div>
    </footer>
  );
}
