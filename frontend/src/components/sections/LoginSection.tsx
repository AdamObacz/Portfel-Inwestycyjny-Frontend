import { useState } from "react";
import { authAPI } from "@/api/auth";
import { toast } from "sonner";
import { Bitcoin } from "lucide-react";

interface LoginSectionProps {
    onLogin: () => void;
}

export default function LoginSection({ onLogin }: LoginSectionProps) {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        console.log("Submitting form:", { isLogin, email: formData.email });

        try {
            if (isLogin) {
                // Logowanie
                console.log("Calling login API...");
                const response = await authAPI.login(formData.email, formData.password);
                console.log("Login response:", response);
                toast.success("Zalogowano pomyślnie!");
                // Backend używa sesji/cookies, nie ma tokena
                onLogin();
            } else {
                // Rejestracja
                console.log("Calling register API...");
                const response = await authAPI.register(
                    formData.email,
                    formData.password,
                    formData.firstName,
                    formData.lastName
                );
                console.log("Registration successful", response);
                toast.success("Konto zostało utworzone i zalogowano!");
                // Backend automatycznie loguje po rejestracji
                onLogin();
            }
        } catch (error: any) {
            console.error("Full error object:", error);
            console.error("Error response:", error.response);
            console.error("Error message:", error.message);
            
            let errorMessage = "Wystąpił błąd";
            
            if (error.code === 'ERR_NETWORK') {
                errorMessage = "Nie można połączyć się z serwerem. Sprawdź czy backend działa na http://localhost:8000";
            } else if (error.response) {
                errorMessage = error.response?.data?.message || error.response?.data?.error || `Błąd ${error.response.status}`;
            } else if (error.message) {
                errorMessage = error.message;
            }
            
            toast.error(isLogin ? "Błąd logowania: " + errorMessage : "Błąd rejestracji: " + errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0B1120] flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="bg-[#1C2333] rounded-2xl shadow-2xl p-8 border border-[#2A3447]">
                    {/* Logo */}
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#4169E1] to-[#1E40AF] rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
                            <span className="text-white text-3xl font-bold">
                                <Bitcoin size={36} />
                            </span>
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-2xl font-bold text-white text-center mb-2">
                        {isLogin ? "Zaloguj się" : "Utwórz konto"}
                    </h1>
                    <p className="text-gray-400 text-center mb-8 text-sm">
                        {isLogin
                            ? "Zaloguj się do swojego portfela kryptowalut"
                            : "Zarejestruj się aby zarządzać portfelem kryptowalut"}
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {!isLogin && (
                            <>
                                <div className="space-y-2">
                                    <label className="text-gray-300 text-sm font-medium block">
                                        Imię
                                    </label>
                                    <input
                                        name="firstName"
                                        type="text"
                                        placeholder="Wpisz swoje imię"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="w-full bg-[#0F1419] border border-[#2A3447] text-white placeholder:text-gray-500 h-12 rounded-lg px-4 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                                        required={!isLogin}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-gray-300 text-sm font-medium block">
                                        Nazwisko
                                    </label>
                                    <input
                                        name="lastName"
                                        type="text"
                                        placeholder="Wpisz swoje nazwisko"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="w-full bg-[#0F1419] border border-[#2A3447] text-white placeholder:text-gray-500 h-12 rounded-lg px-4 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                                        required={!isLogin}
                                    />
                                </div>
                            </>
                        )}

                        <div className="space-y-2">
                            <label className="text-gray-300 text-sm font-medium block">
                                Adres e-mail
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="twoj@email.com"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full bg-[#0F1419] border border-[#2A3447] text-white placeholder:text-gray-500 h-12 rounded-lg px-4 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-gray-300 text-sm font-medium block">
                                Hasło
                            </label>
                            <input
                                name="password"
                                type="password"
                                placeholder="Wpisz hasło"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="w-full bg-[#0F1419] border border-[#2A3447] text-white placeholder:text-gray-500 h-12 rounded-lg px-4 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                                required
                            />
                        </div>

                        {isLogin && (
                            <div className="flex justify-end -mt-1">
                                <button
                                    type="button"
                                    className="text-gray-400 text-sm hover:text-gray-300 transition-colors"
                                >
                                    Zapomniałeś hasła?
                                </button>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-[#4169E1] hover:bg-[#3558C7] text-white font-semibold h-12 rounded-lg transition-all shadow-lg shadow-blue-500/20 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? "Ładowanie..." : (isLogin ? "Zaloguj się" : "Utwórz konto")}
                        </button>
                    </form>

                    {/* Toggle between login/register */}
                    <div className="mt-6 text-center">
                        <p className="text-gray-400 text-sm mb-3">
                            {isLogin ? "Nie masz konta?" : "Masz już konto?"}
                        </p>
                        <button
                            type="button"
                            onClick={() => setIsLogin(!isLogin)}
                            className="w-full py-3 border border-[#2A3447] rounded-lg text-gray-300 hover:bg-[#0F1419] transition-colors font-medium"
                        >
                            {isLogin ? "Zarejestruj się" : "Zaloguj się"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}