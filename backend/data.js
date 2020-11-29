import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "graceCartAdmin",
      email: "gracecartadmin@gmail.com",
      password: bcrypt.hashSync("graceCart2608@", 8),
      isAdmin: true
    },
    {
      name: "gracecartuser",
      email: "gracecartuser@gmail.com",
      password: bcrypt.hashSync("12345678", 8),
      isAdmin: false
    }
  ],
  Menu: [
    {
      name: "Nike Slim Shirt",
      image: "/images/product-1.png",
      category: "shirts",
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product"
    },
    {
      name: "Adidas Slim Shirt",
      image: "/images/pic2.jpg",
      category: "shirts",
      price: 100,
      countInStock: 10,
      brand: "Adidas",
      rating: 2,
      numReviews: 10,
      description: "high quality product"
    },
    {
      name: "Lacoste Slim Shirt",
      image: "/images/pic3.jpg",
      category: "shirts",
      price: 220,
      countInStock: 10,
      brand: "Nike",
      rating: 4.8,
      numReviews: 17,
      description: "high quality product"
    },
    {
      name: "Puma Slim Pants",
      image: "/images/pic4.jpg",
      category: "pants",
      price: 140,
      countInStock: 10,
      brand: "Nike",
      rating: 4.2,
      numReviews: 14,
      description: "high quality product"
    },
    {
      name: "Adidas Slim Pant",
      image: "/images/pic5.jpg",
      category: "pants",
      price: 130,
      countInStock: 10,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 18,
      description: "high quality product"
    }
  ]
};

export default data;
