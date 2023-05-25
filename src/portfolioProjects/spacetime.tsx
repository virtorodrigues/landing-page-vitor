export const spacetime = {
  name: "Spacetime",
  description: (
    <>
      <p>
        Spacetime é uma aplicação onde você pode cadastrar memórias. Memórias são imagens com descrição ou não, que te fazem lembrar de algo do passado.
      </p>
      <p className="mt-4">
        Este projeto foi criado utilizando{" "}
        <span className="text-blue font-bold">NextJs</span>. Para a parte de estilização foi utilizado <span className="text-blue font-bold">TailwindCSS</span>.
        Banco de dados <span className="text-blue font-bold">MySql</span> para armazenar dados do usuário e memórias. Utilizo <span className="text-blue font-bold">Token JWT</span> para autenticação.
         <span className="text-blue font-bold">Fastify</span> foi utilizado no backend.
        <span className="text-blue font-bold">TypeScript</span> para facilitar a manutenção futura.

        Neste projeto tive grandes desafios. O backend está sendo hospedado com <span className="text-blue font-bold">Heroku</span>, 
        o banco de dados está no <span className="text-blue font-bold">PlanetScale</span>
         e estou utilizando o serviço de <span className="text-blue font-bold">Bucket da AWS</span> para armazenar as imagens da aplicação.
         Além de contar com autenticação oauth com <span className="text-blue font-bold">Google</span> e <span className="text-blue font-bold">Github</span> {" "}
         e o frontend está hospedado na <span className="text-blue font-bold">Vercel</span>

      </p>
    </>
  ),
  videoPath: "spacetime-video.mp4",
  githubRepositoryLinkRedirect: "https://github.com/virtorodrigues/spacetime-web",
  onlineLinkRedirect: "https://spacetime-vitorodrigues.vercel.app",
  backgroundPath: "spacetime-thumb.png",
};
