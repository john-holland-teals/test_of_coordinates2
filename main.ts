controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    locatorSprite.setPosition(98, 36)
    locatorSprite.setVelocity(100, 0)
    pause(500)
    locatorSprite.setVelocity(0, 100)
    pause(500)
    locatorSprite.setVelocity(-100, 0)
    pause(500)
    locatorSprite.setVelocity(0, -100)
    pause(500)
    locatorSprite.setVelocity(0, 0)
    locatorSprite.sayText("going nowhere fast", 5000, true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    message = "hey- x = " + Math.round(locatorSprite.x) + ", y = " + Math.round(locatorSprite.y)
    if (locatorSprite.y < scene.screenHeight() / 2) {
        game.showLongText(message, DialogLayout.Bottom)
    } else {
        game.showLongText(message, DialogLayout.Top)
    }
})
let message = ""
let locatorSprite: Sprite = null
let mySprite = sprites.create(img`
    ...............ff.......
    .............ff2ffff....
    ............ff2feeeeff..
    ...........ff22feeeeeff.
    ...........feeeeffeeeef.
    ..........fe2222eefffff.
    ..........f2effff222efff
    ..........fffeeeffffffff
    ..........fee44fbe44efef
    ...........feddfb4d4eef.
    ..........c.eeddd4eeef..
    ....ccccccceddee2222f...
    .....dddddcedd44e444f...
    ......ccccc.eeeefffff...
    ..........c...ffffffff..
    ...............ff..fff..
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
mySprite.setPosition(29, 29)
locatorSprite = sprites.create(img`
    888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888
    8888888888888888888888ff888888888888888888888888
    88888888888888888888ff22ff8888888888888888888888
    888888888888888888fff2222fff88888888888888888888
    88888888888888888fff222222fff8888888888888888888
    88888888888888888fff222222fff8888888888888888888
    88888888888888888feeeeeeeeeeff888888888888888888
    8888888888888888ffe22222222eff888888888888888888
    8888888888888888fffffeeeefffff888888888888888888
    888888888888888fdfefbf44fbfeff888888888888888888
    888888888888888fbfe41fddf14ef8888888888888888888
    888888888888888fbffe4dddd4efe8888888888888888888
    888888888888888fcfef22222f4e88888888888888888888
    8888888888888888ff4f44554f4e88888888888888888888
    8888888888888888888ffffffdde88188888888888888888
    88888888888888888888ffffedde88888888888888888888
    888888888888888888888ccc.ee888888888888888888888
    88888888888888888888cc1cc88888888888888888888888
    888888888888888888888c1c888888888888888888888888
    888888888888888888888c1c888888888888888888888888
    888888888888888888888c1c888888888888888888888888
    888888888888888888888c1c888888888888888888888888
    888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888
    `, SpriteKind.Player)
controller.moveSprite(locatorSprite, 25, 25)
