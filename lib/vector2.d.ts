export declare class Vector2 {
    protected _x: number;
    protected _y: number;
    constructor(_x: number, _y: number);
    readonly x: number;
    readonly y: number;
    readonly magnitude: number;
    add(other: Vector2): Vector2;
    sub(other: Vector2): Vector2;
    mulByScalar(scalar: number): Vector2;
    normalize(): Vector2;
}
