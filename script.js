function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

init();
var crsr= document.querySelector(".cursor");
var main= document.querySelector(".main");
var video1= document.querySelector(".page1 video");
var video2= document.querySelector(".page3 video");
var imgp3= document.querySelector(".page3 img");
var boxes=document.querySelectorAll(".box");
main.addEventListener("mousemove", function(dets){
     crsr.style.left= dets.x+ 20 + "px";
     crsr.style.top= dets.y+ 20 + "px";
})
video1.addEventListener("mouseenter", function(){
  crsr.style.width= "57px";
  crsr.style.backgroundColor= "pink";
  crsr.style.borderRadius= "9px";
  crsr.style.mixBlendMode="normal";
})
video1.addEventListener("mouseleave", function(){
  crsr.style.width= "20px";
  crsr.style.backgroundColor= "white";
  crsr.style.borderRadius= "50%";
  crsr.style.mixBlendMode="difference";
})
video2.addEventListener("mouseenter", function(){
  crsr.style.width= "57px";
  crsr.style.backgroundColor= "pink";
  crsr.style.borderRadius= "9px";
  crsr.style.mixBlendMode="normal";
})
video2.addEventListener("mouseleave", function(){
  crsr.style.width= "20px";
  crsr.style.backgroundColor= "white";
  crsr.style.borderRadius= "50%";
  crsr.style.mixBlendMode="difference";
})
imgp3.addEventListener("mouseenter", function(){
  crsr.style.width= "57px";
  crsr.style.backgroundColor= "pink";
  crsr.style.borderRadius= "9px";
  crsr.style.mixBlendMode="normal";
})
imgp3.addEventListener("mouseleave", function(){
  crsr.style.width= "20px";
  crsr.style.backgroundColor= "white";
  crsr.style.borderRadius= "50%";
  crsr.style.mixBlendMode="difference";
})
var tl=gsap.timeline({
    scrollTrigger:{
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top 30%",
        end: "top 0",
        scrub:3
    }
})

// var tl3=gsap.timeline({
//   scrollTrigger:{
//     scroller: ".main",
//     start: "top -340%",
//     end: "top -390%",
//     scrub: 3,
//   }
// })
// tl3.to(".main",{
//   backgroundColor: "#111"
// })
tl.to(".page1 h1",{
    x: -80,
},"anim")
tl.to(".page1 h2",{
    x: 150,
},"anim")
tl.to(".page1 video",{
    width: "90%"
},"anim")
var tl2= gsap.timeline({
  scrollTrigger:{
    scroller: ".main",
    start: "top -123%",
    end: "top -130%",
    scrub:3,
}
})
tl2.to(".main",{
  backgroundColor: "#fff"
})
var tl3=gsap.timeline({
  scrollTrigger:{
    scroller: ".main",
    start: "top -340%",
    end: "top -390%",
    scrub: 3,
  }
})
tl3.to(".main",{
  backgroundColor: "#111"
})
boxes.forEach(function(box){
  box.addEventListener("mouseenter",function(){
     var att=box.getAttribute("dataimg");
     crsr.style.width="400px";
     crsr.style.height="350px";
     crsr.style.borderRadius="0";
     crsr.style.backgroundImage= `url(${att})`;
  })
  box.addEventListener("mouseleave",function(){
    crsr.style.width="20px";
     crsr.style.height="20px";
     crsr.style.borderRadius="50%";
     crsr.style.backgroundImage= "none";
  })
})