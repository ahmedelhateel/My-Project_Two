// Variables
const icon = document.getElementById('icons');
const show = document.getElementById('show');
const links = document.getElementById('links');
const links1 = document.getElementById('links1');
const links2 = document.getElementById('links2');
const links3 = document.getElementById('links3');
const links4 = document.getElementById('links4');
const links5 = document.getElementById('links5');
const search = document.getElementById('search');
const iconSearch = document.getElementById('icon-search');
const divform = document.getElementById('form');
const buttonSearch = document.getElementById('button-search');
const scrollToContact = document.getElementById('scrollToContact');
const scrollToServices = document.getElementById('services');
const scrollToPortoflio = document.getElementById('portoflio');
const secrollToAbout = document.getElementById('about');
const secrollToPricing = document.getElementById('pricing');
const secrollToContact = document.getElementById('contact');
const landing = document.getElementById('landing');


// Show Links
function showLink() {
    show.style.display = 'flex';
    show.style.flexDirection = 'column';
    show.style.position = 'absolute';
    show.style.top = '100%';
    show.style.left = '0';
    show.style.width = '100%';
    show.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    links.style.padding = "15px";
    links1.style.padding = "15px";
    links2.style.padding = "15px";
    links3.style.padding = "15px";
    links4.style.padding = "15px";
    links5.style.padding = "15px";
    
}
// Hide Links
function hideLink1() {
    hideSearch();
    show.style.display = 'flex';
    divform.style.borderLeft = '1px solid white'
    buttonSearch.style.display = 'none';
}
function hideLink2() {
  hideSearch();
  show.style.display = 'none';
  buttonSearch.style.display = 'none';
  icon.style.display = 'block';
}
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  // call function for mobile devices
  landing.addEventListener('click', hideLink2);
  scrollToServices.addEventListener('click', hideLink2);
  scrollToPortoflio.addEventListener('click', hideLink2);
  secrollToAbout.addEventListener('click', hideLink2);
} else {
  // call function for desktop computers
  landing.addEventListener('click', hideLink1);
  scrollToServices.addEventListener('click', hideLink1);
  scrollToPortoflio.addEventListener('click', hideLink1);
  secrollToAbout.addEventListener('click', hideLink1);
}
// Show Search
function showSearch() {
    iconSearch.style.display = 'none';
    divform.style.width =  '212px';
    divform.style.border = 'none';
    search.style.display = 'block';
    search.style.height = '36px';
    search.style.position = 'absolute';
    search.style.top = '-3px';
    search.style.left = '-390px';
    show.style.width = '500px';
    show.style.display = 'none';
    buttonSearch.style.display = 'block';
    icon.style.display = 'none';
}
// Hide Search
function hideSearch() {
    iconSearch.style.display = 'block';
    divform.style.width =  '40px';
    search.style.display = 'none';
    show.style.display = 'flex';
}
// Search
let allData = ["services", "portfolio", "about", "pricing", "contact"];
let searchMood = 'title';
function getSearchMood() {
        if(search.value == allData[0]) {
            scrollTo1();
            search.value = '';
        } else if(search.value == allData[1]) {
            scrollTo2();
            search.value = '';
        } else if(search.value == allData[2]) {
            scrollTo3();
            search.value = '';
        } else if(search.value == allData[3]) {
            scrollTo4();
            search.value = '';
      } else if(search.value == allData[4]) {
            scrollTo5();
            search.value = '';
      } else {
            search.value = '';
        }
}
function scrollTo1() {
    scrollToServices.scrollIntoView({behavior: "smooth"});
}
links1.addEventListener('click', scrollTo1);
function scrollTo2() {
  scrollToPortoflio.scrollIntoView({behavior: "smooth"});
}
links2.addEventListener('click', scrollTo2);
function scrollTo3() {
  secrollToAbout.scrollIntoView({behavior: "smooth"});
}
links3.addEventListener('click', scrollTo3);
function scrollTo4() {
  secrollToPricing.scrollIntoView({behavior: "smooth"});
}
links4.addEventListener('click', scrollTo4);
function scrollTo5() {
  secrollToContact.scrollIntoView({behavior: "smooth"});
}
links5.addEventListener('click', scrollTo5);
// Page navigation action
// Valiables
const textColor = document.getElementById('text');
const backgroundImage = document.getElementById('landing');
const li1Color =  document.getElementById('li1');
const li2Color =  document.getElementById('li2');
const li3Color =  document.getElementById('li3');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');
const designText = document.getElementById('textDesign');
const Text = document.getElementById('textDesign');
const stats = document.getElementById('stats');
const stats1 = document.getElementById('stats1');
const stats2 = document.getElementById('stats2');
const stats3 = document.getElementById('stats3');
const videoText = document.getElementById('videoText');


