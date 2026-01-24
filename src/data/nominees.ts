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

// All images verified from TMDB - January 2026
export const categories: Category[] = [
  {
    name: "Best Picture",
    icon: "🏆",
    nominees: [
      { title: "Bugonia", image: "https://image.tmdb.org/t/p/w500/oxgsAQDAAxA92mFGYCZllgWkH9J.jpg", details: "Yorgos Lanthimos" },
      { title: "Frankenstein", image: "https://image.tmdb.org/t/p/w500/g4JtvGlQO7DByTI6frUobqvSL3R.jpg", details: "Guillermo del Toro" },
      { title: "F1", image: "https://image.tmdb.org/t/p/w500/vqBmyAj0Xm9LnS1xe1MSlMAJyHq.jpg", details: "Joseph Kosinski" },
      { title: "Hamnet", image: "https://image.tmdb.org/t/p/w500/61xMzN4h8iLk0hq6oUzr9Ts6GE9.jpg", details: "Chloé Zhao" },
      { title: "Marty Supreme", image: "https://image.tmdb.org/t/p/w500/firAhZA0uQvRL2slp7v3AnOj0ZX.jpg", details: "Josh Safdie" },
      { title: "One Battle After Another", image: "https://image.tmdb.org/t/p/w500/m1jFoahEbeQXtx4zArT2FKdbNIj.jpg", details: "Paul Thomas Anderson" },
      { title: "The Secret Agent", image: "https://image.tmdb.org/t/p/w500/rZqolYhxMEe6TZZTjSmFw9crDTD.jpg", details: "Wagner Moura" },
      { title: "Sentimental Value", image: "https://image.tmdb.org/t/p/w500/pz9NCWxxOk3o0W3v1Zkhawrwb4i.jpg", details: "Joachim Trier" },
      { title: "Sinners", image: "https://image.tmdb.org/t/p/w500/lOfjeJMKS7cOaaTn6q3J0y2ypiA.jpg", details: "Ryan Coogler" },
      { title: "Train Dreams", image: "https://image.tmdb.org/t/p/w500/wfzYOVdafdbD1d3SxNqiBtV2Yhx.jpg", details: "Netflix" },
    ],
  },
  {
    name: "Best Actor",
    icon: "🎭",
    nominees: [
      { title: "Timothée Chalamet", image: "https://image.tmdb.org/t/p/w500/dFxpwRpmzpVfP1zjluH68DeQhyj.jpg", details: "Marty Supreme" },
      { title: "Leonardo DiCaprio", image: "https://image.tmdb.org/t/p/w500/iqPBAdsFdAVCdahQM29kTG6UgD7.jpg", details: "One Battle After Another" },
      { title: "Ethan Hawke", image: "https://image.tmdb.org/t/p/w500/2LoTr6x0TEM7L5em4kSx1VmGDgG.jpg", details: "Blue Moon" },
      { title: "Michael B. Jordan", image: "https://image.tmdb.org/t/p/w500/515xNvaMC6xOEOlo0sFqW69ZqUH.jpg", details: "Sinners" },
      { title: "Wagner Moura", image: "https://image.tmdb.org/t/p/w500/yJjV1ZCQbCSSgRy05FncCKjyaY4.jpg", details: "The Secret Agent" },
    ],
  },
  {
    name: "Best Actress",
    icon: "🎭",
    nominees: [
      { title: "Jessie Buckley", image: "https://image.tmdb.org/t/p/w500/i8IlkFbZqKUgkypZKpdhrw00uqw.jpg", details: "Hamnet" },
      { title: "Rose Byrne", image: "https://image.tmdb.org/t/p/w500/6YauDiiTBwRGC1xnwspPmNvPWUu.jpg", details: "If I Had Legs I'd Kick You" },
      { title: "Kate Hudson", image: "https://image.tmdb.org/t/p/w500/s79lH1QzEg2fkXULKBxRmU9aNr8.jpg", details: "Song Sung Blue" },
      { title: "Renate Reinsve", image: "https://image.tmdb.org/t/p/w500/eepHWTjtKRdGcrtchFb3axdp2eL.jpg", details: "Sentimental Value" },
      { title: "Emma Stone", image: "https://image.tmdb.org/t/p/w500/cZ8a3QvAnj2cgcgVL6g4XaqPzpL.jpg", details: "Bugonia" },
    ],
  },
  {
    name: "Best Supporting Actress",
    icon: "⭐",
    nominees: [
      { title: "Elle Fanning", image: "https://image.tmdb.org/t/p/w500/e8CUyxQSE99y5IOfzSLtHC0B0Ch.jpg", details: "Sentimental Value" },
      { title: "Inga Ibsdotter Lilleaas", image: "", details: "Sentimental Value" },
      { title: "Amy Madigan", image: "", details: "Weapons" },
      { title: "Wunmi Mosaku", image: "https://image.tmdb.org/t/p/w500/mWDsVCo9sBcekrsjUTsoCFLhtYt.jpg", details: "Sinners" },
      { title: "Teyana Taylor", image: "https://image.tmdb.org/t/p/w500/foj8l6GGlZxZXcW6pU5wnNxDjSx.jpg", details: "One Battle After Another" },
    ],
  },
  {
    name: "Best Supporting Actor",
    icon: "⭐",
    nominees: [
      { title: "Benicio del Toro", image: "https://image.tmdb.org/t/p/w500/aYomJWx0B2B8ra6Rmgt8lr0XCrw.jpg", details: "One Battle After Another" },
      { title: "Jacob Elordi", image: "https://image.tmdb.org/t/p/w500/qZNRPWCP2c5d0YaYLTzHXU9Rdoe.jpg", details: "Frankenstein" },
      { title: "Delroy Lindo", image: "https://image.tmdb.org/t/p/w500/kLwUBBmEIdchrLqwsYzgLB2B6q5.jpg", details: "Sinners" },
      { title: "Sean Penn", image: "https://image.tmdb.org/t/p/w500/9glqNTVpFpdN1nFklKaHPUyCwR6.jpg", details: "One Battle After Another" },
      { title: "Stellan Skarsgård", image: "https://image.tmdb.org/t/p/w500/x78BtYHElirO7Iw8bL4m8CnzRDc.jpg", details: "Sentimental Value" },
    ],
  },
  {
    name: "Best Director",
    icon: "🎬",
    nominees: [
      { title: "Paul Thomas Anderson", image: "https://image.tmdb.org/t/p/w500/wKAs2LtLYSUzt3ZZ8pnxMwuEWuR.jpg", details: "One Battle After Another" },
      { title: "Ryan Coogler", image: "https://image.tmdb.org/t/p/w500/dux4DCDaL6c639DTXGiV7nm1wcN.jpg", details: "Sinners" },
      { title: "Josh Safdie", image: "https://image.tmdb.org/t/p/w500/iNyilK3Ag6qeOguc0zysxZXEIpJ.jpg", details: "Marty Supreme" },
      { title: "Joachim Trier", image: "https://image.tmdb.org/t/p/w500/o5KXJRWbzyGYSxDhXsBqbCiZnqU.jpg", details: "Sentimental Value" },
      { title: "Chloé Zhao", image: "https://image.tmdb.org/t/p/w500/r8DmTdOqHbDUydCOVb277rncPTK.jpg", details: "Hamnet" },
    ],
  },
  {
    name: "Best Adapted Screenplay",
    icon: "📝",
    nominees: [
      { title: "Bugonia", image: "https://image.tmdb.org/t/p/w500/oxgsAQDAAxA92mFGYCZllgWkH9J.jpg" },
      { title: "Frankenstein", image: "https://image.tmdb.org/t/p/w500/g4JtvGlQO7DByTI6frUobqvSL3R.jpg" },
      { title: "Hamnet", image: "https://image.tmdb.org/t/p/w500/61xMzN4h8iLk0hq6oUzr9Ts6GE9.jpg" },
      { title: "One Battle After Another", image: "https://image.tmdb.org/t/p/w500/m1jFoahEbeQXtx4zArT2FKdbNIj.jpg" },
      { title: "Train Dreams", image: "https://image.tmdb.org/t/p/w500/wfzYOVdafdbD1d3SxNqiBtV2Yhx.jpg" },
    ],
  },
  {
    name: "Best Original Screenplay",
    icon: "✍️",
    nominees: [
      { title: "Blue Moon", image: "", details: "Ethan Hawke" },
      { title: "It Was Just an Accident", image: "", details: "International" },
      { title: "Marty Supreme", image: "https://image.tmdb.org/t/p/w500/firAhZA0uQvRL2slp7v3AnOj0ZX.jpg" },
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
      { title: "Train Dreams", image: "https://image.tmdb.org/t/p/w500/wfzYOVdafdbD1d3SxNqiBtV2Yhx.jpg", details: "Train Dreams" },
    ],
  },
  {
    name: "Best Original Score",
    icon: "🎵",
    nominees: [
      { title: "Bugonia", image: "https://image.tmdb.org/t/p/w500/oxgsAQDAAxA92mFGYCZllgWkH9J.jpg" },
      { title: "Frankenstein", image: "https://image.tmdb.org/t/p/w500/g4JtvGlQO7DByTI6frUobqvSL3R.jpg" },
      { title: "Hamnet", image: "https://image.tmdb.org/t/p/w500/61xMzN4h8iLk0hq6oUzr9Ts6GE9.jpg" },
      { title: "One Battle After Another", image: "https://image.tmdb.org/t/p/w500/m1jFoahEbeQXtx4zArT2FKdbNIj.jpg" },
      { title: "Sinners", image: "https://image.tmdb.org/t/p/w500/lOfjeJMKS7cOaaTn6q3J0y2ypiA.jpg" },
    ],
  },
  {
    name: "Best International Feature",
    icon: "🌍",
    nominees: [
      { title: "It Was Just an Accident", image: "", details: "France" },
      { title: "Sentimental Value", image: "https://image.tmdb.org/t/p/w500/pz9NCWxxOk3o0W3v1Zkhawrwb4i.jpg", details: "Norway" },
      { title: "Sirât", image: "", details: "Morocco" },
      { title: "The Secret Agent", image: "https://image.tmdb.org/t/p/w500/rZqolYhxMEe6TZZTjSmFw9crDTD.jpg", details: "Brazil" },
      { title: "The Voice of Hind Rajab", image: "", details: "Palestine" },
    ],
  },
  {
    name: "Best Animated Feature",
    icon: "🎨",
    nominees: [
      { title: "Arco", image: "", details: "Animation" },
      { title: "Elio", image: "https://image.tmdb.org/t/p/w500/7z8jDiTZZco9moIKpTUImFtTy7o.jpg", details: "Pixar" },
      { title: "KPop Demon Hunters", image: "", details: "Sony Animation" },
      { title: "Little Amélie", image: "", details: "French Animation" },
      { title: "Zootopia 2", image: "https://image.tmdb.org/t/p/w500/bjUWGw0Ao0qVWxagN3VCwBJHVo6.jpg", details: "Disney" },
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
      { title: "Avatar: Fire and Ash", image: "https://image.tmdb.org/t/p/w500/5bxrxnRaxZooBAxgUVBZ13dpzC7.jpg" },
      { title: "Frankenstein", image: "https://image.tmdb.org/t/p/w500/g4JtvGlQO7DByTI6frUobqvSL3R.jpg" },
      { title: "Hamnet", image: "https://image.tmdb.org/t/p/w500/61xMzN4h8iLk0hq6oUzr9Ts6GE9.jpg" },
      { title: "Marty Supreme", image: "https://image.tmdb.org/t/p/w500/firAhZA0uQvRL2slp7v3AnOj0ZX.jpg" },
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
      { title: "The Ugly Stepsister", image: "https://image.tmdb.org/t/p/w500/rayAREIKtSinuov10GvrZHyXfXH.jpg" },
    ],
  },
  {
    name: "Best Production Design",
    icon: "🏛️",
    nominees: [
      { title: "Frankenstein", image: "https://image.tmdb.org/t/p/w500/g4JtvGlQO7DByTI6frUobqvSL3R.jpg" },
      { title: "Hamnet", image: "https://image.tmdb.org/t/p/w500/61xMzN4h8iLk0hq6oUzr9Ts6GE9.jpg" },
      { title: "Marty Supreme", image: "https://image.tmdb.org/t/p/w500/firAhZA0uQvRL2slp7v3AnOj0ZX.jpg" },
      { title: "One Battle After Another", image: "https://image.tmdb.org/t/p/w500/m1jFoahEbeQXtx4zArT2FKdbNIj.jpg" },
      { title: "Sinners", image: "https://image.tmdb.org/t/p/w500/lOfjeJMKS7cOaaTn6q3J0y2ypiA.jpg" },
    ],
  },
  {
    name: "Best Sound",
    icon: "🔊",
    nominees: [
      { title: "Frankenstein", image: "https://image.tmdb.org/t/p/w500/g4JtvGlQO7DByTI6frUobqvSL3R.jpg" },
      { title: "F1", image: "https://image.tmdb.org/t/p/w500/vqBmyAj0Xm9LnS1xe1MSlMAJyHq.jpg" },
      { title: "One Battle After Another", image: "https://image.tmdb.org/t/p/w500/m1jFoahEbeQXtx4zArT2FKdbNIj.jpg" },
      { title: "Sinners", image: "https://image.tmdb.org/t/p/w500/lOfjeJMKS7cOaaTn6q3J0y2ypiA.jpg" },
      { title: "Sirât", image: "" },
    ],
  },
  {
    name: "Best Film Editing",
    icon: "✂️",
    nominees: [
      { title: "F1", image: "https://image.tmdb.org/t/p/w500/vqBmyAj0Xm9LnS1xe1MSlMAJyHq.jpg" },
      { title: "Marty Supreme", image: "https://image.tmdb.org/t/p/w500/firAhZA0uQvRL2slp7v3AnOj0ZX.jpg" },
      { title: "One Battle After Another", image: "https://image.tmdb.org/t/p/w500/m1jFoahEbeQXtx4zArT2FKdbNIj.jpg" },
      { title: "Sentimental Value", image: "https://image.tmdb.org/t/p/w500/pz9NCWxxOk3o0W3v1Zkhawrwb4i.jpg" },
      { title: "Sinners", image: "https://image.tmdb.org/t/p/w500/lOfjeJMKS7cOaaTn6q3J0y2ypiA.jpg" },
    ],
  },
  {
    name: "Best Cinematography",
    icon: "📷",
    nominees: [
      { title: "Frankenstein", image: "https://image.tmdb.org/t/p/w500/g4JtvGlQO7DByTI6frUobqvSL3R.jpg" },
      { title: "Marty Supreme", image: "https://image.tmdb.org/t/p/w500/firAhZA0uQvRL2slp7v3AnOj0ZX.jpg" },
      { title: "One Battle After Another", image: "https://image.tmdb.org/t/p/w500/m1jFoahEbeQXtx4zArT2FKdbNIj.jpg" },
      { title: "Sinners", image: "https://image.tmdb.org/t/p/w500/lOfjeJMKS7cOaaTn6q3J0y2ypiA.jpg" },
      { title: "Train Dreams", image: "https://image.tmdb.org/t/p/w500/wfzYOVdafdbD1d3SxNqiBtV2Yhx.jpg" },
    ],
  },
  {
    name: "Best Visual Effects",
    icon: "✨",
    nominees: [
      { title: "Avatar: Fire and Ash", image: "https://image.tmdb.org/t/p/w500/5bxrxnRaxZooBAxgUVBZ13dpzC7.jpg" },
      { title: "F1", image: "https://image.tmdb.org/t/p/w500/vqBmyAj0Xm9LnS1xe1MSlMAJyHq.jpg" },
      { title: "Jurassic World Rebirth", image: "", details: "Universal" },
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
      { title: "Hamnet", image: "https://image.tmdb.org/t/p/w500/61xMzN4h8iLk0hq6oUzr9Ts6GE9.jpg" },
      { title: "Marty Supreme", image: "https://image.tmdb.org/t/p/w500/firAhZA0uQvRL2slp7v3AnOj0ZX.jpg" },
      { title: "One Battle After Another", image: "https://image.tmdb.org/t/p/w500/m1jFoahEbeQXtx4zArT2FKdbNIj.jpg" },
      { title: "Sinners", image: "https://image.tmdb.org/t/p/w500/lOfjeJMKS7cOaaTn6q3J0y2ypiA.jpg" },
      { title: "The Secret Agent", image: "https://image.tmdb.org/t/p/w500/rZqolYhxMEe6TZZTjSmFw9crDTD.jpg" },
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
