import { Outlet, Link, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { Menu, X, Zap } from 'lucide-react';
import { useState } from 'react';
import AIAssistant from './components/AIAssistant';

const navLinks = [
  { path: '/', label: 'Dashboard' },
  { path: '/data-input', label: 'Data Input' },
  { path: '/esg-report', label: 'ESG Report' },
  { path: '/pricing', label: 'Pricing' },
];

export default function Root() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0F14]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0F14]/80 backdrop-blur-xl border-b border-[#00C6FF]/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 cursor-pointer"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[#00C6FF] to-[#00FFB2] rounded-lg flex items-center justify-center shadow-lg shadow-[#00C6FF]/30">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold bg-gradient-to-r from-white to-[#00FFB2] bg-clip-text text-transparent">
                    CarbonPilot AI
                  </div>
                  <div className="text-xs text-gray-400">Data-Driven Decarbonization</div>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      location.pathname === link.path
                        ? 'bg-gradient-to-r from-[#00C6FF]/20 to-[#00FFB2]/20 text-white border border-[#00C6FF]/30'
                        : 'text-gray-400 hover:text-white hover:bg-[#121821]'
                    }`}
                  >
                    {link.label}
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:hidden mt-4 pb-4 border-t border-[#00C6FF]/20 pt-4"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link key={link.path} to={link.path} onClick={() => setMobileMenuOpen(false)}>
                    <div
                      className={`px-4 py-3 rounded-lg transition-all ${
                        location.pathname === link.path
                          ? 'bg-gradient-to-r from-[#00C6FF]/20 to-[#00FFB2]/20 text-white border border-[#00C6FF]/30'
                          : 'text-gray-400 hover:text-white hover:bg-[#121821]'
                      }`}
                    >
                      {link.label}
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Content */}
      <div className="pt-20">
        <Outlet />
      </div>

      {/* AI Assistant */}
      <AIAssistant />

      {/* Footer */}
      <footer className="relative border-t border-[#00C6FF]/20 bg-[#121821]/50 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#00C6FF] to-[#00FFB2] rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-white">CarbonPilot AI</div>
                <p className="text-gray-400 text-sm">AI for Competitive Decarbonization</p>
              </div>
            </div>
            <div className="flex gap-8 text-sm">
              <Link to="/" className="text-gray-400 hover:text-[#00FFB2] transition-colors">Dashboard</Link>
              <Link to="/data-input" className="text-gray-400 hover:text-[#00FFB2] transition-colors">Data Input</Link>
              <Link to="/esg-report" className="text-gray-400 hover:text-[#00FFB2] transition-colors">ESG Report</Link>
              <Link to="/pricing" className="text-gray-400 hover:text-[#00FFB2] transition-colors">Pricing</Link>
            </div>
          </div>
          <div className="border-t border-[#00C6FF]/20 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2026 CarbonPilot AI. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-[#00FFB2] transition-colors">Privacy</a>
                <a href="#" className="hover:text-[#00FFB2] transition-colors">Terms</a>
                <a href="#" className="hover:text-[#00FFB2] transition-colors">Compliance</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}