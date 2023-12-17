import secrets
import string
import re

def generate_key(length=32):
    characters = string.ascii_letters + string.digits  # You can customize the character set
    random_key = ''.join(secrets.choice(characters) for _ in range(length))
    return random_key


def id_maker (str):
    match = re.search(r'id-([a-zA-Z0-9]+)', str)
    if match:
        id_value = match.group(1)
        return int(id_value)
    else:
        return False