import { motion, AnimatePresence } from 'motion/react';
import { X, TrendingDown, Zap, DollarSign, Sparkles, RotateCcw, Save } from 'lucide-react';
import { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface SimulationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SimulationPanel({ isOpen, onClose }: SimulationPanelProps) {
  const [productionVolume, setProductionVolume] = useState(100);
  const [efficiency, setEfficiency] = useState(0);
  const [peakShift, setPeakShift] = useState(false);
  const [peakShiftPercentage, setPeakShiftPercentage] = useState(30);
  const [renewable, setRenewable] = useState(0);

  // Base current values
  const currentCarbonPerUnit = 1.08;
  const currentTotalEmissions = 45.2;
  const currentEnergy = 8950;
  const currentCost = 425000;

  // Calculate simulated values based on inputs
  const volumeMultiplier = productionVolume / 100;
  const efficiencyReduction = (efficiency / 100) * 0.15;
  const peakShiftReduction = peakShift ? (peakShiftPercentage / 100) * 0.12 : 0;
  const renewableReduction = (renewable / 100) * 0.25;

  const totalReduction = efficiencyReduction + peakShiftReduction + renewableReduction;
  
  const simulatedCarbonPerUnit = currentCarbonPerUnit * (1 - totalReduction);
  const simulatedTotalEmissions = currentTotalEmissions * volumeMultiplier * (1 - totalReduction);
  const simulatedEnergy = currentEnergy * volumeMultiplier * (1 - efficiencyReduction - (renewable / 100) * 0.3);
  const simulatedCost = currentCost * volumeMultiplier * (1 - efficiencyReduction * 0.6 - (renewable / 100) * 0.2);

  // Calculate deltas
  const carbonPerUnitDelta = ((simulatedCarbonPerUnit - currentCarbonPerUnit) / currentCarbonPerUnit) * 100;
  const energyDelta = ((simulatedEnergy - currentEnergy) / currentEnergy) * 100;
  const emissionsDelta = ((simulatedTotalEmissions - currentTotalEmissions) / currentTotalEmissions) * 100;
  const costDelta = ((simulatedCost - currentCost) / currentCost) * 100;

  // Generate chart data for each metric
  const generateChartData = (currentValue: number, simulatedValue: number, dataKey: string) => {
    const points = 8;
    return Array.from({ length: points }, (_, i) => {
      const progress = i / (points - 1);
      const simulatedPoint = currentValue + (simulatedValue - currentValue) * progress;
      
      return {
        month: i === 0 ? 'Now' : `M${i}`,
        current: Number(currentValue.toFixed(2)),
        simulated: Number(simulatedPoint.toFixed(2)),
      };
    });
  };

  const energyData = useMemo(() => 
    generateChartData(currentEnergy, simulatedEnergy, 'energy'),
    [simulatedEnergy]
  );

  const emissionsData = useMemo(() => 
    generateChartData(currentTotalEmissions, simulatedTotalEmissions, 'emissions'),
    [simulatedTotalEmissions]
  );

  const carbonPerUnitData = useMemo(() => 
    generateChartData(currentCarbonPerUnit, simulatedCarbonPerUnit, 'carbonPerUnit'),
    [simulatedCarbonPerUnit]
  );

  const costData = useMemo(() => 
    generateChartData(currentCost / 1000, simulatedCost / 1000, 'cost'),
    [simulatedCost]
  );

  const handleReset = () => {
    setProductionVolume(100);
    setEfficiency(0);
    setPeakShift(false);
    setPeakShiftPercentage(30);
    setRenewable(0);
  };

  const handleSave = () => {
    // Placeholder for save functionality
    alert('Scenario saved! (Feature coming soon)');
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#121821]/95 backdrop-blur-xl border border-[#00C6FF]/30 rounded-lg p-3 shadow-2xl">
          <p className="text-white font-semibold mb-2">{payload[0].payload.month}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.dataKey === 'current' ? 'Current' : 'Simulated'}: {entry.value.toLocaleString()}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const DeltaBadge = ({ delta }: { delta: number }) => (
    <div className={`absolute top-3 right-3 px-2 py-1 rounded text-xs font-semibold ${
      delta <= 0 ? 'bg-[#00E676]/20 text-[#00E676]' : 'bg-[#FFB020]/20 text-[#FFB020]'
    }`}>
      {delta <= 0 ? '↓' : '↑'} {Math.abs(delta).toFixed(1)}%
    </div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full md:w-[900px] lg:w-[1000px] bg-[#0B0F14] border-l border-[#00C6FF]/30 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#121821]/95 backdrop-blur-xl border-b border-[#00C6FF]/20 p-6 flex-shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white">Simulation Engine</h2>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center gap-2 bg-gradient-to-r from-[#00C6FF]/20 to-[#00FFB2]/20 border border-[#00C6FF]/40 rounded-full px-3 py-1">
                        <Sparkles className="w-3 h-3 text-[#00FFB2]" />
                        <span className="text-xs text-white font-medium">AI Predicted Impact</span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-[#00E676] font-semibold">Confidence: High</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 bg-[#0B0F14] hover:bg-[#121821] border border-[#00C6FF]/30 rounded-lg flex items-center justify-center transition-all"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Main Content - Scrollable */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6 space-y-6">
                {/* Four Separate Charts in 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Energy Usage Chart */}
                  <div className="bg-[#121821]/80 backdrop-blur-xl border border-[#00C6FF]/30 rounded-xl p-5 relative">
                    <DeltaBadge delta={energyDelta} />
                    <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-[#00C6FF]" />
                      Energy Usage (kWh)
                    </h3>
                    <div className="h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={energyData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#121821" />
                          <XAxis dataKey="month" stroke="#6B7280" style={{ fontSize: '11px' }} />
                          <YAxis stroke="#6B7280" style={{ fontSize: '11px' }} />
                          <Tooltip content={<CustomTooltip />} />
                          <Line
                            type="monotone"
                            dataKey="current"
                            stroke="#6B7280"
                            strokeWidth={2}
                            strokeDasharray="5 5"
                            dot={false}
                          />
                          <Line
                            type="monotone"
                            dataKey="simulated"
                            stroke="#00C6FF"
                            strokeWidth={3}
                            dot={{ fill: '#00C6FF', r: 3, strokeWidth: 2, stroke: '#0B0F14' }}
                            activeDot={{ r: 5, fill: '#00C6FF', stroke: '#fff', strokeWidth: 2 }}
                            style={{ filter: 'drop-shadow(0 0 8px rgba(0, 198, 255, 0.6))' }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Total Emissions Chart */}
                  <div className="bg-[#121821]/80 backdrop-blur-xl border border-[#00C6FF]/30 rounded-xl p-5 relative">
                    <DeltaBadge delta={emissionsDelta} />
                    <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                      <TrendingDown className="w-4 h-4 text-[#FF6B6B]" />
                      Total Emissions (tCO2e)
                    </h3>
                    <div className="h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={emissionsData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#121821" />
                          <XAxis dataKey="month" stroke="#6B7280" style={{ fontSize: '11px' }} />
                          <YAxis stroke="#6B7280" style={{ fontSize: '11px' }} />
                          <Tooltip content={<CustomTooltip />} />
                          <Line
                            type="monotone"
                            dataKey="current"
                            stroke="#6B7280"
                            strokeWidth={2}
                            strokeDasharray="5 5"
                            dot={false}
                          />
                          <Line
                            type="monotone"
                            dataKey="simulated"
                            stroke="#FF6B6B"
                            strokeWidth={3}
                            dot={{ fill: '#FF6B6B', r: 3, strokeWidth: 2, stroke: '#0B0F14' }}
                            activeDot={{ r: 5, fill: '#FF6B6B', stroke: '#fff', strokeWidth: 2 }}
                            style={{ filter: 'drop-shadow(0 0 8px rgba(255, 107, 107, 0.6))' }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Carbon per Unit Chart */}
                  <div className="bg-[#121821]/80 backdrop-blur-xl border border-[#00C6FF]/30 rounded-xl p-5 relative">
                    <DeltaBadge delta={carbonPerUnitDelta} />
                    <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                      <TrendingDown className="w-4 h-4 text-[#00FFB2]" />
                      Carbon per Unit (kgCO2e/unit)
                    </h3>
                    <div className="h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={carbonPerUnitData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#121821" />
                          <XAxis dataKey="month" stroke="#6B7280" style={{ fontSize: '11px' }} />
                          <YAxis stroke="#6B7280" style={{ fontSize: '11px' }} />
                          <Tooltip content={<CustomTooltip />} />
                          <Line
                            type="monotone"
                            dataKey="current"
                            stroke="#6B7280"
                            strokeWidth={2}
                            strokeDasharray="5 5"
                            dot={false}
                          />
                          <Line
                            type="monotone"
                            dataKey="simulated"
                            stroke="#00FFB2"
                            strokeWidth={3}
                            dot={{ fill: '#00FFB2', r: 3, strokeWidth: 2, stroke: '#0B0F14' }}
                            activeDot={{ r: 5, fill: '#00FFB2', stroke: '#fff', strokeWidth: 2 }}
                            style={{ filter: 'drop-shadow(0 0 8px rgba(0, 255, 178, 0.6))' }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Cost Chart */}
                  <div className="bg-[#121821]/80 backdrop-blur-xl border border-[#00C6FF]/30 rounded-xl p-5 relative">
                    <DeltaBadge delta={costDelta} />
                    <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-[#FFB020]" />
                      Cost (K THB)
                    </h3>
                    <div className="h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={costData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#121821" />
                          <XAxis dataKey="month" stroke="#6B7280" style={{ fontSize: '11px' }} />
                          <YAxis stroke="#6B7280" style={{ fontSize: '11px' }} />
                          <Tooltip content={<CustomTooltip />} />
                          <Line
                            type="monotone"
                            dataKey="current"
                            stroke="#6B7280"
                            strokeWidth={2}
                            strokeDasharray="5 5"
                            dot={false}
                          />
                          <Line
                            type="monotone"
                            dataKey="simulated"
                            stroke="#FFB020"
                            strokeWidth={3}
                            dot={{ fill: '#FFB020', r: 3, strokeWidth: 2, stroke: '#0B0F14' }}
                            activeDot={{ r: 5, fill: '#FFB020', stroke: '#fff', strokeWidth: 2 }}
                            style={{ filter: 'drop-shadow(0 0 8px rgba(255, 176, 32, 0.6))' }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

                {/* Before vs After Summary Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {/* Carbon per Unit */}
                  <div className="bg-[#121821]/80 backdrop-blur-xl border border-[#00C6FF]/30 rounded-xl p-4">
                    <p className="text-xs text-gray-400 font-medium mb-3">Carbon per Unit</p>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-lg text-gray-500">{currentCarbonPerUnit}</span>
                      <span className="text-white">→</span>
                      <span className="text-2xl font-bold text-[#00FFB2]">{simulatedCarbonPerUnit.toFixed(2)}</span>
                    </div>
                    <p className="text-xs text-gray-500">kgCO2e/unit</p>
                    <div className={`mt-2 text-sm font-semibold ${carbonPerUnitDelta <= 0 ? 'text-[#00E676]' : 'text-[#FFB020]'}`}>
                      {carbonPerUnitDelta <= 0 ? '↓' : '↑'} {Math.abs(carbonPerUnitDelta).toFixed(1)}%
                    </div>
                  </div>

                  {/* Energy */}
                  <div className="bg-[#121821]/80 backdrop-blur-xl border border-[#00C6FF]/30 rounded-xl p-4">
                    <p className="text-xs text-gray-400 font-medium mb-3">Energy</p>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-lg text-gray-500">{currentEnergy.toLocaleString()}</span>
                      <span className="text-white">→</span>
                      <span className="text-2xl font-bold text-[#00C6FF]">{Math.round(simulatedEnergy).toLocaleString()}</span>
                    </div>
                    <p className="text-xs text-gray-500">kWh</p>
                    <div className={`mt-2 text-sm font-semibold ${energyDelta <= 0 ? 'text-[#00E676]' : 'text-[#FFB020]'}`}>
                      {energyDelta <= 0 ? '↓' : '↑'} {Math.abs(energyDelta).toFixed(1)}%
                    </div>
                  </div>

                  {/* Emissions */}
                  <div className="bg-[#121821]/80 backdrop-blur-xl border border-[#00C6FF]/30 rounded-xl p-4">
                    <p className="text-xs text-gray-400 font-medium mb-3">Emissions</p>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-lg text-gray-500">{currentTotalEmissions}</span>
                      <span className="text-white">→</span>
                      <span className="text-2xl font-bold text-[#FF6B6B]">{simulatedTotalEmissions.toFixed(1)}</span>
                    </div>
                    <p className="text-xs text-gray-500">tCO2e</p>
                    <div className={`mt-2 text-sm font-semibold ${emissionsDelta <= 0 ? 'text-[#00E676]' : 'text-[#FFB020]'}`}>
                      {emissionsDelta <= 0 ? '↓' : '↑'} {Math.abs(emissionsDelta).toFixed(1)}%
                    </div>
                  </div>

                  {/* Cost */}
                  <div className="bg-[#121821]/80 backdrop-blur-xl border border-[#00C6FF]/30 rounded-xl p-4">
                    <p className="text-xs text-gray-400 font-medium mb-3">Cost</p>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-lg text-gray-500">฿{(currentCost / 1000).toFixed(0)}K</span>
                      <span className="text-white">→</span>
                      <span className="text-2xl font-bold text-[#FFB020]">฿{(simulatedCost / 1000).toFixed(0)}K</span>
                    </div>
                    <p className="text-xs text-gray-500">THB/month</p>
                    <div className={`mt-2 text-sm font-semibold ${costDelta <= 0 ? 'text-[#00E676]' : 'text-[#FFB020]'}`}>
                      {costDelta <= 0 ? '↓' : '↑'} {Math.abs(costDelta).toFixed(1)}%
                    </div>
                  </div>
                </div>

                {/* Scenario Controls - Always Visible */}
                <div className="bg-[#121821]/80 backdrop-blur-xl border border-[#00C6FF]/30 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-white">Scenario Controls</h3>
                    <div className="flex gap-3">
                      <button
                        onClick={handleReset}
                        className="px-4 py-2 bg-[#0B0F14] hover:bg-[#121821] border border-[#00C6FF]/30 rounded-lg text-sm text-gray-300 font-medium transition-all flex items-center gap-2"
                      >
                        <RotateCcw className="w-4 h-4" />
                        Reset to Baseline
                      </button>
                      <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-gradient-to-r from-[#00C6FF] to-[#00FFB2] hover:opacity-90 rounded-lg text-sm text-white font-semibold transition-all flex items-center gap-2"
                      >
                        <Save className="w-4 h-4" />
                        Save Scenario
                      </button>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Production Volume */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-gray-300">Production Volume</label>
                        <span className="text-lg font-bold text-white">{productionVolume}%</span>
                      </div>
                      <input
                        type="range"
                        min="50"
                        max="150"
                        value={productionVolume}
                        onChange={(e) => setProductionVolume(Number(e.target.value))}
                        className="custom-range w-full"
                      />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>50%</span>
                        <span>100%</span>
                        <span>150%</span>
                      </div>
                    </div>

                    {/* Efficiency Improvement */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-gray-300">Efficiency Improvement</label>
                        <span className="text-lg font-bold text-white">+{efficiency}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="30"
                        value={efficiency}
                        onChange={(e) => setEfficiency(Number(e.target.value))}
                        className="custom-range w-full"
                      />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>0%</span>
                        <span>15%</span>
                        <span>30%</span>
                      </div>
                    </div>

                    {/* Peak Load Shift */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-4 bg-[#0B0F14] rounded-lg border border-[#00C6FF]/20">
                        <div>
                          <p className="text-sm font-medium text-gray-300">Peak Load Shift</p>
                          <p className="text-xs text-gray-500 mt-1">Shift production to off-peak hours</p>
                        </div>
                        <button
                          onClick={() => setPeakShift(!peakShift)}
                          className={`relative w-14 h-7 rounded-full transition-all ${
                            peakShift ? 'bg-gradient-to-r from-[#00C6FF] to-[#00FFB2]' : 'bg-gray-600'
                          }`}
                        >
                          <motion.div
                            animate={{ x: peakShift ? 28 : 2 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-lg"
                          />
                        </button>
                      </div>

                      {/* Peak Shift Percentage */}
                      <AnimatePresence>
                        {peakShift && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="space-y-3 overflow-hidden"
                          >
                            <div className="flex items-center justify-between">
                              <label className="text-sm font-medium text-gray-300">Shift %</label>
                              <span className="text-lg font-bold text-white">{peakShiftPercentage}%</span>
                            </div>
                            <input
                              type="range"
                              min="10"
                              max="50"
                              value={peakShiftPercentage}
                              onChange={(e) => setPeakShiftPercentage(Number(e.target.value))}
                              className="custom-range w-full"
                            />
                            <div className="flex justify-between text-xs text-gray-500">
                              <span>10%</span>
                              <span>30%</span>
                              <span>50%</span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Renewable Energy */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-gray-300">Renewable Energy Input</label>
                        <span className="text-lg font-bold text-white">{renewable}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={renewable}
                        onChange={(e) => setRenewable(Number(e.target.value))}
                        className="custom-range w-full"
                      />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>0%</span>
                        <span>50%</span>
                        <span>100%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
