export const commerce = {
  name: 'Mini e-commerce',
  description: (
    <>
      <p>
        Neste mini e-commerce você pode filtrar os produtos, visualizar mais
        detalhes e ao clicar em &apos;comprar`&apos; será redirecionado ao
        WhatsApp direto na conversa do vendedo com as informações do produto já
        preenchidas.
      </p>
      <p className="mt-4">
        Este projeto foi criado utilizando{' '}
        <span className="font-bold text-blue">NextJs</span>. Para a parte de
        estilização foi utilizado{' '}
        <span className="font-bold text-blue">TailwindCSS</span>. Os dados dos
        produtos vem diretamente da{' '}
        <span className="font-bold text-blue">Stripe</span>, lugar onde são
        cadastrados os produtos.
        <span className="font-bold text-blue">TypeScript</span> foi utilizado
        para facilitar manutenções futuras e contrução do projeto.
      </p>
    </>
  ),
  videoPath: 'mini-commerce-video.mp4',
  githubRepositoryLinkRedirect: 'https://github.com/virtorodrigues/commerce',
  onlineLinkRedirect: 'https://marcelocontroles.vercel.app',
  backgroundPath: 'mini-commerce-thumb.png',
}
