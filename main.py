arp2 = 0
arp1 = 0
item = 0
radio.set_group(199)
I2C_LCD1602.lcd_init(63)
basic.show_icon(IconNames.HEART)
basic.pause(1000)
basic.clear_screen()

def on_forever():
    global item, arp1, arp2
    # basic.showIcon(IconNames.Angry)
    item += 1
    I2C_LCD1602.show_number(item, 0, 1)
    basic.pause(100)
    I2C_LCD1602.backlight_on()
    # basic.showIcon(IconNames.Cow)
    basic.pause(100)
    I2C_LCD1602.clear()
    arp1 = pins.analog_read_pin(AnalogPin.P1)
    arp2 = pins.analog_read_pin(AnalogPin.P2)
    if arp1 >= 340 and arp1 <= 370:
        # FIRE
        led.plot(1, 1)
        I2C_LCD1602.show_string("BOOM", 4, 1)
        radio.send_string("BOOM")
    elif arp1 >= 20 and arp1 <= 50:
        # UP
        led.plot(1, 0)
        I2C_LCD1602.show_string("gora", 1, 0)
        radio.send_string("U")
    elif arp1 >= 80 and arp1 <= 100:
        # DOWN
        led.plot(1, 2)
        I2C_LCD1602.show_string("dol", 1, 0)
        radio.send_string("D")
    elif arp1 >= 0 and arp1 <= 15:
        # LEFT
        led.plot(0, 1)
        I2C_LCD1602.show_string("lewo", 0, 0)
        radio.send_string("L")
    elif arp1 >= 150 and arp1 <= 185:
        # RIGHT
        led.plot(2, 1)
        I2C_LCD1602.show_string("prawo", 3, 0)
        radio.send_string("R")
    else:
        # EMPTY
        led.unplot(1, 1)
        led.unplot(1, 0)
        led.unplot(1, 2)
        led.unplot(0, 1)
        led.unplot(2, 1)
    if arp2 >= 340 and arp2 <= 370:
        # FIRE
        led.plot(3, 3)
        I2C_LCD1602.show_string("BOOM2", 4, 1)
        radio.send_string("BOOM2")
    elif arp2 >= 20 and arp2 <= 50:
        # UP
        led.plot(3, 2)
        I2C_LCD1602.show_string("przod", 1, 0)
        radio.send_string("1")
    elif arp2 >= 80 and arp2 <= 100:
        # DOWN
        led.plot(3, 4)
        I2C_LCD1602.show_string("tyl", 1, 0)
        radio.send_string("3")
    elif arp2 >= 0 and arp2 <= 15:
        # LEFT
        led.plot(2, 3)
        I2C_LCD1602.show_string("szczeka", 0, 0)
        radio.send_string("2")
    elif arp2 >= 150 and arp2 <= 185:
        # RIGHT
        led.plot(4, 3)
        I2C_LCD1602.show_string("szczeka", 3, 0)
        radio.send_string("4")
    else:
        # EMPTY
        led.unplot(3, 3)
        led.unplot(3, 2)
        led.unplot(3, 4)
        led.unplot(2, 3)
        led.unplot(4, 3)
basic.forever(on_forever)
