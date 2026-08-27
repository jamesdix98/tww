Hooks.once("init", () => {
  console.log("Those Who Wander initializing");

  // Example: define custom actor types
  CONFIG.Actor.documentClass = Actor;
});