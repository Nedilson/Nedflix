import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';

function CadastroVideo() {
  const history = useHistory();
  const { handleChange, values } = useForm({
    titulo: 'Video padrão',
    url: 'https://www.youtube.com/watch?v=ukvGm4mYXaM',
    categoria: 'Front End',
  });

  return (
    <PageDefault>
      <h1>Cadastro de vídeo</h1>
      <form onSubmit={(event) => {
        event.preventDefault();

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: 1, // TEM QUE MUDAR!!!!
        })
          .then(() => {
            console.log('Cadastrou com sucesso!');
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
