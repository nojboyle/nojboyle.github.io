class OverheadWorld {
  constructor(params) {

    this.tileSize = params.tileSize;
    this.tileFolder = params.tileFolder;
    this.numTiles = params.numTiles;
    this.solidTiles = params.solidTiles;

    this.breakTiles = params.breakTiles;
    this.tileLibrary = [];

    for (let i = 0; i < this.numTiles; i++) {
      let tempTile = loadImage(this.tileFolder + "/" + i + ".png");
      this.tileLibrary.push(tempTile);
      /*console.log(tempTile);*/
    }
  }

  displayTile(id, x, y) {
    image(this.tileLibrary[id], x, y);
  }


  setupRooms(data, startRoom) {

    this.roomData = data;
    this.roomCurrent = startRoom;
    this.tileMap = this.roomData[this.roomCurrent].level;
  }

  displayWorld() {
    for (var row = 0; row < this.tileMap.length; row += 1) {
      for (var col = 0; col < this.tileMap[row].length; col += 1) {
        image(this.tileLibrary[ this.tileMap[row][col] ], col*this.tileSize, row*this.tileSize, this.tileSize, this.tileSize);
      }
    }
  }

  getTile(x, y) {
 
    let col = Math.floor(x/this.tileSize);
    let row = Math.floor(y/this.tileSize);

    if (row < 0 && this.roomData[this.roomCurrent].up != "none") {
      return "roomChange";
    }
    else if (row >= this.tileMap.length && this.roomData[this.roomCurrent].down != "none") {
      return "roomChange";
    }
    else if (col < 0 && this.roomData[this.roomCurrent].left != "none") {
      return "roomChange";
    }
    else if (col >= this.tileMap[row].length && this.roomData[this.roomCurrent].right != "none") {
      return "roomChange";
    }

    else if (row < 0 || row >= this.tileMap.length || col < 0 || col >= this.tileMap[row].length) {
      return -1;
    }

    return this.tileMap[row][col];
  }

  changeRoom(direction) {

    this.roomCurrent = this.roomData[this.roomCurrent][direction];

    this.tileMap = this.roomData[this.roomCurrent].level;
  }

  isTileSolid(id) {
    if (id in this.solidTiles) {
      return true;
    }

  
    return false;
  }
  isTileBreakable(id) {
    if (id in this.breakTiles)
    {
      return true;
    }
    return false;
  }
}
