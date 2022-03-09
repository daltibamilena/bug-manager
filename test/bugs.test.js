const app = require("../app");
const supertest = require("supertest");
const request = supertest(app);

describe("Return bugs", () => {
  test("Return empty array", async () => {
    let response = await request.post("/bugs").send({
      bugs: [
        {
          titulo: "Bug Test",
          idade: 2,
          estimativa: 4,
          prioridade: "normal",
        },
      ],
    });
    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual({ bugs: [] });
  });

  test("Return bad request without send prioridade", async () => {
    let response = await request.post("/bugs").send({
      bugs: [
        {
          titulo: "Bug Test",
          idade: 2,
          estimativa: 4,
        },
      ],
    });
    expect(response.status).toBe(400);
  });

  test("Return bad request when send an invalid value as prioridade", async () => {
    let response = await request.post("/bugs").send({
      bugs: [
        {
          titulo: "Bug Test",
          idade: 2,
          estimativa: 4,
          prioridade: "crítico",
        },
      ],
    });
    expect(response.status).toBe(400);
  });

  test("Return bugs to resolve today", async () => {
    let response = await request.post("/bugs").send({
      bugs: [
        {
          titulo: "Bug Test",
          idade: 2,
          estimativa: 4,
          prioridade: "critico",
        },
        {
          titulo: "Bug Test 1",
          idade: 2,
          estimativa: 4,
          prioridade: "normal",
        },
        {
          titulo: "Bug Test 2",
          idade: 3,
          estimativa: 4,
          prioridade: "normal",
        },
      ],
    });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      bugs: [
        {
          titulo: "Bug Test",
          idade: 2,
          estimativa: 4,
          prioridade: "critico",
        },
        {
          titulo: "Bug Test 2",
          idade: 3,
          estimativa: 4,
          prioridade: "normal",
        },
      ],
    });
  });
});

describe("Return bugs distribuition", () => {
  test("Return bad request without send prioridade", async () => {
    let response = await request.post("/bugs_group").send({
      bugs: [
        {
          titulo: "Bug Test",
          idade: 2,
          estimativa: 4,
        },
      ],
    });
    expect(response.status).toBe(400);
  });

  test("Return bugs to assign", async () => {
    let response = await request.post("/bugs_group").send({
      bugs: [
        {
          titulo: "Bug Test",
          idade: 2,
          estimativa: 7,
          prioridade: "critico",
        },
        {
          titulo: "Bug Test 1",
          idade: 3,
          estimativa: 4,
          prioridade: "normal",
        },
        {
          titulo: "Bug Test 2",
          idade: 3,
          estimativa: 4,
          prioridade: "normal",
        },
      ],
    });

    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      [
        {
          titulo: "Bug Test",
          idade: 2,
          estimativa: 7,
          prioridade: "critico",
        },
      ],
      [
        {
          titulo: "Bug Test 1",
          idade: 3,
          estimativa: 4,
          prioridade: "normal",
        },
        {
          titulo: "Bug Test 2",
          idade: 3,
          estimativa: 4,
          prioridade: "normal",
        },
      ],
    ]);
  });
});
