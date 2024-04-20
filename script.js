function home() {
  let cards = [
    {
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYH0gHRy292sjbLgGixxIVngwSAzjpppervNodI8sSubwe9ixOVrwo0z7uek1ejkE4V-ZxKkFuxriHYH8DlKtpDmtE4pNUwxf14gfWiv2Cgk3vIJ7bZh6oFSMACuhXUPB0FhT1A_Q6vtNyopMnKSg-TskL8C0c2EXr2J_JwQKQbORxQM2juKoPf__k/s1080/water%20Thaly%20Broq,%20Ganchey%20Baltistan.jpg",
      url: "./Audios/waterSoft.mp3",
      name: "Soothing Aquatics",
      username: "aman",
      duration: "03:23",
    },
    {
      image:
        "https://cff2.earth.com/uploads/2019/03/24135226/matterhorn-1516733_960_720-960x638.jpg",
      url: "./Audios/mountainBreeze.mp3",
      name: "Alpine Breeze",
      username: "natureDevotee",
      duration: "03:23",
    },
    {
      image:
        "https://r2.community.samsung.com/t5/image/serverpage/image-id/1746887i28C99A57AA9D8B38/image-dimensions/2000?v=v2&px=-1",
      url: "./Audios/waterfall.mp3",
      name: "Waterfall's Roar",
      username: "wildernessFan",
      duration: "03:23",
    },
    {
      image:
        "https://img.freepik.com/premium-photo/forest-hums-with-sound-rustling-leaves-chirping-birds-as-greenery-sways-breeze_674594-4712.jpg",
      url: "./Audios/birdsInForest.mp3",
      name: "Forest Elegance",
      username: "theEnvironmentalist",
      duration: "02:09",
    },
  ];

  let allSongs = document.querySelector(".Container");

  function showCards() {
    let clutter = "";

    cards.forEach(function (elem, index) {
      clutter += `<div id=${index} class="songcard text-white mb-4">
                            <div class="thumbnail mb-1 rounded-[10px] overflow-hidden relative">
                                <img  class="w-full h-full object-cover" src="${elem.image}" alt="">
                            </div>
                            <h5 class="font-semibold text-[14px] opacity-70 leading-none py-[5px]">${elem.name}</h5>
                            <p class="opacity-40 text-[11px] leading-none ">@${elem.username}</p>
                        </div>`;
    });
    allSongs.innerHTML = clutter;
  }

  // allSongs.addEventListener("click", function (dets) {
  //   console.log(dets.target.id);
  // });

  showCards();

  let audio = new Audio();

  let selectedSong = 0;
  allSongs.addEventListener("click", function (dets) {
    let target = dets.target;
    while (!target.classList.contains("songcard")) {
      target = target.parentNode;
    }
    let cardId = target.id;
    let songUrl = cards[cardId].image;

    document.querySelector(".bgImg").style.backgroundImage = `url(${songUrl})`;

    if (currentAudio) {
      currentAudio.pause();
    }

    // Create an audio element for the new song
    let audio = new Audio(cards[cardId].url);
    audio.play();
    currentAudio = audio; // Update the currently playing audio
  });

  let currentAudio = null;

  let lefbar = document.querySelector(".leftbar");
  let menu = document.querySelector(".Featured");
  let rightSection = document.querySelector(".rightSection");
  menu.addEventListener("click", function () {
    lefbar.style.left = 0;
    lefbar.style.width = `30vw`;
    rightSection.style.filter = `blur(10px)`;
  });
}

function allAudios() {
  let allAduios = document.querySelector(".allAudiosContainer");

  let allAduiosData = [
    {
      image:
        "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      url: "./Audios/waterSoft.mp3",
      name: "Relaxing rain",
      username: "aman",
      duration: "03:23",
    },
    {
      image:
        "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      url: "./Audios/waterSoft.mp3",
      name: "ocean pleasant noise",
      username: "aman",
      duration: "03:23",
    },
    {
      image:
        "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      url: "./Audios/waterSoft.mp3",
      name: "feel the sunset",
      username: "aman",
      duration: "03:23",
    },
    {
      image:
        "https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      url: "./Audios/waterSoft.mp3",
      name: "waterfall",
      username: "aman",
      duration: "03:23",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1673264933051-3206029946b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      url: "./Audios/waterSoft.mp3",
      name: "fairy forest",
      username: "aman",
      duration: "03:23",
    },
    {
      image:
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      url: "./Audios/waterSoft.mp3",
      name: "Relaxed water",
      username: "aman",
      duration: "03:23",
    },
    {
      image:
        "https://images.unsplash.com/reserve/HgZuGu3gSD6db21T3lxm_San%20Zenone.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      url: "./Audios/waterSoft.mp3",
      name: "soft winds",
      username: "aman",
      duration: "03:23",
    },
    {
      image:
        "https://images.unsplash.com/photo-1550853024-fae8cd4be47f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
      url: "./Audios/waterSoft.mp3",
      name: "Birds",
      username: "aman",
      duration: "03:23",
    },
    {
      image:
        "https://images.unsplash.com/photo-1565118531796-763e5082d113?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      url: "./Audios/waterSoft.mp3",
      name: "winds at hill",
      username: "aman",
      duration: "03:23",
    },
    {
      image:
        "https://images.unsplash.com/photo-1465189684280-6a8fa9b19a7a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      url: "./Audios/waterSoft.mp3",
      name: "cloudy weather",
      username: "aman",
      duration: "03:23",
    },
    {
      image:
        "https://images.unsplash.com/photo-1508459855340-fb63ac591728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      url: "./Audios/waterSoft.mp3",
      name: "Small stream",
      username: "aman",
      duration: "03:23",
    },
    {
      image:
        "https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      url: "./Audios/waterSoft.mp3",
      name: "a walk at garden",
      username: "aman",
      duration: "03:23",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv39UEwUW_9azztadrRnDTV6ngR5ABWqrKXPdyHAj0z9vW31BLXLHTNSD50Go0QCsPU6Q&usqp=CAU",
      url: "./Audios/waterSoft.mp3",
      name: "a walk at garden",
      username: "aman",
      duration: "03:23",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbpeZXXwZGV_7J3pUQnrxfnytKoQo2PwmAtc5tifLrwA6EqOlHJvuNeTc_D6A7HNO6piE&usqp=CAU",
      url: "./Audios/waterSoft.mp3",
      name: "a walk at garden",
      username: "aman",
      duration: "03:23",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK214Hr2mzsyqfF1fB7XVvp2EFsvf3_tGCZy857c7P-EcdT-_fx1exfhilaQ8NZUQgVFY&usqp=CAU",
      url: "./Audios/waterSoft.mp3",
      name: "a walk at garden",
      username: "aman",
      duration: "03:23",
    },
  ];

  function showCards() {
    let clutter = "";

    allAduiosData.forEach(function (elem, index) {
      clutter += `<div id=${index} class="songcard text-white mb-4">
                            <div class="thumbnail mb-1 rounded-[8px] overflow-hidden relative">
                                <img  class="w-full h-full object-cover" src="${elem.image}" alt="">
                            </div>
                            <h5 class="font-semibold text-[14px] opacity-70 leading-none py-[5px]">${elem.name}</h5>
                            <p class="opacity-40 text-[11px] leading-none ">@${elem.username}</p>
                        </div>`;
    });
    allAduios.innerHTML = clutter;
  }

  showCards();
}

home();
allAudios();
