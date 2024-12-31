import type { PageServerLoad } from './$types'; // Importa o tipo de página
export const load: PageServerLoad = async () => {
    // Simulador de dados dos professores, para depois implementar a chamada da API.
  const professores = [
    {
      nome: 'Professor A',
      departamento: 'Departamento de Educação Física',
      foto: '../../lib/public/imgs/pexels-ketut-subiyanto-4473804.jpg'
    },
    {
      nome: 'Professor B',
      departamento: 'Departamento de Esportes',
      foto: '../../lib/public/imgs/pexels-ketut-subiyanto-4473804.jpg'
    },
    {
      nome: 'Professor C',
      departamento: 'Departamento de Saúde',
      foto: '../../lib/public/imgs/pexels-ketut-subiyanto-4473804.jpg'
    }
  ];

  return {
    professores
  };
};