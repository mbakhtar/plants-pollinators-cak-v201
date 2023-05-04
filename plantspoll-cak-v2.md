# Plants & Pollinators v2.0

```package
jacdac=github:microsoft/pxt-jacdac
jacdac-button=github:microsoft/pxt-jacdac/button
```
## Step 1 @showhint
Create a variable. Go to ``||Variables:Variables||`` click on Make a Variable. 
Name the Variable ``||Variables:bugVisits||``

## Step 2 @showhint
Now under ``||Variables:Variables||`` drawer ``||Variables:bugVisits||`` exists 
and three additional blocks are available.

## Step 3 @showhint
Add ``||basic:showNumber||`` under ``||basic:on start||`` block
```blocks
basic.showNumber()
```
## Step 4 @showhint
Add ``||Variables:set bugVisits to 1||`` to ``||basic:on start||`` block
```blocks
let bugVisits = 1
basic.showNumber()
```
## Step 5 @showhint
Add ``||logic:if true||`` conditional block under the ``||basic:forever||`` loop
```blocks
let bugVisits = 1
basic.showNumber()
basic.forever(function ()
{ if (true)}

```
## Step 6 @showhint
Now add ``||Variables:change bugVisits by 1||`` everytime
``||modules:button4 or Touch Sensor||`` is activated
```blocks
let bugvisits = 1
basic.showNumber(bugvisits)
basic.forever(function () {
    if (modules.button4.pressed()) {
        bugvisits += 1
        basic.showNumber(bugvisits)
    }
})
```