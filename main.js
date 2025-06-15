const letters = [
  "My love, I can't believe it's already been almost two years..",
  "Time flies when you're with someone who makes every single day feel like an adventure, a comfort, and a laugh all wrapped into one.",
  "You are, without a doubt, the best thing that has ever happened to me.",
  "I never imagined that someone could understand me so well,",
  "yet still surprise me constantly. We have so much in common, like we’re tuned to the same frequency,",
  "and yet we’re total opposites in the most perfect way.",
  "Where I zig, you zag—and somehow, it works.",
  "You bring balance into my world, calm when I need peace and chaos when I need excitement.",
  "It’s like you were made to fit perfectly into my life.",
  "You always know how to make me smile.",
  "Even on the hardest days, one silly look from you, one warm hug,",
  "or one of your goofy jokes is enough to lift me out of whatever cloud I’m under.",
  "You have this gift—of making everything feel lighter, warmer, better, just by being you.",
  "Sometimes I stop and think, how did I get so lucky?",
  "To have someone who loves me for me, who sees all my weird quirks and loves me even more because of them.",
  "I love how you never stop being you,",
  "authentic, kind, funny, and full of heart.",
  "You don’t even realize how much light you bring into every room you walk into.",
  "When I’m with you, I feel safe. I feel seen. I feel home.",
  "You’re the calm to my storm, the adventure in my stillness, the melody in my silence.",
  "Our love has taught me how beautiful life can be when you share it with the right person.",
  "It’s the little things that mean the most—the way you hold my hand,",
  "the way you look at me when you think I’m not watching,",
  "the way you always make sure I’m okay, even when you’re not.",
  "Thank you for always being there.",
  "For the deep talks and the dumb jokes,",
  "for the spontaneous cuddles and the quiet moments,",
  "for being my best friend and the love of my life all in one beautiful soul.",
  "For showing me a kind of love that’s patient, playful, passionate, and pure.",
  "I know I can always count on you to be by my side, no matter what life throws at us.",
  "And I promise, with all my heart, to always be by yours too.",
  "With you, I’ve found something real. Something rare.",
  "A connection that runs deeper than anything I’ve ever known.",
  "I still get excited to see your name pop up on my phone.",
  "Still smile like an idiot when I think about you.",
  "Still feel butterflies when you kiss me, like it’s the very first time.",
  "You’ve made such a home in my heart that I can’t imagine a future without you in it.",
  "I want to do it all with you—lazy Sundays, wild adventures, building dreams, growing older.",
  "I can’t wait to fill more pages of life with you. 💕",
  "More laughs, more kisses, more late-night talks and early-morning cuddles.",
  "More inside jokes, more memories, more versions of 'us' through every chapter of life.",
  "You’re my always. My sunshine on the grey days. My safe place. My silly soulmate.",
  "Here’s to a love that’s real, ridiculous, and ridiculously real.",
  "I love you more than words will ever do justice.",
  "And I’ll keep loving you, in all the small ways and big ways, for all the days to come.",
  "Forever yours, in every universe. 💫",
];

