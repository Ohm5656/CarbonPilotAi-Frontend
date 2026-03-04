import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Upload, FileText, Zap, CheckCircle2, AlertCircle, Calendar, Building2, Sparkles, Save } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import PageLoader from '../components/PageLoader';

const factories = [
  'Bangkok Manufacturing Plant',
  'Chonburi Electronics Factory',
  'Rayong Auto Parts Center'
];

const months = [
  'January 2026',
  'February 2026',
  'March 2026',
  'April 2026',
  'May 2026',
  'June 2026'
];

export default function DataInput() {
  const [selectedFactory, setSelectedFactory] = useState(factories[0]);
  const [selectedMonth, setSelectedMonth] = useState(months[2]); // March 2026
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);
  
  // Upload state
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isExtracting, setIsExtracting] = useState(false);
  
  // Form state
  const [electricityKwh, setElectricityKwh] = useState('');
  const [productionVolume, setProductionVolume] = useState('');
  const [workingDays, setWorkingDays] = useState('');
  const [workingHours, setWorkingHours] = useState('');
  const [electricityCost, setElectricityCost] = useState('');
  
  // Validation
  const [touched, setTouched] = useState({
    electricity: false,
    production: false
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleExtractData = () => {
    setIsExtracting(true);
    // Simulate AI extraction
    setTimeout(() => {
      setElectricityKwh('8950');
      setElectricityCost('425000');
      setIsExtracting(false);
    }, 2000);
  };

  const handleSave = () => {
    console.log('Saving data:', {
      factory: selectedFactory,
      month: selectedMonth,
      electricityKwh,
      productionVolume,
      workingDays,
      workingHours,
      electricityCost
    });
    // Navigate or show success message
  };

  // Calculate data quality score
  const calculateQualityScore = () => {
    let score = 0;
    if (electricityKwh) score += 30;
    if (productionVolume) score += 30;
    if (workingDays) score += 15;
    if (workingHours) score += 15;
    if (electricityCost) score += 10;
    return score;
  };

  const qualityScore = calculateQualityScore();
  const isFormValid = electricityKwh && productionVolume;

  const getQualityColor = (score: number) => {
    if (score >= 90) return 'from-[#00E676] to-[#00FFB2]';
    if (score >= 70) return 'from-[#00C6FF] to-[#00FFB2]';
    if (score >= 50) return 'from-[#FFB020] to-[#00C6FF]';
    return 'from-[#FF6B6B] to-[#FFB020]';
  };

  const getQualityLabel = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 50) return 'Fair';
    return 'Needs Improvement';
  };

  if (isLoading) {
    return <PageLoader message="Loading data entry form..." />;
  }

  return (
    <PageTransition>
    <div className="min-h-screen bg-[#0B0F14] py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-[#00C6FF] bg-clip-text text-transparent">
            Monthly Data Input
          </h1>
          <p className="text-gray-400">Upload utility bills or enter data manually to update your carbon dashboard</p>
        </motion.div>

        {/* Selectors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        >
          {/* Factory Selector */}
          <div className="bg-[#121821]/80 backdrop-blur-xl border border-[#00C6FF]/30 rounded-xl p-6">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
              <Building2 className="w-4 h-4 text-[#00C6FF]" />
              Factory
            </label>
            <select
              value={selectedFactory}
              onChange={(e) => setSelectedFactory(e.target.value)}
              className="w-full bg-[#0B0F14] border border-[#00C6FF]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00C6FF] transition-colors"
            >
              {factories.map((factory) => (
                <option key={factory} value={factory}>
                  {factory}
                </option>
              ))}
            </select>
          </div>

          {/* Month Selector */}
          <div className="bg-[#121821]/80 backdrop-blur-xl border border-[#00C6FF]/30 rounded-xl p-6">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
              <Calendar className="w-4 h-4 text-[#00C6FF]" />
              Month
            </label>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="w-full bg-[#0B0F14] border border-[#00C6FF]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00C6FF] transition-colors"
            >
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Data Quality Score */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-[#121821]/80 to-[#0B0F14]/80 backdrop-blur-xl border border-[#00C6FF]/30 rounded-xl p-6 mb-8"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 bg-gradient-to-br ${getQualityColor(qualityScore)} rounded-lg flex items-center justify-center`}>
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Data Quality Score</h3>
                <p className="text-sm text-gray-400">Complete all fields for best accuracy</p>
              </div>
            </div>
            <div className="text-right">
              <div className={`text-3xl font-bold bg-gradient-to-r ${getQualityColor(qualityScore)} bg-clip-text text-transparent`}>
                {qualityScore}%
              </div>
              <div className="text-sm text-gray-400">{getQualityLabel(qualityScore)}</div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4 h-2 bg-[#0B0F14] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${qualityScore}%` }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`h-full bg-gradient-to-r ${getQualityColor(qualityScore)}`}
            />
          </div>
        </motion.div>

        {/* Section A: Upload Utility Bill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#121821]/80 backdrop-blur-xl border border-[#00C6FF]/30 rounded-xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-[#00C6FF] to-[#00FFB2] rounded-lg flex items-center justify-center">
              <Upload className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Upload Utility Bill</h2>
              <p className="text-sm text-gray-400">AI will extract kWh and cost automatically</p>
            </div>
          </div>

          {/* Upload Area */}
          <div className="mb-6">
            <label className="block">
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileUpload}
                className="hidden"
              />
              <div className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
                uploadedFile
                  ? 'border-[#00C6FF] bg-[#00C6FF]/5'
                  : 'border-[#00C6FF]/30 hover:border-[#00C6FF]/50 hover:bg-[#0B0F14]/50'
              }`}>
                {uploadedFile ? (
                  <div className="flex items-center justify-center gap-3">
                    <FileText className="w-8 h-8 text-[#00C6FF]" />
                    <div className="text-left">
                      <p className="text-white font-medium">{uploadedFile.name}</p>
                      <p className="text-sm text-gray-400">{(uploadedFile.size / 1024).toFixed(1)} KB</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <Upload className="w-12 h-12 text-gray-500 mx-auto mb-3" />
                    <p className="text-white font-medium mb-1">Drop your utility bill here</p>
                    <p className="text-sm text-gray-400">or click to browse (PDF, JPG, PNG)</p>
                  </>
                )}
              </div>
            </label>
          </div>

          {/* Preview & Extract */}
          {uploadedFile && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="space-y-4"
            >
              {/* Preview */}
              <div className="bg-[#0B0F14]/50 border border-[#00C6FF]/20 rounded-lg p-4 flex items-center gap-4">
                <FileText className="w-10 h-10 text-[#00C6FF]" />
                <div className="flex-1">
                  <p className="text-white font-medium">File Preview</p>
                  <p className="text-sm text-gray-400">Ready for AI extraction</p>
                </div>
                <CheckCircle2 className="w-6 h-6 text-[#00E676]" />
              </div>

              {/* Extract Button */}
              <button
                onClick={handleExtractData}
                disabled={isExtracting}
                className="w-full py-4 bg-gradient-to-r from-[#00C6FF] to-[#00FFB2] text-white font-medium rounded-lg shadow-lg shadow-[#00C6FF]/30 hover:shadow-xl hover:shadow-[#00C6FF]/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
              >
                {isExtracting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    >
                      <Sparkles className="w-5 h-5" />
                    </motion.div>
                    Extracting with AI...
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5" />
                    Extract kWh with AI
                  </>
                )}
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Section B: Manual Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[#121821]/80 backdrop-blur-xl border border-[#00C6FF]/30 rounded-xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-[#00C6FF] to-[#00FFB2] rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Manual Data Entry</h2>
              <p className="text-sm text-gray-400">Enter your monthly metrics</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Electricity kWh - Required */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Electricity Consumption <span className="text-[#00C6FF]">*</span>
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={electricityKwh}
                  onChange={(e) => {
                    setElectricityKwh(e.target.value);
                    setTouched({ ...touched, electricity: true });
                  }}
                  placeholder="8950"
                  className={`w-full bg-[#0B0F14] border rounded-lg px-4 py-3 pr-16 text-white placeholder-gray-500 focus:outline-none transition-colors ${
                    touched.electricity && !electricityKwh
                      ? 'border-[#FF6B6B] focus:border-[#FF6B6B]'
                      : 'border-[#00C6FF]/30 focus:border-[#00C6FF]'
                  }`}
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                  kWh
                </span>
              </div>
              {touched.electricity && !electricityKwh && (
                <p className="text-xs text-[#FF6B6B] mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  Required field
                </p>
              )}
            </div>

            {/* Production Volume - Required */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Production Volume <span className="text-[#00C6FF]">*</span>
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={productionVolume}
                  onChange={(e) => {
                    setProductionVolume(e.target.value);
                    setTouched({ ...touched, production: true });
                  }}
                  placeholder="12500"
                  className={`w-full bg-[#0B0F14] border rounded-lg px-4 py-3 pr-16 text-white placeholder-gray-500 focus:outline-none transition-colors ${
                    touched.production && !productionVolume
                      ? 'border-[#FF6B6B] focus:border-[#FF6B6B]'
                      : 'border-[#00C6FF]/30 focus:border-[#00C6FF]'
                  }`}
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                  pcs
                </span>
              </div>
              {touched.production && !productionVolume && (
                <p className="text-xs text-[#FF6B6B] mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  Required field
                </p>
              )}
            </div>

            {/* Working Days - Optional */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Working Days <span className="text-gray-500 text-xs">(optional)</span>
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={workingDays}
                  onChange={(e) => setWorkingDays(e.target.value)}
                  placeholder="22"
                  className="w-full bg-[#0B0F14] border border-[#00C6FF]/30 rounded-lg px-4 py-3 pr-16 text-white placeholder-gray-500 focus:outline-none focus:border-[#00C6FF] transition-colors"
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                  days
                </span>
              </div>
            </div>

            {/* Working Hours - Optional */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Working Hours/Day <span className="text-gray-500 text-xs">(optional)</span>
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={workingHours}
                  onChange={(e) => setWorkingHours(e.target.value)}
                  placeholder="16"
                  className="w-full bg-[#0B0F14] border border-[#00C6FF]/30 rounded-lg px-4 py-3 pr-16 text-white placeholder-gray-500 focus:outline-none focus:border-[#00C6FF] transition-colors"
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                  hrs
                </span>
              </div>
            </div>

            {/* Electricity Cost - Optional */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Electricity Cost <span className="text-gray-500 text-xs">(optional)</span>
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={electricityCost}
                  onChange={(e) => setElectricityCost(e.target.value)}
                  placeholder="425000"
                  className="w-full bg-[#0B0F14] border border-[#00C6FF]/30 rounded-lg px-4 py-3 pr-16 text-white placeholder-gray-500 focus:outline-none focus:border-[#00C6FF] transition-colors"
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                  THB
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Save Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={handleSave}
            disabled={!isFormValid}
            className="w-full py-4 bg-gradient-to-r from-[#00C6FF] to-[#00FFB2] text-white font-medium rounded-xl shadow-2xl shadow-[#00C6FF]/40 hover:shadow-3xl hover:shadow-[#00C6FF]/60 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none transition-all flex items-center justify-center gap-3 text-lg"
          >
            <Save className="w-6 h-6" />
            Save & Update Dashboard
          </button>
          
          {!isFormValid && (
            <p className="text-center text-sm text-gray-400 mt-3 flex items-center justify-center gap-2">
              <AlertCircle className="w-4 h-4" />
              Please fill in all required fields to continue
            </p>
          )}
        </motion.div>
      </div>
    </div>
    </PageTransition>
  );
}