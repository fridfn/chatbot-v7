
let headerIcon = document.querySelectorAll('.headerIcon');
let brush = document.getElementById('brush');
let moon = document.querySelectorAll('#moon');
let qr = document.getElementById('qr');
let container = document.querySelector('.container');
let containerId = document.querySelectorAll('#containerId');
let menu = document.querySelector('.menu');
let profileSection = document.querySelectorAll('#profileSection');
let containerOpsi = document.querySelector('.containerOpsi');
let blurLayer = document.querySelector('.blurLayer');
let myAlert = document.querySelector('.containerAlert');
let myAlertText = document.querySelector('.textAlert');
let btnAlert = document.querySelector('.btn-alert');
let infoAlert = document.querySelector('.infoAlert');

let boxDeskripsiKoleksi1 = document.querySelector('.box-deskripsi-koleksi-1');

let containerMail = document.querySelector('.containerMail');
let boxEmail = document.querySelector('.boxEmail');
let judulEmail = document.querySelector('.judulEmail');
let emailValue = document.querySelector('.inputEmail');
let footerEmail = document.querySelector('.footerEmail');

let arrowMenu = document.querySelector('.arrow-menu');
let headerUser = document.querySelector('.headerUser');
let header = document.querySelector('header');
let profileImgBox = document.querySelector('.profileImgBox');
let userInfo = document.querySelector('.userInfo');

let cards = document.querySelector('.cards');
let text1 = document.querySelector('#text1');
let text2 = document.querySelector('#text2');

let descriptionSatu = document.getElementById('descriptionSatu');
let descriptionDua = document.getElementById('descriptionDua');
let descriptionTiga = document.getElementById('descriptionTiga');

let descSatu = document.getElementById('desc1');
let descDua = document.getElementById('desc2');
let descTiga = document.getElementById('desc3');
let descEmpat = document.getElementById('desc4');

descriptionSatu.innerHTML = "Hi👋,My name is Farid Fathoni N. I am the developer of this website and I am a vocational high school student who is very enthusiastic about learning and has a special interest in making websites. Although sometimes I feel confused cause I am self-taught and don't hv a mentor to guide me.";

descriptionDua.innerHTML = "I have taught myself various techniques and programming languages such as HTML, CSS, and JavaScript to build attractive and interactive websites for users.";

descriptionTiga.innerHTML = "and lastly this website was created only to learn how to develop websites using the basic programming language and logic that I currently understand.";

descSatu.innerHTML = "I like to play games when my head can't think anymore about coding";

descDua.innerHTML = "I like to listen to music every day while I'm studying or not, if I'm not listening to it. I feel something is missing in my day";

descTiga.innerHTML = "I really like coding. because when I make something from 0 to it can be something interesting. that is a very proud thing for me";

descEmpat.innerHTML = "I like sleep because it is a place to forget all the things that make me tired";

function descriptionClick() {
 cards.classList.toggle('active');
 setTimeout(() => {
  text1.classList.toggle('active');
 setTimeout(() => {
  text2.classList.toggle('active');
  }, 400);
 }, 500);
 
 window.scrollTo({ top: 0, behavior: 'smooth' });
}

function perbesarGambar() {
  var blurLayer = document.querySelector('.blurLayer');
  let scrollTop = window.pageYOffset;
  let batasHeight = 15;
  
  profileImgBox.addEventListener('click', function(event) {
     event.stopPropagation();
    });
  
  if (profileImgBox.classList.contains('profileImgBesar')) {
   
    blurLayer.style.display = "none";
    profileImgBox.classList.remove('profileImgBesar');
    
  } else {
    blurLayer.style.zIndex = "30";
    profileImgBox.classList.add('profileImgBesar');
    blurLayer.style.display = "block";
    
   if(scrollTop >= batasHeight) {
     profileImgBox.classList.remove('profileImgBesar');
     blurLayer.style.display = "none";
    }
  }
}

const DeveloperMenu = function () {
 arrowMenu.style.display = "block";
 menuSidebar.style.display = "none";
 arrowMenu.classList.toggle('active');
  
 boxDeskripsiKoleksi2 = containerDeskripsiKoleksi.querySelector('.box-deskripsi-koleksi-2');

 if(containerExplore.classList.contains('containerExploreActive')) {
  containerExplore.classList.remove('containerExploreActive');
 
  const firstFooters = footers[0];
  firstFooters.style.position = "absolute";
  containerExplore.style.display = "none";
  exploreBox.forEach(function(exploreBoxes) {
   exploreBoxes.style.opacity = ".2";
  });
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
 
 } else {
 if(menu.classList.contains('active')) {
  setTimeout(() => {
   menuSidebar.style.display = "block";
   arrowMenu.style.display = "none";
   
   header.classList.remove('active');
   menu.classList.remove('active');
   container.classList.remove('active');
   menuSidebar.classList.toggle("active");
   }, 500);
  } else {
   menu.classList.add('active');
   header.classList.add('active');
   container.classList.add('active');
   
   window.scrollTo({ top: 0, behavior: 'smooth' });
  }
 }

 /* if else validation if arrowMenu */
 setTimeout(() => {
  
 if(containerMail.classList.contains('containerMailActive')) {
  containerMail.classList.remove('containerMailActive');
  boxEmail.classList.remove('boxEmailActive');
  }
  
 if (profileImgBox.classList.contains('profileImgBesar')) {
  profileImgBox.classList.remove('profileImgBesar');
  }
  
 if(activeFav) {
  activeFav.classList.remove('active');
  activeDesc.classList.remove('active');
  containerFav.classList.remove('active');
  }
  
 if(containerDeskripsiKoleksi.classList.contains('deskripsiKoleksiActive')) {
  containerDeskripsiKoleksi.classList.remove('deskripsiKoleksiActive');
  }
  
 if(cards.classList.contains('active')) {
   cards.classList.toggle('active');
   setTimeout(() => {
   
   text1.style.transition = ".050s";
   text1.classList.toggle('active');
   
   setTimeout(() => {
   
   text2.style.transition = ".050s";
   text2.classList.toggle('active');
  
   }, 400);
  }, 500);
 }
 
 if(containerOpsi.classList.contains('opsiActive')) {
  containerOpsi.classList.remove('opsiActive');
 }
 
 if(boxDeskripsiKoleksi2.classList.contains('deskripsiKoleksi2Active')) {
  containerDeskripsiKoleksi.classList.remove('deskripsiKoleksiActive');
  boxDeskripsiKoleksi2.classList.remove('deskripsiKoleksi2Active');
  boxDeskripsiKoleksi2.style.display = "none";
 }
 }, 600);
 
 if(containerSidebar.classList.contains('active')) {
  blurLayer.style.display = "none";
  containerSidebar.classList.remove('active');
  }
}/* ARROW MENU END FUNCTION */

