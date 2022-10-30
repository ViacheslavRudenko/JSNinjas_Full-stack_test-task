import reducer from "./reducer";

describe("product reducer", () => {
  it("should return default value", () => {
    expect(
      reducer(
        {
          isLoaded: false,
          error: null,
          data: [],
          quantity: null,
        },
        {}
      )
    ).toEqual({
      isLoaded: false,
      error: null,
      data: [],
      quantity: null,
    });
  });

  describe("CRUD action with superhero", () => {
    it("to GET_DATA_REQUEST action", () => {
      expect(
        reducer(
          {
            isLoaded: true,
            error: null,
            data: [],
            quantity: null,
          },
          {
            type: "GET_DATA_REQUEST",
            payload: true,
          }
        )
      ).toEqual({
        isLoaded: true,
        error: null,
        data: [],
        quantity: null,
      });
    });
    it("to GET_DATA_ERROR action", () => {
      expect(
        reducer(
          {
            isLoaded: false,
            error: { message: "Error on server" },
            data: [],
            quantity: null,
          },
          {
            type: "GET_DATA_ERROR",
            payload: { message: "Error on server" },
          }
        )
      ).toEqual({
        isLoaded: false,
        error: { message: "Error on server" },
        data: [],
        quantity: null,
      });
    });
    it("to GET_DATA_SUCCESS action", () => {
      expect(
        reducer(
          {
            isLoaded: true,
            error: null,
            data: [
              {
                _id: "635c179f6326e15c833b3e0f",
                nickname: "Supermagddd",
                images:
                  "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png",
              },
            ],
            quantity: 1,
          },
          {
            type: "GET_DATA_SUCCESS",
            payload: {
              data: [
                {
                  _id: "635c179f6326e15c833b3e0f",
                  nickname: "Supermagddd",
                  images:
                    "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png",
                },
              ],
              quantity: 1,
            },
          }
        )
      ).toEqual({
        isLoaded: true,
        error: null,
        data: [
          {
            _id: "635c179f6326e15c833b3e0f",
            nickname: "Supermagddd",
            images:
              "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png",
          },
        ],
        quantity: 1,
      });
    });
    it("to DELETE_DATA action", () => {
      expect(
        reducer(
          {
            isLoaded: true,
            error: null,
            data: [],
            quantity: null,
          },
          {
            type: "DELETE_DATA",
            payload: {
              _id: "635c179f6326e15c833b3e0f",
              nickname: "Supermagddd",
              images:
                "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png",
            },
          }
        )
      ).toEqual({
        isLoaded: true,
        error: null,
        data: [],
        quantity: null,
      });
    });

    it("to EDIT_DATA action", () => {
      expect(
        reducer(
          {
            isLoaded: true,
            error: null,
            data: [
              {
                nickname: "Supermagdd",
                real_name: "Clark Kent",
                origin_description:
                  "he was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction...",
                superpowers:
                  "solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight...",
                catch_phrase:
                  "“Look, up in the sky, it's a bird, it's a plane, it's Superman!”",
                images:
                  "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png",
              },
            ],
            quantity: 1,
          },
          {
            type: "EDIT_DATA",
            payload: {
              nickname: "Supermagdd",
              real_name: "Clark Kent",
              origin_description:
                "he was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction...",
              superpowers:
                "solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight...",
              catch_phrase:
                "“Look, up in the sky, it's a bird, it's a plane, it's Superman!”",
              images:
                "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png",
            },
          }
        )
      ).toEqual({
        isLoaded: true,
        error: null,
        data: [
          {
            nickname: "Supermagdd",
            real_name: "Clark Kent",
            origin_description:
              "he was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction...",
            superpowers:
              "solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight...",
            catch_phrase:
              "“Look, up in the sky, it's a bird, it's a plane, it's Superman!”",
            images:
              "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png",
          },
        ],
        quantity: 1,
      });
    });
  });
});
