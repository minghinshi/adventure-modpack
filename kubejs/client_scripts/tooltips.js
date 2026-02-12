ItemEvents.modifyTooltips((event) => {
  // Shorthand for gray text
  function t(string) {
    return Text.of(string).gray()
  }

  // Shorthand for key bind text
  function key(string) {
    return Text.of(string).aqua()
  }

  event.add("minecraft:chest", [
    "",
    t("When opened:"),
    key("Shift + click").append(t(" to move stack")),
    key("Ctrl + click").append(t(" to move 1")),
    key("Shift + Ctrl + click").append(t(" to move all")),
    key("Shift + drag").append(t(" to move stacks")),
    key("Middle-click").append(t(" to sort")),
    t("(Also works in most inventories)")
  ])

  event.add("ftbquests:book", [
    t("Or bind and use the \"Open Quests\" key"),
    t("Keep playing to reveal quests")
  ])

  event.add("minecraft:torch", [
    "",
    t("When held:"),
    Text.of("Orange").gold().append(t(" = Mobs can spawn at night")),
    Text.of("Red").red().append(t(" = Mobs can spawn anytime")),
    t("Press ").append(key("F7")).append(t(" to configure, ")).append(key("F8")).append(t(" to toggle"))
  ])

  event.add(/irons_spellbooks:.*_spell_book/, [
    "",
    t("When equipped:"),
    t("Hold ").append(key("R")).append(t(" and hover to choose spell")),
    t("Or hold ").append(key("Left Alt")).append(t(" and scroll")),
    t("Or bind and use \"Quick Cast\" keys")
  ])
});
