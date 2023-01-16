// elementos
const form = document.querySelector("#form");
const input = document.querySelector("#input");
const toda_lista = document.querySelector("#toda_lista");
const edit = document.querySelector("#edit");
const edit_input= document.querySelector("#edit_input");

let oldinputValue;


// funções
const savetudo = (Text) => {

    const tudo = document.createElement("div");
    tudo.classList.add("tudo");

    const tudotitle = document.createElement("h3");
    tudotitle.innerText = Text
    tudo.appendChild(tudotitle);

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("feito");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    tudo.appendChild(doneBtn);

    const editarBtn = document.createElement("button");
    editarBtn.classList.add("editar");
    editarBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    tudo.appendChild(editarBtn);

    const removerBtn = document.createElement("button");
    removerBtn.classList.add("remover");
    removerBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
    tudo.appendChild(removerBtn);

    toda_lista.appendChild(tudo);

    input.value = "";
    input.focus();
};

const toggleForms = () => {
    edit.classList.toggle("hide");
    form.classList.toggle("hide");
    toda_lista.classList.toggle("hide");
};

const updatetudo = (text) => {
    
    const tudo = document.querySelectorAll(".tudo")

    tudo.forEach((tudo) => {

        let tudotitle = tudo.querySelector("h3")
        
        if(tudotitle.innerText === oldinputValue) {
            tudotitle.innerText = text;
        }
    })
}

// eventos
form.addEventListener("submit",(e) => {
    e.preventDefault();

    const inputValue = input.value

    if(inputValue) {
        savetudo(inputValue)
    }
});

document.addEventListener("click", (e) => {
    const targetEl = e.target
    const parentEl = targetEl.closest("div");
    let tudotitle;

    if (parentEl && parentEl.querySelector("h3")){
        tudotitle = parentEl.querySelector("h3").innerText;
    }

    if(targetEl.classList.contains("feito")){
        parentEl.classList.toggle("done");
    }

    if(targetEl.classList.contains("remover")){
        parentEl.remove();
    }

    if(targetEl.classList.contains("editar")){
        toggleForms();
        
        edit_input.value = tudotitle;
        oldinputValue = tudotitle;
    }
});

edit.addEventListener("submit", (e) => {

    e.preventDefault()

    const edit_inputValue = edit_input.value

    if(edit_inputValue) {
        updatetudo(edit_inputValue)
    }

    toggleForms()
})

