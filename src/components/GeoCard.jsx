import React, { useState, useEffect } from 'react';

export default function GeoCard() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Europe/Rome',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat('it-IT', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8 bg-black border border-neutral-900 flex flex-col justify-between h-full relative overflow-hidden group">
      {/* Effetto griglia di sfondo soft */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      <div>
        <div className="flex justify-between items-center mb-6">
          <span className="text-xs font-mono text-emerald-400 bg-neutral-950 px-3 py-1 border border-neutral-900 uppercase tracking-wider">
            // NODE_LOCATION
          </span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="text-[10px] font-mono text-neutral-500">LIVE</span>
          </div>
        </div>

        <h3 className="text-3xl font-bold tracking-tight text-white font-mono">
          Comiso, IT
        </h3>
        <p className="text-xs font-mono text-neutral-500 mt-1">Sicilia // 36.9456° N, 14.6044° E</p>
      </div>

      <div className="mt-12 space-y-4 relative z-10">
        <div className="border-t border-neutral-900 pt-4">
          <span className="text-[10px] font-mono text-neutral-600 block uppercase tracking-widest">Local Time</span>
          <span className="text-2xl font-mono font-bold text-neutral-300 tracking-wider">
            {time || "00:00:00"}
          </span>
        </div>
        
        <div className="text-xs text-neutral-400 font-sans leading-relaxed">
          Disponibile per contratti da remoto e progetti in tutta Italia.
        </div>
      </div>
    </div>
  );
}