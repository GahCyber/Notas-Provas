import React from 'react';
import Link from 'next/link';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const data = {
  labels: ['Matéria 1', 'Matéria 2', 'Matéria 3', 'Matéria 4'],
  datasets: [
    {
      label: 'Taís Rocha',
      data: [],
      borderColor: 'rgb(255, 99, 132)',
      tension: 0.1,
    },
    {
      label: 'Ana Beatriz',
      data: [10, ],
      borderColor: 'rgb(54, 162, 235)',
      tension: 0.1,
    },
    {
      label: 'Mariana de Moura',
      data: [8.5, ],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
    {
      label: 'Pedro Brito',
      data: [0, ],
      borderColor: 'rgb(153, 102, 255)',
      tension: 0.1,
    },
    {
      label: 'Maria Nunes',
      data: [0,],
      borderColor: 'rgb(255, 159, 64)',
      tension: 0.1,
    },
    {
      label: 'Gabriel Gedolin',
      data: [8,],
      borderColor: 'rgb(255, 0, 0)',
      tension: 0.1,
    },
  ],
};

const Filosofia = () => {
  const students = [
    { name: 'Tais Rocha', teachers: ['Taís Rocha',] },
    { name: 'Ana Beatriz', teachers: ['Taís Rocha',] },
    { name: 'Mariana de Moura', teachers: ['Taís Rocha',] },
    { name: 'Pedro Brito', teachers: ['Taís Rocha',] },
    { name: 'Maria Nunes', teachers: ['Taís Rocha', ] },
    { name: 'Gabriel Gedolin', teachers: ['Taís Rocha',] },
  ];

  // Função que atribui nota com base no nome do professor e aluno
  const getNota = (teachers, studentName) => {
    if (teachers.includes(studentName)) {
      return 10; // Se o professor for o aluno, atribui 10
    }
    return '-'; // Se o professor não for o aluno, retorna 0
  };

  return (
    <div className="container mt-5">
      <header className="d-flex justify-content-center mb-4">
      <Link href="/" passHref>
        <button className="btn btn-outline-primary">Voltar para o Boletim</button>
      </Link>
    </header>


      <section className="content">
        <h2 className="text-center mb-4">Tabela de Notas de Filosofia</h2>

        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>Nome do Aluno</th>
                <th>Nome do Professor</th>
                <th>Nota 1</th>
                <th>Nota 2</th>
                <th>Nota 3</th>
                <th>Média</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => {
                return student.teachers.map((teacher, index) => {
                  const nota = getNota(student.teachers, student.name); // Verifica se o professor é o aluno
                  return (
                    <tr key={`${student.name}-${teacher}`}>
                      {index === 0 && (
                        <td className='text-center align-middle' rowSpan={student.teachers.length}>{student.name}</td>
                      )}
                      <td className='text-center align-middle'>{teacher}</td>
                      <td>{nota}</td> {/* Nota 1 */}
                      <td>{nota}</td> {/* Nota 2 */}
                      <td>{nota}</td> {/* Nota 3 */}
                      <td>{nota}</td> {/* Média */}
                    </tr>
                  );
                });
              })}
            </tbody>
          </table>
        </div>

        {/* Gráfico de Desempenho */}
        <div className="my-4">
          <h4 className="text-center mb-3">Desempenho dos Alunos</h4>
          <div className="chart-container">
            <Line
              data={data}
              options={{
                responsive: true,
                plugins: {
                  title: {
                    display: true,
                    text: 'Desempenho dos Alunos',
                  },
                  legend: {
                    position: 'top',
                  },
                },
                maintainAspectRatio: false, // Para permitir que o gráfico se ajuste de acordo com o tamanho do contêiner
              }}
            />
          </div>
        </div>
      </section>

      <style jsx>{`
        .chart-container {
          position: relative;
          width: 100%;
          height: 300px; /* Ajuste a altura conforme necessário */
        }

        @media (max-width: 768px) {
          .chart-container {
            height: 250px; /* Menor altura em telas pequenas */
          }
        }
      `}</style>
    </div>
  );
};

export default Filosofia;
