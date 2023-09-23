window.addEventListener("scroll", function () {
    const navBar = document.getElementById("navBar");
    console.log(navBar)
    if (window.scrollY === 0) {
        navBar.style.backgroundColor = "rgba(0, 0, 0, 0)"; // Transparent when at the top
        navBar.style.boxShadow = "rgba(0, 0, 0, 0) 0px 0px 0px 0px";
    } else {
        navBar.style.backgroundColor = "rgba(0, 0, 0, 1)"; // Solid color when scrolled
        navBar.style.boxShadow = "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px";
    }
});
