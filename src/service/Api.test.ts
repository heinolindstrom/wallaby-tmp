import ApiReader from "./Api";
describe("ApiReader", () => {
  it("get 200 from api", async () => {
    const response = await ApiReader.checkConnection();
    expect(response.status).toBe(200);
  });
});
