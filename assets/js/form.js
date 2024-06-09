const formContact = document.getElementById("formContact");
const data = [];

formContact.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const startdate = document.getElementById("startdate").value;
  const enddate = document.getElementById("enddate").value;
  const message = document.getElementById("message").value;
  const subject = document.querySelectorAll("[name='brand']");
  const image = document.getElementById("image").files[0];

  if (name == "") {
    return alert("PLEASE ENTER YOUR NAME");
  } else if (startdate == "") {
    return alert("PLEASE ENTER YOUR DATE");
  } else if (enddate == "") {
    return alert("PLEASE ENTER YOUR DATE");
  } else if (subject == "") {
    return alert("PLEASE CHOOSE YOUR SUBJECT");
  } else if (message == "") {
    return alert("PLEASE ENTER YOUR MESSAGE");
  } else if (image == "") {
    return alert("PLEASE ENTER YOUR IMAGE");
  }

  if (enddate < startdate){
    return alert("are u kidding me")
  }
  console.log(
    `name : ${name}\nstardate : ${startdate}\nenddate : ${enddate}\nmessage : ${message}\nsubject : ${subject}\nimage : ${image}`
  );
  const brands = Array.from(subject)
    .map((item) => item.checked && item.value)
    .filter((item) => item !== false);

    let imageURL = URL.createObjectURL(image);

  const createdPost = {
    name: name,
    startdate: startdate,
    enddate: enddate,
    message: message,
    subject: brands,
    image: imageURL,
  };

  console.log(createdPost);
  data.push(createdPost)
    
    renderCard()
});


function renderCard(){
    document.getElementById("newCard").innerHTML = ""

    for (let i = 0; i < data.length; i++) {
        const project = data[i]

    document.getElementById("newCard").innerHTML +=`
    <div class="card">
    <img alt="photo" src="${project.image}"/>
    <div class="blog">
    <h3>${project.name}</h3>
    <p class="date">${(project.startdate)}</p><br>
    <p class="message1">
    ${project.message}
    </p>
    <p class="subject1">
    ${project.subject}
    </p>
    <div class="btn-container" style="display: flex; justify-content: space-between; margin-top: 20px;">
        <button class="edit-btn">edit</button>
        <button class="delete-btn">delete</button>
    </div>
    </div>
    </div>
    `
    }
    
}

// setInterval(function () {
//     createdPost():
// })