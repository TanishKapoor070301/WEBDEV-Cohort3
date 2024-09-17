class Rectangle{
    constructor(width,height,color){
        this.width=width;
        this.height=height;
        this.color=color;
    }

    area(){
        const area=this.width*this.height;
        return area;
    }

    paint(){
        console.log(`painting color with color ${this.color}`)
    }

}

const rect=new Rectangle(2,3,"green");
console.log(rect.area());
console.log(rect.paint());