function setup() {
    createCanvas(1000, 1000);
    pixelDensity(1)
}
let minVal = document.querySelector('#min')
let maxVal = document.querySelector('#max')
function draw() {
    loadPixels()
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            var a = map(x, 0, width,-2,2)
            var b = map(y, 0, height, -2,2)

            let ca = a
            let cb = b
            let n = 0
            while (n < 100) {
                var aa = a * a - b * b
                var bb = 2 * a * b
                a = aa + ca
                b = bb + cb
                if (abs(a + b) > 30) {
                    break;
                }
                n++
            }
            var bright = map(n, 0, 100, 0, 1)
            bright = map(sqrt(bright), 0, 1, 0, 255)
            if (n == 100) {
                bright = 0
            }

            

            var pix = (x + y * width) * 4
            pixels[pix + 0] = bright +n
            pixels[pix + 1] = bright+n
            pixels[pix + 2] = bright
            pixels[pix + 3] = 255
        }
    }
    updatePixels()
}