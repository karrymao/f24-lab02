import { Renderer } from "./renderer.js"
import { Rectangle } from "./shapes/rectangle.js";
import { Square } from "./shapes/square.js";
import { Circle } from "./shapes/circle.js";

const rectangle = new Rectangle(10, 5);
const renderer = new Renderer(rectangle)
renderer.draw();

const square = new Square(10);
const renderer2 = new Renderer(square)
renderer2.draw();

const circle = new Circle(10);
const renderer3 = new Renderer(circle)
renderer3.draw();