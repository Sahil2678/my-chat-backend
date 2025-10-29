/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1549310251")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\"",
    "deleteRule": "user = @request.auth.id",
    "listRule": ""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1549310251")

  // update collection data
  unmarshal({
    "createRule": null,
    "deleteRule": null,
    "listRule": null
  }, collection)

  return app.save(collection)
})
