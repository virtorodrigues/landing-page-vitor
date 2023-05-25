export const igniteTimer = {
  name: 'Ignite Timer',
  description: (
    <>
      <p>Ignite timer é uma aplicação baseada na técnica de pomodoro.</p>
      <p className="mt-4">
        Com este projeto pude treinar técnicas de validação de formulário com{' '}
        <span className="font-bold text-blue">zod e react hook forms</span>,
        aperfeiçoar estilização de componentes com{' '}
        <span className="font-bold text-blue">styled components</span>. Como é
        um projeto simples pude utilizar{' '}
        <span className="font-bold text-blue">ContextApi</span> para gerenciar o
        estado da aplicação juntamente com{' '}
        <span className="font-bold text-blue">React Reducer</span>. Para o
        gerenciamento de rotas foi utilizado{' '}
        <span className="font-bold text-blue">React router dom</span>, além do{' '}
        <span className="font-bold text-blue">Typescript</span> para facilitar a
        codificação e manutenção da aplicação. O{' '}
        <span className="font-bold text-blue">localStorage</span> foi utilizado
        para armazenar as informações dos ciclos de tarefas para então continuar
        funcionando normalmente caso você atualize a página ou entre em um outro
        momento.
      </p>
    </>
  ),
  videoPath: 'ignite-timer-video.mp4',
  githubRepositoryLinkRedirect:
    'https://github.com/virtorodrigues/ignite-timer',
  onlineLinkRedirect: 'https://ignite-timer-virtorodrigues.vercel.app',
  backgroundPath: 'ignite-timer-thumb.png',
}
