import CardProduct from "../components/Fragments/CardProduct";

const Products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: "Rp. 1.000.000",
    image: "/images/shoes-1.png",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
          neque consequuntur libero delectus quam porro rem a ullam dolorum
          repellendus, totam optio facere nihil rerum ex mollitia adipisci ea.
          Incidunt?`,
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: "Rp. 500.000",
    image: "/images/shoes-1.png",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
          neque consequuntur libero`,
  },
  {
    id: 3,
    name: "Sepatu adadong",
    price: "Rp. 2.000.000",
    image: "/images/shoes-1.png",
    description: `ini adalah sepatu dari brand adadong`,
  },
];

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      {Products.map((product) => (
        <CardProduct key={product.id}>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body name={product.name}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductsPage;
