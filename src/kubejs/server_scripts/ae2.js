const disabledItems = [
    "ae2:energy_cell",
    "ae2:dense_energy_cell",
    "ae2:energy_acceptor",
    "ae2:cable_energy_acceptor",
    "ae2:vibration_chamber",
    "ae2:crystal_resonance_generator"
]

ServerEvents.recipes(event => {
    function mapDisabledItem(item) {
        const obj = { "output": item }
        return obj
    }
    event.remove(disabledItems.map(mapDisabledItem))

    event.replaceInput(
        { "input": "ae2:energy_cell" },
        "ae2:energy_cell",
        "ae2:creative_energy_cell"
    )

    event.replaceInput(
        { "input": "ae2:dense_energy_cell" },
        "ae2:dense_energy_cell",
        "ae2:creative_energy_cell"
    )

    event.shaped(
        "ae2:creative_energy_cell",
        [
            "ABA",
            "BCB",
            "ABA"
        ],
        {
            A: "#ae2:all_certus_quartz",
            B: "#c:dusts/fluix",
            C: "ae2:quartz_glass"
        }
    )
})