describe("GET /api/v1/status", () => {
  let response;
  let responseBody;

  beforeAll(async () => {
    response = await fetch("http://localhost:3000/api/v1/status");
    responseBody = await response.json();
  });

  test("should return status 200", () => {
    expect(response.status).toBe(200);
  });

  test("should return updated_at properly", () => {
    // responseBody.updated_at = "2025-09-19T07:21:32.123Z"
    expect(responseBody.updated_at).toBeDefined();

    //cria um novo objeto Date a partir da string para validar strings aleatórias.
    const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
    expect(responseBody.updated_at).toEqual(parsedUpdatedAt);
  });
});
