
import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES } from './constants';
import { SlideType } from './types';
import { 
  CoverSlide, 
  ListSlide, 
  SplitSlide, 
  TableSlide, 
  GridSlide, 
  ClosingSlide,
  ImageSplitSlide,
  SectionHeaderSlide
} from './components/SlideLayouts';
import { ChevronRight, ChevronLeft, Bot, X, Loader2 } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { generateSpeakerNotes, generateSlideImage } from './services/geminiService';
import ReactMarkdown from 'react-markdown';

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [notesOpen, setNotesOpen] = useState(false);
  const [notesLoading, setNotesLoading] = useState(false);
  const [notes, setNotes] = useState<string>("");
  const [currentNotesSlideId, setCurrentNotesSlideId] = useState<number | null>(null);
  
  // State to store generated images for each slide ID
  const [generatedImages, setGeneratedImages] = useState<Record<number, string>>({});
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);

  // Get current slide and merge with any generated image
  const rawSlide = SLIDES[currentIndex];
  const currentSlide = {
    ...rawSlide,
    content: {
      ...rawSlide.content,
      generatedImage: generatedImages[rawSlide.id] || rawSlide.content.generatedImage
    }
  };

  const nextSlide = useCallback(() => {
    if (currentIndex < SLIDES.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentIndex]);

  const prevSlide = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const handleGenerateNotes = async () => {
    setNotesOpen(true);
    if (currentNotesSlideId === currentSlide.id && notes) {
      return;
    }
    setNotesLoading(true);
    setNotes("");
    
    const generated = await generateSpeakerNotes(currentSlide);
    setNotes(generated);
    setCurrentNotesSlideId(currentSlide.id);
    setNotesLoading(false);
  };

  const handleGenerateImage = async () => {
    if (!currentSlide.content.imagePrompt || isGeneratingImage) return;
    
    setIsGeneratingImage(true);
    try {
      const imageData = await generateSlideImage(currentSlide.content.imagePrompt);
      if (imageData) {
        setGeneratedImages(prev => ({
          ...prev,
          [currentSlide.id]: imageData
        }));
      }
    } catch (e) {
      console.error("Failed to generate image", e);
      alert("Failed to generate image. Please check API key/quota.");
    } finally {
      setIsGeneratingImage(false);
    }
  };

  const renderSlide = () => {
    const commonProps = { 
        content: currentSlide.content,
        onGenerateImage: handleGenerateImage,
        isGeneratingImage: isGeneratingImage
    };
    
    switch (currentSlide.type) {
      case SlideType.COVER: return <CoverSlide {...commonProps} />;
      case SlideType.SECTION_HEADER: return <SectionHeaderSlide {...commonProps} />;
      case SlideType.LIST: return <ListSlide {...commonProps} />;
      case SlideType.IMAGE_SPLIT: return <ImageSplitSlide {...commonProps} />;
      case SlideType.SPLIT: return <SplitSlide {...commonProps} />;
      case SlideType.TABLE: return <TableSlide {...commonProps} />;
      case SlideType.GRID: return <GridSlide {...commonProps} />;
      case SlideType.CLOSING: return <ClosingSlide {...commonProps} />;
      default: return <div className="text-white">Slide type not supported</div>;
    }
  };

  return (
    <div className="relative w-screen h-screen bg-slate-900 overflow-hidden flex flex-col">
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4"></div>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow relative z-10 w-full max-w-7xl mx-auto p-4 md:p-8 h-full flex items-center justify-center">
        <div className="w-full aspect-video bg-slate-900/50 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden relative">
           <AnimatePresence mode="wait">
             <motion.div 
               key={currentIndex}
               className="w-full h-full"
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -20 }}
               transition={{ duration: 0.3 }}
             >
               {renderSlide()}
             </motion.div>
           </AnimatePresence>

           {/* Slide Counter (Bottom Right) */}
           <div className="absolute bottom-4 right-6 text-slate-500 font-mono text-sm z-50">
             {currentIndex + 1} / {SLIDES.length}
           </div>
        </div>
      </main>

      {/* Controls Bar (Sticky Bottom) */}
      <footer className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-slate-800/90 backdrop-blur-lg border border-slate-700 px-6 py-3 rounded-full flex items-center space-x-6 shadow-2xl">
        <button 
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="p-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-full transition-colors disabled:opacity-30 disabled:hover:bg-transparent"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="w-64 h-1 bg-slate-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500 transition-all duration-300 ease-out"
            style={{ width: `${((currentIndex + 1) / SLIDES.length) * 100}%` }}
          />
        </div>

        <button 
          onClick={nextSlide}
          disabled={currentIndex === SLIDES.length - 1}
          className="p-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-full transition-colors disabled:opacity-30 disabled:hover:bg-transparent"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="w-px h-6 bg-slate-600 mx-2"></div>

        <button
          onClick={handleGenerateNotes}
          className="flex items-center space-x-2 px-4 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg text-sm font-medium"
        >
          <Bot className="w-4 h-4" />
          <span>AI Coach</span>
        </button>
      </footer>

      {/* AI Coach Modal / Sidebar */}
      <AnimatePresence>
        {notesOpen && (
          <>
            <motion.div 
              className="fixed inset-0 bg-black/50 z-[60]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setNotesOpen(false)}
            />
            <motion.div 
              className="fixed right-0 top-0 h-full w-full md:w-[450px] bg-slate-900 z-[70] border-l border-slate-700 shadow-2xl flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-700">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Bot className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">AI Speaker Coach</h3>
                </div>
                <button 
                  onClick={() => setNotesOpen(false)}
                  className="p-2 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-grow p-6 overflow-y-auto">
                {notesLoading ? (
                  <div className="flex flex-col items-center justify-center h-full text-slate-400 space-y-4">
                    <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
                    <p>Thinking...</p>
                    <p className="text-xs text-slate-600">Analyzing content & generating tips</p>
                  </div>
                ) : (
                  <div className="prose prose-invert prose-p:text-slate-300 prose-headings:text-white">
                    <ReactMarkdown>{notes}</ReactMarkdown>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
