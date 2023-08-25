let currentBanner = 1;
// mainbanner slider ( direction = -1 || 1)
let goToBanner = (direct, fromInterval) => {
    let previousBanner = currentBanner;
    if (direct > 0) {
        currentBanner = currentBanner < 3 ? currentBanner + 1 : currentBanner - 2;
    }
    if (direct < 0) {
        currentBanner = currentBanner > 1 ? currentBanner - 1 : currentBanner + 2;
    }
    document.getElementById('banner-' + previousBanner).style.opacity = 0;
    document.getElementById('banner-' + currentBanner).style.opacity = 1;
}

const changeBanner = setInterval(() => {
    goToBanner(1, true);
}, 3000);

// aside slider ( direction = -1 || 1)
let currentTransformY = 0;
const itemHeight = document.getElementsByClassName("best-seller-item")[0].offsetHeight;
const slideHeight = document.getElementById("best-seller-container-id").offsetHeight;
const listItemHeight = document.getElementById("best-seller-items-id").offsetHeight;
const minTransformY = -1 * Math.abs(slideHeight - listItemHeight), maxTranformY = 0;

let bestSellerScroll = (direction, fromInterval) => {

    document.getElementById("best-seller-items-id").style.transition = "all 1s ease-in-out";
    let newTransform = direction * itemHeight + currentTransformY;
    if (direction > 0 && currentTransformY < maxTranformY) {   // nếu cuộn lên mà còn chỗ
        currentTransformY = maxTranformY < newTransform ? maxTranformY : newTransform;
    }
    else if (direction < 0 && currentTransformY > minTransformY) {   // nếu cuộn xuống mà còn chỗ
        currentTransformY = minTransformY > newTransform ? minTransformY : newTransform;
    }
    else {
        document.getElementById("best-seller-items-id").style.transition = fromInterval ? "" : "all 1s ease-in-out";
        currentTransformY = direction < 0 ? maxTranformY : minTransformY; // nếu cuộn lên hoặc cuộn xuống không còn chỗ
    }
    document.getElementById("best-seller-items-id").style.transform = "translateY(" + currentTransformY + "px)";
}

const viewBestSeller = setInterval(() => {
    bestSellerScroll(-1, true);
}, 2000);

// new & hot menu

let showHotNewMenu = (type) => {
    document.getElementsByClassName("new-product-button")[0].style.backgroundColor = type == "new" ? "#EF233C" : "transparent";
    document.getElementsByClassName("new-product-button")[0].style.color = type == "new" ? "white" : "black";
    document.getElementsByClassName("hot-product-button")[0].style.backgroundColor = type == "hot" ? "#EF233C" : "transparent";
    document.getElementsByClassName("hot-product-button")[0].style.color = type == "hot" ? "white" : "black";
    document.getElementsByClassName("product-hot")[0].style.opacity = type == "hot" ? 1 : 0;
    document.getElementsByClassName("product-new")[0].style.opacity = type == "new" ? 1 : 0;
    console.log(document.getElementsByClassName("product-hot")[0].style.opacity);
}