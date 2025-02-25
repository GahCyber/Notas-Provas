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
      data: [10],
      borderColor: 'rgb(54, 162, 235)',
      tension: 0.1,
    },
    {
      label: 'Mariana de Moura',
      data: [8.5],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
    {
      label: 'Pedro Brito',
      data: [0],
      borderColor: 'rgb(153, 102, 255)',
      tension: 0.1,
    },
    {
      label: 'Maria Nunes',
      data: [0],
      borderColor: 'rgb(255, 159, 64)',
      tension: 0.1,
    },
    {
      label: 'Gabriel Gedolin',
      data: [8],
      borderColor: 'rgb(255, 0, 0)',
      tension: 0.1,
    },
  ],
};
const prof = "Taís Rocha";
const Biologia = () => {
  const students = [
    { name: 'Taís Rocha', teachers: [prof], id: "1" },
    { name: 'Ana Beatriz', teachers: [prof], id: "2" },
    { name: 'Mariana de Moura', teachers: [prof], id: "3" },
    { name: 'Pedro Brito', teachers: [prof], id: "4" },
    { name: 'Maria Nunes', teachers: [prof], id: "5" },
    { name: 'Gabriel Gedolin', teachers: [prof], id: "6" },
  ];

  const getNotas = (studentName) => {
    if (studentName === prof) {
      return [10, 10, 10];
    }
    const studentIndex = students.findIndex((student) => student.name === studentName);
    if (studentIndex !== -1 && studentIndex < data.datasets.length) {
      return data.datasets[studentIndex].data;
    }
    return [0, 0, 0];
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
                const notas = getNotas(student.name);
                const media = (notas.reduce((acc, nota) => acc + nota, 0) / notas.length).toFixed(2);
                return (
                  <tr key={student.id}>
                    <td className="text-center align-middle">{student.name}</td>
                    <td className="text-center align-middle">{prof}</td>
                    <td>{notas[0]}</td>
                    <td>{notas[1]}</td>
                    <td>{notas[2]}</td>
                    <td>{media}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

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
                maintainAspectRatio: false,
              }}
            />
          </div>
        </div>
      </section>

      <style jsx>{`
        .chart-container {
          position: relative;
          width: 100%;
          height: 300px;
        }

        @media (max-width: 768px) {
          .chart-container {
            height: 250px;
          }
        }
      `}</style>
    </div>
  );
};

export default Biologia;
