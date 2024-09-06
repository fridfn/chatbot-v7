
let boxHobby = document.querySelectorAll('#box-hobby-clr');
let blueBg = document.querySelectorAll('#blueHeaderUser');
let arrow = document.querySelectorAll('.arrow');
let arrowAsk = document.querySelector('.arrowAsk');
let arrowQ = document.querySelector('.arrowQuest');
let wrapper = document.querySelectorAll('.wrapperFav');
let rowFav = document.querySelectorAll('#arrowFavorite');
let myDescription = document.querySelectorAll('#myDescription');
let cardsColor = document.querySelectorAll('#cards-color');
let textWhite = document.querySelectorAll('#textWhite');
let icon = document.querySelectorAll('.ico-koleksi');
let nemBots = document.querySelector('.nameBot');
let botStat = document.querySelector('.botStatus');
let desk = document.querySelectorAll('.description');
let descText = document.querySelectorAll('.descriptionText');
let mainIcon = document.querySelectorAll('.main-icon');
let arrowButon = document.querySelector('.arrow-button');
let nameUser = document.querySelector('.nameUser');
let userStatus = document.querySelector('.statusUser');
let footer = document.querySelector('.footer');
let wrapInput = document.querySelector('.wrapper');
let input = document.querySelectorAll('#jawaban');
let inputEdit = document.querySelectorAll('#inputEditable');
let myButton = document.querySelectorAll('#myButton');
let bio = document.querySelectorAll('.infoTxt');
let about = document.querySelector('.about');
let favItem = document.querySelectorAll('.favorite-items');
let chatUser = document.querySelector('.chatJawaban');
let chatBot = document.querySelector('.chatPertanyaans');
let imgBox = document.querySelector('#imgBox');
let imgProfile = document.querySelector('.imgProfile');
let fablue = document.querySelector('.nameBot');
let mail = document.getElementById('mail');
let footers = document.querySelectorAll('#footers');
let myKoleksi = document.querySelectorAll('#myKoleksi');

var theme = localStorage.getItem("theme");

if(theme === null) {
 console.log('tema automatis, berdasarkan user menggunakan tema browser');
}

