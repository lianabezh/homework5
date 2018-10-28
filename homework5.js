

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const colorArray = ["red","green","orange"]
const rand = function (num) {return Math.floor(Math.random()*num)+1;};


const createBoxes= function (count, canvasWidth, canvasHeight) {
    const array=[];
    canvas.height = canvasHeight;
    canvas.width = canvasWidth;
    for(let i = 0; i < count ; i++) {
        array[i] = {
            x:rand(canvasWidth),
            y:rand (canvasHeight),
            width:30,
            height:30,
            xDir:1,
            yDir:1,
            color: colorArray[rand(3)-1],
            delta: 4,
             draw: function () {
                context.fillStyle =this.color;
                context.fillRect(this.x,this.y , this.width, this.height);
            },
            update: function () {
              this.x += this.xDir * this.delta;
                this.y += this.yDir * this.delta;
                if (this.x >= canvas.width - this.height)
                    this.xDir = -1;
                if (this.x <=0)
                    this .xDir =1;
                if (this.y >=canvas.width - this.height)
                    this.yDir = -1 ;
                if (this.y <0)
                    this.yDir = 1;
            }
        };
    }
    return array;
};
let arr= createBoxes(5,200,200);

const draw = function (){ context.fillStyle ='black';
               context.fillRect(0,0 , canvas.width, canvas.height);
 
for(let i = 0; i < arr.length; i++) {
const obj = arr[i];
obj.draw();
}
 };

const update = function () {
for(let i = 0; i < arr.length; i++) {
const obj = arr[i];
obj.update();
}
 };
const loop = function () {
draw();

update();
requestAnimationFrame(loop);
};
loop();

