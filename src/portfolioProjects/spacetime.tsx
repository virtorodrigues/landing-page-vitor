export const spacetime = {
  name: 'Spacetime',
  description: (
    <>
      <p>
        Spacetime é uma aplicação onde você pode cadastrar imagens com descrição
        ou não, que te fazem relembrar do passado, ou seja, uma memória.
      </p>
      <p className="mt-4">
        Este projeto foi criado utilizando{' '}
        <span className="font-bold text-blue">NextJs</span>. Para a parte de
        estilização foi utilizado{' '}
        <span className="font-bold text-blue">TailwindCSS</span>. Banco de dados{' '}
        <span className="font-bold text-blue">MySql</span> para armazenar dados
        do usuário e memórias. Utilizo{' '}
        <span className="font-bold text-blue">Token JWT</span> para
        autenticação. <span className="font-bold text-blue">Fastify</span> foi
        utilizado no backend.
        <span className="font-bold text-blue">TypeScript</span> para facilitar
        manutenções futuras.
      </p>
      <p className="mt-4">
        Neste projeto tive desafios legais integrando todos os serviços. O
        backend está sendo hospedado com{' '}
        <span className="font-bold text-blue">Heroku</span>, frontend está
        hospedado na <span className="font-bold text-blue">Vercel</span>, banco
        de dados está no{' '}
        <span className="font-bold text-blue">PlanetScale</span> e estou
        utilizando o serviço de{' '}
        <span className="font-bold text-blue">Bucket da AWS</span> para
        armazenar as imagens da aplicação. Além de contar com autenticação oauth
        com <span className="font-bold text-blue">Google</span> e{' '}
        <span className="font-bold text-blue">Github</span>.
      </p>
    </>
  ),
  videoPath: 'spacetime-video.mp4',
  githubRepositoryLinkRedirect:
    'https://github.com/virtorodrigues/spacetime-web',
  onlineLinkRedirect: 'https://spacetime-vitorodrigues.vercel.app',
  backgroundPath: 'spacetime-thumb.png',
}