function applyTheme() {
 if(theme === "basic") {
  console.log("basic theme");
  localStorage.setItem("theme", "basic")
  var img = document.createElement('img');
  img.src = 'boticon.webp';
  document.getElementById('imgBox').appendChild(img);
  fablue.innerHTML = "Fabot Chat";
  containerLinear.style.opacity = "1";
  
  profileSection.forEach(function(profileSection) {
   profileSection.classList.remove('profileBg');
  });
  boxHobby.forEach(function(boxHobby) {
   boxHobby.classList.remove('boxHobbyClr');
  });
  blueBg.forEach(function(blueBg) {
   blueBg.classList.remove('blueBg');
  });
  cardsColor.forEach(function(desc) {
   desc.classList.remove('cardsColorBg');
  });
  textWhite.forEach(function(txt) {
   txt.classList.remove('textWhite');
  });
  rowFav.forEach(function(rows) {
   rows.classList.remove('rowBg');
  });
  desk.forEach(function(descrip) {
   descrip.classList.remove('descBg');
  });
  descText.forEach(function(desctexts) {
   desctexts.classList.remove('textBg');
  });
  arrow.forEach(function(arrows) {
   arrows.classList.remove('arrowBg');
  });
  wrapper.forEach(function(wrap) {
   wrap.classList.remove('wrapperBg');
  });
  bio.forEach(function(biotxt) {
   biotxt.classList.remove('bioClr');
  });
  favItem.forEach(function(favItems) {
   favItems.classList.remove('favItems');
  });
  myButton.forEach(function(myButtons) {
   myButtons.classList.remove('myButtonBg');
  });
  icon.forEach(function(icons) {
   icons.classList.remove('icons-koleksi');
  });
  myDescription.forEach(function(myDescriptionBg) {
    myDescriptionBg.classList.remove('myDescriptionBg');
  });
  inputEdit.forEach(function(inputEdits) {
   inputEdits.classList.remove('inputEditable');
  });
  containerId.forEach(function(container){
   container.classList.remove('containerBg');
  });
  input.forEach(function(inputBg) {
   inputBg.classList.remove('inputBg');
  });
  myKoleksi.forEach(function(myKoleksis) {
   myKoleksis.classList.remove('myKoleksiClr');
  });
  footers.forEach(function(footer){
   footer.classList.remove('footers');
  });
  mainIcon.forEach(function(mainIcons) {
   mainIcons.classList.remove('menuIcon');
  });
  
  
  blueBg[1].classList.remove('blueBg2');
  menuSidebar.classList.remove('sidebarClr');
  arrowA.classList.remove('arrowAClr');
  arrowAsk.classList.remove('arrowAskClr');
  arrowQ.classList.remove('arrowQClr');
  arrowQuest.classList.remove('arrowQClr');
  chatBot.classList.remove('chatBot');
  clonedElementPertanyaan.classList.remove('chatBot');
  clonedElementJawaban.classList.remove('chatUser');
  imgProfile.classList.remove('brderProf');
  infoAlert.classList.remove('colorAlert')
  imgBox.classList.remove('borderBg');
  chatUser.classList.remove('chatUser');
  about.classList.remove('aboutBg');
  wrapInput.classList.remove('footerBg');
  userStatus.classList.remove('userStatus');
  nameUser.classList.remove('nameUsers');
  arrowButon.classList.remove('menuIcon');
  nemBots.classList.remove('nameBotClr');
  botStat.classList.remove('botStatClr');
  menu.classList.remove('menuBg');
  header.classList.remove('headerBg');
 }
 else if (theme === "blue") {
  console.log("blue theme");
  localStorage.setItem("theme", "blue")
  var img = document.createElement('img');
  img.src = 'fablue.webp';
  document.getElementById('imgBox').appendChild(img);
  fablue.innerHTML = "Fablue Bot";
  containerLinear.style.opacity = "0";
  
  
  profileSection.forEach(function(profileSection) {
   profileSection.classList.add('profileBg');
  });
  boxHobby.forEach(function(boxHobby) {
   boxHobby.classList.add('boxHobbyClr');
  });
  blueBg.forEach(function(blueBg) {
   blueBg.classList.add('blueBg');
  });
  cardsColor.forEach(function(desc) {
   desc.classList.add('cardsColorBg');
  });
  textWhite.forEach(function(txt) {
   txt.classList.add('textWhite');
  });
  rowFav.forEach(function(rows) {
   rows.classList.add('rowBg');
  });
  cardsColor.forEach(function(desc) {
   desc.classList.add('cards-color');
  });
  arrow.forEach(function(arrows) {
   arrows.classList.add('arrowBg');
  });
  desk.forEach(function(descrip) {
   descrip.classList.add('descBg');
  });
  descText.forEach(function(desctexts) {
   desctexts.classList.add('textBg');
  });
  wrapper.forEach(function(wrap) {
   wrap.classList.add('wrapperBg');
  });
  bio.forEach(function(biotxt) {
   biotxt.classList.add('bioClr');
  });
  favItem.forEach(function(favItems) {
   favItems.classList.add('favItems');
  });
  myButton.forEach(function(myButtons) {
   myButtons.classList.add('myButtonBg');
  });
  icon.forEach(function(icons) {
    icons.classList.add('icons-koleksi');
  });
  myDescription.forEach(function(myDescriptionBg) {
    myDescriptionBg.classList.add('myDescriptionBg');
  });
  inputEdit.forEach(function(inputEdits) {
   inputEdits.classList.add('inputEditable');
  });
  containerId.forEach(function(container){
   container.classList.add('containerBg');
  });
  input.forEach(function(inputBg) {
   inputBg.classList.add('inputBg');
  });
  myKoleksi.forEach(function(myKoleksis) {
   myKoleksis.classList.add('myKoleksiClr');
  });
  footers.forEach(function(footer){
   footer.classList.add('footers');
  });
  mainIcon.forEach(function(mainIcons) {
   mainIcons.classList.add('menuIcon');
  });
  
  
  blueBg[1].classList.add('blueBg2');
  menuSidebar.classList.add('sidebarClr');
  menu.classList.add('menuBg');
  arrowA.classList.add('arrowAClr');
  arrowAsk.classList.add('arrowAskClr');
  arrowQ.classList.add('arrowQClr');
  arrowQuest.classList.add('arrowQClr');
  chatBot.classList.add('chatBot');
  clonedElementJawaban.classList.add('chatUser');
  clonedElementPertanyaan.classList.add('chatBot');
  infoAlert.classList.add('colorAlert');
  imgProfile.classList.add('brderProf');
  imgBox.classList.add('borderBg');
  chatUser.classList.add('chatUser');
  about.classList.add('aboutBg');
  wrapInput.classList.add('footerBg');
  userStatus.classList.add('userStatus');
  nameUser.classList.add('nameUsers');
  arrowButon.classList.add('menuIcon');
  nemBots.classList.add('nameBotClr');
  botStat.classList.add('botStatClr');
  header.classList.add('headerBg');
 }
}

