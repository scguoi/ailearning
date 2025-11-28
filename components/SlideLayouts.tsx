
import React from 'react';
import { SlideContent, SlideType } from '../types';
import { 
  Zap, 
  Shield, 
  BookOpen, 
  LayoutTemplate, 
  ArrowRight, 
  Terminal,
  Cpu,
  TrendingUp,
  Target,
  Image as ImageIcon,
  Loader2,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';

interface SlideProps {
  content: SlideContent;
  onGenerateImage?: () => void;
  isGeneratingImage?: boolean;
}

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5, 
      staggerChildren: 0.1 
    } 
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 }
};

// --- Helper Component for Image Placeholder/Generator ---
const ImageArea: React.FC<{ 
  src?: string; 
  prompt?: string; 
  onGenerate?: () => void; 
  isLoading?: boolean 
}> = ({ src, prompt, onGenerate, isLoading }) => {
  if (src) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full h-full rounded-xl overflow-hidden shadow-2xl relative group"
      >
        <img src={src} alt="Generated Visualization" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
      </motion.div>
    );
  }

  return (
    <div className="w-full h-full bg-slate-800/50 rounded-xl border-2 border-dashed border-slate-700 flex flex-col items-center justify-center p-8 text-center space-y-4">
      <div className="bg-slate-800 p-4 rounded-full">
        {isLoading ? (
          <Loader2 className="w-8 h-8 text-blue-400 animate-spin" />
        ) : (
          <Sparkles className="w-8 h-8 text-purple-400" />
        )}
      </div>
      
      {isLoading ? (
        <p className="text-slate-300 font-medium">Generating Visuals...</p>
      ) : (
        <>
           <p className="text-slate-400 text-sm italic line-clamp-3">"{prompt || 'Visual concept'}"</p>
           {onGenerate && (
             <button 
               onClick={onGenerate}
               className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-blue-500/25 transition-all transform hover:scale-105 flex items-center space-x-2"
             >
               <ImageIcon className="w-4 h-4" />
               <span>Generate Image</span>
             </button>
           )}
        </>
      )}
    </div>
  );
};

// --- Renderers ---

export const CoverSlide: React.FC<SlideProps> = ({ content, onGenerateImage, isGeneratingImage }) => (
  <motion.div 
    className="flex flex-col items-center justify-center h-full text-center space-y-8 relative z-10"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
  >
    {/* Optional background image if generated */}
    {content.generatedImage && (
       <div className="absolute inset-0 z-[-1] opacity-40">
         <img src={content.generatedImage} className="w-full h-full object-cover rounded-2xl blur-sm" />
       </div>
    )}

    <motion.div 
      className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-teal-300 text-5xl md:text-7xl font-black tracking-tight drop-shadow-sm max-w-4xl"
      variants={itemVariants}
    >
      {content.title}
    </motion.div>
    <motion.div className="text-xl md:text-3xl text-slate-200 font-light" variants={itemVariants}>
      {content.subtitle}
    </motion.div>
    <motion.div className="mt-12 p-6 bg-slate-900/60 backdrop-blur-md rounded-xl border border-slate-700 max-w-2xl shadow-xl" variants={itemVariants}>
      <p className="text-lg text-emerald-400 italic font-medium">
        {content.quote}
      </p>
    </motion.div>
    
    {!content.generatedImage && content.imagePrompt && (
      <motion.div variants={itemVariants} className="mt-8">
        <button 
          onClick={onGenerateImage}
          disabled={isGeneratingImage}
          className="text-slate-500 hover:text-white text-sm flex items-center space-x-1 transition-colors"
        >
          {isGeneratingImage ? <Loader2 className="w-3 h-3 animate-spin"/> : <Sparkles className="w-3 h-3"/>}
          <span>Enhance Background</span>
        </button>
      </motion.div>
    )}
  </motion.div>
);

export const SectionHeaderSlide: React.FC<SlideProps> = ({ content, onGenerateImage, isGeneratingImage }) => (
  <motion.div 
    className="h-full flex flex-col items-center justify-center text-center px-12"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
  >
    <div className="absolute inset-0 grid grid-cols-2 gap-4 opacity-20 pointer-events-none z-0">
       <div className="bg-gradient-to-br from-blue-500 to-transparent rounded-full blur-[100px] transform -translate-x-1/2"></div>
       <div className="bg-gradient-to-tl from-purple-500 to-transparent rounded-full blur-[100px] transform translate-x-1/2 mt-auto"></div>
    </div>

    {content.generatedImage ? (
       <motion.div 
         initial={{ opacity: 0 }} animate={{ opacity: 1 }}
         className="absolute inset-0 z-0 opacity-30"
       >
         <img src={content.generatedImage} className="w-full h-full object-cover rounded-2xl" />
       </motion.div>
    ) : (
      content.imagePrompt && (
         <div className="absolute bottom-4 right-4 z-20">
             <button onClick={onGenerateImage} disabled={isGeneratingImage} className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white">
                {isGeneratingImage ? <Loader2 className="w-4 h-4 animate-spin"/> : <Sparkles className="w-4 h-4"/>}
             </button>
         </div>
      )
    )}

    <motion.h2 className="text-2xl text-blue-400 tracking-widest uppercase font-bold mb-4 z-10" variants={itemVariants}>
      {content.title}
    </motion.h2>
    <motion.div className="w-24 h-1 bg-blue-500 mb-8 rounded-full z-10" variants={itemVariants} />
    <motion.h1 className="text-5xl md:text-6xl font-bold text-white mb-8 z-10" variants={itemVariants}>
      {content.subtitle}
    </motion.h1>
     <motion.p className="text-xl text-slate-300 italic z-10" variants={itemVariants}>
      {content.quote}
    </motion.p>
  </motion.div>
);

