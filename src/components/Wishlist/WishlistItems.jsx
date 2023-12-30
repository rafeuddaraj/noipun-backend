import Sidebar from "../Sidebar";
// import MobileWishlist from "./MobileWishlist";
import Wishlist from "./Wishlist";

export default function WishlistItems() {
    return (
        <>
            <section className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10">
                <Sidebar />
                <Wishlist />
                {/* <MobileWishlist /> */}
            </section>
        </>
    );
}
