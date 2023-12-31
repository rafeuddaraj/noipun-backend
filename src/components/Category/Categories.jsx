import Category from "./Category";

export default function Categories() {
    return (
        <>
            <h2 className="mx-auto mb-5 max-w-[1200px] px-5">ক্যাটেগরি শপ</h2>

            {/* <!-- Cathegories --> */}
            <section className="mx-auto grid max-w-[1200px] grid-cols-2 px-5 lg:grid-cols-3 lg:gap-5 gap-3">
                
               <Category/>
               <Category/>
               <Category/>
               <Category/>
               <Category/>
               <Category/>
            </section>
            {/* <!-- /Cathegories  --> */}
        </>
    );
}