export const ImageSplitSlide: React.FC<SlideProps> = ({ content, onGenerateImage, isGeneratingImage }) => (
  <motion.div 
    className="h-full flex flex-col md:flex-row gap-8 p-8 items-center"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
  >
    <div className="flex-1 flex flex-col justify-center space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 border-l-8 border-blue-500 pl-6">
        {content.title}
      </h2>
      <div className="space-y-4 pl-2">
        {content.points?.map((point, idx) => (
          <motion.div key={idx} className="flex items-start text-lg text-slate-200" variants={itemVariants}>
            <div className="mt-1.5 mr-3 min-w-[6px] h-1.5 bg-blue-400 rounded-full" />
            <span>{point}</span>
          </motion.div>
        ))}
      </div>
      {content.quote && (
        <motion.div className="mt-6 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50" variants={itemVariants}>
          <p className="text-emerald-300 italic text-base">
            "{content.quote}"
          </p>
        </motion.div>
      )}
    </div>
    
    <div className="flex-1 h-[300px] md:h-full w-full max-h-[400px]">
      <ImageArea 
        src={content.generatedImage} 
        prompt={content.imagePrompt} 
        onGenerate={onGenerateImage}
        isLoading={isGeneratingImage}
      />
    </div>
  </motion.div>
);

export const ListSlide: React.FC<SlideProps> = ({ content, onGenerateImage, isGeneratingImage }) => (
  <motion.div 
    className="h-full flex flex-col justify-center px-12 md:px-24"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
  >
    <div className="flex justify-between items-start mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-white border-l-8 border-purple-500 pl-6">
        {content.title}
      </h2>
      {content.imagePrompt && !content.generatedImage && (
        <button onClick={onGenerateImage} disabled={isGeneratingImage} className="text-slate-500 hover:text-purple-400">
           {isGeneratingImage ? <Loader2 className="w-6 h-6 animate-spin"/> : <Sparkles className="w-6 h-6"/>}
        </button>
      )}
    </div>

    <div className="flex gap-12">
        <div className="flex-1 space-y-8">
        {content.points?.map((point, idx) => (
            <motion.div key={idx} className="flex items-start text-xl md:text-2xl text-slate-200" variants={itemVariants}>
            <ArrowRight className="w-8 h-8 text-purple-400 mr-4 mt-1 flex-shrink-0" />
            <span>{point}</span>
            </motion.div>
        ))}
        </div>
        
        {content.generatedImage && (
            <div className="w-1/3 h-auto rounded-xl overflow-hidden border border-slate-700 shadow-xl">
                <img src={content.generatedImage} className="w-full h-full object-cover" />
            </div>
        )}
    </div>

    {content.quote && (
      <motion.div className="mt-16 text-center" variants={itemVariants}>
        <span className="inline-block px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-900 rounded-full border border-slate-700 text-purple-300 italic text-xl">
          {content.quote}
        </span>
      </motion.div>
    )}
  </motion.div>
);