arrowMenu.addEventListener('click', function() {
 if(localStorage.getItem("theme") === "basic") {
 arrowMenu.classList.add('clickEffect');
 setTimeout(function() {
   arrowMenu.classList.remove('clickEffect');
  }, 300);
 } else {
 arrowMenu.classList.add('clickEffectBlue');
 setTimeout(function() {
   arrowMenu.classList.remove('clickEffectBlue');
  }, 300);
 }
});

brush.onclick = () => {
 brush.classList.add('clickEffect');
 setTimeout(function() {
 brush.classList.remove('clickEffect');
 opsi();
 }, 300);
}

qr.onclick = () => {
 qr.classList.add('clickEffect');
 setTimeout(function() {
 qr.classList.remove('clickEffect');
 opsi();
 }, 300);
}

window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset;
  var batasHeight = 15;
    
  if (scrollTop > batasHeight) {
    profileImgBox.classList.add('profileEffect');
    userInfo.classList.add('userEffect');
    
    profileImgBox.classList.remove('profileImgBesar');
    blurLayer.style.display = "none";
    
    if(arrowMenu.classList.contains('active')) {
     myAlert.style.display = "none";
    }
    
    if (containerOpsi.classList.contains('opsiActive')) {
     containerOpsi.classList.remove('opsiActive');
     }
     
     if(containerSidebar.classList.contains('active')) {
      blurLayer.style.display = "block";
     }
    
  } else {
   profileImgBox.classList.remove('profileEffect');
   userInfo.classList.remove('userEffect');
  }
});

let favoriteIcons = document.querySelectorAll('.favorite-items');
containerFav = document.querySelector('.container-favorite');
let activeFav = null;
let activeDesc = null;
let clickCount = 0;
favoriteIcons.forEach((favoriteIcon) => {
 const favorite = favoriteIcon.querySelector('.wrapperFav');

  favorite.addEventListener('click', () => {
  const clickedDesc = favoriteIcon.querySelector('.descFav');
  
    if (activeDesc === clickedDesc) {
     clickCount++
      clickedDesc.classList.toggle('active');
      activeFav.classList.remove('active');
      containerFav.classList.remove('active');
      
      if(clickCount >= 2) {
       containerFav.classList.add('active');
      
       clickedDesc.classList.add('active');
       favoriteIcon.querySelector('.rowFav').classList.add('active');
       
       activeFav = favoriteIcon.querySelector('.rowFav');
       
       activeDesc = clickedDesc;
       
        if(clickCount >= 2 && activeDesc === clickedDesc) {
         clickedDesc.classList.remove('active');
         activeFav.classList.remove('active');
         containerFav.classList.remove('active');
         }
       }
     } else {
       if (activeFav) {
        activeFav.classList.remove('active');
        activeDesc.classList.remove('active');
      }
     containerFav.classList.add('active');
     
     clickedDesc.classList.add('active');
     favoriteIcon.querySelector('.rowFav').classList.add('active');
     
     activeFav = favoriteIcon.querySelector('.rowFav');
     
     activeDesc = clickedDesc;
    }
  });
});

function openSendEmail() {
 
 if(containerMail.classList.contains('containerMailActive')) {
  boxEmail.style.transitionDelay = "0s";
  emailValue.innerHTML = "";
  judulEmail.innerHTML = "";
 
  containerMail.classList.remove('containerMailActive');
  boxEmail.classList.remove('boxEmailActive');
  
 if(localStorage.getItem("theme") === "basic") {
  mail.classList.add('clickEffect');
 setTimeout(function() {
  mail.classList.remove('clickEffect');
  }, 300);
 } else {
  mail.classList.add('clickEffectBlue');
  setTimeout(function() {
   mail.classList.remove('clickEffectBlue');
   }, 300);
  }
  
 } else {
  boxEmail.style.transitionDelay = ".6s"
  boxEmail.classList.add('boxEmailActive');
  containerMail.classList.add('containerMailActive');
   
   if(localStorage.getItem("theme") === "basic") {
    mail.classList.add('clickEffect');
   setTimeout(function() {
     mail.classList.remove('clickEffect');
    }, 300);
   } else {
    mail.classList.add('clickEffectBlue');
   setTimeout(function() {
    console.log("masuk ke bluee")
    mail.classList.remove('clickEffectBlue');
   }, 300);
  }
 }
}

