export interface Nominee {
  title: string;
  image: string;
  details?: string;
}

export interface Category {
  name: string;
  icon: string;
  nominees: Nominee[];
}

export const categories: Category[] = [
  {
    name: "Visual Effects",
    icon: "🎬",
    nominees: [
      { title: "Avatar: Fire and Ash", image: "https://image.tmdb.org/t/p/w500/6YRQ8l86BTrLaRFfe3mWk2pfVzV.jpg", details: "James Cameron" },
      { title: "The Electric State", image: "https://image.tmdb.org/t/p/w500/hKHvTvPGcpRBYkBIcMMdKVH9Bh.jpg", details: "Netflix" },
      { title: "F1", image: "https://image.tmdb.org/t/p/w500/pB3sKdYeKKU9DEyOCb2UfbZnqJL.jpg", details: "Brad Pitt" },
      { title: "Frankenstein", image: "https://image.tmdb.org/t/p/w500/4jRqWaVgJC2XxFaHBCw1D1r3z3K.jpg", details: "Guillermo del Toro" },
      { title: "Jurassic World Rebirth", image: "https://image.tmdb.org/t/p/w500/5T2WC2JLO8hqALsJpjNJlZD3RA5.jpg", details: "Universal" },
      { title: "The Lost Bus", image: "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV9.jpg", details: "Animated" },
      { title: "Sinners", image: "https://image.tmdb.org/t/p/w500/euYIwmwkmz95mnXvufEmbL6ovhZ.jpg", details: "Ryan Coogler" },
      { title: "Superman", image: "https://image.tmdb.org/t/p/w500/pKqbWpXhMbLd6dXsu9FtQR1UCvh.jpg", details: "James Gunn" },
      { title: "Tron: Ares", image: "https://image.tmdb.org/t/p/w500/6UX3RHJr3smrCDkwGgIUbUcFrMb.jpg", details: "Jared Leto" },
      { title: "Wicked: For Good", image: "https://image.tmdb.org/t/p/w500/xDGbZ0JJ3mYaGKy4Nzd9Kph6M9L.jpg", details: "Musical" },
    ],
  },
  {
    name: "Sound",
    icon: "🔊",
    nominees: [
      { title: "Avatar: Fire and Ash", image: "https://image.tmdb.org/t/p/w500/6YRQ8l86BTrLaRFfe3mWk2pfVzV.jpg" },
      { title: "F1", image: "https://image.tmdb.org/t/p/w500/pB3sKdYeKKU9DEyOCb2UfbZnqJL.jpg" },
      { title: "Frankenstein", image: "https://image.tmdb.org/t/p/w500/4jRqWaVgJC2XxFaHBCw1D1r3z3K.jpg" },
      { title: "Mission: Impossible – The Final Reckoning", image: "https://image.tmdb.org/t/p/w500/iQgNGGc3dJbIPuQ5qREg33NOrR.jpg", details: "Tom Cruise" },
      { title: "One Battle After Another", image: "https://image.tmdb.org/t/p/w500/rj2SLQND7RNKDL1G0n1kDZBnpW.jpg" },
      { title: "Sinners", image: "https://image.tmdb.org/t/p/w500/euYIwmwkmz95mnXvufEmbL6ovhZ.jpg" },
      { title: "Sirât", image: "https://image.tmdb.org/t/p/w500/lXhgCODAbBXL5buk9yEmTpOoOgR.jpg", details: "International" },
      { title: "Springsteen: Deliver Me from Nowhere", image: "https://image.tmdb.org/t/p/w500/tGf5cMVLrrg0hPB5LPMBp8Cwdsg.jpg", details: "Jeremy Allen White" },
      { title: "Superman", image: "https://image.tmdb.org/t/p/w500/pKqbWpXhMbLd6dXsu9FtQR1UCvh.jpg" },
      { title: "Wicked: For Good", image: "https://image.tmdb.org/t/p/w500/xDGbZ0JJ3mYaGKy4Nzd9Kph6M9L.jpg" },
    ],
  },
  {
    name: "Makeup & Hairstyling",
    icon: "💄",
    nominees: [
      { title: "The Alto Knights", image: "https://image.tmdb.org/t/p/w500/7Nwf66NS9dpHGOHcYnKf8BIHVRA.jpg", details: "Robert De Niro" },
      { title: "Frankenstein", image: "https://image.tmdb.org/t/p/w500/4jRqWaVgJC2XxFaHBCw1D1r3z3K.jpg" },
      { title: "Kokuho", image: "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV9.jpg" },
      { title: "Marty Supreme", image: "https://image.tmdb.org/t/p/w500/cC6i0sSLIfuqNfhv9lp3a0Gti9x.jpg", details: "Timothée Chalamet" },
      { title: "Nuremberg", image: "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV9.jpg" },
      { title: "One Battle After Another", image: "https://image.tmdb.org/t/p/w500/rj2SLQND7RNKDL1G0n1kDZBnpW.jpg" },
      { title: "Sinners", image: "https://image.tmdb.org/t/p/w500/euYIwmwkmz95mnXvufEmbL6ovhZ.jpg" },
      { title: "The Smashing Machine", image: "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV9.jpg", details: "Dwayne Johnson" },
      { title: "The Ugly Stepsister", image: "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV9.jpg" },
      { title: "Wicked: For Good", image: "https://image.tmdb.org/t/p/w500/xDGbZ0JJ3mYaGKy4Nzd9Kph6M9L.jpg" },
    ],
  },
  {
    name: "Original Score",
    icon: "🎵",
    nominees: [
      { title: "Avatar: Fire and Ash", image: "https://image.tmdb.org/t/p/w500/6YRQ8l86BTrLaRFfe3mWk2pfVzV.jpg", details: "James Horner Legacy" },
      { title: "Sinners", image: "https://image.tmdb.org/t/p/w500/euYIwmwkmz95mnXvufEmbL6ovhZ.jpg", details: "Ludwig Göransson" },
      { title: "Wicked: For Good", image: "https://image.tmdb.org/t/p/w500/xDGbZ0JJ3mYaGKy4Nzd9Kph6M9L.jpg", details: "John Powell" },
      { title: "Superman", image: "https://image.tmdb.org/t/p/w500/pKqbWpXhMbLd6dXsu9FtQR1UCvh.jpg", details: "John Murphy" },
      { title: "Frankenstein", image: "https://image.tmdb.org/t/p/w500/4jRqWaVgJC2XxFaHBCw1D1r3z3K.jpg", details: "Alexandre Desplat" },
    ],
  },
  {
    name: "Original Song",
    icon: "🎤",
    nominees: [
      { title: "Sinners", image: "https://image.tmdb.org/t/p/w500/euYIwmwkmz95mnXvufEmbL6ovhZ.jpg", details: "2 songs nominated" },
      { title: "Wicked: For Good", image: "https://image.tmdb.org/t/p/w500/xDGbZ0JJ3mYaGKy4Nzd9Kph6M9L.jpg", details: "2 songs nominated" },
    ],
  },
];

export const ceremonyInfo = {
  name: "98th Academy Awards",
  date: "March 15, 2026",
  host: "Conan O'Brien",
  nominationsAnnouncement: "January 22, 2026",
  venue: "Dolby Theatre, Hollywood",
};
