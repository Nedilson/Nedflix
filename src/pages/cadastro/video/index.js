import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: 'Palestras',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de vídeo</h1>
      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaEscolhida = categorias.find((categoria) => (
          categoria.titulo === values.categoria
        ));

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id, // TEM QUE MUDAR!!!!
        })
          .then(() => {
            // eslint-disable-next-line no-console
            console.log('Cadastrou com sucesso!', categoriaEscolhida);
            history.push('/');
          });
      }}
      >
        <FormField
          label="Nome do vídeo "
          type="text"
          value={values.titulo}
          name="titulo"
          onChange={handleChange}
        />
        <FormField
          label="Url do vídeo "
          type="text"
          value={values.url}
          name="url"
          onChange={handleChange}
        />
        <FormField
          label="Categoria "
          type="text"
          value={values.categoria}
          name="categoria"
          onChange={handleChange}
          suggestions={categoryTitles}
        />
        <Button>
          Cadastrar
        </Button>
      </form>
      <Link to="/cadastro/categoria">
        Cadastrar categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
