"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Matrix2x2 {
    constructor(m11, m21, m12, m22) {
        this._values = new Float32Array([
            m11, m21,
            m12, m22
        ]);
    }
    static identity() {
        return new Matrix2x2(1.0, 0.0, 0.0, 1.0);
    }
    get values() {
        return this._values;
    }
    toString() {
        return this._values.toString();
    }
}
exports.Matrix2x2 = Matrix2x2;
class Matrix3x3 {
    constructor(m11, m21, m31, m12, m22, m32, m13, m23, m33) {
        this._values = new Float32Array([
            m11, m21, m31,
            m12, m22, m32,
            m13, m23, m33
        ]);
    }
    static identity() {
        return new Matrix3x3(1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0);
    }
    get values() {
        return this._values;
    }
    toString() {
        return this._values.toString();
    }
}
exports.Matrix3x3 = Matrix3x3;
class Matrix4x4 {
    constructor(m11, m21, m31, m41, m12, m22, m32, m42, m13, m23, m33, m43, m14, m24, m34, m44) {
        this._values = new Float32Array([
            m11, m21, m31, m41,
            m12, m22, m32, m42,
            m13, m23, m33, m43,
            m14, m24, m34, m44
        ]);
    }
    get values() {
        return this._values;
    }
    toString() {
        return this._values.toString();
    }
    /* 行列基本機能 */
    // 単位行列
    static identity() {
        return new Matrix4x4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);
    }
    // 逆行列
    inverse() {
        const a = this._values[0], b = this._values[4], c = this._values[8], d = this._values[12], e = this._values[1], f = this._values[5], g = this._values[9], h = this._values[13], i = this._values[2], j = this._values[6], k = this._values[10], l = this._values[14], m = this._values[3], n = this._values[7], o = this._values[11], p = this._values[15], q = a * f - b * e, r = a * g - c * e, s = a * h - d * e, t = b * g - c * f, u = b * h - d * f, v = c * h - d * g, w = i * n - j * m, x = i * o - k * m, y = i * p - l * m, z = j * o - k * n, A = j * p - l * n, B = k * p - l * o, ivd = 1 / (q * B - r * A + s * z + t * y - u * x + v * w);
        const r11 = (f * B - g * A + h * z) * ivd;
        const r12 = (-b * B + c * A - d * z) * ivd;
        const r13 = (n * v - o * u + p * t) * ivd;
        const r14 = (-j * v + k * u - l * t) * ivd;
        const r21 = (-e * B + g * y - h * x) * ivd;
        const r22 = (a * B - c * y + d * x) * ivd;
        const r23 = (-m * v + o * s - p * r) * ivd;
        const r24 = (i * v - k * s + l * r) * ivd;
        const r31 = (e * A - f * y + h * w) * ivd;
        const r32 = (-a * A + b * y - d * w) * ivd;
        const r33 = (m * u - n * s + p * q) * ivd;
        const r34 = (-i * u + j * s - l * q) * ivd;
        const r41 = (-e * z + f * x - g * w) * ivd;
        const r42 = (a * z - b * x + c * w) * ivd;
        const r43 = (-m * t + n * r - o * q) * ivd;
        const r44 = (i * t - j * r + k * q) * ivd;
        return new Matrix4x4(r11, r21, r31, r41, r12, r22, r32, r42, r13, r23, r33, r43, r14, r24, r34, r44);
    }
    // 乗算
    mulByMatrix(other) {
        const m11 = this._values[0];
        const m12 = this._values[4];
        const m13 = this._values[8];
        const m14 = this._values[12];
        const m21 = this._values[1];
        const m22 = this._values[5];
        const m23 = this._values[9];
        const m24 = this._values[13];
        const m31 = this._values[2];
        const m32 = this._values[6];
        const m33 = this._values[10];
        const m34 = this._values[14];
        const m41 = this._values[3];
        const m42 = this._values[7];
        const m43 = this._values[11];
        const m44 = this._values[15];
        const o11 = other.values[0];
        const o12 = other.values[4];
        const o13 = other.values[8];
        const o14 = other.values[12];
        const o21 = other.values[1];
        const o22 = other.values[5];
        const o23 = other.values[9];
        const o24 = other.values[13];
        const o31 = other.values[2];
        const o32 = other.values[6];
        const o33 = other.values[10];
        const o34 = other.values[14];
        const o41 = other.values[3];
        const o42 = other.values[7];
        const o43 = other.values[11];
        const o44 = other.values[15];
        const r11 = (m11 * o11) + (m12 * o21) + (m13 * o31) + (m14 * o41);
        const r12 = (m11 * o12) + (m12 * o22) + (m13 * o32) + (m14 * o42);
        const r13 = (m11 * o13) + (m12 * o23) + (m13 * o33) + (m14 * o43);
        const r14 = (m11 * o14) + (m12 * o24) + (m13 * o34) + (m14 * o44);
        const r21 = (m21 * o11) + (m22 * o21) + (m23 * o31) + (m24 * o41);
        const r22 = (m21 * o12) + (m22 * o22) + (m23 * o32) + (m24 * o42);
        const r23 = (m21 * o13) + (m22 * o23) + (m23 * o33) + (m24 * o43);
        const r24 = (m21 * o14) + (m22 * o24) + (m23 * o34) + (m24 * o44);
        const r31 = (m31 * o11) + (m32 * o21) + (m33 * o31) + (m34 * o41);
        const r32 = (m31 * o12) + (m32 * o22) + (m33 * o32) + (m34 * o42);
        const r33 = (m31 * o13) + (m32 * o23) + (m33 * o33) + (m34 * o43);
        const r34 = (m31 * o14) + (m32 * o24) + (m33 * o34) + (m34 * o44);
        const r41 = (m41 * o11) + (m42 * o21) + (m43 * o31) + (m44 * o41);
        const r42 = (m41 * o12) + (m42 * o22) + (m43 * o32) + (m44 * o42);
        const r43 = (m41 * o13) + (m42 * o23) + (m43 * o33) + (m44 * o43);
        const r44 = (m41 * o14) + (m42 * o24) + (m43 * o34) + (m44 * o44);
        return new Matrix4x4(r11, r21, r31, r41, r12, r22, r32, r42, r13, r23, r33, r43, r14, r24, r34, r44);
    }
    static mul(a, b) {
        return a.mulByMatrix(b);
    }
    /* 変形機能 */
    // 移動
    static translation(tx, ty, tz) {
        return new Matrix4x4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, tx, ty, tz, 1.0);
    }
    translate(tx, ty, tz) {
        return this.mulByMatrix(Matrix4x4.translation(tx, ty, tz));
    }
    // 拡大
    static scaling(sx, sy, sz) {
        return new Matrix4x4(sx, 0, 0, 0, 0, sy, 0, 0, 0, 0, sz, 0, 0, 0, 0, 1);
    }
    scale(sx, sy, sz) {
        return this.mulByMatrix(Matrix4x4.scaling(sx, sy, sz));
    }
    // 回転
    static rotationX(radian) {
        const sin = Math.sin(radian);
        const cos = Math.cos(radian);
        return new Matrix4x4(1, 0, 0, 0, 0, cos, sin, 0, 0, -sin, cos, 0, 0, 0, 0, 1);
    }
    static rotationY(radian) {
        const sin = Math.sin(radian);
        const cos = Math.cos(radian);
        return new Matrix4x4(cos, 0, -sin, 0, 0, 1, 0, 0, sin, 0, cos, 0, 0, 0, 0, 1);
    }
    static rotationZ(radian) {
        const sin = Math.sin(radian);
        const cos = Math.cos(radian);
        return new Matrix4x4(cos, sin, 0, 0, -sin, cos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    rotateX(radian) {
        return this.mulByMatrix(Matrix4x4.rotationX(radian));
    }
    rotateY(radian) {
        return this.mulByMatrix(Matrix4x4.rotationY(radian));
    }
    rotateZ(radian) {
        return this.mulByMatrix(Matrix4x4.rotationZ(radian));
    }
    static lookAt(cameraPosition, lookAtPosition, cameraUp) {
        const zAxis = cameraPosition.sub(lookAtPosition).normalize();
        const xAxis = cameraUp.cross(zAxis).normalize();
        const yAxis = zAxis.cross(xAxis).normalize();
        return new Matrix4x4(xAxis.x, yAxis.x, zAxis.x, 0, xAxis.y, yAxis.y, zAxis.y, 0, xAxis.z, yAxis.z, zAxis.z, 0, -cameraPosition.dot(xAxis), -cameraPosition.dot(yAxis), -cameraPosition.dot(zAxis), 1.0);
    }
}
exports.Matrix4x4 = Matrix4x4;
