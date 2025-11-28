ServerEvents.recipes(event => {
    event.remove({
        "mod": "waystones",
        "not": [
            { "output": "waystones:waystone" },
            { "output": "waystones:warp_scroll" }
        ]
    })

    event.replaceInput(
        { "output": "waystones:waystone" },
        "waystones:warp_stone",
        "waystones:warp_dust"
    )

    event.replaceInput(
        { "output": "waystones:warp_scroll" },
        "minecraft:ender_pearl",
        "waystones:warp_dust"
    )
})