// Move to the first page
function color1Change() {
    textColor.style.backgroundColor = '#0058ff91';
    designText.style.backgroundColor = '#0058ff91';
    designText.style.backgroundColor = '#0058ff91';
    stats.style.backgroundColor = '#0058ff91';
    stats1.style.backgroundColor = '#0058ff91';
    stats2.style.backgroundColor = '#0058ff91';
    stats3.style.backgroundColor = '#0058ff91';
    videoText.style.backgroundColor = '#0058ff91';
    backgroundImage.style.backgroundImage = 'url(images/imges4.jpg)';
    li3Color.classList.add('active');
    li2Color.classList.remove('active');
    li1Color.classList.remove('active');
}
// Move to the second page
function color3Change() {
    textColor.style.backgroundColor = 'rgba(163, 0, 255, 0.57)';
    designText.style.backgroundColor = 'rgba(163, 0, 255, 0.57)';
    designText.style.backgroundColor = 'rgba(163, 0, 255, 0.57)';
    stats.style.backgroundColor = 'rgba(163, 0, 255, 0.57)';
    stats1.style.backgroundColor = 'rgba(163, 0, 255, 0.57)';
    stats2.style.backgroundColor = 'rgba(163, 0, 255, 0.57)';
    stats3.style.backgroundColor = 'rgba(163, 0, 255, 0.57)';
    videoText.style.backgroundColor = 'rgba(163, 0, 255, 0.57)';
    backgroundImage.style.backgroundImage = 'url(images/imges5.jpg)';
    li1Color.classList.add('active');
    li2Color.classList.remove('active');
    li3Color.classList.remove('active');
}
// Move to the third page
function color2Change() {
    textColor.style.backgroundColor = '';
    designText.style.backgroundColor = '';
    designText.style.backgroundColor = '';
    stats.style.backgroundColor = '';
    stats1.style.backgroundColor = '';
    stats2.style.backgroundColor = '';
    stats3.style.backgroundColor = '';
    videoText.style.backgroundColor = '';
    backgroundImage.style.backgroundImage = '';
    li2Color.classList.add('active');
    li3Color.classList.remove('active');
    li1Color.classList.remove('active');
}
// Action Mobility
var counter = 0;
var firstFunctionRunning = false;
var secondFunctionRunning = false;
var thirdFunctionRunning = false;
function firstFunction() {
  firstFunctionRunning = true;
  color1Change();
  backgroundDesign1()
}
function secondFunction() {
  firstFunctionRunning = false;
  secondFunctionRunning = true;
  color2Change();
}
function thirdFunction() {
  secondFunctionRunning = false;
  thirdFunctionRunning = true;
  color3Change(); 
}
function leftHandleClick() {
    counter++;
  
    if (counter === 1) {
    if (firstFunctionRunning) {
      firstFunctionRunning = false;
    } else {
      firstFunction();
    }
  } else if (counter === 2) {
    if (secondFunctionRunning) {
      secondFunctionRunning = false;
    } else {
      secondFunction();
    }
  } else if (counter === 3) {
    if (thirdFunctionRunning) {
      thirdFunctionRunning = false;
    } else {
      thirdFunction();
    }
    counter = 0;
  }
}
// responsible for click
function rightHandleClick() {
    counter++;
    if (counter === 1) {
    if (firstFunctionRunning) {
      firstFunctionRunning = false;
    } else {
        thirdFunction();
    }
  } else if (counter === 2) {
    if (secondFunctionRunning) {
      secondFunctionRunning = false;
    } else {
      secondFunction();
    }
  } else if (counter === 3) {
    if (thirdFunctionRunning) {
      thirdFunctionRunning = false;
    } else {
        firstFunction();
    }
    counter = 0;
  }
}
rightButton.addEventListener("click", leftHandleClick);
leftButton.addEventListener("click", leftHandleClick);

// Start Portoflio
// Valiable
const all = document.getElementById('portoflioAll');
const app = document.getElementById('portfolioApp');
const photo = document.getElementById('portfolioPhoto');
const web = document.getElementById('portfolioWeb');
const print1 = document.getElementById('portfolioPrint');
const allImages = document.getElementById('allImages');
const appImages = document.getElementById('appImages');
const photoImages = document.getElementById('photoImages');
const webImages = document.getElementById('webImages');
const printImages = document.getElementById('printImages');

