input.onButtonPressed(Button.A, function () {
    I2C_LCD1602.ShowString("ABCDEFGHIJKLMNOP", 0, 1)
    I2C_LCD1602.ShowString("abcdefghijklmnop", 0, 0)
    radio.sendString("A")
})
input.onButtonPressed(Button.AB, function () {
    I2C_LCD1602.clear()
})
input.onButtonPressed(Button.B, function () {
    I2C_LCD1602.ShowString("12234567890", 0, 1)
    I2C_LCD1602.ShowString("!@#$%^&*()", 0, 0)
})
let arp2 = 0
let arp1 = 0
radio.setGroup(199)
I2C_LCD1602.LcdInit(63)
basic.showIcon(IconNames.Yes)
basic.pause(1000)
basic.clearScreen()
basic.forever(function () {
    basic.pause(500)
    I2C_LCD1602.clear()
    arp1 = pins.analogReadPin(AnalogPin.P1)
    arp2 = pins.analogReadPin(AnalogPin.P2)
    if (arp1 >= 340 && arp1 <= 370) {
        // FIRE
        led.plot(1, 1)
        I2C_LCD1602.ShowString("clear screan", 0, 1)
        radio.sendString("BOOM")
    } else if (arp1 >= 20 && arp1 <= 50) {
        // UP
        led.plot(1, 0)
        I2C_LCD1602.ShowString("gora", 0, 0)
        radio.sendString("U")
    } else if (arp1 >= 80 && arp1 <= 100) {
        // DOWN
        led.plot(1, 2)
        I2C_LCD1602.ShowString("dol", 0, 0)
        radio.sendString("D")
    } else if (arp1 >= 0 && arp1 <= 15) {
        // LEFT
        led.plot(0, 1)
        I2C_LCD1602.ShowString("lewo", 0, 0)
        radio.sendString("L")
    } else if (arp1 >= 150 && arp1 <= 185) {
        // RIGHT
        led.plot(2, 1)
        I2C_LCD1602.ShowString("prawo", 0, 0)
        radio.sendString("R")
    } else {
        // EMPTY
        led.unplot(1, 1)
        led.unplot(1, 0)
        led.unplot(1, 2)
        led.unplot(0, 1)
        led.unplot(2, 1)
    }
    if (arp2 >= 340 && arp2 <= 370) {
        // FIRE
        led.plot(3, 3)
        I2C_LCD1602.ShowString("clear screan", 0, 1)
        radio.sendString("BOOM2")
    } else if (arp2 >= 20 && arp2 <= 50) {
        // UP
        led.plot(3, 2)
        I2C_LCD1602.ShowString("przod", 0, 0)
        radio.sendString("1")
    } else if (arp2 >= 80 && arp2 <= 100) {
        // DOWN
        led.plot(3, 4)
        I2C_LCD1602.ShowString("tyl", 0, 0)
        radio.sendString("3")
    } else if (arp2 >= 0 && arp2 <= 15) {
        // LEFT
        led.plot(2, 3)
        I2C_LCD1602.ShowString("szczeka-zamknij", 0, 0)
        radio.sendString("2")
    } else if (arp2 >= 150 && arp2 <= 185) {
        // RIGHT
        led.plot(4, 3)
        I2C_LCD1602.ShowString("szczekaOtworz", 0, 0)
        radio.sendString("4")
    } else {
        // EMPTY
        led.unplot(3, 3)
        led.unplot(3, 2)
        led.unplot(3, 4)
        led.unplot(2, 3)
        led.unplot(4, 3)
    }
})
