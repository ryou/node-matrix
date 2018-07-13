import { Matrix4x4 } from '../src';
import { Vector3 } from '../node_modules/vector';

const DELTA = 5;

describe('Matrix4', () => {
    test('Mul By Matrix4', () => {
        const matrix1 = new Matrix4x4(
             1,  2,  3,  4,
            11, 12, 13, 14,
            21, 22, 23, 24,
            31, 32, 33, 34
        );
        const matrix2 = new Matrix4x4(
            51, 52, 53, 54,
            61, 62, 63, 64,
            71, 72, 73, 74,
            81, 82, 83, 84
        );
        const actual = matrix1.mulByMatrix(matrix2);

        const expectMatrix = new Matrix4x4(
            3410, 3620, 3830, 4040,
            4050, 4300, 4550, 4800,
            4690, 4980, 5270, 5560,
            5330, 5660, 5990, 6320
        );

        expect(actual.values).toEqual(expectMatrix.values);
    });

    test('Translate Matrix4', () => {
        const matrix = new Matrix4x4(
            1,  2,  3,  4,
            11, 12, 13, 14,
            21, 22, 23, 24,
            31, 32, 33, 34
        );
        const actual = matrix.translate(1, 2, 3);

        const expectMatrix = new Matrix4x4(
             1,  2,  3,   4,
            11, 12, 13,  14,
            21, 22, 23,  24,
            86, 92, 98, 104
        );

        expect(actual.values).toEqual(expectMatrix.values);
    });

    test('Scale Matrix4', () => {
        const matrix = new Matrix4x4(
            1,  2,  3,  4,
            11, 12, 13, 14,
            21, 22, 23, 24,
            31, 32, 33, 34
        );
        const actual = matrix.scale(1, 2, 3);

        const expectMatrix = new Matrix4x4(
              1,  2,  3,  4,
             22, 24, 26, 28,
             63, 66, 69, 72,
             31, 32, 33, 34
        );

        expect(actual.values).toEqual(expectMatrix.values);
    });

    test('RotateX Matrix4', () => {
        const matrix = new Matrix4x4(
            1,  2,  3,  4,
            11, 12, 13, 14,
            21, 22, 23, 24,
            31, 32, 33, 34
        );
        const actual = matrix.rotateX(Math.PI);

        const expectMatrix = new Matrix4x4(
              1,   2,   3,   4,
            -11, -12, -13, -14,
            -21, -22, -23, -24,
             31,  32,  33,  34
        );

        expect(actual.values).toEqual(expectMatrix.values);
    });

    test('RotateY Matrix4', () => {
        const matrix = new Matrix4x4(
            1,  2,  3,  4,
            11, 12, 13, 14,
            21, 22, 23, 24,
            31, 32, 33, 34
        );
        const actual = matrix.rotateY(Math.PI);

        const expectMatrix = new Matrix4x4(
             -1,  -2,  -3,  -4,
             11,  12,  13,  14,
            -21, -22, -23, -24,
             31,  32,  33,  34
        );

        expect(actual.values).toEqual(expectMatrix.values);
    });

    test('RotateZ Matrix4', () => {
        const matrix = new Matrix4x4(
            1,  2,  3,  4,
            11, 12, 13, 14,
            21, 22, 23, 24,
            31, 32, 33, 34
        );
        const actual = matrix.rotateZ(Math.PI);

        const expectMatrix = new Matrix4x4(
             -1,  -2,  -3,  -4,
            -11, -12, -13, -14,
             21,  22,  23,  24,
             31,  32,  33,  34
        );

        expect(actual.values).toEqual(expectMatrix.values);
    });

    test('Inverse Matrix4', () => {
        const matrix = new Matrix4x4(
             1,  1,  1, -1,
             1,  1, -1,  1,
             1, -1,  1,  1,
            -1,  1,  1,  1
        );
        const actual = matrix.inverse();

        const expectMatrix = new Matrix4x4(
             0.25,  0.25,  0.25, -0.25,
             0.25,  0.25, -0.25,  0.25,
             0.25, -0.25,  0.25,  0.25,
            -0.25,  0.25,  0.25,  0.25
        );

        actual.values.forEach((value, index) => {
            expect(value).toBeCloseTo(expectMatrix.values[index], DELTA);
        });
    });

    test('LookAt Matrix4', () => {
        // TODO: この考え方のテストでは駄目だった
        /*
        const matrix = new Matrix4x4(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        );
        // 右手座標系だから、カメラの位置が(0, 0, 1)の際、translateの行列と同じになるはず
        const actual = Matrix4x4.lookAt(
            new Vector3(0, 0, 1),
            new Vector3(0, 0, 0),
            new Vector3(0, 1, 0)
        );

        // const expectMatrix = Matrix4x4.identity().translate(0, 0, -1);

        // actual.values.forEach((value, index) => {
        //     expect(value).toBeCloseTo(expectMatrix.values[index], DELTA);
        // });
        */

        const cameraPosition = new Vector3(0, 60, 90);
        const lookAtPosition = new Vector3(0, 0, 0);
        const upDirection    = new Vector3(0, 1, 0);
        const actual = Matrix4x4.lookAt(cameraPosition, lookAtPosition, upDirection);

        const expectMatrix = new Matrix4x4(
            1,0,0,0,
            0,0.8320503234863281,0.5547001957893372,0,
            0,-0.5547001957893372,0.8320503234863281,0,
            0,0,-108.16654205322266,1
        );

        actual.values.forEach((value, index) => {
            expect(value).toBeCloseTo(expectMatrix.values[index], DELTA);
        });
    });
});