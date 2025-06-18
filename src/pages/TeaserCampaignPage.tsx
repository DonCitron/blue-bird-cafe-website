import React, { useEffect, useState } from 'react';
import { Calendar, Eye, Share2, Video, Download, Clock, Zap, Target } from 'lucide-react';
import TeaserVideoPlayer from '../components/TeaserVideoPlayer';

const TeaserCampaignPage: React.FC = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    document.title = 'Something\'s Brewing... - Blue Bird';
    
    // Countdown to May 15, 2024
    const targetDate = new Date('2024-05-15T00:00:00').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const videoSpecs = {
    formats: ['1080x1920 (Vertical)', '1920x1080 (Horizontal)'],
    duration: '15 seconds',
    colorPalette: ['Deep Blues', 'Blacks', 'Electric Blue', 'Silver'],
    music: 'Ambient, mysterious instrumental',
    exports: ['MP4', 'MOV'],
    features: ['Subtitles/Captions', 'Mobile Optimized']
  };

  const distributionStrategy = [
    {
      platform: 'Instagram',
      timing: 'Tuesday 2 PM',
      format: 'Stories + Feed Post',
      action: 'Pin to profile'
    },
    {
      platform: 'Facebook',
      timing: 'Tuesday 2 PM',
      format: 'Video Post',
      action: 'Pin to top'
    },
    {
      platform: 'Twitter',
      timing: 'Tuesday 2 PM',
      format: 'Video Tweet',
      action: 'Pin to profile'
    }
  ];

  const hints = [
    {
      day: 'Day 1',
      hint: '🔵 Something blue is coming...',
      engagement: '2.3k likes, 456 comments'
    },
    {
      day: 'Day 3',
      hint: '☕ The perfect blend requires patience...',
      engagement: '3.1k likes, 678 comments'
    },
    {
      day: 'Day 5',
      hint: '🕐 Time reveals all secrets...',
      engagement: '4.2k likes, 892 comments'
    },
    {
      day: 'Day 7',
      hint: '🌟 Excellence is brewing...',
      engagement: '5.8k likes, 1.2k comments'
    }
  ];

  return (
    <>
      {/* Hero Section with Dark Theme */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-900 via-blue-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full opacity-5 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-8">
            <img 
              src="/blue_bird_clean_transparent.png" 
              alt="Blue Bird Logo" 
              className="w-32 h-32 mx-auto mb-6 opacity-80 filter drop-shadow-2xl animate-pulse"
              style={{filter: 'brightness(0) invert(1) sepia(1) hue-rotate(200deg) saturate(3)'}}
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Something's Brewing...
          </h1>
          
          <div className="text-6xl md:text-8xl font-bold mb-8 text-blue-400">
            05.15.24
          </div>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-2xl mx-auto">
            A mysterious transformation is coming to Blue Bird Café
          </p>

          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-12">
            {Object.entries(countdown).map(([unit, value]) => (
              <div key={unit} className="bg-black bg-opacity-50 rounded-lg p-4 border border-blue-500">
                <div className="text-2xl md:text-3xl font-bold text-blue-400">{value}</div>
                <div className="text-sm text-gray-400 capitalize">{unit}</div>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-4">
            <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">
              #BlueBirdMystery
            </span>
            <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">
              #WhatsBrewing
            </span>
          </div>
        </div>
      </section>

      {/* Interactive Video Preview */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-400">Interactive Teaser Preview</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Experience the mysterious 15-second teaser that will captivate your audience
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <TeaserVideoPlayer />
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black bg-opacity-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-blue-400">Vertical Format</h3>
                <p className="text-gray-300 text-sm">Perfect for Instagram Stories, TikTok, and mobile viewing</p>
                <div className="mt-2 text-xs text-gray-400">1080x1920 • 15s • MP4/MOV</div>
              </div>
              
              <div className="bg-black bg-opacity-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-blue-400">Horizontal Format</h3>
                <p className="text-gray-300 text-sm">Ideal for Facebook, Twitter, and desktop viewing</p>
                <div className="mt-2 text-xs text-gray-400">1920x1080 • 15s • MP4/MOV</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Concept Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-400">15-Second Cinematic Teaser</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A mysterious and engaging video that builds anticipation and curiosity
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Video Storyboard */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Video Storyboard</h3>
              
              <div className="space-y-4">
                <div className="bg-black bg-opacity-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="h-5 w-5 text-blue-400" />
                    <span className="font-semibold">0-2s: Dark Screen</span>
                  </div>
                  <p className="text-gray-300">Complete darkness with subtle ambient coffee shop sounds</p>
                </div>
                
                <div className="bg-black bg-opacity-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center gap-3 mb-2">
                    <Eye className="h-5 w-5 text-blue-400" />
                    <span className="font-semibold">3-8s: Logo Reveal</span>
                  </div>
                  <p className="text-gray-300">Slow fade-in of Blue Bird logo in electric blue with steam animations</p>
                </div>
                
                <div className="bg-black bg-opacity-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="h-5 w-5 text-blue-400" />
                    <span className="font-semibold">9-12s: Date Reveal</span>
                  </div>
                  <p className="text-gray-300">Cryptic date "05.15.24" appears with mysterious glow effect</p>
                </div>
                
                <div className="bg-black bg-opacity-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="h-5 w-5 text-blue-400" />
                    <span className="font-semibold">13-15s: Tagline</span>
                  </div>
                  <p className="text-gray-300">"Something's brewing..." with fade to black</p>
                </div>
              </div>
            </div>

            {/* Technical Specifications */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Technical Specifications</h3>
              
              <div className="bg-black bg-opacity-50 p-6 rounded-lg">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">Video Formats</h4>
                    <div className="space-y-1">
                      {videoSpecs.formats.map((format, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Video className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-300">{format}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">Duration</h4>
                    <p className="text-gray-300">{videoSpecs.duration}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">Color Palette</h4>
                    <div className="flex flex-wrap gap-2">
                      {videoSpecs.colorPalette.map((color, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-900 text-blue-200 rounded text-sm">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">Audio</h4>
                    <p className="text-gray-300">{videoSpecs.music}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">Export Formats</h4>
                    <div className="flex gap-2">
                      {videoSpecs.exports.map((format, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-sm">
                          {format}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Distribution Strategy */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-400">Distribution Strategy</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Simultaneous release across all platforms for maximum impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {distributionStrategy.map((strategy, index) => (
              <div key={index} className="bg-black bg-opacity-50 p-6 rounded-lg border border-blue-500">
                <div className="flex items-center gap-3 mb-4">
                  <Share2 className="h-6 w-6 text-blue-400" />
                  <h3 className="text-xl font-semibold">{strategy.platform}</h3>
                </div>
                <div className="space-y-2 text-gray-300">
                  <p><span className="text-blue-400">Timing:</span> {strategy.timing}</p>
                  <p><span className="text-blue-400">Format:</span> {strategy.format}</p>
                  <p><span className="text-blue-400">Action:</span> {strategy.action}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Strategy Points */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Campaign Tactics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-blue-300">Content Strategy</h4>
                <ul className="space-y-1 text-gray-300">
                  <li>• Create countdown stories leading to the date</li>
                  <li>• Share "decoded" hints every 48 hours</li>
                  <li>• Engage with customer speculation in comments</li>
                  <li>• Partner with local influencers for mysterious "signs"</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-blue-300">Engagement Tactics</h4>
                <ul className="space-y-1 text-gray-300">
                  <li>• Encourage user-generated mystery content</li>
                  <li>• Create interactive polls and questions</li>
                  <li>• Share behind-the-scenes "clues"</li>
                  <li>• Build anticipation with daily updates</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hint Timeline */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-400">Decoded Hints Timeline</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Strategic hint releases to maintain mystery and engagement
            </p>
          </div>

          <div className="space-y-6">
            {hints.map((hint, index) => (
              <div key={index} className="bg-black bg-opacity-50 p-6 rounded-lg border-l-4 border-blue-500">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Target className="h-5 w-5 text-blue-400" />
                      <span className="font-semibold text-blue-400">{hint.day}</span>
                    </div>
                    <p className="text-xl text-gray-200 mb-2">{hint.hint}</p>
                    <p className="text-sm text-gray-400">{hint.engagement}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                      Posted
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-t from-black to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">Ready to Launch the Mystery?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Download the complete teaser campaign package and start building anticipation
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 hover:scale-105">
              <Download className="h-5 w-5" />
              Download Campaign Package
            </button>
            <button className="flex items-center gap-2 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-medium py-3 px-8 rounded-full transition-all duration-300">
              <Video className="h-5 w-5" />
              View Video Mockup
            </button>
          </div>
          
          <div className="mt-8 text-gray-400">
            <p>Campaign launches Tuesday at 2 PM across all platforms</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeaserCampaignPage;