<!-- <div className="w-[320px] p-4 hover:shadow-[0_5px_60px_-10px_rgb(109,118,125)] group hover:z-10 text-accent">
      <div className="bg-base rounded-lg relative before:absolute before:overflow-hidden overflow-hidden before:left-0 before:rounded-xl before:w-full before:h-full before:border before:border-thin group-hover:before:border-none h-[490px] flex flex-col justify-between">
        <div>
          <Link
            href={`/product/${product.slug}`}
            className="overflow-hidden relative block p-1 h-[280px]"
          >
            <>
              <Image
                className="w-full scale-100 group-hover:scale-110 duration-300 rounded-lg"
                src={`${images[0]}`}
                width={600}
                height={100}
                alt={product.name}
              />
              <Image
                className="w-full absolute top-0 left-0 invisible group-hover:block group-hover:visible opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-110 duration-300 "
                src={`${images[1]}`}
                width={600}
                height={100}
                alt={product.name}
              />
            </>
          </Link>

          <div className="border-b border-thin flex justify-left p-2 text-warning">
            <FontAwesomeIcon icon={faStar} width={16} />
            <FontAwesomeIcon icon={faStar} width={16} />
            <FontAwesomeIcon icon={faStar} width={16} />
            <FontAwesomeIcon icon={faStar} width={16} />
            <FontAwesomeIcon icon={faStar} width={16} />
          </div>

          <div>
            <div className="p-1 leading-none font-semibold text-center relative before:absolute before:w-48 before:h-full before:mx-auto before:left-0 before:right-0 before:border-b before:border-thin duration-300 text-sm">
              <Link href={`/product/${product.slug}`}>
                <small>
                  {name.length < 110 ? name : name.slice(0, 100) + "..."}
                </small>
              </Link>
            </div>
            <div className="text-center text-error mt-1.5">৳{price}</div>
          </div>
        </div>
        <div className="relative z-10 h-[100px]">
          <div className="text-xs p-5 flex justify-center">
            <div>
              <button
                onClick={() => addToCartHandler(product)}
                className="px-4 py-1.5 uppercase bg-accent text-base text-xs hover:bg-primary rounded-2xl duration-200 flex justify-center items-center gap-x-2"
              >
                <FontAwesomeIcon icon={faCartShopping} width={15} />
                <span>add to cart</span>
              </button>
            </div>
          </div>
          <div className="border-t border-thin px-2 py-0.5">
            <Link href={`/product/${product.slug}`} className="inline-block">
              <div className="flex">
                <FontAwesomeIcon
                  icon={faDollarSign}
                  width={8}
                  className="text-success"
                />
                <span className="text-xs ml-1 hover:text-error">Buy Now</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div> -->