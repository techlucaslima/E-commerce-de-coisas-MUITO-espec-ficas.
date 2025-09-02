function Home() {
  return (
    <main className="flex flex-col lg:flex-row p-2 gap-3 bg-gray-200">
      <div className="flex xl:flex-1 bg-[url(src/assets/homem-compras.webp)] h-60 xl:h-80 rounded bg-cover bg-no-repeat font-serif font-bold items-end">
        <h2 className="text-sm xl:text-xl rounded bg-lightyellow p-1 m-1 xl:m-2 xl:p-4 xl:w-fit">
          Compre tudo o que você mais precisa diretamente aqui
        </h2>
      </div>

      <div className="flex xl:flex-1 xl:flex-col gap-2">

        <div className="flex bg-[url(src/assets/mecanico.webp)] bg-cover bg-[center_-30px] rounded h-40 p-1 xl:p-2 xl:h-38 font-serif font-bold items-end">
          <h3 className="text-sm xl:text-xl rounded bg-lightyellow p-1 m-1 xl:p-2 xl:m-2 xl:w-fit">
            Das coisas mais específicas
          </h3>
        </div>

        <div className="flex bg-[url(src/assets/construcao.webp)] bg-cover bg-[center_-30px] rounded p-1 h-40 xl:p-2 xl:h-38 font-serif font-bold items-end">
          <h3 className="text-sm xl:text-xl rounded bg-lightyellow p-1 m-1 xl:p-2 xl:m-2 xl:w-fit">
            A exatamente aquilo que procura!
          </h3>
        </div>

      </div>
    </main>
  );
}

export default Home;
