input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString("" + (input.temperature()))
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    if (input.temperature() > 30) {
        basic.showString("Canicule")
    } else if (input.temperature() > 20) {
        if (input.lightLevel() > 30) {
            basic.showString("Journée ensoleillée")
        } else {
            basic.showString("Couvert")
        }
    } else if (input.temperature() < 0) {
        if (input.lightLevel() > 30) {
            basic.showString(" Journée froide avec risque de verglas")
        } else {
            basic.showString(" Nuit très froide")
        }
    } else {
        basic.showString("Comfortable")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("" + (input.lightLevel()))
})
basic.forever(function () {
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
})
