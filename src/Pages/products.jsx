import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

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

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  }
  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
      </div>
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
    </Fragment>
  );
};

export default ProductsPage;
