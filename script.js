const modal = document.querySelector(".modalOverlay");
const open = document.querySelector(".open");
const close = document.querySelector(".close");

open.addEventListener("click", () => {
  modal.classList.add("isOpen");
  player.playVideo();
});

close.addEventListener("click", () => {
  modal.classList.remove("isOpen");
  player.stopVideo();
});

modal.addEventListener("click", () => {
  modal.classList.remove("isOpen");
  player.stopVideo();
});

const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";

const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'cKlEE_EYuNM',
  });
}
