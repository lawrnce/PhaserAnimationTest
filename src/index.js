import 'phaser';

var config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 360,
  height: 520,
  scene: {
    preload: preload,
    create: create
  }
};

var game = new Phaser.Game(config);

var character;

function preload ()
{
  this.load.atlas('test_sheet', 'assets/test_sheet.png', 'assets/test_sheet.json');
}

function create ()
{
  character = this.add.sprite(150, 400, 'test_sheet','SimplePeople_Pimp_Black_[Front<0,5,8>]_[Party_Dance_01_000].png' );
  character.setScale(0.5, 0.5);

  var frameNames = this.anims.generateFrameNames('test_sheet', {
    start: 0, end: 26, zeroPad: 3,
    prefix: 'SimplePeople_Pimp_Black_[Front<0,5,8>]_[Party_Dance_01_', suffix: '].png'
  });

  this.anims.create({ key: 'party_dance', frames: frameNames, frameRate: 24, repeat: -1 });
  character.anims.play('party_dance');
}
