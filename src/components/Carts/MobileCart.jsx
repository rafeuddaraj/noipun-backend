import MobileItem from "./MobileItem";


export default function MobileCart(){
  return (
    <>
              <section
          className="container mx-auto my-3 flex w-full flex-col gap-3 px-4 md:hidden"
        >
          
          <MobileItem/>
          <MobileItem/>
          <MobileItem/>
          <MobileItem/>
          <MobileItem/>

        </section>
    </>
  );
}