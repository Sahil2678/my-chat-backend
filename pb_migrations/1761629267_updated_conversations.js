/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_728114816")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "bool1691825659",
    "name": "isGroup",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text820519099",
    "max": 0,
    "min": 0,
    "name": "groupName",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "file190805862",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "groupIcon",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "relation1034946841",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "groupAdmin",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_728114816")

  // remove field
  collection.fields.removeById("bool1691825659")

  // remove field
  collection.fields.removeById("text820519099")

  // remove field
  collection.fields.removeById("file190805862")

  // remove field
  collection.fields.removeById("relation1034946841")

  return app.save(collection)
})
