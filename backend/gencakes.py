import json

products = []
id = 1
for _ in range(20):
    cake_name = input("name of cake: ")
    cake_subtitle = input("subtitle: ")
    cake_desc = input("cake description: ")
    cake_url = input("image url: ")
    price = int(input("price: "))

    products.append({
        "name":cake_name,
        "brief_description":cake_subtitle,
        "description": cake_desc,
        "price": price,
        "image_url": cake_url,
        "id": id
    })

    id += 1

with open("./product.json", "w") as fp:
    json.dump(products, fp)