/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_728114816")

  // update collection data
  unmarshal({
    "updateRule": "(groupAdmin = @request.auth.id) ||\n  participants.id ?~ @request.auth.id \n"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_728114816")

  // update collection data
  unmarshal({
    "updateRule": "@request.auth.id != \"\""
  }, collection)

  return app.save(collection)
})
