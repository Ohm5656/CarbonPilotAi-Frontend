import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingDown, Zap, Leaf, Target, Play, AlertTriangle, X, Info, ChevronRight } from 'lucide-react';
import SimulationPanel from '../components/SimulationPanel';
import PageTransition from '../components/PageTransition';
import { SkeletonCard, SkeletonChart } from '../components/Skeleton';

// Mock data for charts with anomalies
const energyData = [
  { day: 'Mon', actual: 850, predicted: 820, isAnomaly: false, lower: 800, upper: 840 },
  { day: 'Tue', actual: 920, predicted: 900, isAnomaly: false, lower: 880, upper: 920 },
  { day: 'Wed', actual: 780, predicted: 810, isAnomaly: false, lower: 790, upper: 830 },
  { day: 'Thu', actual: 1150, predicted: 930, isAnomaly: true, lower: 910, upper: 950, anomalyReason: 'Peak load spike detected' },
  { day: 'Fri', actual: 890, predicted: 880, isAnomaly: false, lower: 860, upper: 900 },
  { day: 'Sat', actual: 650, predicted: 670, isAnomaly: false, lower: 650, upper: 690 },
  { day: 'Sun', actual: 600, predicted: 620, isAnomaly: false, lower: 600, upper: 640 },
];

// Add future forecast data
const forecastData = [
  { day: 'Mon', actual: 850, predicted: 820, lower: 800, upper: 840 },
  { day: 'Tue', actual: 920, predicted: 900, lower: 880, upper: 920 },
  { day: 'Wed', actual: 780, predicted: 810, lower: 790, upper: 830 },
  { day: 'Thu', actual: 1150, predicted: 930, lower: 910, upper: 950 },
  { day: 'Fri', actual: 890, predicted: 880, lower: 860, upper: 900 },
  { day: 'Sat', actual: 650, predicted: 670, lower: 650, upper: 690 },
  { day: 'Sun', actual: 600, predicted: 620, lower: 600, upper: 640 },
  { day: '+1', actual: null, predicted: 610, lower: 580, upper: 640 },
  { day: '+2', actual: null, predicted: 595, lower: 560, upper: 630 },
  { day: '+3', actual: null, predicted: 580, lower: 545, upper: 615 },
];

const anomalies = [
  {
    id: 1,
    date: 'Mar 2, 2026',
    metric: 'Energy Consumption',
    severity: 'High' as const,
    deviation: '+23.7%',
    description: 'Unusual peak load spike at 14:30',
    suspectedCause: 'All production lines running simultaneously during peak hours',
    recommendedAction: 'Implement staggered production schedule to avoid concurrent high-load operations'
  },
  {
    id: 2,
    date: 'Feb 28, 2026',
    metric: 'Carbon Intensity',
    severity: 'Medium' as const,
    deviation: '+12.4%',
    description: 'Grid carbon factor increased',
    suspectedCause: 'Regional grid shifted to coal-heavy generation mix',
    recommendedAction: 'Consider battery storage to shift consumption to cleaner hours'
  },
  {
    id: 3,
    date: 'Feb 25, 2026',
    metric: 'Equipment Efficiency',
    severity: 'Low' as const,
    deviation: '-8.1%',
    description: 'Compressor #3 efficiency drop',
    suspectedCause: 'Maintenance cycle overdue by 14 days',
    recommendedAction: 'Schedule immediate preventive maintenance'
  }
];

interface KPICardProps {
  title: string;
  value: string;
  unit: string;
  trend: string;
  icon: React.ElementType;
  color: string;
}

function KPICard({ title, value, unit, trend, icon: Icon, color }: KPICardProps) {
  const [count, setCount] = useState(0);
  const targetValue = parseFloat(value);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = targetValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [targetValue]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, boxShadow: `0 20px 40px -10px ${color}40` }}
      className="relative bg-[#121821] border border-[#00C6FF]/20 rounded-xl p-6 overflow-hidden group hover:border-[#00C6FF]/50 transition-all"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#00C6FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="relative flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-gray-400 mb-1">{title}</p>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-white">{count.toFixed(1)}</span>
            <span className="text-lg text-gray-400">{unit}</span>
          </div>
        </div>
        <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-lg flex items-center justify-center shadow-lg`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>

      <div className="relative flex items-center gap-2 text-sm">
        <span className="text-[#00E676]">{trend}</span>
        <span className="text-gray-400">vs last month</span>
      </div>

      {/* Glow effect */}
      <div className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-tl ${color} rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity`}></div>
    </motion.div>
  );
}

