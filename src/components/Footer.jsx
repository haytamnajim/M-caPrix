export default function Footer() {
  return (
    <footer className="bg-background w-full py-20 px-8 border-t border-white/5 mt-20 pb-32 md:pb-12 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-8">
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary" data-icon="handyman">handyman</span>
            <span className="text-white font-black tracking-widest uppercase">MÉCAPRIX</span>
          </div>
          <p className="text-muted text-xs font-semibold tracking-widest uppercase opacity-60">© 2026 MÉCAPRIX • Casablanca, Maroc</p>
        </div>
        <div className="flex gap-10">
          <a className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted hover:text-white transition-colors" href="#">Mentions</a>
          <a className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted hover:text-white transition-colors" href="#">Contact</a>
          <a className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted hover:text-white transition-colors" href="#">Support</a>
        </div>
      </div>
    </footer>
  );
}