function addClassAll() {
  all.classList.add('active');
  app.classList.remove('active');
  photo.classList.remove('active');
  web.classList.remove('active');
  print1.classList.remove('active');
  allImages.style.display = 'flex';
  appImages.style.display = 'none';
  photoImages.style.display = 'none';
  webImages.style.display = 'none';
  printImages.style.display = 'none';
}
all.addEventListener('click', addClassAll);

function addClassApp() {
  app.classList.add('active');
  all.classList.remove('active');
  photo.classList.remove('active');
  web.classList.remove('active');
  print1.classList.remove('active');
  appImages.style.display = 'flex';
  allImages.style.display = 'none';
  photoImages.style.display = 'none';
  webImages.style.display = 'none';
  printImages.style.display = 'none';
}
app.addEventListener('click', addClassApp);
function addClassPhoto() {
  photo.classList.add('active');
  app.classList.remove('active');
  all.classList.remove('active');
  web.classList.remove('active');
  print1.classList.remove('active');
  appImages.style.display = 'none';
  allImages.style.display = 'none';
  webImages.style.display = 'none';
  printImages.style.display = 'none';
  photoImages.style.display = 'flex';
}
photo.addEventListener('click', addClassPhoto);
function addClassWeb() {
  web.classList.add('active');
  app.classList.remove('active');
  photo.classList.remove('active');
  all.classList.remove('active');
  print1.classList.remove('active');
  appImages.style.display = 'none';
  allImages.style.display = 'none';
  photoImages.style.display = 'none';
  webImages.style.display = 'flex';
  printImages.style.display = 'none';
}
web.addEventListener('click', addClassWeb);
function addClassPrint1() {
  print1.classList.add('active');
  app.classList.remove('active');
  photo.classList.remove('active');
  web.classList.remove('active');
  all.classList.remove('active');
  appImages.style.display = 'none';
  allImages.style.display = 'none';
  photoImages.style.display = 'none';
  webImages.style.display = 'none';
  printImages.style.display = 'flex';
}
print1.addEventListener('click', addClassPrint1);
// End Portoflio
// Start Skills
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const contentImg1 = document.getElementById('contentImg1');
const contentImg2 = document.getElementById('contentImg2');
const liImages1 = document.getElementById('images1');
const liImages2 = document.getElementById('images2');
const liImages3 = document.getElementById('images3');


function innerimg1() {
  contentImg1.innerHTML= `
  <img id="img2" src="images/Cartoonify(3).png" alt="">
  <div class="text">
      Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet
      tincidunt.
      <p>John Doe, CEO</p>
  `
  contentImg2.innerHTML= `
  <img id="img2" src="images/Cartoonify(4).png" alt="">
  <div class="text">
      Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet
      tincidunt.
      <p>John Doe, CEO</p>
  `
  liImages1.classList.add('active');
  liImages2.classList.remove('active');
  liImages3.classList.remove('active');
}
function innerimg2() {
  contentImg1.innerHTML= `
  <img id="img2" src="images/Cartoonify(1).png" alt="">
  <div class="text">
      Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet
      tincidunt.
      <p>John Doe, CEO</p>
  `
  contentImg2.innerHTML= `
  <img id="img2" src="images/Cartoonify(2).png" alt="">
  <div class="text">
      Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet
      tincidunt.
      <p>John Doe, CEO</p>
  `
  liImages2.classList.add('active');
  liImages1.classList.remove('active');
  liImages3.classList.remove('active');
}
function innerimg3() {
  contentImg1.innerHTML= `
  <img id="img2" src="images/Cartoonify(5).png" alt="">
  <div class="text">
      Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet
      tincidunt.
      <p>John Doe, CEO</p>
  `
  contentImg2.innerHTML= `
  <img id="img2" src="images/Cartoonify(6).png" alt="">
  <div class="text">
      Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet
      tincidunt.
      <p>John Doe, CEO</p>
  `
  liImages3.classList.add('active');
  liImages1.classList.remove('active');
  liImages2.classList.remove('active');
}
// End Skills
// Start Footer

function facebook() {
  open('https://www.facebook.com/', '_blank')
}
function twitter() {
  open('https://www.twitter.com/', '_blank')
}
function google() {
  open('https://www.google.com/', '_blank')
}
function linkedin() {
  open('https://www.linkedin.com/', '_blank')
}
// End Footer


