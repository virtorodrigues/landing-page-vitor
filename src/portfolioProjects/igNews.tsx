export const igNews = {
  name: "Ig News",
  description: (
    <>
      <p>
        Ig News simula uma central de notícias ou blog onde para ler cada post é
        necessário se inscrever e para se inscrever é necessário pagar.
      </p>
      <p className="mt-4">
        Este projeto foi criado utilizando{" "}
        <span className="text-blue font-bold">NextJs</span>. Para criar as
        inscrições foram utilizados: o{" "}
        <span className="text-blue font-bold">Stripe</span> como meio de
        pagamento, ele trabalha com{" "}
        <span className="text-blue font-bold">Webhooks</span> então caso o
        usuário se desinscrever ou não tenha limite no cartão para renovar a
        inscrição por exemplo, podemos tomar algumas decisões,{" "}
        <span className="text-blue font-bold">FaunaDB</span> foi utilizado como
        banco de dados para armazenar os dados do usuário e de inscrição. Para a
        criação das notícias foi utilizado{" "}
        <span className="text-blue font-bold">Prismic</span> como CMS. A
        aplicação além disso, conta com um sistema de autenticação com o github
        utilizando <span className="text-blue font-bold">Nextauth</span> para
        isso.
      </p>
    </>
  ),
  videoPath: "ig-news-video.mp4",
  githubRepositoryLinkRedirect: "https://github.com/virtorodrigues/ignews",
  onlineLinkRedirect: "https://ignews-cyan-three.vercel.app/",
  backgroundPath: "ig-news-thumb.png",
};
