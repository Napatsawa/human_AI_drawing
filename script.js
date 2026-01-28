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
        explanation: "ลักษณะของภาพมีเส้นที่คมและสม่ำเสมอตลอดทั้งภาพ และมีเรฟจากภาพวาดจริง",
        artist: "Gemini",
        ref: "https://res.cloudinary.com/db60xmg35/image/upload/v1769590276/0bb04e9c-a151-4903-90d9-1f955480fbad_sdgqgs.jpg",
        refArtist: "Napatsawan Phungphol"
      },
      {
        src: "https://res.cloudinary.com/db60xmg35/image/upload/v1769592403/6_seahss.png",
        answer: "human",
        explanation: "ลายเส้นและน้ำหนักแปรงยังไม่สม่ำเสมอแบบ AI",
        artist: "Napatsawan Phungphol"
      }
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
  document.getElementById("reveal").classList.add("hidden");

  updateProgress(); // 🔑
}


function showArtists() {
  alert(
    "Artist List\n\n" +
    "- Napatsawan Phungphol (Human)\n" +
    "- Artist A (Human)\n" +
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

  // feedback
  document.getElementById("result").textContent =
    isCorrect ? "Correct" : "Incorrect";
  document.getElementById("explanation").textContent =
    item.explanation;

  document.getElementById("feedback").classList.remove("hidden");

  // ซ่อนภาพคำถาม
  document.getElementById("question").classList.add("hidden");

  // แสดง container เฉลย
  const reveal = document.getElementById("reveal");
  reveal.classList.remove("hidden");

  // ภาพเฉลยหลัก
  document.getElementById("reveal-main").src = item.src;


  const refImg = document.getElementById("ref-image");
  const refCredit = document.getElementById("ref-credit");

  if (item.ref) {
    // มี ref → layout 2 รูป
    reveal.classList.remove("reveal-single");
    reveal.classList.add("reveal-grid");

    refImg.src = item.ref;
    refImg.classList.remove("hidden");

    refCredit.textContent = item.refArtist
      ? `Reference artwork by ${item.refArtist}`
      : "";
  } else {
    // ไม่มี ref → layout รูปเดียว
    reveal.classList.remove("reveal-grid");
    reveal.classList.add("reveal-single");

    refImg.classList.add("hidden");
    refImg.src = "";
    refCredit.textContent = "";
  }
}


function nextImage() {
  currentIndex++;

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

  let message = "นี่แค่อุ่นเครื่องนะ รับรองว่าด่านต่อไปจะท้าทายมากกว่านี้";

  if (score === shuffledImages.length) {
    message = "สายตาเฉียบมาก อย่าพึ่งเบื่อไปก่อนล่ะ";
  } else if (score < shuffledImages.length / 2) {
    message = "ยังไม่ง่ายใช่ไหมล่ะ ด่านต่อไปหนักกว่านี้อีก";
  }

  document.getElementById("game-message").textContent = message;
}


function goHome() {
  document.getElementById("game-over").classList.add("hidden");
  document.getElementById("home").classList.add("active");
}

function nextStage() {
  startGame("medium");
}



