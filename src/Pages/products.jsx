import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="/images/shoes-1.png" />
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
          neque consequuntur libero delectus quam porro rem a ullam dolorum
          repellendus, totam optio facere nihil rerum ex mollitia adipisci ea.
          Incidunt?
        </CardProduct.Body>
        <CardProduct.Footer price="Rp. 1.000.000" />
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image="/images/shoes-1.png" />
        <CardProduct.Body title="Sepatu Lama">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp. 1.000.000" />
      </CardProduct>
    </div>
  );
};

export default ProductsPage;
