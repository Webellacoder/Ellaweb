
const reviews = [
    {
    id: 1,
    name: "Ema",
    job: "UI Designer",
    img: "uuu.jpg",
    text: "User interface (UI) design is the process designers use to build interfaces in software or computerized devices, focusing on looks or style."
    },
    {
    id: 2,
    name: "Susan",
    job: "Web Designer",
    img: "mmm.JFIF",
    text: "Web development is the building and maintenance of websites. It is the work that happens behind the scenes."
    },
    {
    id: 3,
    name: "Ella",
    job: "Web Designer",
    img: "iii.jpg",
    text: "Web development is the building and maintenance of websites. It is the work that happens behind the scenes."
    },
    {
    id: 4,
    name: "Elsa",
    job: "UI Designer",
    img: "OOO.jpg",
    text: "User interface (UI) design is the process designers use to build interfaces in software or computerized devices, focusing on looks or style."
    }
    ];
    
    const img = document.getElementById("person-img");
    const author = document.getElementById("author");
    const job = document.getElementById("job");
    const info = document.getElementById("info");
    
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const randomBtn = document.querySelector(".random-btn");
    
    let currentItem = 0;
    
    window.addEventListener("DOMContentLoaded", function() {
    showPerson(currentItem);
    });
    
    function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
    }
    
    nextBtn.addEventListener("click", function() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
    currentItem = 0;
    }
    showPerson(currentItem);
    });
    
    prevBtn.addEventListener("click", function() {
    currentItem--;
    if (currentItem < 0) {
    currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
    });
    
    randomBtn.addEventListener("click", function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
    });









