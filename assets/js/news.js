import { getNews,getNews2 } from "./helper.js";
// images
const renderCarousel = async () => {
  const elCarousel = document.querySelector("#carouselS");
  const carouselInner = document.createElement("div");
  carouselInner.classList.add("carousel-inner");

  const news = await getNews2();
  let dataArticle = news.data.posts;
  console.log(dataArticle);

  // Array.from(dataArticle).forEach(data => {

  //   console.log(data.urlToImage);

  // })

  // dataArticle.map((data)=>{
    
  //   const carouselItem = document.createElement("div");

  //   carouselItem.classList.add("carousel-item");

  //   // if (i == 0) {
  //   //   carouselItem.classList.add("active");
  //   // }

  //   const image = document.createElement("img");
  //   image.classList.add("w-100", "d-block", "img-fluid");
  //   image.setAttribute("src", data.thumbnail);
  //   const aLink = document.createElement("a");
  //   aLink.setAttribute("href", data.link);
  //   aLink.setAttribute("target", "_blank");
  //   aLink.appendChild(image);

  // // 1 <div class="carousel-caption d-none d-md-block">
  //   //     2 <a href="https://getbootstrap.com/docs/5.1/components/carousel/" type="_blank">
  //   //       3 <h5>Second slide label</h5>
  //   //      2 </a>
  //   //  1 </div>

  //   // Step 1
  //   const elCarCap = document.createElement("div");
  //   elCarCap.classList.add("carousel-caption", "d-none", "d-md-block");

  //   // Step 2
  //   const aLink2 = document.createElement('a')
  //   aLink2.setAttribute("href",data.link)
  //   aLink2.setAttribute("target","_blank")
    
  //   // Step 3
  //   const elCarCapTi = document.createElement("h3");
  //   elCarCapTi.innerHTML = data.title;
  //   aLink2.appendChild(elCarCapTi);

  //   elCarCap.appendChild(aLink2)

  //   // console.log(dataArticle[i].title);
  //   // elCarCapTi.innerHTML()

  //   carouselItem.appendChild(elCarCap);

  //   carouselItem.appendChild(aLink);

  //   carouselInner.appendChild(carouselItem);
  // })
  for (let i = 0; i < dataArticle.length; i++) {
    // console.log(images[i]);

    const carouselItem = document.createElement("div");

    carouselItem.classList.add("carousel-item");

    if (i == 0) {
      carouselItem.classList.add("active");
    }

    const image = document.createElement("img");
    image.classList.add("w-100", "d-block", "img-fluid");
    image.setAttribute("src", dataArticle[i].thumbnail);
    const aLink = document.createElement("a");
    aLink.setAttribute("href", dataArticle[i].link);
    aLink.setAttribute("target", "_blank");
    aLink.appendChild(image);

  // 1 <div class="carousel-caption d-none d-md-block">
    //     2 <a href="https://getbootstrap.com/docs/5.1/components/carousel/" type="_blank">
    //       3 <h5>Second slide label</h5>
    //      2 </a>
    //  1 </div>

    // Step 1
    const elCarCap = document.createElement("div");
    elCarCap.classList.add("carousel-caption", "d-none", "d-md-block");

    // Step 2
    const aLink2 = document.createElement('a')
    aLink2.setAttribute("href",dataArticle[i].link)
    aLink2.setAttribute("target","_blank")
    
    // Step 3
    const elCarCapTi = document.createElement("h3");
    elCarCapTi.innerHTML = dataArticle[i].title;
    aLink2.appendChild(elCarCapTi);

    elCarCap.appendChild(aLink2)

    // console.log(dataArticle[i].title);
    // elCarCapTi.innerHTML()

    carouselItem.appendChild(elCarCap);

    carouselItem.appendChild(aLink);

    carouselInner.appendChild(carouselItem);
  }

  elCarousel.appendChild(carouselInner);
};

const Render = async () => {
  const images = [
    "https://images.unsplash.com/photo-1621609764095-b32bbe35cf3a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80",
    "https://media.istockphoto.com/photos/mount-hood-oregon-picture-id1268487061?s=612x612",
    "https://media.istockphoto.com/photos/mount-hood-reflecting-in-trillium-lake-at-sunset-in-mount-hood-picture-id1284156839?s=612x612",
  ];

  // let news = await getNews()
  // news.map(async(value)=>{
  //   renderCarousel(value.urlToImage)
  // })

  // renderCarousel(images);
  // const news = await getNews()
  // let dataArticle = news.articles

  // Array.from(dataArticle).forEach(data => {

  //   console.log(data.urlToImage);

  // })

  const news2 = await getNews2()

  console.log(news2,'==============TTEST===========');

  await renderCarousel();
};

Render();
