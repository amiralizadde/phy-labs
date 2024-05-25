import Category from "@/components/template/p-admin/products/Category";
import ProductPanel from "@/components/template/p-admin/products/product/ProductPanel";

const Products = () => {
  return (
    <div>
      <div className="p-5">
        {/* Category section */}
        <div>
          <Category />
        </div>
        {/* <hr className="h-0.5 my-10 bg-primary" /> */}
        <div className="mt-20">
          <ProductPanel />
        </div>
      </div>
    </div>
  );
};

export default Products;