function sendEmail() {
 const listKasar = kataKasar;
 inputMail = emailValue.innerHTML.toLowerCase();
 mailTitle = judulEmail.innerHTML.toLowerCase();
 
 if(listKasar.some((kata) => inputMail.includes(kata)) || listKasar.some((kata) => mailTitle.includes(kata))) {
  myAlert.style.display = "block";
  blurLayer.style.display = "block";
  infoAlert.innerHTML = "Perhatian !";
  myAlertText.innerHTML = "maaf. tolong berikan kata kata yang sopan";
  btnAlert.addEventListener('click', closeAlert);
   
  emailValue.style.color = "red";
  judulEmail.style.color = "red";
  judulEmail.style.color = "#f3c8c8";
  emailValue.style.color = "#f3c8c8";
  footerEmail.innerHTML = "Tolong berikan kata kata yang sopan";
  }// validasi berkata kata kasar
else { // validasi tidak berkata kasar
if(emailValue.innerHTML.length >= 7) {
 if(judulEmail.innerHTML.length >= 4 ) {
  if(init >= 1) {
   
  var from = `${userData[0]}`;
  var serviceID = `service_uuzer5a`;
  var email = 'faridfathonin@gmail.com';
  var subject = `${judulEmail.innerHTML}`;
  var body = `${emailValue.innerHTML}`;
  var chatValue = fullData;
  
  var templateParams = {
    nama: from,
    to_email: email,
    subjects: subject,
    message: body,
    userInput: chatValue
  };
  console.log(templateParams);
  
  emailjs.send("service_uuzer5a","template_wb424q8", templateParams);
   
    setTimeout(() => {
     emailValue.innerHTML = "";
     judulEmail.innerHTML = "";
    if(init === 1) {
     infoAlert.style.color = "white";
     myAlert.style.display = "block";
     blurLayer.style.display = "block";
     infoAlert.innerHTML = "Info !";
     myAlertText.innerHTML = `Terimakasih ${userData[0]} sudah mengirimkan email kepada developer 🥳🎉`;
     footerEmail.innerHTML = `Terimakasih sudah mengirimkan email.`;
     btnAlert.addEventListener('click', closeAlert);
     
     emailValue.style.color = "white";
     judulEmail.style.color = "white";
       }
      }, 500);
     } else {
      myAlert.style.display = "block";
      blurLayer.style.display = "block";
      infoAlert.innerHTML = "Info !";
      myAlertText.innerHTML = "Tolong beritahu nama kamu terlebih dahulu sebelum mengirimkan email :)";
      btnAlert.addEventListener('click', closeAlert);
     }
      } else {
      myAlert.style.display = "block";
      blurLayer.style.display = "block";
      infoAlert.innerHTML = "Info !";
      myAlertText.innerHTML = "Tolong beritahu nama kamu terlebih dahulu sebelum mengirimkan email :)";
      btnAlert.addEventListener('click', closeAlert);
     }
    } else {
     myAlert.style.display = "block";
     blurLayer.style.display = "block";
     infoAlert.innerHTML = "Info !";
     myAlertText.innerHTML = "Tolong isi terlebih dahulu !";
     btnAlert.addEventListener('click', closeAlert);
   }
 }
}

ellips.onclick = function() {
 ellips.classList.add('clickEffect');
 
 setTimeout(function() {
  ellips.classList.remove('clickEffect');
 }, 300);
 
 containerOpsi.classList.add('opsiActive');
 containerOpsi.style.transitionDelay = ".5s";
 
 if(localStorage.getItem("theme") === "basic") {
    ellips.classList.add('clickEffect');
   setTimeout(function() {
     ellips.classList.remove('clickEffect');
    }, 300);
   } else {
    ellips.classList.add('clickEffectBlue');
   setTimeout(function() {
    console.log("masuk ke bluee")
    ellips.classList.remove('clickEffectBlue');
   }, 300);
  }
 
 var boxOpsi = document.querySelectorAll('.boxOpsi');

 boxOpsi.forEach(function(box) {
  box.addEventListener('click', function(event) {
   event.stopPropagation();
   
    btnAlert.addEventListener('click', closeAlert);
   
   if(localStorage.getItem("theme") === "basic") {
    box.classList.add('opsiHover');
    setTimeout(() => {
     box.classList.remove('opsiHover')
    }, 300);
   } else {
    infoAlert.style.color = "white";
    box.classList.add('opsiHoverBlue');
    setTimeout(() => {
     box.classList.remove('opsiHoverBlue');
    }, 300);
   }
  });
 });
 
 containerOpsi.onclick = function() {
  containerOpsi.classList.remove('opsiActive')
  containerOpsi.style.transitionDelay = "0s";
  }
}


let deskripsiKoleksi1 = document.getElementById('deskripsi-1');
let deskripsiKoleksi2 = document.getElementById('deskripsi-2');
let titleKoleksi = document.querySelector('.title-koleksi');
let boxDeskripsikoleks1 = document.querySelector('.box-deskripsi-koleksi-1');

let containerDeskripsiKoleksi = document.querySelector('.container-deskripsi-koleksi');


 boxDeskripsiKoleksi1.addEventListener('click', function() {
  
 boxDeskripsiKoleksi2 = containerDeskripsiKoleksi.querySelector('.box-deskripsi-koleksi-2');
 
 console.log(boxDeskripsiKoleksi2);
 
  if(containerDeskripsiKoleksi.classList.contains('deskripsiKoleksiActive')) {
  containerDeskripsiKoleksi.classList.remove('deskripsiKoleksiActive');
  boxDeskripsiKoleksi2.classList.remove('deskripsiKoleksi2Active');
  boxDeskripsiKoleksi2.style.display = "none";
  
  } else {
  containerDeskripsiKoleksi.classList.add('deskripsiKoleksiActive');
  boxDeskripsiKoleksi2.classList.add('deskripsiKoleksi2Active');
   setTimeout(() => { 
   boxDeskripsiKoleksi2.style.opacity = "0";
   boxDeskripsiKoleksi2.style.display = "block";
    setTimeout(() => {
     boxDeskripsiKoleksi2.style.opacity = "1";
    }, 200);
   }, 150);
  }
 });
 
