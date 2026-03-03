import { motion } from 'motion/react';
import { Factory, TrendingDown, Leaf, Award, Globe, Users } from 'lucide-react';

export default function Impact() {
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
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white via-[#00C6FF] to-[#00FFB2] bg-clip-text text-transparent">
            National-Level Impact Potential
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Scaling industrial decarbonization across Thailand's export manufacturing sector
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00C6FF] to-[#00FFB2] mx-auto mt-6"></div>
        </motion.div>

        {/* Key Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: Factory,
              value: '1,000',
              label: 'SMEs Onboarded',
              description: 'Manufacturing facilities',
              color: 'from-[#00C6FF] to-[#1E90FF]'
            },
            {
              icon: TrendingDown,
              value: '8–15%',
              label: 'Energy Reduction',
              description: 'Average improvement',
              color: 'from-[#00FFB2] to-[#00E676]'
            },
            {
              icon: Leaf,
              value: '5–10%',
              label: 'Carbon Reduction',
              description: 'Per unit decrease',
              color: 'from-[#00E676] to-[#00FFB2]'
            },
            {
              icon: Award,
              value: '+25pts',
              label: 'ESG Score Boost',
              description: 'Transparency increase',
              color: 'from-[#1E90FF] to-[#00C6FF]'
            }
          ].map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 20px 50px -10px rgba(0, 198, 255, 0.3)' }}
              className="relative bg-[#121821] border border-[#00C6FF]/20 rounded-xl p-8 overflow-hidden group hover:border-[#00C6FF]/50 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00C6FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative">
                <div className={`w-16 h-16 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-white mb-1">{metric.label}</div>
                <div className="text-sm text-gray-400">{metric.description}</div>
              </div>

              <div className={`absolute -bottom-3 -right-3 w-32 h-32 bg-gradient-to-tl ${metric.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity`}></div>
            </motion.div>
          ))}
        </div>

        {/* Cumulative Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-[#121821] to-[#1a2332] border border-[#00C6FF]/30 rounded-2xl p-12 mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#00C6FF]/10 to-transparent rounded-full blur-3xl"></div>
          
          <div className="relative">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Projected Cumulative Impact (2026-2030)</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  metric: '450,000',
                  unit: 'tCO2e',
                  label: 'Total Carbon Avoided',
                  description: 'Equivalent to removing 97,000 cars from roads annually'
                },
                {
                  metric: '3.2 TWh',
                  unit: 'saved',
                  label: 'Energy Consumption Reduced',
                  description: 'Powering 640,000 Thai households for one year'
                },
                {
                  metric: '฿12.5B',
                  unit: 'value',
                  label: 'Export Market Access',
                  description: 'Additional revenue from ESG-compliant markets'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-[#0B0F14]/50 border border-[#00C6FF]/20 rounded-xl p-6 hover:border-[#00C6FF]/50 transition-all">
                    <div className="text-4xl font-bold text-white mb-1">{item.metric}</div>
                    <div className="text-[#00FFB2] font-semibold mb-3">{item.unit}</div>
                    <div className="text-xl font-semibold text-white mb-3">{item.label}</div>
                    <div className="text-sm text-gray-400">{item.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Thailand Supply Chain Network Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-[#121821] border border-[#00C6FF]/20 rounded-2xl p-8 mb-16 overflow-hidden"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Thailand Supply Chain Network</h2>
          
          {/* Simplified map visualization */}
          <div className="relative h-[500px] bg-[#0B0F14] rounded-xl border border-[#00C6FF]/20 overflow-hidden">
            {/* Map background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Globe className="w-64 h-64 text-[#1a2332]" />
            </div>

            {/* Manufacturing clusters */}
            {[
              { name: 'Bangkok', x: '50%', y: '60%', size: 120, facilities: 320 },
              { name: 'Rayong', x: '65%', y: '55%', size: 80, facilities: 180 },
              { name: 'Chonburi', x: '62%', y: '58%', size: 70, facilities: 140 },
              { name: 'Samut Prakan', x: '52%', y: '62%', size: 60, facilities: 110 },
              { name: 'Chiang Mai', x: '35%', y: '25%', size: 50, facilities: 85 },
              { name: 'Phuket', x: '25%', y: '85%', size: 40, facilities: 65 }
            ].map((cluster, index) => (
              <motion.div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{ left: cluster.x, top: cluster.y }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2 + index * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.2 }}
              >
                {/* Pulsing ring */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-[#00C6FF]"
                  style={{ width: cluster.size, height: cluster.size }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />
                
                {/* Main dot */}
                <div
                  className="relative bg-gradient-to-br from-[#00C6FF] to-[#00FFB2] rounded-full shadow-lg shadow-[#00C6FF]/50 flex items-center justify-center"
                  style={{ width: cluster.size, height: cluster.size }}
                >
                  <Factory className="text-white" style={{ width: cluster.size * 0.4, height: cluster.size * 0.4 }} />
                </div>

                {/* Tooltip */}
                <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-[#121821] border border-[#00C6FF]/50 rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                  <p className="text-white font-semibold">{cluster.name}</p>
                  <p className="text-sm text-gray-400">{cluster.facilities} facilities</p>
                </div>
              </motion.div>
            ))}

            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <motion.line
                x1="50%" y1="60%" x2="65%" y2="55%"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1.5 }}
              />
              <motion.line
                x1="50%" y1="60%" x2="62%" y2="58%"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1.6 }}
              />
              <motion.line
                x1="50%" y1="60%" x2="35%" y2="25%"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1.7 }}
              />
              <defs>
                <linearGradient id="lineGradient">
                  <stop offset="0%" stopColor="#00C6FF" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#00FFB2" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Connected manufacturing network covering <span className="text-[#00FFB2] font-semibold">6 major industrial regions</span>
            </p>
          </div>
        </motion.div>

        {/* Sector Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-[#121821] border border-[#00C6FF]/20 rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Impact by Manufacturing Sector</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                sector: 'Electronics & Semiconductors',
                facilities: 340,
                reduction: '12.4%',
                savings: '142,000 tCO2e',
                color: 'from-[#00C6FF] to-[#1E90FF]'
              },
              {
                sector: 'Automotive & Parts',
                facilities: 285,
                reduction: '9.8%',
                savings: '118,000 tCO2e',
                color: 'from-[#00FFB2] to-[#00E676]'
              },
              {
                sector: 'Food Processing & Export',
                facilities: 375,
                reduction: '11.2%',
                savings: '190,000 tCO2e',
                color: 'from-[#1E90FF] to-[#00C6FF]'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.1 }}
                className="bg-[#0B0F14]/50 border border-[#00C6FF]/20 rounded-xl p-6 hover:border-[#00C6FF]/50 hover:bg-[#0B0F14]/80 transition-all"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mb-4 shadow-lg`}>
                  <Factory className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{item.sector}</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Facilities</span>
                    <span className="text-white font-semibold">{item.facilities}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Avg. Reduction</span>
                    <span className="text-[#00E676] font-semibold">{item.reduction}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Total Savings</span>
                    <span className="text-[#00FFB2] font-semibold">{item.savings}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Global Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#121821] to-[#1a2332] border border-[#00C6FF]/30 rounded-full">
            <Users className="w-6 h-6 text-[#00FFB2]" />
            <span className="text-gray-300">Empowering <span className="text-white font-semibold">50,000+ export SMEs</span> across Southeast Asia</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
