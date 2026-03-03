import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, X, Send, Sparkles, TrendingUp, AlertTriangle, BarChart3, FileText, Factory, Calendar } from 'lucide-react';
import { useLocation } from 'react-router';

const quickActions = [
  { id: 'anomaly', label: 'Explain anomaly', icon: AlertTriangle, color: '#FF6B6B' },
  { id: 'cfo', label: 'Summarize for CFO', icon: TrendingUp, color: '#00FFB2' },
  { id: 'forecast', label: 'Explain forecast', icon: BarChart3, color: '#00C6FF' },
  { id: 'report', label: 'Generate report summary', icon: FileText, color: '#FFB020' }
];

interface Message {
  role: 'user' | 'assistant';
  content: string;
  type?: 'text' | 'card';
  metrics?: {
    label: string;
    value: string;
    change?: string;
  }[];
}

export default function AIAssistant() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m your ESG Intelligence Copilot. I can help you understand carbon data, forecast trends, and optimize your decarbonization strategy. What would you like to know?',
      type: 'text'
    }
  ]);
  const [input, setInput] = useState('');

  // Get current page context
  const getPageContext = () => {
    const path = location.pathname;
    if (path === '/' || path === '/dashboard') return 'Dashboard';
    if (path === '/esg-report') return 'ESG Report Generator';
    if (path === '/pricing') return 'Pricing';
    if (path === '/data-input') return 'Data Input';
    return 'Dashboard';
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input, type: 'text' };
    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      let response: Message;
      
      if (input.toLowerCase().includes('carbon per unit') || input.toLowerCase().includes('increase')) {
        response = {
          role: 'assistant',
          content: 'Based on your dashboard data, carbon per unit increased by 3.2% this month primarily due to:\n\n1. Production shift during peak energy hours (14:00-17:00)\n2. Temporary compressor inefficiency detected on March 15th\n3. Grid carbon intensity was 8% higher than last month\n\nRecommendation: Implement the suggested off-peak production shift to reduce this by ~8%.',
          type: 'card',
          metrics: [
            { label: 'Current Carbon/Unit', value: '1.08 kgCO2e', change: '+3.2%' },
            { label: 'Target', value: '0.98 kgCO2e', change: '-9.3%' },
            { label: 'Grid Intensity', value: '0.52 kgCO2e/kWh', change: '+8.0%' }
          ]
        };
      } else if (input.toLowerCase().includes('net zero') || input.toLowerCase().includes('reduction')) {
        response = {
          role: 'assistant',
          content: 'An 8% reduction is a strong start, but to align with Net Zero by 2050, you need:\n\n• Current trajectory: 8% annual reduction\n• Required for Net Zero: 12-15% annual reduction\n• Gap: 4-7% additional reduction needed\n\nYour AI optimization engine has identified 3 high-ROI opportunities that could close this gap.',
          type: 'card',
          metrics: [
            { label: 'Net Zero Score', value: '73/100', change: 'Fair' },
            { label: 'Annual Reduction', value: '8.0%', change: 'On Track' },
            { label: 'Gap to Target', value: '5.5%', change: 'Needs Work' }
          ]
        };
      } else if (input.toLowerCase().includes('compare') || input.toLowerCase().includes('quarter')) {
        response = {
          role: 'assistant',
          content: 'Here\'s your performance vs last quarter:\n\n**This Month vs Last Quarter Average:**\n• Carbon per unit: 45.2 vs 48.1 kgCO2e (-6.0%)\n• Total emissions: 1,247 vs 1,310 tCO2e (-4.8%)\n• Energy efficiency: +5.3% improvement\n• Cost savings: ฿127,000 achieved\n\nYou\'re trending positively! The off-peak shift implementation contributed 60% of this improvement.',
          type: 'card',
          metrics: [
            { label: 'Carbon Reduction', value: '6.0%', change: 'vs Q4 2025' },
            { label: 'Cost Savings', value: '฿127K', change: '+23%' },
            { label: 'Efficiency Gain', value: '+5.3%', change: 'Excellent' }
          ]
        };
      } else if (input.toLowerCase().includes('forecast')) {
        response = {
          role: 'assistant',
          content: 'Next month\'s forecast shows:\n\n**Predicted Trends (30-day):**\n• Carbon per unit: Expected to decrease to 43.8 kgCO2e\n• Confidence interval: ±2.1 kgCO2e\n• Key drivers: Planned efficiency upgrades + renewable energy increase\n\nThe ML model detected that if you maintain current production patterns, you\'ll achieve 3.1% further reduction. However, implementing the simulation scenario could boost this to 7.4%.',
          type: 'card',
          metrics: [
            { label: 'Forecast Confidence', value: '94.2%', change: 'High' },
            { label: 'MAPE Error', value: '4.3%', change: 'Excellent' },
            { label: 'Next Month', value: '43.8 kgCO2e', change: '-3.1%' }
          ]
        };
      } else {
        response = {
          role: 'assistant',
          content: 'I can help you with:\n\n• Carbon data analysis and trends\n• Forecast explanations and predictions\n• Simulation scenario optimization\n• Performance comparisons\n• Net Zero alignment assessment\n• ROI calculations for reduction initiatives\n\nTry using the quick action buttons below for instant insights!',
          type: 'text'
        };
      }

      setMessages(prev => [...prev, response]);
    }, 800);

    setInput('');
  };

  const handleQuickAction = (actionId: string) => {
    let query = '';
    switch (actionId) {
      case 'anomaly':
        query = 'Explain the energy spike anomaly detected on Thursday';
        break;
      case 'cfo':
        query = 'Create an executive summary for the CFO highlighting cost savings and carbon reduction';
        break;
      case 'forecast':
        query = 'Explain the ML forecast for next month and confidence levels';
        break;
      case 'report':
        query = 'Generate a summary of this month\'s performance for the ESG report';
        break;
    }
    setInput(query);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-[#00C6FF] to-[#00FFB2] rounded-full shadow-lg shadow-[#00C6FF]/50 flex items-center justify-center group hover:shadow-[#00C6FF]/70 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Bot className="w-8 h-8 text-white" />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
          className="absolute -top-1 -right-1 w-4 h-4 bg-[#00E676] rounded-full"
        />
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 400 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-6 right-24 z-50 w-[450px] h-[700px] bg-[#121821]/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#00C6FF]/30 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-[#00C6FF]/20 bg-gradient-to-r from-[#00C6FF]/10 to-[#00FFB2]/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#00C6FF] to-[#00FFB2] rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">AI Copilot</h3>
                    <p className="text-xs text-gray-400">ESG Intelligence Assistant</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Context Pills */}
              <div className="flex flex-wrap gap-2 mt-3">
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#0B0F14] border border-[#00C6FF]/30 rounded-full text-xs text-gray-300">
                  <BarChart3 className="w-3 h-3 text-[#00C6FF]" />
                  {getPageContext()}
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#0B0F14] border border-[#00C6FF]/30 rounded-full text-xs text-gray-300">
                  <Calendar className="w-3 h-3 text-[#00FFB2]" />
                  March 2026
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#0B0F14] border border-[#00C6FF]/30 rounded-full text-xs text-gray-300">
                  <Factory className="w-3 h-3 text-[#FFB020]" />
                  Bangkok Plant
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.role === 'user' ? (
                    <div className="max-w-[80%] rounded-xl p-3 bg-gradient-to-r from-[#00C6FF] to-[#00FFB2] text-white">
                      <p className="text-sm whitespace-pre-line">{message.content}</p>
                    </div>
                  ) : message.type === 'card' ? (
                    <div className="max-w-[90%] space-y-3">
                      <div className="bg-[#0B0F14] text-gray-300 border border-[#00C6FF]/20 rounded-xl p-4">
                        <p className="text-sm whitespace-pre-line mb-3">{message.content}</p>
                        {message.metrics && (
                          <div className="grid grid-cols-1 gap-2 mt-3 pt-3 border-t border-[#00C6FF]/20">
                            {message.metrics.map((metric, idx) => (
                              <div key={idx} className="flex items-center justify-between bg-[#121821] rounded-lg p-2.5">
                                <div>
                                  <p className="text-xs text-gray-400">{metric.label}</p>
                                  <p className="text-sm font-semibold text-white">{metric.value}</p>
                                </div>
                                {metric.change && (
                                  <div className={`text-xs font-semibold px-2 py-1 rounded ${
                                    metric.change.includes('-') || metric.change.includes('Excellent') || metric.change.includes('High')
                                      ? 'bg-[#00E676]/20 text-[#00E676]'
                                      : metric.change.includes('+') || metric.change.includes('Needs')
                                      ? 'bg-[#FFB020]/20 text-[#FFB020]'
                                      : 'bg-[#00C6FF]/20 text-[#00C6FF]'
                                  }`}>
                                    {metric.change}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                        <div className="mt-3 pt-2 border-t border-[#00C6FF]/20 text-xs text-gray-500 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          Reference: Dashboard • March 2026
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="max-w-[80%] rounded-xl p-3 bg-[#0B0F14] text-gray-300 border border-[#00C6FF]/20">
                      <p className="text-sm whitespace-pre-line">{message.content}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Quick Action Buttons */}
            <div className="px-4 pb-3 border-t border-[#00C6FF]/10">
              <p className="text-xs text-gray-400 mb-2 mt-3">Quick actions:</p>
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <button
                      key={action.id}
                      onClick={() => handleQuickAction(action.id)}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#0B0F14] border border-[#00C6FF]/20 hover:border-[#00C6FF]/50 hover:bg-[#121821] transition-all group"
                    >
                      <Icon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" style={{ color: action.color }} />
                      <span className="text-xs text-gray-400 group-hover:text-white transition-colors">{action.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-[#00C6FF]/20 bg-[#0B0F14]/50">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about carbon data, forecasts..."
                  className="flex-1 bg-[#121821] border border-[#00C6FF]/30 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#00C6FF] transition-colors text-sm"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="w-10 h-10 bg-gradient-to-r from-[#00C6FF] to-[#00FFB2] rounded-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-[#00C6FF]/50 transition-all"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
