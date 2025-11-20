import { ChartLine, ChartColumn, ChartPie } from "lucide-react";

export default function AnalyticsSection() {
return (
    <div>
         {/* Header */}
            <div className="space-y-2 mb-6 md:mb-8">
                <h2 className="font-bold text-2xl md:text-3xl">Analityka kryptowalut</h2>
                <p className="text-gray-400 text-sm md:text-base">Szczegółowa analiza wydajności portfela kryptowalut i trendów rynkowych.</p>
            </div>

            {/* statystyki */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* Zmiany BTC */}
                <div className="h-40 bg-[#161616] rounded-lg shadow-blue-400 shadow-md">
                    <div className="flex justify-between items-center p-4">
                        <p className="font-semibold">Zmiany ceny BTC</p>
                        <ChartLine size={18} color="rgb(96 165 250)" />
                    </div>
                    <div className="w-full p-4">
                        <p className="text-3xl font-bold">+7.1%</p>
                        <p className="text-gray-400 text-xs">Od czasu zakupu</p>
                    </div>
                </div>

                {/* Zmiany ETH */}
                <div className="h-40 bg-[#161616] rounded-lg shadow-blue-700 shadow-md">
                    <div className="flex justify-between items-center p-4">
                        <p className="font-semibold">Zmiany ceny ETH</p>
                        <ChartColumn size={18} color="rgb(29 78 216)" />
                    </div>
                    <div className="w-full p-4">
                        <p className="font-bold text-3xl">+8.7%</p>
                        <p className="text-gray-400 text-xs">Od czasu zakupu</p>
                    </div>
                </div>

                {/* Zmienność portfela */}
                <div className="h-40 bg-[#161616] rounded-lg shadow-blue-400 shadow-md">
                    <div className="flex justify-between items-center p-4">
                        <p className="font-semibold">Zmienność portfela</p>
                        <ChartPie size={18} color="rgb(96 165 250)" />
                    </div>
                    <div className="w-full p-4">
                        <p className="font-bold text-3xl">6.7%</p>
                        <p className="text-blue-400 text-xs">Średni zwrot</p>
                    </div>
                </div>
            </div>

            {/* Alokacja portfela */}
            <div className="bg-[#161616] p-6 rounded-lg shadow-gray-500/50 shadow-md border border-[#292929] mt-8">
                <h2 className="text-2xl mb-6">Wydajność kryptowalut w portfelu</h2>
                
                <div className="space-y-6">
                    {/* Bitcoin */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <div className="flex-col">
                                <span className="font-semibold">BTC</span>
                                <span className="text-green-400 p-2">+7.1%</span>
                            </div>
                            <div>
                                <span className="font-semibold">$33,670.00</span>
                            </div>
                            
                        </div>
                        <div className="w-full bg-[#272727] rounded-lg h-3 overflow-hidden">
                            <div className="bg-blue-600 h-full rounded-lg" style={{width: '36%'}}></div>
                        </div>
                    </div>

                    {/* Ethereum */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <div className="flex-col">
                                <span className="font-semibold">ETH</span>
                                <span className="text-green-400 p-2">+8.7%</span>
                            </div>
                            <div>
                                <span className="font-semibold">$25,000.00</span>
                            </div>
                        </div>
                        <div className="w-full bg-[#272727] rounded-lg h-3 overflow-hidden">
                            <div className="bg-blue-500 h-full rounded-lg" style={{width: '26.6%'}}></div>
                        </div>
                    </div>

                    {/* Ripple */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <div className="flex-col">
                                <span className="font-semibold">XRP</span>
                                <span className="text-green-400 p-2">+4.2%</span>
                            </div>
                            <div>
                                <span className="font-semibold">$25,000.00</span>
                            </div>
                        </div>
                        <div className="w-full bg-[#272727] rounded-lg h-3 overflow-hidden">
                            <div className="bg-blue-500 h-full rounded-lg" style={{width: '26.6%'}}></div>
                        </div>
                    </div>

                    {/* Cardano */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <div className="flex-col">
                                <span className="font-semibold">ADA</span>
                                <span className="text-green-400 p-2">+5.1%</span>
                            </div>
                            <div>
                                <span className="font-semibold">$4,750.00</span>
                            </div>
                        </div>
                        <div className="w-full bg-[#272727] rounded-lg h-3 overflow-hidden">
                            <div className="bg-blue-400 h-full rounded-lg" style={{width: '5.1%'}}></div>
                        </div>
                    </div>

                    {/* Solana */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <div className="flex-col">
                                <span className="font-semibold">SOL</span>
                                <span className="text-green-400 p-2">+3.8%</span>
                            </div>
                            <div>
                                <span className="font-semibold">$3,600.00</span>
                            </div>
                        </div>
                        <div className="w-full bg-[#272727] rounded-lg h-3 overflow-hidden">
                            <div className="bg-blue-400 h-full rounded-lg" style={{width: '3.8%'}}></div>
                        </div>
                    </div>

                    {/* Polkadot */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <div className="flex-col">
                                <span className="font-semibold">DOT</span>
                                <span className="text-green-400 p-2">+1.9%</span>
                            </div>
                            <div>
                                <span className="font-semibold">$1,750.00</span>
                            </div>
                        </div>
                        <div className="w-full bg-[#272727] rounded-lg h-3 overflow-hidden">
                            <div className="bg-blue-400 h-full rounded-lg" style={{width: '1.9%'}}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 mt-8">

                {/* Podsumowanie portfela */}
                <div className="bg-[#161616] rounded-lg p-6 shadow-gray-500 shadow-sm border border-[#292929]">
                    <h2 className="text-lg font-semibold mb-6">Alokacja portfela kryptowalut</h2>

                    {/* Inwestycja początkowa */}
                    <div className="space-y-4 p-2">
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-400">Inwestycja początkowa</p>
                            <div className="text-right">
                                <p className="text-sm font-semibold text-red-700">-$88,000.00</p>        
                            </div>
                        </div>
                        <hr className=" border-gray-600"/>
                    </div>

                    {/* Zysk z handlu */}
                    <div className="space-y-4 p-2">
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-400">Zysk z handlu</p>
                            <div className="text-right">
                                <p className="text-sm font-semibold text-green-400">+$12,500.00</p>        
                            </div>
                        </div>
                        <hr className=" border-gray-600"/>
                    </div>

                    {/* Zmiana wartości rynkowej */}
                    <div className="space-y-4 p-2">
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-400">Zmiana wartości rynkowej</p>
                            <div className="text-right">
                                <p className="text-sm font-semibold text-red-700">-$6,650.00</p>        
                            </div>
                        </div>
                        <hr className=" border-gray-600"/>
                    </div>

                    {/* Bieżąca wartość portfela */}
                    <div className="space-y-4 p-2">
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-400">Bieżąca wartość portfela</p>
                            <div className="text-right">
                                <p className="text-sm font-semibold text-green-400">$93,850.00</p>        
                            </div>
                        </div>
                        <hr className=" border-gray-600"/>
                     </div>
                </div>

                {/* Alokacja portfela kryptowalut */}
                <div className="bg-[#161616] rounded-lg p-6 shadow-gray-500 shadow-sm border border-[#292929]">
                    <h2 className="text-lg font-semibold mb-6">Alokacja portfela kryptowalut</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-400">Bitcoin (BTC)</p>
                            <div className="text-right">
                                <p className="text-sm font-semibold">$33,750.00</p>
                                <p className="text-xs text-gray-400">36.0%</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-400">Ethereum (ETH)</p>
                            <div className="text-right">
                                <p className="text-sm font-semibold">$25,000.00</p>
                                <p className="text-xs text-gray-400">26.6%</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-400">Ripple (XRP)</p>
                            <div className="text-right">
                                <p className="text-sm font-semibold">$25,000.00</p>
                                <p className="text-xs text-gray-400">26.6%</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-400">Polkadot (DOT)</p>
                            <div className="text-right">
                                <p className="text-sm font-semibold">$1,750.00</p>
                                <p className="text-xs text-gray-400">1.9%</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-400">Solana (SOL)</p>
                            <div className="text-right">
                                <p className="text-sm font-semibold">$3,600.00</p>
                                <p className="text-xs text-gray-400">3.8%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
);
}
