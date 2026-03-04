import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Factory, Zap, CheckCircle2, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router';
import PageTransition from '../components/PageTransition';
import PageLoader from '../components/PageLoader';

const industries = [
  'Automotive',
  'Electronics',
  'Food & Beverage',
  'Pharmaceuticals',
  'Textiles',
  'Chemicals',
  'Plastics',
  'Metals',
  'Other'
];

const units = [
  { value: 'pcs', label: 'Pieces (pcs)' },
  { value: 'kg', label: 'Kilograms (kg)' },
  { value: 'ton', label: 'Tons (ton)' },
  { value: 'liter', label: 'Liters (L)' }
];

const tariffTypes = [
  { value: 'tou', label: 'Time-of-Use (TOU)', description: 'Different rates for peak/off-peak hours' },
  { value: 'flat', label: 'Flat Rate', description: 'Single rate throughout the day' }
];

export default function Onboarding() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);
  
  // Step 1
  const [factoryName, setFactoryName] = useState('');
  const [industry, setIndustry] = useState('');
  const [productionUnit, setProductionUnit] = useState('pcs');
  
  // Step 2
  const [tariffType, setTariffType] = useState('tou');
  const [peakHoursStart, setPeakHoursStart] = useState('09:00');
  const [peakHoursEnd, setPeakHoursEnd] = useState('17:00');
  const [renewablePercent, setRenewablePercent] = useState(0);
  
  const totalSteps = 3;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    // Save onboarding data
    const onboardingData = {
      factoryName,
      industry,
      productionUnit,
      tariffType,
      peakHours: tariffType === 'tou' ? { start: peakHoursStart, end: peakHoursEnd } : null,
      renewablePercent
    };
    console.log('Onboarding completed:', onboardingData);
    navigate('/');
  };

  const isStep1Valid = factoryName.trim() !== '' && industry !== '';
  const isStep2Valid = true;

  if (isLoading) {
    return <PageLoader message="Loading onboarding wizard..." />;
  }

  return (
    <PageTransition>
    <div className="min-h-screen bg-[#0B0F14] flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#00C6FF] to-[#00FFB2] rounded-lg flex items-center justify-center">
              <Factory className="w-6 h-6 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Factory Setup</h1>
          <p className="text-gray-400">Let's get your carbon tracking started in 3 simple steps</p>
        </motion.div>

        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-all ${
                    step < currentStep
                      ? 'bg-gradient-to-br from-[#00C6FF] to-[#00FFB2] text-white'
                      : step === currentStep
                      ? 'bg-gradient-to-br from-[#00C6FF] to-[#00FFB2] text-white ring-4 ring-[#00C6FF]/30'
                      : 'bg-[#121821] text-gray-500 border border-[#00C6FF]/20'
                  }`}
                >
                  {step < currentStep ? <CheckCircle2 className="w-5 h-5" /> : step}
                </div>
                {step < 3 && (
                  <div
                    className={`w-16 h-1 mx-2 rounded-full transition-all ${
                      step < currentStep
                        ? 'bg-gradient-to-r from-[#00C6FF] to-[#00FFB2]'
                        : 'bg-[#121821]'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <span className="text-sm text-gray-400">
              Step {currentStep} of {totalSteps}
            </span>
          </div>
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#121821]/80 backdrop-blur-xl border border-[#00C6FF]/30 rounded-2xl p-8 shadow-2xl"
        >
          <AnimatePresence mode="wait">
            {/* Step 1: Factory Basics */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#00C6FF] to-[#00FFB2] rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Factory Basics</h2>
                    <p className="text-sm text-gray-400">Tell us about your facility</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Factory Name <span className="text-[#00C6FF]">*</span>
                  </label>
                  <input
                    type="text"
                    value={factoryName}
                    onChange={(e) => setFactoryName(e.target.value)}
                    placeholder="e.g., Bangkok Manufacturing Plant"
                    className="w-full bg-[#0B0F14] border border-[#00C6FF]/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00C6FF] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Industry <span className="text-[#00C6FF]">*</span>
                  </label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full bg-[#0B0F14] border border-[#00C6FF]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00C6FF] transition-colors"
                  >
                    <option value="">Select your industry</option>
                    {industries.map((ind) => (
                      <option key={ind} value={ind}>
                        {ind}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Production Unit <span className="text-[#00C6FF]">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {units.map((unit) => (
                      <button
                        key={unit.value}
                        type="button"
                        onClick={() => setProductionUnit(unit.value)}
                        className={`p-4 rounded-lg border transition-all text-left ${
                          productionUnit === unit.value
                            ? 'bg-gradient-to-br from-[#00C6FF]/20 to-[#00FFB2]/20 border-[#00C6FF] text-white'
                            : 'bg-[#0B0F14] border-[#00C6FF]/30 text-gray-400 hover:border-[#00C6FF]/50'
                        }`}
                      >
                        <div className="font-medium">{unit.label}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Energy & Billing */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#00C6FF] to-[#00FFB2] rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Energy & Billing</h2>
                    <p className="text-sm text-gray-400">Configure your energy profile</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Electricity Tariff Type
                  </label>
                  <div className="space-y-3">
                    {tariffTypes.map((tariff) => (
                      <button
                        key={tariff.value}
                        type="button"
                        onClick={() => setTariffType(tariff.value)}
                        className={`w-full p-4 rounded-lg border transition-all text-left ${
                          tariffType === tariff.value
                            ? 'bg-gradient-to-br from-[#00C6FF]/20 to-[#00FFB2]/20 border-[#00C6FF] text-white'
                            : 'bg-[#0B0F14] border-[#00C6FF]/30 text-gray-400 hover:border-[#00C6FF]/50'
                        }`}
                      >
                        <div className="font-medium mb-1">{tariff.label}</div>
                        <div className="text-sm text-gray-500">{tariff.description}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {tariffType === 'tou' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="grid grid-cols-2 gap-4"
                  >
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Peak Hours Start
                      </label>
                      <input
                        type="time"
                        value={peakHoursStart}
                        onChange={(e) => setPeakHoursStart(e.target.value)}
                        className="w-full bg-[#0B0F14] border border-[#00C6FF]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00C6FF] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Peak Hours End
                      </label>
                      <input
                        type="time"
                        value={peakHoursEnd}
                        onChange={(e) => setPeakHoursEnd(e.target.value)}
                        className="w-full bg-[#0B0F14] border border-[#00C6FF]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00C6FF] transition-colors"
                      />
                    </div>
                  </motion.div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-medium text-gray-300">
                      Renewable Energy Usage
                    </label>
                    <span className="text-2xl font-bold text-white">{renewablePercent}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={renewablePercent}
                    onChange={(e) => setRenewablePercent(Number(e.target.value))}
                    className="w-full h-2 bg-[#0B0F14] rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #00C6FF 0%, #00FFB2 ${renewablePercent}%, #0B0F14 ${renewablePercent}%, #0B0F14 100%)`
                    }}
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>0% - No renewables</span>
                    <span>100% - Fully renewable</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Review & Confirm */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#00C6FF] to-[#00FFB2] rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Review & Confirm</h2>
                    <p className="text-sm text-gray-400">Verify your factory setup</p>
                  </div>
                </div>

                {/* Summary */}
                <div className="space-y-4">
                  {/* Factory Info */}
                  <div className="bg-[#0B0F14]/50 border border-[#00C6FF]/20 rounded-lg p-5">
                    <h3 className="text-sm font-medium text-gray-400 mb-3">Factory Information</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Name:</span>
                        <span className="text-white font-medium">{factoryName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Industry:</span>
                        <span className="text-white font-medium">{industry}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Production Unit:</span>
                        <span className="text-white font-medium">
                          {units.find(u => u.value === productionUnit)?.label}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Energy Config */}
                  <div className="bg-[#0B0F14]/50 border border-[#00C6FF]/20 rounded-lg p-5">
                    <h3 className="text-sm font-medium text-gray-400 mb-3">Energy Configuration</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Tariff Type:</span>
                        <span className="text-white font-medium">
                          {tariffTypes.find(t => t.value === tariffType)?.label}
                        </span>
                      </div>
                      {tariffType === 'tou' && (
                        <div className="flex justify-between">
                          <span className="text-gray-400">Peak Hours:</span>
                          <span className="text-white font-medium">
                            {peakHoursStart} - {peakHoursEnd}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-gray-400">Renewable Energy:</span>
                        <span className="text-white font-medium">{renewablePercent}%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Success Message */}
                <div className="bg-gradient-to-r from-[#00C6FF]/10 to-[#00FFB2]/10 border border-[#00C6FF]/30 rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00FFB2] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-medium mb-1">Ready to Start</h4>
                      <p className="text-sm text-gray-400">
                        Your factory profile is complete. Click "Complete Setup" to begin tracking your carbon footprint.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-[#00C6FF]/20">
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className="px-6 py-3 bg-[#0B0F14] border border-[#00C6FF]/30 rounded-lg text-white font-medium hover:bg-[#121821] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
            >
              <ChevronLeft className="w-5 h-5" />
              Back
            </button>

            {currentStep < totalSteps ? (
              <button
                onClick={handleNext}
                disabled={currentStep === 1 && !isStep1Valid}
                className="px-6 py-3 bg-gradient-to-r from-[#00C6FF] to-[#00FFB2] text-white font-medium rounded-lg shadow-lg shadow-[#00C6FF]/30 hover:shadow-xl hover:shadow-[#00C6FF]/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
              >
                Next
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={handleComplete}
                className="px-6 py-3 bg-gradient-to-r from-[#00C6FF] to-[#00FFB2] text-white font-medium rounded-lg shadow-lg shadow-[#00C6FF]/30 hover:shadow-xl hover:shadow-[#00C6FF]/50 transition-all flex items-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5" />
                Complete Setup
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
    </PageTransition>
  );
}