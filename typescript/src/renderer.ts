import { Shape } from "./shapes/shape.js";

class Renderer {
    shape: Shape

    constructor(shape: Shape) {
        this.shape = shape
    }
    draw (): void {
        const area: number = this.shape.computeArea()
        console.log("Shape drawn\n" + "Its area is " + area)
    }
}

export { Renderer }