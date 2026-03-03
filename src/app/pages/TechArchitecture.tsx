import { motion } from 'motion/react';
import { Database, Brain, Activity, Cog, FileText, Cloud, Shield, Zap, ArrowRight } from 'lucide-react';

export default function TechArchitecture() {
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
            AI System Architecture
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Enterprise-grade cloud infrastructure powering real-time carbon intelligence
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00C6FF] to-[#00FFB2] mx-auto mt-6"></div>
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-[#121821] to-[#1a2332] border border-[#00C6FF]/30 rounded-2xl p-12 mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#00C6FF]/10 to-transparent rounded-full blur-3xl"></div>
          
          <div className="relative">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">System Layers</h2>
            
            <div className="space-y-8">
              {/* Data Layer */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#00C6FF] to-[#1E90FF] rounded-xl flex items-center justify-center shadow-lg shadow-[#00C6FF]/30">
                    <Database className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-[#0B0F14]/50 border border-[#00C6FF]/30 rounded-xl p-6 hover:border-[#00C6FF]/50 transition-all">
                    <h3 className="text-2xl font-bold text-white mb-3">Data Layer</h3>
                    <p className="text-gray-400 mb-4">
                      Multi-source data ingestion and normalization pipeline
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        { label: 'Energy Bills', detail: 'Automated OCR & parsing' },
                        { label: 'Production Logs', detail: 'Real-time IoT sensors' },
                        { label: 'Historical Data', detail: 'Time-series database' }
                      ].map((item, index) => (
                        <div key={index} className="bg-[#121821]/50 border border-[#00C6FF]/20 rounded-lg p-4">
                          <p className="text-white font-semibold mb-1">{item.label}</p>
                          <p className="text-sm text-gray-400">{item.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Arrow */}
              <div className="flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, type: "spring" }}
                  className="w-12 h-12 bg-gradient-to-br from-[#00C6FF] to-[#00FFB2] rounded-full flex items-center justify-center"
                >
                  <ArrowRight className="w-6 h-6 text-white transform rotate-90" />
                </motion.div>
              </div>

              {/* ML Layer */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-start gap-6"
              >
                <div className="flex-1">
                  <div className="bg-[#0B0F14]/50 border border-[#00C6FF]/30 rounded-xl p-6 hover:border-[#00C6FF]/50 transition-all">
                    <h3 className="text-2xl font-bold text-white mb-3">ML Forecast Layer</h3>
                    <p className="text-gray-400 mb-4">
                      Advanced time-series prediction models
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        { label: 'LSTM Networks', detail: 'Energy consumption patterns' },
                        { label: 'XGBoost', detail: 'Carbon emission forecasting' },
                        { label: 'Prophet', detail: 'Seasonal trend analysis' }
                      ].map((item, index) => (
                        <div key={index} className="bg-[#121821]/50 border border-[#00FFB2]/20 rounded-lg p-4">
                          <p className="text-white font-semibold mb-1">{item.label}</p>
                          <p className="text-sm text-gray-400">{item.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#00FFB2] to-[#00E676] rounded-xl flex items-center justify-center shadow-lg shadow-[#00FFB2]/30">
                    <Brain className="w-10 h-10 text-white" />
                  </div>
                </div>
              </motion.div>

              {/* Arrow */}
              <div className="flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, type: "spring" }}
                  className="w-12 h-12 bg-gradient-to-br from-[#00FFB2] to-[#00E676] rounded-full flex items-center justify-center"
                >
                  <ArrowRight className="w-6 h-6 text-white transform rotate-90" />
                </motion.div>
              </div>

              {/* Anomaly Detection */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-start gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#1E90FF] to-[#00C6FF] rounded-xl flex items-center justify-center shadow-lg shadow-[#1E90FF]/30">
                    <Activity className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-[#0B0F14]/50 border border-[#00C6FF]/30 rounded-xl p-6 hover:border-[#00C6FF]/50 transition-all">
                    <h3 className="text-2xl font-bold text-white mb-3">Anomaly Detection Layer</h3>
                    <p className="text-gray-400 mb-4">
                      Real-time monitoring for efficiency deviations
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        { label: 'Isolation Forest', detail: 'Outlier identification' },
                        { label: 'Statistical Analysis', detail: 'Threshold violations' },
                        { label: 'Alert System', detail: 'Instant notifications' }
                      ].map((item, index) => (
                        <div key={index} className="bg-[#121821]/50 border border-[#1E90FF]/20 rounded-lg p-4">
                          <p className="text-white font-semibold mb-1">{item.label}</p>
                          <p className="text-sm text-gray-400">{item.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Arrow */}
              <div className="flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="w-12 h-12 bg-gradient-to-br from-[#00E676] to-[#FFB020] rounded-full flex items-center justify-center"
                >
                  <ArrowRight className="w-6 h-6 text-white transform rotate-90" />
                </motion.div>
              </div>

              {/* Optimization Engine */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="flex items-start gap-6"
              >
                <div className="flex-1">
                  <div className="bg-[#0B0F14]/50 border border-[#00C6FF]/30 rounded-xl p-6 hover:border-[#00C6FF]/50 transition-all">
                    <h3 className="text-2xl font-bold text-white mb-3">Optimization Engine</h3>
                    <p className="text-gray-400 mb-4">
                      Mathematical programming for carbon reduction
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        { label: 'Linear Programming', detail: 'Resource allocation' },
                        { label: 'Constraint Solving', detail: 'Multi-objective optimization' },
                        { label: 'Scenario Modeling', detail: 'What-if analysis' }
                      ].map((item, index) => (
                        <div key={index} className="bg-[#121821]/50 border border-[#00E676]/20 rounded-lg p-4">
                          <p className="text-white font-semibold mb-1">{item.label}</p>
                          <p className="text-sm text-gray-400">{item.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#00E676] to-[#FFB020] rounded-xl flex items-center justify-center shadow-lg shadow-[#00E676]/30">
                    <Cog className="w-10 h-10 text-white" />
                  </div>
                </div>
              </motion.div>

              {/* Arrow */}
              <div className="flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.0, type: "spring" }}
                  className="w-12 h-12 bg-gradient-to-br from-[#FFB020] to-[#00C6FF] rounded-full flex items-center justify-center"
                >
                  <ArrowRight className="w-6 h-6 text-white transform rotate-90" />
                </motion.div>
              </div>

              {/* LLM Layer */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 }}
                className="flex items-start gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#FFB020] to-[#00FFB2] rounded-xl flex items-center justify-center shadow-lg shadow-[#FFB020]/30">
                    <FileText className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-[#0B0F14]/50 border border-[#00C6FF]/30 rounded-xl p-6 hover:border-[#00C6FF]/50 transition-all">
                    <h3 className="text-2xl font-bold text-white mb-3">LLM Report Generation</h3>
                    <p className="text-gray-400 mb-4">
                      Natural language ESG and CBAM compliance documentation
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        { label: 'GPT-4 Integration', detail: 'Report narrative generation' },
                        { label: 'Compliance Templates', detail: 'CBAM & ISO standards' },
                        { label: 'Multi-language', detail: 'Thai, English, Chinese' }
                      ].map((item, index) => (
                        <div key={index} className="bg-[#121821]/50 border border-[#FFB020]/20 rounded-lg p-4">
                          <p className="text-white font-semibold mb-1">{item.label}</p>
                          <p className="text-sm text-gray-400">{item.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Cloud Infrastructure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              title: 'Cloud Platform',
              icon: Cloud,
              color: 'from-[#00C6FF] to-[#1E90FF]',
              features: ['AWS / Google Cloud', 'Auto-scaling', 'Multi-region deployment', '99.95% uptime SLA']
            },
            {
              title: 'Security',
              icon: Shield,
              color: 'from-[#00FFB2] to-[#00E676]',
              features: ['ISO 27001 certified', 'End-to-end encryption', 'SOC 2 compliant', 'GDPR ready']
            },
            {
              title: 'Performance',
              icon: Zap,
              color: 'from-[#1E90FF] to-[#00C6FF]',
              features: ['< 200ms API latency', 'Real-time processing', 'CDN acceleration', 'Edge computing']
            }
          ].map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-[#121821] border border-[#00C6FF]/20 rounded-xl p-8 hover:border-[#00C6FF]/50 transition-all"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                <section.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#00FFB2] rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="bg-gradient-to-br from-[#121821] to-[#1a2332] border border-[#00C6FF]/30 rounded-2xl p-12 mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technology Stack</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                category: 'Backend',
                technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Redis']
              },
              {
                category: 'ML/AI',
                technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI API']
              },
              {
                category: 'Frontend',
                technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts']
              },
              {
                category: 'DevOps',
                technologies: ['Docker', 'Kubernetes', 'GitHub Actions', 'Terraform']
              }
            ].map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.7 + index * 0.1 }}
                className="bg-[#0B0F14]/50 border border-[#00C6FF]/20 rounded-xl p-6 hover:border-[#00C6FF]/50 transition-all"
              >
                <h4 className="text-xl font-semibold text-white mb-4">{stack.category}</h4>
                <ul className="space-y-2">
                  {stack.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#00FFB2] rounded-full"></div>
                      <span className="text-gray-400">{tech}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* API Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1 }}
          className="bg-[#121821] border border-[#00C6FF]/20 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">RESTful API Architecture</h2>
          
          <div className="bg-[#0B0F14] rounded-xl border border-[#00C6FF]/20 p-8">
            <div className="space-y-4 font-mono text-sm">
              {[
                { method: 'POST', endpoint: '/api/v1/emissions/calculate', description: 'Calculate carbon footprint' },
                { method: 'GET', endpoint: '/api/v1/forecast/energy', description: 'Get energy forecast' },
                { method: 'POST', endpoint: '/api/v1/optimize/production', description: 'Optimize production schedule' },
                { method: 'GET', endpoint: '/api/v1/reports/esg', description: 'Generate ESG report' },
                { method: 'GET', endpoint: '/api/v1/anomalies/detect', description: 'Detect efficiency anomalies' }
              ].map((api, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.2 + index * 0.1 }}
                  className="flex items-center gap-4 bg-[#121821] border border-[#00C6FF]/20 rounded-lg p-4 hover:border-[#00C6FF]/50 transition-all"
                >
                  <span className={`px-3 py-1 rounded ${
                    api.method === 'POST' 
                      ? 'bg-[#00E676]/20 text-[#00E676] border border-[#00E676]/30'
                      : 'bg-[#1E90FF]/20 text-[#1E90FF] border border-[#1E90FF]/30'
                  }`}>
                    {api.method}
                  </span>
                  <span className="text-[#00FFB2] flex-1">{api.endpoint}</span>
                  <span className="text-gray-400">{api.description}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-[#00C6FF] to-[#00FFB2] text-[#0B0F14] rounded-lg font-medium shadow-lg shadow-[#00C6FF]/30 hover:shadow-xl hover:shadow-[#00C6FF]/50 transition-all"
            >
              View API Documentation
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8 }}
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Data Points/sec', value: '10,000+' },
            { label: 'ML Model Accuracy', value: '94.2%' },
            { label: 'API Response Time', value: '<150ms' },
            { label: 'System Uptime', value: '99.95%' }
          ].map((stat, index) => (
            <div key={index} className="bg-[#121821] border border-[#00C6FF]/20 rounded-xl p-6 text-center hover:border-[#00C6FF]/50 transition-all">
              <p className="text-sm text-gray-400 mb-2">{stat.label}</p>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
