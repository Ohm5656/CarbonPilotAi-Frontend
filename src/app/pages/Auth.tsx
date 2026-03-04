import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Zap, Mail, Lock, Eye, EyeOff, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router';
import PageTransition from '../components/PageTransition';
import PageLoader from '../components/PageLoader';

export default function Auth() {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication
    console.log('Auth submitted:', { activeTab, email, password, name });
  };

  const valueProps = [
    'Real-time carbon tracking',
    'AI-powered optimization',
    'ESG compliance automation',
    'ROI-driven recommendations'
  ];

  if (isLoading) {
    return <PageLoader message="Loading authentication..." />;
  }

  return (
    <PageTransition>
    <div className="min-h-screen bg-[#0B0F14] flex">
      {/* Left Column - Brand & Value Props */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#0B0F14] via-[#121821] to-[#0B0F14] p-12 flex-col justify-center relative overflow-hidden">
        {/* Animated background effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#00C6FF] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-[#00FFB2] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10">
          {/* Logo */}
          <Link to="/">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-12 cursor-pointer"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#00C6FF] to-[#00FFB2] rounded-xl flex items-center justify-center shadow-2xl shadow-[#00C6FF]/50">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-white to-[#00FFB2] bg-clip-text text-transparent">
                  CarbonPilot AI
                </div>
                <div className="text-sm text-gray-400">Data-Driven Decarbonization</div>
              </div>
            </motion.div>
          </Link>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
              Transform Your <br />
              <span className="bg-gradient-to-r from-[#00C6FF] to-[#00FFB2] bg-clip-text text-transparent">
                Carbon Strategy
              </span>
            </h1>
            <p className="text-xl text-gray-400">
              Join 500+ factories using AI to cut emissions and costs
            </p>
          </motion.div>

          {/* Value Props */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {valueProps.map((prop, index) => (
              <motion.div
                key={prop}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-6 h-6 bg-gradient-to-br from-[#00C6FF] to-[#00FFB2] rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300 text-lg">{prop}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-12 grid grid-cols-3 gap-6"
          >
            <div>
              <div className="text-3xl font-bold text-white">15%</div>
              <div className="text-sm text-gray-400">Avg. Carbon Reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">$2.4M</div>
              <div className="text-sm text-gray-400">Annual Savings</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm text-gray-400">Factories</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Column - Auth Card */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-md"
        >
          {/* Glassmorphism Card */}
          <div className="bg-[#121821]/80 backdrop-blur-xl border border-[#00C6FF]/30 rounded-2xl p-8 shadow-2xl">
            {/* Tabs */}
            <div className="flex gap-2 mb-8 bg-[#0B0F14] rounded-lg p-1">
              <button
                onClick={() => setActiveTab('login')}
                className={`flex-1 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'login'
                    ? 'bg-gradient-to-r from-[#00C6FF] to-[#00FFB2] text-white shadow-lg shadow-[#00C6FF]/30'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setActiveTab('signup')}
                className={`flex-1 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'signup'
                    ? 'bg-gradient-to-r from-[#00C6FF] to-[#00FFB2] text-white shadow-lg shadow-[#00C6FF]/30'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {activeTab === 'signup' && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full bg-[#0B0F14] border border-[#00C6FF]/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00C6FF] transition-colors"
                      required
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full bg-[#0B0F14] border border-[#00C6FF]/30 rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00C6FF] transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-[#0B0F14] border border-[#00C6FF]/30 rounded-lg pl-11 pr-11 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00C6FF] transition-colors"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {activeTab === 'login' && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-[#00C6FF]/30 bg-[#0B0F14] text-[#00C6FF] focus:ring-[#00C6FF] focus:ring-offset-0"
                    />
                    <span className="text-sm text-gray-400">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-[#00C6FF] hover:text-[#00FFB2] transition-colors">
                    Forgot password?
                  </a>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#00C6FF] to-[#00FFB2] text-white font-medium rounded-lg shadow-lg shadow-[#00C6FF]/30 hover:shadow-xl hover:shadow-[#00C6FF]/50 transition-all"
              >
                {activeTab === 'login' ? 'Sign In' : 'Create Account'}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-[#00C6FF]/20"></div>
              <span className="text-sm text-gray-400">OR</span>
              <div className="flex-1 h-px bg-[#00C6FF]/20"></div>
            </div>

            {/* Google Sign In */}
            <button className="w-full py-3 bg-[#0B0F14] border border-[#00C6FF]/30 rounded-lg text-white font-medium hover:bg-[#121821] transition-colors flex items-center justify-center gap-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>

            {/* Terms */}
            {activeTab === 'signup' && (
              <p className="text-xs text-gray-400 text-center mt-6">
                By signing up, you agree to our{' '}
                <a href="#" className="text-[#00C6FF] hover:text-[#00FFB2]">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-[#00C6FF] hover:text-[#00FFB2]">
                  Privacy Policy
                </a>
              </p>
            )}
          </div>

          {/* Mobile Logo */}
          <div className="lg:hidden mt-8 text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <Zap className="w-5 h-5" />
              <span className="text-sm">Back to CarbonPilot AI</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
    </PageTransition>
  );
}