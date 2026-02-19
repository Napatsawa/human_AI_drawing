let currentStage = "warmup";
const stages = {
  warmup: {
    label: "Warm-up",
    images: [
      {
        src: "https://res.cloudinary.com/db60xmg35/image/upload/v1769358061/Klee_boom_bomm_osx25n.png",
        answer: "human",
        explanation: "เส้นและการลงสีแสดงถึงการตัดสินใจของมนุษย์ในแต่ละจังหวะ",
        artist: "Napatsawan Phungphol"
      },
      {
        src: "https://res.cloudinary.com/db60xmg35/image/upload/v1769358325/Gemini_Generated_Image_wl17efwl17efwl17_pwjp6x.png",
        answer: "ai",
        explanation: "ลักษณะของภาพมีเส้นที่คมและสม่ำเสมอตลอดทั้งภาพ",
        artist: "Gemini",
        ref: "https://res.cloudinary.com/db60xmg35/image/upload/v1769444755/Notes_260125_222211_klusa5.jpg",
        refArtist: "Napatsawan Phungphol"
      },
      {
        src: "https://res.cloudinary.com/db60xmg35/image/upload/v1769443656/Notes_241107_221255_wnckn4.jpg",
        answer: "human",
        explanation: "สไตล์ภาพวาดเล่น ลักษณะเส้นและสีเป็นการวาดด้วยมือ",
        artist: "Napatsawan Phungphol"
      },
      {
        src: "https://res.cloudinary.com/db60xmg35/image/upload/v1769443667/1769443447384_zujjjj.png",
        answer: "ai",
        explanation: "เป็นภาพวาดเอไอที่เขียนโดยพร็อมล้วนๆ",
        artist: "Gemini"
      },
      {
        src: "https://res.cloudinary.com/db60xmg35/image/upload/v1769586861/Notes_251218_230403_mdr51d.png",
        answer: "human",
        explanation: "ลายเส้นและน้ำหนักแปรงยังไม่สม่ำเสมอแบบ AI",
        artist: "Napatsawan Phungphol"
      }
    ]
  },

  medium: {
    label: "Medium",
    images: [
      {
        src: "https://res.cloudinary.com/db60xmg35/image/upload/v1769590105/Gemini_Generated_Image_blklu7blklu7blkl_f63v5z.png",
        answer: "ai",
        explanation: "ภาพนี้มีการวาดเพิ่มเติมและลงสีจากภาพเรฟ โดยภาพเรฟต้นฉบับผู้หญิงจะแตกสลายโดยที่เอไอเพิ่มส่วนของผู้หญิงให้ดูสมบูรณ์",
        artist: "Gemini",
        ref: "https://res.cloudinary.com/db60xmg35/image/upload/v1769590276/0bb04e9c-a151-4903-90d9-1f955480fbad_sdgqgs.jpg",
        refArtist: "Napatsawan Phungphol"
      },
      {
        src: "https://res.cloudinary.com/db60xmg35/image/upload/v1769592403/6_seahss.png",
        answer: "human",
        explanation: "เป็นภาพที่ได้แรงบันดาลใจจากการล้อตัวละคร นารุมิ เก็น ที่มีทรงผมเหมือนดอกบัวเลยวาดตัวละครนี้ในสระบัว",
        artist: "Napatsawan Phungphol"
      },
       {
        src: "https://res.cloudinary.com/db60xmg35/image/upload/v1769701068/IMG_6911_at3kum.jpg",
        answer: "human",
        explanation: "เป็นภาพที่แสดงบุคลิกของตัวละคร มีเล่นแสงเงาและลายเส้นมีเอกลักษณ์",
        artist: "อยากนอนแบบ ไม่ต้องทำอะไรเลย FB:อยากนอนแบบ ไม่ต้องทำอะไรเลย" 
      },
      {
        src: "https://res.cloudinary.com/db60xmg35/image/upload/v1769767497/Gemini_Generated_Image_xhyi7exhyi7exhyi_a2uhgd.png",
        answer: "ai",
        explanation: "ภาพวาดเอไอ โดยเขียนพรอมให้เป็นภาพที่ร่างไม่เสร็จ",
        artist: "Gemini",
      },
      {
        src: "https://res.cloudinary.com/db60xmg35/image/upload/v1769701062/IMG_8338_bn7iuw.jpg",
        answer: "human",
        explanation: "เป็นภาพที่แสดงบุคลิกของตัวละคร มีเล่นแสงสีในพื้นหลังของภาพ",
        artist: "อยากนอนแบบ ไม่ต้องทำอะไรเลย FB:อยากนอนแบบ ไม่ต้องทำอะไรเลย" 
      },
      {
        src: "https://res.cloudinary.com/db60xmg35/image/upload/v1769701046/Messenger_creation_368534A6-A5E7-4398-8E0B-95F433807AEA_j37jmb.jpg",
        answer: "human",
        explanation: "เป็นภาพร่องรอยของ'เส้นร่าง'ที่คนวาดหลงเหลือไว้ นอกจากนี้การถ่ายทอดอารมณ์ทางสีหน้าและการวางนิ้วมือเป็นเจตนาของผู้วาด",
        artist: "Tammy" 
      },
      {
        src: "https://res.cloudinary.com/db60xmg35/image/upload/v1769701088/622016223_1434985771679551_7232248872142747532_t0deai.jpg",
        answer: "human",
        explanation: "เป็นภาพแฟนอารด์ตัวละครที่วาดลายเส้นสไตล์อนิเมะ เน้นความเท่และรายละเอียดของอุปกรณ์",
        artist: "Pongsakorn Wannasri" 
      },
      {
        src: "https://res.cloudinary.com/db60xmg35/image/upload/v1769767503/Gemini_Generated_Image_x1yc2nx1yc2nx1yc_prwbh0.png",
        answer: "ai",
        explanation: "ภาพวาดเอไอ โดยเขียนพรอมให้เป็นภาพที่ร่างไม่เสร็จ",
        artist: "Gemini",
      },
      {
        src: "https://res.cloudinary.com/db60xmg35/image/upload/v1769767515/Gemini_Generated_Image_ly1gqdly1gqdly1g_hyv9rn.png",
        answer: "ai",
        explanation: "ภาพนี้เป็นการนำวาดวาดที่เสร็จแล้ว นำมาเจนภาพให้ดูยังวาดไม่เสร็จ",
        artist: "Gemini",
        ref: "https://res.cloudinary.com/db60xmg35/image/upload/v1770308382/26fc87b5-0ab1-446e-ade8-9db1775cc3d8_kcyzcd.jpg",
        refArtist: "Napatsawan Phungphol"
      },
      {
        src: "https://res.cloudinary.com/db60xmg35/image/upload/v1770880925/Gemini_Generated_Image_phnk47phnk47phnk_ugnuha.png",
        answer: "ai",
        explanation: "ภาพวาดเอไอ โดยเขียนพรอมให้สร้างภาพที่ต้องการหลายครั้ง",
        artist: "Gemini",
      },
    ]
  }
};

