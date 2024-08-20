import { defineStore } from 'pinia';
import { ref } from 'vue';
import { DeveloperInterface } from '../interfaces/DeveloperInerface';

export const useDevelopersStore = defineStore('developesStore', () => {
  const developer = ref<DeveloperInterface>({
    name: 'Erika Nunes',
    stack: 'Front-end',
    description:
      'Minha jornada na programação começou com um forte interesse em JavaScript e TypeScript, e desde então, tenho me especializado em criar interfaces e componentes eficientes e bonitos. Além das minhas habilidades técnicas, sou apaixonada por arte e já trabalhei como designer, o que me permite trazer uma visão criativa para o desenvolvimento de software. No meu tempo livre, adoro passar tempo com meu gatinho chamado Pitu.',
    img: 'https://picsum.photos/id/237/200/300',
    gitHub: 'https://github.com/ErikaNunex',
    linkedin: 'https://www.linkedin.com/in/deverikanunes/',
  });
  const purposeTest = ref<string>(
    'A aplicação desenvolvida tem como objetivo principal permitir aos usuários salvar e interagir com GIFs, demonstrando minhas habilidades com as tecnologias atuais e uma boa organização de código.'
  );
  return {
    developer,
    purposeTest,
  };
});
