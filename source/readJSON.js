import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const data = JSON.parse(
    fs.readFileSync(
        path.join(__dirname, "tree_clean.json"),
        "utf8"
    )
);

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

function processSteps(obj, counter) {

    // --------------------------------------------------
    // PROCESS CONTENT
    // --------------------------------------------------

    if (typeof obj.content === "string") {

        // --------------------------------------------------
        // NORMALISE PDF LINE BREAKS
        // --------------------------------------------------

        let rawContent = obj.content;

        // "Health\nPool:" -> "Health Pool:"
        rawContent = rawContent.replace(
            /Health\s*\r?\n\s*Pool\s*:/gi,
            "Health Pool:"
        );

        // "Health Pool:\nd10 (6)" -> "Health Pool: d10 (6)"
        rawContent = rawContent.replace(
            /Health\s*Pool:\s*\r?\n\s*/gi,
            "Health Pool: "
        );


        // --------------------------------------------------
        // SPLIT CONTENT INTO LINES
        // --------------------------------------------------

        const lines = rawContent
            .split(/\r?\n/)
            .map(line => line.trim())
            .filter(Boolean);


        // --------------------------------------------------
        // GIVE FEATURE A GLOBAL INDEX
        // --------------------------------------------------

        counter.value++;

        obj.index = counter.value;

        //console.log(`Processing ${obj.index}`);


        // --------------------------------------------------
        // PREREQUISITE
        // --------------------------------------------------

        const prerequisiteIndex = lines.findIndex(
            line => line.toLowerCase().startsWith("prerequisite:")
        );

        let prerequisite = null;
        let prerequisiteLines = 0;

        if (prerequisiteIndex !== -1) {

            // Try to get prerequisite from the same line
            prerequisite = lines[prerequisiteIndex]
                .replace(/^prerequisite:\s*/i, "")
                .trim();

            prerequisiteLines = 1;


            // If nothing was after "Prerequisite:",
            // the value is on the next line
            if (!prerequisite && lines[prerequisiteIndex + 1]) {

                prerequisite = lines[prerequisiteIndex + 1]
                    .trim();

                prerequisiteLines = 2;

            }


            // Capitalise first letter
            if (prerequisite) {

                prerequisite =
                    prerequisite.charAt(0).toUpperCase() +
                    prerequisite.slice(1);

            }

        }

        obj.prerequisite = prerequisite;


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
                /^([a-zA-Z0-9]+)\s*\(?(\d+)\)?$/
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
        // CONTENT
        // --------------------------------------------------

        const contentParts = [];


        // First line / title
        if (lines.length > 0) {

            contentParts.push(lines[0]);

        }


        // Prerequisite
        if (prerequisite) {

            contentParts.push(
                `Prerequisite: ${prerequisite}`
            );

        }


        // Health Pool
        if (healthPoolIndex !== -1) {

            contentParts.push(
                lines[healthPoolIndex]
            );

        }


        // --------------------------------------------------
        // DESCRIPTION
        // --------------------------------------------------

        const descriptionStart = Math.max(

            1,

            prerequisiteIndex !== -1
                ? prerequisiteIndex + prerequisiteLines
                : 1,

            healthPoolIndex !== -1
                ? healthPoolIndex + 1
                : 1

        );

        const description = lines
            .slice(descriptionStart)
            .join(" ");


        if (description) {

            // Blank line between Health Pool
            // and description

            contentParts.push("");
            contentParts.push(description);

        }


        // --------------------------------------------------
        // SAVE CLEANED CONTENT
        // --------------------------------------------------

        obj.content = contentParts.join("\n");


        // --------------------------------------------------
        // TEXT
        // --------------------------------------------------

        obj.text = description;

    }


    // --------------------------------------------------
    // CHILDREN
    // --------------------------------------------------

    if (obj.children && typeof obj.children === "object") {

        Object.values(obj.children).forEach(child => {

            processSteps(child, counter);

        });

    }

}

// Process everything underneath "steps"
//processSteps(data.steps);

const counter = { value: 0 };

Object.values(data.steps.children).forEach(step => {

    Object.values(step.children).forEach(feature => {

        processSteps(feature, counter);

    });

});

// --------------------------------------------------
// EXAMPLE OUTPUT
// --------------------------------------------------

/*const features = data.steps.children["18th_step"].children;

for (const [name, feature] of Object.entries(features)) {
  console.log("\n" + name);
  console.log("  prerequisite:", feature.prerequisite);
  console.log("  health_pool:", feature.health_pool);
  console.log("  text:", feature.text);
}*/

export { data };