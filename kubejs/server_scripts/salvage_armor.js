ServerEvents.recipes(event => {
    function salvageArmor(armorSet) {
        event.custom({
            "type": "apotheosis:salvaging",
            "input": [
                {
                    "item": armorSet.helmet
                },
                {
                    "item": armorSet.chestplate
                },
                {
                    "item": armorSet.leggings
                },
                {
                    "item": armorSet.boots
                }
            ],
            "outputs": [
                {
                    "max_count": 3,
                    "min_count": 1,
                    "stack": {
                        "count": 1,
                        "id": armorSet.material
                    }
                }
            ]
        })
    }

    const armorSets = [
        {
            "helmet": "twilightforest:ironwood_helmet",
            "chestplate": "twilightforest:ironwood_chestplate",
            "leggings": "twilightforest:ironwood_leggings",
            "boots": "twilightforest:ironwood_boots",
            "material": "twilightforest:ironwood_ingot"
        },
        {
            "helmet": "twilightforest:steeleaf_helmet",
            "chestplate": "twilightforest:steeleaf_chestplate",
            "leggings": "twilightforest:steeleaf_leggings",
            "boots": "twilightforest:steeleaf_boots",
            "material": "twilightforest:steeleaf_ingot"
        },
        {
            "helmet": "twilightforest:knightmetal_helmet",
            "chestplate": "twilightforest:knightmetal_chestplate",
            "leggings": "twilightforest:knightmetal_leggings",
            "boots": "twilightforest:knightmetal_boots",
            "material": "twilightforest:knightmetal_ingot"
        },
        {
            "helmet": "twilightforest:fiery_helmet",
            "chestplate": "twilightforest:fiery_chestplate",
            "leggings": "twilightforest:fiery_leggings",
            "boots": "twilightforest:fiery_boots",
            "material": "twilightforest:fiery_ingot"
        },
        {
            "helmet": "twilightforest:arctic_helmet",
            "chestplate": "twilightforest:arctic_chestplate",
            "leggings": "twilightforest:arctic_leggings",
            "boots": "twilightforest:arctic_boots",
            "material": "twilightforest:arctic_fur"
        },
        {
            "helmet": "twilightforest:yeti_helmet",
            "chestplate": "twilightforest:yeti_chestplate",
            "leggings": "twilightforest:yeti_leggings",
            "boots": "twilightforest:yeti_boots",
            "material": "twilightforest:alpha_yeti_fur"
        }
    ]

    armorSets.forEach(salvageArmor);
})