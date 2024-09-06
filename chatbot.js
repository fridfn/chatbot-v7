let jawaban = document.querySelector('input');
const firstPertanyaan = document.getElementById('firstPertanyaan');
const firstContentPertanyaan = document.getElementById('firstContentPertanyaan');

const timeQuestion = document.getElementById('timeQuestion');
const timeAsk = document.getElementById('timeAsk');

/* MENGKLONING CONTENT*/

let originalElementPertanyaan = document.querySelector('#contentPertanyaan .chatPertanyaans');
var clonedElementPertanyaan = originalElementPertanyaan.cloneNode(true);
/*
clonedElementPertanyaan.forEach(function(clonePertanyaan) {
 clonePertanyaan.classList.add('styleQuest');
 console.log(clonePertanyaan)
})*/

var arrowQuest = clonedElementPertanyaan.querySelector('.arrowQuest');

const originalElementJawaban = document.querySelector('#contentJawaban .chatJawaban');
const clonedElementJawaban = originalElementJawaban.cloneNode(true);
console.log(clonedElementJawaban)
console.log(clonedElementPertanyaan)
var arrowA = clonedElementJawaban.querySelector('.arrowAsk');

/* VALIDASI ELEMENT CLONING WARNA CHAT */
if(localStorage.getItem("theme") === "basic") {
 
  clonedElementPertanyaan.classList.add('styleQuest');
  clonedElementJawaban.classList.add('styleAsk');
  
  if (clonedElementJawaban.classList.contains('chatBlue')) {
   clonedElementPertanyaan.classList.remove('styleQuest');
   clonedElementJawaban.classList.remove('styleAsk');
  }
}

if (localStorage.getItem("theme") === "blue") {
  if(clonedElementJawaban.classList.contains('styleAsk')) {
   
  clonedElementJawaban.classList.remove('styleAsk');
  
  clonedElementPertanyaan.classList.remove('styleQuest');
  console.log('masuk ke sini');
  }
  clonedElementPertanyaan.classList.add('chatBot');
  clonedElementJawaban.classList.add('chatUser');
}

/* MENGKLONING CHAT*/
const originalPertanyaan = document.getElementById('chatPertanyaan');
const clonedPertanyaan = originalPertanyaan.cloneNode(true);

const originalJawaban = document.getElementById('chatJawaban');
const clonedJawaban = originalJawaban.cloneNode(true);

const clonedTimeQuestion = clonedElementPertanyaan.querySelector('#timeQuestion');
const originalTimeQuestion = originalElementPertanyaan.querySelector('#timeQuestion');
const originalTimeAsk = originalElementJawaban.querySelector('#timeAsk');

const barier = document.querySelector('.barier');
const textMengetik = document.querySelector('.botStatus');

const containerLinear = document.querySelector('.container-linear');
const containerLove = document.querySelector('.container-love');

const clonedTextJawaban = clonedElementJawaban.querySelector('#textJawaban');
const clonedTextPertanyaan = clonedElementPertanyaan.querySelector('#textPertanyaan');
const originalTextPertanyaan = clonedElementPertanyaan.querySelector('#TextPertanyaan');

function checkInput() {
 
  let jawaban = document.querySelector('.input-jawaban');
  let sendBtn = document.querySelector('.btn-bot');
   
  if (jawaban.value.length >= 2) {
   
   sendBtn.disabled = false;
  } else {
   
   sendBtn.disabled = true;
  }
}

var img = document.createElement('img');
img.src = 'boticon.webp';
document.getElementById('imgBox').appendChild(img);

function reactBot() {
 if(localStorage.getItem("theme") === "basic") {
  let img = document.createElement('img');
  img.src = 'xd.webp';
  document.getElementById('imgBox').appendChild(img);
  setTimeout(() => {
   var img = document.createElement('img');
   img.src = 'boticon.webp';
   document.getElementById('imgBox').appendChild(img);
   }, 1000);
 }
 
 else {
  img.src = 'xdBlue.webp';
  document.getElementById('imgBox').appendChild(img);
  setTimeout(() => {
   var img = document.createElement('img');
   img.src = 'fablue.webp';
   document.getElementById('imgBox').appendChild(img);
  }, 1000);
 }
}

