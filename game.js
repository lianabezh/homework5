const canvas = document.getElementById('game');
    const ctx = canvas.getContext('2d');

    canvas.width = 900;
    canvas.height = 700;

    const backImg = new Image();
    backImg.src = 'https://cdn-images-1.medium.com/max/2000/1*AtqbHyAw4dJ_Z_YqO86fOw.png';

    const heroImg = new Image();
    heroImg.src = 'https://pre00.deviantart.net/d147/th/pre/f/2016/093/6/7/marvel_avengers_alliance_2_thor_by_steeven7620-d9xip20.png';

    let box = {
        x     : 20,
        y     : 430,
        w     : 140,
        h     : 200,
        xdir  : 0,
        ydir  : 0,
        speed : 5
    };

    const boxMethods = {
        draw   : box => {
            ctx.drawImage(heroImg, box.x, box.y, box.w, box.h);
        },
        update : box => {
            box.x += box.xdir * box.speed;
            box.y += box.ydir * box.speed;
        }
    };

    const draw = () => {
        ctx.drawImage(backImg, 0, 0, canvas.width, canvas.height);
        boxMethods.draw(box);
    };

    const update = () => {
        boxMethods.update(box);
    };

    const loop = () => {
        draw();
        update();
        requestAnimationFrame(loop);
    };
    loop();

    const leftKey = 37,
        upKey = 38,
        rightKey = 39,
        downKey = 40;

    document.addEventListener('keydown', e => {
        e.preventDefault();
        const keyCode = e.keyCode;
        if(keyCode === rightKey)
            box.xdir = 1;
        else if(keyCode === leftKey)
            box.xdir = -1;
        else if(keyCode === upKey)
            box.ydir = -1;
        else if(keyCode === downKey)
            box.ydir = 1;
    });
    document.addEventListener('keyup', e => {
        e.preventDefault();
        const keyCode = e.keyCode;
        if(keyCode === rightKey || keyCode === leftKey) {
            box.xdir = 0;
        } else if(keyCode === upKey || keyCode === downKey) {
            box.ydir = 0;
        }
    });