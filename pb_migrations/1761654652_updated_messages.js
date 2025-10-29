/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2605467279")

  // update field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "bool1495699747",
    "name": "isSystemMessage",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2605467279")

  // update field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "bool1495699747",
    "name": "isSystemMessage",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
})
