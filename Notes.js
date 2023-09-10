const addbtn = document.getElementById("add");
  addbtn.addEventListener("click", function () {
    addnewnote();
  });

  function addnewnote() {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
      <div class="tool">
          <button class="edit"><i class="fas fa-edit"></i></button>
          <button class="del"><i class="fas fa-trash-alt"></i></button>
      </div>
      <div class="main hidden"></div>
      <textarea></textarea>
    `;


    const editbtn = note.querySelector(".edit");
    const delbtn = note.querySelector(".del");
    const mains = note.querySelector(".main");
    const txt = note.querySelector("textarea");

    editbtn.addEventListener("click", function () {
      mains.classList.toggle("hidden");
      txt.classList.toggle("hidden");
    });

    delbtn.addEventListener("click",()=>
    {
        note.remove();
    })

    txt.addEventListener("input", (e) => {
      const { value } = e.target;
      mains.innerHTML = marked(value);
    });
    
    document.body.appendChild(note);
  }