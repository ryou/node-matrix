"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vector2 {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    get magnitude() {
        return Math.sqrt((Math.pow(this.x, 2)) + (Math.pow(this.y, 2)));
    }
    add(other) {
        return new Vector2(this.x + other.x, this.y + other.y);
    }
    sub(other) {
        return new Vector2(this.x - other.x, this.y - other.y);
    }
    mulByScalar(scalar) {
        return new Vector2(this.x * scalar, this.y * scalar);
    }
    normalize() {
        return this.mulByScalar(1 / this.magnitude);
    }
}
exports.Vector2 = Vector2;
