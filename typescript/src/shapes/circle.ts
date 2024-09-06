import { Shape } from "./shape.js";

class Circle implements Shape {
    private radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }

    computeArea (): number {
        return Math.PI * this.radius * this.radius;
    }
}

export { Circle }