const memories = [
  {
    type: "image",
    src: "../img/image1.jpeg",
    caption: "First time at the park in your car",
  },
  {
    type: "image",
    src: "../img/image2.jpeg",
    caption:
      "My first time at your house, already drunk and you layed beside me comforting me",
  },
  {
    type: "image",
    src: "../img/image3.jpeg",
    caption: "First time getting KFC together",
  },
  {
    type: "image",
    src: "../img/image4.jpeg",
    caption: "Smoke break at Brasserie Palace",
  },
  {
    type: "image",
    src: "../img/image5.jpeg",
    caption: "Look how cute we aree omgggg",
  },
  {
    type: "image",
    src: "../img/image6.jpeg",
    caption: 'Cute pic after " showing you where the ice bucket is" ',
  },
  {
    type: "image",
    src: "../img/image7.jpeg",
    caption: "Always looked better in your clothes",
  },
  {
    type: "image",
    src: "../img/image8.jpeg",
    caption: "Efteling date",
  },
  {
    type: "image",
    src: "../img/image9.jpeg",
    caption: "Such a cutie patootie with hello kitty",
  },
  {
    type: "image",
    src: "../img/image10.jpeg",
    caption: "Forever and always",
  },
  {
    type: "image",
    src: "../img/image11.jpeg",
    caption:
      "You must be a real baller—‘cause even when your head is the basketball, I still can’t take my eyes off you",
  },
  {
    type: "image",
    src: "../img/image12.jpeg",
    caption: "My handsome baby",
  },
  {
    type: "image",
    src: "../img/image13.jpeg",
    caption: "grrr so angryyy!",
  },
  {
    type: "image",
    src: "../img/image14.jpeg",
    caption:
      "Two constellations that refused to stay in the sky, now taking selfies instead",
  },
  {
    type: "image",
    src: "../img/image15.jpeg",
    caption: "I always loved having you as close as possible <3",
  },
  {
    type: "image",
    src: "../img/image16.jpeg",
    caption: "You look so tired of me xD ",
  },
  {
    type: "image",
    src: "../img/image17.jpeg",
    caption: "Always love seeing you smile, even if it is goofy af",
  },
  {
    type: "image",
    src: "../img/image18.jpeg",
    caption: "Your nose grew when you said you loved me more than I did you ",
  },
  {
    type: "image",
    src: "../img/image19.jpeg",
    caption:
      "Being in that boat with you was the most relaxing, chaotic and funniest time.",
  },
  {
    type: "image",
    src: "../img/image20.jpeg",
    caption:
      "The first time you stayed for a VERYY long time.. if that is something to look forward to in the future then i cannot wait for it.",
  },
  {
    type: "image",
    src: "../img/image21.jpeg",
    caption: "I have always seen and thought of you as my soulmate <3",
  },
  {
    type: "image",
    src: "../img/image22.jpeg",
    caption:
      "I loved every moment and every second knowing i woke up with you and went to sleep with you",
  },
  {
    type: "image",
    src: "../img/image23.jpeg",
    caption: "You owe me a kiss >:C",
  },
  {
    type: "image",
    src: "../img/image24.jpeg",
    caption: "OMG you are so handsome i can not get over it.",
  },
  {
    type: "image",
    src: "../img/image25.jpeg",
    caption: "You always bring the biggest smile on my face",
  },
  {
    type: "image",
    src: "../img/image26.jpeg",
    caption: "I would kill to have you hold me forever <3",
  },
  {
    type: "image",
    src: "../img/image27.jpeg",
    caption: "So ti ti",
  },
  {
    type: "image",
    src: "../img/image28.jpeg",
    caption: "grrrrr.",
  },
  {
    type: "image",
    src: "../img/image29.jpeg",
    caption:
      "I remember blushing like crazy anytime you kissed me, whether it was my cheek my lips or my other ones..",
  },
  {
    type: "image",
    src: "../img/image30.jpeg",
    caption:
      "I always welcomed you with arms open anytime you finished your shift at BAIT.. We had to lay on such a small bed xD",
  },
  {
    type: "image",
    src: "../img/image31.jpeg",
    caption: "I was freaking out internally",
  },
  {
    type: "image",
    src: "../img/image32.jpeg",
    caption:
      "First sleepover! Such a nice pic too, me bent over the sink, your head by my neck, no stress nothing.",
  },
  {
    type: "image",
    src: "../img/image33.jpeg",
    caption: "I lowkey imagined you fucking me there and then..",
  },
  {
    type: "image",
    src: "../img/image34.jpeg",
    caption: "Wish you could hold me forever.. I always feel safe in your arms",
  },
  {
    type: "image",
    src: "../img/image35.jpeg",
    caption:
      "Drinking coffee together after the most restful and restless night of our life xD",
  },
  {
    type: "image",
    src: "../img/image36.jpeg",
    caption: "You holding our child.. Always warms my heart",
  },
  // {
  //   type: 'video',
  //   src: 'https://www.w3schools.com/html/mov_bbb.mp4',
  //   caption: 'Our silly dance in the kitchen 🕺'
  // }
];

let currentSection = "";
let currentPage = 0;

function openSection(section) {
  currentSection = section;
  currentPage = 0;
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("book").style.display = "flex";
  renderPage();
}

function goBack() {
  document.getElementById("book").style.display = "none";
  document.getElementById("start-screen").style.display = "block";
}

const audio = document.getElementById("audio");
const volumeControl = document.getElementById("volumeControl");

volumeControl.addEventListener("input", () => {
  audio.volume = volumeControl.value;
});

function renderPage() {
  const container = document.getElementById("book-pages");
  container.innerHTML = "";

  const page = document.createElement("div");
  page.classList.add("book-page");

  if (currentSection === "letters") {
    page.textContent = letters[currentPage] || "End of letters 💌";
  } else if (currentSection === "memories") {
    const mem = memories[currentPage];
    if (!mem) {
      page.textContent = "No more memories ✨";
    } else {
      const mediaDiv = document.createElement("div");
      if (mem.type === "image") {
        const img = document.createElement("img");
        img.src = mem.src;
        mediaDiv.appendChild(img);
      } else if (mem.type === "video") {
        const video = document.createElement("video");
        video.src = mem.src;
        video.controls = true;
        mediaDiv.appendChild(video);
      }
      const caption = document.createElement("p");
      caption.textContent = mem.caption;
      mediaDiv.appendChild(caption);
      page.appendChild(mediaDiv);
    }
  }

  container.appendChild(page);
}

function nextPage() {
  const maxPage = currentSection === "letters" ? letters.length - 1 : memories.length - 1;
  if (currentPage < maxPage) {
    currentPage++;
    renderPage();
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    renderPage();
  }
}