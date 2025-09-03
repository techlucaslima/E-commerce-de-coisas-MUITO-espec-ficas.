import Product from "../components/Product";
import products from "../utils/products";

import construcao from '../assets/construcao.webp';
import homemCompras from '../assets/homem-compras.webp';
import mecanico from '../assets/mecanico.webp';

function Home() {
  return (
    <div>
      <section className="bg-white h-100 shadow-sm">
        <div className="container h-full mx-auto flex flex-col justify-between lg:flex-row p-2 gap-3">
          <div 
            className="flex flex-1 rounded bg-cover bg-no-repeat font-bold items-end"
            style={{backgroundImage: `url(${homemCompras})`}}
          >
            <h2 className="text-sm xl:text-xl rounded bg-lightyellow p-1 m-1 xl:m-2 xl:p-4 xl:w-fit">
              Compre tudo o que você mais precisa diretamente aqui
            </h2>
          </div>

          <div className="flex flex-1 flex-row xl:flex-col gap-2">

            <div 
              className="flex flex-1 bg-cover bg-[center_-30px] rounded p-1 xl:p-2 font-bold items-end"
              style={{backgroundImage: `url(${mecanico})`}}
            >
              <h3 className="text-sm xl:text-xl rounded bg-lightyellow p-1 m-1 xl:p-2 xl:m-2 xl:w-fit">
                Das coisas mais específicas
              </h3>
            </div>

            <div 
              className="flex flex-1 bg-cover bg-[center_-30px] rounded p-1 xl:p-2 font-bold items-end"
              style={{backgroundImage: `url(${construcao})`}}
            >
              <h3 className="text-sm xl:text-xl rounded bg-lightyellow p-1 m-1 xl:p-2 xl:m-2 xl:w-fit">
                A exatamente aquilo que procura!
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="p-3 bg-gray-200">
        <div className="container mx-auto flex gap-2 flex-wrap justify-center">
          {
            products.map((product, index) => (
              <Product name={product.name} price={product.price} image={product.image} key={index}/>
            ))
          }
        </div>
      </section>
    </div>
  );
}

export default Home;
