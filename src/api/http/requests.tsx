import { resquestBase } from "../server/axios";

// ------------------------------------------------------------------

export async function getPopular() {
  try {
    const { data } = await resquestBase.get<any>(
      "3/movie/popular?language=en-US&page=1"
    );
    console.log("DEU CERTO");
    return data;
  } catch (error) {
    console.log("ERRO AQUI", error);
  }
}
