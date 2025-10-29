/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3237654691")

  // remove field
  collection.fields.removeById("json164390390")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "date164390390",
    "max": "",
    "min": "",
    "name": "scheduled_at",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3237654691")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "json164390390",
    "maxSize": 0,
    "name": "scheduled_at",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // remove field
  collection.fields.removeById("date164390390")

  return app.save(collection)
})
