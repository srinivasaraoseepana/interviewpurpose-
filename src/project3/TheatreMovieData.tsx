import { theatres } from "./theatreData";
type Props = {};

const TheatreMovieData = (props: Props) => {
  //   const rating = theatres.map((theatre) => {
  //     const filterMovies = theatre.movies.filter((movie) => movie.rating > 4);
  //     console.log("filterMovies are", filterMovies);
  //     return filterMovies;
  //   });
  //   console.log("rating movies are ", rating);
  //   const flatRating = rating.flat();
  //   console.log("flatRating", flatRating);

  const items = [
    "samsung",
    "hero",
    "apple",
    "pineapple",
    "benz",
    "scoda",
    "carrot",
    "potato",
    "banana",
    "TV",
    "grapes",
    "Audi",
    "sony",
    "Ninja",
    "tata",
    "Honda",
    "Pulser",
    "mango",
    "brinjal",
    "rrr",
    "jalsa",
  ];

  const fruits = ["apple", "banana", "mango", "grapes", "pineapple"];
  const cars = ["benz", "Audi", "scoda", "tata"];
  const vegetables = ["carrot", "potato", "brinjal"];
  const electronics = ["TV", "samsung", "sony"];
  const bikes = ["Ninja", "honda", "hero", "Pulser"];

  // method 1 : you can maintain a function .whenever you want this getItemCategory , we can use it

  const getItemCategory = (item: string) => {
    if (fruits.includes(item.toLowerCase())) {
      return `fruit`;
    } else if (cars.includes(item.toLowerCase())) {
      return ` car`;
    } else if (vegetables.includes(item.toLowerCase())) {
      return ` vegitables`;
    } else if (electronics.includes(item.toLowerCase())) {
      return ` electronics`;
    } else if (bikes.includes(item.toLowerCase())) {
      return ` bikes`;
    } else {
      return ` unknown`;
    }
  };
  const getMapItems = items.map((item) => `${item} ${getItemCategory(item)} `);
  console.log("getMapItems", getMapItems);

  // method 2: we can use directly if else if inside map . map applied for every item inside array

  const mapItems = items.map((item) => {
    if (fruits.includes(item.toLowerCase())) {
      return `${item} fruit`;
    } else if (cars.includes(item.toLowerCase())) {
      return `${item} car`;
    } else if (vegetables.includes(item.toLowerCase())) {
      return `${item} vegitables`;
    } else if (electronics.includes(item.toLowerCase())) {
      return `${item} electronics`;
    } else if (bikes.includes(item.toLowerCase())) {
      return `${item} bikes`;
    } else {
      return `${item} unknown`;
    }
  });
  console.log(mapItems);

  // method3: we can use switch method aswell

  const getCategory = (item) => {
    switch (true) {
      case fruits.includes(item):
        return "fruit";
      case cars.includes(item):
        return "car";
      case vegetables.includes(item):
        return "vegetable";
      case electronics.includes(item):
        return "electronics";
      case bikes.includes(item):
        return "bike";
      default:
        return "unknown";
    }
  };

  const mapSwitchItems = items.map((item) => `${item} ${getCategory(item)}`);
  console.log(mapSwitchItems);

  //

  const categoryMap = {
    fruit: ["apple", "banana", "mango", "grapes"],
    car: ["benz", "Audi", "scoda"],
    vegetable: ["potato", "brinjal", "carrot"],
    electronics: ["TV", "sony", "samsung"],
    bike: ["Ninja", "Honda", "Pulser"],
    // ఇంకా ఎంత ఉన్నా add చేయచ్చు
  };

  const getCategoryMap = (item) => {
    for (const [categiry, values] of Object.entries(categoryMap)) {
      if (values.includes(item)) {
        return categiry;
      }
    }
  };
  const mappedCategiryItems = items.map(
    (item) => `${item} ${getCategoryMap(item)}`
  );
  console.log("mappedCategiryItems", mappedCategiryItems);

  // this another example for numbers

  const MarksList = [23, 45, 56, 76, 87, 63, 58, 97];
  const checkMarks = (marks) => {
    if (marks >= 85) {
      return "excellent !";
    } else if (marks >= 60) {
      return "beeter !";
    } else if (marks >= 45) {
      return "good !";
    } else if (marks >= 35) {
      return "nice try !";
    } else {
      return "falied. better luck next time !";
    }
  };
  const resultMarks = MarksList.map((mark) => {
    // const eachItem = `${mark} ${checkMarks(mark)}`;        // it is string
    const eachItem = { mark, status: checkMarks(mark) }; // it is object
    return eachItem;
  });
  console.log("resultmarks are ", resultMarks);
  const orderMarks = resultMarks.sort((a, b) => a.mark - b.mark);
  console.log("order marks are", orderMarks);

  //

  const mobiles = [`redmi`, `poco`, `apple`, `samsung`];
  const resultMobiles = mobiles.map((mob) => {
    const newMobiles = {
      mob,
      model: `${mob}srinu`,
      status:
        mob === "redmi" || mob === "poco" ? "old models" : `new models${mob}`,
    };
    return newMobiles;
  });
  console.log("resultmobiels", resultMobiles);

  //

  const cart = [
    { item: "Mobile", price: 20000, quantity: 1 },
    { item: "TV", price: 30000, quantity: 2 },
    { item: "Earphones", price: 1000, quantity: 3 },
  ];
  const totalCartCount = cart.reduce((acc, cart) => {
    return acc + cart.price * cart.quantity;
  }, 0);
  console.log("cart total price is ", totalCartCount);

  //

  const products = [
    { name: "TV", category: "electronics" },
    { name: "Mobile", category: "electronics" },
    { name: "Carrot", category: "vegetables" },
    { name: "Broccoli", category: "vegetables" },
  ];

  const categityProducts = products.reduce((acc, product) => {
    acc[product.category] = acc[product.category] || [];
    acc[product.category].push(product.name);
    return acc;
  });
  console.log("categiryproducts", categityProducts);

  return <div>{}</div>;
};

export default TheatreMovieData;
