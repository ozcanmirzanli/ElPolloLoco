class World {
  character = new Character();
  level = level1;
  // prettier-ignore
  enemies = level1.enemies;
  clouds = level1.clouds;
  backgroundObjects = level1.backgroundObjects;
  canvas;
  ctx;
  camera_x = 0;
  keyboard;
  statusBar = new Statusbar();
  coinsBar = new Coinsbar();
  bottleBar = new Bottlebar();
  throwableObjects = [];
  coins = level1.coins;
  salsaBottle = level1.salsaBottle;
  coin_sound = new Audio("audio/coin.mp3");
  bottle_sound = new Audio("audio/bottle.mp3");
  chicken_dead = new Audio("audio/chicken_dead.mp3");

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
    this.throwBottle();
  }

  setWorld() {
    this.character.world = this;
  }

  run() {
    setInterval(() => {
      this.checkCollisions();
      this.checkIsJumpedOn();
      this.collectItems("coins", 10, this.coinsBar);
      this.collectItems("salsaBottle", 20, this.bottleBar);
    }, 50);
  }

  throwBottle() {
    setInterval(() => {
      this.checkThrowObjects();
    }, 100);
  }

  checkThrowObjects() {
    if (this.keyboard.D) {
      let bottle = new ThrowableObject(
        this.character.x + 100,
        this.character.y + 100
      );
      this.throwableObjects.push(bottle);
    }
  }

  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        this.character.hit();
        this.statusBar.setPercentage(this.character.energy);
      }
    });
  }

  checkIsJumpedOn() {
    this.level.enemies.forEach((enemy, index) => {
      if (
        this.character.isJumpedOn(enemy) &&
        this.character.isAboveGround() &&
        !enemy.isEnemyDead
      ) {
        this.killedEnemy(enemy, index);
      }
    });
  }

  killedEnemy(enemy, index) {
    enemy.isEnemyDead = true;
    this.chicken_dead.play();
    this.character.jump(10); // Make the character bounce back after hitting an enemy
    setTimeout(() => {
      this.level.enemies.splice(index, 1);
    }, 1000);
  }

  collectItems(itemType, increment, bar) {
    if (bar[itemType] >= 100) {
      return;
    }
    this.level[itemType] = this.level[itemType].filter((mo) => {
      if (this.character.isColliding(mo)) {
        this.character[itemType] += increment;
        bar.setPercentage(this.character[itemType]);
        if (itemType === "coins") {
          this.coin_sound.play();
        } else {
          this.bottle_sound.play();
        }
        return false; // Remove item from array
      }
      return true; // Keep item in array
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.clouds);

    this.ctx.translate(-this.camera_x, 0);
    // ----- Space for fixed objects -----
    this.addToMap(this.statusBar);
    this.addToMap(this.coinsBar);
    this.addToMap(this.bottleBar);

    this.ctx.translate(this.camera_x, 0);

    this.addToMap(this.character);

    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.throwableObjects);
    this.addObjectsToMap(this.level.salsaBottle);

    this.ctx.translate(-this.camera_x, 0);

    // Draw() wird immer wieder aufgerufen
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }

    mo.draw(this.ctx);

    mo.drawFrame(this.ctx);

    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }
}