let shuffledImages = [];
let score = 0;
let currentIndex = 0;
let answered = false;

function updateProgress() {
  const progress = document.getElementById("progress");

  const stageLabel =
    currentStage === "warmup" ? "Warm-up" :
    currentStage === "medium" ? "Medium" :
    "Stage";

  progress.textContent =
    `${stageLabel} · ${currentIndex + 1} / ${shuffledImages.length}`;
}

function resetStageState() {
  score = 0;
  currentIndex = 0;
  answered = false;
  shuffledImages = [];

  // reset UI
  document.getElementById("feedback").classList.add("hidden");
  document.getElementById("question").classList.remove("hidden");
  document.getElementById("reveal").classList.add("hidden");
}


function startGame(stage = "warmup") {
  resetStageState();

  currentStage = stage;
  shuffledImages = [...stages[stage].images]
    .sort(() => Math.random() - 0.5);

  updateProgress();

  document.getElementById("home").classList.remove("active");
  document.getElementById("game-over").classList.add("hidden");
  document.getElementById("game").classList.add("active");

  loadImage();
}


function loadImage() {
  answered = false;

  document.getElementById("game-image").src =
    shuffledImages[currentIndex].src;

  document.getElementById("feedback").classList.add("hidden");
  document.getElementById("question").classList.remove("hidden");

  const reveal = document.getElementById("reveal");
  reveal.classList.add("hidden");
  reveal.classList.remove("reveal-grid", "reveal-single");

  // reset ref UI
  document.getElementById("ref-image").classList.add("hidden");
  document.getElementById("ref-placeholder").classList.add("hidden");
  document.getElementById("ref-credit").textContent = "";

  updateProgress();
}


