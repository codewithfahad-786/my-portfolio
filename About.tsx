import React from 'react';
import { 
  BrainCircuit, 
  Eye, 
  Binary, 
  Terminal, 
  GraduationCap, 
  ShieldCheck, 
  Workflow, 
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { PERSONAL_INFO } from './data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Eye,
      title: "Computer Vision & Visual AI",
      color: "text-[#4cd7f6]",
      borderColor: "border-[#4cd7f6]/30",
      bgColor: "bg-[#4cd7f6]/10",
      description: "Developing automated hazard and defect identification pipelines using OpenCV for spatial preprocessing and Convolutional Neural Networks (CNNs) for high-accuracy feature categorization."
    },
    {
      icon: BrainCircuit,
      title: "Deep Learning Architectures",
      color: "text-[#8083ff]",
      borderColor: "border-[#8083ff]/30",
      bgColor: "bg-[#8083ff]/10",
      description: "Designing multi-layer feedforward Artificial Neural Networks (ANNs) and convolutional networks using TensorFlow and Keras to model non-linear financial patterns and multi-class classification tasks."
    },
    {
      icon: Binary,
      title: "Predictive Machine Learning",
      color: "text-[#4fdbc8]",
      borderColor: "border-[#4fdbc8]/30",
      bgColor: "bg-[#4fdbc8]/10",
      description: "Extracting actionable insights from structured telemetry datasets through Scikit-learn, advanced feature engineering, cross-validation, and ROC-AUC / F1 metric optimization."
    },
    {
      icon: Terminal,
      title: "Production Python & Deployment",
      color: "text-[#c0c1ff]",
      borderColor: "border-[#c0c1ff]/30",
      bgColor: "bg-[#c0c1ff]/10",
      description: "Packaging machine learning inference engines into modular Python architectures, asynchronous FastAPI endpoints, and intuitive Streamlit interactive web applications."
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#040e1a] relative border-t border-[#102338]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1e30] border border-[#1b3857] text-[#4cd7f6] text-xs font-mono mb-3">
            <span>01 // ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Applied Intelligence from Bahawalpur, Pakistan
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            I am a Software Engineering student at <span className="text-white font-medium">{PERSONAL_INFO.institution}</span> dedicated to advancing machine learning, deep neural representations, and real-time computer vision systems.
          </p>
        </div>

        {/* Narrative & Focus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-6 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
            <div className="p-6 rounded-2xl bg-[#081525] border border-[#172c44] space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <GraduationCap className="text-[#8083ff]" size={20} />
                Academic Roots & Engineering Passion
              </h3>
              <p>
                My journey at <strong className="text-white">The Islamia University of Bahawalpur</strong> combines core computer science rigor—data structures, algorithms, and modular software architecture—with modern artificial intelligence experimentation.
              </p>
              <p>
                Rather than treating machine learning as a theoretical black box, I prioritize <strong className="text-white">hands-on model synthesis</strong>: collecting and cleaning real datasets, engineering discriminative feature spaces, tuning hyperparameters, and testing live inference latencies.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#081525] border border-[#172c44] space-y-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Workflow className="text-[#4cd7f6]" size={18} />
                My Development Philosophy
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#4cd7f6] font-bold mt-0.5">▸</span>
                  <span><strong>Data-Centric Quality:</strong> Rigorous exploratory analysis (EDA), outlier treatment, and feature normalization before model training.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#8083ff] font-bold mt-0.5">▸</span>
                  <span><strong>Generalization First:</strong> Mitigating overfitting via regularized layers, dropout, cross-validation folds, and realistic test partitions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#4fdbc8] font-bold mt-0.5">▸</span>
                  <span><strong>Usable Software:</strong> Transforming raw Jupyter prototypes into clean, runnable Python packages, REST APIs, and responsive dashboards.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Core Technical Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={pillar.title}
                  className="p-5 rounded-xl bg-[#081525] border border-[#162c44] hover:border-slate-600 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-10 h-10 rounded-lg ${pillar.bgColor} ${pillar.borderColor} border flex items-center justify-center ${pillar.color} mb-3.5`}>
                      <Icon size={20} />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-2">{pillar.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
