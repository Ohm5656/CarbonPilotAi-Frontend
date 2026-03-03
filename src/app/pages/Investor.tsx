import { motion } from 'motion/react';
import { TrendingUp, Target, Rocket, Globe, DollarSign, Users, BarChart3, Zap } from 'lucide-react';

export default function Investor() {
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
            Scaling Industrial Decarbonization
          </h1>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
            Across Emerging Markets
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00C6FF] to-[#00FFB2] mx-auto mt-6"></div>
        </motion.div>

        {/* Key Investment Highlights */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { label: 'TAM', value: '$8.5B', icon: TrendingUp, color: 'from-[#00C6FF] to-[#1E90FF]' },
            { label: 'Target Facilities', value: '50,000+', icon: Target, color: 'from-[#00FFB2] to-[#00E676]' },
            { label: 'Growth Rate', value: '180% YoY', icon: Rocket, color: 'from-[#1E90FF] to-[#00C6FF]' },
            { label: 'Markets', value: 'ASEAN+', icon: Globe, color: 'from-[#00E676] to-[#00FFB2]' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-[#121821] border border-[#00C6FF]/20 rounded-xl p-6 hover:border-[#00C6FF]/50 transition-all"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mb-4 shadow-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Market Opportunity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-[#121821] to-[#1a2332] border border-[#00C6FF]/30 rounded-2xl p-12 mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#00C6FF]/10 to-transparent rounded-full blur-3xl"></div>
          
          <div className="relative">
            <h2 className="text-4xl font-bold text-white mb-8">Market Size & Opportunity</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#00C6FF] to-[#00FFB2] rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  Target Segments
                </h3>
                <div className="space-y-4">
                  {[
                    { sector: 'Electronics & Semiconductors', facilities: '15,000+', color: 'from-[#00C6FF] to-[#1E90FF]' },
                    { sector: 'Automotive & Components', facilities: '12,000+', color: 'from-[#00FFB2] to-[#00E676]' },
                    { sector: 'Food Processing & Export', facilities: '18,000+', color: 'from-[#1E90FF] to-[#00C6FF]' },
                    { sector: 'Textiles & Apparel', facilities: '8,000+', color: 'from-[#00E676] to-[#FFB020]' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="bg-[#0B0F14]/50 border border-[#00C6FF]/20 rounded-lg p-4 hover:border-[#00C6FF]/50 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-semibold">{item.sector}</p>
                          <p className="text-sm text-gray-400 mt-1">Export SMEs</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-white">{item.facilities}</p>
                          <div className={`h-1 w-16 bg-gradient-to-r ${item.color} rounded-full mt-2`}></div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#FFB020] to-[#00E676] rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  CBAM Impact
                </h3>
                <div className="bg-[#0B0F14]/50 border border-[#00C6FF]/20 rounded-lg p-6 mb-6">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    EU's Carbon Border Adjustment Mechanism (CBAM) affects <span className="text-[#00FFB2] font-semibold">$42B+</span> of 
                    Thai exports annually across steel, cement, aluminum, fertilizers, and electricity sectors.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    By 2030, non-compliant exporters face <span className="text-[#FFB020] font-semibold">15-30% cost penalties</span>, 
                    creating massive demand for carbon intelligence platforms.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Affected Exports', value: '$42B+' },
                    { label: 'Compliance Deadline', value: '2026' },
                    { label: 'Penalty Range', value: '15-30%' },
                    { label: 'Market Urgency', value: 'Critical' }
                  ].map((item, index) => (
                    <div key={index} className="bg-[#0B0F14]/50 border border-[#00C6FF]/20 rounded-lg p-4 text-center">
                      <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                      <p className="text-xl font-bold text-white">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Revenue Model */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-[#121821] border border-[#00C6FF]/20 rounded-2xl p-12 mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Revenue Model</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {[
              {
                model: 'SaaS Subscriptions',
                description: 'Recurring monthly revenue from tiered plans',
                arpu: '฿25,000',
                margin: '85%'
              },
              {
                model: 'Enterprise Contracts',
                description: 'Custom implementations for large manufacturers',
                arpu: '฿150,000',
                margin: '72%'
              },
              {
                model: 'API & Integration',
                description: 'White-label solutions for ERP/MES providers',
                arpu: '฿80,000',
                margin: '92%'
              }
            ].map((stream, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="bg-[#0B0F14]/50 border border-[#00C6FF]/20 rounded-xl p-6 hover:border-[#00C6FF]/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="w-6 h-6 text-[#00FFB2]" />
                  <h3 className="text-xl font-semibold text-white">{stream.model}</h3>
                </div>
                <p className="text-gray-400 mb-6">{stream.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Avg. ARPU</p>
                    <p className="text-2xl font-bold text-white">{stream.arpu}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">Margin</p>
                    <p className="text-2xl font-bold text-[#00E676]">{stream.margin}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-[#121821] to-[#1a2332] border border-[#00C6FF]/30 rounded-xl p-8">
            <p className="text-gray-400 mb-2">Projected ARR (Year 3)</p>
            <p className="text-5xl font-bold text-white mb-2">฿840M</p>
            <p className="text-[#00FFB2]">Based on 2,800 active customers</p>
          </div>
        </motion.div>

        {/* Competitive Advantage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="bg-gradient-to-br from-[#121821] to-[#1a2332] border border-[#00C6FF]/30 rounded-2xl p-12 mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Competitive Advantage</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                advantage: 'AI Optimization Layer',
                description: 'Beyond carbon calculators - active ML-driven reduction strategies',
                differentiator: 'Not just measurement'
              },
              {
                advantage: 'Emerging Market Expertise',
                description: 'Built for ASEAN manufacturing realities, not Western enterprises',
                differentiator: 'Local-first approach'
              },
              {
                advantage: 'Product-Level Granularity',
                description: 'Per-unit carbon tracking enables CBAM compliance and pricing',
                differentiator: 'Unique precision'
              },
              {
                advantage: 'Rapid Deployment',
                description: 'Go live in 14 days vs 6 months for enterprise ESG platforms',
                differentiator: 'Speed to value'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1 }}
                className="bg-[#0B0F14]/50 border border-[#00C6FF]/20 rounded-xl p-6 hover:border-[#00C6FF]/50 hover:bg-[#0B0F14]/80 transition-all"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{item.advantage}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <span className="inline-block px-3 py-1 bg-[#00C6FF]/20 text-[#00C6FF] text-sm rounded-full border border-[#00C6FF]/30">
                  {item.differentiator}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Expansion Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7 }}
          className="bg-[#121821] border border-[#00C6FF]/20 rounded-2xl p-12"
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Market Expansion Roadmap</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#00C6FF] via-[#00FFB2] to-[#00E676]"></div>
            
            <div className="space-y-16">
              {[
                {
                  phase: 'Phase 1: Thailand (2026)',
                  targets: '3,000 facilities',
                  revenue: '฿720M ARR',
                  focus: 'Electronics, Automotive, Food Processing',
                  status: 'In Progress'
                },
                {
                  phase: 'Phase 2: ASEAN Expansion (2027)',
                  targets: '12,000 facilities',
                  revenue: '฿2.8B ARR',
                  focus: 'Vietnam, Indonesia, Malaysia entry',
                  status: 'Planned'
                },
                {
                  phase: 'Phase 3: Global Supply Chain (2028+)',
                  targets: '50,000 facilities',
                  revenue: '฿12B+ ARR',
                  focus: 'India, Bangladesh, Latin America',
                  status: 'Vision'
                }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.8 + index * 0.2 }}
                  className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Content card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-[#0B0F14]/50 border border-[#00C6FF]/30 rounded-xl p-6 inline-block hover:border-[#00C6FF]/50 transition-all">
                      <h3 className="text-2xl font-bold text-white mb-3">{phase.phase}</h3>
                      <div className="space-y-2 mb-4">
                        <p className="text-gray-300"><span className="text-[#00FFB2]">Target:</span> {phase.targets}</p>
                        <p className="text-gray-300"><span className="text-[#00FFB2]">Revenue:</span> {phase.revenue}</p>
                        <p className="text-gray-300"><span className="text-[#00FFB2]">Focus:</span> {phase.focus}</p>
                      </div>
                      <span className={`inline-block px-3 py-1 text-sm rounded-full ${
                        phase.status === 'In Progress'
                          ? 'bg-[#00E676]/20 text-[#00E676] border border-[#00E676]/30'
                          : phase.status === 'Planned'
                          ? 'bg-[#1E90FF]/20 text-[#1E90FF] border border-[#1E90FF]/30'
                          : 'bg-[#FFB020]/20 text-[#FFB020] border border-[#FFB020]/30'
                      }`}>
                        {phase.status}
                      </span>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="relative z-10 w-6 h-6 bg-gradient-to-br from-[#00C6FF] to-[#00FFB2] rounded-full border-4 border-[#0B0F14] shadow-lg"></div>

                  {/* Spacer */}
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Investment CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-[#121821] to-[#1a2332] border border-[#00C6FF]/30 rounded-2xl p-12">
            <Users className="w-16 h-16 text-[#00FFB2] mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">Join Our Mission</h3>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl">
              We're raising Series A to accelerate ASEAN expansion and deepen AI capabilities
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-[#00C6FF] to-[#00FFB2] text-[#0B0F14] rounded-lg font-medium shadow-lg shadow-[#00C6FF]/30 hover:shadow-xl hover:shadow-[#00C6FF]/50 transition-all"
            >
              Request Investor Deck
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
