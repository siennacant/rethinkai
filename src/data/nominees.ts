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

// Using TMDB image paths where available, empty strings for fallback UI
export const categories: Category[] = [
  {
    name: "Best Picture",
    icon: "🏆",
    nominees: [
      { title: "Bugonia", image: "https://image.tmdb.org/t/p/w500/vJU3rXSP9hwUuLeq8IpfsJShLOk.jpg", details: "Yorgos Lanthimos" },
      { title: "Frankenstein", image: "https://image.tmdb.org/t/p/w500/g4JtvGlQO7DByTI6frUobqvSL3R.jpg", details: "Guillermo del Toro" },
      { title: "F1", image: "https://image.tmdb.org/t/p/w500/pB3sKdYeKKU9DEyOCb2UfbZnqJL.jpg", details: "Joseph Kosinski" },
      { title: "Hamnet", image: "https://image.tmdb.org/t/p/w500/7qxD4daoCNVcRMrfGKiDO3raCvd.jpg", details: "Chloé Zhao" },
      { title: "Marty Supreme", image: "https://image.tmdb.org/t/p/w500/rB3LgUPcxbLpSRl9fVLnOGOcBB4.jpg", details: "Josh Safdie" },
      { title: "One Battle After Another", image: "https://image.tmdb.org/t/p/w500/dVxnH8PjMUyNjyNfVE9DQSPN5xl.jpg", details: "Paul Thomas Anderson" },
      { title: "The Secret Agent", image: "", details: "Drama" },
      { title: "Sentimental Value", image: "https://image.tmdb.org/t/p/w500/pz9NCWxxOk3o0W3v1Zkhawrwb4i.jpg", details: "Joachim Trier" },
      { title: "Sinners", image: "https://image.tmdb.org/t/p/w500/lOfjeJMKS7cOaaTn6q3J0y2ypiA.jpg", details: "Ryan Coogler" },
      { title: "Train Dreams", image: "", details: "Drama" },
    ],
  },
  {
    name: "Best Actor",
    icon: "🎭",
    nominees: [
      { title: "Timothée Chalamet", image: "https://image.tmdb.org/t/p/w500/BE2sdjpgsa2rNTFa66f7upkaOP.jpg", details: "Marty Supreme" },
      { title: "Leonardo DiCaprio", image: "https://image.tmdb.org/t/p/w500/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg", details: "One Battle After Another" },
      { title: "Ethan Hawke", image: "https://image.tmdb.org/t/p/w500/oGi4LYoLfKxq7A0odZnE2hnHBsm.jpg", details: "Blue Moon" },
      { title: "Michael B. Jordan", image: "https://image.tmdb.org/t/p/w500/hGjSRuEUi4IJsXjyeVwEYcmZ5wg.jpg", details: "Sinners" },
      { title: "Wagner Moura", image: "https://image.tmdb.org/t/p/w500/yEwDK8QsaNvbnkXqleF4sZjBqOH.jpg", details: "The Secret Agent" },
    ],
  },
  {
    name: "Best Actress",
    icon: "🎭",
    nominees: [
      { title: "Jessie Buckley", image: "https://image.tmdb.org/t/p/w500/onEAYRVsO0Kl7MqAJrJXue3J9kS.jpg", details: "Hamnet" },
      { title: "Rose Byrne", image: "https://image.tmdb.org/t/p/w500/lneqMOtWjXkC0DFb8KPJe6p5BPU.jpg", details: "If I Had Legs I'd Kick You" },
      { title: "Kate Hudson", image: "https://image.tmdb.org/t/p/w500/ndBZCfQKMdPfBfXGddq6f9CSgYv.jpg", details: "Song Sung Blue" },
      { title: "Renate Reinsve", image: "https://image.tmdb.org/t/p/w500/ijcTwukR98GjQ0DuKiphmwJePtH.jpg", details: "Sentimental Value" },
      { title: "Emma Stone", image: "https://image.tmdb.org/t/p/w500/eWjkPYeXxPhEpkE6uMmVfq0kbOi.jpg", details: "Bugonia" },
    ],
  },
  {
    name: "Best Supporting Actress",
    icon: "⭐",
    nominees: [
      { title: "Elle Fanning", image: "https://image.tmdb.org/t/p/w500/fKJfKy8Iitm1iwrdwGV60jDbqbE.jpg", details: "Sentimental Value" },
      { title: "Inga Ibsdotter Lilleaas", image: "", details: "Sentimental Value" },
      { title: "Amy Madigan", image: "https://image.tmdb.org/t/p/w500/xQqsyqjzxYfHdOjxkfJGvs77E1n.jpg", details: "Weapons" },
      { title: "Wunmi Mosaku", image: "https://image.tmdb.org/t/p/w500/kPBavLvWCTxHZwdG0jYu7AAQL7A.jpg", details: "Sinners" },
      { title: "Teyana Taylor", image: "https://image.tmdb.org/t/p/w500/sgalPdO2FUjQCGldhCvvOLHVwfb.jpg", details: "One Battle After Another" },
    ],
  },
  {
    name: "Best Supporting Actor",
    icon: "⭐",
    nominees: [
      { title: "Benicio del Toro", image: "https://image.tmdb.org/t/p/w500/l1k13Z3pqEWJ8jj5tGpP9t3gXb1.jpg", details: "One Battle After Another" },
      { title: "Jacob Elordi", image: "https://image.tmdb.org/t/p/w500/ceFvkLER0aNPvUMilaSz6onJTlD.jpg", details: "Frankenstein" },
      { title: "Delroy Lindo", image: "https://image.tmdb.org/t/p/w500/8RNzXPpX5gwoHkFoW0nwXgd40nb.jpg", details: "Sinners" },
      { title: "Sean Penn", image: "https://image.tmdb.org/t/p/w500/eFjFAUorzVJPXAOAWwdbqREGrqC.jpg", details: "One Battle After Another" },
      { title: "Stellan Skarsgård", image: "https://image.tmdb.org/t/p/w500/kHLkGjPUtRqjf2v1VSxCpkmDO7U.jpg", details: "Sentimental Value" },
    ],
  },
  {
    name: "Best Director",
    icon: "🎬",
    nominees: [
      { title: "Paul Thomas Anderson", image: "https://image.tmdb.org/t/p/w500/jM1SJRmER1iWmPSwrk8H67mjah7.jpg", details: "One Battle After Another" },
      { title: "Ryan Coogler", image: "https://image.tmdb.org/t/p/w500/jNINoQALiPEp5NlLHLLb2sLNtI9.jpg", details: "Sinners" },
      { title: "Josh Safdie", image: "https://image.tmdb.org/t/p/w500/1XbIunPmE0jmajdBhKgQ3CiOo8H.jpg", details: "Marty Supreme" },
      { title: "Joachim Trier", image: "https://image.tmdb.org/t/p/w500/nkXUJDMXHpdH7IrnfHqgWXhHuJP.jpg", details: "Sentimental Value" },
      { title: "Chloé Zhao", image: "https://image.tmdb.org/t/p/w500/5GtAAzkLyPrCavhM9Rg41V2CLHD.jpg", details: "Hamnet" },
    ],
  },
  {
    name: "Best Adapted Screenplay",
    icon: "📝",
    nominees: [
      { title: "Bugonia", image: "https://image.tmdb.org/t/p/w500/vJU3rXSP9hwUuLeq8IpfsJShLOk.jpg" },
      { title: "Frankenstein", image: "https://image.tmdb.org/t/p/w500/g4JtvGlQO7DByTI6frUobqvSL3R.jpg" },
      { title: "Hamnet", image: "https://image.tmdb.org/t/p/w500/7qxD4daoCNVcRMrfGKiDO3raCvd.jpg" },
      { title: "One Battle After Another", image: "https://image.tmdb.org/t/p/w500/dVxnH8PjMUyNjyNfVE9DQSPN5xl.jpg" },
      { title: "Train Dreams", image: "" },
    ],
  },
  {
    name: "Best Original Screenplay",
    icon: "✍️",
    nominees: [
      { title: "Blue Moon", image: "" },
      { title: "It Was Just an Accident", image: "" },
      { title: "Marty Supreme", image: "https://image.tmdb.org/t/p/w500/rB3LgUPcxbLpSRl9fVLnOGOcBB4.jpg" },
      { title: "Sentimental Value", image: "https://image.tmdb.org/t/p/w500/pz9NCWxxOk3o0W3v1Zkhawrwb4i.jpg" },
      { title: "Sinners", image: "https://image.tmdb.org/t/p/w500/lOfjeJMKS7cOaaTn6q3J0y2ypiA.jpg" },
    ],
  },
  {
    name: "Best Original Song",
    icon: "🎤",
    nominees: [
      { title: "Dear Me", image: "", details: "Diane Warren: Relentless" },
      { title: "Golden", image: "", details: "KPop Demon Hunters" },
      { title: "I Lied to You", image: "https://image.tmdb.org/t/p/w500/lOfjeJMKS7cOaaTn6q3J0y2ypiA.jpg", details: "Sinners" },
      { title: "Sweet Dreams of Joy", image: "", details: "Viva Verdi!" },
      { title: "Train Dreams", image: "", details: "Train Dreams" },
    ],
  },
  {
    name: "Best Original Score",
    icon: "🎵",
    nominees: [
      { title: "Bugonia", image: "https://image.tmdb.org/t/p/w500/vJU3rXSP9hwUuLeq8IpfsJShLOk.jpg" },
      { title: "Frankenstein", image: "https://image.tmdb.org/t/p/w500/g4JtvGlQO7DByTI6frUobqvSL3R.jpg" },
      { title: "Hamnet", image: "https://image.tmdb.org/t/p/w500/7qxD4daoCNVcRMrfGKiDO3raCvd.jpg" },
      { title: "One Battle After Another", image: "https://image.tmdb.org/t/p/w500/dVxnH8PjMUyNjyNfVE9DQSPN5xl.jpg" },
      { title: "Sinners", image: "https://image.tmdb.org/t/p/w500/lOfjeJMKS7cOaaTn6q3J0y2ypiA.jpg" },
    ],
  },
  {
    name: "Best International Feature",
    icon: "🌍",
    nominees: [
      { title: "It Was Just an Accident", image: "" },
      { title: "Sentimental Value", image: "https://image.tmdb.org/t/p/w500/pz9NCWxxOk3o0W3v1Zkhawrwb4i.jpg", details: "Norway" },
      { title: "Sirât", image: "", details: "Morocco" },
      { title: "The Secret Agent", image: "", details: "Brazil" },
      { title: "The Voice of Hind Rajab", image: "", details: "Palestine" },
    ],
  },
  {
    name: "Best Animated Feature",
    icon: "🎨",
    nominees: [
      { title: "Arco", image: "" },
      { title: "Elio", image: "https://image.tmdb.org/t/p/w500/aUMUsFxSigUWW1ArcWtZ6OZGD4i.jpg", details: "Pixar" },
      { title: "KPop Demon Hunters", image: "", details: "Sony Animation" },
      { title: "Little Amélie", image: "", details: "French Animation" },
      { title: "Zootopia 2", image: "https://image.tmdb.org/t/p/w500/jPsH1JWUWWA8tKmTkPBNgJxyRGA.jpg", details: "Disney" },
    ],
  },
  {
    name: "Best Documentary Feature",
    icon: "🎥",
    nominees: [
      { title: "Come See Me in the Good Light", image: "" },
      { title: "Cutting Through the Rocks", image: "" },
      { title: "Mr. Nobody Against Putin", image: "" },
      { title: "The Alabama Solution", image: "" },
      { title: "The Perfect Neighbor", image: "" },
    ],
  },
  {
    name: "Best Costume Design",
    icon: "👗",
    nominees: [
      { title: "Avatar: Fire and Ash", image: "https://image.tmdb.org/t/p/w500/bRBeSHfGHwkEpImlhxPmOcUsaeg.jpg" },
      { title: "Frankenstein", image: "https://image.tmdb.org/t/p/w500/g4JtvGlQO7DByTI6frUobqvSL3R.jpg" },
      { title: "Hamnet", image: "https://image.tmdb.org/t/p/w500/7qxD4daoCNVcRMrfGKiDO3raCvd.jpg" },
      { title: "Marty Supreme", image: "https://image.tmdb.org/t/p/w500/rB3LgUPcxbLpSRl9fVLnOGOcBB4.jpg" },
      { title: "Sinners", image: "https://image.tmdb.org/t/p/w500/lOfjeJMKS7cOaaTn6q3J0y2ypiA.jpg" },
    ],
  },
  {
    name: "Best Makeup & Hairstyling",
    icon: "💄",
    nominees: [
      { title: "Frankenstein", image: "https://image.tmdb.org/t/p/w500/g4JtvGlQO7DByTI6frUobqvSL3R.jpg" },
      { title: "Kokuho", image: "" },
      { title: "Sinners", image: "https://image.tmdb.org/t/p/w500/lOfjeJMKS7cOaaTn6q3J0y2ypiA.jpg" },
      { title: "The Smashing Machine", image: "" },
      { title: "The Ugly Stepsister", image: "https://image.tmdb.org/t/p/w500/9wpJrfKrJ4c1RkC1sHrKrvHb3GR.jpg" },
    ],
  },
  {
    name: "Best Production Design",
    icon: "🏛️",
    nominees: [
      { title: "Frankenstein", image: "https://image.tmdb.org/t/p/w500/g4JtvGlQO7DByTI6frUobqvSL3R.jpg" },
      { title: "Hamnet", image: "https://image.tmdb.org/t/p/w500/7qxD4daoCNVcRMrfGKiDO3raCvd.jpg" },
      { title: "Marty Supreme", image: "https://image.tmdb.org/t/p/w500/rB3LgUPcxbLpSRl9fVLnOGOcBB4.jpg" },
      { title: "One Battle After Another", image: "https://image.tmdb.org/t/p/w500/dVxnH8PjMUyNjyNfVE9DQSPN5xl.jpg" },
      { title: "Sinners", image: "https://image.tmdb.org/t/p/w500/lOfjeJMKS7cOaaTn6q3J0y2ypiA.jpg" },
    ],
  },
  {
    name: "Best Sound",
    icon: "🔊",
    nominees: [
      { title: "Frankenstein", image: "https://image.tmdb.org/t/p/w500/g4JtvGlQO7DByTI6frUobqvSL3R.jpg" },
      { title: "F1", image: "https://image.tmdb.org/t/p/w500/pB3sKdYeKKU9DEyOCb2UfbZnqJL.jpg" },
      { title: "One Battle After Another", image: "https://image.tmdb.org/t/p/w500/dVxnH8PjMUyNjyNfVE9DQSPN5xl.jpg" },
      { title: "Sinners", image: "https://image.tmdb.org/t/p/w500/lOfjeJMKS7cOaaTn6q3J0y2ypiA.jpg" },
      { title: "Sirât", image: "" },
    ],
  },
  {
    name: "Best Film Editing",
    icon: "✂️",
    nominees: [
      { title: "F1", image: "https://image.tmdb.org/t/p/w500/pB3sKdYeKKU9DEyOCb2UfbZnqJL.jpg" },
      { title: "Marty Supreme", image: "https://image.tmdb.org/t/p/w500/rB3LgUPcxbLpSRl9fVLnOGOcBB4.jpg" },
      { title: "One Battle After Another", image: "https://image.tmdb.org/t/p/w500/dVxnH8PjMUyNjyNfVE9DQSPN5xl.jpg" },
      { title: "Sentimental Value", image: "https://image.tmdb.org/t/p/w500/pz9NCWxxOk3o0W3v1Zkhawrwb4i.jpg" },
      { title: "Sinners", image: "https://image.tmdb.org/t/p/w500/lOfjeJMKS7cOaaTn6q3J0y2ypiA.jpg" },
    ],
  },
  {
    name: "Best Cinematography",
    icon: "📷",
    nominees: [
      { title: "Frankenstein", image: "https://image.tmdb.org/t/p/w500/g4JtvGlQO7DByTI6frUobqvSL3R.jpg" },
      { title: "Marty Supreme", image: "https://image.tmdb.org/t/p/w500/rB3LgUPcxbLpSRl9fVLnOGOcBB4.jpg" },
      { title: "One Battle After Another", image: "https://image.tmdb.org/t/p/w500/dVxnH8PjMUyNjyNfVE9DQSPN5xl.jpg" },
      { title: "Sinners", image: "https://image.tmdb.org/t/p/w500/lOfjeJMKS7cOaaTn6q3J0y2ypiA.jpg" },
      { title: "Train Dreams", image: "" },
    ],
  },
  {
    name: "Best Visual Effects",
    icon: "✨",
    nominees: [
      { title: "Avatar: Fire and Ash", image: "https://image.tmdb.org/t/p/w500/bRBeSHfGHwkEpImlhxPmOcUsaeg.jpg" },
      { title: "F1", image: "https://image.tmdb.org/t/p/w500/pB3sKdYeKKU9DEyOCb2UfbZnqJL.jpg" },
      { title: "Jurassic World Rebirth", image: "https://image.tmdb.org/t/p/w500/7VXz3YJdGJi4TIvw6X5WgYJ5Z5R.jpg" },
      { title: "Sinners", image: "https://image.tmdb.org/t/p/w500/lOfjeJMKS7cOaaTn6q3J0y2ypiA.jpg" },
      { title: "The Lost Bus", image: "" },
    ],
  },
  {
    name: "Best Live Action Short",
    icon: "🎞️",
    nominees: [
      { title: "A Friend of Dorothy", image: "" },
      { title: "Butcher's Stain", image: "" },
      { title: "Jane Austen's Period Drama", image: "" },
      { title: "The Singers", image: "" },
      { title: "Two People Exchanging Saliva", image: "" },
    ],
  },
  {
    name: "Best Animated Short",
    icon: "🦋",
    nominees: [
      { title: "Butterfly", image: "" },
      { title: "Forevergreen", image: "" },
      { title: "Retirement Plan", image: "" },
      { title: "The Girl Who Cried Pearls", image: "" },
      { title: "The Three Sisters", image: "" },
    ],
  },
  {
    name: "Best Documentary Short",
    icon: "📹",
    nominees: [
      { title: "All the Empty Rooms", image: "" },
      { title: "Armed Only with a Camera", image: "", details: "Brent Renaud" },
      { title: "Children No More", image: "", details: "Were and Are Gone" },
      { title: "The Devil Is Busy", image: "" },
      { title: "Perfectly a Strangeness", image: "" },
    ],
  },
  {
    name: "Best Casting",
    icon: "🎯",
    nominees: [
      { title: "Hamnet", image: "https://image.tmdb.org/t/p/w500/7qxD4daoCNVcRMrfGKiDO3raCvd.jpg" },
      { title: "Marty Supreme", image: "https://image.tmdb.org/t/p/w500/rB3LgUPcxbLpSRl9fVLnOGOcBB4.jpg" },
      { title: "One Battle After Another", image: "https://image.tmdb.org/t/p/w500/dVxnH8PjMUyNjyNfVE9DQSPN5xl.jpg" },
      { title: "Sinners", image: "https://image.tmdb.org/t/p/w500/lOfjeJMKS7cOaaTn6q3J0y2ypiA.jpg" },
      { title: "The Secret Agent", image: "" },
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
