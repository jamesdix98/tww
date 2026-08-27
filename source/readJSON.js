const data = require("./tree_clean.json");

const exclude = new Set([
  "magic_items",
  "creatures",
  "spellcasting",
  "heirlooms"
]);

function printTree(obj, indent = "") {
  for (const [key, value] of Object.entries(obj)) {
    if (exclude.has(key)) {
      continue;
    }

    console.log(indent + key);

    if (value && typeof value === "object") {
      const children = value.children;

      if (children && typeof children === "object") {
        printTree(children, indent + "  ");
      }
    }
  }
}

function processSteps(obj) {
  // Only process objects that have content
  if (typeof obj.content === "string") {
    // Split the content into lines and clean whitespace
    const lines = obj.content
      .split(/\r?\n/)
      .map(line => line.trim())
      .filter(Boolean);

    // --------------------------------------------------
    // PREREQUISITE
    // --------------------------------------------------

    const prerequisiteIndex = lines.findIndex(
      line => line.toLowerCase() === "prerequisite:"
    );

    obj.prerequisite =
      prerequisiteIndex !== -1
        ? lines[prerequisiteIndex + 1]
        : null;

    // --------------------------------------------------
    // HEALTH POOL
    // --------------------------------------------------

    const healthPoolIndex = lines.findIndex(
      line => line.toLowerCase().startsWith("health pool:")
    );

    if (healthPoolIndex !== -1) {
      const healthPoolText = lines[healthPoolIndex]
        .replace(/^health pool:\s*/i, "")
        .trim();

      const match = healthPoolText.match(
        /^([a-zA-Z0-9]+)\s*\((\d+)\)$/
      );

      obj.health_pool = match
        ? {
            dice: match[1],
            average: Number(match[2])
          }
        : null;
    } else {
      obj.health_pool = null;
    }

    // --------------------------------------------------
    // TEXT
    // --------------------------------------------------

    // Make a copy so we don't modify the original content
    const textLines = [...lines];

    // Remove:
    // Prerequisite:
    // supernatural
    if (prerequisiteIndex !== -1) {
      textLines.splice(prerequisiteIndex, 2);
    }

    // Find and remove:
    // Health Pool: d8 (5)
    const healthPoolTextIndex = textLines.findIndex(
      line => line.toLowerCase().startsWith("health pool:")
    );

    if (healthPoolTextIndex !== -1) {
      textLines.splice(healthPoolTextIndex, 1);
    }

    // Join all remaining lines into a single string.
    // Spaces allow the browser to wrap the text naturally.
    obj.text = textLines.join(" ");
  }

  // --------------------------------------------------
  // CHILDREN
  // --------------------------------------------------

  if (obj.children && typeof obj.children === "object") {
    Object.values(obj.children).forEach(processSteps);
  }
}

// Process everything underneath "steps"
processSteps(data.steps);

// --------------------------------------------------
// EXAMPLE OUTPUT
// --------------------------------------------------

const features = data.steps.children["18th_step"].children;

for (const [name, feature] of Object.entries(features)) {
  console.log("\n" + name);
  console.log("  prerequisite:", feature.prerequisite);
  console.log("  health_pool:", feature.health_pool);
  console.log("  text:", feature.text);
}