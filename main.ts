let bugVisits = 1
basic.showNumber(bugVisits)
basic.forever(function () {
    if (modules.button4.pressed()) {
        bugVisits += 1
        basic.showNumber(bugVisits)
    }
})
