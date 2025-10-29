/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2605467279")

  // add field
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

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "bool3961289886",
    "name": "isForwarded",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2605467279")

  // remove field
  collection.fields.removeById("relation1853530023")

  // remove field
  collection.fields.removeById("bool3961289886")

  return app.save(collection)
})
