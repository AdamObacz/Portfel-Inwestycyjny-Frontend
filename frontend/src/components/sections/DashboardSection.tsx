import { DollarSign, Activity, TrendingUp, Zap } from "lucide-react"

export default function DashboardSection() {
    return(
        <div className="font-sans">

            <div className="h-[120px]">
                <h1 className="font-bold text-3xl mb-2.5">Dashboard</h1>
                <p className="w-full text-gray-400 text-base">Witamy ponownie! Oto przegląd Twoich metryk.</p>
            </div>
            {/* Sekcja z podsumowaniem finansowym */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">

                {/* Całkowita wartość portfela */}
                <div className="h-40 bg-[#161616] rounded-lg p-4 shadow-gray-500/50 shadow-md hover:bg-gray-500/20 transition-colors hover:shadow-white/50 hover:scale-105 hover:transition-transform">
                    <div className="flex justify-between">
                        <h2 className="text-xl">Całkowita wartość portfela</h2>
                        <DollarSign size={25} color="white"/>    
                    </div>
                    <div className="mt-4">
                        <h3 className=" text-2xl font-semibold mb-2">$45,230.50</h3>
                        <p className="text-gray-400 w-full text-base">+38,2% (ostatnie 3 miesiące)</p>
                    </div>

                </div>

                {/* Zysk dziś */}
                <div className="h-40 bg-[#161616] rounded-lg p-4 shadow-gray-500/50 shadow-md hover:bg-gray-500/20 transition-colors hover:shadow-white/50 hover:scale-105 hover:transition-transform">
                    <div className="flex justify-between">
                        <h2 className="text-xl">Zysk dzisiaj</h2>
                        <TrendingUp size={25} color="white"/>  
                    </div>
                    <div className="mt-4">
                        <h3 className=" text-2xl font-semibold mb-2">+$2,150.00</h3>
                        <p className="text-gray-400 w-full text-base">+24,3% od wczoraj</p>
                    </div>
                </div>

                {/* Aktywne transakcje */}
                <div className="h-40 bg-[#161616] rounded-lg p-4 shadow-gray-500/50 shadow-md hover:bg-gray-500/20 transition-colors hover:shadow-white/50 hover:scale-105 hover:transition-transform">
                    <div className="flex justify-between">
                        <h2 className="text-xl">Aktywne transakcje</h2>
                        <Activity size={25} color="white"/>   
                    </div>
                    <div className="mt-4">
                        <h3 className=" text-2xl font-semibold mb-2">3</h3>
                        <p className="text-gray-400 w-full text-base">Oczekuje realizacji</p>
                    </div>
                </div>

                {/* Najlepszy performer */}
                <div className="h-40 bg-[#161616] rounded-lg p-4 shadow-gray-500/50 shadow-md hover:bg-gray-500/20 transition-colors hover:shadow-white/50 hover:scale-105 hover:transition-transform">
                    <div className="flex justify-between">
                        <h2 className="text-xl">Najlepszy performer</h2>
                        <Zap size={25} color="white"/>   
                    </div>
                    <div className="mt-4">
                        <h3 className=" text-2xl font-semibold mb-2">Bitcoin +7.1%</h3>
                        <p className="text-gray-400 w-full text-base">Ostatnie 7 dni</p>
                    </div>
                </div>
            </div>

            {/* Sekcja z statystykami 1*/}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

                {/* Aktywności */}
                <div className="h-60 bg-[#161616] rounded-lg p-4 shadow-gray-500/50 shadow-md hover:bg-gray-500/20 transition-colors hover:shadow-white/50 hover:scale-105 hover:transition-transform">
                    <h2 className=" text-2xl font-semibold m-2">Ostanie Aktywności</h2>
                    <ol className="m-2 py-1">
                        <li className="mb-2">      
                            <p>Kupiono 0.5 BTC</p>
                            <p className=" text-sm text-gray-400">2 godziny temu</p>
                        </li>
                        <li className="mb-2">
                            <p>Sprzedano 5 ETH</p>
                            <p className=" text-sm text-gray-400">5 godzin temu</p>
                        </li>
                        <li className="mb-2">
                            <p>Otrzymano dywidendę ze Stakingu</p>
                            <p className=" text-sm text-gray-400">1 dzień temu</p>
                        </li>
                    </ol>
                </div>

                {/* Szybkie statystyki */}
                <div className="h-60 bg-[#161616] rounded-lg p-4 shadow-gray-500/50 shadow-md hover:bg-gray-500/20 transition-colors hover:shadow-white/50 hover:scale-105 hover:transition-transform">
                    <h2 className=" text-2xl font-semibold m-2">Statystyki Portfela</h2>
                    <div className="justify-between flex m-2">
                        <p className="text-gray-400 w-full text-base">Zwrot roczny</p>
                        <p className="font-semibold text-green-400">+45.2%</p>
                    </div>
                    <div className="justify-between flex m-2">
                        <p className="text-gray-400 w-full text-base">Zmienność</p>
                        <p className="font-semibold">18.5%</p>
                    </div>
                    <div className="justify-between flex m-2">
                        <p className="text-gray-400 w-full text-base">Stosunek Sharpe'a</p>
                        <p className="font-semibold">2.3</p>
                    </div>
                    <div className="justify-between flex m-2">
                        <p className="text-gray-400 w-full text-base">Maksymalny drawdown</p>
                        <p className="font-semibold text-red-700">-15.3%</p>
                    </div>
                    
                </div>
            </div>
            {/* Sekcja z statystykami 2*/}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

                {/* Krypto w portfelu */}
                <div className="h-100 bg-[#161616] rounded-lg p-4 shadow-gray-500/50 shadow-md hover:bg-gray-500/20 transition-colors hover:shadow-white/50 hover:scale-105 hover:transition-transform">
                    <h2 className=" text-2xl font-semibold m-2 mb-4">Top 5 kryptowalut w portfelu</h2>
                    <ol className="m-2 py-1 flex flex-col">
                        <div className="justify-between flex">
                            <p>Bitcoin (BTC)</p>
                            <li className="mb-2">      
                            <p className="font-semibold">$33,123.23</p>
                            <p className="text-sm text-gray-400 text-end">36.5%</p>
                            </li>
                            
                        </div>
                        
                        <div className="justify-between flex">
                            <p>Ethereum (ETH)</p>
                            <li className="mb-2">      
                            <p className="font-semibold">$25,323.43</p>
                            <p className="text-sm text-gray-400 text-end">27.2%</p>
                            </li>
                            
                        </div>

                        <div className="justify-between flex">
                            <p>Ripple (XRP)</p>
                            <li className="mb-2">      
                            <p className="font-semibold">$25,000.23</p>
                            <p className="text-sm text-gray-400 text-end">46.5%</p>
                            </li>
                            
                        </div>

                        <div className="justify-between flex">
                            <p>Solana (SOL)</p>
                            <li className="mb-2">      
                            <p className="font-semibold">$2,453.53</p>
                            <p className="text-sm text-gray-400 text-end">4.5%</p>
                            </li>
                            
                        </div>

                        <div className="justify-between flex">
                            <p >Cardano (ADA)</p>
                            <li className="mb-2">      
                            <p className="font-semibold">$4,423.53</p>
                            <p className="text-sm text-gray-400 text-end">6.5%</p>
                            </li>
                            
                        </div>
                    </ol>
                </div>

                {/* Wskaźniki rynkowe */}
                <div className="h-100 bg-[#161616] rounded-lg p-4 shadow-gray-500/50 shadow-md hover:bg-gray-500/20 transition-colors hover:shadow-white/50 hover:scale-105 hover:transition-transform">
                    <h2 className=" text-2xl font-semibold m-2 mb-5">Wskaźniki rynkowe</h2>
                    <ol>

                        <div className="justify-between flex m-2">
                        <p className="text-gray-400 text-base w-[50%]">Bitcoin dominacja</p>
                        <li>
                            <p className="font-semibold">40.2%</p>
                            <p className=" text-xs text-green-400 text-end">+5%</p>
                        </li>
                        </div>

                        <div className="justify-between flex m-2">
                        <p className="text-gray-400 text-base w-[50%]">Kapitalizacja rynku</p>
                        <li>
                            <p className="font-semibold">$2,3T</p>
                            <p className=" text-xs text-green-400 text-end">+3.5%</p>
                        </li>
                        </div>

                        <div className="justify-between flex m-2">
                        <p className="text-gray-400 text-base w-[50%]">Strach i chciwość</p>
                        <li>
                            <p className="font-semibold text-end">68 (Chciwość)</p>
                            <p className=" text-xs text-green-400 text-end">+5</p>
                        </li>
                        </div>
                        <div className="justify-between flex m-2">
                        <p className="text-gray-400 text-base w-[50%]">Fear index</p>
                        <li>
                            <p className="font-semibold text-end">Umiarkowany</p>
                            <p className=" text-xs text-green-400 text-end">Stabilny</p>
                        </li>
                        </div>
                    </ol>
                    
                    
                    
                </div>
            </div>


        </div>
    )
}