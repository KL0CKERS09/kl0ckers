const searchBtn = document.getElementById('searchBtn');
const imgSdBtn = document.getElementById('imageSliderBtn');
const searchBody = document.getElementById('searchBody');




searchBtn.addEventListener("click", () => {
    if (searchBody.style.display === "none") {
        searchBody.style.display = "flex"
        imgSdBtn.style.transform = "translateY(-2em)"
    }else {
        imgSdBtn.style.transform = "translateY(0em)"
        searchBody.style.display = "none"
    }
})









