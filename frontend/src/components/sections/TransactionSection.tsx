export default function TransactionSection() {
    return (
        
        <div className="space-y-6 bg-black text-white p-6 rounded-lg font-sans">
            <div className="flex flex-col">
                <h1 className="text-5xl">Moje Transakcje</h1>
                <p>Historia wszystkich transakcji</p>
            </div>
            {/* Wyszukiwarka transakcji */}
            <div className="bg-gray-800 p-4 rounded-lg space-x-1 space-y-6 flex flex-col">
                <h3 className="text-3xl">Wyszukaj transakcje</h3>
                <input
                    type="text"
                    placeholder="Szukaj..."
                    className="border border-white rounded px-2 py-1 bg-gray-700 text-white"
                />
            </div>
            {/* tabela z historią transakcji */}
            <div className="bg-gray-800 p-4 rounded-lg">
                <h2 className="text-2xl">Historia transakcji</h2>
                <table className="min-w-full border bg-gray-800 p-1">
                    <thead>
                        <tr className="bg-gray-800">
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
        </div>
            
        

    )
}