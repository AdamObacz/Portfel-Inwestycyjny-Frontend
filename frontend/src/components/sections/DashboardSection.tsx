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
                <div className="h-40 bg-[#161616] rounded-lg p-4 shadow-gray-500/50 shadow-md">
                    <div className="flex justify-between">
                        <h2>Łączne przychody</h2>
                        <DollarSign size={15} color="white"/>    
                    </div>
                    <div className="mt-4">
                        <h3 className=" text-2xl font-semibold">$40,300.22</h3>
                        <p>+20.4% od ostatniego miesiąca</p>
                    </div>

                </div>

                {/* Aktywność użytkowników */}
                <div className="h-40 bg-[#161616] rounded-lg p-4 shadow-gray-500/50 shadow-md">
                    <div className="flex justify-between">
                        <h2>Aktywność użytkowników</h2>
                        <Users size={15} color="white"/>  
                    </div>
                    <div className="mt-4">
                        <h3 className=" text-2xl font-semibold">2,000</h3>
                        <p>+300 od ostatniego tygodnia</p>
                    </div>
                </div>

                {/* Obroty */}
                <div className="h-40 bg-[#161616] rounded-lg p-4 shadow-gray-500/50 shadow-md">
                    <div className="flex justify-between">
                        <h2>Obroty</h2>
                        <ShoppingCart size={15} color="white"/>   
                    </div>
                    <div className="mt-4">
                        <h3 className=" text-2xl font-semibold">+12,000</h3>
                        <p>+15,5% od ostatniego miesiąca</p>
                    </div>
                </div>

                {/* Obroty */}
                <div className="h-40 bg-[#161616] rounded-lg p-4 shadow-gray-500/50 shadow-md">
                    <div className="flex justify-between">
                        <h2>Wzrost</h2>
                        <TrendingUp size={15} color="white"/>   
                    </div>
                    <div className="mt-4">
                        <h3 className=" text-2xl font-semibold">+600</h3>
                        <p>+100 od ostatniej godziny</p>
                    </div>
                </div>
            </div>

            {/* Sekcja z statystykami */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="h-60 bg-[#161616] rounded-lg p-4 shadow-gray-500/50 shadow-md">
                    <h2 className=" text-2xl font-semibold mb-2">Ostanie Aktywności</h2>
                    <ol>
                        <li>Aktywność 1</li>
                        <li>Aktywność 2</li>
                        <li>Aktywność 3</li>
                    </ol>
                </div>

                <div className="h-60 bg-[#161616] rounded-lg p-4 shadow-gray-500/50 shadow-md">
                    <h2 className=" text-2xl font-semibold mb-2">Szybkie statystyki</h2>
                    <p>współczynnik konwersji:</p>
                    <p>Średnia wartość zamówienia:</p>
                    <p>Utrzymanie klienta</p>
                    <p>Współczynnik odrzuceń</p>
                </div>
            </div>

        </div>
    )
}