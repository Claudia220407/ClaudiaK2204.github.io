const letters = [
      "My love, from the moment we met, everything changed.",
      "Every day with you is a page of joy and warmth.",
      "I can’t wait to fill more pages of life with you. 💕"
    ];

    const memories = [
      {
        type: 'image',
        src: '../img/image1.jpeg',
        caption: 'First time at the park in your car'
      },
      {
        type: 'image',
        src: '../img/image2.jpeg',
        caption: 'My first time at your house, already drunk and you layed beside me comforting me'
      },
      {
        type: 'image',
        src: '../img/image3.jpeg',
        caption: 'First time getting KFC together'
      },
      {
        type: 'image',
        src: '../img/image4.jpeg',
        caption: 'Smoke break at Brasserie Palace'
      },
      {
        type: 'image',
        src: '../img/image5.jpeg',
        caption: 'Look how cute we aree omgggg'
      },
      {
        type: 'image',
        src: '../img/image6.jpeg',
        caption: 'Cute pic after " showing you where the ice bucket is" '
      },
      {
        type: 'image',
        src: '../img/image7.jpeg',
        caption: 'Always looked better in your clothes'
      },
      {
        type: 'image',
        src: '../img/image8.jpeg',
        caption: 'Efteling date'
      },
      {
        type: 'image',
        src: '../img/image9.jpeg',
        caption: 'Such a cutie patootie with hello kitty'
      },
      {
        type: 'image',
        src: '../img/image10.jpeg',
        caption: 'Forever and always'
      },
      {
        type: 'image',
        src: '../img/image11.jpeg',
        caption: 'You must be a real baller—‘cause even when your head is the basketball, I still can’t take my eyes off you'
      },
       {
        type: 'image',
        src: '../img/image12.jpeg',
        caption: 'My handsome baby'
      },
      {
        type: 'image',
        src: '../img/image13.jpeg',
        caption: 'grrr so angryyy!'
      },
      {
        type: 'image',
        src: '../img/image14.jpeg',
        caption: 'Two constellations that refused to stay in the sky, now taking selfies instead'
      },
      {
        type: 'image',
        src: '../img/image15.jpeg',
        caption: 'I always loved having you as close as possible <3'
      },
      {
        type: 'image',
        src: '../img/image16.jpeg',
        caption: 'You look so tired of me xD '
      },
      {
        type: 'image',
        src: '../img/image17.jpeg',
        caption: 'Always love seeing you smile, even if it is goofy af'
      },
      {
        type: 'image',
        src: '../img/image18.jpeg',
        caption: 'Your nose grew when you said you loved me more than I did you '
      },
      {
        type: 'image',
        src: '../img/image19.jpeg',
        caption: 'Being in that boat with you was the most relaxing, chaotic and funniest time.'
      },
      {
        type: 'image',
        src: '../img/image20.jpeg',
        caption: 'Being in that boat with you was the most relaxing, chaotic and funniest time.'
      },
      {
        type: 'image',
        src: '../img/image21.jpeg',
        caption: 'Being in that boat with you was the most relaxing, chaotic and funniest time.'
      },
      {
        type: 'image',
        src: '../img/image22.jpeg',
        caption: 'Being in that boat with you was the most relaxing, chaotic and funniest time.'
      },
      {
        type: 'image',
        src: '../img/image23.jpeg',
        caption: 'Being in that boat with you was the most relaxing, chaotic and funniest time.'
      },{
        type: 'image',
        src: '../img/image24.jpeg',
        caption: 'Being in that boat with you was the most relaxing, chaotic and funniest time.'
      },
      {
        type: 'image',
        src: '../img/image25.jpeg',
        caption: 'Being in that boat with you was the most relaxing, chaotic and funniest time.'
      },
      {
        type: 'image',
        src: '../img/image26.jpeg',
        caption: 'Being in that boat with you was the most relaxing, chaotic and funniest time.'
      },
      {
        type: 'image',
        src: '../img/image27.jpeg',
        caption: 'Being in that boat with you was the most relaxing, chaotic and funniest time.'
      },
      {
        type: 'image',
        src: '../img/image28.jpeg',
        caption: 'Being in that boat with you was the most relaxing, chaotic and funniest time.'
      },
      {
        type: 'image',
        src: '../img/image29.jpeg',
        caption: 'Being in that boat with you was the most relaxing, chaotic and funniest time.'
      },
      {
        type: 'image',
        src: '../img/image30.jpeg',
        caption: 'Being in that boat with you was the most relaxing, chaotic and funniest time.'
      },
      {
        type: 'image',
        src: '../img/image31.jpeg',
        caption: 'Being in that boat with you was the most relaxing, chaotic and funniest time.'
      },
      {
        type: 'image',
        src: '../img/image32.jpeg',
        caption: 'Being in that boat with you was the most relaxing, chaotic and funniest time.'
      },
      {
        type: 'image',
        src: '../img/image33.jpeg',
        caption: 'Being in that boat with you was the most relaxing, chaotic and funniest time.'
      },
      {
        type: 'image',
        src: '../img/image34.jpeg',
        caption: 'Being in that boat with you was the most relaxing, chaotic and funniest time.'
      },
      {
        type: 'image',
        src: '../img/image35.jpeg',
        caption: 'Being in that boat with you was the most relaxing, chaotic and funniest time.'
      },
      {
        type: 'image',
        src: '../img/image36.jpeg',
        caption: 'Being in that boat with you was the most relaxing, chaotic and funniest time.'
      },
      {
        type: 'video',
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        caption: 'Our silly dance in the kitchen 🕺'
      }
    ];

    let currentSection = '';
    let currentPage = 0;

    function openSection(section) {
      currentSection = section;
      currentPage = 0;
      document.getElementById('start-screen').style.display = 'none';
      document.getElementById('book').style.display = 'flex';
      renderPage();
    }

    function goBack() {
      document.getElementById('book').style.display = 'none';
      document.getElementById('start-screen').style.display = 'block';
    }

    function renderPage() {
      const container = document.getElementById('book-pages');
      container.innerHTML = '';

      const page = document.createElement('div');
      page.classList.add('book-page');

      if (currentSection === 'letters') {
        page.textContent = letters[currentPage] || 'End of letters 💌';
      } else if (currentSection === 'memories') {
        const mem = memories[currentPage];
        if (!mem) {
          page.textContent = 'No more memories ✨';
        } else {
          const mediaDiv = document.createElement('div');
          if (mem.type === 'image') {
            const img = document.createElement('img');
            img.src = mem.src;
            mediaDiv.appendChild(img);
          } else if (mem.type === 'video') {
            const video = document.createElement('video');
            video.src = mem.src;
            video.controls = true;
            mediaDiv.appendChild(video);
          }
          const caption = document.createElement('p');
          caption.textContent = mem.caption;
          mediaDiv.appendChild(caption);
          page.appendChild(mediaDiv);
        }
      }

      container.appendChild(page);
    }

    function nextPage() {
      const maxPage = currentSection === 'letters' ? letters.length - 1 : memories.length - 1;
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