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
      { title: "Avatar: Fire and Ash", image: "https://image.tmdb.org/t/p/w500/bRBeSHfGHwkEpImlhxPmOcUsaeg.jpg", details: "James Cameron" },
      { title: "The Electric State", image: "https://image.tmdb.org/t/p/w500/sI2NiMU8o65hmIMY0JI9CjJ0p7f.jpg", details: "Netflix" },
      { title: "F1", image: "https://image.tmdb.org/t/p/w500/vqBmyAj0Xm9LnS1xe1MSlMAJyHq.jpg", details: "Brad Pitt" },
      { title: "Frankenstein", image: "https://image.tmdb.org/t/p/w500/g4JtvGlQO7DByTI6frUobqvSL3R.jpg", details: "Guillermo del Toro" },
      { title: "Jurassic World Rebirth", image: "https://image.tmdb.org/t/p/w500/1RICxzeoNCAO5NpcRMIgg1XT6fm.jpg", details: "Universal" },
      { title: "The Lost Bus", image: "", details: "Animated" },
      { title: "Sinners", image: "https://image.tmdb.org/t/p/w500/lOfjeJMKS7cOaaTn6q3J0y2ypiA.jpg", details: "Ryan Coogler" },
      { title: "Superman", image: "https://image.tmdb.org/t/p/w500/wPLysNDLffQLOVebZQCbXJEv6E6.jpg", details: "James Gunn" },
      { title: "Tron: Ares", image: "https://image.tmdb.org/t/p/w500/chpWmskl3aKm1aTZqUHRCtviwPy.jpg", details: "Jared Leto" },
      { title: "Wicked: For Good", image: "https://image.tmdb.org/t/p/w500/si9tolnefLSUKaqQEGz1bWArOaL.jpg", details: "Musical" },
    ],
  },
  {
    name: "Sound",
    icon: "🔊",
    nominees: [
      { title: "Avatar: Fire and Ash", image: "https://image.tmdb.org/t/p/w500/bRBeSHfGHwkEpImlhxPmOcUsaeg.jpg" },
      { title: "F1", image: "https://image.tmdb.org/t/p/w500/vqBmyAj0Xm9LnS1xe1MSlMAJyHq.jpg" },
      { title: "Frankenstein", image: "https://image.tmdb.org/t/p/w500/g4JtvGlQO7DByTI6frUobqvSL3R.jpg" },
      { title: "Mission: Impossible – The Final Reckoning", image: "https://image.tmdb.org/t/p/w500/z53D72EAOxGRqdr7KXXWp9dJiDe.jpg", details: "Tom Cruise" },
      { title: "One Battle After Another", image: "", details: "Action" },
      { title: "Sinners", image: "https://image.tmdb.org/t/p/w500/lOfjeJMKS7cOaaTn6q3J0y2ypiA.jpg" },
      { title: "Sirât", image: "", details: "International" },
      { title: "Springsteen: Deliver Me from Nowhere", image: "", details: "Jeremy Allen White" },
      { title: "Superman", image: "https://image.tmdb.org/t/p/w500/wPLysNDLffQLOVebZQCbXJEv6E6.jpg" },
      { title: "Wicked: For Good", image: "https://image.tmdb.org/t/p/w500/si9tolnefLSUKaqQEGz1bWArOaL.jpg" },
    ],
  },
  {
    name: "Makeup & Hairstyling",
    icon: "💄",
    nominees: [
      { title: "The Alto Knights", image: "https://image.tmdb.org/t/p/w500/epGF8vv3caKLm6X8PKbD5xirFLa.jpg", details: "Robert De Niro" },
      { title: "Frankenstein", image: "https://image.tmdb.org/t/p/w500/g4JtvGlQO7DByTI6frUobqvSL3R.jpg" },
      { title: "Kokuho", image: "", details: "International" },
      { title: "Marty Supreme", image: "", details: "Timothée Chalamet" },
      { title: "Nuremberg", image: "", details: "Historical" },
      { title: "One Battle After Another", image: "", details: "Action" },
      { title: "Sinners", image: "https://image.tmdb.org/t/p/w500/lOfjeJMKS7cOaaTn6q3J0y2ypiA.jpg" },
      { title: "The Smashing Machine", image: "", details: "Dwayne Johnson" },
      { title: "The Ugly Stepsister", image: "", details: "Fantasy" },
      { title: "Wicked: For Good", image: "https://image.tmdb.org/t/p/w500/si9tolnefLSUKaqQEGz1bWArOaL.jpg" },
    ],
  },
  {
    name: "Original Score",
    icon: "🎵",
    nominees: [
      { title: "Avatar: Fire and Ash", image: "https://image.tmdb.org/t/p/w500/bRBeSHfGHwkEpImlhxPmOcUsaeg.jpg", details: "James Horner Legacy" },
      { title: "Sinners", image: "https://image.tmdb.org/t/p/w500/lOfjeJMKS7cOaaTn6q3J0y2ypiA.jpg", details: "Ludwig Göransson" },
      { title: "Wicked: For Good", image: "https://image.tmdb.org/t/p/w500/si9tolnefLSUKaqQEGz1bWArOaL.jpg", details: "John Powell" },
      { title: "Superman", image: "https://image.tmdb.org/t/p/w500/wPLysNDLffQLOVebZQCbXJEv6E6.jpg", details: "John Murphy" },
      { title: "Frankenstein", image: "https://image.tmdb.org/t/p/w500/g4JtvGlQO7DByTI6frUobqvSL3R.jpg", details: "Alexandre Desplat" },
    ],
  },
  {
    name: "Original Song",
    icon: "🎤",
    nominees: [
      { title: "Sinners", image: "https://image.tmdb.org/t/p/w500/lOfjeJMKS7cOaaTn6q3J0y2ypiA.jpg", details: "2 songs nominated" },
      { title: "Wicked: For Good", image: "https://image.tmdb.org/t/p/w500/si9tolnefLSUKaqQEGz1bWArOaL.jpg", details: "2 songs nominated" },
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
