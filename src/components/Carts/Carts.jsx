import DesktopCart from "./DesktopCart";
import MobileCart from "./MobileCart";
import OrderSummary from "./OrderSummary";

export default function Carts() {
    return (
        <>
            <section className="container mx-auto flex-grow max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10">
                <MobileCart />
                <DesktopCart />
                <OrderSummary />
            </section>
        </>
    );
}
