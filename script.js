let form = document.getElementById("form");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let post = document.getElementById("post");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (textarea.value === "") {
    msg.innerHTML = "El comentario no puede estar vacío.";
  } else if (textarea.value.length > 255) {
    msg.innerHTML = "El comentario no puede exceder los 255 caracteres.";
  } else {
    msg.innerHTML = "";
    acceptData();
  }
};

let data = {};

let acceptData = () => {
  data["text"] = textarea.value;
  createPost();
};

let createPost = () => {
  post.innerHTML += `
    <div>
      <p>${formatText(data.text)}</p>
      <span>
        <i onclick="editpost(this)" class="fas fa-edit"></i>
        <i onclick="deletepost(this)" class="fas fa-trash-alt"></i>
      </span>
    </div>
    `;
  textarea.value = "";
};

let formatText = (text) => {
  // Limitar el texto a 255 caracteres
  let truncatedText = text.substring(0, 255);
  // Reemplazar los saltos de línea por etiquetas <br>
  let formattedText = truncatedText.replace(/\n/g, "<br>");
  return formattedText;
};

let editpost = (e) => {
  textarea.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};

let deletepost = (e) => {
  e.parentElement.parentElement.remove();
};
