const inp_add = document.querySelector(".inp_add");
const addtodo = document.querySelector('.addtodo');
const contentmodal = document.querySelector('.contentmodal');

let quest = '';

function addNewToDo(){
if(inp_add.value==""){
    alert("digite um valor valido");
}else{
newToDo(newValueForToDo = inp_add.value);
eventoBtnDel();
eventoEdit();
}
};

function newToDo(newValueForToDo){
    //template string para adicionar uma nova tarefa recebendo o valor passado do input
    const textcard = 
    `
    <div class="boxcards">
    <div class="textcard">
    <input onClick="dashed(this)" type="checkbox" name="feito" id="feito" class="check">
    <label class="label" for="text">${newValueForToDo}</label>
    </div>
    <div class="botoes">
        <button class="edit">Edit</button>
        <button class="delete">Del</button>
    </div>
    </div>
    `;
    //adiciona a tamplate.
    addtodo.insertAdjacentHTML('afterend', textcard);

    inp_add.value="";
    inp_edit.value="";
};

//funçao que adiciona o evento del ao botão del
function eventoBtnDel(){
    //pego todos os bbotoes del e atribuo evento a eles.
    const btns = document.querySelectorAll('.delete');
    btns.forEach(function(element){
        element.addEventListener('click', ()=>{
         //mas passo uma aerofunction para remover o pai do  pai do boão clicado que é minha card to do.
            const arqDel =((element.parentNode).parentNode);

            arqDel.remove(this);
        });
});
};
//---Nao fiz dessa forma abaixo pois estava acontecendo um erro (a açao de mudar a classe so funcionava no elemento criado mais recentemente o que é estranho) nos demais tabem acontece mas esta funcionando-------------->>>>>>>>>

/*function eventoCheckd(){
    const check = document.querySelectorAll('.check');
        check.forEach(function(element){
        element.addEventListener('click', dashed(element))
  /* if(checkPai.style.textDecoration=='line-through'){
        checkPai.style.textDecoration='none';
    }else{
        checkPai.style.textDecoration='line-through'
    }
    })
    };*/
function dashed(element){
    (element.nextSibling).nextSibling.classList.toggle('mark');
};



function eventoEdit(){
    const edit = document.querySelectorAll('.edit');

    edit.forEach(function(element){
        element.addEventListener("click",()=>{
            const arqEdit = ((element.parentNode).parentNode);

            quest = (((((element.parentElement).parentElement).firstElementChild).firstElementChild).nextElementSibling).textContent;

            inp_edit.value=quest;

            arqEdit.remove(this);
            contentmodal.style.display="block";
        })
    })
};
function editToDo(){
   if(inp_edit.value==""){
    alert("digite um valor valido");
    }else{
    newToDo(inp_edit.value);
    eventoBtnDel();
    eventoEdit();
    contentmodal.style.display="none";
    }
};