let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

let task = [];

if (localStorage.getItem("task")) {
      arrayOfTasks = JSON.parse(localStorage.getItem("task"));
     }
loadeFromLoclestorege();
submit.addEventListener("click", () => {
    if(input.value !=''){
        addElemnt();
        window.localStorage.setItem("task", JSON.stringify(task));
        input.value = "";
    }
 
});

function addElemnt() {
  const obj = {
    id: Date.now(),
    titel: input.value,
  };

  const div = document.createElement("div");
  div.classList.add("task");
  div.setAttribute("data-id", `${obj.id}`);
  div.innerText = `${obj.titel}`;

  const span = document.createElement("span");
  span.innerText = "delet";
  div.appendChild(span);
  tasksDiv.appendChild(div);

  task.push(obj);
  span.addEventListener("click", (e) => {
    let sible = e.currentTarget.parentElement.dataset.id;
    e.currentTarget.parentElement.remove();
    task = task.filter((element) => element.id != sible);
    window.localStorage.setItem("task", JSON.stringify(task));
  });
}

function loadeFromLoclestorege() {
  let data = window.localStorage.getItem("task");
  if (data) {
    let datajson = JSON.parse(data);
    datajson.forEach((element) => {
      const div = document.createElement("div");
      div.classList.add("task");
      div.setAttribute("data-id", `${element.id}`);
      div.innerText = `${element.titel}`;

      const span = document.createElement("span");
      span.innerText = "delet";
      div.appendChild(span);
      tasksDiv.appendChild(div);

      task.push(element);
      span.addEventListener("click", (e) => {
        let b = e.currentTarget.parentElement.dataset.id;
        e.currentTarget.parentElement.remove();
        task = task.filter((element) => element.id != b);
        window.localStorage.setItem("task", JSON.stringify(task));
      });
    });
  }
}