document.addEventListener('contextmenu', function(e) {
  var targetElement = e.target;
  if(!targetElement.classList.contains('input-jawaban')) {
   e.preventDefault();
  }
});

document.querySelector(".input-jawaban").addEventListener("paste", function(e) {
  e.preventDefault();
  console.log('eitsss tidak bisa copy paste');
  function curang() {
  clonedTextPertanyaan.innerHTML = "hayoo ngapain kamu mau copy paste ya?🤡";
  
  document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
  }
  setTimeout(curang, 500);
});

let userData = [];
let fullData = [];

const botSay = (data) => {
  return [
    `Hi. nama saya Fabot, siapa nama kamu?`,/*0*/
    `owh hallo ${data?.nama}, usia kamu berapa ya?`,/*1*/
    `ohh ${data?.usia}, kalo hobi kamu apa ya?`,/*2*/
    `ihhh sama dong aku juga hobi ${data?.hobi}, btw kamu udah punya pacar belum?`,/*3*/
    `yaa gpp si cuma mau nanya. intinya basa basi aja hehe😅`,/*4*/
    `basa basi yang amat basi. maaf ya ${userData[0]} udah nanya itu🤐`,
    `btw kamu mau ga main game sama aku?`,/*6*/
    `hmmm enaq nya main game apa yaa, bentar aku mikir dlu🤔`,/*7*/
    `ok klo begitu, aku itung ya ${userData[0]} sampe 3 abis itu kita cepet cepetan siapa yang paling cepet ngetiknya`,/*8*/
    `${data?.siap}, siap yaa ${userData[0]} klo gitu`,/*9*/
    `hmm aku rasa kaya nya kita sampe sini aja ya ${userData[0]} main nya?`,/*10*/
    `makasih yaa ${userData[0]}🥺 di tunggu ya next updatenya dari aku, nanti kita main bareng lagi😉`,/*11*/
  ]
}


const userSay = (data) => {
  return [
    `Hi nama saya ${data?.nama}`,/*0*/
    `saya masih berusia ${data?.usia} tahun`,/*1*/
    `hobi yang paling saya sukai adalah ${data?.hobi}`,/*2*/
    `saya ${data?.pacar} mempunyai pacar. memang nya knapa?`,/*3*/
    `${data?.maaf}.`,/*4*/
    `${data?.game}, emang mau main game apa?`,/*5*/
    `${data?.ok} janji. aku gaakan main curang`,/*6*/
    `${data?.siap}`,/*7*/
    `${data?.az}`,/*8*/
    `${data?.userSay}`,/*9*/
    `${data?.end}`,/*10*/
    ``,/*11*/
  ]
}


const kataKasar =
  [`kontol`,`memek`,`anjing`,`bangsat`,`ngentot`,`bajingan`,`coli`,`asu`,`komtol`,`anjg`,`ajg`,`tolol`,`bacot`,`bacod`,`bacots`,`bego`,`goblok`,`coly`,`desah`,`colmek`,`colmex`,`kontil`,`babi`,`anjying`,`ngewe`,`sange`,`ashu`,`tholol`,`fuck`,`jancok`,`bangsad`,`begok`,`badjingan`,`memex`,`kontols`,`kontolz`,`sangean`,`colli`,`colly`,`babik`,`gay`,`ngegay`,`bokep`,`bokeps`,`porno`,`xnxx`,`porn`,`lesbian`,`lesbi`,`pornhub`,`yandex`,`hentai`,`ngentots`,`tete`,`ngecrot`,`ngecrot`,`nyepong`,`kntl`,`kontl`,`kntol`,`ngocok`,`ngocoks`,`cabul`];
  
const listKasar = kataKasar;

firstPertanyaan.innerHTML = botSay()[0];
footerEmail.innerHTML = `Kirimkan email kepada developer.`;

containerLove.style.opacity = "0";
containerLove.style.display = "none";
contentPertanyaan.style.display = "none"
contentJawaban.style.display = "none";
firstContentPertanyaan.style.display = "none";

