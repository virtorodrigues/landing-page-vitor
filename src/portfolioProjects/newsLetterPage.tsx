export const newsLetterPage = {
  name: "News Letter Page",
  description: (
    <>
      <p>
        Está página de newsletter foi criada com inspiração na newsletter da
        rocketseat que achei muito bonita.
      </p>
      <p className="mt-4">
        Projeto criado com <span className="text-blue font-bold">NextJs</span>.
        Possúi validação completa no formulário feita com{" "}
        <span className="text-blue font-bold">React hook forms</span> +{" "}
        <span className="text-blue font-bold">Zod</span>. Toda a parte de
        responsividade e estilização da página foi feita com muito cuidado
        utilizando o <span className="text-blue font-bold">Tailwindcss</span>{" "}
        que agora é recomendado pelo NextJs. Ao preencher o formuário uma
        simulação para inscrição é criada e um toast feito em{" "}
        <span className="text-blue font-bold">React Toastify</span> aparece em
        tela, garantindo o sucesso da inscrição.
      </p>
    </>
  ),
  videoPath: "news-letter-page-video.mp4",
  githubRepositoryLinkRedirect:
    "https://github.com/virtorodrigues/news-letter-page",
  onlineLinkRedirect: "https://news-letter-page.vercel.app",
  backgroundPath: "news-letter-thumb.png",
};
