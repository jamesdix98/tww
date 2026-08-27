import fitz
import json


pdf_file = "Those_Who_Wander_Book_Accessible_PDF_with_errata (1).pdf"

doc = fitz.open(pdf_file)

toc = doc.get_toc()


def normalise(text):
    return (
        text.lower()
        .replace(" ", "")
        .replace("\n", "")
        .strip()
    )


# Extract text page-by-page
pages = {}

for page_num, page in enumerate(doc, start=1):
    pages[page_num] = page.get_text()


def extract_section_from_page(page_text, title, next_title=None):
    """
    Extract content between headings on the same page
    """

    lines = page_text.splitlines()

    start = None
    end = len(lines)

    for i, line in enumerate(lines):

        if normalise(line) == normalise(title):
            start = i + 1
            break

    if start is None:
        return page_text.strip()

    if next_title:

        for i in range(start, len(lines)):
            if normalise(lines[i]) == normalise(next_title):
                end = i
                break

    content = lines[start:end]

    return "\n".join(content).strip()


# Build sections
sections = []


for index, (level, title, page) in enumerate(toc):

    next_title = None

    # Only use the next TOC item if it is on the same page
    if index + 1 < len(toc):
        next_level, next_title_candidate, next_page = toc[index + 1]

        if next_page == page:
            next_title = next_title_candidate


    text = extract_section_from_page(
        pages.get(page, ""),
        title,
        next_title
    )


    sections.append({
        "level": level,
        "title": title,
        "start_page": page,
        "text": text
    })


document = {
    "title": doc.metadata.get("title") or "Those Who Wander",
    "sections": sections
}


with open("document.json", "w", encoding="utf-8") as f:
    json.dump(
        document,
        f,
        indent=2,
        ensure_ascii=False
    )


print("Created document.json")