setTimeout(() => {
  
  textLoad();
  barier.style.display = "block";
  
  setTimeout(() => {
   
    containerLove.style.display = "block";
    firstContentPertanyaan.style.display = "block"
    barier.style.display = "none";
    
    textMengetik.innerHTML = "Online";
  }, 4000);
}, 200);

let init = 0;
let cobaLagi = false;

function botStart(data) {
  init ++
  
  let sendBtn = document.querySelector('.btn-bot');
  sendBtn.disabled = true;
  
  console.log({userData});
  console.log(`masuk ke init ${init} 😎`);
  
  jawabanValue = jawaban.value;
  userInput = jawaban.value.toLowerCase();
  
  if(listKasar.some((kata) => userInput.includes(kata))) {
   jawaban.style.color = "red";
   barier.style.display = "block";
   
   if(init > 1) {
   init = 0;
   textLoad();
   setTimeout(() => {
   textMengetik.innerHTML = "Online";
    
   setTimeout(() => {textLoad()}, 1500); clonedTextPertanyaan.innerHTML = "tolong ya kalo ngetik kata kata nya di jaga, walaupun aku cuma chat bot tapi aku tau kamu ngetik kata yang engga sepantasnya.";
   
   document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
   
    setTimeout(() => {
     
     setTimeout(() => { textMengetik.innerHTML = "Online"}, 1500);
     
     clonedTextPertanyaan.innerHTML = "lain kali klo ngetik di jaga kata katanya. ga baik tau😒";
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     
     setTimeout(() => {
      textMengetik.innerHTML = "Offline";
     }, 5500);
     
    setTimeout(() => {
     infoAlert.innerHTML = "Pesan dari system !";
     blurLayer.style.display = "block";
     myAlert.style.display = "block";
     myAlertText.innerHTML = 'bot males berinteraksi dengan kamu dan dia ingin me refresh browsernya secara paksa';
     btnAlert.addEventListener('click', toxicAlert);
    }, 10000);
   }, 6000);
  }, 4000);
 } if (init >= 1) {
  init = -1;
  setTimeout(() => {
   setTimeout(() => {
    textMengetik.innerHTML = "Offline";
   }, 700);
   infoAlert.innerHTML = "Tolong di jaga ketikan nya";
   blurLayer.style.display = "block";
   myAlert.style.display = "block";
   myAlertText.innerHTML = 'bot mendeteksi kamu berkata kata yang tidak sepantasnya. tolong lah untuk berkata kata yang baik & sopan.';
   btnAlert.addEventListener('click', toxicAlert);
  }, 2000);
 }/* if else validasi kurawa end */
}
  
  const clonedTimeAsk = clonedElementJawaban.querySelector('#timeAsk');
  
  startTime();
   clonedTimeQuestion.innerHTML = timeQuestion.innerHTML;
   clonedTimeAsk.innerHTML = timeAsk.innerHTML;
   
  barier.style.display = "block";
  originalPertanyaan.style.display = "none";
  
  
  if (init === 1) {
  console.log({ nama: jawaban.value });
  chatValue = userSay({nama: jawaban.value})[0];
  userDelay({ nama: jawaban.value });
  
  textJawaban.innerHTML = userSay({ nama: jawabanValue })[0];
  contentJawaban.style.display = "block";
  footerEmail.innerHTML = `Berikan kritik & saranya ${userData[0]}.`
  
  textLoad();
   
  setTimeout(() => {
   
    barier.style.display = "none";
    textMengetik.innerHTML = "Online";
    
    clonedTextPertanyaan.innerHTML = botSay({ nama: jawabanValue })[1];
    contentPertanyaan.style.display = "block";
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
  }, 1000);
}


 else if (init === 2) {
  console.log({ usia: jawaban.value });
  chatValue = userSay({ usia: jawaban.value })[1];
  fullData.push(chatValue);
  
  botDelay({ usia: jawaban.value });
  clonedTextJawaban.innerHTML = userSay({ usia: jawabanValue })[1];
   
  document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
  
  textLoad();
  
  setTimeout(() => {
    barier.style.display = "none";
    textMengetik.innerHTML = "Online";
    
    
    originalTimeQuestion.innerHTML = timeQuestion.innerHTML;
    
    clonedTextPertanyaan.innerHTML = botSay({ usia: jawabanValue })[2];
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
  }, 1000);
}


  else if (init === 3) {
    console.log({ hobi: jawabanValue });
    chatValue = userSay({ hobi: jawabanValue })[2];
   
    userDelay({ hobi: jawabanValue });
    clonedTextJawaban.innerHTML = userSay({ hobi: jawabanValue })[2];
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
    
    textLoad();
    
    setTimeout(() => {
    img.src = 'reactIdk.webp';
    barier.style.display = "none";
    textMengetik.innerHTML = "Online";
    
     
    clonedTextPertanyaan.innerHTML = botSay({ hobi: jawabanValue })[3];
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     
    document.querySelector('#contentPertanyaan').scrollIntoView({ behavior: 'smooth' });
     
    }, 1000);
  }
  
  
  else if (init === 4) {
   console.log({ pacar: jawabanValue });
   chatValue = userSay({ pacar: jawabanValue })[3];
   
   img.src = 'boticon.webp';
   userDelay({ hobi: jawabanValue });
   clonedTextJawaban.innerHTML = userSay({ pacar: jawabanValue })[3];
    
   document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
    
   textLoad();
   
   setTimeout(() => {
    
    clonedTextPertanyaan.innerHTML = botSay({ pacar: jawabanValue })[4];
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
    textLoad();
    
    setTimeout(() => {
     barier.style.display = "none";
     textMengetik.innerHTML = "Online";
     
     
     clonedTextPertanyaan.innerHTML = botSay()[5];
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     
    /*document.querySelector('#contentPertanyaan').scrollIntoView({ behavior: 'smooth' });*/
    }, 1000);
   }, 1000);
  }
  
  
  else if (init === 5) {
   console.log({ maaf: jawabanValue });
   chatValue = userSay({ maaf: jawabanValue })[4];
   
   userDelay({ maaf: jawabanValue });
   clonedTextJawaban.innerHTML = userSay({ maaf: jawabanValue })[4];
   
   document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
   
   textLoad();
   
   setTimeout(() => {
    barier.style.display = "none";
    textMengetik.innerHTML = "Online";
    
    
    clonedTextPertanyaan.innerHTML = botSay({ game: jawabanValue })[6];
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
   }, 4000);
  }
  
  
  else if (init === 6) {
   console.log({ game: jawabanValue });
   chatValue = userSay({ game: jawabanValue })[5];
   
   userDelay({ game: jawabanValue });
   clonedTextJawaban.innerHTML = userSay({ game: jawabanValue })[5];
   
   document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
   
   textLoad();
   
   setTimeout(() => {
    
    textLoad();
    clonedTextPertanyaan.innerHTML = botSay()[7];
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
    setTimeout(() => {
     textLoad();
     
     clonedTextPertanyaan.innerHTML = " gimana klo kita main game cepet cepetan ngetik dari a sampe z?";
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     
     setTimeout(() => {
       barier.style.display = "none";
       textMengetik.innerHTML = "Online";
       
       
      clonedTextPertanyaan.innerHTML = `peraturan nya gampang intinya ${userData[0]} jangan main curang`;
        
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      textMengetik.innerHTML = "Online";
     }, 4500);
    }, 7000);
   }, 4000);
  }
  
  
  else if (init === 7) {
   console.log({ ok: jawabanValue });
   chatValue = userSay({ ok: jawabanValue })[6];
   
   userDelay({ ok: jawabanValue });
   clonedTextJawaban.innerHTML = userSay({ ok: jawabanValue })[6];
   
   document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
   
   textLoad();
   
   setTimeout(() => {
    
    barier.style.display = "none";
    textMengetik.innerHTML = "Online";
    
    clonedTextPertanyaan.innerHTML = botSay()[8];
   
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
   }, 4000);
 }
 
 
 else if (init === 8) {
  console.log({ siap: jawabanValue }, `siap siappp`)
  chatValue = userSay({ siap: jawabanValue })[7];
  
  textLoad();
  userDelay({ siap: jawabanValue });
  
  if(!cobaLagi) {
  clonedTextJawaban.innerHTML = userSay({ siap: jawabanValue })[7];
  
  document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
  }
  
  if(cobaLagi) {
    
   setTimeout(() => {
    clonedTextPertanyaan.innerHTML = `okk siap siap yaa ${userData[0]}`;
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
   setTimeout(() => {
    
     containerLinear.style.opacity = "1";
     containerLinear.style.transition = "1s";
   
     containerLove.style.opacity = "0";
     containerLove.style.transition = "1s";
    }, 1000);
    }, 2000);
  }
   
  else {
   setTimeout(() => {
   clonedTextPertanyaan.innerHTML = botSay({ siap: jawabanValue })[9];
   
   document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    }, 1000);
   }
   
   
    setTimeout(() => {
     textLoad();
     clonedTextPertanyaan.innerHTML = "satuuuu";
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     
     setTimeout(() => {
     barier.style.display = "none";
     clonedTextPertanyaan.innerHTML = "duuaaaaa";
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     
     setTimeout(() => {
      
     textLoad();
     botAnswerExecuted = false;
     clonedTextPertanyaan.innerHTML = "tiggaaaaaa";
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     
     function jawabanBot() {
       
       botAnswerExecuted = true;
       textMengetik.innerHTML = "Online"
       clonedTextPertanyaan.innerHTML = "abcdefghijklmnopqrstuvwxyz";
       
       document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       
       }
       setTimeout(jawabanBot, 6900);
       
          }, 1500);
        }, 2000);
      }, 3000);
 }

 
 else if (init === 9 && jawabanValue.toLowerCase() === "abcdefghijklmnopqrstuvwxyz") {
  console.log({ az: jawabanValue });
  chatValue = userSay({ az: jawabanValue })[8];
  
  userDelay({ az: jawabanValue });
  textLoad();
  
  clonedTextJawaban.innerHTML = userSay({ az: jawabanValue })[8];
  
  document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
  
  if(!botAnswerExecuted) {
    console.log('user menjawab lebih cepat')
    function userFirst() {
    setTimeout(() => {
      
     clonedTextPertanyaan.innerHTML = `wahh kamu hebat ${userData[0]} bisa ngalahin aku🥳`;
   
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
    setTimeout(() => {
     
     JawabanValue = jawaban.value;
     barier.style.display = "none";
     textMengetik.innerHTML = "Online";
     clonedTextPertanyaan.innerHTML = "karna kamu bisa ngalahin aku, ini buat kamu ❤️";
    
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
    setTimeout(() => {
       containerLinear.style.opacity = "0";
       containerLinear.style.transition = "1s";
       
       containerLove.style.opacity = "1";
       containerLove.style.transition = "1s";
      }, 2000);
     }, 4000);
    }, 4000);
   }
   
   setTimeout(userFirst, 0);
  }/*fungsi ketika menjawab dengan cepat*/
  
  else {
   textLoad();
   function botFirst() {
     JawabanValue = jawaban.value
     
      clonedTextPertanyaan.innerHTML = "wleee😝 aku duluan, kamuu kalah yahahaha lucu banget sih";
      
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      
      setTimeout(() => {
        barier.style.display = "none";
        textMengetik.innerHTML = "Online";
        clonedTextPertanyaan.innerHTML = `kalo ${userData[0]} mau mencoba lagi. ketik coba lagi`;
      
        document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       }, 9500);
     };
   setTimeout(botFirst, 2000);
    
   if(!cobaLagi) {
   textLoad();
   setTimeout(() => {
     
    textLoad();
    JawabanValue = jawaban.value;
    clonedTextPertanyaan.innerHTML = `yhhh maaf yaa ${userData[0]}🥺 walaupun jawaban kamu bener tapi aku dluan yang paling cepet`;
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
    setTimeout(() => {
      
     clonedTextPertanyaan.innerHTML = `tapi karna kamu udah jawab bener gada yang salah. ini buat kamu ❤️`;
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
    setTimeout(() => {
     
      barier.style.display = "none";
      textMengetik.innerHTML = "Online";
      
      containerLinear.style.opacity = "0";
      containerLinear.style.transition = "1s";
      
      containerLove.style.opacity = "1";
      containerLove.style.transition = "1s";
     }, 2000);
    }, 4500);
   }, 5000);
  } else {
   console.log('user sudah menjawab benar dan tidak ingin mencoba lagi');
  }
 }
} /* else if init 9 end kurawa*/
 
  else if (init === 9 && jawabanValue.toLowerCase() !== "abcdefghijklmnopqrstuvwxyz") {
   console.log('jawaban nya kurang bener')
   chatValue = userSay({ az: jawabanValue })[8];
   
   userDelay({ az: jawabanValue });
   clonedTextJawaban.innerHTML = userSay({ az: jawabanValue})[8];
   
   document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
   
   textLoad();
   
   function botFirst() {
      JawabanValue = jawaban.value
      textMengetik.innerHTML = "Online";
     
      clonedTextPertanyaan.innerHTML = `wleee😝 aku duluan, kamu kalah yahhaha lucu banget sihh kamu ${userData[0]} ngetik aja gak bener🤪`;
      
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     };
   setTimeout(botFirst, 2000);
   
   if(!cobaLagi) {
   setTimeout(() => {
    textLoad();
    JawabanValue = jawaban.value;
    
    clonedTextPertanyaan.innerHTML = `maaf yaa ${userData[0]} jawaban kamu ${userData[7]} kurang bener`;
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
    setTimeout(() => {
      barier.style.display = "none";
      textMengetik.innerHTML = "Online";
      clonedTextPertanyaan.innerHTML = `maaf ya ${userData[0]} kamu kalah, klo mau ketik coba lagi, untuk mencoba kembali`;
     
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     }, 7000);
    }, 10000);
   } /*if kurawa end*/
   
   else{
    setTimeout(() => {
     
    barier.style.display = "none";
    textMengetik.innerHTML = "Online";
    clonedTextPertanyaan.innerHTML = `maaf yaa ${userData[0]} cepetan aku, klo mau ketik coba lagi`;
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    }, 7000);
   }
  }
  
  
  else if (init === 10) {
   console.log({ userSay: jawabanValue });
   chatValue = userSay({ userSay: jawabanValue })[9];
   
   userDelay({ userSay: JawabanValue });
   if(init === 10 && jawabanValue.toLowerCase() === "coba lagi") {
   
   cobaLagi = true;
   clonedTextJawaban.innerHTML = userSay({ userSay: jawabanValue })[9];
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
    
    init = 7;
    
    botStart();
   } else {
   console.log('user tidak mau coba lagi')
   
    clonedTextJawaban.innerHTML = userSay({ userSay: jawabanValue })[9];
   
    document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
   
   textLoad();
   
   setTimeout(() => {
    
    clonedTextPertanyaan.innerHTML = botSay({ userSay: jawabanValue })[10]
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
    setTimeout(() => {
     textLoad();
     
     clonedTextPertanyaan.innerHTML = `makasih yaa ${userData[0]} udah main bareng sama aku😇, asik juga ya main sama kamu wksk`;
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     
     setTimeout(() => {
      barier.style.display = "none";
      textMengetik.innerHTML = "Online";
      
      clonedTextPertanyaan.innerHTML = `btw nanti kapan kapan kita ${userData[1]} bareng yaa klo aku bisa :)`;
      
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     }, 4000);
    }, 8000);
   }, 4000);
  }
 }
  
  
  else if (init === 11) {
   console.log({ end: jawabanValue });
   chatValue = userSay({ end: jawabanValue })[10];
   
   userDelay({ end: jawabanValue });
   clonedTextJawaban.innerHTML = userSay({ end: jawabanValue })[10];
   
   document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
   
   textLoad();
   
   setTimeout(() => {
    textMengetik.innerHTML = "Online";
    setTimeout(() => {
      textMengetik.innerHTML = "Offline";
      userStatus.innerHTML = "Do Not Disturb";
    }, 2000);
    
    clonedTextPertanyaan.innerHTML = botSay({ end: jawabanValue })[11];
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
   }, 4000);
  }
}/*kurawa end botStart*/

