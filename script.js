// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

var dx = 5;//a taxa de variação (velocidade) horizontal do objeto
var dy = 5;//a taxa de variação (velocidade) horizontal do objeto
var x = 30;//posição horizontal do objeto (com valor inicial)
var y = 0;//posição vertical do objeto (com valor inicial)
var WIDTH = 1000;//largura da área retangular
var HEIGHT = 340;//altura da área retangular
var tile1 = new Image();//Imagem que será carregada e desenhada na canvas
var position = 'r1';//Indicador da posição atual do personagem
var NUM_POS = 4;//Quantidade de imagens que compõem o movimento

document.onkeydown = function (evt){
  switch (evt.keyCode) {
      case 39:  /*seta para direita*/
      if(position.substr(1) === 'r' || position.substr(1) === 'l') 
        position = 'r1';
          if (x + dx < WIDTH){
              x += dx;
              position = +position.substr(1);
              position++;
              if(position == NUM_POS)
                  position = 1;
              position = 'r'+position;
          }
          break;  
          case 37:  /*seta para esquerda*/
          if(position.substr(1) === 'r' || position.substr(1) === 'l') 
        position = 'l1';
          if (x - dx > 0){
              x -= dx;
              position = +position.substr(1);
              position++;
              if(position == NUM_POS)
                  position = 1;
              position = 'l'+position;
          }
          break; 
          case 38:  /*seta para esquerda*/
          if (y - dy > 0){
              y -= dy;
              if(position[0] == 'r' || position[1] == 'r')
                  position = 'ur';
              else
                position = 'ul'
          }
          break; 
          case 40:  /*seta para esquerda*/
          if (y + dy < HEIGHT){
              y += dy;
              if(position[0] == 'r' || position[1] == 'r')
                  position = 'dr';
              else
                position = 'dl'
          }
          break;
  }
}

function draw() {   
  tile1.src = 'images/'+position+".png";
  ctx.drawImage(tile1, x, y);
}


function clear() {
  ctx.fillStyle = "rgb(233,233,233)";   
  ctx.beginPath();
  ctx.rect(0, 0, WIDTH, HEIGHT);
  ctx.closePath();
  ctx.fill();   
}

function update() {
  clear();    
  draw();
  window.requestAnimationFrame(update);
}

function start() {
  window.requestAnimationFrame(update);
}

start();


