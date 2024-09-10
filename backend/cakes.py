import json

with open("./cakes.json", "r") as fp:
    cakes = json.load(fp)

id = 0

for cake in cakes:
    id += 1
    cake["id"] = id

with open("./cakes-id.json", "w") as fp:
    json.dump(cakes, fp, indent=4, sort_keys=True)