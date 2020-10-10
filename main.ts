let arp2 = 0
let arp1 = 0
let item = 0
radio.setGroup(199)
I2C_LCD1602.LcdInit(63)
basic.showIcon(IconNames.Heart)
basic.pause(1000)
basic.clearScreen()
basic.forever(function () {
    // basic.showIcon(IconNames.Angry)
    item += 1
    I2C_LCD1602.ShowNumber(item, 0, 1)
    basic.pause(100)
    I2C_LCD1602.BacklightOn()
    // basic.showIcon(IconNames.Cow)
    basic.pause(100)
    I2C_LCD1602.clear()
    arp1 = pins.analogReadPin(AnalogPin.P1)
    arp2 = pins.analogReadPin(AnalogPin.P2)
    if (arp1 >= 340 && arp1 <= 370) {
        // FIRE
        led.plot(1, 1)
        I2C_LCD1602.ShowString("BOOM", 4, 1)
        radio.sendString("BOOM")
    } else if (arp1 >= 20 && arp1 <= 50) {
        // UP
        led.plot(1, 0)
        I2C_LCD1602.ShowString("gora", 1, 0)
        radio.sendString("U")
    } else if (arp1 >= 80 && arp1 <= 100) {
        // DOWN
        led.plot(1, 2)
        I2C_LCD1602.ShowString("dol", 1, 0)
        radio.sendString("D")
    } else if (arp1 >= 0 && arp1 <= 15) {
        // LEFT
        led.plot(0, 1)
        I2C_LCD1602.ShowString("lewo", 0, 0)
        radio.sendString("L")
    } else if (arp1 >= 150 && arp1 <= 185) {
        // RIGHT
        led.plot(2, 1)
        I2C_LCD1602.ShowString("prawo", 3, 0)
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
        I2C_LCD1602.ShowString("BOOM2", 4, 1)
        radio.sendString("BOOM2")
    } else if (arp2 >= 20 && arp2 <= 50) {
        // UP
        led.plot(3, 2)
        I2C_LCD1602.ShowString("przod", 1, 0)
        radio.sendString("1")
    } else if (arp2 >= 80 && arp2 <= 100) {
        // DOWN
        led.plot(3, 4)
        I2C_LCD1602.ShowString("tyl", 1, 0)
        radio.sendString("3")
    } else if (arp2 >= 0 && arp2 <= 15) {
        // LEFT
        led.plot(2, 3)
        I2C_LCD1602.ShowString("szczeka", 0, 0)
        radio.sendString("2")
    } else if (arp2 >= 150 && arp2 <= 185) {
        // RIGHT
        led.plot(4, 3)
        I2C_LCD1602.ShowString("szczeka", 3, 0)
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
