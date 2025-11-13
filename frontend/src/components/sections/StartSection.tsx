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

            {/* szybkie akcje */}
            <div className="bg-[#161616] w-full h-52 rounded-lg shadow-sm shadow-gray-500">
                <h4 className="font-semibold p-4">Szybkie akcje</h4>
                <div className="gap-4 flex flex-col items-center h-full">
                    <button className="w-11/12 flex justify-between items-center border-[1px] border-gray-500 rounded-lg py-1.5 px-3 text-sm font-semibold">
                        Kup Bitcoin
                        <ArrowRight size={16} />
                    </button>

                    <button className="w-11/12 flex justify-between items-center border-[1px] border-gray-500 rounded-lg py-1.5 px-3 text-sm font-semibold">
                        Sprzedaj Etherium
                        <ArrowRight size={16} />
                    </button>

                    <button className="w-11/12 flex justify-between items-center border-[1px] border-gray-500 rounded-lg py-1.5 px-3 text-sm font-semibold">
                        Wyślij tansfer
                        <ArrowRight size={16} />
                    </button>
                </div>
            </div>

            {/* ostatnie transakcje */}
            <div>
                <h4>Ostatnie transakcje</h4>
                <div>
                    <div>
                        <p>Bitcoin (BTC)</p>
                        <p>Dziś</p>
                    </div>
                    <div>
                        <p className="text-red-700">-$2500.00</p>
                    </div>
                </div>

                <div>
                    <div>
                        <p>Etherium (ETH)</p>
                        <p>Wczoraj</p>
                    </div>
                    <div>
                        <p className="text-green-400">+$500.00</p>
                    </div>
                </div>

                <div>
                    <div>
                        <p>Transfer bankowy</p>
                        <p>3 dni temu</p>
                    </div>
                    <div>
                        <p className="text-green-400">+$5000.00</p>
                    </div>
                </div>
            </div>

            {/* porady */}
            <div>
                <h4>Porady inwestycyjne</h4>
                <p>Dywersyfikacja portfela kryptowalut to klucz do zarządzania ryzykiem. Rozważ inwestycję w Bitcoin, Ethereum i inne kryptowaluty o solidnych fundamentach. Pamiętaj: nigdy nie inwestuj więcej niż możesz stracić!</p>
                <p>Dowiedz się więcej</p>
            </div>
        </>
    )
}