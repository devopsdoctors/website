import React from 'react';
import { RefreshCw } from 'lucide-react';

export function InfinityDevOps() {
  return (
    <div className="relative w-48 h-48 mx-auto mt-8">
      <div className="absolute inset-0 animate-[spin_8s_linear_infinite]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <RefreshCw className="w-24 h-24 text-cyan-600" />
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-x-16 text-sm font-medium">
          <div className="flex flex-col items-center gap-2">
            <span className="text-cyan-700">Plan</span>
            <span className="text-cyan-700">Code</span>
            <span className="text-cyan-700">Build</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-cyan-700">Test</span>
            <span className="text-cyan-700">Deploy</span>
            <span className="text-cyan-700">Monitor</span>
          </div>
        </div>
      </div>
    </div>
  );
}