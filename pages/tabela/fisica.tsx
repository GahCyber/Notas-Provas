import React from 'react';
import Link from 'next/link';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const data = {
  labels: ['Matéria 1', 'Matéria 2', 'Matéria 3', 'Matéria 4'],
  datasets: [
    {
      label: 'Tais Rocha',
      data: [8],
      borderColor: 'rgb(255, 99, 132)',
      tension: 0.1,
    },
    {
      label: 'Ana Beatriz',
      data: [5.5],
      borderColor: 'rgb(54, 162, 235)',
      tension: 0.1,
    },
    {
      label: 'Mariana de Moura',
      data: [5.5],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
    {
      label: 'Pedro Brito',
      data: [7.75],
      borderColor: 'rgb(153, 102, 255)',
      tension: 0.1,
    },
    {
      label: 'Maria Nunes',
      data: [2.5],
      borderColor: 'rgb(255, 159, 64)',
      tension: 0.1,
    },
  ],
};
const prof = "Gabriel Gedolin";
const Fisica = () => {
  const students = [
    { name: 'Tais Rocha', teachers: [prof], id: "1" },
    { name: 'Ana Beatriz', teachers: [prof], id: "2" },
    { name: 'Mariana de Moura', teachers: [prof], id: "3" },
    { name: 'Pedro Brito', teachers: [prof], id: "4" },
    { name: 'Maria Nunes', teachers: [prof], id: "5" },
    { name: 'Gabriel Gedolin', teachers: [prof], id: "6" },
  ];

  // Função que retorna as notas do aluno
  const getNotas = (studentName) => {
    // Encontra o índice do aluno na lista de students
    const studentIndex = students.findIndex((student) => student.name === studentName); 
    if (studentIndex !== -1 && studentIndex < data.datasets.length) {
      return data.datasets[studentIndex].data; // Retorna as notas do aluno correspondente
    }
    else if (studentName === prof){
      return [10, 10, 10]
    }
    return [0, 0, 0]; // Caso o aluno não seja encontrado ou o índice estiver fora do intervalo, retorna um array de zeros
  };

  return (
    <div className="container mt-5">
      <header className="d-flex justify-content-center mb-4">
        <Link href="/" passHref>
          <button className="btn btn-outline-primary">Voltar para o Boletim</button>
        </Link>
      </header>

      <section className="content">
        <h2 className="text-center mb-4">Tabela de Notas de Fisica</h2>

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
                const notas = getNotas(student.name); // Pega as notas do aluno
                const media = (notas.reduce((acc, nota) => acc + nota, 0) / notas.length).toFixed(2); // Calcula a média
                return (
                  <tr key={student.id}>
                    <td className="text-center align-middle">{student.name}</td>
                    <td className="text-center align-middle">{prof}</td>
                    <td>{notas[0]}</td> {/* Nota 1 */}
                    <td>{notas[1]}</td> {/* Nota 2 */}
                    <td>{notas[2]}</td> {/* Nota 3 */}
                    <td>{media}</td> {/* Média */}
                  </tr>
                );
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

export default Fisica;