let btnKoleksi = document.querySelector('.btn-koleksi');

titleKoleksi.innerHTML = "My First Website🔥";
deskripsiKoleksi1.innerHTML = "This is my first website, when I first learned about making websites";
deskripsiKoleksi2.innerHTML = "This website was created to fill my time when I'm bored playing games and want to try learning new things, this website was created using HTML, CSS and a little basic logic from JavaScript and this website was created at the end of October 2022";
btnKoleksi.addEventListener('click', function() {
  window.location.href = "https://exfavorite.faridfathonin.repl.co/";
});


let initNext = 1;
let initUndo = initNext;

const nextKoleksi = () => {
 initNext ++
 deskripsiKoleksi1.style.opacity = "0";
 deskripsiKoleksi2.style.opacity = "0";
 let btnKoleksi = document.querySelector('.btn-koleksi');
 
 if(initNext === 1) {
  
 setTimeout(() => {
  titleKoleksi.innerHTML = "My First Website 🔥";
  deskripsiKoleksi1.innerHTML = "This is my first website, when I first learned about making websites";
  deskripsiKoleksi2.innerHTML = "This website was created to fill my time when I'm bored playing games and want to try learning new things, this website was created using HTML, CSS and a little basic logic from JavaScript and this website was created at the end of October 2022";
  btnKoleksi.addEventListener('click', function() {
  window.location.href = "https://exfavorite.faridfathonin.repl.co/";
  });
  
  deskripsiKoleksi2.style.opacity = "1";
  deskripsiKoleksi1.style.opacity = "1";
  }, 300);
 }
 else if(initNext === 2) {
  
 setTimeout(() => {
  titleKoleksi.innerHTML = "Fake Youtube Website";
  deskripsiKoleksi1.innerHTML = "This fake YouTube website was made only to learn to follow YouTube's user interface design";
  deskripsiKoleksi2.innerHTML = "This website is made purely using basic HTML and CSS, this fake youtube was made in mid-September";
  btnKoleksi.addEventListener('click', function() {
  window.location.href = "https://exprivate-youtube-development.faridfathonin.repl.co";
  });
  
  deskripsiKoleksi2.style.opacity = "1";
  deskripsiKoleksi1.style.opacity = "1";
  }, 300);
 }
 else if(initNext === 3) {
  
 setTimeout(() => {
  titleKoleksi.innerHTML = "Fake Shorts Website";
  deskripsiKoleksi1.innerHTML = "this is a fake short video website similar to youtube short video version";
  deskripsiKoleksi2.innerHTML = "this is a fake short video website similar to youtube short video version but with my version interface";
  btnKoleksi.addEventListener('click', function() {
  window.location.href = "https://exfavorite-shorts-development.faridfathonin.repl.co/";
  });
  
  deskripsiKoleksi2.style.opacity = "1";
  deskripsiKoleksi1.style.opacity = "1";
  }, 300);
 }
 else if(initNext === 4) {
  
 setTimeout(() => {
  titleKoleksi.innerHTML = "Fandom Website";
  deskripsiKoleksi1.innerHTML = "This website is my version of the Vtuber fandom website which was created to learn to make interesting User Interface (UI)";
  deskripsiKoleksi2.innerHTML = "This Vtuber website fandom was created to learn how to make a user interface (UI) display with my imagination. This website is made with HTML, CSS and a little logic from vanilla JavaScript";
  btnKoleksi.addEventListener('click', function() {
  window.location.href = "https://fandom-web-development.faridfathonin.repl.co/";
  });
  
  deskripsiKoleksi2.style.opacity = "1";
  deskripsiKoleksi1.style.opacity = "1";
  }, 300);
 } else {
  
 setTimeout(() => {
  initNext = 0;
  titleKoleksi.innerHTML = "Fake Bot Website";
  deskripsiKoleksi1.innerHTML = "This is the version of the fake bot website that I made for the first time, before it became a chatbot website like this";
  deskripsiKoleksi2.innerHTML = "This website was created when I wanted to learn the basic JavaScript programming language, this website was created using basic HTML, CSS and JavaScript";
  btnKoleksi.addEventListener('click', function() {
  window.location.href = "https://javascriptfakebot.faridfathonin.repl.co/";
  });
  
  deskripsiKoleksi2.style.opacity = "1";
  deskripsiKoleksi1.style.opacity = "1";
  }, 300);
 }
}

