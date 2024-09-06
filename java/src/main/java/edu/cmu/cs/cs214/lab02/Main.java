package edu.cmu.cs.cs214.lab02;

import edu.cmu.cs.cs214.lab02.shapes.Rectangle;
import edu.cmu.cs.cs214.lab02.shapes.Square;
import edu.cmu.cs.cs214.lab02.shapes.Circle;

public class Main {
    public static void main(String[] args) {
        Rectangle rectangle = new Rectangle(2, 3);
        Renderer renderer = new Renderer(rectangle);
        renderer.draw();

        Square square = new Square(4);
        renderer = new Renderer(square);
        renderer.draw();

        Circle circle = new Circle(5);
        renderer = new Renderer(circle);
        renderer.draw();
    }
}
