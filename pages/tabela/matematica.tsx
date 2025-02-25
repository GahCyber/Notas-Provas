import React from 'react';
import Link from 'next/link';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const data = {
  labels: ['Matéria 1', 'Matéria 2', 'Matéria 3', 'Matéria 4'], // Matérias ou datas
  datasets: [
    {
      label: 'Tais Rocha',
      data: [],
      borderColor: 'rgb(255, 99, 132)',
      tension: 0.1,
    },
    {
      label: 'Ana Beatriz',
      data: [],
      borderColor: 'rgb(54, 162, 235)',
      tension: 0.1,
    },
    {
      label: 'Mariana de Moura',
      data: [],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
    {
      label: 'Pedro Brito',
      data: [],
      borderColor: 'rgb(153, 102, 255)',
      tension: 0.1,
    },
    {
      label: 'Maria Nunes',
      data: [],
      borderColor: 'rgb(255, 159, 64)',
      tension: 0.1,
    },
  ],
};

const options = {
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
};

const Matematica = () => {
  return (
    <div className="container mt-5">
      <header className="d-flex justify-content-between align-items-center mb-4">
        <Link href="/" passHref>
          <button className="btn btn-outline-primary">Voltar para o Boletim</button>
        </Link>
      </header>
  
      <section className="content">
        <h2 className="text-center mb-4">Tabela de Notas de Matematica</h2>
  
        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>Nome do Aluno</th>
                <th>Nota 1</th>
                <th>Nota 2</th>
                <th>Nota 3</th>
                <th>Média</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tais Rocha</td>
              </tr>
              <tr>
                <td>Ana Beatriz</td>
              </tr>
              <tr>
                <td>Mariana de Moura</td>
              </tr>
              <tr>
                <td>Pedro Brito</td>
              </tr>
              <tr>
                <td>Maria Nunes</td>
              </tr>
            </tbody>
          </table>
        </div>
  
        {/* Gráfico de Desempenho */}
        <div className="my-4">
          <h4 className="text-center mb-3">Desempenho dos Alunos</h4>
          <Line data={data} options={{
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
          }} />
        </div>
      </section>
    </div>
  );
};

export default Matematica;