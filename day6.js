class Shape {
    constructor(side1, side2, side3, side4) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
        this.side4 = side4;
    }
    perimeter() {
        return this.side1 + this.side2 + this.side3 + this.side4;
    }
    area()
    {
        return this.side1 * this.side2 * this.side3 * this.side4;
    }
}
//rectangle
class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height);
        this.width = width;
        this.height = height;
    }
    printShape() {
        
        for (let i = 0; i < this.height; i++) {
            let row = '';
            for (let j = 0; j < this.width; j++) {
                row += '* ';
            }
            console.log(row);
        }
    }
    where_To_Draw() {
        console.log("Drawing a rectangle at coordinates (x,y) .");
    }
    Area() {
        return this.width * this.height;
    }
    Perimeter() { //محيط
        return 2 * (this.width + this.height);
    }
}
//Square
class Square extends Rectangle {
    constructor(sideLength) {
        super(sideLength);
        this.sideLength = sideLength;
        this.width = sideLength;
        this.height = sideLength;
    }
    Area() {
        return (this.sideLength) * 4;
    }

}

let S = new Square(3);
console.log(S.Area());
S.printShape();

console.log();

let R = new Rectangle(4, 5);
R.printShape();
console.log(R.Area());
console.log(R.Perimeter());
