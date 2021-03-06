'use strict';

/* jasmine specs for controllers go here */

describe('The Solitaire Data Service', function(){

    var service, dataApi, gameResource;

    beforeEach(function(){
        gameResource = {};
        dataApi = new solitaire.DataAccessAPI(new solitaire.__());

        solitaire.testGame = solitaire.testJson.getJsonDataForFullTestGame();

        gameResource.createGame = function(id){
          return new dataApi.Table(solitaire.testGame);
        };

        var logger = {};
        logger.debug = function(text){};
        logger.info = function(text){console.log(text)};

        service = new solitaire.SolitaireDataService(gameResource, dataApi, logger);
    });


    it('should be able to provide access to the Data Access API', function() {
        var gameJson = solitaire.testGame;
        var gameBoard = service.createGame();
        expect(gameBoard).toBeDefined();
        expect(gameBoard.getDrawPile().getCards().length).toBe(24);
        expect(gameBoard.getPlayArea()[0].getCards().length).toBe(1);
        expect(gameBoard.getPlayArea()[0].getCards()[0].isFaceUp()).toBe(true);
        expect(gameBoard.getPlayArea()[1].getCards()[0].isFaceDown()).toBe(true);

        var lastPileCards = gameBoard.getPlayArea()[6].getCards();

        expect(lastPileCards.length).toBe(7);
        expect(lastPileCards[0].isFaceDown()).toBe(true);
        expect(lastPileCards[6].isFaceUp()).toBe(true);

        gameBoard.drawCard();

        expect(gameJson.DRAW.cards.length).toBe(23);
    });

});
