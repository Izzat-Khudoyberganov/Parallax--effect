const birds = document.querySelector('.birds'),
  cloud = document.querySelector('.cloud__two'),
  cloudOne = document.querySelector('.cloud__one'),
  cloudThree = document.querySelector('.cloud__three')
  sun = document.querySelector('.sun'),
  river = document.querySelector('.river')


window.addEventListener('scroll', function () {
  let windowY = this.scrollY
  cloud.style.transform = `translate(${windowY}px, ${windowY / 100}px)`
  birds.style.transform = `translate(${windowY}px, ${-windowY}px)`
  cloudOne.style.transform = `translate(${-windowY}px)`
  sun.style.transform = `translate(${windowY}px,${-windowY / 2}px)`
})

window.addEventListener('mousemove', (e) => {
  let x = (window.innerWidth - e.pageX) / 10
  let y =  (window.innerHeight - e.pageY) / 10
  cloud.style.transform = `translate(${x}px, ${y}px)`
  sun.style.transform = `translate(${x}px, ${y}px)`
  cloudOne.style.transform = `translate(${-x}px, ${y}px)`
  river.style.transform = `translate(0px, ${y / 15}px)`
  cloudThree.style.transform = `translate(${-x}px, ${y}px)`
  birds.style.transform = `translate(${x}px, ${y}px)`
})