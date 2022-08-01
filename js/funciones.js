/* 
let late= []

const albumSansotta = document.getElementById('principal-sansotta')

for (let index = 0; index <= 600; index++) {       
   
    const div = document.createElement('div')
    div.classList.add('figurita')
    div.innerHTML = `
    <div class="card" style="width: 5rem;" id="figurita${figu.id}">  
    <div class="card-body">
    <h5 class="card-title">${index}</h5>
    <a href="#" class="btn btn-dark" id="btn-late${figu.id}">OK</a>
    </div>
    </div>`   
    albumSansotta.appendChild(div)    
    albumS.push({id:index})

    
    const btn = document.getElementById('btn-late${index}')
    console.log(btn);
}
 



console.log(albumS)


const elegirFigu = (figuId) =>{
    const item = albumS.find((figu) => figu.id === figuId)
    late.push(item)
    console.log(late);

} 

















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
    { id: 20 }
];
console.log(albumS);
let late= []

const albumSansotta = document.getElementById('principal-sansotta')


albumS.forEach((figu) => {

    const div = document.createElement('div')
    div.classList.add('figurita')
    div.innerHTML = `
    <div class="card" style="width: 5rem;" id="figurita${figu.id}">  
    <div class="card-body">
    <h5 class="card-title">${figu.id}</h5>
    <a href="#" class="btn btn-dark" id="late${figu.id}">OK</a>
    </div>
    </div>`   
    albumSansotta.appendChild(div)       
    
    const boton = document.getElementById(`late${figu.id}`)
    boton.addEventListener('click', ()=>{
        elegirFigu(figu.id)
    }) 
})


 const elegirFigu = (figuId) =>{
    const item = albumS.find((figu) => figu.id === figuId)
    late.push(item)
    console.log(late);
    const eliminarFigu = document.getElementById(`figurita${figuId}`)
    eliminarFigu.parentNode.removeChild(eliminarFigu)
  
} 







*/