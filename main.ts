let x = 0
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        x += 1
        led.plot(x, 0)
        led.unplot(x, 0)
    }
    for (let index = 0; index < 4; index++) {
        x = x - 1
        led.plot(x, 0)
        led.unplot(x, 0)
    }
})