function botDelay(pertanyaanBot) {
  textPertanyaan.innerHTML = botSay(pertanyaanBot)[init];
  
  console.log("masuk ke userSay")
  
  jawaban.value = "";
}

function userDelay(jawabanUser) {
  userData.push(jawaban.value);
  fullData.push(chatValue);
  
  console.log("masuk ke userDelay")
  
  textJawaban.innerHTML = userSay(jawabanUser)[init];
  
  jawaban.value = "";
}


const textLoad = () => {
 setTimeout(() => {
  textMengetik.innerHTML = "Mengetik";
 },[0]);
 setTimeout(() => {
  textMengetik.innerHTML = "Mengetik.";
 },[1000]);
 setTimeout(() => {
  textMengetik.innerHTML = "Mengetik..";
 },[1800]);
 setTimeout(() => {
  textMengetik.innerHTML = "Mengetik...";
 },[2600]);
 setTimeout(() => {
  textMengetik.innerHTML = "Mengetik....";
 },[3400]);
}

if (localStorage.getItem("theme") === "basic" || theme === "basic") {
   userStatus.classList.add('statusUser');
   userStatus.classList.remove('userStatus');
  }
if (localStorage.getItem("theme") === "blue" || theme === "blue") {
   userStatus.classList.add('statusUser');
  }


