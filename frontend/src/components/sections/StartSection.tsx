import { Wallet, TrendingUp, CreditCard, ArrowRight } from "lucide-react";

export default function StartSection() {

    return (
        <>
            {/* header */}
            <div className="h-[180px]">
                <h2 className="font-bold text-3xl mb-2.5">Witaj w świecie kryptowalut!</h2>
                <p className="w-full text-gray-400 text-base">Handluj, przechowuj i zarządzaj swoimi kryptowalutami w jednym bezpiecznym miejscu.</p>
            </div>

            {/* statystyki */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* saldo */}
                <div className="h-40 bg-[#161616] rounded-lg shadow-blue-700 shadow-md">
                    <div className="flex justify-between items-center p-4">
                        <p className="font-semibold">Saldo portfela</p>
                        <Wallet size={18} color="rgb(29 78 216)" />
                    </div>
                    <div className="w-full p-4">
                        <p className="text-3xl font-bold">$45,230.50</p>
                        <p className="text-gray-400 text-xs">Całkowita wartość zasobów</p>
                    </div>
                </div>

                {/* zysk/strata */}
                <div className="h-40 bg-[#161616] rounded-lg shadow-green-400 shadow-md">
                    <div className="flex justify-between items-center p-4">
                        <p className="font-semibold">Zysk/Strata</p>
                        <TrendingUp size={18} color="rgb(74 222 128)" />
                    </div>
                    <div className="w-full p-4">
                        <p className="font-bold text-3xl">$12,450.00</p>
                        <p className="text-green-400 text-xs">+38,2% (ostatnie 3 miesiące)</p>
                    </div>
                </div>

                {/* ilość monet */}
                <div className="h-40 bg-[#161616] rounded-lg shadow-blue-400 shadow-md">
                    <div className="flex justify-between items-center p-4">
                        <p className="font-semibold">Monety w proftelu</p>
                        <CreditCard size={18} color="rgb(96 165 250)" />
                    </div>
                    <div className="w-full p-4">
                        <p className="font-bold text-3xl">12</p>
                        <p className="text-blue-400 text-xs">Różne kryptowaluty</p>
                    </div>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* szybkie akcje */}
                <div className="bg-[#161616] w-full rounded-lg shadow-sm shadow-gray-500 p-4">
                    <h4 className="font-semibold mb-3">Szybkie akcje</h4>
                    <div className="flex flex-col items-center gap-4">
                        <button className="w-11/12 flex justify-between items-center border-[1px] border-gray-500 rounded-lg py-2 px-3 text-sm font-semibold hover:bg-gray-700/20 transition-colors">
                            Kup Bitcoin
                            <ArrowRight size={16} />
                        </button>

                        <button className="w-11/12 flex justify-between items-center border-[1px] border-gray-500 rounded-lg py-2 px-3 text-sm font-semibold hover:bg-gray-700/20 transition-colors">
                            Sprzedaj Etherium
                            <ArrowRight size={16} />
                        </button>

                        <button className="w-11/12 flex justify-between items-center border-[1px] border-gray-500 rounded-lg py-2 px-3 text-sm font-semibold hover:bg-gray-700/20 transition-colors">
                            Wyślij transfer
                            <ArrowRight size={16} />
                        </button>
                    </div>
                </div>

                {/* ostatnie transakcje */}
                <div className="bg-[#161616] w-full rounded-lg shadow-sm shadow-gray-500 p-2">
                    <h4 className="font-semibold px-4 py-3">Ostatnie transakcje</h4>
                    <div className="flex justify-between px-2 py-2 border-b-[1px] border-gray-700 w-full">
                        <div>
                            <p className="font-semibold">Bitcoin (BTC)</p>
                            <p className="text-gray-400 text-xs">Dziś</p>
                        </div>
                        <div>
                            <p className="text-red-700 font-bold">-$5,000.00</p>
                        </div>
                    </div>

                    <div className="flex justify-between px-2 py-2 border-b-[1px] border-gray-700 w-full">
                        <div>
                            <p className="font-semibold">Etherium (ETH)</p>
                            <p className="text-gray-400 text-xs">Wczoraj</p>
                        </div>
                        <div>
                            <p className="text-green-400 font-bold">+$2,250.00</p>
                        </div>
                    </div>

                    <div className="flex justify-between px-2 py-2">
                        <div>
                            <p className="font-semibold">Transfer bankowy</p>
                            <p className="text-gray-400 text-xs">3 dni temu</p>
                        </div>
                        <div>
                            <p className="text-green-400 font-bold">+$5,000.00</p>
                        </div>
                    </div>
                </div>
            </div>



            {/* porady */}
            <div className="bg-gradient-to-tr from-[rgb(29,78,216,0.1)] to-[rgb(29,78,216,0.05)] w-full rounded-lg shadow-sm shadow-gray-500 p-6">
                <h4 className="font-bold text-lg mb-4">Porady inwestycyjne</h4>
                <p className="text-gray-400 text-sm mb-2.5">Dywersyfikacja portfela kryptowalut to klucz do zarządzania ryzykiem. Rozważ inwestycję w Bitcoin, Ethereum i inne kryptowaluty o solidnych fundamentach. Pamiętaj: nigdy nie inwestuj więcej niż możesz stracić!</p>
                <button className="border-gray-700 border-[1px] rounded-lg w-full p-2 text-base font-semibold hover:bg-gray-700/20 transition-colors">Dowiedz się więcej</button>
            </div>
        </>
    )
}