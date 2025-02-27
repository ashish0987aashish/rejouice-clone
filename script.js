gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();




function cursorEffect() {
    var page1Content = document.querySelector("#page1-content")
var cursor = document.querySelector("#cursor")



// page1Content.addEventListener("mousemove",function(dets){
    
//    cursor.style.left = dets.x+"px"
//    cursor.style.top = dets.y+"px"
// }

page1Content.addEventListener("mousemove",function(dets){
    
    gsap.to(cursor,{

        x:dets.x,
        y:dets.y
  })

})


page1Content.addEventListener("mouseenter",function(){

    gsap.to(cursor,{
        scale:1,
        opacity:1
     })

})


page1Content.addEventListener("mouseleave",function(){


       gsap.to(cursor,{
          scale:0,
          opacity:0
       })
})


}

cursorEffect()



function page2Effect(){
    gsap.from(".elem h1",{

        y:100,
        stagger:0.3,
        duration:2.6,
        opacity:0,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            start:"top 60%",
            end:"top 30%",
            // markers:true,
            scrub:2
        }
    })


    gsap.from(".comp",{
      

        opacity:0.2,
        duration:2,
        y:80,

    })

}

page2Effect()


function page3Effect() {
  gsap.from("#page3-top h4", {
      x: 120,
      stagger: 0.3,
      duration: 2.6,
      scrollTrigger: {
          trigger: "#page3",
          scroller: "#main",
          start: "top 60%",
          end: "top 30%",
         
          scrub: 2,
      },
  });

  gsap.from("#page3-top h2", {
      y: 100, // Vertical animation for h2
      stagger: 0.3,
      duration: 2.6,
      opacity: 0, // Fade-in effect
      scrollTrigger: {
          trigger: "#page3",
          scroller: "#main",
          start: "top 60%",
          end: "top 30%",
         
          scrub: 2,
      },
  });
}


page3Effect()


function page5Effect() {
  gsap.from("#page5 h1", {
      x: 120,
      duration: 2.6,
      scrollTrigger: {
          trigger: "#page5",
          scroller: "#main",
          start: "top 60%",
          end: "top 30%",
         
          scrub: 2,
      },
  });

  gsap.from("#page5 #slider #list ", {
      y: 100, // Vertical animation for h2
      duration: 2.6,
      opacity: 0, // Fade-in effect
      scrollTrigger: {
          trigger: "#page5",
          scroller: "#main",
          start: "top 60%",
          end: "top 30%",
         
          scrub: 2,
      },
  });
}

page5Effect()


var t1 = gsap.timeline()

t1.from("#loader h3",{

    x:60,
    opacity:0,
    duration:1.9,
    stagger:0.4,
    ease:"power4.out"
})


t1.to("#loader h3",{

   opacity:0,
   x:-40,
   duration:1,
   stagger:0.1,
})

t1.to("#loader",{

    opacity:0
})

t1.from("#page1-content h1 span",{

  y:100,
  opacity:0,
  duration:0.5,
  stagger:0.1,
  delay:-0.5
})

t1.to("#loader",{

    display:"none"
})


