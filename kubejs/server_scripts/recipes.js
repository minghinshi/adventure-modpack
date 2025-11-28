ServerEvents.recipes(event => {
    event.remove({ 'output': 'minecraft:ender_eye' })
    event.custom({
        "type": "apothic_enchanting:infusion",
        "input": {
            "item": "apotheosis:mythic_material"
        },
        "requirements": {
            "eterna": 80
        },
        "result": {
            "id": "minecraft:ender_eye",
            "count": 16
        }
    })

    // Map to Ancient City
    event.custom({
        "type": "apothic_enchanting:infusion",
        "input": {
            "item": "irons_spellbooks:magic_cloth"
        },
        "requirements": {
            "eterna": 70
        },
        "result": {
            "id": "irons_spellbooks:furled_map_ancient",
            "components": {
                "irons_spellbooks:furled_map_data": {
                    "descriptionOverride": {
                        "translate": "Ancient City",
                    },
                    "destination": "minecraft:ancient_city",
                    "dimension": "minecraft:overworld"
                },
                "lore": [
                    '{"color": "gold", "translate": "item.irons_spellbooks.furled_map_descriptor_framing", "with": [{"translate": "Ancient City"}]}'
                ]
            }
        }
    })

    // Map to End City
    event.custom({
        "type": "apothic_enchanting:infusion",
        "input": {
            "item": "irons_spellbooks:magic_cloth"
        },
        "requirements": {
            "eterna": 90
        },
        "result": {
            "id": "irons_spellbooks:furled_map_ancient",
            "components": {
                "irons_spellbooks:furled_map_data": {
                    "descriptionOverride": {
                        "translate": "End City",
                    },
                    "destination": "minecraft:end_city",
                    "dimension": "minecraft:the_end"
                },
                "lore": [
                    '{"color": "gold", "translate": "item.irons_spellbooks.furled_map_descriptor_framing", "with": [{"translate": "End City"}]}'
                ]
            }
        }
    })
})