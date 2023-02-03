function submitForm(e) {
  e.preventDefault();
  const image_url = document.querySelector("#image-url").value;
  const name = document.querySelector("#name-field").value;
  const address = document.querySelector("#address-field").value;
  const phone = document.querySelector("#phone-field").value;
  const email = document.querySelector("#email-field").value;
  const website = document.querySelector("#website-field").value;

  // //add image url
  const imageEle = document.querySelector(".image-container img");
  imageEle.src = image_url;

  //change name
  const nameEle = document.querySelector(".name");
  nameEle.innerText = name;

  // add skills
  const skills = document.querySelector("#skills-field").value;
  const skillsArr = skills.split(",");
  console.log(skillsArr);
  let str = "";
  for (let i = 0; i < skillsArr.length; i++) {
    str = str + `<div class="value">${skillsArr[i]}</div>`;
  }
  document.querySelector(".skills-details").innerHTML = str;

  //add experiences
  const experienceEle = document.getElementsByClassName(
    "experience-input-field"
  );
  console.log(experienceEle);
  const expHolderEle = document.getElementById("experiences-holder");
  expHolderEle.innerHTML = "";
  for (let i = 0; i < experienceEle.length; i++) {
    const exp = experienceEle[i].value;
    const newDiv = document.createElement("div");
    newDiv.innerHTML = exp;
    expHolderEle.appendChild(newDiv);
  }
}
// document.getElementsByTagName("form")[0].addEventListener("submit",submitForm)

function addExperienceField() {
  const inputEle = document.createElement("input");
  inputEle.type = "text";
  inputEle.className = "experience-input-field";
  inputEle.id = "ex-id";
  document.getElementById("experience-container-form").appendChild(inputEle);
}
function addEducationField() {}
