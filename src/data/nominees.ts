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
    name: "Best Picture",
    icon: "🏆",
    nominees: [
      { title: "Bugonia", image: "https://image.tmdb.org/t/p/w500/vJU3rXSP9hwUuLeq8IpfsJShLOk.jpg", details: "Yorgos Lanthimos" },
      { title: "Frankenstein", image: "https://image.tmdb.org/t/p/w500/g4JtvGlQO7DByTI6frUobqvSL3R.jpg", details: "Guillermo del Toro" },
      { title: "F1", image: "https://image.tmdb.org/t/p/w500/vqBmyAj0Xm9LnS1xe1MSlMAJyHq.jpg", details: "Joseph Kosinski" },
      { title: "Hamnet", image: "https://image.tmdb.org/t/p/w500/hamnet.jpg", details: "Chloé Zhao" },
      { title: "Marty Supreme", image: "https://image.tmdb.org/t/p/w500/marty.jpg", details: "Josh Safdie" },
      { title: "One Battle After Another", image: "https://image.tmdb.org/t/p/w500/onebattle.jpg", details: "Paul Thomas Anderson" },
      { title: "The Secret Agent", image: "https://image.tmdb.org/t/p/w500/secretagent.jpg", details: "Drama" },
      { title: "Sentimental Value", image: "https://image.tmdb.org/t/p/w500/sentimental.jpg", details: "Joachim Trier" },
      { title: "Sinners", image: "https://image.tmdb.org/t/p/w500/lOfjeJMKS7cOaaTn6q3J0y2ypiA.jpg", details: "Ryan Coogler" },
      { title: "Train Dreams", image: "https://image.tmdb.org/t/p/w500/traindreams.jpg", details: "Drama" },
    ],
  },
  {
    name: "Best Actor",
    icon: "🎭",
    nominees: [
      { title: "Timothée Chalamet", image: "https://image.tmdb.org/t/p/w500/BE2sdjpgsa2rNTFa66f7upkaOP.jpg", details: "Marty Supreme" },
      { title: "Leonardo DiCaprio", image: "https://image.tmdb.org/t/p/w500/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg", details: "One Battle After Another" },
      { title: "Ethan Hawke", image: "https://image.tmdb.org/t/p/w500/ykWuiP8Q5lDlJBWe6dKRLb5FQHM.jpg", details: "Blue Moon" },
      { title: "Michael B. Jordan", image: "https://image.tmdb.org/t/p/w500/lldeQ91GdIVVULr56o9FIGmF1N5.jpg", details: "Sinners" },
      { title: "Wagner Moura", image: "https://image.tmdb.org/t/p/w500/x0B2HiJdBjKQbOBOdMiP7uDl9S.jpg", details: "The Secret Agent" },
    ],
  },
  {
    name: "Best Actress",
    icon: "🎭",
    nominees: [
      { title: "Jessie Buckley", image: "https://image.tmdb.org/t/p/w500/soExetHKRUJIydCqWfVRPQKmVI2.jpg", details: "Hamnet" },
      { title: "Rose Byrne", image: "https://image.tmdb.org/t/p/w500/7d66RFAdFqyLM6Th8bWYKPCwZNF.jpg", details: "If I Had Legs I'd Kick You" },
      { title: "Kate Hudson", image: "https://image.tmdb.org/t/p/w500/6TDsROy0Tn2mYZyhrTlUGQ3MXrt.jpg", details: "Song Sung Blue" },
      { title: "Renate Reinsve", image: "https://image.tmdb.org/t/p/w500/zn5HB2rEXWSKtvavPCgSqj7JtFq.jpg", details: "Sentimental Value" },
      { title: "Emma Stone", image: "https://image.tmdb.org/t/p/w500/eWjkPYeXxPhEpkE6uMmVfq0kbOi.jpg", details: "Bugonia" },
    ],
  },
  {
    name: "Best Supporting Actress",
    icon: "⭐",
    nominees: [
      { title: "Elle Fanning", image: "https://image.tmdb.org/t/p/w500/eS72FBPYuGCRlvvfUvduzngdGy0.jpg", details: "Sentimental Value" },
      { title: "Inga Ibsdotter Lilleaas", image: "https://image.tmdb.org/t/p/w500/inga.jpg", details: "Sentimental Value" },
      { title: "Amy Madigan", image: "https://image.tmdb.org/t/p/w500/amy.jpg", details: "Weapons" },
      { title: "Wunmi Mosaku", image: "https://image.tmdb.org/t/p/w500/wunmi.jpg", details: "Sinners" },
      { title: "Teyana Taylor", image: "https://image.tmdb.org/t/p/w500/teyana.jpg", details: "One Battle After Another" },
    ],
  },
  {
    name: "Best Supporting Actor",
    icon: "⭐",
    nominees: [
      { title: "Benicio del Toro", image: "https://image.tmdb.org/t/p/w500/wSk0E0AOLsYdcNwtDL0RzMfknS9.jpg", details: "One Battle After Another" },
      { title: "Jacob Elordi", image: "https://image.tmdb.org/t/p/w500/9ggCgWyG2a6AkKmwhSzCTFVINsv.jpg", details: "Frankenstein" },
      { title: "Delroy Lindo", image: "https://image.tmdb.org/t/p/w500/delroy.jpg", details: "Sinners" },
      { title: "Sean Penn", image: "https://image.tmdb.org/t/p/w500/gJ0pMN4u7HwRlldNfT5SQTNqCla.jpg", details: "One Battle After Another" },
      { title: "Stellan Skarsgård", image: "https://image.tmdb.org/t/p/w500/4dnmjgRUVpGjChbLsA0q34rS3h8.jpg", details: "Sentimental Value" },
    ],
  },
  {
    name: "Best Director",
    icon: "🎬",
    nominees: [
      { title: "Paul Thomas Anderson", image: "https://image.tmdb.org/t/p/w500/tMf8VVCsphfQnMoQSbJQg2CJJQx.jpg", details: "One Battle After Another" },
      { title: "Ryan Coogler", image: "https://image.tmdb.org/t/p/w500/hgFgMNKSJqwlBq6uxabc2rPPe8a.jpg", details: "Sinners" },
      { title: "Josh Safdie", image: "https://image.tmdb.org/t/p/w500/josh.jpg", details: "Marty Supreme" },
      { title: "Joachim Trier", image: "https://image.tmdb.org/t/p/w500/joachim.jpg", details: "Sentimental Value" },
      { title: "Chloé Zhao", image: "https://image.tmdb.org/t/p/w500/2xqoRU39b7rIVRkxQsA1AmHmWJZ.jpg", details: "Hamnet" },
    ],
  },
  {
    name: "Best Adapted Screenplay",
    icon: "📝",
    nominees: [
      { title: "Bugonia", image: "https://image.tmdb.org/t/p/w500/vJU3rXSP9hwUuLeq8IpfsJShLOk.jpg" },
      { title: "Frankenstein", image: "https://image.tmdb.org/t/p/w500/g4JtvGlQO7DByTI6frUobqvSL3R.jpg" },
      { title: "Hamnet", image: "https://image.tmdb.org/t/p/w500/hamnet.jpg" },
      { title: "One Battle After Another", image: "https://image.tmdb.org/t/p/w500/onebattle.jpg" },
      { title: "Train Dreams", image: "https://image.tmdb.org/t/p/w500/traindreams.jpg" },
    ],
  },
  {
    name: "Best Original Screenplay",
    icon: "✍️",
    nominees: [
      { title: "Blue Moon", image: "https://image.tmdb.org/t/p/w500/bluemoon.jpg" },
      { title: "It Was Just an Accident", image: "https://image.tmdb.org/t/p/w500/accident.jpg" },
      { title: "Marty Supreme", image: "https://image.tmdb.org/t/p/w500/marty.jpg" },
      { title: "Sentimental Value", image: "https://image.tmdb.org/t/p/w500/sentimental.jpg" },
      { title: "Sinners", image: "https://image.tmdb.org/t/p/w500/lOfjeJMKS7cOaaTn6q3J0y2ypiA.jpg" },
    ],
  },
  {
    name: "Best Original Song",
    icon: "🎤",
    nominees: [
      { title: "Dear Me", image: "https://image.tmdb.org/t/p/w500/relentless.jpg", details: "Diane Warren: Relentless" },
      { title: "Golden", image: "https://image.tmdb.org/t/p/w500/kpop.jpg", details: "KPop Demon Hunters" },
      { title: "I Lied to You", image: "https://image.tmdb.org/t/p/w500/lOfjeJMKS7cOaaTn6q3J0y2ypiA.jpg", details: "Sinners" },
      { title: "Sweet Dreams of Joy", image: "https://image.tmdb.org/t/p/w500/viva.jpg", details: "Viva Verdi!" },
      { title: "Train Dreams", image: "https://image.tmdb.org/t/p/w500/traindreams.jpg", details: "Train Dreams" },
    ],
  },
  {
    name: "Best Original Score",
    icon: "🎵",
    nominees: [
      { title: "Bugonia", image: "https://image.tmdb.org/t/p/w500/vJU3rXSP9hwUuLeq8IpfsJShLOk.jpg" },
      { title: "Frankenstein", image: "https://image.tmdb.org/t/p/w500/g4JtvGlQO7DByTI6frUobqvSL3R.jpg" },
      { title: "Hamnet", image: "https://image.tmdb.org/t/p/w500/hamnet.jpg" },
      { title: "One Battle After Another", image: "https://image.tmdb.org/t/p/w500/onebattle.jpg" },
      { title: "Sinners", image: "https://image.tmdb.org/t/p/w500/lOfjeJMKS7cOaaTn6q3J0y2ypiA.jpg" },
    ],
  },
  {
    name: "Best International Feature",
    icon: "🌍",
    nominees: [
      { title: "It Was Just an Accident", image: "https://image.tmdb.org/t/p/w500/accident.jpg" },
      { title: "Sentimental Value", image: "https://image.tmdb.org/t/p/w500/sentimental.jpg", details: "Norway" },
      { title: "Sirât", image: "https://image.tmdb.org/t/p/w500/sirat.jpg" },
      { title: "The Secret Agent", image: "https://image.tmdb.org/t/p/w500/secretagent.jpg" },
      { title: "The Voice of Hind Rajab", image: "https://image.tmdb.org/t/p/w500/hind.jpg" },
    ],
  },
  {
    name: "Best Animated Feature",
    icon: "🎨",
    nominees: [
      { title: "Arco", image: "https://image.tmdb.org/t/p/w500/arco.jpg" },
      { title: "Elio", image: "https://image.tmdb.org/t/p/w500/juuXkmGBvPpIaPoYWj8wMpj3hVH.jpg", details: "Pixar" },
      { title: "KPop Demon Hunters", image: "https://image.tmdb.org/t/p/w500/kpop.jpg" },
      { title: "Little Amélie or the Character of Rain", image: "https://image.tmdb.org/t/p/w500/amelie.jpg" },
      { title: "Zootopia 2", image: "https://image.tmdb.org/t/p/w500/dknSvgBq9OQPS2KUGbhRF8bIuc5.jpg", details: "Disney" },
    ],
  },
  {
    name: "Best Documentary Feature",
    icon: "🎥",
    nominees: [
      { title: "Come See Me in the Good Light", image: "https://image.tmdb.org/t/p/w500/goodlight.jpg" },
      { title: "Cutting Through the Rocks", image: "https://image.tmdb.org/t/p/w500/rocks.jpg" },
      { title: "Mr. Nobody Against Putin", image: "https://image.tmdb.org/t/p/w500/putin.jpg" },
      { title: "The Alabama Solution", image: "https://image.tmdb.org/t/p/w500/alabama.jpg" },
      { title: "The Perfect Neighbor", image: "https://image.tmdb.org/t/p/w500/neighbor.jpg" },
    ],
  },
  {
    name: "Best Costume Design",
    icon: "👗",
    nominees: [
      { title: "Avatar: Fire and Ash", image: "https://image.tmdb.org/t/p/w500/bRBeSHfGHwkEpImlhxPmOcUsaeg.jpg" },
      { title: "Frankenstein", image: "https://image.tmdb.org/t/p/w500/g4JtvGlQO7DByTI6frUobqvSL3R.jpg" },
      { title: "Hamnet", image: "https://image.tmdb.org/t/p/w500/hamnet.jpg" },
      { title: "Marty Supreme", image: "https://image.tmdb.org/t/p/w500/marty.jpg" },
      { title: "Sinners", image: "https://image.tmdb.org/t/p/w500/lOfjeJMKS7cOaaTn6q3J0y2ypiA.jpg" },
    ],
  },
  {
    name: "Best Makeup & Hairstyling",
    icon: "💄",
    nominees: [
      { title: "Frankenstein", image: "https://image.tmdb.org/t/p/w500/g4JtvGlQO7DByTI6frUobqvSL3R.jpg" },
      { title: "Kokuho", image: "https://image.tmdb.org/t/p/w500/kokuho.jpg" },
      { title: "Sinners", image: "https://image.tmdb.org/t/p/w500/lOfjeJMKS7cOaaTn6q3J0y2ypiA.jpg" },
      { title: "The Smashing Machine", image: "https://image.tmdb.org/t/p/w500/smashing.jpg" },
      { title: "The Ugly Stepsister", image: "https://image.tmdb.org/t/p/w500/uglystepsister.jpg" },
    ],
  },
  {
    name: "Best Production Design",
    icon: "🏛️",
    nominees: [
      { title: "Frankenstein", image: "https://image.tmdb.org/t/p/w500/g4JtvGlQO7DByTI6frUobqvSL3R.jpg" },
      { title: "Hamnet", image: "https://image.tmdb.org/t/p/w500/hamnet.jpg" },
      { title: "Marty Supreme", image: "https://image.tmdb.org/t/p/w500/marty.jpg" },
      { title: "One Battle After Another", image: "https://image.tmdb.org/t/p/w500/onebattle.jpg" },
      { title: "Sinners", image: "https://image.tmdb.org/t/p/w500/lOfjeJMKS7cOaaTn6q3J0y2ypiA.jpg" },
    ],
  },
  {
    name: "Best Sound",
    icon: "🔊",
    nominees: [
      { title: "Frankenstein", image: "https://image.tmdb.org/t/p/w500/g4JtvGlQO7DByTI6frUobqvSL3R.jpg" },
      { title: "F1", image: "https://image.tmdb.org/t/p/w500/vqBmyAj0Xm9LnS1xe1MSlMAJyHq.jpg" },
      { title: "One Battle After Another", image: "https://image.tmdb.org/t/p/w500/onebattle.jpg" },
      { title: "Sinners", image: "https://image.tmdb.org/t/p/w500/lOfjeJMKS7cOaaTn6q3J0y2ypiA.jpg" },
      { title: "Sirât", image: "https://image.tmdb.org/t/p/w500/sirat.jpg" },
    ],
  },
  {
    name: "Best Film Editing",
    icon: "✂️",
    nominees: [
      { title: "F1", image: "https://image.tmdb.org/t/p/w500/vqBmyAj0Xm9LnS1xe1MSlMAJyHq.jpg" },
      { title: "Marty Supreme", image: "https://image.tmdb.org/t/p/w500/marty.jpg" },
      { title: "One Battle After Another", image: "https://image.tmdb.org/t/p/w500/onebattle.jpg" },
      { title: "Sentimental Value", image: "https://image.tmdb.org/t/p/w500/sentimental.jpg" },
      { title: "Sinners", image: "https://image.tmdb.org/t/p/w500/lOfjeJMKS7cOaaTn6q3J0y2ypiA.jpg" },
    ],
  },
  {
    name: "Best Cinematography",
    icon: "📷",
    nominees: [
      { title: "Frankenstein", image: "https://image.tmdb.org/t/p/w500/g4JtvGlQO7DByTI6frUobqvSL3R.jpg" },
      { title: "Marty Supreme", image: "https://image.tmdb.org/t/p/w500/marty.jpg" },
      { title: "One Battle After Another", image: "https://image.tmdb.org/t/p/w500/onebattle.jpg" },
      { title: "Sinners", image: "https://image.tmdb.org/t/p/w500/lOfjeJMKS7cOaaTn6q3J0y2ypiA.jpg" },
      { title: "Train Dreams", image: "https://image.tmdb.org/t/p/w500/traindreams.jpg" },
    ],
  },
  {
    name: "Best Visual Effects",
    icon: "✨",
    nominees: [
      { title: "Avatar: Fire and Ash", image: "https://image.tmdb.org/t/p/w500/bRBeSHfGHwkEpImlhxPmOcUsaeg.jpg" },
      { title: "F1", image: "https://image.tmdb.org/t/p/w500/vqBmyAj0Xm9LnS1xe1MSlMAJyHq.jpg" },
      { title: "Jurassic World Rebirth", image: "https://image.tmdb.org/t/p/w500/1RICxzeoNCAO5NpcRMIgg1XT6fm.jpg" },
      { title: "Sinners", image: "https://image.tmdb.org/t/p/w500/lOfjeJMKS7cOaaTn6q3J0y2ypiA.jpg" },
      { title: "The Lost Bus", image: "https://image.tmdb.org/t/p/w500/lostbus.jpg" },
    ],
  },
  {
    name: "Best Live Action Short",
    icon: "🎞️",
    nominees: [
      { title: "A Friend of Dorothy", image: "https://image.tmdb.org/t/p/w500/dorothy.jpg" },
      { title: "Butcher's Stain", image: "https://image.tmdb.org/t/p/w500/butcher.jpg" },
      { title: "Jane Austen's Period Drama", image: "https://image.tmdb.org/t/p/w500/austen.jpg" },
      { title: "The Singers", image: "https://image.tmdb.org/t/p/w500/singers.jpg" },
      { title: "Two People Exchanging Saliva", image: "https://image.tmdb.org/t/p/w500/saliva.jpg" },
    ],
  },
  {
    name: "Best Animated Short",
    icon: "🦋",
    nominees: [
      { title: "Butterfly", image: "https://image.tmdb.org/t/p/w500/butterfly.jpg" },
      { title: "Forevergreen", image: "https://image.tmdb.org/t/p/w500/forevergreen.jpg" },
      { title: "Retirement Plan", image: "https://image.tmdb.org/t/p/w500/retirement.jpg" },
      { title: "The Girl Who Cried Pearls", image: "https://image.tmdb.org/t/p/w500/pearls.jpg" },
      { title: "The Three Sisters", image: "https://image.tmdb.org/t/p/w500/sisters.jpg" },
    ],
  },
  {
    name: "Best Documentary Short",
    icon: "📹",
    nominees: [
      { title: "All the Empty Rooms", image: "https://image.tmdb.org/t/p/w500/emptyrooms.jpg" },
      { title: "Armed Only with a Camera", image: "https://image.tmdb.org/t/p/w500/camera.jpg", details: "Brent Renaud" },
      { title: "Children No More", image: "https://image.tmdb.org/t/p/w500/children.jpg", details: "Were and Are Gone" },
      { title: "The Devil Is Busy", image: "https://image.tmdb.org/t/p/w500/devil.jpg" },
      { title: "Perfectly a Strangeness", image: "https://image.tmdb.org/t/p/w500/strangeness.jpg" },
    ],
  },
  {
    name: "Best Casting",
    icon: "🎯",
    nominees: [
      { title: "Hamnet", image: "https://image.tmdb.org/t/p/w500/hamnet.jpg" },
      { title: "Marty Supreme", image: "https://image.tmdb.org/t/p/w500/marty.jpg" },
      { title: "One Battle After Another", image: "https://image.tmdb.org/t/p/w500/onebattle.jpg" },
      { title: "Sinners", image: "https://image.tmdb.org/t/p/w500/lOfjeJMKS7cOaaTn6q3J0y2ypiA.jpg" },
      { title: "The Secret Agent", image: "https://image.tmdb.org/t/p/w500/secretagent.jpg" },
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
