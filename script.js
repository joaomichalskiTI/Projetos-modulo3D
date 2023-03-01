var currdeg = 0;
document.querySelectorAll('i.fa-arrow-right, i.fa-arrow-left').forEach(function(el) {
  el.addEventListener('click', rotate);
});

function rotate(e){
  var target = e.target.parentNode;
  if(target.classList.contains('next')){
    currdeg = currdeg - 30;
  }
  if(target.classList.contains('prev')){
    currdeg = currdeg + 30;
  }
  document.querySelector('.items').style.transform = 'rotateY('+ currdeg +'deg)';
}

//função de preenchimento de cor com transição da seta
const icon = document.querySelector('.fa-arrow-righ');
icon.addEventListener('click', function() {
  this.classList.add('clicked');
});