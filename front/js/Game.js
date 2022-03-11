function preload(){

}

function create(){

}

function update(){

}

var config = {
    type: Phaser.AUTO,
    mode: Phaser.Scale.FIT,
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: '#000000',
  
    physics: {
      default: 'matter',
      matter: {
        gravity: {
          y: 0
        },
        debug: false
      }
    },
  
    scene: {
      preload: preload,
      create: create,
      update: update,
    },
    input: {
      gamepad: true
    }
  };

var game = new Phaser.Game(config);