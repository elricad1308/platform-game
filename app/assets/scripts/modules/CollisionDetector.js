class CollisionDetector {

    constructor() {

    }

    detectCollision(a, b) {
        var hit = false;

        // Horizontal collisions
        if(b.getX() + b.getWidth() >= a.getX() && b.getX() < a.getX() + a.getWidth()) {
            // Vertical collisions
            if(b.getY() + b.getHeight() >= a.getY() && b.getY() < a.getY() + a.getHeight()) {
                hit = true;
            }
        }

        // A gets inside B horizontally
        if(b.getX() <= a.getX() && b.getX() + b.getWidth() >= a.getX() + a.getWidth()) {
            // A is completely inside B
            if(b.getY() <= a.getY() && b.getY() + b.getHeight() >= a.getY() + a.getHeight()) {
                hit = true;
            }
        }

        // B collides with A
        if(a.getX() <= b.getX() && a.getX() + a.getWidth() >= b.getX() + b.getWidth()) {
            if(a.getY() <= b.getY() && a.getY() + a.getHeight() >= b.getY() + b.getHeight()) {
                hit = true;
            }
        }

        return hit;
    }
}

export default CollisionDetector;