function showArtists() {
  alert(
    "Artist List\n\n" +
    "- Napatsawan Phungphol (Human)\n" +
    "- Pongsakorn Wannasri (Human)\n" +
    "- อยากนอนแบบ ไม่ต้องทำอะไรเลย FB:อยากนอนแบบ ไม่ต้องทำอะไรเลย (Human)\n" +
    "- Tammy (Human)\n" +
    "- AI Model: Stable Diffusion\n\n" +
    "Images used with permission"
  );
}

function answer(type) {
  if (answered) return;
  answered = true;

  const item = shuffledImages[currentIndex];
  const isCorrect = type === item.answer;

  if (isCorrect) score++;

    document.querySelectorAll(".choice-btn").forEach(btn => {
    btn.disabled = true;
  });

document.getElementById("choices").classList.add("hidden");

  document.getElementById("result").textContent =
    isCorrect ? "Correct" : "Incorrect";

  document.getElementById("explanation").textContent =
    item.explanation;

  document.getElementById("feedback").classList.remove("hidden");
  document.getElementById("question").classList.add("hidden");

  const reveal = document.getElementById("reveal");
  reveal.classList.remove("hidden", "reveal-single", "reveal-grid");

  document.getElementById("reveal-main").src = item.src;

  const refImg = document.getElementById("ref-image");
  const refPlaceholder = document.getElementById("ref-placeholder");
  const refCredit = document.getElementById("ref-credit");

  if (item.ref) {
    reveal.classList.add("reveal-grid");

    refImg.src = item.ref;
    refImg.classList.remove("hidden");
    refPlaceholder.classList.add("hidden");

    refCredit.textContent = item.refArtist
      ? `Reference artwork by ${item.refArtist}`
      : "";
  } else {
    reveal.classList.add("reveal-single");

    refImg.classList.add("hidden");
    refImg.src = "";

    refPlaceholder.classList.remove("hidden");
    refCredit.textContent = "";
  }
}


function nextImage() {
  currentIndex++;
  answered = false;

document.querySelectorAll(".choice-btn").forEach(btn => {
  btn.disabled = false;
});
document.getElementById("choices").classList.remove("hidden");


  if (currentIndex >= shuffledImages.length) {
    endGame();
    return;
  }

  loadImage();
}

function endGame() {
  document.getElementById("game").classList.remove("active");
  document.getElementById("game-over").classList.remove("hidden");

  document.getElementById("final-score").textContent =
    `คุณได้ ${score} / ${shuffledImages.length} คะแนน`;

  let message = "";

if (currentStage === "warmup") {

  if (score === shuffledImages.length) {
    message = "สายตาเฉียบมาก อย่าพึ่งเบื่อไปก่อนล่ะ";
  } 
  else if (score < shuffledImages.length / 2) {
    message = "ยังไม่ง่ายใช่ไหมล่ะ ด่านต่อไปหนักกว่านี้อีก";
  }
  else{
    message = "นี่แค่อุ่นเครื่องนะ รับรองว่าด่านต่อไปจะท้าทายมากกว่านี้";
  }

} 
else if (currentStage === "medium") {

  if (score === shuffledImages.length) {
    message = "ยอดเยี่ยมมาก คุณมองเห็นสิ่งที่หลายคนมองข้ามได้";
  } 
  else if (score < shuffledImages.length / 2) {
    message = "ด่านนี้ไม่ง่ายเลยใช่ไหม ลองสังเกตรายละเอียดเล็ก ๆ ให้มากขึ้นในรอบหน้า";
  } 
  else {
    message = "คุณเริ่มจับจุดได้แล้ว ถ้าโฟกัสเรื่องแสงและสัดส่วนให้มากขึ้น คุณจะพลาดน้อยลง";
  }

}
  document.getElementById("game-message").textContent = message;
}


function goHome() {
  document.getElementById("game-over").classList.add("hidden");
  document.getElementById("home").classList.add("active");
}

function nextStage() {
  if (currentStage === "warmup") {
    startGame("medium");
  } 
  else if (currentStage === "medium") {
    alert("Hard mode is coming soon.");
    goHome();
    return;
  }
}



