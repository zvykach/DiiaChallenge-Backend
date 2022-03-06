export function getUnix(time: number = Date.now()) {
    return Math.floor( time / 1000);
}