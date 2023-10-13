let display = document.querySelector(".display input"); 

let buttons = Array.from(document.getElementsByClassName("btn"));

buttons.map((btn) => {
  btn.addEventListener("click", (e) => {
    switch (e.target.value) {
      case "Ac":
        display.value = "";
        break;
      case "=":
        try {
          display.value = eval(display.value);
        } catch (error) {
          display.value = "Error";
        }
        break;
      case "DE":
        if (display.value) {
          display.value = display.value.toString().slice(0, -1);
        }
        break;
      default:
        display.value += e.target.value;
    }
  });
});
