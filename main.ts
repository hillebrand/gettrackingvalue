radio.onReceivedValue(function (answer, value) {
    if (answer == "stoplicht groen") {
        basic.showNumber(value)
    }
})
radio.setGroup(1)
basic.forever(function () {
    for (let index = 0; index < 1; index++) {
        radio.sendString("Is het groen?")
        radio.sendValue("stoplicht groen", pins.digitalReadPin(DigitalPin.P0))
    }
})
