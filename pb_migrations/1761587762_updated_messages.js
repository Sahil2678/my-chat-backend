/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2605467279")

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "bool3888771427",
    "name": "isCodeSnippet",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1631761922",
    "max": 0,
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

  // remove field
  collection.fields.removeById("bool3888771427")

  // remove field
  collection.fields.removeById("text1631761922")

  return app.save(collection)
})