const statusUser = () => {
  userStatus.innerHTML = "Online";
 setTimeout(() => {
  userStatus.innerHTML = "Do not disturb";
  setTimeout(() => {
   userStatus.innerHTML = "Online";
  }, 10000);
 }, 10000);
}

statusUser();
setInterval(statusUser, 20000);

/*kode validasi JAM*/

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  h = checkTime(h);
  timeAsk.innerHTML = `${h}.${m}`;
  timeQuestion.innerHTML = `${h}.${m}`;
}

function checkTime(i) {
  if (i < 10) {
  i = "0" + i;
   }
  return i;
 }
 
 window.onload = startTime();

/*kode validasi tanggal*/

const currentDate = new Date();
const d = currentDate.getDate();
const y = currentDate.getFullYear();
const monthIndex = currentDate.getMonth();

const date = document.querySelector('.date');

const monthNames = [
  "Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember",
  ]

date.innerHTML = `${d} ${monthNames[monthIndex]} ${y}`;


/*JAVASCRIPT CODE BACKGROUND ANIMATION*/

function hujanLinear() {
 let amount = 15;
 let containerLinear = document.querySelector('.container-linear');
 let i = 0;
 while(i < amount) {
  
  let drop = document.createElement('i');
  
  let size = Math.random() * 4;
  let posX = Math.floor(Math.random() * window.innerWidth);
  let delay = Math.random() * -150;
  let duration = Math.random() * 30;
  
  drop.style.width = 2 + size+'px';
  drop.style.left = posX + 'px';
  drop.style.animationDelay = delay+'s';
  drop.style.animationDuration = 25 + duration + 's';
  containerLinear.appendChild(drop);
  i ++
 }
}
 
hujanLinear();
 
function rainLove() {
 let amount = 10;
 let containerLove = document.querySelector('.container-love');
 let i = 0;
 while(i < amount){
  let dropLove = document.createElement('i');
  dropLove.classList.add('fas');
  dropLove.classList.add('fa-heart');
  
  let sizeLove = Math.random() * 16;
  let posXLove = Math.floor(Math.random() * Math.innerWidth);
  let delayLove = Math.random() * -115;
  let durationLove = Math.random() * 30;
  
  dropLove.style.fontSize = 13 + sizeLove +'px';
  dropLove.style.left = posXLove + '%';
  dropLove.style.animationDelay = delayLove + 's';
  dropLove.style.animationDuration = 25 + durationLove + 's';
  containerLove.appendChild(dropLove);
  i ++
  }
 }
  
 rainLove();
 
const isDarkMode = () => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
 console.log('kamu masuk ke theme default dari website ini');
 localStorage.setItem("theme", "basic")
} else {
 localStorage.setItem("theme", "blue");
 var img = document.createElement('img');
 console.log("kamu masuk ke theme ke dua di website ini");
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
 /*
 putih oren oren, putih ijo biru, putih biru ijo, putih coklat coklat*/