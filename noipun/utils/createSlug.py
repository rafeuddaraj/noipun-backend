import re

def create_slug(input_string):
    slug = input_string.lower()
    slug = re.sub(r'\s+', '-', slug)
    slug = re.sub(r'[^a-z0-9-]', '', slug)
    slug = re.sub(r'-{2,}', '-', slug)
    slug = slug.strip('-')

    return slug
