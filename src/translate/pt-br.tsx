import { TranslateProps } from '@/types/projectTranslate'

export const ptBr: TranslateProps = {
  aboutMe:
    'Olá, me chamo Vitor Rodrigues. Sou dev front-end desde 2018, apaixonado por interfaces.',
  home: 'Home',
  portfolio: 'Portifólio',
  projecsSectionTitle: 'Projetos',
  learnMore: 'ver mais',
  seeItOnline: 'Ver online',
  projects: {
    commerce: {
      description: (
        <>
          <p>
            Neste mini e-commerce você pode filtrar os produtos, visualizar mais
            detalhes e ao clicar em comprar será redirecionado ao WhatsApp
            direto na conversa do vendedo com as informações do produto já
            preenchidas.
          </p>
          <p className="mt-4">
            Este projeto foi criado utilizando{' '}
            <span className="font-bold text-blue">NextJs</span>. Para a parte de
            estilização foi utilizado{' '}
            <span className="font-bold text-blue">TailwindCSS</span>. Os dados
            dos produtos vem diretamente da{' '}
            <span className="font-bold text-blue">Stripe</span>, lugar onde são
            cadastrados os produtos.
            <span className="font-bold text-blue">TypeScript</span> foi
            utilizado para facilitar manutenções futuras e contrução do projeto.
          </p>
        </>
      ),
    },
    igNews: {
      description: (
        <>
          <p>
            Ig News simula uma central de notícias ou blog onde para ler cada
            post é necessário se inscrever e para se inscrever é necessário
            pagar.
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
            <span className="font-bold text-blue">FaunaDB</span> foi utilizado
            como banco de dados para armazenar os dados do usuário e de
            inscrição. Para a criação das notícias foi utilizado{' '}
            <span className="font-bold text-blue">Prismic</span> como CMS. A
            aplicação além disso, conta com um sistema de autenticação com o
            github utilizando{' '}
            <span className="font-bold text-blue">Nextauth</span> para isso.
          </p>
        </>
      ),
    },
    igniteTimer: {
      description: (
        <>
          <p>Ignite timer é uma aplicação baseada na técnica de pomodoro.</p>
          <p className="mt-4">
            Com este projeto pude treinar técnicas de validação de formulário
            com{' '}
            <span className="font-bold text-blue">zod e react hook forms</span>,
            aperfeiçoar estilização de componentes com{' '}
            <span className="font-bold text-blue">styled components</span>. Como
            é um projeto simples pude utilizar{' '}
            <span className="font-bold text-blue">ContextApi</span> para
            gerenciar o estado da aplicação juntamente com{' '}
            <span className="font-bold text-blue">React Reducer</span>. Para o
            gerenciamento de rotas foi utilizado{' '}
            <span className="font-bold text-blue">React router dom</span>, além
            do <span className="font-bold text-blue">Typescript</span> para
            facilitar a codificação e manutenção da aplicação. O{' '}
            <span className="font-bold text-blue">localStorage</span> foi
            utilizado para armazenar as informações dos ciclos de tarefas para
            então continuar funcionando normalmente caso você atualize a página
            ou entre em um outro momento.
          </p>
        </>
      ),
    },
    newsLetterPage: {
      description: (
        <>
          <p>
            Esta página de newsletter foi criada com inspiração na página de
            newsletter da rocketseat que achei muito bonita.
          </p>
          <p className="mt-4">
            Projeto criado com{' '}
            <span className="font-bold text-blue">NextJs</span>. Possúi
            validação completa no formulário feita com{' '}
            <span className="font-bold text-blue">React hook forms</span> +{' '}
            <span className="font-bold text-blue">Zod</span>. Toda a parte de
            responsividade e estilização da página, foi feita com muito cuidado
            utilizando o{' '}
            <span className="font-bold text-blue">Tailwindcss</span> que agora é
            recomendado pelo NextJs. Ao preencher o formuário é criada uma
            simulação para inscrição e um toast utilizando{' '}
            <span className="font-bold text-blue">React Toastify</span> aparece
            em tela, exibindo para o usuário o sucesso da inscrição.
          </p>
        </>
      ),
    },
    planningPoker: {
      description: (
        <>
          <p>
            Planning poker é uma aplicação com o objetivo de estimar pontos de
            tasks nas reuniões de sprint.
          </p>
          <p className="mt-4">
            Com este projeto exercitei bastante as funções real time que o
            <span className="font-bold text-blue"> Firebase</span> oferece. Foi
            utilizado <span className="font-bold text-blue">ChakraUI</span> para
            auxiliar na criação da interface,{' '}
            <span className="font-bold text-blue">Typescript</span> para
            facilitar a criação e manutenção do código e utilizei{' '}
            <span className="font-bold text-blue">Cookies</span> para armazenar
            o nome do usuário, caso ele saia da sala e volte posteriormente ou
            atualize a tela.
          </p>
        </>
      ),
    },
    simpleFeed: {
      description: (
        <>
          <p>
            Simple feed é uma aplicação de um feed simples, onde é possível:
            criar, aplaudir e excluir comentários. Esta aplicação é voltada para
            a construção de layout, sem muitas funcionalidades.
          </p>
          <p className="mt-4">
            Com este projeto pude exercitar a construção de layout com{' '}
            <span className="font-bold text-blue">Css Module</span> e{' '}
            <span className="font-bold text-blue">Typescript</span> para
            facilitar na codificação e manutenções posteriores.
          </p>
        </>
      ),
    },
    spacetime: {
      description: (
        <>
          <p>
            Spacetime é uma aplicação onde você pode cadastrar imagens com
            descrição ou não, que te fazem relembrar do passado, ou seja, uma
            memória.
          </p>
          <p className="mt-4">
            Este projeto foi criado utilizando{' '}
            <span className="font-bold text-blue">NextJs</span>. Para a parte de
            estilização foi utilizado{' '}
            <span className="font-bold text-blue">TailwindCSS</span>. Banco de
            dados <span className="font-bold text-blue">MySql</span> para
            armazenar dados do usuário e memórias. Utilizo{' '}
            <span className="font-bold text-blue">Token JWT</span> para
            autenticação. <span className="font-bold text-blue">Fastify</span>{' '}
            foi utilizado no backend.
            <span className="font-bold text-blue">TypeScript</span> para
            facilitar manutenções futuras.
          </p>
          <p className="mt-4">
            Neste projeto tive desafios legais integrando todos os serviços. O
            backend está sendo hospedado com{' '}
            <span className="font-bold text-blue">Heroku</span>, frontend está
            hospedado na <span className="font-bold text-blue">Vercel</span>,
            banco de dados está no{' '}
            <span className="font-bold text-blue">PlanetScale</span> e estou
            utilizando o serviço de{' '}
            <span className="font-bold text-blue">Bucket da AWS</span> para
            armazenar as imagens da aplicação. Além de contar com autenticação
            oauth com <span className="font-bold text-blue">Google</span> e{' '}
            <span className="font-bold text-blue">Github</span>.
          </p>
        </>
      ),
    },
  },
}
