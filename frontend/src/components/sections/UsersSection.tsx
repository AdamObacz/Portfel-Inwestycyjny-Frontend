export default function UsersSection() {
  return (
    <div>
          {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
                <div>
                    <h2 className="font-bold text-2xl md:text-3xl">Użytkownicy</h2>
                    <p className="text-gray-400 text-sm md:text-base">Zarządzaj użytkownikami</p>
                </div>
                <div>
                    <button className="bg-blue-600 px-3 py-2 md:px-4 md:py-2 rounded text-white font-semibold text-xs md:text-sm flex items-center gap-1 md:gap-2 hover:bg-blue-700 transition-colors whitespace-nowrap">
                        <span>+</span>
                        <span>Dodaj użytkownika</span>
                    </button>
                </div>
            </div>

            <div className="bg-[#161616] p-4 rounded-lg shadow-gray-500 shadow-sm">
                <h2 className="text-2xl mb-4">Wszyscy użytkownicy</h2>
                <div className="overflow-x-auto px-2">
                    <table className="min-w-[900px] w-full table-auto">
                        <thead>
                            <tr className="text-left text-sm text-gray-400 border-b border-gray-700">
                                <th className="p-3">Imię</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">Rola</th>
                                <th className="p-3">Status</th>
                                <th className="p-3">Data dołączenia</th>
                                <th className="p-3">Akcje</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Przykładowi Użytkownicy */}
                            <tr className="border-b border-gray-700 hover:bg-[#1b1b1b]">
                                <td className="p-4 align-middle text-left">
                                    <p className="font-semibold">Jan Kowalski</p>
                                </td>
                                <td className="p-4 align-middle text-left">
                                    <p className="text-gray-400 text-sm">jan.kowalski@example.com</p>
                                </td>
                                <td className="p-4 align-middle text-left">
                                    <span className="inline-block bg-blue-700 border border-[#292929] text-xs font-semibold px-3 py-1 rounded-lg">Administrator</span>
                                </td>
                                <td className="p-4 align-middle text-left text-gray-300">
                                    <span className="inline-block bg-blue-700 border border-[#292929] text-xs font-semibold px-3 py-1 rounded-lg">Aktywny</span>
                                </td>
                                <td className="p-4 align-middle text-left">
                                    <p className="text-gray-400 text-sm"> 2023-06-15</p>
                                </td>
                                <td className="p-4 align-middle text-left">
                                    <p className="text-gray-400">...</p>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-700 hover:bg-[#1b1b1b]">
                                <td className="p-4 align-middle text-left">
                                    <p className="font-semibold">Adam Nowak</p>
                                </td>
                                <td className="p-4 align-middle text-left">
                                    <p className="text-gray-400 text-sm">adam.nowak@example.com</p>
                                </td>
                                <td className="p-4 align-middle text-left">
                                    <span className="inline-block bg-gray-800 border border-[#292929] text-xs px-3 py-1 rounded-lg">Użytkownik</span>
                                </td>
                                <td className="p-4 align-middle text-left text-gray-300">
                                    <span className="inline-block bg-blue-700 border border-[#292929] text-xs font-semibold px-3 py-1 rounded-lg">Aktywny</span>
                                </td>
                                <td className="p-4 align-middle text-left">
                                    <p className="text-gray-400 text-sm"> 2024-07-21</p>
                                </td>
                                <td className="p-4 align-middle text-left">
                                    <p className="text-gray-400">...</p>
                                </td>
                            </tr>
                              <tr className="border-b border-gray-700 hover:bg-[#1b1b1b]">
                                <td className="p-4 align-middle text-left">
                                    <p className="font-semibold">Jan Mleczko</p>
                                </td>
                                <td className="p-4 align-middle text-left">
                                    <p className="text-gray-400 text-sm">jan.mleczko@example.com</p>
                                </td>
                                <td className="p-4 align-middle text-left">
                                    <span className="inline-block bg-gray-800 border border-[#292929] text-xs px-3 py-1 rounded-lg">Użytkownik</span>
                                </td>
                                <td className="p-4 align-middle text-left text-gray-300">
                                    <span className="inline-block bg-gray-800 border border-[#292929] text-xs  px-3 py-1 rounded-lg">Nieaktywny</span>
                                </td>
                                <td className="p-4 align-middle text-left">
                                    <p className="text-gray-400 text-sm"> 2024-02-11</p>
                                </td>
                                <td className="p-4 align-middle text-left">
                                    <p className="text-gray-400">...</p>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-700 hover:bg-[#1b1b1b]">
                                <td className="p-4 align-middle text-left">
                                    <p className="font-semibold">Kacper Lewandowski</p>
                                </td>
                                <td className="p-4 align-middle text-left">
                                    <p className="text-gray-400 text-sm">kacper.lewandowski@example.com</p>
                                </td>
                                <td className="p-4 align-middle text-left">
                                    <span className="inline-block bg-gray-800 border border-[#292929] text-xs px-3 py-1 rounded-lg">Użytkownik</span>
                                </td>
                                <td className="p-4 align-middle text-left text-gray-300">
                                    <span className="inline-block bg-blue-700 border border-[#292929] text-xs font-semibold px-3 py-1 rounded-lg">Aktywny</span>
                                </td>
                                <td className="p-4 align-middle text-left">
                                    <p className="text-gray-400 text-sm"> 2024-05-01</p>
                                </td>
                                <td className="p-4 align-middle text-left">
                                    <p className="text-gray-400">...</p>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-700 hover:bg-[#1b1b1b]">
                                <td className="p-4 align-middle text-left">
                                    <p className="font-semibold">Maciej Mucha</p>
                                </td>
                                <td className="p-4 align-middle text-left">
                                    <p className="text-gray-400 text-sm">maciej.mucha@example.com</p>
                                </td>
                                <td className="p-4 align-middle text-left">
                                    <span className="inline-block bg-gray-800 border border-[#292929] text-xs px-3 py-1 rounded-lg">Użytkownik</span>
                                </td>
                                <td className="p-4 align-middle text-left text-gray-300">
                                    <span className="inline-block bg-gray-800 border border-[#292929] text-xs  px-3 py-1 rounded-lg">Nieaktywny</span>
                                </td>
                                <td className="p-4 align-middle text-left">
                                    <p className="text-gray-400 text-sm"> 2024-04-15</p>
                                </td>
                                <td className="p-4 align-middle text-left">
                                    <p className="text-gray-400">...</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                {/* Wszyscy użytkownicy */}
                <div className="h-32 bg-[#161616] rounded-lg shadow-gray-500 shadow-sm">
                    <div className="flex justify-between items-center p-4">
                        <p className="text-gray-400">Wszyscy użytkownicy</p>
                    </div>
                    <div className="w-full p-4">
                        <p className="text-2xl font-bold">5</p>
                    </div>
                </div>

                {/* Aktywni użytkownicy */}
                <div className="h-32 bg-[#161616] rounded-lg shadow-gray-500 shadow-sm">
                    <div className="flex justify-between items-center p-4">
                        <p className="text-gray-400">Aktywni użytkownicy</p>
                    </div>
                    <div className="w-full p-4">
                        <p className="font-bold text-2xl">4</p>
                    </div>
                </div>

                {/* Administratorzy */}
                <div className="h-32 bg-[#161616] rounded-lg shadow-gray-500 shadow-sm">
                    <div className="flex justify-between items-center p-4">
                        <p className="text-gray-400">Administratorzy</p>
                    </div>
                    <div className="w-full p-4">
                        <p className="font-bold text-2xl">1</p>
                    </div>
                </div>
            </div>
    </div>
  );
}