function undoKoleksi() {
 deskripsiKoleksi2.style.opacity = "0";
 deskripsiKoleksi1.style.opacity = "0";
 
  if (initNext === 1) {
  setTimeout(() => {
   initNext = 0;
   titleKoleksi.innerHTML = "Fake Bot Website";
   deskripsiKoleksi1.innerHTML = "This is the version of the fake bot website that I made for the first time, before it became a chatbot website like this";
   deskripsiKoleksi2.innerHTML = "This website was created when I wanted to learn the basic JavaScript programming language, this website was created using basic HTML, CSS and JavaScript";
   btnKoleksi.addEventListener('click', function() {
    window.location.href = "https://javascriptfakebot.faridfathonin.repl.co/";
   });
   
  deskripsiKoleksi2.style.opacity = "1";
  deskripsiKoleksi1.style.opacity = "1";
   }, 300);
  }
 
  else if (initNext === 2) {
  setTimeout(() => {
   initNext = 1;
   titleKoleksi.innerHTML = "My First Website 🔥";
   deskripsiKoleksi1.innerHTML = "This is my first website, when I first learned about making websites";
   deskripsiKoleksi2.innerHTML = "This website was created to fill my time when I'm bored playing games and want to try learning new things, this website was created using HTML, CSS and a little basic logic from JavaScript and this website was created at the end of October 2022";
   btnKoleksi.addEventListener('click', function() {
   window.location.href = "https://exfavorite.faridfathonin.repl.co/";
   });
   
  deskripsiKoleksi2.style.opacity = "1";
  deskripsiKoleksi1.style.opacity = "1";
   }, 300);
  }
  
  else if (initNext === 3) {
  setTimeout(() => {
   initNext = 2;
   titleKoleksi.innerHTML = "Fake Youtube Website";
   deskripsiKoleksi1.innerHTML = "this is a fake short video website similar to youtube short video version but with my version interface";
   deskripsiKoleksi2.innerHTML = "This website is made purely using basic HTML and CSS, this fake youtube was made in mid-September";
   btnKoleksi.addEventListener('click', function() {
    window.location.href = "https://exprivate-youtube-development.faridfathonin.repl.co";
   });
   
  deskripsiKoleksi2.style.opacity = "1";
  deskripsiKoleksi1.style.opacity = "1";
   }, 300);
  }
  
  else if (initNext === 4) {
  setTimeout(() => {
   initNext = 3;
   titleKoleksi.innerHTML = "Fake Shorts Website";
   deskripsiKoleksi1.innerHTML = "ini adalah website fake shorts yang mirip seperti shorts youtube dengan versi saya";
   deskripsiKoleksi2.innerHTML = "fake shorts ini adalah website yang sangat saya sukai pada 2022. fake shorts ini di buat pada tanggal 10 Desember 2022 dan menggunakan HTML, CSS murni";
   btnKoleksi.addEventListener('click', function() {
   window.location.href = "https://exfavorite-shorts-development.faridfathonin.repl.co/";
   });
   
  deskripsiKoleksi2.style.opacity = "1";
  deskripsiKoleksi1.style.opacity = "1";
   }, 300);
  }
  
  else {
  setTimeout(() => {
   initNext = 4;
   titleKoleksi.innerHTML = "Fandom Website";
   deskripsiKoleksi1.innerHTML = "This website is my version of the Vtuber fandom website which was created to learn to make interesting (UI)";
   deskripsiKoleksi2.innerHTML = "This Vtuber website fandom was created to learn how to make a user interface (UI) display with my imagination. This website is made with HTML, CSS and a little logic from vanilla JavaScript";
   btnKoleksi.addEventListener('click', function() {
    window.location.href = "https://fandom-web-development.faridfathonin.repl.co/";
    });
   
  deskripsiKoleksi2.style.opacity = "1";
  deskripsiKoleksi1.style.opacity = "1";
  }, 300);
 }
}

function opsi() {
 setTimeout(() => {
 infoAlert.innerHTML = "INFO";
 infoAlert.style.color = "white";
 myAlert.style.display = "block";
 blurLayer.style.display = "block";
 blurLayer.style.zIndex = "45";
 myAlertText.innerHTML = "fitur ini akan segera hadir.";
 btnAlert.addEventListener('click', closeAlert);
 }, 300);
}

function closeAlert() {
 judulEmail.innerHTML = "";
 emailValue.innerHTML = "";
 myAlert.style.display = "none";
 blurLayer.style.display = "none";
 
 if(profileImgBox.classList.contains('profileImgBesar')) {
  blurLayer.style.zIndex = "30";
  blurLayer.style.display = "block";
 }
 
 if(containerSidebar.classList.contains('active')) {
  blurLayer.style.zIndex = "40";
  blurLayer.style.display = "block";
 }
}

function toxicAlert() {
 document.open();
 document.close();
 window.location.reload();
}

let inputJawaban = document.querySelector('.input-jawaban');

function adjustHeight() {
 let html = document.querySelector('html');
 container.style.paddingBottom = "250px";
  
  if(localStorage.getItem('theme') === "basic") {
   html.style.background = "black";
   html.classList.remove('containerBg');
  }
  
  if(localStorage.getItem('theme') === "blue") {
   html.style.background = "black";
   html.classList.add('containerBg');
  }
 
 if(container.scrollHeight > container.offsetHeight) {
  container.style.paddingBottom = "250px";
  console.log("lebih dari batas height")
 }
}

inputJawaban.addEventListener('input', adjustHeight);
window.addEventListener('load', adjustHeight);

const containerSidebar = document.querySelector('.container-sidebar');
let menuSidebar = document.querySelector(".menu-sidebar");

function openSidebar() {
 blurLayer.style.zIndex = "40";
 menuSidebar.classList.toggle("active");
 containerSidebar.classList.toggle('active');
 
 if(containerSidebar.classList.contains('active')) {
  blurLayer.style.display = "block";
 } else {
  blurLayer.style.display = "none";
 }
}

openSidebar();

const containerExplore = document.querySelector('.container-explore');
const exploreBox = document.querySelectorAll('.explore-box');
const exploreText = document.querySelectorAll('.explore-text');
const footerBoxText = document.querySelectorAll('.footer-box-text');
const titleExplore = document.querySelector('.title-explore');

const privacyPolicy = document.querySelector('.privacy-policy');
const textPrivacyPolicy = document.querySelector('.text-privacy-policy');

const containerTerms = document.querySelector('.container-terms-of-service');
const termsText = document.querySelector('.terms-text');

const containerHelp = document.querySelector('.container-help');
const textHelp = document.querySelector('.text-help');

const containerContact = document.querySelector('.container-contact-us');
const textContact = document.querySelector('.text-contact-us');

