import { TrendingUp } from "lucide-react"

export default function PortfolioSection() {
  return (
    <div>
        {/* Header */}
    <div className="h-[120] flex items-center justify-between mb-8">
        <div>
            <h2 className="font-bold text-3xl mb-2.5">Mój portfel</h2>
            <p className="w-full text-gray-400 text-base">
                Przegląd wszystkich twojich aktywów i inwestycji w jednym miejscu.
            </p>
        </div>
        <div>
            <button className=" bg-blue-700 p-1.5 rounded text-white font-semibold">+ Dodaj Pozycję</button>
        </div>
    </div>

    {/* Szybkie podsumowanie */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

        {/* Całkowita wartość */}
        <div className="h-40 bg-[#161616] rounded-lg items-center p-4 shadow-gray-500 shadow-sm">
            <p className="mb-5">Całkowita wartość</p>
            <p className="text-3xl mb-1 font-semibold">$35,652.50</p>
            <p className="w-full text-gray-400 text-base">Wycena na dziś</p>
        </div>

        {/* Zysk/Strata */}
        <div className="h-40 bg-[#161616] rounded-lg items-center p-4 shadow-gray-500 shadow-sm">
            <p className="mb-5">Zysk/Strata</p>
            <p className="text-3xl mb-1 text-green-400 font-semibold">+485</p>
            <p className="w-full text-gray-400 text-base">Od czasu zakupu</p>
        </div>

        {/* Liczba pozycji */}
        <div className="h-40 bg-[#161616] rounded-lg items-center p-4 shadow-gray-500 shadow-sm">
            <p className="mb-5">Liczba pozycji</p>
            <p className="text-3xl mb-1 font-semibold">5</p>
            <p className="w-full text-gray-400 text-base">Aktywne inwestycje</p>
        </div>
    </div>

    {/* Pozycję */}
    <div className="bg-[#161616] p-4 rounded-lg shadow-gray-500/50 shadow-md">
        <h2 className="text-2xl mb-4">Twoje pozycję</h2>
                <div className="overflow-x-auto px-2">
                    <table className="min-w-[900px] w-full table-auto">
                        <thead>
                            <tr className="text-left text-sm text-gray-400 border-b border-gray-700">
                                <th className="p-3">Kryptowaluta</th>
                                <th className="p-3">Ilość</th>
                                <th className="p-3">Cena średnia</th>
                                <th className="p-3">Cena bieżąca</th>
                                <th className="p-3">Wartość</th>
                                <th className="p-3">Zysk/Strata</th>
                                <th className="p-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Przykładowe dane transakcji */}
                            <tr className="border-b border-gray-700 hover:bg-[#1b1b1b]">
                                <td className="p-4 align-middle text-left">
                                    <div>
                                        <p className="font-semibold">Bitcoin</p>
                                        <p className="text-gray-400 text-xs">BTC</p>
                                    </div>
                                </td>
                                <td className="p-4 align-middle text-left">25</td>
                                <td className="p-4 align-middle text-left">$145.50</td>
                                <td className="p-4 align-middle text-left text-gray-300">$150.00</td>
                                <td className="p-4 align-middle text-left">$3,750.00</td>
                                <td className="p-4 align-middle text-left"><span className="text-green-400 font-bold">+$112.50</span></td>
                                <td className="p-4 align-middle text-left"><span className="inline-block bg-blue-700 border border-[#292929] text-xs font-semibold px-3 py-1 rounded-lg"><TrendingUp className="inline-block w-4 h-4 mr-1" />+3.5%</span></td>
                            </tr>

                            <tr className="border-b border-gray-700 hover:bg-[#1b1b1b]">
                                <td className="p-4 align-middle text-left">
                                    <div>
                                        <p className="font-semibold">Ethereum</p>
                                        <p className="text-gray-400 text-xs">ETH</p>
                                    </div>
                                </td>
                                <td className="p-4 align-middle text-left">25</td>
                                <td className="p-4 align-middle text-left">$145.50</td>
                                <td className="p-4 align-middle text-left text-gray-300">$150.00</td>
                                <td className="p-4 align-middle text-left">$3,750.00</td>
                                <td className="p-4 align-middle text-left"><span className="text-green-400 font-bold">+$2,500.00</span></td>
                                <td className="p-4 align-middle text-left"><span className="inline-block bg-blue-700 border border-[#292929] text-xs font-semibold px-3 py-1 rounded-lg"><TrendingUp className="inline-block w-4 h-4 mr-1" />+3.5%</span></td>
                            </tr>

                            <tr className="border-b border-gray-700 hover:bg-[#1b1b1b]">
                                <td className="p-4 align-middle text-left">
                                    <div>
                                        <p className="font-semibold">Cardano</p>
                                        <p className="text-gray-400 text-xs">ADA</p>
                                    </div>
                                </td>
                                <td className="p-4 align-middle text-left">25</td>
                                <td className="p-4 align-middle text-left">$145.50</td>
                                <td className="p-4 align-middle text-left text-gray-300">$150.00</td>
                                <td className="p-4 align-middle text-left">$3,750.00</td>
                                <td className="p-4 align-middle text-left"><span className="text-green-400 font-bold">+$4,500.00</span></td>
                                <td className="p-4 align-middle text-left"><span className="inline-block bg-blue-700 border border-[#292929] text-xs font-semibold px-3 py-1 rounded-lg"><TrendingUp className="inline-block w-4 h-4 mr-1" />+3.5%</span></td>
                            </tr>

                            <tr className="border-b border-gray-700 hover:bg-[#1b1b1b]">
                                <td className="p-4 align-middle text-left">
                                    <div>
                                        <p className="font-semibold">Solana</p>
                                        <p className="text-gray-400 text-xs">SOL</p>
                                    </div>
                                </td>
                                <td className="p-4 align-middle text-left">25</td>
                                <td className="p-4 align-middle text-left">$145.50</td>
                                <td className="p-4 align-middle text-left text-gray-300">$150.00</td>
                                <td className="p-4 align-middle text-left">$3,750.00</td>
                                <td className="p-4 align-middle text-left"><span className="text-green-400 font-bold">+$5,500.00</span></td>
                                <td className="p-4 align-middle text-left"><span className="inline-block bg-blue-700 border border-[#292929] text-xs font-semibold px-3 py-1 rounded-lg"><TrendingUp className="inline-block w-4 h-4 mr-1" />+3.5%</span></td>
                            </tr>

                            <tr className="border-b border-gray-700 hover:bg-[#1b1b1b]">
                                <td className="p-4 align-middle text-left">
                                    <div>
                                        <p className="font-semibold">Ripple</p>
                                        <p className="text-gray-400 text-xs">XRP</p>
                                    </div>
                                </td>
                                <td className="p-4 align-middle text-left">25</td>
                                <td className="p-4 align-middle text-left">$145.50</td>
                                <td className="p-4 align-middle text-left text-gray-300">$150.00</td>
                                <td className="p-4 align-middle text-left">$3,750.00</td>
                                <td className="p-4 align-middle text-left"><span className="text-green-400 font-bold">+$4,500.00</span></td>
                                <td className="p-4 align-middle text-left"><span className="inline-block bg-blue-700 border border-[#292929] text-xs font-semibold px-3 py-1 rounded-lg"><TrendingUp className="inline-block w-4 h-4 mr-1" />+3.5%</span></td>
                            </tr>

                            <tr className="border-b border-gray-700 hover:bg-[#1b1b1b]">
                                <td className="p-4 align-middle text-left">
                                    <div>
                                        <p className="font-semibold">Polkadot</p>
                                        <p className="text-gray-400 text-xs">DOT</p>
                                    </div>
                                </td>
                                <td className="p-4 align-middle text-left">25</td>
                                <td className="p-4 align-middle text-left">$145.50</td>
                                <td className="p-4 align-middle text-left text-gray-300">$150.00</td>
                                <td className="p-4 align-middle text-left">$3,750.00</td>
                                <td className="p-4 align-middle text-left"><span className="text-green-400 font-bold">+$1,500.00</span></td>
                                <td className="p-4 align-middle text-left"><span className="inline-block bg-blue-700 border border-[#292929] text-xs font-semibold px-3 py-1 rounded-lg"><TrendingUp className="inline-block w-4 h-4 mr-1" />+3.5%</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
    </div>
    
    {/* Alokacja portfela */}
    <div>
        <h2 className="text-2xl mt-8 mb-4">Alokacja portfela</h2>
        <div className="w-full h-64 bg-[#161616] rounded-lg flex items-center justify-center shadow-gray-500 shadow-sm">
            <p className="text-gray-400">[Wykres alokacji portfela - do zaimplementowania]</p>
        </div>

    </div>

    </div>
  );
}