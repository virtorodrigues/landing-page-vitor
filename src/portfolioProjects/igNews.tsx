export const igNews = {
  name: 'Ig News',
  description: (
    <>
      <p>
        Ig News simula uma central de notícias ou blog onde para ler cada post é
        necessário se inscrever e para se inscrever é necessário pagar.
      </p>
      <p className="mt-4">
        Este projeto foi criado utilizando{' '}
        <span className="font-bold text-blue">NextJs</span>. Para criar as
        inscrições foram utilizados: o{' '}
        <span className="font-bold text-blue">Stripe</span> como meio de
        pagamento, ele trabalha com{' '}
        <span className="font-bold text-blue">Webhooks</span> então caso o
        usuário se desinscrever ou não tenha limite no cartão para renovar a
        inscrição por exemplo, podemos tomar algumas decisões,{' '}
        <span className="font-bold text-blue">FaunaDB</span> foi utilizado como
        banco de dados para armazenar os dados do usuário e de inscrição. Para a
        criação das notícias foi utilizado{' '}
        <span className="font-bold text-blue">Prismic</span> como CMS. A
        aplicação além disso, conta com um sistema de autenticação com o github
        utilizando <span className="font-bold text-blue">Nextauth</span> para
        isso.
      </p>
    </>
  ),
  videoPath: 'ig-news-video.mp4',
  githubRepositoryLinkRedirect: 'https://github.com/virtorodrigues/ignews',
  onlineLinkRedirect: 'https://ignews-cyan-three.vercel.app/',
  backgroundPath: 'ig-news-thumb.png',
}
