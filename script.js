let form = document.querySelector("form");
form.onsubmit = submit;

function submit(e) {
  e.preventDefault(); // default is refresh
  // get input
  let input = document.querySelector("input");
  if (input.value === "good") {
    alert("bad");
  } else if (input.value === "bad") {
    alert("good");
  } else {
    alert("retry");
  }
}
