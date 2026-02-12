ServerEvents.recipes(event => {
    function upgradeBackpack(base, material, result) {
        event.remove({ 'output': result })
        event.custom({
            "type": "sophisticatedbackpacks:smithing_backpack_upgrade",
            "addition": {
                "item": material
            },
            "base": {
                "item": base
            },
            "result": {
                "count": 1,
                "id": result
            },
            "template": {
                "item": "minecraft:paper"
            }
        })
    }

    const backpacks = [
        'sophisticatedbackpacks:backpack',
        'sophisticatedbackpacks:copper_backpack',
        'sophisticatedbackpacks:iron_backpack',
        'sophisticatedbackpacks:gold_backpack',
        'sophisticatedbackpacks:diamond_backpack',
        'sophisticatedbackpacks:netherite_backpack'
    ]

    const materials = [
        "apotheosis:common_material",
        "apotheosis:uncommon_material",
        "apotheosis:rare_material",
        "apotheosis:epic_material",
        "apotheosis:mythic_material"
    ]

    for (let i = 0; i < materials.length; i++) {
        upgradeBackpack(backpacks[i], materials[i], backpacks[i + 1])
    }
})