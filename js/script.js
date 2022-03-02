{
    const button = document.querySelector(".button");
    const subtitle3 = document.querySelector(".subtitle3");
    button.addEventListener("click", () => {
        subtitle3.remove();
    });
    const init = () => {
        console.log("Hello, welcome!");
    };
    init();
}








