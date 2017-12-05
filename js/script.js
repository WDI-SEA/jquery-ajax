var pokeId = 1;
var interval;

var changeImage = function(){
  $.get('https://pokeapi.co/api/v2/pokemon/' + pokeId.toString() + '/')
  .done(function(data) {
    console.log(data);
    document.getElementById('result-name').textContent = data.name;
    document.getElementById('result-img').src = data.sprites['front_default'];
    document.getElementById('result-details').textContent = 'Weight: ' + data.weight.toString();
    pokeId++;
  })
  .fail(function(res){
    console.log('uh-oh', res);
  });
}

var loadAll = function(){
  $.get('https://pokeapi.co/api/v2/pokemon/?limit=150')
  .done(function(data) {
    var list = $('#result-list');
    for(var i = 0; i < data.results.length; i++){
      list.append('<div>').append(data.results[i].name);
    }
  })
  .fail(function(res){
    console.log('uh-oh', res);
  });
}

document.addEventListener('DOMContentLoaded', function(){
  loadAll();
  setInterval(function(){
    changeImage();
  }, 2000);
});
