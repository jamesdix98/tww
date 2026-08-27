import json
import re

with open("document.json", "r", encoding="utf-8") as f:
    data = json.load(f)

print(data.keys())

def clean_key(title):
    """
    Convert titles into JS-friendly keys.
    Example:
    'Chapter 3: Backgrounds' -> 'backgrounds'
    'Blacksmith' -> 'blacksmith'
    """
    title = title.lower()
    title = re.sub(r"chapter \d+:\s*", "", title)
    title = re.sub(r"[^a-z0-9 ]", "", title)
    title = title.strip()
    return title.replace(" ", "_")


root = {}

stack = [(0, root)]

for section in data["sections"]:
    level = section["level"]
    title_raw = section["title"]
    title = clean_key(section["title"])

    node = {
        "page": section["start_page"],
        "children": {},
        "content": section.get("text", "")
    }

    while stack and stack[-1][0] >= level:
        stack.pop()

    parent = stack[-1][1]

    parent[title] = node

    stack.append((level, node["children"]))


with open("tree.json", "w", encoding="utf-8") as f:
    json.dump(root, f, indent=2, ensure_ascii=False)

print("Created tree.json")