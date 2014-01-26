(function(app){
    var game = {
        "id":"0",
        "REGULAR_3":{
            "cards":[
                {
                    "rank":"FIVE",
                    "suit":"DIAMOND",
                    "cardState":"FACE_DOWN",
                    "color":"RED",
                    "black":false,
                    "red":true,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"JACK",
                    "suit":"DIAMOND",
                    "cardState":"FACE_DOWN",
                    "color":"RED",
                    "black":false,
                    "red":true,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"KING",
                    "suit":"SPADE",
                    "cardState":"FACE_UP",
                    "color":"BLACK",
                    "black":true,
                    "red":false,
                    "faceDown":false,
                    "faceUp":true
                }
            ],
            "gameSpotType":"REGULAR",
            "size":3,
            "topCard":{
                "rank":"KING",
                "suit":"SPADE",
                "cardState":"FACE_UP",
                "color":"BLACK",
                "black":true,
                "red":false,
                "faceDown":false,
                "faceUp":true
            }
        },
        "RESOLUTION_SPADE":{
            "cards":[

            ],
            "gameSpotType":"RESOLUTION",
            "size":0,
            "topCard":null
        },
        "REGULAR_6":{
            "cards":[
                {
                    "rank":"SIX",
                    "suit":"SPADE",
                    "cardState":"FACE_DOWN",
                    "color":"BLACK",
                    "black":true,
                    "red":false,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"QUEEN",
                    "suit":"HEART",
                    "cardState":"FACE_DOWN",
                    "color":"RED",
                    "black":false,
                    "red":true,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"SEVEN",
                    "suit":"SPADE",
                    "cardState":"FACE_DOWN",
                    "color":"BLACK",
                    "black":true,
                    "red":false,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"FOUR",
                    "suit":"SPADE",
                    "cardState":"FACE_DOWN",
                    "color":"BLACK",
                    "black":true,
                    "red":false,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"NINE",
                    "suit":"SPADE",
                    "cardState":"FACE_DOWN",
                    "color":"BLACK",
                    "black":true,
                    "red":false,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"SIX",
                    "suit":"DIAMOND",
                    "cardState":"FACE_UP",
                    "color":"RED",
                    "black":false,
                    "red":true,
                    "faceDown":false,
                    "faceUp":true
                }
            ],
            "gameSpotType":"REGULAR",
            "size":6,
            "topCard":{
                "rank":"SIX",
                "suit":"DIAMOND",
                "cardState":"FACE_UP",
                "color":"RED",
                "black":false,
                "red":true,
                "faceDown":false,
                "faceUp":true
            }
        },
        "RESOLUTION_DIAMONDS":{
            "cards":[

            ],
            "gameSpotType":"RESOLUTION",
            "size":0,
            "topCard":null
        },
        "RESOLUTION_HEARTS":{
            "cards":[

            ],
            "gameSpotType":"RESOLUTION",
            "size":0,
            "topCard":null
        },
        "REGULAR_7":{
            "cards":[
                {
                    "rank":"EIGHT",
                    "suit":"DIAMOND",
                    "cardState":"FACE_DOWN",
                    "color":"RED",
                    "black":false,
                    "red":true,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"QUEEN",
                    "suit":"CLUB",
                    "cardState":"FACE_DOWN",
                    "color":"BLACK",
                    "black":true,
                    "red":false,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"SIX",
                    "suit":"HEART",
                    "cardState":"FACE_DOWN",
                    "color":"RED",
                    "black":false,
                    "red":true,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"SEVEN",
                    "suit":"DIAMOND",
                    "cardState":"FACE_DOWN",
                    "color":"RED",
                    "black":false,
                    "red":true,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"ACE",
                    "suit":"DIAMOND",
                    "cardState":"FACE_DOWN",
                    "color":"RED",
                    "black":false,
                    "red":true,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"SIX",
                    "suit":"CLUB",
                    "cardState":"FACE_DOWN",
                    "color":"BLACK",
                    "black":true,
                    "red":false,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"TWO",
                    "suit":"CLUB",
                    "cardState":"FACE_UP",
                    "color":"BLACK",
                    "black":true,
                    "red":false,
                    "faceDown":false,
                    "faceUp":true
                }
            ],
            "gameSpotType":"REGULAR",
            "size":7,
            "topCard":{
                "rank":"TWO",
                "suit":"CLUB",
                "cardState":"FACE_UP",
                "color":"BLACK",
                "black":true,
                "red":false,
                "faceDown":false,
                "faceUp":true
            }
        },
        "REGULAR_4":{
            "cards":[
                {
                    "rank":"KING",
                    "suit":"CLUB",
                    "cardState":"FACE_DOWN",
                    "color":"BLACK",
                    "black":true,
                    "red":false,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"TEN",
                    "suit":"DIAMOND",
                    "cardState":"FACE_DOWN",
                    "color":"RED",
                    "black":false,
                    "red":true,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"JACK",
                    "suit":"HEART",
                    "cardState":"FACE_DOWN",
                    "color":"RED",
                    "black":false,
                    "red":true,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"TWO",
                    "suit":"HEART",
                    "cardState":"FACE_UP",
                    "color":"RED",
                    "black":false,
                    "red":true,
                    "faceDown":false,
                    "faceUp":true
                }
            ],
            "gameSpotType":"REGULAR",
            "size":4,
            "topCard":{
                "rank":"TWO",
                "suit":"HEART",
                "cardState":"FACE_UP",
                "color":"RED",
                "black":false,
                "red":true,
                "faceDown":false,
                "faceUp":true
            }
        },
        "REGULAR_2":{
            "cards":[
                {
                    "rank":"THREE",
                    "suit":"SPADE",
                    "cardState":"FACE_DOWN",
                    "color":"BLACK",
                    "black":true,
                    "red":false,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"JACK",
                    "suit":"CLUB",
                    "cardState":"FACE_UP",
                    "color":"BLACK",
                    "black":true,
                    "red":false,
                    "faceDown":false,
                    "faceUp":true
                }
            ],
            "gameSpotType":"REGULAR",
            "size":2,
            "topCard":{
                "rank":"JACK",
                "suit":"CLUB",
                "cardState":"FACE_UP",
                "color":"BLACK",
                "black":true,
                "red":false,
                "faceDown":false,
                "faceUp":true
            }
        },
        "REGULAR_5":{
            "cards":[
                {
                    "rank":"FIVE",
                    "suit":"CLUB",
                    "cardState":"FACE_DOWN",
                    "color":"BLACK",
                    "black":true,
                    "red":false,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"SEVEN",
                    "suit":"CLUB",
                    "cardState":"FACE_DOWN",
                    "color":"BLACK",
                    "black":true,
                    "red":false,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"FIVE",
                    "suit":"HEART",
                    "cardState":"FACE_DOWN",
                    "color":"RED",
                    "black":false,
                    "red":true,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"FOUR",
                    "suit":"CLUB",
                    "cardState":"FACE_DOWN",
                    "color":"BLACK",
                    "black":true,
                    "red":false,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"FOUR",
                    "suit":"HEART",
                    "cardState":"FACE_UP",
                    "color":"RED",
                    "black":false,
                    "red":true,
                    "faceDown":false,
                    "faceUp":true
                }
            ],
            "gameSpotType":"REGULAR",
            "size":5,
            "topCard":{
                "rank":"FOUR",
                "suit":"HEART",
                "cardState":"FACE_UP",
                "color":"RED",
                "black":false,
                "red":true,
                "faceDown":false,
                "faceUp":true
            }
        },
        "DISCARD":{
            "cards":[

            ],
            "gameSpotType":"DISCARD",
            "size":0,
            "topCard":null
        },
        "DRAW":{
            "cards":[
                {
                    "rank":"JACK",
                    "suit":"SPADE",
                    "cardState":"FACE_DOWN",
                    "color":"BLACK",
                    "black":true,
                    "red":false,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"FOUR",
                    "suit":"DIAMOND",
                    "cardState":"FACE_DOWN",
                    "color":"RED",
                    "black":false,
                    "red":true,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"NINE",
                    "suit":"DIAMOND",
                    "cardState":"FACE_DOWN",
                    "color":"RED",
                    "black":false,
                    "red":true,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"TWO",
                    "suit":"DIAMOND",
                    "cardState":"FACE_DOWN",
                    "color":"RED",
                    "black":false,
                    "red":true,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"THREE",
                    "suit":"HEART",
                    "cardState":"FACE_DOWN",
                    "color":"RED",
                    "black":false,
                    "red":true,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"THREE",
                    "suit":"DIAMOND",
                    "cardState":"FACE_DOWN",
                    "color":"RED",
                    "black":false,
                    "red":true,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"EIGHT",
                    "suit":"CLUB",
                    "cardState":"FACE_DOWN",
                    "color":"BLACK",
                    "black":true,
                    "red":false,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"TEN",
                    "suit":"HEART",
                    "cardState":"FACE_DOWN",
                    "color":"RED",
                    "black":false,
                    "red":true,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"EIGHT",
                    "suit":"HEART",
                    "cardState":"FACE_DOWN",
                    "color":"RED",
                    "black":false,
                    "red":true,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"EIGHT",
                    "suit":"SPADE",
                    "cardState":"FACE_DOWN",
                    "color":"BLACK",
                    "black":true,
                    "red":false,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"QUEEN",
                    "suit":"DIAMOND",
                    "cardState":"FACE_DOWN",
                    "color":"RED",
                    "black":false,
                    "red":true,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"THREE",
                    "suit":"CLUB",
                    "cardState":"FACE_DOWN",
                    "color":"BLACK",
                    "black":true,
                    "red":false,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"ACE",
                    "suit":"SPADE",
                    "cardState":"FACE_DOWN",
                    "color":"BLACK",
                    "black":true,
                    "red":false,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"KING",
                    "suit":"DIAMOND",
                    "cardState":"FACE_DOWN",
                    "color":"RED",
                    "black":false,
                    "red":true,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"TEN",
                    "suit":"SPADE",
                    "cardState":"FACE_DOWN",
                    "color":"BLACK",
                    "black":true,
                    "red":false,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"KING",
                    "suit":"HEART",
                    "cardState":"FACE_DOWN",
                    "color":"RED",
                    "black":false,
                    "red":true,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"ACE",
                    "suit":"HEART",
                    "cardState":"FACE_DOWN",
                    "color":"RED",
                    "black":false,
                    "red":true,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"NINE",
                    "suit":"CLUB",
                    "cardState":"FACE_DOWN",
                    "color":"BLACK",
                    "black":true,
                    "red":false,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"FIVE",
                    "suit":"SPADE",
                    "cardState":"FACE_DOWN",
                    "color":"BLACK",
                    "black":true,
                    "red":false,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"ACE",
                    "suit":"CLUB",
                    "cardState":"FACE_DOWN",
                    "color":"BLACK",
                    "black":true,
                    "red":false,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"TWO",
                    "suit":"SPADE",
                    "cardState":"FACE_DOWN",
                    "color":"BLACK",
                    "black":true,
                    "red":false,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"NINE",
                    "suit":"HEART",
                    "cardState":"FACE_DOWN",
                    "color":"RED",
                    "black":false,
                    "red":true,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"QUEEN",
                    "suit":"SPADE",
                    "cardState":"FACE_DOWN",
                    "color":"BLACK",
                    "black":true,
                    "red":false,
                    "faceDown":true,
                    "faceUp":false
                },
                {
                    "rank":"SEVEN",
                    "suit":"HEART",
                    "cardState":"FACE_DOWN",
                    "color":"RED",
                    "black":false,
                    "red":true,
                    "faceDown":true,
                    "faceUp":false
                }
            ],
            "gameSpotType":"DRAW",
            "size":24,
            "topCard":{
                "rank":"SEVEN",
                "suit":"HEART",
                "cardState":"FACE_DOWN",
                "color":"RED",
                "black":false,
                "red":true,
                "faceDown":true,
                "faceUp":false
            }
        },
        "RESOLUTION_CLUB":{
            "cards":[

            ],
            "gameSpotType":"RESOLUTION",
            "size":0,
            "topCard":null
        },
        "REGULAR_1":{
            "cards":[
                {
                    "rank":"TEN",
                    "suit":"CLUB",
                    "cardState":"FACE_UP",
                    "color":"BLACK",
                    "black":true,
                    "red":false,
                    "faceDown":false,
                    "faceUp":true
                }
            ],
            "gameSpotType":"REGULAR",
            "size":1,
            "topCard":{
                "rank":"TEN",
                "suit":"CLUB",
                "cardState":"FACE_UP",
                "color":"BLACK",
                "black":true,
                "red":false,
                "faceDown":false,
                "faceUp":true
            }
        }
    };

    var GameService = function(){
        var self = {};

        self.getGame = function(){
            return game;
        };

        return self;
    };

    app.GameService = GameService;
    app.factory('gameService', GameService);

})(solitaire)