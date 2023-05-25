export const planningPoker = {
  name: 'Planning Poker',
  description: (
    <>
      <p>
        Planning poker é uma aplicação com o objetivo de estimar pontos de tasks
        nas reuniões de sprint.
      </p>
      <p className="mt-4">
        Com este projeto exercitei bastante as funções real time que o
        <span className="font-bold text-blue"> Firebase</span> oferece. Foi
        utilizado <span className="font-bold text-blue">ChakraUI</span> para
        auxiliar na criação da interface,{' '}
        <span className="font-bold text-blue">Typescript</span> para facilitar a
        criação e manutenção do código e utilizei{' '}
        <span className="font-bold text-blue">Cookies</span> para armazenar o
        nome do usuário, caso ele saia da sala e volte posteriormente ou
        atualize a tela.
      </p>
    </>
  ),
  videoPath: 'planning-poker-video.mp4',
  githubRepositoryLinkRedirect:
    'https://github.com/virtorodrigues/planning-poker',
  onlineLinkRedirect: 'https://planning-poker-virtorodrigues.vercel.app/',
  backgroundPath: 'planning-poker-thumb.png',
}
