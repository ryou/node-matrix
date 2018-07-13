export interface Matrix {
    readonly values: Float32Array;
    toString(): string;
}
export declare class Matrix2x2 implements Matrix {
    protected _values: Float32Array;
    constructor(m11: number, m21: number, m12: number, m22: number);
    static identity(): Matrix2x2;
    readonly values: Float32Array;
    toString(): string;
}
export declare class Matrix3x3 implements Matrix {
    protected _values: Float32Array;
    constructor(m11: number, m21: number, m31: number, m12: number, m22: number, m32: number, m13: number, m23: number, m33: number);
    static identity(): Matrix3x3;
    readonly values: Float32Array;
    toString(): string;
}
export declare class Matrix4x4 implements Matrix {
    protected _values: Float32Array;
    constructor(m11: number, m21: number, m31: number, m41: number, m12: number, m22: number, m32: number, m42: number, m13: number, m23: number, m33: number, m43: number, m14: number, m24: number, m34: number, m44: number);
    readonly values: Float32Array;
    toString(): string;
    static identity(): Matrix4x4;
    inverse(): Matrix4x4;
    mulByMatrix(other: Matrix4x4): Matrix4x4;
    static mul(a: Matrix4x4, b: Matrix4x4): Matrix4x4;
    static translation(tx: number, ty: number, tz: number): Matrix4x4;
    translate(tx: number, ty: number, tz: number): Matrix4x4;
    static scaling(sx: number, sy: number, sz: number): Matrix4x4;
    scale(sx: number, sy: number, sz: number): Matrix4x4;
    static rotationX(radian: number): Matrix4x4;
    static rotationY(radian: number): Matrix4x4;
    static rotationZ(radian: number): Matrix4x4;
    rotateX(radian: number): Matrix4x4;
    rotateY(radian: number): Matrix4x4;
    rotateZ(radian: number): Matrix4x4;
}
