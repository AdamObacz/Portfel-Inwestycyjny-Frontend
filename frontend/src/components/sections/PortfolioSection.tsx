import { Wallet, CreditCard, TrendingUp } from "lucide-react"

export default function PortfolioSection() {
    return (
        <div>
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
                <div>
                    <h2 className="font-bold text-2xl md:text-3xl mb-2.5">Mój portfel kryptowalut</h2>
                    <p className="w-full text-gray-400 text-sm md:text-base">
                        Przegląd wszystkich Twoich zasobów kryptowalutowych i ich wartości.
                    </p>
                </div>
                <div>
                    <button className="bg-blue-600 px-3 py-2 md:px-4 md:py-2 rounded text-white font-semibold text-xs md:text-sm flex items-center gap-1 md:gap-2 hover:bg-blue-700 transition-colors whitespace-nowrap">
                        <span>+</span>
                        <span>Dodaj kryptowalutę</span>
                    </button>
                </div>
            </div>

            {/* statystyki */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* saldo */}
                <div className="h-40 bg-[#161616] rounded-lg shadow-blue-700 shadow-md">
                    <div className="flex justify-between items-center p-4">
                        <p className="font-semibold">Całkowita wartość portfela</p>
                        <Wallet size={18} color="rgb(29 78 216)" />
                    </div>
                    <div className="w-full p-4">
                        <p className="text-3xl font-bold">$93,850.00</p>
                        <p className="text-gray-400 text-xs">Wycena na dzisiaj</p>
                    </div>
                </div>

                {/* zysk/strata */}
                <div className="h-40 bg-[#161616] rounded-lg shadow-green-400 shadow-md">
                    <div className="flex justify-between items-center p-4">
                        <p className="font-semibold">Zysk/Strata</p>
                        <TrendingUp size={18} color="rgb(74 222 128)" />
                    </div>
                    <div className="w-full p-4">
                        <p className="font-bold text-3xl">+$5,850.00</p>
                        <p className="text-green-400 text-xs">+6.7% (od czasu zakupu)</p>
                    </div>
                </div>

                {/* ilość monet */}
                <div className="h-40 bg-[#161616] rounded-lg shadow-blue-400 shadow-md">
                    <div className="flex justify-between items-center p-4">
                        <p className="font-semibold">Monety w proftelu</p>
                        <CreditCard size={18} color="rgb(96 165 250)" />
                    </div>
                    <div className="w-full p-4">
                        <p className="font-bold text-3xl">6</p>
                        <p className="text-blue-400 text-xs">Różne kryptowaluty</p>
                    </div>
                </div>
            </div>

            {/* Pozycję */}
            <div className="bg-[#161616] p-4 rounded-lg shadow-gray-500/50 shadow-md border border-[#292929]">
                <h2 className="text-2xl mb-4">Twoje zasoby kryptowalutowe</h2>
                <div className="overflow-x-auto px-2">
                    <table className="min-w-[900px] w-full table-auto">
                        <thead>
                            <tr className="text-left text-sm text-gray-400 border-b border-gray-700">
                                <th className="p-4">Kryptowaluta</th>
                                <th className="p-4">Ilość</th>
                                <th className="p-4">Cena średnia</th>
                                <th className="p-4">Cena bieżąca</th>
                                <th className="p-4">Wartość</th>
                                <th className="p-4">Zysk/Strata</th>
                                <th className="p-4">%</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Bitcoin */}
                            <tr className="border-b border-gray-700 hover:bg-[#1b1b1b]">
                                <td className="p-4 align-middle text-left">
                                    <div>
                                        <p className="font-semibold">Bitcoin</p>
                                        <p className="text-gray-400 text-xs">BTC</p>
                                    </div>
                                </td>
                                <td className="p-4 align-middle text-left">0.75</td>
                                <td className="p-4 align-middle text-left">$42,000.00</td>
                                <td className="p-4 align-middle text-left text-gray-300">$45,000.00</td>
                                <td className="p-4 align-middle text-left">$33,750.00</td>
                                <td className="p-4 align-middle text-left"><span className="text-green-400 font-bold">+$2,250.00</span></td>
                                <td className="p-4 align-middle text-left"><span className="inline-block bg-blue-700 border border-[#292929] text-xs font-semibold px-3 py-1 rounded-lg"><TrendingUp className="inline-block w-4 h-4 mr-1" />+7.1%</span></td>
                            </tr>

                            {/* Ethereum */}
                            <tr className="border-b border-gray-700 hover:bg-[#1b1b1b]">
                                <td className="p-4 align-middle text-left">
                                    <div>
                                        <p className="font-semibold">Ethereum</p>
                                        <p className="text-gray-400 text-xs">ETH</p>
                                    </div>
                                </td>
                                <td className="p-4 align-middle text-left">10</td>
                                <td className="p-4 align-middle text-left">$2,300.00</td>
                                <td className="p-4 align-middle text-left text-gray-300">$2,500.00</td>
                                <td className="p-4 align-middle text-left">$25,000.00</td>
                                <td className="p-4 align-middle text-left"><span className="text-green-400 font-bold">+$2,000.00</span></td>
                                <td className="p-4 align-middle text-left"><span className="inline-block bg-blue-700 border border-[#292929] text-xs font-semibold px-3 py-1 rounded-lg"><TrendingUp className="inline-block w-4 h-4 mr-1" />+8.7%</span></td>
                            </tr>

                            {/* Cardano */}
                            <tr className="border-b border-gray-700 hover:bg-[#1b1b1b]">
                                <td className="p-4 align-middle text-left">
                                    <div>
                                        <p className="font-semibold">Cardano</p>
                                        <p className="text-gray-400 text-xs">ADA</p>
                                    </div>
                                </td>
                                <td className="p-4 align-middle text-left">5000</td>
                                <td className="p-4 align-middle text-left">$0.90</td>
                                <td className="p-4 align-middle text-left text-gray-300">$0.95</td>
                                <td className="p-4 align-middle text-left">$4,750.00</td>
                                <td className="p-4 align-middle text-left"><span className="text-green-400 font-bold">+$250.00</span></td>
                                <td className="p-4 align-middle text-left"><span className="inline-block bg-blue-700 border border-[#292929] text-xs font-semibold px-3 py-1 rounded-lg"><TrendingUp className="inline-block w-4 h-4 mr-1" />+5.6%</span></td>
                            </tr>

                            {/* Solana */}
                            <tr className="border-b border-gray-700 hover:bg-[#1b1b1b]">
                                <td className="p-4 align-middle text-left">
                                    <div>
                                        <p className="font-semibold">Solana</p>
                                        <p className="text-gray-400 text-xs">SOL</p>
                                    </div>
                                </td>
                                <td className="p-4 align-middle text-left">20</td>
                                <td className="p-4 align-middle text-left">$170.00</td>
                                <td className="p-4 align-middle text-left text-gray-300">$180.00</td>
                                <td className="p-4 align-middle text-left">$3,600.00</td>
                                <td className="p-4 align-middle text-left"><span className="text-green-400 font-bold">+$200.00</span></td>
                                <td className="p-4 align-middle text-left"><span className="inline-block bg-blue-700 border border-[#292929] text-xs font-semibold px-3 py-1 rounded-lg"><TrendingUp className="inline-block w-4 h-4 mr-1" />+5.9%</span></td>
                            </tr>

                            {/* Ripple */}
                            <tr className="border-b border-gray-700 hover:bg-[#1b1b1b]">
                                <td className="p-4 align-middle text-left">
                                    <div>
                                        <p className="font-semibold">Ripple</p>
                                        <p className="text-gray-400 text-xs">XRP</p>
                                    </div>
                                </td>
                                <td className="p-4 align-middle text-left">10000</td>
                                <td className="p-4 align-middle text-left">$2.40</td>
                                <td className="p-4 align-middle text-left text-gray-300">$2.50</td>
                                <td className="p-4 align-middle text-left">$25,000.00</td>
                                <td className="p-4 align-middle text-left"><span className="text-green-400 font-bold">+$1,000.00</span></td>
                                <td className="p-4 align-middle text-left"><span className="inline-block bg-blue-700 border border-[#292929] text-xs font-semibold px-3 py-1 rounded-lg"><TrendingUp className="inline-block w-4 h-4 mr-1" />+4.2%</span></td>
                            </tr>

                            {/* Polkadot */}
                            <tr className="border-b border-gray-700 hover:bg-[#1b1b1b]">
                                <td className="p-4 align-middle text-left">
                                    <div>
                                        <p className="font-semibold">Polkadot</p>
                                        <p className="text-gray-400 text-xs">DOT</p>
                                    </div>
                                </td>
                                <td className="p-4 align-middle text-left">200</td>
                                <td className="p-4 align-middle text-left">$8.00</td>
                                <td className="p-4 align-middle text-left text-gray-300">$8.75</td>
                                <td className="p-4 align-middle text-left">$1,750.00</td>
                                <td className="p-4 align-middle text-left"><span className="text-green-400 font-bold">+$150.00</span></td>
                                <td className="p-4 align-middle text-left"><span className="inline-block bg-blue-700 border border-[#292929] text-xs font-semibold px-3 py-1 rounded-lg"><TrendingUp className="inline-block w-4 h-4 mr-1" />+9.4%</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Alokacja portfela */}
            <div className="bg-[#161616] p-6 rounded-lg shadow-gray-500/50 shadow-md border border-[#292929] mt-8">
                <h2 className="text-2xl mb-6">Alokacja portfela kryptowalut</h2>
                
                <div className="space-y-6">
                    {/* Bitcoin */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">BTC</span>
                            <span className="text-gray-400">36.0%</span>
                        </div>
                        <div className="w-full bg-[#272727] rounded-lg h-3 overflow-hidden">
                            <div className="bg-blue-600 h-full rounded-lg" style={{width: '36%'}}></div>
                        </div>
                    </div>

                    {/* Ethereum */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">ETH</span>
                            <span className="text-gray-400">26.6%</span>
                        </div>
                        <div className="w-full bg-[#272727] rounded-lg h-3 overflow-hidden">
                            <div className="bg-blue-500 h-full rounded-lg" style={{width: '26.6%'}}></div>
                        </div>
                    </div>

                    {/* Ripple */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">XRP</span>
                            <span className="text-gray-400">26.6%</span>
                        </div>
                        <div className="w-full bg-[#272727] rounded-lg h-3 overflow-hidden">
                            <div className="bg-blue-500 h-full rounded-lg" style={{width: '26.6%'}}></div>
                        </div>
                    </div>

                    {/* Cardano */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">ADA</span>
                            <span className="text-gray-400">5.1%</span>
                        </div>
                        <div className="w-full bg-[#272727] rounded-lg h-3 overflow-hidden">
                            <div className="bg-blue-400 h-full rounded-lg" style={{width: '5.1%'}}></div>
                        </div>
                    </div>

                    {/* Solana */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">SOL</span>
                            <span className="text-gray-400">3.8%</span>
                        </div>
                        <div className="w-full bg-[#272727] rounded-lg h-3 overflow-hidden">
                            <div className="bg-blue-400 h-full rounded-lg" style={{width: '3.8%'}}></div>
                        </div>
                    </div>

                    {/* Polkadot */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">DOT</span>
                            <span className="text-gray-400">1.9%</span>
                        </div>
                        <div className="w-full bg-[#272727] rounded-lg h-3 overflow-hidden">
                            <div className="bg-blue-400 h-full rounded-lg" style={{width: '1.9%'}}></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}