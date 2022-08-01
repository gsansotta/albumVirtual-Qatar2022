let albumS = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
  { id: 12 },
  { id: 13 },
  { id: 14 },
  { id: 15 },
  { id: 16 },
  { id: 17 },
  { id: 18 },
  { id: 19 },
  { id: 20 },
];
console.log(albumS);
let late = [];

const albumSansotta = document.getElementById("principal-sansotta");
const tengo = document.getElementById("cuerpoModal");
const btnVaciar = document.getElementById('vaciar-late')
const contadorTengo = document.getElementById('tengo')
const contadorFaltan = document.getElementById('meFaltan')

/* INICIO LS */

document.addEventListener('DOMContentLoaded', ()=>{
if(localStorage.getItem('late')){
    late = JSON.parse(localStorage.getItem('late'))
    actualizarLate();
}

if(localStorage.getItem('albumS')){
    albumS = JSON.parse(localStorage.getItem('albumS'))
    actualizarLate();
}


}) 

/* FIN LS */

btnVaciar.addEventListener('click', ()=>{
    
    late.length = 0
    actualizarLate();    
    window.location.reload()  
})

albumS.forEach((figu) => {
  albumS.sort(function (a, b) {
    return a.id - b.id;
  });
  const div = document.createElement("div");
  div.classList.add("figurita");
  div.setAttribute("id", `figu${figu.id}`);
  div.innerHTML = `
    <div class="card" style="width: 5rem;" id="figurita${figu.id}">  
    <div class="card-body">
    <h5 class="card-title">${figu.id}</h5>
    <a href="#" class="btn btn-dark" id="late${figu.id}">OK</a>
    </div>
    </div>`;
  albumSansotta.appendChild(div);

  const boton = document.getElementById(`late${figu.id}`);
  boton.addEventListener("click", () => {
    elegirFigu(figu.id);
  });
});

const elegirFigu = (figuId) => {
  const item = albumS.find((figu) => figu.id === figuId);
  late.push(item);
  const indice = albumS.indexOf(item);
  albumS.splice(indice, 1);
  console.log(albumS);
  /* const eliminarFigu = document.getElementById(`figu${figuId}`);
  eliminarFigu.parentNode.removeChild(eliminarFigu); */
  console.log(late);
  actualizarLate();
};

const eliminarLate = (figuId) => {
  const item = late.find((figu) => figu.id === figuId);
  const indice = late.indexOf(item);
  late.splice(indice, 1);  
  albumS.push(item);
  console.log(albumS);
  actualizarLate();
  /* const div = document.createElement("div");
  div.classList.add("figurita");
  div.setAttribute("id", `figu${item.id}`);
  div.innerHTML = `
    <div class="card" style="width: 5rem;" id="figurita${item.id}">  
    <div class="card-body">
    <h5 class="card-title">${item.id}</h5>
    <a href="#" class="btn btn-dark" id="late${item.id}">OK</a>
    </div>
    </div>`;

  albumSansotta.appendChild(div); */
};

const actualizarLate = () => {
  tengo.innerHTML = "";
  late.forEach((figu) => {
    late.sort(function (a, b) {
      return a.id - b.id;
    });
    const div = document.createElement("div");
    div.className = "figuLate";
    div.innerHTML = `      
        <button type="button" class="btn btn-danger" onclick = "eliminarLate(${figu.id})"><h6> ${figu.id}</h6>X</button>       
        `;
    tengo.appendChild(div);
    localStorage.setItem('late', JSON.stringify(late))
    localStorage.setItem('albumS', JSON.stringify(albumS))
  });
  contadorTengo.innerHTML = late.length
  contadorFaltan.innerHTML = albumS.length
};