export default function Dashboard() {
  const [gaugeValue] = useState(73);
  const [simulationOpen, setSimulationOpen] = useState(false);
  const [selectedAnomaly, setSelectedAnomaly] = useState<typeof anomalies[0] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-[#121821]/95 backdrop-blur-xl border border-[#00C6FF]/30 rounded-lg p-3 shadow-2xl">
          <p className="text-white font-semibold mb-2">{data.day}</p>
          {data.actual !== null && (
            <p className="text-sm text-[#00C6FF]">Actual: {data.actual} kWh</p>
          )}
          <p className="text-sm text-[#00FFB2]">Predicted: {data.predicted} kWh</p>
          {data.isAnomaly && (
            <p className="text-sm text-[#FF6B6B] mt-2 flex items-center gap-1">
              <AlertTriangle className="w-3 h-3" />
              Anomaly detected
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  const severityColors = {
    High: 'bg-[#FF6B6B]/20 text-[#FF6B6B] border-[#FF6B6B]/40',
    Medium: 'bg-[#FFB020]/20 text-[#FFB020] border-[#FFB020]/40',
    Low: 'bg-[#00C6FF]/20 text-[#00C6FF] border-[#00C6FF]/40'
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0B0F14] px-6 py-12">
        <div className="fixed inset-0 bg-[linear-gradient(to_right,#121821_1px,transparent_1px),linear-gradient(to_bottom,#121821_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-12"
          >
            <div className="h-12 w-64 bg-[#121821] rounded-lg animate-pulse mb-2" />
            <div className="h-6 w-96 bg-[#121821] rounded animate-pulse" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[...Array(4)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2">
              <SkeletonChart />
            </div>
            <SkeletonChart />
          </div>
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
    <div className="min-h-screen bg-[#0B0F14] px-6 py-12">
      {/* Background grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#121821_1px,transparent_1px),linear-gradient(to_bottom,#121821_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-white to-[#00C6FF] bg-clip-text text-transparent">
            AI Dashboard
          </h1>
          <p className="text-gray-400">Real-time carbon intelligence and optimization</p>
        </motion.div>

        {/* KPI Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <KPICard
            title="Carbon per Unit"
            value="1.08"
            unit="kgCO2e"
            trend="-13.2%"
            icon={Leaf}
            color="from-[#00C6FF] to-[#00FFB2]"
          />
          <KPICard
            title="Emission Forecast"
            value="32.4"
            unit="tCO2e"
            trend="+2.1%"
            icon={TrendingDown}
            color="from-[#1E90FF] to-[#00C6FF]"
          />
          <KPICard
            title="Energy Efficiency"
            value="87.5"
            unit="%"
            trend="+5.8%"
            icon={Zap}
            color="from-[#00E676] to-[#00FFB2]"
          />
          <KPICard
            title="ESG Readiness"
            value="91.2"
            unit="/100"
            trend="+8.4%"
            icon={Target}
            color="from-[#FFB020] to-[#00E676]"
          />
        </div>

        {/* Top Section - Forecast Chart + Anomaly Alerts */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* Forecast ML Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 bg-[#121821] border border-[#00C6FF]/20 rounded-xl p-6 hover:border-[#00C6FF]/50 transition-all"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold text-white">Actual vs Predicted Energy</h3>
                <p className="text-xs text-gray-500 mt-1">Forecast horizon: 3 days ahead</p>
              </div>
              <div className="flex gap-2">
                <div className="px-3 py-1 bg-[#00E676]/20 border border-[#00E676]/40 rounded-full text-xs text-[#00E676] font-semibold">
                  Model Confidence: 94.2%
                </div>
                <div className="px-3 py-1 bg-[#00C6FF]/20 border border-[#00C6FF]/40 rounded-full text-xs text-[#00C6FF] font-semibold">
                  MAPE: 4.3%
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={forecastData}>
                <defs>
                  <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00C6FF" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00C6FF" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00FFB2" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00FFB2" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="confidenceBand" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00FFB2" stopOpacity={0.15}/>
                    <stop offset="100%" stopColor="#00FFB2" stopOpacity={0.05}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
                <XAxis dataKey="day" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip content={<CustomTooltip />} />
                {/* Confidence band */}
                <Area
                  type="monotone"
                  dataKey="upper"
                  stroke="none"
                  fill="url(#confidenceBand)"
                  name="Upper Bound"
                />
                <Area
                  type="monotone"
                  dataKey="lower"
                  stroke="none"
                  fill="url(#confidenceBand)"
                  name="Lower Bound"
                />
                <Area
                  type="monotone"
                  dataKey="actual"
                  stroke="#00C6FF"
                  strokeWidth={2}
                  fill="url(#colorActual)"
                  name="Actual"
                />
                <Area
                  type="monotone"
                  dataKey="predicted"
                  stroke="#00FFB2"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  fill="url(#colorPredicted)"
                  name="Predicted"
                />
                {/* Anomaly markers */}
                <Line
                  type="monotone"
                  dataKey={(data: any) => data.isAnomaly ? data.actual : null}
                  stroke="#FF6B6B"
                  strokeWidth={0}
                  dot={{ r: 6, fill: '#FF6B6B', stroke: '#fff', strokeWidth: 2 }}
                  name="Anomaly"
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="flex gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#00C6FF] rounded-full"></div>
                <span className="text-sm text-gray-400">Actual Energy (kWh)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#00FFB2] rounded-full"></div>
                <span className="text-sm text-gray-400">ML Forecast</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#00FFB2] opacity-30 rounded-full"></div>
                <span className="text-sm text-gray-400">Confidence Band</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#FF6B6B] rounded-full"></div>
                <span className="text-sm text-gray-400">Anomaly</span>
              </div>
            </div>
          </motion.div>

          {/* Anomaly Alerts Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#121821] border border-[#00C6FF]/20 rounded-xl p-6 hover:border-[#00C6FF]/50 transition-all"
          >
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-[#FF6B6B]" />
              <h3 className="text-lg font-semibold text-white">Anomaly Alerts</h3>
            </div>
            <div className="space-y-3 max-h-[340px] overflow-y-auto">
              {anomalies.map((anomaly) => (
                <motion.div
                  key={anomaly.id}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedAnomaly(anomaly)}
                  className="bg-[#0B0F14] border border-[#00C6FF]/20 rounded-lg p-3 cursor-pointer hover:border-[#00C6FF]/50 transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`px-2 py-0.5 rounded text-xs font-semibold border ${severityColors[anomaly.severity]}`}>
                          {anomaly.severity}
                        </span>
                        <span className="text-xs text-gray-500">{anomaly.date}</span>
                      </div>
                      <p className="text-sm text-white font-medium">{anomaly.metric}</p>
                      <p className="text-xs text-gray-400 mt-1">{anomaly.description}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-500 flex-shrink-0 mt-1" />
                  </div>
                  <div className="text-xs font-semibold text-[#FF6B6B]">
                    Deviation: {anomaly.deviation}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Carbon Reduction Gauge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#121821] border border-[#00C6FF]/20 rounded-xl p-6 hover:border-[#00C6FF]/50 transition-all mb-12"
        >
          <h3 className="text-xl font-semibold mb-6 text-white">Carbon Reduction Potential</h3>
          <div className="flex items-center justify-center">
            <div className="relative w-64 h-64">
              {/* Gauge background */}
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                {/* Background arc */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#1a2332"
                  strokeWidth="20"
                  strokeDasharray="377 377"
                  strokeDashoffset="94.25"
                />
                {/* Gradient arc */}
                <defs>
                  <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00E676" />
                    <stop offset="50%" stopColor="#00FFB2" />
                    <stop offset="100%" stopColor="#00C6FF" />
                  </linearGradient>
                </defs>
                <motion.circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="url(#gaugeGradient)"
                  strokeWidth="20"
                  strokeLinecap="round"
                  strokeDasharray="377 377"
                  initial={{ strokeDashoffset: 377 }}
                  animate={{ strokeDashoffset: 377 - (377 * 0.75 * gaugeValue / 100) }}
                  transition={{ duration: 2, ease: "easeOut" }}
                />
              </svg>
              
              {/* Center text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-bold text-white">{gaugeValue}%</span>
                <span className="text-sm text-gray-400 mt-2">Optimization Score</span>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-400 text-sm">
              Potential annual savings: <span className="text-[#00E676] font-semibold">2.4 tCO2e</span>
            </p>
          </div>
        </motion.div>

        {/* AI Recommendations Panel with Optimization Scoring */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-[#121821] to-[#1a2332] border border-[#00C6FF]/20 rounded-xl p-8 hover:border-[#00C6FF]/50 transition-all"
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">AI Optimization</h3>
              <p className="text-gray-400">Machine learning-powered recommendations</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-sm text-gray-400">Optimize for:</div>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 bg-gradient-to-r from-[#00C6FF] to-[#00FFB2] text-white rounded-lg text-sm font-semibold">
                  Carbon
                </button>
                <button className="px-3 py-1.5 bg-[#0B0F14] border border-[#00C6FF]/30 text-gray-400 rounded-lg text-sm hover:text-white transition-colors">
                  Cost
                </button>
                <button className="px-3 py-1.5 bg-[#0B0F14] border border-[#00C6FF]/30 text-gray-400 rounded-lg text-sm hover:text-white transition-colors">
                  Compliance
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            {[
              {
                title: "Shift 20% production to off-peak hours",
                reduction: "8.3%",
                savings: "฿18,000/month",
                roi: "14 months",
                impactScore: 94,
                confidence: "High",
                why: "Highest carbon reduction with minimal cost. Grid is 35% cleaner during off-peak."
              },
              {
                title: "Replace compressor unit for 6% reduction",
                reduction: "6.0%",
                savings: "฿12,500/month",
                roi: "18 months",
                impactScore: 82,
                confidence: "High",
                why: "New unit is 22% more efficient. Payback period favorable vs maintenance costs."
              },
              {
                title: "Reduce peak load during 14:00–17:00",
                reduction: "4.2%",
                savings: "฿8,700/month",
                roi: "9 months",
                impactScore: 76,
                confidence: "Medium",
                why: "Quick win with short ROI. Requires minor process adjustments only."
              }
            ].map((recommendation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-[#0B0F14]/50 border border-[#00C6FF]/20 rounded-lg p-5 hover:border-[#00C6FF]/50 hover:bg-[#0B0F14]/80 transition-all relative"
              >
                {index === 0 && (
                  <div className="absolute -top-3 left-4 px-3 py-1 bg-gradient-to-r from-[#00C6FF] to-[#00FFB2] text-white rounded-full text-xs font-bold">
                    ⭐ Top Recommendation
                  </div>
                )}
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-semibold text-white flex-1">{recommendation.title}</h4>
                  <div className="flex items-center gap-2">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{recommendation.impactScore}</div>
                      <div className="text-xs text-gray-400">Impact Score</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#121821] border border-[#00C6FF]/20 rounded-lg p-3 mb-3">
                  <div className="flex items-start gap-2 text-sm text-gray-300">
                    <Info className="w-4 h-4 text-[#00C6FF] flex-shrink-0 mt-0.5" />
                    <p className="text-xs">{recommendation.why}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400">Carbon Reduction</p>
                    <p className="text-[#00E676] font-semibold">{recommendation.reduction}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Cost Saving</p>
                    <p className="text-[#00FFB2] font-semibold">{recommendation.savings}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">ROI</p>
                    <p className="text-white font-semibold">{recommendation.roi}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Confidence</p>
                    <p className={`font-semibold ${recommendation.confidence === 'High' ? 'text-[#00E676]' : 'text-[#FFB020]'}`}>
                      {recommendation.confidence}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400">Priority</p>
                    <p className="text-white font-semibold">#{index + 1}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            onClick={() => setSimulationOpen(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-gradient-to-r from-[#00C6FF] to-[#00FFB2] text-[#0B0F14] rounded-lg font-medium shadow-lg shadow-[#00C6FF]/30 hover:shadow-xl hover:shadow-[#00C6FF]/50 transition-all flex items-center justify-center gap-2"
          >
            <Play className="w-5 h-5" />
            Simulate Impact
          </motion.button>
        </motion.div>
      </div>

      {/* Simulation Panel */}
      <SimulationPanel isOpen={simulationOpen} onClose={() => setSimulationOpen(false)} />

      {/* Anomaly Detail Panel */}
      {selectedAnomaly && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedAnomaly(null)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
            className="fixed right-0 top-0 h-full w-full md:w-[500px] bg-[#121821] border-l border-[#00C6FF]/30 p-6 overflow-y-auto"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white">Anomaly Details</h3>
                <p className="text-gray-400 text-sm mt-1">{selectedAnomaly.date}</p>
              </div>
              <button
                onClick={() => setSelectedAnomaly(null)}
                className="w-10 h-10 bg-[#0B0F14] hover:bg-[#121821] border border-[#00C6FF]/30 rounded-lg flex items-center justify-center transition-all"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <div className={`inline-flex px-3 py-1.5 rounded-lg text-sm font-semibold border mb-4 ${severityColors[selectedAnomaly.severity]}`}>
                  {selectedAnomaly.severity} Severity
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{selectedAnomaly.metric}</h4>
                <p className="text-gray-400">{selectedAnomaly.description}</p>
              </div>

              <div className="bg-[#0B0F14] border border-[#00C6FF]/20 rounded-lg p-5">
                <h5 className="text-sm font-semibold text-gray-400 mb-2">Deviation</h5>
                <p className="text-3xl font-bold text-[#FF6B6B]">{selectedAnomaly.deviation}</p>
                <p className="text-xs text-gray-500 mt-1">from expected baseline</p>
              </div>

              <div className="bg-[#0B0F14] border border-[#00C6FF]/20 rounded-lg p-5">
                <h5 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#FFB020]" />
                  Suspected Cause
                </h5>
                <p className="text-gray-300">{selectedAnomaly.suspectedCause}</p>
              </div>

              <div className="bg-gradient-to-br from-[#00C6FF]/10 to-[#00FFB2]/10 border border-[#00C6FF]/30 rounded-lg p-5">
                <h5 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#00FFB2]" />
                  Recommended Action
                </h5>
                <p className="text-gray-300">{selectedAnomaly.recommendedAction}</p>
              </div>

              <button
                onClick={() => setSelectedAnomaly(null)}
                className="w-full py-3 bg-gradient-to-r from-[#00C6FF] to-[#00FFB2] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#00C6FF]/50 transition-all"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
    </PageTransition>
  );
}