export const SplitSlide: React.FC<SlideProps> = ({ content }) => (
  <motion.div 
    className="h-full flex flex-col px-8 md:px-16 pt-8 pb-4"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
  >
    <h2 className="text-3xl font-bold text-white mb-6 text-center">{content.title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow overflow-y-auto">
      {/* Challenges */}
      <motion.div className="bg-slate-800/40 rounded-2xl p-6 border border-red-900/30" variants={itemVariants}>
        <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center">
          {content.columns?.leftTitle}
        </h3>
        <ul className="space-y-4">
          {content.columns?.leftPoints.map((p, i) => (
            <li key={i} className="flex text-base text-slate-300">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
              {p}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Opportunities */}
      <motion.div className="bg-slate-800/40 rounded-2xl p-6 border border-green-900/30" variants={itemVariants}>
        <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center">
          {content.columns?.rightTitle}
        </h3>
        <ul className="space-y-4">
          {content.columns?.rightPoints.map((p, i) => (
            <li key={i} className="flex text-base text-slate-300">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
              {p}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
    {content.quote && (
        <div className="h-12 flex items-center justify-center shrink-0">
        <p className="text-slate-400 italic text-sm">{content.quote}</p>
        </div>
    )}
  </motion.div>
);

export const TableSlide: React.FC<SlideProps> = ({ content, onGenerateImage, isGeneratingImage }) => (
  <motion.div 
    className="h-full flex flex-col justify-center px-12 md:px-24"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
  >
    <div className="flex justify-between items-center mb-4">
        <div>
            <h2 className="text-4xl font-bold text-white">{content.title}</h2>
            <h3 className="text-xl text-blue-300 mt-2">{content.subtitle}</h3>
        </div>
        {content.imagePrompt && !content.generatedImage && (
            <button onClick={onGenerateImage} disabled={isGeneratingImage} className="text-slate-500 hover:text-blue-400 p-2">
            {isGeneratingImage ? <Loader2 className="w-6 h-6 animate-spin"/> : <Sparkles className="w-6 h-6"/>}
            </button>
        )}
    </div>

    {content.generatedImage && (
        <div className="w-full h-32 mb-6 rounded-xl overflow-hidden">
             <img src={content.generatedImage} className="w-full h-full object-cover opacity-80" />
        </div>
    )}

    <div className="overflow-hidden rounded-xl border border-slate-700 shadow-2xl">
      <table className="w-full text-left text-base md:text-lg">
        <thead className="bg-slate-800 text-slate-100 uppercase">
          <tr>
            {content.table?.headers.map((h, i) => (
              <th key={i} className="px-6 py-4 font-bold tracking-wider w-1/3">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-700 bg-slate-900/50">
          {content.table?.rows.map((row, i) => (
            <motion.tr 
              key={i} 
              className="hover:bg-slate-800/50 transition-colors"
              variants={itemVariants}
            >
              <td className="px-6 py-4 text-slate-400 border-r border-slate-700/50 font-semibold">{row[0]}</td>
              <td className="px-6 py-4 text-slate-500 border-r border-slate-700/50">{row[1]}</td>
              <td className="px-6 py-4 text-emerald-300 font-medium">{row[2]}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  </motion.div>
);

export const GridSlide: React.FC<SlideProps> = ({ content }) => {
  const getIcon = (iconName?: string) => {
    switch(iconName) {
      case 'zap': return <Zap className="w-8 h-8 text-yellow-400" />;
      case 'shield': return <Shield className="w-8 h-8 text-blue-400" />;
      case 'book': return <BookOpen className="w-8 h-8 text-pink-400" />;
      default: return <LayoutTemplate className="w-8 h-8 text-teal-400" />;
    }
  };

  return (
    <motion.div 
      className="h-full flex flex-col justify-center px-8 md:px-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2 className="text-4xl font-bold text-white mb-12 text-center">{content.title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {content.gridItems?.map((item, idx) => (
          <motion.div 
            key={idx}
            className="bg-slate-800/60 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300 group"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-slate-900 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                {getIcon(item.icon)}
              </div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
            </div>
            <p className="text-slate-300 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
       <div className="mt-12 text-center text-slate-400 italic">
        {content.quote}
      </div>
    </motion.div>
  );
};

export const ClosingSlide: React.FC<SlideProps> = ({ content, onGenerateImage, isGeneratingImage }) => (
  <motion.div 
    className="flex flex-col items-center justify-center h-full text-center space-y-12 relative"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
  >
     {content.generatedImage && (
       <div className="absolute inset-0 z-[-1] opacity-30">
         <img src={content.generatedImage} className="w-full h-full object-cover rounded-2xl blur-sm" />
       </div>
    )}

    <motion.div variants={itemVariants} className="mb-8">
      <Target className="w-24 h-24 text-blue-500 mx-auto mb-6" />
      <h1 className="text-5xl md:text-7xl font-bold text-white">{content.title}</h1>
    </motion.div>
    
    <motion.h2 className="text-2xl md:text-3xl text-slate-400" variants={itemVariants}>
      {content.subtitle}
    </motion.h2>

    <motion.div 
      className="p-8 bg-gradient-to-r from-blue-900/60 to-purple-900/60 rounded-2xl border border-white/10 backdrop-blur-sm"
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
    >
      <p className="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
        {content.quote}
      </p>
    </motion.div>

    {!content.generatedImage && content.imagePrompt && (
        <button onClick={onGenerateImage} disabled={isGeneratingImage} className="absolute bottom-8 right-8 text-slate-500 hover:text-white flex items-center gap-2">
            {isGeneratingImage ? <Loader2 className="w-4 h-4 animate-spin"/> : <Sparkles className="w-4 h-4"/>}
            <span>Generate Ending Visual</span>
        </button>
    )}
  </motion.div>
);
