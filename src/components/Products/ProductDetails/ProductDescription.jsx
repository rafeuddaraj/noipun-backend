

export default function ProductDescription(){
  return (
    <>
      <section className="container mx-auto max-w-[1200px] px-5 py-5 lg:py-10">
        <h2 className="text-xl">Product details</h2>
        <p className="mt-4 lg:w-3/4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          consequatur temporibus deserunt id labore. Et, iusto nostrum repellat
          laudantium iure fuga quibusdam laborum laboriosam earum. Fugit
          possimus impedit harum dolor? <br />
          Laboriosam quo impedit, reprehenderit eum eaque eius tempore non
          blanditiis, labore quibusdam nesciunt atque doloribus cum autem?
          <br />
          Autem magni ullam alias pariatur corporis officiis animi neque, quo,
          ab aperiam ratione! Similique deserunt dolore dignissimos, iure
          quisquam mollitia perferendis pariatur reprehenderit dolorem, cum enim
          aut ad amet in ducimus sint, commodi neque quis saepe libero dolor
          dolores. Sequi voluptas adipisci minus!
        </p>

        <table className="mt-7 w-full table-auto divide-x divide-y lg:w-1/2">
          <tbody className="divide-x border">
            <tr>
              <td className="border pl-4 font-bold">Color</td>
              <td className="border pl-4">Black, Brown, Red</td>
            </tr>

            <tr>
              <td className="border pl-4 font-bold">Material</td>
              <td className="border pl-4">Latex</td>
            </tr>

            <tr>
              <td className="border pl-4 font-bold">Weight</td>
              <td className="border pl-4">55 Kg</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}