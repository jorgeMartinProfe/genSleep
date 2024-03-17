servos.P0.setAngle(0)
basic.forever(function () {
    if (input.lightLevel() < 50) {
        servos.P0.setAngle(0)
        basic.showLeds(`
            # . . . #
            . # # # .
            . # # # .
            . # # # .
            # . . . #
            `)
    } else {
        servos.P0.setAngle(90)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
})
