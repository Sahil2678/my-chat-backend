/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2605467279")

  // update collection data
  unmarshal({
    "listRule": "conversation.participants.id ?~ @request.auth.id",
    "viewRule": "conversation.participants.id ?~ @request.auth.id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2605467279")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.id != \"\" && @collection.conversations.participants.id ?~ @request.auth.id && conversation = @collection.conversations.id",
    "viewRule": "@request.auth.id != \"\" && @collection.conversations.participants.id ?~ @request.auth.id && conversation = @collection.conversations.id"
  }, collection)

  return app.save(collection)
})
