/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_728114816")

  // update collection data
  unmarshal({
    "deleteRule": "participants.id ?~ @request.auth.id",
    "listRule": "participants.id ?~ @request.auth.id",
    "updateRule": "participants.id ?~ @request.auth.id",
    "viewRule": "participants.id ?~ @request.auth.id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_728114816")

  // update collection data
  unmarshal({
    "deleteRule": null,
    "listRule": "@request.auth.id != \"\"",
    "updateRule": "@request.auth.id != \"\"",
    "viewRule": "@request.auth.id != \"\""
  }, collection)

  return app.save(collection)
})
