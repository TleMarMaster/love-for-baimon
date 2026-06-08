// ====================
// เริ่มต้นเว็บ
// ====================

function startLove(){

document.getElementById("intro").style.display="none";

document.getElementById("main").style.display="block";

startMusic();

}

// ====================
// เพลง
// ====================

let musicPlaying=false;

function startMusic(){

if(musicPlaying) return;

document.getElementById("ytPlayer").src=
"https://www.youtube.com/embed/N9bashij_7c?autoplay=1&loop=1&playlist=N9bashij_7c";

musicPlaying=true;

}

function toggleMusic(){

const player=
document.getElementById("ytPlayer");

if(player.src===""){

startMusic();

}else{

player.src="";

musicPlaying=false;

}

}

// ====================
// ตัวนับเวลา
// ====================

const startDate =
new Date("2025-09-02T00:00:00");

function updateCounter(){

const now = new Date();

const diff = now - startDate;

const days =
Math.floor(
diff/(1000*60*60*24)
);

const hours =
Math.floor(
(diff/(1000*60*60))%24
);

const minutes =
Math.floor(
(diff/(1000*60))%60
);

const seconds =
Math.floor(
(diff/1000)%60
);

document.getElementById(
"counter"
).innerHTML=
`
💞 เราเดินทางมาด้วยกันมาแล้ว<br><br>

${days} วัน

${hours} ชั่วโมง

${minutes} นาที

${seconds} วินาที

❤️
`;

}

setInterval(
updateCounter,
1000
);

updateCounter();

// ====================
// สไลด์รูป
// ====================

let currentSlide=0;

const slides=
document.querySelectorAll(".slide");

function nextSlide(){

slides[currentSlide]
.classList.remove("active");

currentSlide++;

if(
currentSlide>=slides.length
){

currentSlide=0;

}

slides[currentSlide]
.classList.add("active");

}

setInterval(
nextSlide,
5000
);

// ====================
// หัวใจลอย
// ====================

