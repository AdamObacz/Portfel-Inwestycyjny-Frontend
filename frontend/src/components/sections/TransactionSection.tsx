export default function TransactionSection() {
    return (
        
        <div className="space-y-6 text-white p-6 rounded-lg font-sans">
            <div className="flex flex-col">
                <h1 className="text-5xl">Moje Transakcje</h1>
                <p>Historia wszystkich transakcji</p>
            </div>
            {/* Wyszukiwarka transakcji */}
            <div className="bg-[#161616] p-4 rounded-lg space-x-1 space-y-6 flex flex-col shadow-gray-500/50 shadow-md">
                <h3 className="text-3xl">Wyszukaj transakcje</h3>
                <input
                    type="text"
                    placeholder="Szukaj..."
                    className="border border-white rounded px-2 py-1 bg-[#272727] text-white"
                />
            </div>
            {/* tabela z historią transakcji */}
            <div className="bg-[#161616] p-4 rounded-lg">
                <h2 className="text-2xl">Historia transakcji</h2>
                <table className="min-w-full border bg-[#161616] p-1">
                    <thead>
                        <tr className="bg-[#161616]">
                            <th className="border border-gray-300 px-4 py-2">Data</th>
                            <th className="border border-gray-300 px-4 py-2">Typ</th>
                            <th className="border border-gray-300 px-4 py-2">Kwota</th>
                            <th className="border border-gray-300 px-4 py-2">Waluta</th>
                            <th className="border border-gray-300 px-4 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Przykładowe dane transakcji */}
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">2024-06-01</td>
                            <td className="border border-gray-300 px-4 py-2">Kupno</td>
                            <td className="border border-gray-300 px-4 py-2">1000.00</td>
                            <td className="border border-gray-300 px-4 py-2">PLN</td>
                            <td className="border border-gray-300 px-4 py-2">Zakończona</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">2024-05-28</td>
                            <td className="border border-gray-300 px-4 py-2">Sprzedaż</td>
                            <td className="border border-gray-300 px-4 py-2">500.00</td>
                            <td className="border border-gray-300 px-4 py-2">USD</td>
                            <td className="border border-gray-300 px-4 py-2">Zakończona</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">2024-05-28</td>
                            <td className="border border-gray-300 px-4 py-2">Sprzedaż</td>
                            <td className="border border-gray-300 px-4 py-2">500.00</td>
                            <td className="border border-gray-300 px-4 py-2">USD</td>
                            <td className="border border-gray-300 px-4 py-2">Zakończona</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">2024-05-28</td>
                            <td className="border border-gray-300 px-4 py-2">Sprzedaż</td>
                            <td className="border border-gray-300 px-4 py-2">500.00</td>
                            <td className="border border-gray-300 px-4 py-2">USD</td>
                            <td className="border border-gray-300 px-4 py-2">Zakończona</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* Podsumowanie transakcji */}
            <div className="flex space-x-10">
                <div className="h-[100px] flex flex-col bg-[#161616] p-4 rounded-lg w-1/3 shadow-red-700/50 shadow-md">
                    <h3 className="text-lg">Razem Kupione</h3>
                    <p className="text-red-700 text-3xl">-2600$</p>
                </div>
                <div className="h-[100px] flex flex-col bg-[#161616] p-4 rounded-lg w-1/3 shadow-blue-700/50 shadow-md">
                    <h3 className="text-lg">Razem Sprzedane</h3>
                    <p className="text-blue-700 text-3xl">+3100$</p>
                </div>
                <div className="h-[100px] flex flex-col bg-[#161616] p-4 rounded-lg w-1/3 shadow-green-400/50 shadow-md">
                    <h3 className="text-lg">Zysk/Strata</h3>
                    <p className="text-green-400 text-3xl">+500$</p>
                </div>
            </div>

        </div>
            
        

    )
}