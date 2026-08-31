let data = null;

async function loadData() {

    if (data) {
        return data;
    }

    const response = await fetch(
        "./systems/tww/source/tree_clean.json"
    );

    if (!response.ok) {
        throw new Error(
            `Failed to load tree_clean.json: ${response.status} ${response.statusText}`
        );
    }

    data = await response.json();

    const counter = { value: 0 };

    if (!data.steps?.children) {
        throw new Error(
            "tree_clean.json does not contain data.steps.children"
        );
    }

    for (const step of Object.values(data.steps.children)) {

        if (!step.children) {
            continue;
        }

        for (const feature of Object.values(step.children)) {
            processSteps(feature, counter);
        }
    }

    return data;
}

function processSteps(obj, counter) {

    if (typeof obj.content === "string") {

        let rawContent = obj.content;

        // Normalise PDF line breaks
        rawContent = rawContent.replace(
            /Health\s*\r?\n\s*Pool\s*:/gi,
            "Health Pool:"
        );

        rawContent = rawContent.replace(
            /Health\s*Pool:\s*\r?\n\s*/gi,
            "Health Pool: "
        );

        const lines = rawContent
            .split(/\r?\n/)
            .map(line => line.trim())
            .filter(Boolean);

        // Give feature a global index
        counter.value++;
        obj.index = counter.value;

        // Prerequisite
        const prerequisiteIndex = lines.findIndex(
            line =>
                line
                    .toLowerCase()
                    .startsWith("prerequisite:")
        );

        let prerequisite = null;
        let prerequisiteLines = 0;

        if (prerequisiteIndex !== -1) {

            prerequisite = lines[prerequisiteIndex]
                .replace(/^prerequisite:\s*/i, "")
                .trim();

            prerequisiteLines = 1;

            if (
                !prerequisite &&
                lines[prerequisiteIndex + 1]
            ) {

                prerequisite =
                    lines[prerequisiteIndex + 1].trim();

                prerequisiteLines = 2;
            }

            if (prerequisite) {

                prerequisite =
                    prerequisite.charAt(0).toUpperCase() +
                    prerequisite.slice(1);
            }
        }

        obj.prerequisite = prerequisite;

        // Health Pool
        const healthPoolIndex = lines.findIndex(
            line =>
                line
                    .toLowerCase()
                    .startsWith("health pool:")
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

        // Content
        const contentParts = [];

        // Title
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

        // Description
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

            contentParts.push("");
            contentParts.push(description);
        }

        obj.content =
            contentParts.join("\n");

        obj.text = description;
    }

    // Children
    if (
        obj.children &&
        typeof obj.children === "object"
    ) {

        Object.values(obj.children).forEach(child => {

            processSteps(child, counter);
        });
    }
}

export { loadData };