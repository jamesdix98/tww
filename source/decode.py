import json
import re


input_file = "document.json"
output_file = "document_cleaned.json"
tree_file = "tree.json"


# ============================================================
# NORMALISE TITLES
# ============================================================

def normalise(text):
    """
    Make titles comparable even when PDF extraction has
    different spaces/newlines.
    """

    return re.sub(r"\s+", "", text).lower()


# ============================================================
# CLEAN JSON SECTION TEXT
# ============================================================

def find_title(text, title):
    """
    Find a title inside text while ignoring whitespace.

    Returns the character position in the ORIGINAL text.
    """

    target = normalise(title)

    if not target:
        return -1

    normalised = []
    positions = []

    for i, char in enumerate(text):

        if char.isspace():
            continue

        normalised.append(char.lower())
        positions.append(i)

    normalised = "".join(normalised)

    position = normalised.find(target)

    if position == -1:
        return -1

    return positions[position]


def clean_section_text(text, next_title):
    """
    Remove everything from the next title onward.
    """

    if not text:
        return ""

    if not next_title:
        return text.strip()

    position = find_title(text, next_title)

    if position == -1:
        return text.strip()

    return text[:position].strip()


# ============================================================
# CONVERT TITLE TO JSON-FRIENDLY KEY
# ============================================================

def clean_key(title):
    """
    Convert titles into usable JSON keys.

    Examples:

        "Chapter 5: Steps" -> "steps"
        "1st Steps"        -> "1st_steps"
        "Preternatural"    -> "preternatural"
        "Scrappy"          -> "scrappy"
    """

    title = title.lower()

    # Remove "chapter X:"
    title = re.sub(
        r"chapter\s+\d+:\s*",
        "",
        title
    )

    # Keep letters, numbers and spaces
    title = re.sub(
        r"[^a-z0-9 ]",
        "",
        title
    )

    title = title.strip()

    return title.replace(" ", "_")


# ============================================================
# LOAD DOCUMENT
# ============================================================

with open(input_file, "r", encoding="utf-8") as f:
    document = json.load(f)


sections = document["sections"]


# ============================================================
# CLEAN SECTION CONTENT
# ============================================================

for i, section in enumerate(sections):

    if i + 1 < len(sections):
        next_title = sections[i + 1]["title"]
    else:
        next_title = None

    section["text"] = clean_section_text(
        section.get("text", ""),
        next_title
    )


# ============================================================
# SAVE CLEANED DOCUMENT
# ============================================================

with open(output_file, "w", encoding="utf-8") as f:

    json.dump(
        document,
        f,
        indent=2,
        ensure_ascii=False
    )


print(f"Created {output_file}")


# ============================================================
# BUILD TREE
# ============================================================

def clean_key(title):
    """
    Convert a title into a JSON-friendly key.

    Examples:
        "Chapter 5: Steps" -> "steps"
        "1st Steps"        -> "first_steps"
        "2nd Steps"        -> "second_steps"
        "Preternatural"    -> "preternatural"
        "Health Pool"      -> "health_pool"
    """

    title = title.lower().strip()

    # Remove chapter prefix
    title = re.sub(
        r"chapter\s+\d+:\s*",
        "",
        title
    )

    # Make numbered step headings nicer
    title = title.replace("1st", "first")
    title = title.replace("2nd", "second")
    title = title.replace("3rd", "third")
    title = title.replace("4th", "fourth")
    title = title.replace("5th", "fifth")

    # Remove punctuation
    title = re.sub(
        r"[^a-z0-9 ]",
        "",
        title
    )

    # Collapse whitespace
    title = re.sub(
        r"\s+",
        "_",
        title.strip()
    )

    return title


root = {}

stack = [
    (-1, root)
]


for section in sections:

    level = section["level"]
    title = section["title"]

    key = clean_key(title)

    # --------------------------------------------------------
    # Find the correct parent
    # --------------------------------------------------------

    while stack and stack[-1][0] >= level:
        stack.pop()

    parent = stack[-1][1]

    # --------------------------------------------------------
    # Create node
    # --------------------------------------------------------

    node = {
        "page": section["start_page"],
        "content": section.get("text", ""),
        "children": {}
    }

    parent[key] = node

    # --------------------------------------------------------
    # Add node to stack
    # --------------------------------------------------------

    stack.append(
        (level, node["children"])
    )


# ============================================================
# SAVE TREE
# ============================================================

with open(tree_file, "w", encoding="utf-8") as f:

    json.dump(
        root,
        f,
        indent=2,
        ensure_ascii=False
    )

print(f"Created {tree_file}")