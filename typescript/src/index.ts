import { Renderer } from "./renderer.js"
import { Rectangle } from "./shapes/rectangle.js";

const rectangle = new Rectangle(10, 5);
const renderer = new Renderer(rectangle)
renderer.draw();