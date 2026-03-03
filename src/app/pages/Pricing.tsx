import { motion } from 'motion/react';
import { Check, Zap, TrendingUp, Sparkles } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '฿12,500',
    period: '/month',
    description: 'Perfect for small facilities beginning their sustainability journey',
    features: [
      'Carbon baseline measurement',
      'Basic ESG reporting',
      'Monthly emissions tracking',
      'Email support',
      'Up to 100 data points/month',
      'Standard dashboard access'
    ],
    icon: Zap,
    color: 'from-[#1E90FF] to-[#00C6FF]',
    popular: false
  },
  {
    name: 'Growth',
    price: '฿35,000',
    period: '/month',
    description: 'Advanced analytics for scaling manufacturers',
    features: [
      'Everything in Starter, plus:',
      'ML-powered forecast modeling',
      'Anomaly detection system',
      'Real-time optimization alerts',
      'Advanced ESG reports',
      'Priority support',
      'Up to 1,000 data points/month',
      'API access (limited)',
      'Custom dashboards'
    ],
    icon: TrendingUp,
    color: 'from-[#00C6FF] to-[#00FFB2]',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'Full AI optimization for large-scale operations',
    features: [
      'Everything in Growth, plus:',
      'Full AI optimization engine',
      'CBAM automation & compliance',
      'Unlimited data points',
      'Dedicated success manager',
      'White-label reporting',
      'Full API access',
      'Custom ML model training',
      'Multi-facility management',
      'SLA guarantee (99.9% uptime)'
    ],
    icon: Sparkles,
    color: 'from-[#00FFB2] to-[#00E676]',
    popular: false
  }
];

export default function Pricing() {
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
            Transparent SaaS Pricing
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the plan that scales with your decarbonization journey
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00C6FF] to-[#00FFB2] mx-auto mt-6"></div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative bg-[#121821] rounded-2xl overflow-hidden ${
                tier.popular 
                  ? 'border-2 border-[#00C6FF] shadow-2xl shadow-[#00C6FF]/30' 
                  : 'border border-[#00C6FF]/20'
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#00C6FF] to-[#00FFB2] py-2 text-center">
                  <span className="text-sm font-semibold text-[#0B0F14]">MOST POPULAR</span>
                </div>
              )}

              <div className={`p-8 ${tier.popular ? 'pt-16' : ''}`}>
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${tier.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                  <tier.icon className="w-8 h-8 text-white" />
                </div>

                {/* Tier name and price */}
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-gray-400 mb-6 min-h-[48px]">{tier.description}</p>
                
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl font-bold text-white">{tier.price}</span>
                  <span className="text-gray-400">{tier.period}</span>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-lg font-medium mb-8 transition-all ${
                    tier.popular
                      ? 'bg-gradient-to-r from-[#00C6FF] to-[#00FFB2] text-[#0B0F14] shadow-lg shadow-[#00C6FF]/30 hover:shadow-xl hover:shadow-[#00C6FF]/50'
                      : 'bg-[#1a2332] text-white border border-[#00C6FF]/30 hover:border-[#00C6FF]'
                  }`}
                >
                  {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </motion.button>

                {/* Features list */}
                <div className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className={`w-5 h-5 bg-gradient-to-br ${tier.color} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className={`text-sm ${feature.includes(':') ? 'text-white font-semibold' : 'text-gray-300'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Glow effect for popular tier */}
              {tier.popular && (
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gradient-to-tl from-[#00C6FF]/20 to-transparent rounded-full blur-3xl"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {[
            {
              title: 'No Setup Fees',
              description: 'Get started immediately with zero upfront costs'
            },
            {
              title: 'Cancel Anytime',
              description: 'No long-term contracts or cancellation penalties'
            },
            {
              title: '14-Day Free Trial',
              description: 'Test all features risk-free before committing'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-[#121821] border border-[#00C6FF]/20 rounded-xl p-6 text-center hover:border-[#00C6FF]/50 transition-all"
            >
              <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-sm text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-br from-[#121821] to-[#1a2332] border border-[#00C6FF]/30 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: 'What data do I need to get started?',
                a: 'Basic energy bills and production logs. Our AI handles the rest.'
              },
              {
                q: 'How accurate are the ML forecasts?',
                a: 'Our models achieve 92-95% accuracy after 30 days of data collection.'
              },
              {
                q: 'Is my data secure?',
                a: 'Yes. Enterprise-grade encryption, ISO 27001 certified infrastructure.'
              },
              {
                q: 'Can I upgrade or downgrade?',
                a: 'Absolutely. Switch plans anytime with prorated billing.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-[#0B0F14]/50 border border-[#00C6FF]/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-3">{faq.q}</h4>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-4">Need a custom solution for your organization?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[#00C6FF] to-[#00FFB2] text-[#0B0F14] rounded-lg font-medium shadow-lg shadow-[#00C6FF]/30 hover:shadow-xl hover:shadow-[#00C6FF]/50 transition-all"
          >
            Schedule Enterprise Demo
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
