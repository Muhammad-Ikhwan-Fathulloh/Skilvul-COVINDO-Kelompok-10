// import { getNews } from './helpers.js';


// // /**
// //  *
// //  * @param {String} thumbnail => url yang kita ambil menggunakan Unsplash API
// //  * @param {Object} post => object post yang kita ambil dari jsonplaceholder API
// //  * @returns DOM Element
// //  */

// const createCarouselElement = () => {
//     // Element Carousel Indicator
//     const elCarInBody = document.createElement("div")
//     const elButCar1 = document.createElement("button")
//     const elButCar2 = document.createElement("button")
//     const elButCar3 = document.createElement("button")

//     elCarInBody.classList.add("carousel-indicators")
//     elCarInBody.appendChild(elButCar1)

//     const elCarNerBody = document.createElement("div")
//     const elCarConPrevBody = document.createElement('button')
//     const elCarConNextBody = document.createElement('button')

//     elButCar1.setAttribute("type","button")
//     elButCar2.setAttribute("type","button")
//     elButCar3.setAttribute("type","button")

//     return elCarInBody

// }

// const RenderNews = ()=> {
//     elCarousel.appendChild(createCarouselElement())
// }

// // RenderNews()

    

    

//     const elCarNerBody = document.createElement("div")
//     const elCarConPrevBody = document.createElement('button')
//     const elCarConNextBody = document.createElement('button')

   
//     elButCar2.setAttribute("type","button")
//     elButCar3.setAttribute("type","button")

function Render() {
    const elCarousel = document.querySelector("#carouselS")
    const elP = document.createElement('p')
    const elCarInBody = document.createElement("div");
    const elCarInerBody = document.createElement('div')

    elP.innerHTML='test'
    elCarInerBody.classList.add('carousel-indicators')
    const button1 = document.createElement('button')
    const button2 = document.createElement('button')
    const button3 = document.createElement('button')

    button1.setAttribute('type','button')
    button2.setAttribute('type','button')
    button3.setAttribute('type','button')

    button1.setAttribute('data-bs-target','#carouselExampleIndicators')
    button2.setAttribute('data-bs-target','#carouselExampleIndicators')
    button3.setAttribute('data-bs-target','#carouselExampleIndicators')

    button1.classList('active')

    elCarInerBody.appendChild(button1)
    elCarInerBody.appendChild(button2)
    elCarInerBody.appendChild(button3)
   elCarInBody.appendChild(elCarInerBody)
    // elCarInBody.classList.add("carousel-indicators")
    
    // elCarInBody.appendChild(elButCar1)
    // const elButCar1 = document.createElement('button')
    // const elButCar2 = document.createElement("button")
    // const elButCar3 = document.createElement("button")

  elCarousel.appendChild(elP)
  elCarousel.appendChild(elCarInBody);
}


console.log('test');
Render()