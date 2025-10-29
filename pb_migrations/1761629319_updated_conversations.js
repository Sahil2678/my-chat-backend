/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_728114816")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "bool1691825659",
    "name": "isGroup",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_728114816")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "bool1691825659",
    "name": "isGroup",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
})
