export default function TransactionSection() {
    return (
        
        <div className="space-y-6 text-white p-6 rounded-lg font-sans">
            <div className="flex flex-col">
                <h1 className="text-5xl px-1 py-1">Moje Transakcje</h1>
                <p className="px-2 py-1 text-gray-300">Historia wszystkich twoich transakcji i operacji</p>
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
            <div className="bg-[#161616] p-4 rounded-lg shadow-gray-500/50 shadow-md">
                <h2 className="text-2xl">Historia transakcji</h2>
                <table className="min-w-full bg-[#161616] p-1 scroll-m-3 overflow-x-auto">
                    <thead>
                        <tr className="bg-[#161616] border-b-[1px]">
                            <th className=" px-4 py-2">Inwestycja</th>
                            <th className=" px-4 py-2">Typ</th>
                            <th className=" px-4 py-2">Ilość</th>
                            <th className=" px-4 py-2">Cena</th>
                            <th className=" px-4 py-2">Zysk/Strata</th>
                            <th className=" px-4 py-2">Data/Czas</th>
                            <th className=" px-4 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Przykładowe dane transakcji */}
                        <tr className="border-b-[1px]">
                            <td className=" px-4 py-4"><p className="text-yellow-500 font-semibold">Bitcoin</p></td>
                            <td className=" px-4 py-4 justify-items-center"><p className=" bg-blue-600 rounded-lg font-semibold w-20 text-center">Kupno</p></td>
                            <td className=" px-4 py-4 text-center">10</td>
                            <td className=" px-4 py-4 text-center">$1000.00</td>
                            <td className=" px-4 py-4 text-center"><p className=" text-green-400">+$1000</p></td>
                            <td className=" px-4 py-4 text-center">2024-06-01</td>
                            <td className=" px-4 py-4 justify-items-center"><p className=" bg-blue-600 rounded-lg font-semibold w-24 text-center">Zakończona</p></td>
                        </tr>
                        <tr className="border-b-[1px]">
                            <td className=" px-4 py-4"><p className="text-yellow-500 font-semibold">Bitcoin</p></td>
                            <td className=" px-4 py-4 justify-items-center"><p className=" bg-blue-600 rounded-lg font-semibold w-20 text-center">Kupno</p></td>
                            <td className=" px-4 py-4 text-center">10</td>
                            <td className=" px-4 py-4 text-center">$1000.00</td>
                            <td className=" px-4 py-4 text-center"><p className=" text-green-400">+$1000</p></td>
                            <td className=" px-4 py-4 text-center">2024-06-01</td>
                            <td className=" px-4 py-4 justify-items-center"><p className=" bg-blue-600 rounded-lg font-semibold w-24 text-center">Zakończona</p></td>
                        </tr>
                        <tr className="border-b-[1px]">
                            <td className=" px-4 py-4"><p className="text-yellow-500 font-semibold">Bitcoin</p></td>
                            <td className=" px-4 py-4 justify-items-center"><p className=" bg-blue-600 rounded-lg font-semibold w-20 text-center">Kupno</p></td>
                            <td className=" px-4 py-4 text-center">10</td>
                            <td className=" px-4 py-4 text-center">$1000.00</td>
                            <td className=" px-4 py-4 text-center"><p className=" text-green-400">+$1000</p></td>
                            <td className=" px-4 py-4 text-center">2024-06-01</td>
                            <td className=" px-4 py-4 justify-items-center"><p className=" bg-blue-600 rounded-lg font-semibold w-24 text-center">Zakończona</p></td>
                        </tr>
                        <tr className="border-b-[1px]">
                            <td className=" px-4 py-4"><p className="text-yellow-500 font-semibold">Bitcoin</p></td>
                            <td className=" px-4 py-4 justify-items-center"><p className=" bg-blue-600 rounded-lg font-semibold w-20 text-center">Kupno</p></td>
                            <td className=" px-4 py-4 text-center">10</td>
                            <td className=" px-4 py-4 text-center">$1000.00</td>
                            <td className=" px-4 py-4 text-center"><p className=" text-green-400">+$1000</p></td>
                            <td className=" px-4 py-4 text-center">2024-06-01</td>
                            <td className=" px-4 py-4 justify-items-center"><p className=" bg-blue-600 rounded-lg font-semibold w-24 text-center">Zakończona</p></td>
                        </tr>
                        <tr className="border-b-[1px]">
                            <td className=" px-4 py-4"><p className="text-yellow-500 font-semibold">Bitcoin</p></td>
                            <td className=" px-4 py-4 justify-items-center"><p className=" bg-blue-600 rounded-lg font-semibold w-20 text-center">Kupno</p></td>
                            <td className=" px-4 py-4 text-center">10</td>
                            <td className=" px-4 py-4 text-center">$1000.00</td>
                            <td className=" px-4 py-4 text-center"><p className=" text-green-400">+$1000</p></td>
                            <td className=" px-4 py-4 text-center">2024-06-01</td>
                            <td className=" px-4 py-4 justify-items-center"><p className=" bg-blue-600 rounded-lg font-semibold w-24 text-center">Zakończona</p></td>
                        </tr>
                        <tr className="border-b-[1px]">
                            <td className=" px-4 py-4"><p className="text-yellow-500 font-semibold">Bitcoin</p></td>
                            <td className=" px-4 py-4 justify-items-center"><p className=" bg-blue-600 rounded-lg font-semibold w-20 text-center">Kupno</p></td>
                            <td className=" px-4 py-4 text-center">10</td>
                            <td className=" px-4 py-4 text-center">$1000.00</td>
                            <td className=" px-4 py-4 text-center"><p className=" text-green-400">+$1000</p></td>
                            <td className=" px-4 py-4 text-center">2024-06-01</td>
                            <td className=" px-4 py-4 justify-items-center"><p className=" bg-blue-600 rounded-lg font-semibold w-24 text-center">Zakończona</p></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* Podsumowanie transakcji */}
            <div className="flex space-x-10">
                <div className="h-[100px] flex flex-col bg-[#161616] p-4 rounded-lg w-1/3 shadow-red-700/50 shadow-md">
                    <h3 className="text-lg font-semibold">Razem Kupione</h3>
                    <p className="text-red-700 text-3xl font-bold">-2600$</p>
                </div>
                <div className="h-[100px] flex flex-col bg-[#161616] p-4 rounded-lg w-1/3 shadow-blue-700/50 shadow-md">
                    <h3 className="text-lg font-semibold">Razem Sprzedane</h3>
                    <p className="text-blue-700 text-3xl font-bold">+3100$</p>
                </div>
                <div className="h-[100px] flex flex-col bg-[#161616] p-4 rounded-lg w-1/3 shadow-green-400/50 shadow-md">
                    <h3 className="text-lg font-semibold">Razem dywidenda</h3>
                    <p className="text-green-400 text-3xl font-bold">+500$</p>
                </div>
            </div>

        </div>
            
        

    )
}