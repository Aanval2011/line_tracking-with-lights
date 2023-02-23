let B = 0
let G = 0
let R = 0
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 5)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 5)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 20)
    }
})
basic.forever(function () {
    R = 0
    G = 0
    B = 0
    for (let index = 0; index < 255; index++) {
        R = 1
        B = -1
        strip.showColor(neopixel.rgb(R, G, B))
        basic.pause(100)
    }
    for (let index = 0; index < 255; index++) {
        G = 1
        R = -1
        strip.showColor(neopixel.rgb(R, G, B))
        basic.pause(100)
    }
    for (let index = 0; index < 255; index++) {
        B = 1
        G = -1
        strip.showColor(neopixel.rgb(R, G, B))
        basic.pause(100)
    }
})