textPrivacyPolicy.innerHTML = "<strong>Kebijakan Privasi ChatBot [Fabot Chat]</strong><br><br><br><strong>Selamat datang di [Fabot Chat]!</strong><br><br>Kami di [Fabot Chat] sangat memahami pentingnya privasi informasi pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data yang kami peroleh dari Anda saat Anda berinteraksi dengan ChatBot kami.<br><br><strong>**Informasi yang Kami Kumpulkan**</strong><br><br>Ketika Anda menggunakan [Fabot Chat], kami dapat mengumpulkan beberapa informasi pribadi yang Anda berikan secara sukarela selama sesi percakapan. Informasi ini dapat mencakup nama, alamat email, atau informasi kontak lainnya yang Anda berikan untuk membantu kami memahami dan merespons pertanyaan atau permintaan Anda dengan lebih baik.<br><br><strong>**Penggunaan Informasi**</strong><br><br>Informasi pribadi yang kami kumpulkan dari Anda digunakan secara eksklusif untuk memberikan layanan yang sesuai dan memberikan jawaban yang relevan dengan pertanyaan yang Anda ajukan kepada ChatBot kami. Kami tidak akan menggunakan informasi Anda untuk tujuan pemasaran atau penjualan ke pihak ketiga tanpa persetujuan Anda.<br><br><strong>**Perlindungan Informasi**</strong><br><br>Kami mengambil langkah-langkah untuk melindungi informasi pribadi Anda dari akses atau penggunaan yang tidak sah. Kami hanya menyimpan data pribadi yang diperlukan selama diperlukan untuk memberikan layanan percakapan dengan ChatBot kami.<br><br><strong>**Penggunaan Teknologi Pelacakan**</strong><br><br>[Fabot Chat] hanyalah ChatBot yang di buat hanya untuk bertujuan belajar membuat bot yang bisamembalas apa yang user katakan. jadi ChatBot ini hanyalah ChatBot biasa yang tidak sama seperti ChatBot yang menggunakan AI.<br><br><strong>**Kebijakan Privasi Pihak Ketiga**</strong><br><br>Harap dicatat bahwa Kebijakan Privasi ini hanya berlaku untuk ChatBot [Fabot Chat]. Kami tidak bertanggung jawab atas praktik privasi situs web pihak ketiga atau aplikasi yang mungkin Anda gunakan untuk mengakses ChatBot kami. Pastikan untuk membaca kebijakan privasi pihak ketiga tersebut sebelum memberikan informasi pribadi Anda kepada mereka.<br><br><strong>**Perubahan pada Kebijakan Privasi**</strong><br><br>Kami berhak untuk memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk mencerminkan perubahan dalam layanan kami atau peraturan yang berlaku. Perubahan tersebut akan diberitahukan kepada Anda melalui pembaruan pada halaman ini.<br><br><strong>**Kontak Kami**</strong><br><br>Jika Anda memiliki pertanyaan, masukan, atau kekhawatiran terkait Kebijakan Privasi ini atau penggunaan ChatBot [Fabot Chat], silakan hubungi kami melalui:<br><br><u>[faridfathonin@gmail.com]</u><strong><br><br><br>Terima kasih telah menggunakan ChatBot [Fabot Chat]. Kami berkomitmen untuk melindungi privasi dan memberikan pengalaman percakapan yang bermanfaat bagi Anda.</strong><br><br>Tanggal dipublikasikan&nbsp;:&nbsp;[28 July 2023]<br>Tanggal terakhir diperbarui&nbsp;: [28 July 2023]";

const firstExploreText = exploreText[0];
firstExploreText.innerHTML = "sebagai seorang pelajar sekolah yang baru memasuki dunia pengembangan website, saya sedang menggali ilmu dan mempelajari dasar-dasar HTML, CSS, dan JavaScript untuk membuat website sederhana namun menarik. <br><br> Saat ini, saya tengah menjalani perjalanan menarik dalam belajar pengembangan website, di mana saya mengenal konsep dasar tentang bagaimana menggabungkan elemen-elemen visual dan fungsionalitas untuk membuat sebuah halaman web yang sederhana.";

const secondExploreText = exploreText[1]
secondExploreText.innerHTML = "Dengan semangat belajar yang tinggi, saya berusaha memahami struktur dasar sebuah website, seperti header, konten, dan footer, serta berlatih membuat tata letak yang responsif untuk meningkatkan kemampuan pengembangan saya. <br><br> Terkadang tantangan muncul, tetapi sebagai seorang pelajar yang berdedikasi, saya selalu mencari sumber daya tambahan dan mencari sumber belajar secara online untuk mengatasi rintangan dalam mengembangkan sebuah website yang saya buat.";

const thirdExploreText = exploreText[2];
thirdExploreText.innerHTML = "Dalam perjalanan belajar saya, saya sedang berlatih membuat website sederhana dengan desain yang menarik, menggabungkan warna dan tipografi secara tepat untuk menciptakan tampilan visual yang estetis. <br><br> Saya sangat antusias untuk mempelajari konsep-konsep baru dalam web development, seperti animasi CSS dan JavaScript, yang akan menambahkan sentuhan dinamis pada proyek-proyek website saya saat ini.";

const fourExploreText = exploreText[3];
fourExploreText.innerHTML = "Saya percaya bahwa belajar pengembangan website adalah investasi berharga bagi masa depan, karena website menjadi sarana penting dalam dunia digital untuk menyampaikan informasi dan berinteraksi dengan audiens. <br><br> Meskipun masih baru dalam dunia pengembangan website, saya terus mengasah keterampilan dengan proyek-proyek kecil dan berusaha mencari tantangan baru untuk menguji kemampuan saya.";

const fiveExploreText = exploreText[4];
fiveExploreText.innerHTML = "Saya yakin, dengan kerja keras dan dedikasi, perjalanan belajar saya dalam pengembangan website akan membuka peluang yang menarik dan menginspirasi saya untuk terus berkembang di bidang ini.";

