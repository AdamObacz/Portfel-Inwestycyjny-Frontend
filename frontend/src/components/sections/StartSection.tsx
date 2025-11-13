import { Wallet,  TrendingUp, CreditCard } from "lucide-react";

export default function StartSection() {

    return (
        <>
            <div>
                <h2>Witaj!</h2>
                <p>Zarządzaj swoimi finansami i inwestycjami w jednym miejscu.</p>
            </div>
                <div>
                    <div>
                        <div className="flex">
                            <p>Saldo konta</p>
                            <Wallet size={20} color="blue"/>
                        </div>
                    </div>

                    <div className="flex">
                        <p>Wartość portfela</p>
                        <TrendingUp size={20} color="green"/>
                    </div>

                    <div className="flex">
                        <p>Zysk/Strata</p>
                        <CreditCard size={20} color="blue"/>
                    </div>
                </div>
        </>

    )
}