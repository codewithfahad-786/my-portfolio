import React, { useState } from 'react';
import { 
  ArrowRight, 
  Github, 
  ExternalLink, 
  Terminal, 
  CheckCircle2, 
  Sparkles, 
  BrainCircuit, 
  Copy, 
  Check, 
  MapPin, 
  GraduationCap,
  Play
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'train' | 'vision' | 'metrics'>('train');
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeSnippets = {
    train: `# PakWeather AI & Churn Prediction Pipeline
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.metrics import classification_report, roc_auc_score

# 1. Feature Engineering & Preprocessing
X_train, X_test, y_train, y_test = train_test_split(
    features, target, test_size=0.2, random_state=42
)

# 2. Supervised Learning Model Initialization
model = GradientBoostingClassifier(
    n_estimators=150, learning_rate=0.08, max_depth=5
)
model.fit(X_train, y_train)

# 3. Model Evaluation
auc = roc_auc_score(y_test, model.predict_proba(X_test)[:, 1])
print(f"ROC-AUC Performance: {auc:.3f}") # 0.910`,

    vision: `# AI Road Damage Detection (CNN & OpenCV)
import cv2
import tensorflow as tf
from tensorflow.keras.models import load_model

def inspect_road_frame(frame_path: str):
    image = cv2.imread(frame_path)
    processed = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    resized = cv2.resize(processed, (224, 224)) / 255.0
    tensor = np.expand_dims(resized, axis=0)

    # Real-time Inference via custom CNN
    predictions = cnn_model.predict(tensor)
    hazard_class = np.argmax(predictions)
    confidence = float(np.max(predictions))

    return {"hazard": hazard_class, "confidence": confidence}
# Status: Real-time latency ~45ms`,

    metrics: `{
  "engineer": "Muhammad Fahad",
  "university": "The Islamia University of Bahawalpur",
  "focus_areas": [
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Python Engineering"
  ],
  "production_projects": [
    { "name": "PakWeather AI", "accuracy": "94.2%" },
    { "name": "AI Road Damage Detection", "mAP": "89.6%" },
    { "name": "Customer Churn Prediction", "roc_auc": 0.91 },
    { "name": "Loan Risk Prediction", "ann_acc": "92.8%" }
  ],
  "verified_stack": ["Python", "TensorFlow", "OpenCV", "Scikit-learn", "FastAPI"]
}`
  };

  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background Radial Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#4cd7f6]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-3/4 -translate-y-1/2 w-[450px] h-[400px] bg-[#8083ff]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Personal Narrative & Badges */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0d1f33] border border-[#1d3c5f] text-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4cd7f6] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4cd7f6]"></span>
              </span>
              <span className="text-slate-200 font-medium">
                {PERSONAL_INFO.status}
              </span>
            </div>

            {/* Name & Titles */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4cd7f6] via-[#c0c1ff] to-[#8083ff]">{PERSONAL_INFO.name}</span>
              </h1>
              
              <div className="inline-block font-mono text-base sm:text-lg text-[#4cd7f6] font-semibold bg-[#08182a] px-3 py-1.5 rounded-lg border border-[#162e49]">
                Machine Learning Engineer | Deep Learning | Computer Vision | Python Developer
              </div>
            </div>

            {/* Bio & Academic Affiliation */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Software Engineering student at <strong className="text-white font-semibold">{PERSONAL_INFO.institution}</strong>. 
              Specializing in building real-world artificial intelligence models, computer vision inspection pipelines, and predictive Python systems.
            </p>

            {/* University & Location Badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 font-mono">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0a1829] border border-[#172d47]">
                <GraduationCap size={15} className="text-[#8083ff]" />
                <span>The Islamia University of Bahawalpur</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0a1829] border border-[#172d47]">
                <MapPin size={14} className="text-[#4cd7f6]" />
                <span>Bahawalpur, Pakistan</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#4cd7f6] to-[#03b5d3] text-[#051424] font-bold text-sm shadow-lg shadow-[#4cd7f6]/20 hover:opacity-95 transition"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0e1f33] hover:bg-[#152e4b] border border-[#1f3d61] text-white font-semibold text-sm transition"
              >
                <span>Get In Touch</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#091726] hover:bg-[#12263d] border border-[#18314e] text-slate-300 hover:text-white text-sm font-mono transition"
              >
                <Github size={16} className="text-[#4cd7f6]" />
                <span>codewithfahad-786</span>
              </a>
            </div>

            {/* Metric Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#12253a]">
              <div>
                <div className="text-2xl font-bold font-mono text-white">4+</div>
                <div className="text-xs text-slate-400">Featured AI/ML Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-[#4cd7f6]">BS SE</div>
                <div className="text-xs text-slate-400">IUB Student</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-[#8083ff]">10+</div>
                <div className="text-xs text-slate-400">AI & Python Frameworks</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-[#4fdbc8]">100%</div>
                <div className="text-xs text-slate-400">Applied Engineering Focus</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Terminal & Code Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#071321] border border-[#19324e] shadow-2xl overflow-hidden glow-cyan">
              
              {/* Terminal Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#050e18] border-b border-[#14263b]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal size={12} className="text-[#4cd7f6]" />
                    fahad@ml-workstation:~
                  </span>
                </div>
                
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-[#4cd7f6] px-2 py-1 rounded bg-[#0a1829] border border-[#162e49] transition"
                  title="Copy contact email"
                >
                  {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                  <span>{copied ? 'Copied Email' : 'Email'}</span>
                </button>
              </div>

              {/* Code File Tabs */}
              <div className="flex items-center px-2 pt-2 bg-[#06101c] border-b border-[#122338] text-xs font-mono">
                <button
                  onClick={() => setActiveTab('train')}
                  className={`px-3 py-1.5 rounded-t-lg transition border-t border-x ${
                    activeTab === 'train'
                      ? 'bg-[#071321] border-[#19324e] text-[#4cd7f6] font-semibold'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  ml_pipeline.py
                </button>
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`px-3 py-1.5 rounded-t-lg transition border-t border-x ${
                    activeTab === 'vision'
                      ? 'bg-[#071321] border-[#19324e] text-[#8083ff] font-semibold'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  cv_detector.py
                </button>
                <button
                  onClick={() => setActiveTab('metrics')}
                  className={`px-3 py-1.5 rounded-t-lg transition border-t border-x ${
                    activeTab === 'metrics'
                      ? 'bg-[#071321] border-[#19324e] text-[#4fdbc8] font-semibold'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  portfolio_meta.json
                </button>
              </div>

              {/* Code Display Area */}
              <div className="p-4 overflow-x-auto max-h-[380px] text-xs font-mono leading-relaxed text-slate-300">
                <pre>
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Footer status within terminal */}
              <div className="px-4 py-2 bg-[#050f1a] border-t border-[#122338] flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Python 3.11 | TensorFlow 2.x</span>
                </div>
                <span className="text-slate-500">IUB Research Sandbox</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
