// prettier-ignore
const level1 = new Level(
[
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Endboss()
],

[
    new Cloud()
],
[
    new BackgroundObject("img/5_background/layers/air.png", -719),
    new BackgroundObject("img/5_background/layers/3_third_layer/2.png", -719),
    new BackgroundObject("img/5_background/layers/2_second_layer/2.png", -719),
    new BackgroundObject("img/5_background/layers/1_first_layer/2.png", -719),

    new BackgroundObject("img/5_background/layers/air.png", 0),
    new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 0),
    new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 0),
    new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 0),
    new BackgroundObject("img/5_background/layers/air.png", 719),
    new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 719),
    new BackgroundObject("img/5_background/layers/2_second_layer/2.png", 719),
    new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 719),

    new BackgroundObject("img/5_background/layers/air.png", 719 * 2),
    new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 719 * 2),
    new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 719 * 2),
    new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 719 * 2),
    new BackgroundObject("img/5_background/layers/air.png", 719 * 3),
    new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 719 * 3),
    new BackgroundObject("img/5_background/layers/2_second_layer/2.png", 719 * 3),
    new BackgroundObject( "img/5_background/layers/1_first_layer/2.png", 719 * 3),
],
[ new Coins(400 + Math.random() * 1500, 200 + Math.random() * 100),
    new Coins(400 + Math.random() * 1500, 200 + Math.random() * 10),
    new Coins(400 + Math.random() * 1500, 100 + Math.random() * 10),
    new Coins(400 + Math.random() * 1500, 200 + Math.random() * 10),
    new Coins(400 + Math.random() * 1500, 100 + Math.random() * 10),
    new Coins(400 + Math.random() * 1500, 200 + Math.random() * 10),
    new Coins(400 + Math.random() * 1500, 200 + Math.random() * 10),
    new Coins(400 + Math.random() * 1500, 100 + Math.random() * 10),
    new Coins(400 + Math.random() * 1500, 100 + Math.random() * 10),
    new Coins(400 + Math.random() * 1500, 100 + Math.random() * 10),

],

);
