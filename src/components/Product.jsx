function Product() {
  return (
    <div>
        <section className="flex flex-col items-center justify-center h-250 w-200">
            <div className='product-image-container'>
                <img src="https://a.storyblok.com/f/178900/960x540/9a75be9716/solo-leveling-episode-23.jpg/m/filters:quality(95)format(webp)" alt="" />
            </div>
            <div className='product-title-container'>
                <p>Pinto de borracha</p>
            </div>
            <h2>10R$</h2>
        </section>
    </div>
  );
}

export default Product;