setTimeout(applyTheme, 700);

function switchTheme() {
 console.log('ubah theme di klikk');
 if(localStorage.getItem("theme") === "basic") {
  moon.forEach(function(moons) {
  moons.classList.add('clickEffectBlue');
  setTimeout(() => {
  moons.classList.remove('clickEffectBlue');
   }, 400);
  });
 } else {
  moon.forEach(function(moons) {
  moons.classList.add('clickEffect');
  setTimeout(() => {
  moons.classList.remove('clickEffect');
   }, 400);
  });
 }
 
 if(menu.classList.contains("menuBg")) {
  localStorage.setItem("theme", "basic");
  var img = document.createElement('img');
  img.src = 'boticon.webp';
  document.getElementById('imgBox').appendChild(img);
  fablue.innerHTML = "Fabot Chat";
  containerLinear.style.opacity = "1";
  
  
  profileSection.forEach(function(profileSection) {
   profileSection.classList.remove('profileBg');
  });
  boxHobby.forEach(function(boxHobby) {
   boxHobby.classList.remove('boxHobbyClr');
  });
  blueBg.forEach(function(blueBg) {
   blueBg.classList.remove('blueBg');
  });
  cardsColor.forEach(function(desc) {
   desc.classList.remove('cardsColorBg');
  });
  textWhite.forEach(function(txt) {
   txt.classList.remove('textWhite');
  });
  rowFav.forEach(function(rows) {
   rows.classList.remove('rowBg');
  });
  desk.forEach(function(descrip) {
   descrip.classList.remove('descBg');
  });
  descText.forEach(function(desctexts) {
   desctexts.classList.remove('textBg');
  });
  arrow.forEach(function(arrows) {
   arrows.classList.remove('arrowBg');
  });
  wrapper.forEach(function(wrap) {
   wrap.classList.remove('wrapperBg');
  });
  bio.forEach(function(biotxt) {
   biotxt.classList.remove('bioClr');
  });
  favItem.forEach(function(favItems) {
   favItems.classList.remove('favItems');
  });
  myButton.forEach(function(myButtons) {
   myButtons.classList.remove('myButtonBg');
  });
  icon.forEach(function(icons) {
   icons.classList.remove('icons-koleksi');
  });
  myDescription.forEach(function(myDescriptionBg) {
    myDescriptionBg.classList.remove('myDescriptionBg');
  });
  inputEdit.forEach(function(inputEdits) {
   inputEdits.classList.remove('inputEditable');
  });
  containerId.forEach(function(container){
   container.classList.remove('containerBg');
  });
  input.forEach(function(inputBg) {
   inputBg.classList.remove('inputBg');
  });
  myKoleksi.forEach(function(myKoleksis) {
   myKoleksis.classList.remove('myKoleksiClr');
  });
  footers.forEach(function(footer){
   footer.classList.remove('footers');
  });
  mainIcon.forEach(function(mainIcons) {
   mainIcons.classList.remove('menuIcon');
  });
  
  blueBg[1].classList.remove('blueBg2');
  menuSidebar.classList.remove('sidebarClr');
  arrowA.classList.remove('arrowAClr');
  arrowAsk.classList.remove('arrowAskClr');
  arrowQ.classList.remove('arrowQClr');
  arrowQuest.classList.remove('arrowQClr');
  chatBot.classList.remove('chatBot');
  clonedElementPertanyaan.classList.remove('chatBot');
  clonedElementJawaban.classList.remove('chatUser');
  imgProfile.classList.remove('brderProf');
  infoAlert.classList.remove('colorAlert')
  imgBox.classList.remove('borderBg');
  chatUser.classList.remove('chatUser');
  about.classList.remove('aboutBg');
  wrapInput.classList.remove('footerBg');
  userStatus.classList.remove('userStatus');
  nameUser.classList.remove('nameUsers');
  arrowButon.classList.remove('menuIcon');
  nemBots.classList.remove('nameBotClr');
  botStat.classList.remove('botStatClr');
  menu.classList.remove('menuBg');
  header.classList.remove('headerBg');
 }
 else {
  localStorage.setItem("theme", "blue");
  var img = document.createElement('img');
  img.src = 'fablue.webp';
  document.getElementById('imgBox').appendChild(img);
  fablue.innerHTML = "Fablue Bot";
  containerLinear.style.opacity = "0";
  
  
  profileSection.forEach(function(profileSection) {
   profileSection.classList.add('profileBg');
  });
  boxHobby.forEach(function(boxHobby) {
   boxHobby.classList.add('boxHobbyClr');
  });
  blueBg.forEach(function(blueBg) {
   blueBg.classList.add('blueBg');
  });
  cardsColor.forEach(function(desc) {
   desc.classList.add('cardsColorBg');
  });
  textWhite.forEach(function(txt) {
   txt.classList.add('textWhite');
  });
  rowFav.forEach(function(rows) {
   rows.classList.add('rowBg');
  });
  arrow.forEach(function(arrows) {
   arrows.classList.add('arrowBg');
  });
  desk.forEach(function(descrip) {
   descrip.classList.add('descBg');
  });
  descText.forEach(function(desctexts) {
   desctexts.classList.add('textBg');
  });
  wrapper.forEach(function(wrap) {
   wrap.classList.add('wrapperBg');
  });
  bio.forEach(function(biotxt) {
   biotxt.classList.add('bioClr');
  });
  favItem.forEach(function(favItems) {
   favItems.classList.add('favItems');
  });
  myButton.forEach(function(myButtons) {
   myButtons.classList.add('myButtonBg');
  });
  icon.forEach(function(icons) {
    icons.classList.add('icons-koleksi');
  });
  myDescription.forEach(function(myDescriptionBg) {
    myDescriptionBg.classList.add('myDescriptionBg');
  });
  inputEdit.forEach(function(inputEdits) {
   inputEdits.classList.add('inputEditable');
  });
  containerId.forEach(function(container){
   container.classList.add('containerBg');
  });
  input.forEach(function(inputBg) {
   inputBg.classList.add('inputBg');
  });
  myKoleksi.forEach(function(myKoleksis) {
   myKoleksis.classList.add('myKoleksiClr');
  });
  footers.forEach(function(footer){
   footer.classList.add('footers');
  });
  mainIcon.forEach(function(mainIcons) {
   mainIcons.classList.add('menuIcon');
  });
  
  blueBg[1].classList.add('blueBg2');
  menuSidebar.classList.add('sidebarClr');
  menu.classList.add('menuBg');
  arrowA.classList.add('arrowAClr');
  arrowAsk.classList.add('arrowAskClr');
  arrowQ.classList.add('arrowQClr');
  arrowQuest.classList.add('arrowQClr');
  chatBot.classList.add('chatBot');
  clonedElementPertanyaan.classList.add('chatBot');
  clonedElementJawaban.classList.add('chatUser');
  infoAlert.classList.add('colorAlert');
  imgProfile.classList.add('brderProf');
  imgBox.classList.add('borderBg');
  chatUser.classList.add('chatUser');
  about.classList.add('aboutBg');
  wrapInput.classList.add('footerBg');
  userStatus.classList.add('userStatus');
  nameUser.classList.add('nameUsers');
  arrowButon.classList.add('menuIcon');
  nemBots.classList.add('nameBotClr');
  botStat.classList.add('botStatClr');
  header.classList.add('headerBg');
 }
}

console.log(blueBg[1])