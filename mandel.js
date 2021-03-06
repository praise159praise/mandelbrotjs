let colorSel =  document.querySelector('#color')
let redCol, blueCol, greenCol = 0

function setup() {
    createCanvas(300, 300);
    pixelDensity(1)
}

colorSel.addEventListener('click', ()=>{
    redCol = floor(random(100))
    blueCol = floor(random(100))
    greenCol = floor(random(100))
})


function draw() {
    let minVal = parseFloat(document.querySelector('#minRange').value)
    let maxVal = parseFloat(document.querySelector('#maxRange').value)

    loadPixels()

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            var a = map(x, 0, width,minVal, maxVal)
            var b = map(y, 0, height, minVal, maxVal)

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
            pixels[pix + 0] = bright + redCol
            pixels[pix + 1] = bright+ blueCol
            pixels[pix + 2] = bright+greenCol
            pixels[pix + 3] = 255
        }
    }
    updatePixels()
}