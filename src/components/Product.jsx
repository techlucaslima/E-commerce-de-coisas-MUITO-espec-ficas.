function Product({name, price, image}) {
  return (
    <div className="bg-white">
        <section className="flex flex-col gap-2 items-center justify-center h-50 w-40 xl:h-60 xl:w-50 border border-gray">
            <div 
              className={`flex-1 bg-cover bg-center w-full`}
              style={{backgroundImage: `url(${image})`}}
            ></div>

            <div className="flex flex-col items-center p-1">
              <div className='flex items-center justify-center'>
                <p className="align-center break-normal">{name}</p>
              </div>
              <h2 className="font-bold">{`R$${typeof price === "number" && price.toFixed(2).replace(".", ",")}`}</h2>
            </div>
        </section>
    </div>
  );
}

export default Product;