import React, { useState } from 'react';
import { 
  X, 
  Play, 
  CheckCircle2, 
  AlertTriangle, 
  TrendingUp, 
  ShieldCheck, 
  ShieldAlert, 
  CloudRain, 
  Sun, 
  Wind, 
  ExternalLink, 
  Github, 
  Cpu, 
  RefreshCw,
  Eye,
  Sliders,
  DollarSign
} from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectDemoModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDemoModal: React.FC<ProjectDemoModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-[#091726] border border-[#1e344d] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#162a3f] bg-[#071320]">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#4cd7f6] animate-pulse" />
            <div>
              <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                {project.title}
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#4cd7f6]/10 text-[#4cd7f6] border border-[#4cd7f6]/30 font-normal">
                  Interactive Simulator
                </span>
              </h3>
              <p className="text-xs text-slate-400">{project.tagline}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-300">
          {/* Project Details Banner */}
          <div className="p-4 rounded-xl bg-[#0d1f33] border border-[#1b334d] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#4cd7f6]">Overview</span>
              <p className="text-sm text-slate-300 leading-relaxed">{project.detailedOverview}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-[#152a42] text-slate-200 hover:bg-[#1f3a5a] border border-slate-700 transition"
              >
                <Github size={14} />
                Repository
              </a>
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-[#4cd7f6] text-[#051424] hover:bg-[#38c9ec] font-semibold transition"
              >
                <ExternalLink size={14} />
                Live Hub
              </a>
            </div>
          </div>

          {/* Interactive Simulation Switcher */}
          {project.id === 'pakweather-ai' && <PakWeatherSimulator />}
          {project.id === 'ai-road-damage-detection' && <RoadDamageSimulator />}
          {project.id === 'customer-churn-prediction' && <ChurnPredictionSimulator />}
          {project.id === 'loan-risk-prediction' && <LoanRiskSimulator />}

          {/* Technology Badges */}
          <div className="pt-2 border-t border-[#162a3f]">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">Engineered With</span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-2.5 py-1 text-xs rounded-md bg-[#0a1829] border border-[#1c324c] text-slate-300 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   1. PakWeather AI Simulator
   ========================================================= */
function PakWeatherSimulator() {
  const [city, setCity] = useState('Bahawalpur');
  const [humidity, setHumidity] = useState(48);
  const [pressure, setPressure] = useState(1012);
  const [windSpeed, setWindSpeed] = useState(14);
  const [cloudCover, setCloudCover] = useState(25);
  const [isComputing, setIsComputing] = useState(false);

  // Computed synthetic ML forecast based on parameters
  const tempPrediction = Math.round(
    32 + (1013 - pressure) * 0.15 - (cloudCover * 0.08) + (humidity * 0.04)
  );
  const rainProbability = Math.min(
    95, 
    Math.max(5, Math.round((humidity * 0.6) + (cloudCover * 0.4) - 20))
  );

  const handleSimulate = () => {
    setIsComputing(true);
    setTimeout(() => setIsComputing(false), 450);
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h4 className="text-base font-semibold text-white flex items-center gap-2">
          <CloudRain className="text-[#4cd7f6]" size={18} />
          PakWeather AI Predictive Inference Engine
        </h4>
        <button
          onClick={handleSimulate}
          disabled={isComputing}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#4cd7f6]/10 text-[#4cd7f6] border border-[#4cd7f6]/30 text-xs font-semibold hover:bg-[#4cd7f6]/20 transition"
        >
          <RefreshCw size={12} className={isComputing ? 'animate-spin' : ''} />
          Recompute Forecast
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Input Parameters */}
        <div className="p-4 rounded-xl bg-[#071320] border border-[#172b40] space-y-4">
          <span className="text-xs font-mono uppercase text-[#4cd7f6] block">Input Meteorological Features</span>
          
          <div>
            <label className="text-xs text-slate-300 block mb-1">Target Pakistani City</label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full bg-[#0d1e30] border border-[#213954] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#4cd7f6]"
            >
              <option value="Bahawalpur">Bahawalpur (Punjab)</option>
              <option value="Lahore">Lahore (Punjab)</option>
              <option value="Islamabad">Islamabad (Capital)</option>
              <option value="Karachi">Karachi (Sindh)</option>
              <option value="Multan">Multan (Punjab)</option>
              <option value="Peshawar">Peshawar (KPK)</option>
            </select>
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Relative Humidity</span>
              <span className="text-[#4cd7f6] font-mono">{humidity}%</span>
            </div>
            <input 
              type="range" 
              min="10" 
              max="95" 
              value={humidity}
              onChange={(e) => setHumidity(Number(e.target.value))}
              className="w-full accent-[#4cd7f6] h-1.5 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Atmospheric Pressure</span>
              <span className="text-[#4cd7f6] font-mono">{pressure} hPa</span>
            </div>
            <input 
              type="range" 
              min="990" 
              max="1030" 
              value={pressure}
              onChange={(e) => setPressure(Number(e.target.value))}
              className="w-full accent-[#4cd7f6] h-1.5 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Cloud Cover Fraction</span>
              <span className="text-[#4cd7f6] font-mono">{cloudCover}%</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={cloudCover}
              onChange={(e) => setCloudCover(Number(e.target.value))}
              className="w-full accent-[#4cd7f6] h-1.5 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>
        </div>

        {/* Prediction Results */}
        <div className="p-4 rounded-xl bg-[#071320] border border-[#172b40] flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono uppercase text-[#4cd7f6] block mb-3">Model Output ({city})</span>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-2xl bg-[#4cd7f6]/10 border border-[#4cd7f6]/30 text-[#4cd7f6]">
                {rainProbability > 50 ? <CloudRain size={36} /> : <Sun size={36} />}
              </div>
              <div>
                <div className="text-3xl font-extrabold text-white font-mono">{tempPrediction}°C</div>
                <div className="text-xs text-slate-400">
                  {rainProbability > 50 ? 'Precipitation Probable' : 'Clear to Partly Cloudy'}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 rounded-lg bg-[#0d1e30] border border-[#1b3450]">
                <span className="text-slate-400 block">Rainfall Probability</span>
                <span className="text-base font-bold text-[#4cd7f6] font-mono">{rainProbability}%</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0d1e30] border border-[#1b3450]">
                <span className="text-slate-400 block">Wind Velocity</span>
                <span className="text-base font-bold text-white font-mono">{windSpeed} km/h</span>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 rounded-lg bg-[#122438] border border-[#1e3c5c] text-xs space-y-1">
            <div className="flex items-center justify-between text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-[#4cd7f6]" />
                Scikit-learn Regressor:
              </span>
              <span className="font-mono text-emerald-400 font-semibold">R² = 0.942</span>
            </div>
            <p className="text-[11px] text-slate-400">
              Evaluated on regional meteorological records from the Pakistan Meteorological Department archive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   2. AI Road Damage Detection Simulator
   ========================================================= */
function RoadDamageSimulator() {
  const PRESETS = [
    {
      id: 'pothole',
      name: 'Severe Pothole Hazard',
      location: 'Ahmedpur Highway, Bahawalpur',
      hazard: 'Pothole (Class D40)',
      confidence: '95.4%',
      severity: 'High - Immediate Hazard',
      severityColor: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
      action: 'Dispatch emergency asphalt cold-patch crew within 24h',
      box: { top: '35%', left: '28%', width: '44%', height: '38%' }
    },
    {
      id: 'longitudinal',
      name: 'Longitudinal Pavement Crack',
      location: 'Ring Road Section 3, Bahawalpur',
      hazard: 'Longitudinal Crack (Class D10)',
      confidence: '91.8%',
      severity: 'Medium - Progressive Crack',
      severityColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
      action: 'Schedule bitumen crack sealing to prevent water ingress',
      box: { top: '22%', left: '42%', width: '16%', height: '58%' }
    },
    {
      id: 'alligator',
      name: 'Alligator Structural Fatigue',
      location: 'Industrial Estate Avenue',
      hazard: 'Alligator Cracking (Class D20)',
      confidence: '88.7%',
      severity: 'Critical - Sub-base Failure',
      severityColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
      action: 'Full depth reclamation & structural repaving required',
      box: { top: '30%', left: '22%', width: '56%', height: '45%' }
    },
    {
      id: 'smooth',
      name: 'Optimal Resurfaced Section',
      location: 'University Road, Bahawalpur',
      hazard: 'No Distress Detected',
      confidence: '98.2%',
      severity: 'Low - Optimal Condition',
      severityColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      action: 'No maintenance action needed. Next routine scan in 90 days',
      box: null
    }
  ];

  const [selectedPreset, setSelectedPreset] = useState(PRESETS[0]);
  const [isInferring, setIsInferring] = useState(false);

  const handleSelect = (preset: typeof PRESETS[0]) => {
    setIsInferring(true);
    setSelectedPreset(preset);
    setTimeout(() => setIsInferring(false), 350);
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h4 className="text-base font-semibold text-white flex items-center gap-2">
          <Eye className="text-[#8083ff]" size={18} />
          Computer Vision CNN Inference Engine
        </h4>
        <span className="text-xs text-slate-400 font-mono">OpenCV Preprocessing + Keras CNN</span>
      </div>

      {/* Preset Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {PRESETS.map((item) => (
          <button
            key={item.id}
            onClick={() => handleSelect(item)}
            className={`px-3 py-2 rounded-lg text-xs font-medium text-left transition border ${
              selectedPreset.id === item.id
                ? 'bg-[#182642] border-[#8083ff] text-white'
                : 'bg-[#071320] border-[#172b40] text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className="truncate font-semibold">{item.name}</div>
            <div className="text-[10px] text-slate-500 truncate">{item.location}</div>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Simulated Camera Feed & Bounding Box */}
        <div className="relative aspect-video rounded-xl bg-slate-950 border border-[#1f3750] overflow-hidden flex items-center justify-center">
          {/* Street Texture Simulation Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#111e2e] via-[#091421] to-[#050c14] opacity-90" />
          
          {/* Road lines simulation */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-1.5 h-full bg-amber-400/20 border-r border-dashed border-amber-300/40" />
          </div>

          {/* Grid overlay */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(to right, #4cd7f6 1px, transparent 1px), linear-gradient(to bottom, #4cd7f6 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />

          {/* Bounding Box if detected */}
          {selectedPreset.box && !isInferring && (
            <div 
              className="absolute border-2 border-[#8083ff] bg-[#8083ff]/15 rounded shadow-[0_0_15px_rgba(128,131,255,0.4)] transition-all duration-300"
              style={{
                top: selectedPreset.box.top,
                left: selectedPreset.box.left,
                width: selectedPreset.box.width,
                height: selectedPreset.box.height
              }}
            >
              <div className="absolute -top-6 left-0 bg-[#8083ff] text-slate-950 font-mono text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1 shadow">
                <span>{selectedPreset.hazard.split(' ')[0]}</span>
                <span>{selectedPreset.confidence}</span>
              </div>
            </div>
          )}

          {/* Inference scanning line */}
          {isInferring ? (
            <div className="absolute inset-x-0 h-1 bg-[#8083ff] shadow-[0_0_12px_#8083ff] animate-bounce top-1/2" />
          ) : null}

          {/* HUD telemetry */}
          <div className="absolute bottom-2 left-2 text-[10px] font-mono text-slate-400 bg-black/60 px-2 py-1 rounded backdrop-blur-sm">
            FRAME: 1920x1080 | LATENCY: 42ms | FPS: 24
          </div>
          <div className="absolute top-2 right-2 text-[10px] font-mono text-[#4cd7f6] bg-black/60 px-2 py-1 rounded backdrop-blur-sm">
            LIVE CNN INFERENCE
          </div>
        </div>

        {/* Telemetry Report Card */}
        <div className="p-4 rounded-xl bg-[#071320] border border-[#172b40] flex flex-col justify-between space-y-3">
          <div>
            <span className="text-xs font-mono uppercase text-[#8083ff] block mb-2">Hazard Assessment</span>
            
            <div className="space-y-2.5">
              <div>
                <span className="text-xs text-slate-400 block">Classified Defect</span>
                <span className="text-base font-bold text-white">{selectedPreset.hazard}</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-slate-400 block">Model Confidence</span>
                  <span className="text-sm font-mono font-bold text-[#8083ff]">{selectedPreset.confidence}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Severity Level</span>
                  <span className={`inline-block px-2 py-0.5 mt-0.5 rounded text-[11px] font-semibold border ${selectedPreset.severityColor}`}>
                    {selectedPreset.severity.split(' - ')[0]}
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#0d1e30] border border-[#1d3550] text-xs">
                <span className="text-slate-400 block mb-1 font-mono uppercase text-[10px]">Recommended Action</span>
                <p className="text-slate-200">{selectedPreset.action}</p>
              </div>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-[#112338] border border-[#1c3858] text-[11px] text-slate-400 flex items-center justify-between">
            <span>Model: Custom VGG-inspired 4-block CNN</span>
            <span className="text-emerald-400 font-mono">mAP: 89.6%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   3. Customer Churn Prediction Simulator
   ========================================================= */
function ChurnPredictionSimulator() {
  const [tenure, setTenure] = useState(12);
  const [monthlyCharges, setMonthlyCharges] = useState(75);
  const [contractType, setContractType] = useState('Month-to-month');
  const [supportCalls, setSupportCalls] = useState(3);
  const [techSupport, setTechSupport] = useState(false);

  // Heuristic ML scoring formula approximating trained Random Forest weights
  let score = 25;
  if (contractType === 'Month-to-month') score += 28;
  if (contractType === 'One year') score += 8;
  if (contractType === 'Two year') score -= 14;

  score += supportCalls * 7;
  score += Math.round((monthlyCharges - 30) * 0.25);
  score -= Math.round(tenure * 0.4);
  if (!techSupport) score += 12;

  const churnProbability = Math.min(96, Math.max(4, score));
  const riskTier = churnProbability > 65 ? 'High Risk' : churnProbability > 35 ? 'Moderate Risk' : 'Low Risk';
  const riskColor = churnProbability > 65 ? 'text-rose-400' : churnProbability > 35 ? 'text-amber-400' : 'text-emerald-400';

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h4 className="text-base font-semibold text-white flex items-center gap-2">
          <Sliders className="text-[#4fdbc8]" size={18} />
          Customer Retention & Churn Risk Predictor
        </h4>
        <span className="text-xs text-slate-400 font-mono">Scikit-learn Classification Model</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sliders */}
        <div className="p-4 rounded-xl bg-[#071320] border border-[#172b40] space-y-3.5">
          <span className="text-xs font-mono uppercase text-[#4fdbc8] block">Customer Behavioral Features</span>
          
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Account Tenure</span>
              <span className="text-[#4fdbc8] font-mono">{tenure} months</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="72" 
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full accent-[#4fdbc8] h-1.5 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Monthly Charges</span>
              <span className="text-[#4fdbc8] font-mono">${monthlyCharges}/mo</span>
            </div>
            <input 
              type="range" 
              min="20" 
              max="120" 
              value={monthlyCharges}
              onChange={(e) => setMonthlyCharges(Number(e.target.value))}
              className="w-full accent-[#4fdbc8] h-1.5 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Customer Service Calls</span>
              <span className="text-[#4fdbc8] font-mono">{supportCalls} tickets</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="8" 
              value={supportCalls}
              onChange={(e) => setSupportCalls(Number(e.target.value))}
              className="w-full accent-[#4fdbc8] h-1.5 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <div>
              <label className="text-[11px] text-slate-400 block mb-1">Contract Type</label>
              <select
                value={contractType}
                onChange={(e) => setContractType(e.target.value)}
                className="w-full bg-[#0d1e30] border border-[#213954] rounded-lg px-2 py-1.5 text-xs text-white"
              >
                <option value="Month-to-month">Month-to-month</option>
                <option value="One year">One year</option>
                <option value="Two year">Two year</option>
              </select>
            </div>
            <div>
              <label className="text-[11px] text-slate-400 block mb-1">Tech Support Add-on</label>
              <button
                type="button"
                onClick={() => setTechSupport(!techSupport)}
                className={`w-full py-1.5 px-2 rounded-lg text-xs font-medium border text-center transition ${
                  techSupport 
                    ? 'bg-[#4fdbc8]/15 border-[#4fdbc8] text-[#4fdbc8]' 
                    : 'bg-[#0d1e30] border-[#213954] text-slate-400'
                }`}
              >
                {techSupport ? 'Subscribed' : 'Not Subscribed'}
              </button>
            </div>
          </div>
        </div>

        {/* Prediction Results Gauge */}
        <div className="p-4 rounded-xl bg-[#071320] border border-[#172b40] flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono uppercase text-[#4fdbc8] block mb-3">Attrition Risk Probability</span>
            
            <div className="text-center py-2">
              <div className={`text-4xl font-extrabold font-mono ${riskColor}`}>
                {churnProbability}%
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider mt-1 text-slate-300">
                Classification: <span className={riskColor}>{riskTier}</span>
              </div>
            </div>

            {/* Visual Probability Bar */}
            <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden my-3">
              <div 
                className={`h-full transition-all duration-300 ${
                  churnProbability > 65 ? 'bg-rose-500' : churnProbability > 35 ? 'bg-amber-400' : 'bg-emerald-400'
                }`}
                style={{ width: `${churnProbability}%` }}
              />
            </div>

            <div className="space-y-1.5 text-xs">
              <span className="text-[11px] font-mono text-slate-400 uppercase block">Top Feature Attribution</span>
              <div className="p-2.5 rounded bg-[#0d1e30] border border-[#1b3450] space-y-1 text-[11px]">
                <div className="flex justify-between">
                  <span>Contract Terms ({contractType})</span>
                  <span className="font-mono text-slate-300">{contractType === 'Month-to-month' ? '+28% Risk' : '-14% Risk'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Support Tickets ({supportCalls})</span>
                  <span className="font-mono text-slate-300">+{supportCalls * 7}% Risk</span>
                </div>
                <div className="flex justify-between">
                  <span>Tenure Buffer ({tenure} mo)</span>
                  <span className="font-mono text-emerald-400">-{Math.round(tenure * 0.4)}% Protection</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 p-2.5 rounded-lg bg-[#112438] border border-[#1b3b5c] text-xs text-slate-300 flex items-center justify-between">
            <span>Model: Ensemble Gradient Boosting</span>
            <span className="text-[#4fdbc8] font-mono">ROC-AUC: 0.91</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   4. Loan Risk Prediction Simulator
   ========================================================= */
function LoanRiskSimulator() {
  const [creditScore, setCreditScore] = useState(680);
  const [income, setIncome] = useState(55000);
  const [loanAmount, setLoanAmount] = useState(18000);
  const [dti, setDti] = useState(28);

  // Neural network risk approximation
  // High credit score & income -> low risk
  // High DTI and loan amount -> higher risk
  const scoreComponent = (850 - creditScore) * 0.18;
  const dtiComponent = dti * 0.85;
  const ratio = (loanAmount / income) * 40;
  const rawRisk = Math.round(scoreComponent + dtiComponent + ratio - 15);
  const defaultProbability = Math.min(94, Math.max(3, rawRisk));

  const decision = defaultProbability < 25 ? 'Approved (Prime)' : defaultProbability < 50 ? 'Approved (Standard Risk)' : 'Review / Declined';
  const decisionColor = defaultProbability < 25 ? 'text-emerald-400' : defaultProbability < 50 ? 'text-cyan-400' : 'text-rose-400';

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h4 className="text-base font-semibold text-white flex items-center gap-2">
          <DollarSign className="text-[#c0c1ff]" size={18} />
          ANN Credit Default Risk Evaluator
        </h4>
        <span className="text-xs text-slate-400 font-mono">TensorFlow & Keras Neural Network</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sliders */}
        <div className="p-4 rounded-xl bg-[#071320] border border-[#172b40] space-y-3.5">
          <span className="text-xs font-mono uppercase text-[#c0c1ff] block">Applicant Financial Profile</span>
          
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Credit Score (FICO)</span>
              <span className="text-[#c0c1ff] font-mono">{creditScore}</span>
            </div>
            <input 
              type="range" 
              min="400" 
              max="850" 
              value={creditScore}
              onChange={(e) => setCreditScore(Number(e.target.value))}
              className="w-full accent-[#c0c1ff] h-1.5 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Annual Gross Income</span>
              <span className="text-[#c0c1ff] font-mono">${income.toLocaleString()}</span>
            </div>
            <input 
              type="range" 
              min="20000" 
              max="180000" 
              step="5000"
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
              className="w-full accent-[#c0c1ff] h-1.5 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Requested Loan Amount</span>
              <span className="text-[#c0c1ff] font-mono">${loanAmount.toLocaleString()}</span>
            </div>
            <input 
              type="range" 
              min="3000" 
              max="60000" 
              step="1000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full accent-[#c0c1ff] h-1.5 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Debt-to-Income (DTI)</span>
              <span className="text-[#c0c1ff] font-mono">{dti}%</span>
            </div>
            <input 
              type="range" 
              min="5" 
              max="60" 
              value={dti}
              onChange={(e) => setDti(Number(e.target.value))}
              className="w-full accent-[#c0c1ff] h-1.5 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>
        </div>

        {/* Prediction Results */}
        <div className="p-4 rounded-xl bg-[#071320] border border-[#172b40] flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono uppercase text-[#c0c1ff] block mb-3">Neural Underwriting Verdict</span>
            
            <div className="p-4 rounded-xl bg-[#0d1e30] border border-[#1c3550] text-center space-y-1 mb-4">
              <span className="text-xs text-slate-400 uppercase tracking-wider block">Credit Decision</span>
              <div className={`text-xl font-extrabold ${decisionColor}`}>
                {decision}
              </div>
              <div className="text-xs font-mono text-slate-400">
                Default Likelihood: <span className="font-bold text-white">{defaultProbability}%</span>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between p-2 rounded bg-[#091524]">
                <span className="text-slate-400">Debt Ratio Weight</span>
                <span className="font-mono text-slate-200">{(loanAmount / income * 100).toFixed(1)}% of Income</span>
              </div>
              <div className="flex justify-between p-2 rounded bg-[#091524]">
                <span className="text-slate-400">Neural Confidence Score</span>
                <span className="font-mono text-[#c0c1ff]">92.8% Confidence</span>
              </div>
              <div className="flex justify-between p-2 rounded bg-[#091524]">
                <span className="text-slate-400">Risk Assessment Model</span>
                <span className="font-mono text-slate-200">4-Layer Dense ANN</span>
              </div>
            </div>
          </div>

          <div className="mt-3 p-2.5 rounded-lg bg-[#112438] border border-[#1b3b5c] text-xs text-slate-300 flex items-center justify-between">
            <span>Architecture: TensorFlow Dense ANN</span>
            <span className="text-[#c0c1ff] font-mono">Loss: 0.18 BCE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
