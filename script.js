window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.transition = "0.8s";

        setTimeout(() => {
            loader.style.display = "none";
        }, 800);

    }, 2200);

});

const contract =
"EzNLkZYFLGE2G5v1AWXvcnrb54WxrkD7Syrxxch7pump";

const copyBtn = document.getElementById("copyBtn");

const copied = document.getElementById("copiedMessage");

if(copyBtn){

    copyBtn.addEventListener("click", () => {

        navigator.clipboard.writeText(contract);

        copied.innerHTML = "✅ Contract copied!";

        setTimeout(() => {

            copied.innerHTML = "";

        },2000);

    });

}

document.title = "REBEL";