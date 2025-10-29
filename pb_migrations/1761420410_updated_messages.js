/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2605467279")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "file2036324795",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "attachment",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

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

  // update field
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

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "file2036324795",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "attachment",
    "presentable": false,
    "protected": false,
    "required": true,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

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
    "required": true,
    "system": false,
    "type": "relation"
  }))

  // update field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "bool3961289886",
    "name": "isForwarded",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
})
