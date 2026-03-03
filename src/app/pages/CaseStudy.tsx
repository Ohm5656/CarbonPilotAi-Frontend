import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { TrendingDown, Zap, Award, ArrowRight } from 'lucide-react';

const beforeData = [
  { month: 'Jan', carbon: 1.32, energy: 10500 },
  { month: 'Feb', carbon: 1.28, energy: 10300 },
  { month: 'Mar', carbon: 1.35, energy: 10800 },
  { month: 'Apr', carbon: 1.22, energy: 10100 },
  { month: 'May', carbon: 1.25, energy: 10200 },
  { month: 'Jun', carbon: 1.30, energy: 10600 },
];

const afterData = [
  { month: 'Jan', carbon: 1.12, energy: 9500 },
  { month: 'Feb', carbon: 1.08, energy: 9300 },
  { month: 'Mar', carbon: 1.10, energy: 9400 },
  { month: 'Apr', carbon: 1.06, energy: 9200 },
  { month: 'May', carbon: 1.08, energy: 9300 },
  { month: 'Jun', carbon: 1.05, energy: 9100 },
];

export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-[#0B0F14] px-6 py-12">
      {/* Background grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#121821_1px,transparent_1px),linear-gradient(to_bottom,#121821_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white via-[#00C6FF] to-[#00FFB2] bg-clip-text text-transparent">
            Factory Transformation Simulation
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real-world impact of AI-driven optimization on a Thai manufacturing facility
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00C6FF] to-[#00FFB2] mx-auto mt-6"></div>
        </motion.div>

        {/* Before vs After Stats */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Before Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#121821] border border-red-500/30 rounded-xl p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-white">Before AI Optimization</h2>
              <div className="px-3 py-1 bg-red-500/20 text-red-400 text-sm rounded-full border border-red-500/30">
                Baseline
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#0B0F14]/50 rounded-lg p-6 border border-red-500/20">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-gray-400">Carbon per Unit</span>
                  <TrendingDown className="w-5 h-5 text-red-400" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">1.25</span>
                  <span className="text-xl text-gray-400">kgCO2e</span>
                </div>
              </div>

              <div className="bg-[#0B0F14]/50 rounded-lg p-6 border border-red-500/20">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-gray-400">Energy Consumption</span>
                  <Zap className="w-5 h-5 text-red-400" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">10,200</span>
                  <span className="text-xl text-gray-400">kWh</span>
                </div>
              </div>

              <div className="bg-[#0B0F14]/50 rounded-lg p-6 border border-red-500/20">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-gray-400">ESG Score</span>
                  <Award className="w-5 h-5 text-red-400" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">64</span>
                  <span className="text-xl text-gray-400">/100</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* After Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-[#121821] to-[#1a2332] border border-[#00C6FF]/50 rounded-xl p-8 relative overflow-hidden shadow-xl shadow-[#00C6FF]/20"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#00C6FF]/20 to-transparent rounded-full blur-3xl"></div>
            
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-white">After AI Optimization</h2>
                <div className="px-3 py-1 bg-[#00E676]/20 text-[#00E676] text-sm rounded-full border border-[#00E676]/30">
                  Optimized
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-[#0B0F14]/80 rounded-lg p-6 border border-[#00C6FF]/30 hover:border-[#00C6FF] transition-all">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-gray-400">Carbon per Unit</span>
                    <TrendingDown className="w-5 h-5 text-[#00E676]" />
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-white">1.08</span>
                    <span className="text-xl text-gray-400">kgCO2e</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-[#00E676] font-semibold">-13.6% reduction</span>
                  </div>
                </div>

                <div className="bg-[#0B0F14]/80 rounded-lg p-6 border border-[#00C6FF]/30 hover:border-[#00C6FF] transition-all">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-gray-400">Energy Consumption</span>
                    <Zap className="w-5 h-5 text-[#00FFB2]" />
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-white">9,300</span>
                    <span className="text-xl text-gray-400">kWh</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-[#00FFB2] font-semibold">-8.8% reduction</span>
                  </div>
                </div>

                <div className="bg-[#0B0F14]/80 rounded-lg p-6 border border-[#00C6FF]/30 hover:border-[#00C6FF] transition-all">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-gray-400">ESG Score</span>
                    <Award className="w-5 h-5 text-[#1E90FF]" />
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-white">89</span>
                    <span className="text-xl text-gray-400">/100</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-[#1E90FF] font-semibold">+39% improvement</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Transformation Arrow */}
        <div className="flex justify-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="w-16 h-16 bg-gradient-to-r from-[#00C6FF] to-[#00FFB2] rounded-full flex items-center justify-center shadow-lg shadow-[#00C6FF]/50"
          >
            <ArrowRight className="w-8 h-8 text-white transform rotate-90" />
          </motion.div>
        </div>

        {/* Side-by-side Charts */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Before Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-[#121821] border border-[#00C6FF]/20 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold mb-6 text-white">Before: Carbon Emissions Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={beforeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" domain={[0.8, 1.4]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#121821',
                    border: '1px solid #ef444440',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="carbon"
                  stroke="#ef4444"
                  strokeWidth={3}
                  dot={{ fill: '#ef4444', r: 4 }}
                  name="Carbon (kgCO2e)"
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* After Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-[#121821] border border-[#00C6FF]/50 rounded-xl p-6 shadow-lg shadow-[#00C6FF]/20"
          >
            <h3 className="text-xl font-semibold mb-6 text-white">After: Carbon Emissions Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={afterData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" domain={[0.8, 1.4]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#121821',
                    border: '1px solid #00C6FF40',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="carbon"
                  stroke="#00E676"
                  strokeWidth={3}
                  dot={{ fill: '#00E676', r: 4 }}
                  name="Carbon (kgCO2e)"
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Key Improvements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-br from-[#121821] to-[#1a2332] border border-[#00C6FF]/30 rounded-xl p-8"
        >
          <h3 className="text-2xl font-semibold mb-6 text-white">Key AI-Driven Improvements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Production Scheduling",
                description: "Optimized timing to minimize peak-hour energy costs",
                impact: "22% of total savings"
              },
              {
                title: "Equipment Optimization",
                description: "ML-powered predictive maintenance and efficiency tuning",
                impact: "31% of total savings"
              },
              {
                title: "Process Refinement",
                description: "Data-driven workflow improvements reducing waste",
                impact: "47% of total savings"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="bg-[#0B0F14]/50 border border-[#00C6FF]/20 rounded-lg p-6 hover:border-[#00C6FF]/50 hover:bg-[#0B0F14]/80 transition-all"
              >
                <h4 className="text-lg font-semibold text-white mb-3">{item.title}</h4>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <span className="inline-block px-3 py-1 bg-[#00FFB2]/20 text-[#00FFB2] text-sm rounded-full border border-[#00FFB2]/30">
                  {item.impact}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Implementation Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-[#121821] border border-[#00C6FF]/30 rounded-xl p-8">
            <p className="text-gray-400 mb-2">Average Implementation Time</p>
            <p className="text-4xl font-bold text-white mb-2">90 Days</p>
            <p className="text-[#00FFB2]">to full optimization</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
