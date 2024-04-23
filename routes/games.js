const gamesRouter = require("express").Router()
const { sendAllGames, sendUpdatedGames } = require("../controllers/games")
const {
    getAllGames,
    checkIsTitleInArray,
    updateGamesArray,
    updateGamesFile,
    findGameById,
    deleteGame
      } = require("../middlewares/games")

gamesRouter.get("/games", getAllGames, sendAllGames)
gamesRouter.delete(
    "/games/:id",
    getAllGames,
    findGameById,
    deleteGame,
    updateGamesFile,
    sendUpdatedGames
  )
  gamesRouter.post(
    "/games",
    getAllGames,
    checkIsTitleInArray,
    updateGamesArray,
    updateGamesFile,
    sendUpdatedGames
  )

module.exports = gamesRouter
