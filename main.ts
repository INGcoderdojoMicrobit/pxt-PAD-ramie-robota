let item = 0
I2C_LCD1602.LcdInit(63)
basic.showIcon(IconNames.Heart)
basic.forever(() => {
basic.showIcon(IconNames.Angry)
    item += 1
    I2C_LCD1602.BacklightOff()
    I2C_LCD1602.ShowNumber(item, 0, 1)
    basic.pause(100)
    I2C_LCD1602.BacklightOn()
    basic.showIcon(IconNames.Cow)
    basic.pause(100)
    I2C_LCD1602.clear()
    I2C_LCD1602.ShowNumber(pins.analogReadPin(AnalogPin.P0),10, 1)
    I2C_LCD1602.ShowNumber(pins.analogReadPin(AnalogPin.P1),10, 0)

    music.playTone(Note.C, 10)
})