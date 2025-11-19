import { DollarSign, TrendingUp, Activity, Zap } from "lucide-react"

export default function DashboardSection() {
    return(
        <div className="font-sans">

            <div className="mb-8">
                <h1 className="font-bold text-3xl mb-2.5">Dashboard</h1>
                <p className="w-full text-gray-400 text-base">Witamy ponownie! Oto przegląd Twoich metryk.</p>
            </div>
            {/* Sekcja z podsumowaniem finansowym */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

                {/* Całkowita wartość portfela */}
                <div className="bg-[#161616] rounded-lg p-4 shadow-gray-500 shadow-sm border border-[#292929]">
                    <div className="flex justify-between items-start mb-6">
                        <h2 className="text-sm text-gray-400">Całkowita wartość portfela</h2>
                        <DollarSign size={18} color="rgb(107 114 128)"/>    
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold mb-1">$93,850.00</h3>
                        <p className="text-gray-400 text-xs">+6.7% od czasu zakupu</p>
                    </div>
                </div>

                {/* Zysk dzisiaj */}
                <div className="bg-[#161616] rounded-lg p-4 shadow-gray-500 shadow-sm border border-[#292929]">
                    <div className="flex justify-between items-start">
                        <h2 className="text-sm text-gray-400 mb-6">Zysk dzisiaj</h2>
                        <TrendingUp size={18} color="rgb(107 114 128)"/>  
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold mb-1">+$5,850.00</h3>
                        <p className="text-gray-400 text-xs">Od czasu zakupu</p>
                    </div>
                </div>

                {/* Aktywne transakcje */}
                <div className="bg-[#161616] rounded-lg p-4 shadow-gray-500 shadow-sm border border-[#292929]">
                    <div className="flex justify-between items-start mb-6">
                        <h2 className="text-sm text-gray-400">Aktywne transakcje</h2>
                        <Activity size={18} color="rgb(107 114 128)"/>   
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold mb-1">6</h3>
                        <p className="text-gray-400 text-xs">Wszystkie zrealizowane</p>
                    </div>
                </div>

                {/* Najlepszy performer */}
                <div className="bg-[#161616] rounded-lg p-4 shadow-gray-500 shadow-sm border border-[#292929]">
                    <div className="flex justify-between items-start mb-6">
                        <h2 className="text-sm text-gray-400">Najlepszy performer</h2>
                        <Zap size={18} color="rgb(107 114 128)"/>   
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-1">Polkadot +9.4%</h3>
                        <p className="text-gray-400 text-xs">Ostatnie 7 dni</p>
                    </div>
                </div>
            </div>

            {/* Sekcja z statystykami 1*/}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

                {/* Ostatnia aktywność */}
                <div className="bg-[#161616] rounded-lg p-6 shadow-gray-500 shadow-sm border border-[#292929]">
                    <h2 className="text-lg font-semibold mb-6">Ostatnia aktywność</h2>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            <div>
                                <p className="font-semibold text-sm">Kupiono 0.75 BTC</p>
                                <p className="text-gray-400 text-xs">2 godziny temu</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            <div>
                                <p className="font-semibold text-sm">Kupiono 10 ETH</p>
                                <p className="text-gray-400 text-xs">5 godzin temu</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            <div>
                                <p className="font-semibold text-sm">Kupiono 5000 ADA</p>
                                <p className="text-gray-400 text-xs">1 dzień temu</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            <div>
                                <p className="font-semibold text-sm">Kupiono 20 SOL</p>
                                <p className="text-gray-400 text-xs">2 dni temu</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            <div>
                                <p className="font-semibold text-sm">Kupiono 10000 XRP</p>
                                <p className="text-gray-400 text-xs">3 dni temu</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Statystyki portfela */}
                <div className="bg-[#161616] rounded-lg p-6 shadow-gray-500 shadow-sm border border-[#292929]">
                    <h2 className="text-lg font-semibold mb-6">Statystyki portfela</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-400">Zwrot roczny</p>
                            <p className="text-sm font-semibold text-green-400">+6.7%</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-400">Zmienność</p>
                            <p className="text-sm font-semibold">18.5%</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-400">Stosunek Sharpe'a</p>
                            <p className="text-sm font-semibold">2.3</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-400">Maksymalny drawdown</p>
                            <p className="text-sm font-semibold text-red-700">-15.3%</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sekcja z statystykami 2*/}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

                {/* Top 5 kryptowalut */}
                <div className="bg-[#161616] rounded-lg p-6 shadow-gray-500 shadow-sm border border-[#292929]">
                    <h2 className="text-lg font-semibold mb-6">Top 5 kryptowalut w portfelu</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <p className="text-sm">Bitcoin (BTC)</p>
                            <div className="text-right">
                                <p className="text-sm font-semibold">$33,750.00</p>
                                <p className="text-xs text-gray-400">36.0%</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-sm">Ethereum (ETH)</p>
                            <div className="text-right">
                                <p className="text-sm font-semibold">$25,000.00</p>
                                <p className="text-xs text-gray-400">26.6%</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-sm">Ripple (XRP)</p>
                            <div className="text-right">
                                <p className="text-sm font-semibold">$25,000.00</p>
                                <p className="text-xs text-gray-400">26.6%</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-sm">Polkadot (DOT)</p>
                            <div className="text-right">
                                <p className="text-sm font-semibold">$1,750.00</p>
                                <p className="text-xs text-gray-400">1.9%</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-sm">Solana (SOL)</p>
                            <div className="text-right">
                                <p className="text-sm font-semibold">$3,600.00</p>
                                <p className="text-xs text-gray-400">3.8%</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wskaźniki rynkowe */}
                <div className="bg-[#161616] rounded-lg p-6 shadow-gray-500 shadow-sm border border-[#292929]">
                    <h2 className="text-lg font-semibold mb-6">Wskaźniki rynkowe</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-400">Bitcoin dominacja</p>
                            <div className="text-right">
                                <p className="text-sm font-semibold">43.2%</p>
                                <p className="text-xs text-green-400">+1.2%</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-400">Kapitalizacja rynku</p>
                            <div className="text-right">
                                <p className="text-sm font-semibold">$1.2T</p>
                                <p className="text-xs text-green-400">+3.5%</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-400">Strach i chciwość</p>
                            <div className="text-right">
                                <p className="text-sm font-semibold">68 (Chciwość)</p>
                                <p className="text-xs text-green-400">+5</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-400">Fear index</p>
                            <div className="text-right">
                                <p className="text-sm font-semibold">Umiarkowany</p>
                                <p className="text-xs text-green-400">Stabilny</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}