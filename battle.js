AFRAME.registerComponent("battlemode",{
    init:function(){
        this.activateBattle()

    },
    activateBattle:function(){
        var enemy = document.querySelectorAll(".monster")
        var player = document.querySelector("#sword")
        var camera = document.querySelector("#camera")

        enemy.addEventListener("collide",function(e){
            if(e.detail.body.el.id === "sword"){
                console.log("Yay it worked")
                //var confirmation = document.createElement("a-entity",)
                //confirmation.setAttribute()
            }
        })

    }
})