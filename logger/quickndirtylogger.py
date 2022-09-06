def on_log_full():
    global Logging
    Logging = False
    basic.show_string("STORAGE FULL")
datalogger.on_log_full(on_log_full)

def on_button_pressed_a():
    global Logging
    Logging = not (Logging)
    if True:
        basic.show_icon(IconNames.YES)
    else:
        basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global Logging
    basic.show_icon(IconNames.NO)
    datalogger.delete_log()
    Logging = False
    datalogger.set_column_titles("temperature")
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global Logging
    Logging = False
    basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)

Logging = False
Logging = False
datalogger.set_column_titles("temperature")

def on_every_interval():
    if Logging:
        datalogger.log(datalogger.create_cv("temperature", pins.analog_read_pin(AnalogPin.P0)))
loops.every_interval(500, on_every_interval)

def on_forever():
    pass
basic.forever(on_forever)
