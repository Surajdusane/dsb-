document.addEventListener("mousemove", function(dets) {
  gsap.to(".cursor", {
    left: dets.x,
    top: dets.y
  })
})

document.querySelector(".con").addEventListener("mouseenter", function() {
  gsap.to(".cursor", {
    transform: 'translate(-50%, -50%) scale(1)'
  });
});

document.querySelector(".con").addEventListener("mouseleave", function() {
  gsap.to(".cursor", {
    transform: 'translate(-50%, -50%) scale(0)'
  });
});

const imageFolder = 'asset/'; // Change 'images/' to your folder path
const totalImages = 103; // Total number of images
const container = document.getElementById('image-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageInfo = document.getElementById('page-info');

for (let i = 1; i <= totalImages; i++) {
  const img = new Image();
  const imagePath = `${imageFolder}DSB Belts-${padNumber(i, 3)}.png`;
  console.log("Image Path:", imagePath); // Log the image path
  img.src = imagePath;
  img.classList.add('image');
  container.appendChild(img);
}


const images = document.querySelectorAll('.image');
let currentIndex = 0;

// Display the first image
images[currentIndex].style.display = 'block';
updateButtonState();
updatePageInfo();

function prevImage() {
  if (currentIndex > 0) {
    images[currentIndex].style.display = 'none';
    currentIndex--;
    images[currentIndex].style.display = 'block';
    updateButtonState();
    updatePageInfo();
  }
}

function nextImage() {
  if (currentIndex < images.length - 1) {
    images[currentIndex].style.display = 'none';
    currentIndex++;
    images[currentIndex].style.display = 'block';
    updateButtonState();
    updatePageInfo();
  }
}

function updateButtonState() {
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === images.length - 1;
  prevBtn.classList.toggle('disabled', currentIndex === 0);
  nextBtn.classList.toggle('disabled', currentIndex === images.length - 1);
}

function updatePageInfo() {
  pageInfo.textContent = `Page ${currentIndex + 1} of ${images.length}`;
}

// Function to pad numbers with leading zeros
function padNumber(number, length) {
  return String(number).padStart(length, '0');
}
document.querySelector(".con").addEventListener("mousemove", function(event) {
  const cursorX = event.clientX;
  const cursorY = event.clientY;
  const elements = document.elementsFromPoint(cursorX, cursorY);

  elements.forEach(element => {
    if (element.classList.contains('con')) {
      return;
    }
    element.classList.add('cursor-hover');
  });
});

document.querySelector(".con").addEventListener("mouseleave", function() {
  const hoveredElements = document.querySelectorAll('.cursor-hover');
  hoveredElements.forEach(element => {
    element.classList.remove('cursor-hover');
  });
});
