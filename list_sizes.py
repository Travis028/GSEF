import os
import json

data = {}
for r, d, files in os.walk('.'):
    if any(x in r.split(os.sep) for x in ['.git', 'node_modules', 'venv', '__pycache__']):
        continue
    for f in files:
        filepath = os.path.join(r, f)
        try:
            size = os.path.getsize(filepath)
            data[filepath] = size
        except:
            pass

with open('files_size.json', 'w', encoding='utf-8') as outfile:
    json.dump(data, outfile, indent=2)
