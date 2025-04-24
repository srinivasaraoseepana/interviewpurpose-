type Movie = {
  title: string;
  rating: number;
  showTimes: string[];
};

type Theatre = {
  name: string;
  city: string;
  movies: Movie[];
};

export const theatres: Theatre[] = [
  {
    name: "PVR Inox",
    city: "Hyderabad",
    movies: [
      { title: "Jawan", rating: 4.5, showTimes: ["11AM", "3PM"] },
      { title: "Leo", rating: 3.9, showTimes: ["1PM", "7PM"] },
    ],
  },
  {
    name: "Asian Cinemas",
    city: "Bangalore",
    movies: [
      { title: "RRR", rating: 4.8, showTimes: ["2PM", "6PM"] },
      { title: "Pushpa", rating: 4.3, showTimes: ["12PM", "8PM"] },
    ],
  },
];


