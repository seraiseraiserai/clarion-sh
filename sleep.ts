export function sleep(n: number) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, n);
}