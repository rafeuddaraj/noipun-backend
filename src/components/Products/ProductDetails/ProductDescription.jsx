

export default function ProductDescription({product}){
  const {product_title,description,weight} = product || {}
  return (
    <>
      <section className="container mx-auto max-w-[1200px] px-5 py-5 lg:py-10">
        <h2 className="text-xl">{product_title}</h2>
        <p className="mt-4 lg:w-3/4">
          {description}
        </p>

        <table className="mt-7 w-full table-auto divide-x divide-y lg:w-1/2">
          <tbody className="divide-x border">


            <tr>
              <td className="border pl-4 font-bold">Weight</td>
              <td className="border pl-4">{`${weight >= 1000 ? `${weight} KG` : `${weight} mg`}`}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}