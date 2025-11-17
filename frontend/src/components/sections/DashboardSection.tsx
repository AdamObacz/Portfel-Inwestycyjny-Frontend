import { DollarSign, Users, ShoppingCart, TrendingUp } from "lucide-react"

export default function DashboardSection() {
    return(
        <div>

            <div className="h-[120px]">
                <h1 className="font-bold text-3xl mb-2.5">Dashboard</h1>
                <p className="w-full text-gray-400 text-base">Witamy ponownie! Oto przegląd Twoich metryk.</p>
            </div>
            {/* Sekcja z podsumowaniem finansowym */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">

                {/* Przychody */}
                <div className="h-40 bg-[#161616] rounded-lg p-4 shadow-gray-500/50 shadow-md hover:bg-gray-500/20 transition-colors hover:shadow-white/50 hover:scale-105 hover:transition-transform">
                    <div className="flex justify-between">
                        <h2 className="text-xl">Łączne przychody</h2>
                        <DollarSign size={25} color="white"/>    
                    </div>
                    <div className="mt-4">
                        <h3 className=" text-2xl font-semibold mb-2">$40,300.22</h3>
                        <p className="text-gray-400 w-full text-base">+20.4% od ostatniego miesiąca</p>
                    </div>

                </div>

                {/* Aktywność użytkowników */}
                <div className="h-40 bg-[#161616] rounded-lg p-4 shadow-gray-500/50 shadow-md hover:bg-gray-500/20 transition-colors hover:shadow-white/50 hover:scale-105 hover:transition-transform">
                    <div className="flex justify-between">
                        <h2 className="text-xl">Aktywność użytkowników</h2>
                        <Users size={25} color="white"/>  
                    </div>
                    <div className="mt-4">
                        <h3 className=" text-2xl font-semibold mb-2">2,000</h3>
                        <p className="text-gray-400 w-full text-base">+300 od ostatniego tygodnia</p>
                    </div>
                </div>

                {/* Obroty */}
                <div className="h-40 bg-[#161616] rounded-lg p-4 shadow-gray-500/50 shadow-md hover:bg-gray-500/20 transition-colors hover:shadow-white/50 hover:scale-105 hover:transition-transform">
                    <div className="flex justify-between">
                        <h2 className="text-xl">Obroty</h2>
                        <ShoppingCart size={25} color="white"/>   
                    </div>
                    <div className="mt-4">
                        <h3 className=" text-2xl font-semibold mb-2">+12,000</h3>
                        <p className="text-gray-400 w-full text-base">+15,5% od ostatniego miesiąca</p>
                    </div>
                </div>

                {/* Wzrost */}
                <div className="h-40 bg-[#161616] rounded-lg p-4 shadow-gray-500/50 shadow-md hover:bg-gray-500/20 transition-colors hover:shadow-white/50 hover:scale-105 hover:transition-transform">
                    <div className="flex justify-between">
                        <h2 className="text-xl">Wzrost</h2>
                        <TrendingUp size={25} color="white"/>   
                    </div>
                    <div className="mt-4">
                        <h3 className=" text-2xl font-semibold mb-2">+600</h3>
                        <p className="text-gray-400 w-full text-base">+100 od ostatniej godziny</p>
                    </div>
                </div>
            </div>

            {/* Sekcja z statystykami */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

                {/* Aktywności */}
                <div className="h-60 bg-[#161616] rounded-lg p-4 shadow-gray-500/50 shadow-md hover:bg-gray-500/20 transition-colors hover:shadow-white/50 hover:scale-105 hover:transition-transform">
                    <h2 className=" text-2xl font-semibold m-2">Ostanie Aktywności</h2>
                    <ol className="m-2 py-1">
                        <li className="mb-2">      
                            <p>Aktywność 1</p>
                            <p className=" text-sm text-gray-400">1 godzina temu</p>
                        </li>
                        <li className="mb-2">
                            <p>Aktywność 2</p>
                            <p className=" text-sm text-gray-400">2 godziny temu</p>
                        </li>
                        <li className="mb-2">
                            <p>Aktywność 3</p>
                            <p className=" text-sm text-gray-400">3 godziny temu</p>
                        </li>
                    </ol>
                </div>

                {/* Szybkie statystyki */}
                <div className="h-60 bg-[#161616] rounded-lg p-4 shadow-gray-500/50 shadow-md hover:bg-gray-500/20 transition-colors hover:shadow-white/50 hover:scale-105 hover:transition-transform">
                    <h2 className=" text-2xl font-semibold m-2">Szybkie statystyki</h2>
                    <div className="justify-between flex m-2">
                        <p className="text-gray-400 w-full text-base">współczynnik konwersji:</p>
                        <p className="font-semibold">3.2%</p>
                    </div>
                    <div className="justify-between flex m-2">
                        <p className="text-gray-400 w-full text-base">Średnia wartość zamówienia:</p>
                        <p className="font-semibold">$156.50</p>
                    </div>
                    <div className="justify-between flex m-2">
                        <p className="text-gray-400 w-full text-base">Utrzymanie klienta</p>
                        <p className="font-semibold">85%</p>
                    </div>
                    <div className="justify-between flex m-2">
                        <p className="text-gray-400 w-full text-base">Współczynnik odrzuceń</p>
                        <p className="font-semibold">12%</p>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}