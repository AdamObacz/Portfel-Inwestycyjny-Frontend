import { toast } from "sonner";
import { useState } from "react";

export default function SettingsSection() {
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [pushNotifications, setPushNotifications] = useState(false);
    const [marketingEmails, setMarketingEmails] = useState(true);

    const handleSaveSettings = () => {
        toast.success("Ustawienia zapisane pomyślnie!");
    };

    return (
        <>
            {/* header */}
            <div>
                <h2 className="font-bold text-3xl mb-2.5">Ustawienia</h2>
                <p className="text-gray-400">Zarządzaj swoimi preferencjami i ustawieniami konta.</p>
            </div>

            {/* informacje profilu */}
            <div className="bg-[#161616] w-full rounded-lg shadow-sm shadow-gray-500 p-6 mt-6">
                <h4 className="font-semibold mb-2 text-lg">Informacje profilu</h4>
                <p className="text-gray-400 text-sm mb-6">Zaktualizuj swoje dane osobowe i adres e-mail.</p>

                <div className="space-y-4">
                    {/* imie i nazwisko */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Pełne imię i nazwisko</label>
                        <input
                            type="text"
                            placeholder="Wpisz swoje imię"
                            className="border-gray-500 border rounded-lg px-3 py-2.5 bg-[#272727] focus:outline-none focus:ring-2 focus:ring-blue-700 w-full text-sm placeholder-gray-400"
                        />
                    </div>

                    {/* e-mail */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Adres e-mail</label>
                        <input
                            type="email"
                            placeholder="Wpisz swój e-mail"
                            className="border-gray-500 border rounded-lg px-3 py-2.5 bg-[#272727] focus:outline-none focus:ring-2 focus:ring-blue-700 w-full text-sm placeholder-gray-400"
                        />
                    </div>

                    {/* firma */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Firma</label>
                        <input
                            type="text"
                            placeholder="Wpisz nazwę firmy"
                            className="border-gray-500 border rounded-lg px-3 py-2.5 bg-[#272727] focus:outline-none focus:ring-2 focus:ring-blue-700 w-full text-sm placeholder-gray-400"
                        />
                    </div>
                </div>

                {/* zapisz zmiany */}
                <button
                    onClick={handleSaveSettings}
                    className="mt-6 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors"
                >
                    Zapisz zmiany
                </button>
            </div>

            {/* powiadomienia */}
            <div className="bg-[#161616] w-full rounded-lg shadow-sm shadow-gray-500 p-6 mt-6">
                <h4 className="font-semibold mb-2 text-lg">Powiadomienia</h4>
                <p className="text-gray-400 text-sm mb-6">Skonfiguruj sposób otrzymywania powiadomień.</p>

                <div className="space-y-6">
                    {/* powiadomienia e-mail */}
                    <div className="flex items-center justify-between">
                        <div>
                            <h5 className="font-medium text-sm">Powiadomienia e-mail</h5>
                            <p className="text-gray-400 text-xs">Otrzymuj aktualizacje e-mail dotyczące Twojego konta</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={emailNotifications}
                                onChange={(e) => setEmailNotifications(e.target.checked)}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>

                    {/* powiadomienia push */}
                    <div className="flex items-center justify-between">
                        <div>
                            <h5 className="font-medium text-sm">Powiadomienia push</h5>
                            <p className="text-gray-400 text-xs">Otrzymuj powiadomienia push na swoich urządzeniach</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={pushNotifications}
                                onChange={(e) => setPushNotifications(e.target.checked)}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>

                    {/* e-maile marketingowe */}
                    <div className="flex items-center justify-between">
                        <div>
                            <h5 className="font-medium text-sm">E-maile marketingowe</h5>
                            <p className="text-gray-400 text-xs">Otrzymuj e-maile o nowych funkcjach i aktualizacjach</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={marketingEmails}
                                onChange={(e) => setMarketingEmails(e.target.checked)}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                </div>
            </div>

            {/* bezpieczeństwo */}
            <div className="bg-[#161616] w-full rounded-lg shadow-sm shadow-gray-500 p-6 mt-6">
                <h4 className="font-semibold mb-2 text-lg">Bezpieczeństwo</h4>
                <p className="text-gray-400 text-sm mb-6">Zarządzaj hasłem i ustawieniami bezpieczeństwa</p>

                {/* obecne hasło */}
                <div>
                    <label className="block text-sm font-medium mb-2">Obecne hasło</label>
                    <input
                        type="password"
                        placeholder="Wpisz obecne hasło"
                        className="border-gray-500 border rounded-lg px-3 py-2.5 bg-[#272727] focus:outline-none focus:ring-2 focus:ring-blue-700 w-full text-sm placeholder-gray-400"
                    />
                </div>

                {/* nowe hasło */}
                <div className="mt-4">
                    <label className="block text-sm font-medium mb-2">Nowe hasło</label>
                    <input
                        type="password"
                        placeholder="Wpisz nowe hasło"
                        className="border-gray-500 border rounded-lg px-3 py-2.5 bg-[#272727] focus:outline-none focus:ring-2 focus:ring-blue-700 w-full text-sm placeholder-gray-400"
                    />
                </div>

                {/* potwierdź hasło */}
                <div className="mt-4">
                    <label className="block text-sm font-medium mb-2">Potwierdź nowe hasło</label>
                    <input
                        type="password"
                        placeholder="Potwierdź nowe hasło"
                        className="border-gray-500 border rounded-lg px-3 py-2.5 bg-[#272727] focus:outline-none focus:ring-2 focus:ring-blue-700 w-full text-sm placeholder-gray-400"
                    />
                </div>

                {/* zmień hasło */}
                <button onClick={handleSaveSettings} className="mt-6 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors">
                    Zaktualizuj hasło
                </button>
            </div>

            {/* niebezpieczna strefa */}
            <div className="bg-[#161616] w-full rounded-lg shadow-sm shadow-gray-500 p-6 mt-6 mb-10">
                <h4 className="font-semibold mb-2 text-lg">Strefa niebezpieczna</h4>
                <p className="text-gray-400 text-sm mb-6">Nieodwracalne działania wpływające na Twoje konto.</p>

                {/* usuń konto */}
                <div className="border border-red-500 rounded-lg p-4 bg-red-500/5">
                    <div className="flex items-center justify-between">
                        <div>
                            <h5 className="font-semibold">Usuń konto</h5>
                            <p className="text-gray-400 text-sm">Trwale usuń swoje konto i wszystkie dane</p>
                        </div>
                        <button className="bg-red-500 hover:bg-red-900 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                            Usuń
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}