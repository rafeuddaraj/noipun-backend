

export default function ProductDescription({product}){
  const {product_title,description,weight} = product || {}
  return (
    <>
      <section className="container mx-auto max-w-[1200px] px-5 py-5 lg:py-10">
        <h2 className="text-xl">পণ্যের বিবরন</h2>
        <p className="mt-4 lg:w-3/4">
          {description}
        </p>

        <table className="mt-7 w-full table-auto divide-x divide-y lg:w-1/2">
          <tbody className="divide-x border">
            <tr>
              <td className="border pl-4 font-bold">রং</td>
              <td className="border pl-4">Black, Brown, Red</td>
            </tr>

            {/* <tr>
              <td className="border pl-4 font-bold">Material</td>
              <td className="border pl-4">Latex</td>
            </tr> */}

            <tr>
              <td className="border pl-4 font-bold">ওজন</td>
              <td className="border pl-4">55 Kg</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}