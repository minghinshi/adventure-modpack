const spawnerModifiers = [
  "minecraft:turtle_egg",
  "minecraft:piston",
  "minecraft:fermented_spider_eye",
  "#minecraft:wool",
  "minecraft:comparator",
  "minecraft:prismarine_crystals",
  "minecraft:chorus_fruit",
  "minecraft:sugar",
  "minecraft:ghast_tear",
  "minecraft:clock",
  "minecraft:pointed_dripstone",
  "minecraft:nether_star",
  "minecraft:soul_lantern",
  "minecraft:conduit",
  "minecraft:echo_shard",
  "minecraft:campfire"
]

ServerEvents.tags('item', event => {
  spawnerModifiers.forEach(element => {
    event.add('kubejs:spawner_modifiers', element)
  });
})