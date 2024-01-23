import useProduct from "../Hooks/useProduct";
import ProductCard from '../Hooks/Cards/ProductCard'

const AllProduct = () => {
    const [products]=useProduct()
    return (
        <div>
          <div  className='container mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mt-20 gap-y-14'>
            {
                products.map(product =><ProductCard
                key={product.id}
                product={product}
                ></ProductCard>)
            }
        </div> 
        </div>
    );
};

export default AllProduct;