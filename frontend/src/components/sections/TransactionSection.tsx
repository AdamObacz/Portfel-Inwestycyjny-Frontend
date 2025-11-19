export default function TransactionSection() {
    return (

        <div className="space-y-6">
            <div className="flex flex-col">
                <h1 className="text-3xl font-bold mb-2.5">Historia transakcji kryptowalut</h1>
                <p className="text-gray-400">Wszystkie Twoje transakcje kupna, sprzedaży i wymiany kryptowalut.</p>
            </div>

            {/* Wyszukiwarka transakcji */}
            <div className="bg-[#161616] p-4 rounded-lg space-y-4 flex flex-col shadow-gray-500 shadow-sm">
                <h3 className="text-lg font-semibold p-2">Wyszukaj transakcje</h3>
                <input
                    type="text"
                    placeholder="Wyszukaj po nazwie kryptowaluty, symbolu lub dacie..."
                    className="border-gray-500 border rounded-lg px-2 py-1 bg-[#272727] focus:outline-none focus:ring-2 focus:ring-blue-700 w-full"
                />
            </div>

            {/* tabela z historią transakcji */}
            <div className="bg-[#161616] p-4 rounded-lg shadow-gray-500/50 shadow-md">
                <h2 className="text-2xl mb-4">Historia transakcji</h2>
                <div className="overflow-x-auto px-2">
                    <table className="min-w-[900px] w-full table-auto">
                        <thead>
                            <tr className="text-left text-sm text-gray-400 border-b border-gray-700">
                                <th className="p-3">Kryptowaluta</th>
                                <th className="p-3">Typ</th>
                                <th className="p-3">Ilość</th>
                                <th className="p-3">Cena jednostkowa</th>
                                <th className="p-3">Razem</th>
                                <th className="p-3">Data / Czas</th>
                                <th className="p-3">Status</th>
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
                                <td className="p-4 align-middle text-left">
                                    <span className="inline-block bg-blue-700 border border-[#292929] text-xs font-semibold px-3 py-1 rounded-lg">Kupno</span>
                                </td>
                                <td className="p-4 align-middle text-left">0.75</td>
                                <td className="p-4 align-middle text-left text-gray-300">$42,000.00</td>
                                <td className="p-4 align-middle text-left"><span className="text-red-700 font-bold">-$31,500.00</span></td>
                                <td className="p-4 align-middle text-left">
                                    <p className="text-gray-400">2025-11-13</p>
                                    <p className="text-gray-400 text-sm">14:32</p>
                                </td>
                                <td className="p-4 align-middle text-left"><span className="inline-block bg-blue-700 border border-[#292929] text-xs font-semibold px-3 py-1 rounded-lg">Zrealizowana</span></td>
                            </tr>

                            <tr className="border-b border-gray-700 hover:bg-[#1b1b1b]">
                                <td className="p-4 align-middle text-left">
                                    <div>
                                        <p className="font-semibold">Ethereum</p>
                                        <p className="text-gray-400 text-xs">ETH</p>
                                    </div>
                                </td>
                                <td className="p-4 align-middle text-left">
                                    <span className="inline-block bg-[#1b1b1b] border border-[#292929] text-xs font-semibold px-3 py-1 rounded-lg">Sprzedaż</span>
                                </td>
                                <td className="p-4 align-middle text-left">5</td>
                                <td className="p-4 align-middle text-left text-gray-300">$2,500.00</td>
                                <td className="p-4 align-middle text-left"><span className="text-green-400 font-bold">+$12,500.00</span></td>
                                <td className="p-4 align-middle text-left">
                                    <p className="text-gray-400">2025-11-12</p>
                                    <p className="text-gray-400 text-sm">09:15</p>
                                </td>
                                <td className="p-4 align-middle text-left"><span className="inline-block bg-blue-700 border border-[#292929] text-xs font-semibold px-3 py-1 rounded-lg">Zrealizowana</span></td>
                            </tr>

                            <tr className="border-b border-gray-700 hover:bg-[#1b1b1b]">
                                <td className="p-4 align-middle text-left">
                                    <div>
                                        <p className="font-semibold">Cardano</p>
                                        <p className="text-gray-400 text-xs">ADA</p>
                                    </div>
                                </td>
                                <td className="p-4 align-middle text-left">
                                    <span className="inline-block bg-blue-700 border border-[#292929] text-xs font-semibold px-3 py-1 rounded-lg">Kupno</span>
                                </td>
                                <td className="p-4 align-middle text-left">5000</td>
                                <td className="p-4 align-middle text-left text-gray-300">$0.90</td>
                                <td className="p-4 align-middle text-left"><span className="text-red-700 font-bold">-$4,500.00</span></td>
                                <td className="p-4 align-middle text-left">
                                    <p className="text-gray-400">2025-11-11</p>
                                    <p className="text-gray-400 text-sm">16:45</p>
                                </td>
                                <td className="p-4 align-middle text-left"><span className="inline-block bg-blue-700 border border-[#292929] text-xs font-semibold px-3 py-1 rounded-lg">Zrealizowana</span></td>
                            </tr>

                            <tr className="border-b border-gray-700 hover:bg-[#1b1b1b]">
                                <td className="p-4 align-middle text-left">
                                    <div>
                                        <p className="font-semibold">Solana</p>
                                        <p className="text-gray-400 text-xs">SOL</p>
                                    </div>
                                </td>
                                <td className="p-4 align-middle text-left">
                                    <span className="inline-block bg-blue-700 border border-[#292929] text-xs font-semibold px-3 py-1 rounded-lg">Kupno</span>
                                </td>
                                <td className="p-4 align-middle text-left">20</td>
                                <td className="p-4 align-middle text-left text-gray-300">$170.00</td>
                                <td className="p-4 align-middle text-left"><span className="text-red-700 font-bold">-$3,400.00</span></td>
                                <td className="p-4 align-middle text-left">
                                    <p className="text-gray-400">2025-11-10</p>
                                    <p className="text-gray-400 text-sm">08:00</p>
                                </td>
                                <td className="p-4 align-middle text-left"><span className="inline-block bg-blue-700 border border-[#292929] text-xs font-semibold px-3 py-1 rounded-lg">Zrealizowana</span></td>
                            </tr>

                            <tr className="border-b border-gray-700 hover:bg-[#1b1b1b]">
                                <td className="p-4 align-middle text-left">
                                    <div>
                                        <p className="font-semibold">Ripple</p>
                                        <p className="text-gray-400 text-xs">XRP</p>
                                    </div>
                                </td>
                                <td className="p-4 align-middle text-left">
                                    <span className="inline-block bg-blue-700 border border-[#292929] text-xs font-semibold px-3 py-1 rounded-lg">Kupno</span>
                                </td>
                                <td className="p-4 align-middle text-left">10000</td>
                                <td className="p-4 align-middle text-left text-gray-300">$2.40</td>
                                <td className="p-4 align-middle text-left"><span className="text-red-700 font-bold">-$24,000.00</span></td>
                                <td className="p-4 align-middle text-left">
                                    <p className="text-gray-400">2025-11-09</p>
                                    <p className="text-gray-400 text-sm">11:20</p>
                                </td>
                                <td className="p-4 align-middle text-left"><span className="inline-block bg-blue-700 border border-[#292929] text-xs font-semibold px-3 py-1 rounded-lg">Zrealizowana</span></td>
                            </tr>

                            <tr className="border-b border-gray-700 hover:bg-[#1b1b1b]">
                                <td className="p-4 align-middle text-left">
                                    <div>
                                        <p className="font-semibold">Polkadot</p>
                                        <p className="text-gray-400 text-xs">DOT</p>
                                    </div>
                                </td>
                                <td className="p-4 align-middle text-left">
                                    <span className="inline-block bg-blue-700 border border-[#292929] text-xs font-semibold px-3 py-1 rounded-lg">Kupno</span>
                                </td>
                                <td className="p-4 align-middle text-left">200</td>
                                <td className="p-4 align-middle text-left text-gray-300">$8.00</td>
                                <td className="p-4 align-middle text-left"><span className="text-red-700 font-bold">-$1,600.00</span></td>
                                <td className="p-4 align-middle text-left">
                                    <p className="text-gray-400">2025-11-08</p>
                                    <p className="text-gray-400 text-sm">13:50</p>
                                </td>
                                <td className="p-4 align-middle text-left"><span className="inline-block bg-[#1b1b1b] border border-[#292929] text-xs font-semibold px-3 py-1 rounded-lg">Oczekująca</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Podsumowanie transakcji */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* wydatki */}
                <div className="h-32 bg-[#161616] rounded-lg shadow-gray-500 shadow-sm">
                    <div className="flex justify-between items-center p-4">
                        <p className="font-semibold">Razem wydane na kupno</p>
                    </div>
                    <div className="w-full p-4">
                        <p className="text-3xl font-bold text-red-700">-$64,500.00</p>
                    </div>
                </div>

                {/* zysk/strata */}
                <div className="h-32 bg-[#161616] rounded-lg shadow-gray-500 shadow-sm">
                    <div className="flex justify-between items-center p-4">
                        <p className="font-semibold">Razem uzyskane ze sprzedaży</p>
                    </div>
                    <div className="w-full p-4">
                        <p className="font-bold text-3xl text-green-400">+$12,500.00</p>
                    </div>
                </div>

                {/* ilość transakcji */}
                <div className="h-32 bg-[#161616] rounded-lg shadow-gray-500 shadow-sm">
                    <div className="flex justify-between items-center p-4">
                        <p className="font-semibold">Liczba transakcji</p>
                    </div>
                    <div className="w-full p-4">
                        <p className="font-bold text-3xl text-blue-700">6</p>
                    </div>
                </div>
            </div>

        </div>



    )
}