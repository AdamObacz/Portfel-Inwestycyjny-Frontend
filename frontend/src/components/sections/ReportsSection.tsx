import { Download, FileChartColumn, FileText, AlertCircle } from "lucide-react";

export default function ReportsSection() {
    return (
        <>
            {/* Header */}
            <div className="space-y-2 mb-6 md:mb-8">
                <h2 className="font-bold text-2xl md:text-3xl">Raporty i dokumenty</h2>
                <p className="text-gray-400 text-sm md:text-base">Dostęp do raportów, dokumentów podatkowych i historii zmian portfela.</p>
            </div>

            {/* Raporty okresowe */}
            <div className="bg-[#161616] rounded-lg p-4 md:p-6 shadow-gray-500 shadow-sm">
                <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">Raporty okresowe</h3>

                <div className="space-y-3 md:space-y-4">

                    {/* Raport roczny 2025*/}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between p-3 md:p-4 border border-[#292929] rounded-lg hover:border-[#404040] hover:bg-[#1a1a1a] transition-all gap-3 md:gap-0">
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-blue-500/20 rounded flex-shrink-0">
                                <FileChartColumn size={24} color="rgb(59 130 246)" />
                            </div>
                            <div>
                                <p className="font-semibold text-sm">Raport roczny 2025</p>
                                <p className="text-gray-400 text-xs">Wygenerowany 19.11.2025</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 md:gap-6">
                            <span className="text-xs bg-[#272727] rounded-full px-3 py-1">Dostępny</span>
                            <button className="flex items-center gap-2 text-gray-300 border border-[#292929] px-3 py-1 rounded-lg hover:border-[#404040] hover:bg-[#272727] transition-all">
                                <Download size={18} />
                                <span className="text-sm font-semibold">Pobierz</span>
                            </button>
                        </div>
                    </div>

                    {/* Raport Q3 2024 */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between p-3 md:p-4 border border-[#292929] rounded-lg hover:border-[#404040] hover:bg-[#1a1a1a] transition-all gap-3 md:gap-0">
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-purple-500/20 rounded flex-shrink-0">
                                <FileChartColumn size={24} color="rgb(168 85 247)" />
                            </div>
                            <div>
                                <p className="font-semibold text-sm">Raport za Q3 2025</p>
                                <p className="text-gray-400 text-xs">Wygenerowany 01.10.2025</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 md:gap-6">
                            <span className="text-xs bg-[#272727] rounded-full px-3 py-1">Dostępny</span>
                            <button className="flex items-center gap-2 text-gray-300 border border-[#292929] px-3 py-1 rounded-lg hover:border-[#404040] hover:bg-[#272727] transition-all">
                                <Download size={18} />
                                <span className="text-sm font-semibold">Pobierz</span>
                            </button>
                        </div>
                    </div>

                    {/* Raport Q2 2024 */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between p-3 md:p-4 border border-[#292929] rounded-lg hover:border-[#404040] hover:bg-[#1a1a1a] transition-all gap-3 md:gap-0">
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-pink-500/20 rounded flex-shrink-0">
                                <FileChartColumn size={24} color="rgb(236 72 153)" />
                            </div>
                            <div>
                                <p className="font-semibold text-sm">Raport za Q2 2025</p>
                                <p className="text-gray-400 text-xs">Wygenerowany 01.07.2025</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 md:gap-6">
                            <span className="text-xs bg-[#272727] rounded-full px-3 py-1">Dostępny</span>
                            <button className="flex items-center gap-2 text-gray-300 border border-[#292929] px-3 py-1 rounded-lg hover:border-[#404040] hover:bg-[#272727] transition-all">
                                <Download size={18} />
                                <span className="text-sm font-semibold">Pobierz</span>
                            </button>
                        </div>
                    </div>

                    {/* Raport Q1 2024 */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between p-3 md:p-4 border border-[#292929] rounded-lg hover:border-[#404040] hover:bg-[#1a1a1a] transition-all gap-3 md:gap-0">
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-blue-500/20 rounded flex-shrink-0">
                                <FileChartColumn size={24} color="rgb(59 130 246)" />
                            </div>
                            <div>
                                <p className="font-semibold text-sm">Raport za Q1 2025</p>
                                <p className="text-gray-400 text-xs">Wygenerowany 01.04.2025</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 md:gap-6">
                            <span className="text-xs bg-[#272727] rounded-full px-3 py-1">Dostępny</span>
                            <button className="flex items-center gap-2 text-gray-300 border border-[#292929] px-3 py-1 rounded-lg hover:border-[#404040] hover:bg-[#272727] transition-all">
                                <Download size={18} />
                                <span className="text-sm font-semibold">Pobierz</span>
                            </button>
                        </div>
                    </div>

                    {/* Raport za grudzień 2024 */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between p-3 md:p-4 border border-[#292929] rounded-lg hover:border-[#404040] hover:bg-[#1a1a1a] transition-all gap-3 md:gap-0">
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-orange-500/20 rounded flex-shrink-0">
                                <FileChartColumn size={24} color="rgb(249 115 22)" />
                            </div>
                            <div>
                                <p className="font-semibold text-sm">Raport za grudzień 2024</p>
                                <p className="text-gray-400 text-xs">Wygenerowany 01.12.2024</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 md:gap-6">
                            <span className="text-xs bg-[#272727] rounded-full px-3 py-1">Niedostępny</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* Raporty podatkowe */}
            <div className="bg-[#161616] rounded-lg p-4 md:p-6 shadow-gray-500 shadow-sm mt-6">
                <h3 className="text-base md:text-lg font-semibold mb-4">Raporty podatkowe</h3>

                {/* Podsumowanie podatkowe */}
                <div className="p-4 border border-[#292929] rounded-lg mb-4 flex flex-col md:flex-row md:items-start gap-3 md:gap-6">
                    <div className="flex items-start md:items-center gap-3">
                        <div className="p-2 bg-amber-600/10 rounded-full flex-shrink-0">
                            <AlertCircle size={20} color="rgb(245 158 11)" />
                        </div>
                        <div>
                            <p className="font-semibold text-sm">Podsumowanie podatkowe 2025</p>
                            <p className="text-gray-400 text-xs mt-1">Przychody ze sprzedaży: +$12,500.00 | Zyski kapitałowe: +$5,850.00 | Przychody ze stakingu: $0.00</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-3">
                    {/* PIT-38 */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between p-3 md:p-4 border border-[#292929] rounded-lg hover:border-[#404040] hover:bg-[#1a1a1a] transition-all gap-3 md:gap-0">
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-gray-700/20 rounded flex-shrink-0">
                                <FileText size={20} color="rgb(148 163 184)" />
                            </div>
                            <div>
                                <p className="font-semibold text-sm">Raport PIT-38 (Zyski z kryptowalut)</p>
                                <p className="text-gray-400 text-xs">Formularz podatkowy</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 md:gap-6">
                            <span className="text-xs bg-[#272727] rounded-full px-3 py-1">Dostępny</span>
                            <button className="flex items-center gap-2 text-gray-300 border border-[#292929] px-3 py-1 rounded-lg hover:border-[#404040] hover:bg-[#272727] transition-all">
                                <Download size={16} />
                            </button>
                        </div>
                    </div>

                    {/* 1099-B */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between p-3 md:p-4 border border-[#292929] rounded-lg hover:border-[#404040] hover:bg-[#1a1a1a] transition-all gap-3 md:gap-0">
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-gray-700/20 rounded flex-shrink-0">
                                <FileText size={20} color="rgb(148 163 184)" />
                            </div>
                            <div>
                                <p className="font-semibold text-sm">Raport 1099-B (Sprzedaż papierów wartościowych)</p>
                                <p className="text-gray-400 text-xs">US Tax Form</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 md:gap-6">
                            <span className="text-xs bg-[#272727] rounded-full px-3 py-1">Niedostępny</span>
                        </div>
                    </div>

                    {/* GDPR */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between p-3 md:p-4 border border-[#292929] rounded-lg hover:border-[#404040] hover:bg-[#1a1a1a] transition-all gap-3 md:gap-0">
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-gray-700/20 rounded flex-shrink-0">
                                <FileText size={20} color="rgb(148 163 184)" />
                            </div>
                            <div>
                                <p className="font-semibold text-sm">Raport GDPR (Eksport danych)</p>
                                <p className="text-gray-400 text-xs">Dane osobowe</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 md:gap-6">
                            <span className="text-xs bg-[#272727] rounded-full px-3 py-1">Dostępny</span>
                            <button className="flex items-center gap-2 text-gray-300 border border-[#292929] px-3 py-1 rounded-lg hover:border-[#404040] hover:bg-[#272727] transition-all">
                                <Download size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Transakcje CSV */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between p-3 md:p-4 border border-[#292929] rounded-lg hover:border-[#404040] hover:bg-[#1a1a1a] transition-all gap-3 md:gap-0">
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-gray-700/20 rounded flex-shrink-0">
                                <FileText size={20} color="rgb(148 163 184)" />
                            </div>
                            <div>
                                <p className="font-semibold text-sm">Raport transakcji (CSV)</p>
                                <p className="text-gray-400 text-xs">Plik danych</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 md:gap-6">
                            <span className="text-xs bg-[#272727] rounded-full px-3 py-1">Dostępny</span>
                            <button className="flex items-center gap-2 text-gray-300 border border-[#292929] px-3 py-1 rounded-lg hover:border-[#404040] hover:bg-[#272727] transition-all">
                                <Download size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Historia zmian wartości portfela */}
            <div className="bg-[#161616] rounded-lg p-4 md:p-6 shadow-gray-500 shadow-sm mt-6">
                <h3 className="text-base md:text-lg font-semibold mb-4">Historia zmian wartości portfela</h3>

                <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border border-[#292929] rounded-lg">
                        <div>
                            <p className="font-semibold text-sm">19.11.2025</p>
                            <p className="text-gray-400 text-xs">Bieżąca wartość</p>
                        </div>
                        <div className="text-right">
                            <p className="font-semibold text-sm">$93,850.00</p>
                            <p className="text-sm text-green-400">+$5,850.00</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between p-3 border border-[#292929] rounded-lg">
                        <div>
                            <p className="font-semibold text-sm">18.11.2025</p>
                            <p className="text-gray-400 text-xs">Spadek</p>
                        </div>
                        <div className="text-right">
                            <p className="font-semibold text-sm">$92,100.00</p>
                            <p className="text-sm text-red-500">-$1,750.00</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between p-3 border border-[#292929] rounded-lg">
                        <div>
                            <p className="font-semibold text-sm">17.11.2025</p>
                            <p className="text-gray-400 text-xs">Wzrost</p>
                        </div>
                        <div className="text-right">
                            <p className="font-semibold text-sm">$93,850.00</p>
                            <p className="text-sm text-green-400">+$1,750.00</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between p-3 border border-[#292929] rounded-lg">
                        <div>
                            <p className="font-semibold text-sm">16.11.2025</p>
                            <p className="text-gray-400 text-xs">Spadek</p>
                        </div>
                        <div className="text-right">
                            <p className="font-semibold text-sm">$92,100.00</p>
                            <p className="text-sm text-red-500">-$2,500.00</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between p-3 border border-[#292929] rounded-lg">
                        <div>
                            <p className="font-semibold text-sm">15.11.2025</p>
                            <p className="text-gray-400 text-xs">Wzrost</p>
                        </div>
                        <div className="text-right">
                            <p className="font-semibold text-sm">$94,600.00</p>
                            <p className="text-sm text-green-400">+$1,200.00</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between p-3 border border-[#292929] rounded-lg">
                        <div>
                            <p className="font-semibold text-sm">14.11.2025</p>
                            <p className="text-gray-400 text-xs">Spadek</p>
                        </div>
                        <div className="text-right">
                            <p className="font-semibold text-sm">$93,400.00</p>
                            <p className="text-sm text-red-500">-$800.00</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between p-3 border border-[#292929] rounded-lg">
                        <div>
                            <p className="font-semibold text-sm">13.11.2025</p>
                            <p className="text-gray-400 text-xs">Wzrost</p>
                        </div>
                        <div className="text-right">
                            <p className="font-semibold text-sm">$94,200.00</p>
                            <p className="text-sm text-green-400">+$500.00</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Roczna analiza wydatków */}
            <div className="bg-[#161616] rounded-lg p-4 md:p-6 shadow-gray-500 shadow-sm mt-6">
                <h3 className="text-base md:text-lg font-semibold mb-4">Roczna analiza wydatków</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border border-[#292929] rounded-lg">
                        <p className="text-gray-400 text-sm">Całkowite wydatki na kupno</p>
                        <p className="font-bold text-2xl md:text-3xl mt-2">$88,000.00</p>
                        <p className="text-gray-400 text-xs mt-1">6 transakcji</p>
                    </div>

                    <div className="p-4 border border-[#292929] rounded-lg">
                        <p className="text-gray-400 text-sm">Przychody ze sprzedaży</p>
                        <p className="font-bold text-2xl md:text-3xl mt-2 text-green-400">$12,500.00</p>
                        <p className="text-gray-400 text-xs mt-1">1 transakcja</p>
                    </div>

                    <div className="p-4 border border-[#292929] rounded-lg">
                        <p className="text-gray-400 text-sm">Opłaty transakcyjne</p>
                        <p className="font-bold text-2xl md:text-3xl mt-2">$0.00</p>
                        <p className="text-gray-400 text-xs mt-1">Brak danych</p>
                    </div>

                    <div className="p-4 border border-[#292929] rounded-lg">
                        <p className="text-gray-400 text-sm">Zysk netto</p>
                        <p className="font-bold text-2xl md:text-3xl mt-2 text-green-400">+$5,850.00</p>
                        <p className="text-green-400 text-xs mt-1">+6.7% zwrot</p>
                    </div>
                </div>
            </div>

            {/* Porównanie wydajności w czasie */}
            <div className="bg-[#161616] rounded-lg p-4 md:p-6 shadow-gray-500 shadow-sm mt-6">
                <h3 className="text-base md:text-lg font-semibold mb-4">Porównanie wydajności w czasie</h3>

                <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 border border-[#292929] rounded-lg">
                        <div>
                            <p className="font-semibold text-sm">Ostatni tydzień</p>
                            <p className="text-gray-400 text-xs">Inwestycja: $88,000.00</p>
                        </div>
                        <div className="text-green-400 font-semibold">+2.1%</div>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-[#292929] rounded-lg">
                        <div>
                            <p className="font-semibold text-sm">Ostatni miesiąc</p>
                            <p className="text-gray-400 text-xs">Inwestycja: $88,000.00</p>
                        </div>
                        <div className="text-green-400 font-semibold">+3.5%</div>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-[#292929] rounded-lg">
                        <div>
                            <p className="font-semibold text-sm">Ostatnie 3 miesiące</p>
                            <p className="text-gray-400 text-xs">Inwestycja: $88,000.00</p>
                        </div>
                        <div className="text-green-400 font-semibold">+5.2%</div>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-[#292929] rounded-lg">
                        <div>
                            <p className="font-semibold text-sm">Ostatnie 6 miesięcy</p>
                            <p className="text-gray-400 text-xs">Inwestycja: $88,000.00</p>
                        </div>
                        <div className="text-green-400 font-semibold">+6.0%</div>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-[#292929] rounded-lg">
                        <div>
                            <p className="font-semibold text-sm">Ostatni rok</p>
                            <p className="text-gray-400 text-xs">Inwestycja: $88,000.00</p>
                        </div>
                        <div className="text-green-400 font-semibold">+6.7%</div>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-[#292929] rounded-lg">
                        <div>
                            <p className="font-semibold text-sm">Od początku</p>
                            <p className="text-gray-400 text-xs">Inwestycja: $88,000.00</p>
                        </div>
                        <div className="text-green-400 font-semibold">+6.7%</div>
                    </div>
                </div>
            </div>

            {/* Generuj raport niestandardowy */}
            <div className="bg-[#161616] rounded-lg p-4 md:p-6 shadow-gray-500 shadow-sm mt-8">
                <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-4">Generuj raport niestandardowy</h3>
                <p className="text-gray-400 text-xs md:text-sm mb-4">Utwórz raport dla wybranego okresu czasu.</p>
                <form className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
                        <div className="flex-1">
                            <label className="block text-xs text-gray-400 mb-1" htmlFor="from-date">Od daty</label>
                            <input type="date" id="from-date" className="w-full bg-[#0f0f0f] border border-[#292929] rounded-lg px-3 py-2 text-gray-200 focus:outline-none focus:border-blue-500 placeholder:text-gray-500" placeholder="dd.mm.rrrr"/>
                        </div>
                        <div className="flex-1">
                            <label className="block text-xs text-gray-400 mb-1" htmlFor="to-date">Do daty</label>
                            <input type="date" id="to-date" className="w-full bg-[#0f0f0f] border border-[#292929] rounded-lg px-3 py-2 text-gray-200 focus:outline-none focus:border-blue-500 placeholder:text-gray-500" placeholder="dd.mm.rrrr"/>
                        </div>
                    </div>
                    <div className="mb-2">
                        <label className="block text-xs text-gray-400 mb-1" htmlFor="report-format">Format raportu</label>
                        <select id="report-format" className="w-full bg-[#0f0f0f] border border-[#292929] rounded-lg px-3 py-2 text-gray-200 focus:outline-none focus:border-blue-500">
                            <option>PDF</option>
                            <option>CSV</option>
                            <option>Excel</option>
                        </select>
                    </div>
                    <button type="submit" className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-4 py-2 transition-all">
                        <FileText size={18} />
                        Generuj raport
                    </button>
                </form>
            </div>

            {/* Dokumenty i archiwa */}
            <div className="bg-[#161616] rounded-lg p-4 md:p-6 shadow-gray-500 shadow-sm mt-8">
                <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-4">Dokumenty i archiwa</h3>
                <p className="text-gray-400 text-xs md:text-sm mb-4">Wszystkie wygenerowane raporty i dokumenty są dostępne do pobrania.</p>
                <div className="space-y-3">
                    {/* Raport PDF */}
                    <div className="flex items-center justify-between bg-[#181818] rounded-lg px-4 py-3 border border-[#292929]">
                        <div>
                            <p className="font-semibold text-sm">Raport_2024_Q3.pdf</p>
                            <p className="text-gray-400 text-xs">2.4 MB · 01.10.2024</p>
                        </div>
                        <button className="flex items-center text-gray-300 border border-[#292929] px-3 py-1 rounded-lg hover:border-[#404040] hover:bg-[#272727] transition-all" title="Pobierz">
                            <Download size={20} />
                        </button>
                    </div>
                    {/* Transakcje CSV */}
                    <div className="flex items-center justify-between bg-[#181818] rounded-lg px-4 py-3 border border-[#292929]">
                        <div>
                            <p className="font-semibold text-sm">Transakcje_2024.csv</p>
                            <p className="text-gray-400 text-xs">156 KB · 19.11.2024</p>
                        </div>
                        <button className="flex items-center text-gray-300 border border-[#292929] px-3 py-1 rounded-lg hover:border-[#404040] hover:bg-[#272727] transition-all" title="Pobierz">
                            <Download size={20} />
                        </button>
                    </div>
                    {/* Portfel historia XLSX */}
                    <div className="flex items-center justify-between bg-[#181818] rounded-lg px-4 py-3 border border-[#292929]">
                        <div>
                            <p className="font-semibold text-sm">Portfel_historia.xlsx</p>
                            <p className="text-gray-400 text-xs">892 KB · 15.11.2024</p>
                        </div>
                        <button className="flex items-center text-gray-300 border border-[#292929] px-3 py-1 rounded-lg hover:border-[#404040] hover:bg-[#272727] transition-all" title="Pobierz">
                            <Download size={20} />
                        </button>
                    </div>
                    {/* PIT PDF */}
                    <div className="flex items-center justify-between bg-[#181818] rounded-lg px-4 py-3 border border-[#292929]">
                        <div>
                            <p className="font-semibold text-sm">PIT_2024.pdf</p>
                            <p className="text-gray-400 text-xs">1.2 MB · 19.11.2024</p>
                        </div>
                        <button className="flex items-center text-gray-300 border border-[#292929] px-3 py-1 rounded-lg hover:border-[#404040] hover:bg-[#272727] transition-all" title="Pobierz">
                            <Download size={20} />
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}