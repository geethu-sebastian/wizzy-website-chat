
import React, { useState } from 'react';
import { Monitor, Smartphone, Tablet, RefreshCw, ExternalLink } from 'lucide-react';

interface WebsitePreviewProps {
  content: string;
}

const WebsitePreview = ({ content }: WebsitePreviewProps) => {
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 500);
  };

  const getPreviewStyles = () => {
    switch (deviceView) {
      case 'mobile':
        return 'w-[375px] h-[667px]';
      case 'tablet':
        return 'w-[768px] h-[600px]';
      default:
        return 'w-full h-full';
    }
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="p-4 border-b-2 border-black bg-gray-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-semibold text-black">Live Preview</h3>
            <div className="flex items-center gap-1 bg-black text-white px-2 py-1 text-xs">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              Live
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            {/* Device Toggle */}
            <div className="flex items-center bg-gray-200 border-2 border-black p-1">
              <button
                onClick={() => setDeviceView('desktop')}
                className={`p-2 ${deviceView === 'desktop' ? 'bg-black text-white' : 'text-black hover:bg-gray-100'}`}
                title="Desktop View"
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button
                onClick={() => setDeviceView('tablet')}
                className={`p-2 ${deviceView === 'tablet' ? 'bg-black text-white' : 'text-black hover:bg-gray-100'}`}
                title="Tablet View"
              >
                <Tablet className="w-4 h-4" />
              </button>
              <button
                onClick={() => setDeviceView('mobile')}
                className={`p-2 ${deviceView === 'mobile' ? 'bg-black text-white' : 'text-black hover:bg-gray-100'}`}
                title="Mobile View"
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>
            
            {/* Refresh Button */}
            <button
              onClick={handleRefresh}
              className="p-2 text-black hover:bg-gray-100 transition-colors border-2 border-black"
              title="Refresh Preview"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            </button>
            
            {/* External Link */}
            <button
              className="p-2 text-black hover:bg-gray-100 transition-colors border-2 border-black"
              title="Open in New Tab"
            >
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Preview Area */}
      <div className="flex-1 p-4 flex items-center justify-center overflow-auto">
        <div className={`${getPreviewStyles()} transition-all duration-300 ${deviceView !== 'desktop' ? 'border-2 border-black overflow-hidden shadow-lg' : ''}`}>
          <iframe
            srcDoc={content}
            className="w-full h-full border-0 bg-white"
            sandbox="allow-scripts allow-same-origin"
            title="Website Preview"
          />
        </div>
      </div>

      {/* Status Bar */}
      <div className="p-3 border-t-2 border-black bg-gray-50">
        <div className="flex items-center justify-between text-xs text-gray-600">
          <div className="flex items-center gap-4">
            <span>Ready</span>
            <span>•</span>
            <span className="capitalize">{deviceView} View</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Auto-refresh: On</span>
            <span>•</span>
            <span>Last updated: {new Date().toLocaleTimeString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsitePreview;
