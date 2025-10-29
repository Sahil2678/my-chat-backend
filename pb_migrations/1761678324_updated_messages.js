/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2605467279")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "file2036324795",
    "maxSelect": 1,
    "maxSize": 10737418240,
    "mimeTypes": [],
    "name": "attachment",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2605467279")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "file2036324795",
    "maxSelect": 1,
    "maxSize": 10000,
    "mimeTypes": [],
    "name": "attachment",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
})
