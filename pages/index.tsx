import Link from 'next/link';

const Home = () => {
  const materias = [
    { nome: 'Biologia', id: 'biologia' },
    { nome: 'Matemática', id: 'matematica' },
    { nome: 'Português', id: 'portugues' },
    { nome: 'Redação', id: 'redacao' },
    { nome: 'Física', id: 'fisica' },
    { nome: 'Química', id: 'quimica' },
    { nome: 'Geografia', id: 'geografia' },
    { nome: 'História', id: 'historia' },
    { nome: 'Filosofia', id: 'filosofia' },
    { nome: 'Sociologia', id: 'sociologia' },
    { nome: 'Artes', id: 'artes' }
  ];

  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light p-5">
      <h1 className="mb-4 text-primary">Boletim de Notas</h1>
      <div className="card shadow-lg w-100 w-md-50" style={{ maxWidth: '600px' }}>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            {materias.map((materia, index) => (
              <li key={index} className="list-group-item text-center">
                <Link href={`/tabela/${materia.id}`} className="text-decoration-none text-success fw-bold">
                  {materia.nome}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
