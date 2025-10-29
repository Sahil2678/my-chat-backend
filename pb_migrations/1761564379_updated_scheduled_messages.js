/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3237654691")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\"",
    "deleteRule": "@request.auth.id = sender",
    "listRule": "@request.auth.id = sender",
    "updateRule": "@request.auth.id = sender",
    "viewRule": "@request.auth.id = sender"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3237654691")

  // update collection data
  unmarshal({
    "createRule": null,
    "deleteRule": null,
    "listRule": null,
    "updateRule": null,
    "viewRule": null
  }, collection)

  return app.save(collection)
})
