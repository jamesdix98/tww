import json

with open("tree.json", "r", encoding="utf-8") as f:
    tree = json.load(f)

count = 0
limit = 100

def print_tree(node, indent=0):
    global count

    for key, value in node.items():
        if count >= limit:
            return

        print("  " * indent + "- " + key)
        count += 1

        if value.get("children"):
            print_tree(value["children"], indent + 1)

print_tree(tree)

print(f"\nPrinted {count} items")