function createHeart(){

const heart=
document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤️";

heart.style.left=
Math.random()*100+"%";

heart.style.fontSize=
(Math.random()*25+15)
+"px";

heart.style.animationDuration=
(Math.random()*4+5)
+"s";

document
.getElementById("hearts")
.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(
createHeart,
250
);

// ====================
// ดาววิบวับ
// ====================

function createSpark(){

const spark=
document.createElement("div");

spark.classList.add("spark");

spark.style.left=
Math.random()*100+"%";

spark.style.top=
Math.random()*100+"%";

document
.getElementById("particles")
.appendChild(spark);

setTimeout(()=>{

spark.remove();

},4000);

}

setInterval(
createSpark,
150
);

// ====================
// ข้อความบอกรัก
// ====================

const loveMessages=[

"ขอบคุณที่เข้ามาเป็นความสุขในทุกวันของเค้า ❤️",
"ใบหม่อนคือรอยยิ้มที่เค้าอยากเห็นทุกวัน 💖",
"เค้ารักใบหม่อนมากนะ ❤️",
"อยู่ด้วยกันไปนานๆนะ 💞",
"เค้าภูมิใจในตัวใบหม่อนเสมอ ❤️",
"ไม่ว่าวันไหนจะเหนื่อยแค่ไหน แค่มีใบหม่อนก็พอแล้ว 💖",
"ทุกช่วงเวลาที่มีใบหม่อน คือช่วงเวลาที่ดีที่สุด ❤️",
"ขอบคุณที่จับมือกันเดินมาถึงวันนี้ 💞",
"ใบหม่อนน่ารักที่สุดในโลก ❤️",
"รักนะคนเก่ง 💖",

"ขอบคุณที่ไม่เคยทิ้งเค้าไปไหน ❤️",
"ใบหม่อนเป็นคนที่ทำให้เค้ายิ้มได้เสมอ 💕",
"เค้าชอบเวลาที่ใบหม่อนหัวเราะ ❤️",
"เค้ามีความสุขทุกครั้งที่ได้คุยกับใบหม่อน 💖",
"ต่อให้โลกทั้งใบไม่เข้าใจ เค้าก็ยังอยู่ข้างใบหม่อน ❤️",
"ใบหม่อนเก่งกว่าที่ตัวเองคิดเสมอ 💞",
"เค้าภูมิใจในทุกความพยายามของใบหม่อน ❤️",
"ไม่ว่าอะไรจะเกิดขึ้น เค้าจะอยู่ตรงนี้ 💖",
"ใบหม่อนคือของขวัญที่ดีที่สุดในชีวิต ❤️",
"ขอบคุณที่เข้ามาเติมเต็มชีวิตเค้า 💕",

"เค้าชอบทุกอย่างที่เป็นใบหม่อน ❤️",
"ใบหม่อนใจดีมากนะ 💖",
"ใบหม่อนน่ารักเวลายิ้ม ❤️",
"เค้าชอบมองรูปใบหม่อน 💞",
"แค่เห็นข้อความจากใบหม่อนก็ยิ้มแล้ว ❤️",
"เค้ารอคุยกับใบหม่อนทุกวัน 💖",
"ใบหม่อนเป็นคนพิเศษที่สุด ❤️",
"ไม่มีใครแทนที่ใบหม่อนได้ 💕",
"เค้าดีใจที่ได้เจอใบหม่อน ❤️",
"ขอบคุณที่อยู่ในชีวิตเค้านะ 💖",

"เค้ารักทุกความเป็นใบหม่อน ❤️",
"ขอบคุณสำหรับทุกความทรงจำ 💞",
"เค้าอยากสร้างความทรงจำดีๆกับใบหม่อนไปอีกนาน ❤️",
"ใบหม่อนทำให้โลกของเค้าสดใสขึ้น 💖",
"เค้าชอบเวลาที่เราอยู่ด้วยกัน ❤️",
"ขอบคุณที่รับฟังเค้าเสมอ 💕",
"ใบหม่อนคือกำลังใจของเค้า ❤️",
"ขอบคุณที่เป็นตัวเอง 💖",
"เค้าหวงรอยยิ้มของใบหม่อนนะ ❤️",
"เค้าจะดูแลหัวใจดวงนี้ให้ดีที่สุด 💞",

"ต่อให้เวลาผ่านไปแค่ไหน เค้าก็ยังเลือกใบหม่อน ❤️",
"ใบหม่อนคือคนสำคัญที่สุด 💖",
"เค้าโชคดีมากที่มีใบหม่อน ❤️",
"ทุกวันกับใบหม่อนมีค่าเสมอ 💕",
"ขอบคุณที่เป็นความสุขของเค้า ❤️",
"ใบหม่อนคือความรักที่ดีที่สุด 💖",
"เค้าอยากอยู่ข้างใบหม่อนไปเรื่อยๆ ❤️",
"ใบหม่อนคือบ้านของหัวใจเค้า 💞",
"รักวันนี้ พรุ่งนี้ และทุกวัน ❤️",
"ขอบคุณที่รักเค้า 💖",

"ถ้าต้องเลือกใหม่อีกครั้ง เค้าก็จะเลือกใบหม่อน ❤️",
"ขอให้ใบหม่อนยิ้มเยอะๆนะ 💕",
"เค้าชอบทุกอย่างเกี่ยวกับใบหม่อน ❤️",
"เค้าคิดถึงใบหม่อนเสมอ 💖",
"ต่อให้ทะเลาะกัน เค้าก็ยังรักใบหม่อน ❤️",
"ใบหม่อนสวยที่สุดในสายตาเค้า 💞",
"ขอให้เราอยู่ด้วยกันไปนานๆ ❤️",
"เค้าจะอยู่ข้างๆเสมอ 💖",
"ไม่ว่าจะวันดีหรือวันร้าย เค้าจะไม่ไปไหน ❤️",
"รักใบหม่อนมากๆนะ 💕"

];

let msgIndex=0;

function changeMessage(){

msgIndex++;

if(
msgIndex>=loveMessages.length
){

msgIndex=0;

}

document.getElementById(
"loveText"
).innerHTML=
loveMessages[msgIndex];

}

setInterval(
changeMessage,
4000
);
