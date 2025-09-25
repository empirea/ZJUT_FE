// $(window).load(function () {
//   flexSliderStart();
// });
// eslint-disable-next-line
export function flexSliderStart() {
  $(".flexslider").flexslider({
    slideshowSpeed: 4000,
    directionNav: false,
    pauseOnAction: false,
  });

  let speed = 20;
  let demo;
  let demo1;
  let demo2;
  let MyMarquee;
  function TeachersMoveBegin() {
    demo = document.getElementById("demo");
    demo1 = document.getElementById("demo1");
    demo2 = document.getElementById("demo2");
    if (!demo || !demo1 || !demo2) return;
    demo2.innerHTML = demo1.innerHTML;
    InterestingList_move();
    MyMarquee = setInterval(InterestingList_move, speed);
    demo.onmouseover = function () {
      ClearInterestingMove();
    };
    demo.onmouseout = function () {
      MyMarquee = setInterval(InterestingList_move, speed);
    };
  }
  function InterestingList_move() {
    //�ҹ���
    // if (demo.scrollLeft <= 0) {
    //     demo.scrollLeft += demo2.offsetWidth;
    // } else {
    //     demo.scrollLeft--;
    // }//�����
    if (demo2.offsetWidth - demo.scrollLeft <= 0) {
      demo.scrollLeft = demo.scrollLeft - demo1.offsetWidth;
    } else {
      demo.scrollLeft++;
    }
  }
  function ClearInterestingMove() {
    clearInterval(MyMarquee);
  }
  TeachersMoveBegin();
}
