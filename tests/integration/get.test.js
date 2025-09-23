describe("GET /api/v1/status", () => {
  let response;
  let responseBody;

  beforeAll(async () => {
    response = await fetch("http://localhost:3000/api/v1/status");
    responseBody = await response.json();
  });

  describe("should return correct status code and structure", () => {
    it("should return correct status code", () => {
      expect(response.status).toBe(200);
    });

    it("should return the correct response body structure", () => {
      expect(responseBody).toMatchObject({
        updated_at: expect.any(String),
        dependencies: {
          database: {
            version: expect.any(String),
          },
        },
      });
    });
  });

  describe("should return json data properly", () => {
    test("should return updated_at properly", () => {
      expect(responseBody.updated_at).toBeDefined();

      const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
      expect(responseBody.updated_at).toEqual(parsedUpdatedAt);
    });

    test("should return database version properly", () => {
      expect(responseBody.dependencies.database.version).toEqual("16.10");
    });

    test("should return database max_connections properly", () => {
      expect(responseBody.dependencies.database.max_connections).toEqual("100");
    });
  });
});
