export default function ModelSelector({ models, activeModel, setActiveModel }) {
  if (!models || models.length === 0) return null;

  return (
    <section className="mb-8 w-full overflow-x-auto pb-4 scrollbar-hide relative z-10 animate-fade-in-up" autoFocus tabIndex={0} style={{ animationDelay: '0.2s', outline: 'none' }}>
      <div className="flex gap-3 whitespace-nowrap items-center min-w-max px-2">
        <span className="text-[11px] font-bold text-muted uppercase tracking-[0.15em] mr-2">SÉRIE :</span>
        {models.map((model) => {
          const isActive = activeModel === model;
          return (
            <button
              key={model}
              onClick={() => setActiveModel(model)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform outline-none focus-visible:ring-2 focus-visible:ring-primary active:scale-95 overflow-hidden group
                ${isActive 
                  ? 'text-white border border-primary shadow-[0_0_15px_rgba(34,211,238,0.3)] scale-105' 
                  : 'text-muted border border-white/10 bg-white/5 hover:text-white hover:bg-white/10 hover:border-accent/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)] hover:scale-105'
                }`}
            >
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 z-0 pointer-events-none"></div>
              )}
              <span className="relative z-10 drop-shadow-md">{model}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
