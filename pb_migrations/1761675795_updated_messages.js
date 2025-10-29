/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2605467279")

  // update field
  collection.fields.addAt(7, new Field({
    "cascadeDelete": true,
    "collectionId": "pbc_2605467279",
    "hidden": false,
    "id": "relation1853530023",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "replyTo",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2605467279")

  // update field
  collection.fields.addAt(7, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2605467279",
    "hidden": false,
    "id": "relation1853530023",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "replyTo",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
