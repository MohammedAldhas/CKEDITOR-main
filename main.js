// CKEDITOR
CKEDITOR.replace("textarea");

let contentCopy = document.getElementById("editor-content-copy");
let postButton = document.getElementById("postButton");

postButton.addEventListener("click", () => {
  //contentCopy.innerHTML = CKEDITOR.instances.editor1.document.getBody().getText(); // For plain text
  contentCopy.innerHTML = CKEDITOR.instances.textarea.getData(); // For formatted tex

  let btn = document.createElement("button");
  btn.innerText = "delete";
  contentCopy.appendChild(btn);

  function btnRemove() {
    contentCopy.remove();
  }
  btn.addEventListener("click", btnRemove);
});

let log_in = document.querySelector("#log_in");
let userName = document.getElementById("user-name");
userName.innerText = localStorage.getItem("name");
// LogIn
log_in.remove();
function log_out() {
  userName.innerText = localStorage.getItem("name");
  localStorage.clear();
  location.href = "./index.html"
}

function LogIn() {
  let name = document.getElementById("name");

  let pass = document.getElementById("pass");
  let showName = document.getElementById("user-name");

  let check = document.querySelector(".checkName");
  let checking = document.querySelector(".checking");

  if (
    name.value !== "" &&
    name.value.length > 1 &&
    pass.value !== "" &&
    pass.value.length > 5
  ) {
    showName.innerText = "hello " + name.value;
    location.href = "./bloog.html";
    localStorage.setItem("name", name.value);

    check.style.display = "none";
    checking.style.display = "none";
  } else if (name.value === "" && pass.value === "") {
    check.style.display = "block";
  } else if (name.value.length < 2) {
    checking.innerText = "name must have more than one character";
    checking.style.display = "block";
  } else if (pass.value.length < 5) {
    checking.innerText = "password must have more than five character";
    checking.style.display = "block";
  }
}

// Bloog

if (localStorage.name === undefined) {
  location.href = "http://127.0.0.1:5500/index.html";
}
