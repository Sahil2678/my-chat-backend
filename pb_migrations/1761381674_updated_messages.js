/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2605467279")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id = sender",
    "deleteRule": "@request.auth.id = sender",
    "listRule": "@request.auth.id != \"\" && @collection.conversations.participants.id ?~ @request.auth.id && conversation = @collection.conversations.id",
    "updateRule": "@request.auth.id != \"\"",
    "viewRule": "@request.auth.id != \"\" && @collection.conversations.participants.id ?~ @request.auth.id && conversation = @collection.conversations.id"
  }, collection)

  // add field
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

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2605467279")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\" && @request.auth.id = sender",
    "deleteRule": null,
    "listRule": "@request.auth.id != \"\"",
    "updateRule": null,
    "viewRule": "@request.auth.id != \"\""
  }, collection)

  // remove field
  collection.fields.removeById("file2036324795")

  return app.save(collection)
})
