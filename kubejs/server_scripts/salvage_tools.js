ServerEvents.recipes(event => {
    function salvageTools(toolSet) {
        function mapTool(tool) {
            const obj = { "item": tool }
            return obj
        }

        const mappedTools = toolSet.tools.map(mapTool)

        event.custom({
            "type": "apotheosis:salvaging",
            "input": mappedTools,
            "outputs": [
                {
                    "max_count": 1,
                    "min_count": 0,
                    "stack": {
                        "count": 1,
                        "id": toolSet.material
                    }
                }
            ]
        })
    }

    const toolSets = [
        {
            "tools": [
                "twilightforest:fiery_pickaxe",
                "twilightforest:fiery_sword"
            ],
            "material": "twilightforest:fiery_ingot"
        },
        {
            "tools": [
                "twilightforest:ironwood_axe",
                "twilightforest:ironwood_pickaxe",
                "twilightforest:ironwood_shovel",
                "twilightforest:ironwood_sword"
            ],
            "material": "twilightforest:ironwood_ingot"
        },
        {
            "tools": [
                "twilightforest:knightmetal_axe",
                "twilightforest:knightmetal_pickaxe",
                "twilightforest:knightmetal_sword"
            ],
            "material": "twilightforest:knightmetal_ingot"
        },
        {
            "tools": [
                "twilightforest:steeleaf_axe",
                "twilightforest:steeleaf_pickaxe",
                "twilightforest:steeleaf_shovel",
                "twilightforest:steeleaf_sword"
            ],
            "material": "twilightforest:steeleaf_ingot"
        },
    ]

    toolSets.forEach(salvageTools)
})