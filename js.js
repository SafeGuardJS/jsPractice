//advanced_JS
//HomeWork 7
//Task 1
//Prototypes

function Box(height, width, depth, matirial) {
    this.height = height;
    this.width = width;
    this.depth = depth;
    this.matirial = matirial;

    this.volumeOfBox = function() {
        var volume =  this.height * this.width * this.depth;
        
        return volume;
    }
}

Box.prototype.equal = function(otherBox) {
    if(this.volumeOfBox() == otherBox.volumeOfBox()) {
        return true;
    }
    return false;
}

var firstBox = new Box(100, 10, 10, "Paper");
var secondBox = new Box(10, 10, 100, "Wood");

alert(firstBox.equal(secondBox));