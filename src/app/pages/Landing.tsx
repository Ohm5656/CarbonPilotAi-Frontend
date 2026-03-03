import { motion } from 'motion/react';
import { Activity, TrendingDown, DollarSign, Zap, ArrowRight, Database, Brain, Target, FileCheck } from 'lucide-react';
import { Link } from 'react-router';

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#0B0F14] overflow-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#121821_1px,transparent_1px),linear-gradient(to_bottom,#121821_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#00C6FF] to-[#00FFB2] rounded-full blur-[128px] opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#1E90FF] to-[#00C6FF] rounded-full blur-[128px] opacity-20"
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-6 py-2 bg-[#121821] border border-[#00C6FF]/30 rounded-full">
              <span className="text-sm text-[#00FFB2]">CarbonPilot AI</span>
            </div>
            <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#00C6FF] to-[#00FFB2] bg-clip-text text-transparent">
              Optimize Carbon.<br />Unlock Global Markets.
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              AI-driven ESG intelligence platform enabling Thai export SMEs to measure, forecast, 
              and reduce carbon emissions while staying CBAM-compliant.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/demo">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-[#00C6FF] to-[#00FFB2] text-[#0B0F14] rounded-lg font-medium shadow-lg shadow-[#00C6FF]/30 hover:shadow-xl hover:shadow-[#00C6FF]/50 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request Demo
                </motion.button>
              </Link>
              <Link to="/dashboard">
                <motion.button
                  className="px-8 py-4 bg-[#121821] text-white rounded-lg font-medium border border-[#00C6FF]/30 hover:border-[#00C6FF] transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Dashboard
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Floating particles animation */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#00C6FF] rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 text-white">The Carbon Gap in Emerging Supply Chains</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00C6FF] to-[#00FFB2] mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Activity,
                title: "No real-time carbon visibility",
                description: "Supply chains lack granular emission tracking capabilities"
              },
              {
                icon: TrendingDown,
                title: "Rising CBAM & ESG compliance pressure",
                description: "Regulatory requirements creating market entry barriers"
              },
              {
                icon: DollarSign,
                title: "Lost global investment opportunities",
                description: "ESG gaps limiting access to international markets"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="relative bg-[#121821] border border-[#00C6FF]/20 rounded-xl p-8 overflow-hidden group hover:border-[#00C6FF]/50 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00C6FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#00C6FF] to-[#00FFB2] rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-[#00C6FF]/30">
                    <item.icon className="w-7 h-7 text-[#0B0F14]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The AI Engine Section */}
      <section className="relative py-32 px-6 bg-[#121821]/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 text-white">Powered by Advanced AI Optimization</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00C6FF] to-[#00FFB2] mx-auto"></div>
          </motion.div>

          <div className="relative">
            {/* AI Pipeline Diagram */}
            <div className="flex flex-wrap justify-between items-center gap-8">
              {[
                { icon: Database, label: "Data Input", color: "from-[#00C6FF] to-[#1E90FF]" },
                { icon: Brain, label: "ML Forecast", color: "from-[#1E90FF] to-[#00FFB2]" },
                { icon: Activity, label: "Anomaly Detection", color: "from-[#00FFB2] to-[#00E676]" },
                { icon: Target, label: "Optimization Engine", color: "from-[#00E676] to-[#FFB020]" },
                { icon: FileCheck, label: "LLM ESG Report", color: "from-[#FFB020] to-[#00C6FF]" }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="relative flex-1 min-w-[150px]"
                >
                  <div className="relative bg-[#121821] border border-[#00C6FF]/30 rounded-xl p-6 text-center group hover:border-[#00C6FF] hover:shadow-lg hover:shadow-[#00C6FF]/30 transition-all">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-white font-medium">{step.label}</p>
                  </div>
                  
                  {/* Animated connecting line */}
                  {index < 4 && (
                    <motion.div
                      className="hidden lg:block absolute top-1/2 left-full w-8 h-0.5"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.15, duration: 0.4 }}
                    >
                      <div className="w-full h-full bg-gradient-to-r from-[#00C6FF] to-[#00FFB2] relative">
                        <ArrowRight className="w-4 h-4 text-[#00FFB2] absolute -right-2 -top-1.5" />
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-[#121821] to-[#1a2332] border border-[#00C6FF]/30 rounded-2xl p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00C6FF]/5 to-[#00FFB2]/5"></div>
            <div className="relative">
              <h2 className="text-4xl font-bold mb-4 text-white">Ready to Transform Your Factory?</h2>
              <p className="text-xl text-gray-400 mb-8">
                AI for Competitive Decarbonization
              </p>
              <Link to="/pricing">
                <motion.button
                  className="px-10 py-4 bg-gradient-to-r from-[#00C6FF] to-[#00FFB2] text-[#0B0F14] rounded-lg font-medium shadow-lg shadow-[#00C6FF]/30 hover:shadow-xl hover:shadow-[#00C6FF]/50 transition-all inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Pricing <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
