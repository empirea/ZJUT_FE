export function backTop(){
  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 0) {
      //window.requestAnimationFrame(smoothscroll);
      window.scrollTo (0,0);
  }
}