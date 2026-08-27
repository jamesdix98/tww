import json

with open("document.json", "r", encoding="utf-8") as f:
    data = json.load(f)

for i, section in enumerate(data["sections"]):
    if section["start_page"] < 200:
        print(
            f"{i:4} | "
            f"Level: {section['level']} | "
            f"Page: {section['start_page']:4} | "
            f"{section['title']}"
        )