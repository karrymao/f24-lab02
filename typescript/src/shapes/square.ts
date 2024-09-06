import { Shape } from "./shape.js";

class Square implements Shape {
    private sidelen: number

    constructor(sidelen: number) {
        this.sidelen = sidelen;
    }

    computeArea (): number {
        return this.sidelen * this.sidelen
    }
}

export { Square }