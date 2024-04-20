
function volumeController() {
  const volumeControl = document.getElementById("volumeControl");

  volumeControl.addEventListener("input", function () {
    audio.volume = parseFloat(volumeControl.value);
  });
}




function progress() {
  const progressBar = document.getElementById("progressBar");

  audio.addEventListener("timeupdate", function () {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
  });
}





function songCards() {
  cards.forEach((e,index) => {
    clutter += `<div id="${index}" class="songcard text-white mb-4">
                            <div class="thumbnail h-40 w-40 bg-[#1B3D57] mb-1 rounded-[10px] overflow-hidden relative">
                            <p class="absolute text-white bottom-0 bg-zinc-900 p-[5px] text-[14px]">${e.duration}</p>
                                <img class="w-full h-full object-cover" src="${e.image}" alt="">
                            </div>
                            <h5 class="font-semibold text-[14px] opacity-70 leading-none py-[5px]">${e.name}</h5>
                            <p class="opacity-40 text-[11px] leading-none ">@${e.username}</p>
                        </div>`;
  });
  container.innerHTML = clutter;
}

songCards();


container.addEventListener("click", function (dets) {
    selectedSong = dets.target.id
    songCards()
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
    flag = 1
    audio.play()
})