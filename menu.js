//Menu desplegable

document.getElementById('button-menu').addEventListener('click',function(){
document.getElementById('button-menu').classList.toggle('close')
document.getElementById('nav').classList.toggle('show')
document.getElementById('header').classList.toggle('show')

});


document.getElementById('nav').addEventListener('click',e => {
  if(e.target.id === 'nav'){
    document.getElementById('nav').classList.remove('show')
    document.getElementById('button-menu').classList.remove('close')
  }
  })