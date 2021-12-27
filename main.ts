input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # # # .
        . # # # #
        . # # # #
        . # # # .
        . # . # .
        `)
    basic.pause(1000)
    basic.showString("sus")
})
function Projekt_fædselsdag () {
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
    basic.pause(5000)
    led.plot(2, 4)
    led.plot(2, 3)
    basic.pause(1000)
    led.unplot(2, 4)
    led.unplot(2, 3)
    led.plot(1, 3)
    led.plot(3, 3)
    led.plot(1, 2)
    led.plot(3, 2)
    led.plot(0, 2)
    led.plot(4, 2)
    led.plot(0, 1)
    led.plot(4, 1)
    basic.pause(5000)
    basic.clearScreen()
}
input.onButtonPressed(Button.A, function () {
    music.playMelody("G E G E G E G E ", 150)
})
input.onButtonPressed(Button.AB, function () {
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Projekt_fædselsdag()
})
