/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2605467279")

  // update field
  collection.fields.addAt(9, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1631761922",
    "max": 1500000,
    "min": 0,
    "name": "codeLanguage",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2605467279")

  // update field
  collection.fields.addAt(9, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1631761922",
    "max": 100000000,
    "min": 0,
    "name": "codeLanguage",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
})