termsText.innerHTML = "<strong>1. Pengertian:</strong> Terms of Service atau Syarat dan Ketentuan adalah dokumen hukum yang berisi perjanjian antara pengguna (user) dan pemilik website. Dokumen ini menetapkan persetujuan dan aturan yang mengatur bagaimana pengguna dapat menggunakan layanan yang diberikan oleh website tersebut.<br><br><strong>2. Penggunaan Layanan:</strong> Bagian ini menjelaskan tentang jenis layanan yang disediakan oleh website dan cara pengguna dapat mengakses serta menggunakan layanan tersebut. Juga mungkin mencakup persyaratan usia minimal atau persyaratan kelayakan lainnya untuk menjadi pengguna.<br><br><strong>3. Privasi dan Data Pengguna:</strong> Ini adalah bagian yang menjelaskan kebijakan privasi website, termasuk bagaimana data pengguna dikumpulkan, digunakan, disimpan, dan dilindungi. Biasanya mencakup informasi tentang cookies dan kebijakan pengumpulan data pribadi.<br><br><strong>4. Kekayaan Intelektual:</strong> Bagian ini mengatur hak kekayaan intelektual pemilik website, termasuk hak cipta, merek dagang, hak paten, dan hak kekayaan intelektual lainnya. Hal ini menetapkan batasan-batasan terkait penggunaan konten yang dimiliki oleh website.<br><br><strong>5. Kewajiban Pengguna:</strong> Menjelaskan tindakan atau perilaku yang dilarang atau diharamkan bagi pengguna saat menggunakan layanan. Misalnya, tindakan seperti pelanggaran hukum, penyebaran konten ilegal, atau penyalahgunaan layanan website.<br><br><strong>6. Tanggung Jawab Pihak Terkait:</strong> Bagian ini mengatur batasan tanggung jawab pihak-pihak yang terlibat dalam penyediaan layanan, termasuk pemilik website, mitra, dan penyedia layanan pihak ketiga.<br><br><strong>7. Pembatalan atau Pengakhiran Akun:</strong> Menjelaskan prosedur atau kriteria di mana pemilik website dapat membatalkan atau mengakhiri akun pengguna jika terjadi pelanggaran terhadap TOS atau alasan lain yang ditetapkan.<br><br><strong>8. Perubahan pada TOS:</strong> Menjelaskan bahwa pemilik website dapat mengubah TOS dari waktu ke waktu dan bagaimana perubahan tersebut akan diinformasikan kepada pengguna.<br><br><strong>9. Hukum yang Berlaku:</strong> Menentukan yurisdiksi dan hukum yang berlaku untuk penyelesaian sengketa atau permasalahan yang timbul dari penggunaan layanan website.<br><br><strong>10. Persetujuan Pengguna: </strong>Bagian terakhir biasanya meminta pengguna untuk menyetujui dan mengikatkan diri pada TOS sebelum mereka dapat menggunakan layanan yang disediakan oleh website.<br><br><br><br><strong>Penting bagi pengguna untuk membaca dan memahami TOS dengan seksama sebelum menggunakan layanan dari sebuah website.</strong> Dengan menerima TOS, pengguna menyetujui persyaratan dan aturan yang telah ditetapkan oleh pemilik website, dan ini dapat mempengaruhi hak dan kewajiban mereka selama menggunakan layanan tersebut.";

textHelp.innerHTML = "<strong>Selamat datang di chatBot [Fabot Chat] - Chatting dengan bot !</strong><br><br><br>Bagian 'help' kami didesain untuk memberikan panduan lengkap dalam menggunakan chatBot [Fabot Chat]. Berikut adalah beberapa informasi yang akan Anda temukan di bagian 'help' kami:<br><br><br> 1. Cara Memulai: Panduan langkah demi langkah untuk memulai percakapan dengan chatBot [Fabot Chat]. Anda akan menemukan cara memulai percakapan, termasuk perintah awal yang dapat Anda berikan.<br><br> 2. Fitur Utama: Penjelasan mengenai fitur-fitur utama yang dapat digunakan dalam percakapan dengan chatBot [Fabot Chat]. Mulai dari pertanyaan umum, pencarian informasi, hingga melakukan tugas-tugas khusus.<br><br> 3. Perintah Khusus: Daftar perintah khusus yang dapat Anda gunakan untuk mengakses fitur-fitur tertentu dengan cepat. Kami menyediakan daftar perintah beserta contoh penggunaannya.<br><br> 4. Pertanyaan Umum: Jawaban atas pertanyaan-pertanyaan umum seputar chatBot [Fabot Chat] dan cara kerjanya. Jika Anda mengalami masalah atau kesulitan, Anda mungkin akan menemukan jawaban di sini.<br><br> 5. Kebijakan dan Privasi: Informasi tentang kebijakan kami terkait penggunaan data dan privasi Anda. Kami selalu mengutamakan keamanan dan privasi informasi pengguna.<br><br> 6. Kontak dan Dukungan: Informasi tentang cara menghubungi tim dukungan kami jika Anda mengalami masalah yang tidak teratasi oleh bagian 'help' kami.<br><br><br><br> Kami berharap bagian 'help' ini dapat membantu Anda dalam menjalankan percakapan dengan chatBot [Fabot Chat] dengan lancar dan menyenangkan. Jika Anda memiliki pertanyaan lebih lanjut, jangan ragu untuk menghubungi kami melalui bagian kontak yang telah disediakan. <strong>Terima kasih telah menggunakan chatBot [Fabot Chat] sebagai Chatting dengan bot !</strong>";

