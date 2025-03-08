function page1Animation() {
  var tl = gsap.timeline();

  tl.from("header h1", {
    y: -50,
    opacity: 0,
    duration: 1,
    delay: 0.6,
  });
  tl.from("nav h4, nav button", {
    y: -50,
    opacity: 0,
    stagger: 0.15,
    duration: 0.6,
  });
  tl.from(".leftpart1 h1", {
    x: -300,
    opacity: 0,
    duration: 1,
  });
  tl.from(".leftpart1 p", {
    x: -100,
    opacity: 0,
    duration: 0.8,
  });
  tl.from(".leftpart1 button", {
    opacity: 0,
    duration: 0.6,
  });
  tl.from(
    ".rightpart1 img",
    {
      x: 300,
      opacity: 0,
      duration: 0.7,
    },
    "-=2"
  );
}
function page3Animation() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page3",
      scroller: "body",
      //   markers: true,
      start: "top 50%",
      end: "top -50%",
      scrub: 2,
    },
  });

  tl2.from(".services h3", {
    x: -100,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
  });
  tl2.from(".services p", {
    x: 300,
    opacity: 0,
    duration: 0.5,
  });
  tl2.from(
    ".elem-white.left",
    {
      x: -200,
      duration: 1.5,
      opacity: 0,
    },
    "anime"
  );
  tl2.from(
    ".elem-black.right",
    {
      x: 200,
      duration: 1.5,
      opacity: 0,
    },
    "anime"
  );
  tl2.from(
    "#blackleft",
    {
      x: -200,
      duration: 1.5,
      opacity: 0,
    },
    "anime1"
  );
  tl2.from(
    "#whiteright",
    {
      x: 200,
      duration: 1.5,
      opacity: 0,
    },
    "anime1"
  );
}
function page4Animation() {
  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page4",
      scroller: "body",
      start: "top 50%",
      //   markers: true,
      end: "top -10%",
      scrub: 2,
    },
  });
  tl3.from(".page4container", {
    opacity: 0,
    duration: 0.7,
  });
  tl3.from(".page4containerleft h2", {
    x: -200,
    opacity: 0,
    duration: 1,
  });
  tl3.from(".page4containerleft p", {
    x: 200,
    opacity: 0,
    duration: 1,
  });
  tl3.from(".page4containerleft button", {
    opacity: 0,
    duration: 1,
  });
  tl3.from(
    ".page4containerright img",
    {
      x: 200,
      opacity: 0,
      duration: 1,
    },
    "-=3"
  );
}
function page5Animation() {
  var tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page5",
      scroller: "body",
      //   markers: true,
      start: "top 50%",
      end: "top 10%",
      scrub: 2,
    },
  });

  tl4.from(".casestudy h3", {
    y: 50,
    opacity: 0,
    duration: 1,
  });
  tl4.from(".casestudy p", {
    y: -50,
    opacity: 0,
    duration: 1,
  });
  tl4.from(".page5container", {
    opacity: 0,
    duration: 1,
  });
  tl4.from("#page5elem1", {
    x: -300,
    opacity: 0,
    duration: 1,
  });
  tl4.from("#page5elem2", {
    y: 300,
    opacity: 0,
    duration: 1,
  });
  tl4.from("#lastelem", {
    x: 300,
    opacity: 0,
    duration: 1,
  });
}
page1Animation();
page3Animation();
page4Animation();
page5Animation();
