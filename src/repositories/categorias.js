import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias?_embed=videos`;

function getAllWhithVideos() {
  return fetch(URL_CATEGORIES)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }
      throw new Error('Não foi possível pegar os dados :(');
    //   setCategorias([
    //     ...resposta,
    //   ]);
    });
}

export default {
  getAllWhithVideos,
};
