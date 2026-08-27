import json

with open("tree.json", "r", encoding="utf-8") as f:
    tree = json.load(f)

blacksmith = (
    tree["those_who_wander_bookaccessible_pdf"]
        ["children"]
        ["backgrounds"]
        ["children"]
        ["blacksmith"]
)

print(blacksmith["content"])