textContact.innerHTML = "<strong>Kontak Kami - Tim Dukungan chatBot [Fabot Chat]</strong><br><br>Kami senang mendengar dari Anda! Jika Anda memiliki pertanyaan, masalah, atau umpan balik mengenai pengalaman Anda menggunakan chatBot [Fabot Chat], tim dukungan kami siap membantu. Berikut adalah beberapa opsi untuk menghubungi kami:<br><br><br><br>1. Formulir Kontak: Anda dapat mengisi formulir kontak yang telah kami sediakan. Jangan ragu untuk menjelaskan pertanyaan atau masalah Anda secara detail agar tim kami dapat memberikan bantuan yang tepat.<br><br><br>2. Email: Kirimkan email Anda ke support@chatBot [Fabot Chat].com dan tim dukungan kami akan merespons dalam waktu secepatnya.<br><br><br>3. Live Chat: Jika Anda mengalami masalah mendesak atau membutuhkan bantuan langsung, gunakan fitur live chat yang tersedia. Tim dukungan kami akan berusaha merespons dengan segera.<br><br><br>4. Media Sosial: Anda juga dapat menghubungi kami melalui media sosial kami. Kami aktif di platform-platform seperti Twitter, Facebook, dan Instagram. Cari akun kami dengan username @chatBot [Fabot Chat] untuk mendapatkan dukungan.<br><br><br><br>Kami mengutamakan kepuasan pengguna dan selalu siap membantu Anda dengan setiap pertanyaan dan masalah yang Anda hadapi. Tim dukungan kami terdiri dari tenaga ahli yang berpengalaman dalam mengatasi berbagai situasi. <u>Jangan ragu untuk menghubungi kami kapan saja, dan kami akan dengan senang hati memberikan bantuan terbaik kami.</u> <strong>Terima kasih telah memilih chatBot [Fabot Chat] sebagai Chatting dengan bot !</strong>";


const footerBoxText0 = footerBoxText[0];
const footerBoxText1 = footerBoxText[1];
const footerBoxText2 = footerBoxText[2];
const footerBoxText3 = footerBoxText[3];
const footerBoxText4 = footerBoxText[4];
const footerBoxText5 = footerBoxText[5];

footerBoxText0.onclick = function () {
 descriptionClick();
}

footerBoxText1.onclick = function () {
 openExplore();
 privacyPolicy.style.display = "block";
 titleExplore.innerHTML = "Privacy Policy";
}

footerBoxText2.onclick = function () {
 openExplore();
 privacyPolicy.style.display = "none";
 titleExplore.innerHTML = "About this Website";
 
 exploreBox.forEach(function(exploreBoxes) {
  exploreBoxes.style.display = "block";
 });

setTimeout(() => {
 const firstExploreBox = exploreBox[0];
 firstExploreBox.style.opacity = "1";
setTimeout(() => {
 const secondExploreBox = exploreBox[1];
 secondExploreBox.style.opacity = "1";
setTimeout(() => {
 const thirdExploreBox = exploreBox[2];
 thirdExploreBox.style.opacity = "1";
 thirdExploreBox.scrollIntoView({ behavior: 'smooth' });
setTimeout(() => {
 const fourExploreBox = exploreBox[3];
 fourExploreBox.style.opacity = "1";
setTimeout(() => {
 const fiveExploreBox = exploreBox[4];
 fiveExploreBox.style.opacity = "1";
     }, 800);
    }, 800);
   }, 800);
  }, 800);
 }, 800);
}

footerBoxText3.onclick = function () {
 openExplore();
 containerTerms.style.display = "block";
 titleExplore.innerHTML = "Terms Of Service";
}

footerBoxText4.onclick = function () {
 openExplore();
 titleExplore.innerHTML = "Contact Us";
 containerContact.style.display = "block";
}

footerBoxText5.onclick = function () {
 openExplore();
 titleExplore.innerHTML = "Help Page";
 containerHelp.style.display = "block";
}

containerExplore.style.display = "none";

const openExplore = () => {
containerExplore.classList.add('containerExploreActive');

const firstFooters = footers[0];
firstFooters.style.position = "fixed";
containerExplore.style.display = "block"

privacyPolicy.style.display = "none";
containerHelp.style.display = "none";
containerTerms.style.display = "none";
containerContact.style.display = "none";
exploreBox.forEach(function(exploreBoxes) {
  exploreBoxes.style.display = "none";
 });

if (profileImgBox.classList.contains('profileImgBesar')) {
  profileImgBox.classList.remove('profileImgBesar');
  }
 
if(activeFav) {
 activeFav.classList.remove('active');
 activeDesc.classList.remove('active');
 containerFav.classList.remove('active');
 }
 
if(containerDeskripsiKoleksi.classList.contains('deskripsiKoleksiActive')) {
 containerDeskripsiKoleksi.classList.remove('deskripsiKoleksiActive');
 }
 
if(cards.classList.contains('active')) {
  cards.classList.toggle('active');
  setTimeout(() => {
  
  text1.style.transition = ".050s";
  text1.classList.toggle('active');
  
  setTimeout(() => {
  
  text2.style.transition = ".050s";
  text2.classList.toggle('active');
 
  }, 400);
 }, 500);
}

if(containerOpsi.classList.contains('opsiActive')) {
 containerOpsi.classList.remove('opsiActive');
}

if(boxDeskripsiKoleksi2.classList.contains('deskripsiKoleksi2Active')) {
 containerDeskripsiKoleksi.classList.remove('deskripsiKoleksiActive');
 boxDeskripsiKoleksi2.classList.remove('deskripsiKoleksi2Active');
 boxDeskripsiKoleksi2.style.display = "none";
}

window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeExplore() {
 containerExplore.classList.remove('containerExploreActive');
}

document.addEventListener("visibilitychange", function() {
  if (document.hidden) {
 infoAlert.innerHTML = "INFO";
 infoAlert.style.color = "white";
 myAlert.style.display = "block";
 blurLayer.style.display = "block";
 blurLayer.style.zIndex = "45";
 myAlertText.innerHTML = "kamu ngelakuin hal apa tadi?";
 btnAlert.addEventListener('click', closeAlert);
  }
});


