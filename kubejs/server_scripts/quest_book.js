PlayerEvents.loggedIn(event => {
  const player = event.player;
  if (!player.stages.has("started")) {
    player.stages.add("started");
    player.give("ftbquests:book");
  }
});
