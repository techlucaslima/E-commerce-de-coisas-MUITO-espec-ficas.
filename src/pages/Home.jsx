function Home() {
  return (
    <main className="flex flex-col p-2 gap-3">

      {/* Layout Mobile */}
      <div className="flex flex-col gap-2 xl:hidden">
        <div className="flex bg-[url(src/assets/homem-compras.webp)] h-64 w-full rounded bg-cover bg-center font-serif font-bold items-end">
          <h2 className="text-sm rounded bg-darkblue p-2 w-full break-words">
            Compre tudo o que você precisa
          </h2>
        </div>

        <div className="flex flex-row gap-2 w-full">
          <div className="flex bg-[url(src/assets/mecanico.webp)] h-48 flex-1 rounded bg-cover bg-center font-serif font-bold items-end">
            <h3 className="text-sm rounded bg-lightyellow p-2 w-full break-words">
              Produtos específicos
            </h3>
          </div>
          <div className="flex bg-[url(src/assets/construcao.webp)] h-48 flex-1 rounded bg-cover bg-center font-serif font-bold items-end">
            <h3 className="text-sm rounded bg-lightyellow p-2 w-full break-words">
              Tudo o que procura
            </h3>
          </div>
        </div>
      </div>

      {/* Layout Desktop */}
      <div className="hidden xl:flex gap-2 h-80 w-full">
        {/* Imagem da esquerda */}
        <div className="flex bg-[url(src/assets/homem-compras.webp)] w-1/2 rounded bg-cover bg-center font-serif font-bold items-end">
          <h2 className="text-xl rounded bg-lightyellow p-4 w-full break-words">
            Compre tudo o que você precisa
          </h2>
        </div>

        {/* Coluna direita */}
        <div className="flex flex-col w-1/2 gap-2">
          <div className="flex bg-[url(src/assets/mecanico.webp)] h-1/2 rounded bg-cover bg-center font-serif font-bold items-end">
            <h3 className="text-xl rounded bg-lightyellow p-4 w-full break-words">
              Produtos específicos
            </h3>
          </div>
          <div className="flex bg-[url(src/assets/construcao.webp)] h-1/2 rounded bg-cover bg-center font-serif font-bold items-end">
            <h3 className="text-xl rounded bg-lightyellow p-4 w-full break-words">
              Tudo o que procura
            </h3>
          </div>
        </div>
      </div>

    </main>
  );
}

export default Home;
