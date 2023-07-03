import { TranslateProps } from '@/types/projectTranslate'

export const en: TranslateProps = {
  aboutMe: `Hello, my name is Vitor Rodrigues. I'm a front-end dev since 2018, passionate about interfaces.`,
  home: 'Home',
  portfolio: 'Portfolio',
  projecsSectionTitle: 'Projects',
  learnMore: 'learn more about',
  seeItOnline: 'See it online',
  projects: {
    commerce: {
      description: (
        <>
          <p>
            In this mini e-commerce you can filter the products, view more
            details and clicking buy will be redirected to WhatsApp directly in
            the seller&apos;s conversation with the product information already
            fulfilled.
          </p>
          <p className="mt-4">
            This project was created using{' '}
            <span className="font-bold text-blue">NextJs</span>. for the part of
            styling was used{' '}
            <span className="font-bold text-blue">TailwindCSS</span>. The data
            of the products comes directly from{' '}
            <span className="font-bold text-blue">Stripe</span>, place where
            they are registered products.
            <span className="font-bold text-blue">TypeScript</span> was used to
            facilitate future maintenance and construction of the project.
          </p>
        </>
      ),
    },
    igNews: {
      description: (
        <>
          <p>
            Ig News simulates a news center or blog where to read each post it
            is necessary to register and to register it is necessary pay.
          </p>
          <p className="mt-4">
            This project was created using{' '}
            <span className="font-bold text-blue">NextJs</span>. to create the
            inscriptions were used:{' '}
            <span className="font-bold text-blue">Stripe</span> as a means of
            payment, he works with{' '}
            <span className="font-bold text-blue">Webhooks</span> so if the user
            unsubscribes or has no limit on the card to renew the registration
            for example, we can make some decisions,{' '}
            <span className="font-bold text-blue">FaunaDB</span> was used as a
            database to store user data and enrollment. For the creation of the
            news was used <span className="font-bold text-blue">Prismic</span>{' '}
            as a CMS. The application also has an authentication system with the
            github using <span className="font-bold text-blue">Nextauth</span>{' '}
            for this.
          </p>
        </>
      ),
    },
    igniteTimer: {
      description: (
        <>
          <p>Ignite timer is an application based on the pomodoro technique.</p>
          <p className="mt-4">
            With this project I was able to train form validation techniques
            with{' '}
            <span className="font-bold text-blue">
              zod and react hook forms
            </span>
            , improve component styling with{' '}
            <span className="font-bold text-blue">styled components</span>. As
            It&apos;s a simple project I could use{' '}
            <span className="font-bold text-blue">ContextApi</span> for manage
            application state together with{' '}
            <span className="font-bold text-blue">React Reducer</span>. For the
            route management was used{' '}
            <span className="font-bold text-blue">React router dom</span>, plus
            from <span className="font-bold text-blue">Typescript</span> to
            facilitate application coding and maintenance.{' '}
            <span className="font-bold text-blue">LocalStorage</span> was used
            to store task cycle information for then continue working normally
            if you refresh the page or enter another time.
          </p>
        </>
      ),
    },
    newsLetterPage: {
      description: (
        <>
          <p>
            This newsletter page was created with inspiration from the
            rocketseat newsletter which I found very beautiful.
          </p>
          <p className="mt-4">
            Project created with{' '}
            <span className="font-bold text-blue">NextJs</span>. It has full
            validation on form done with{' '}
            <span className="font-bold text-blue">React hook forms</span> +{' '}
            <span className="font-bold text-blue">Zod</span>. all part of
            responsiveness and page styling, was done with great care using the{' '}
            <span className="font-bold text-blue">Tailwindcss</span> which is
            now recommended by NextJs. When filling out the form, the simulation
            for registration and a toast is using{' '}
            <span className="font-bold text-blue">React Toastify</span> appears
            on screen, showing the user the success of the registration.
          </p>
        </>
      ),
    },
    planningPoker: {
      description: (
        <>
          <p>
            Planning poker is an application with the objective of estimating
            points of tasks in sprint meetings.
          </p>
          <p className="mt-4">
            With this project I exercised a lot the real time functions that the
            <span className="font-bold text-blue"> Firebase</span> delivers. It
            was used <span className="font-bold text-blue">ChakraUI</span> to
            help in creating the interface,{' '}
            <span className="font-bold text-blue">Typescript</span> for
            facilitate the creation and maintenance of the code and I used{' '}
            <span className="font-bold text-blue">Cookies</span> to store the
            name of the user, in case he leaves the room and comes back later or
            refresh the screen.
          </p>
        </>
      ),
    },
    simpleFeed: {
      description: (
        <>
          <p>
            Simple feed is a simple feed application where you can: create,
            applaud, and delete comments. This application is aimed at the
            construction of layout, without many functionalities.
          </p>
          <p className="mt-4">
            With this project I was able to exercise the layout construction
            with <span className="font-bold text-blue">Css Module</span> and{' '}
            <span className="font-bold text-blue">Typescript</span> for
            facilitate coding and subsequent maintenance.
          </p>
        </>
      ),
    },
    spacetime: {
      description: (
        <>
          <p>
            Spacetime is an application where you can register images with
            description or not, that make you remember the past, that is, a
            memory.
          </p>
          <p className="mt-4">
            This project was created using{' '}
            <span className="font-bold text-blue">NextJs</span>. for the part of
            styling was used{' '}
            <span className="font-bold text-blue">TailwindCSS</span>. Bank of
            <span className="font-bold text-blue">MySql</span> data for store
            user data and memories. I use{' '}
            <span className="font-bold text-blue">JWT Token</span> for
            authentication. <span className="font-bold text-blue">Fastify</span>{' '}
            was used in the backend.
            <span className="font-bold text-blue">TypeScript</span> for
            facilitate future maintenance.
          </p>
          <p className="mt-4">
            In this project I had a great challenges integrating all services.
            The backend is being hosted with{' '}
            <span className="font-bold text-blue">Heroku</span>, frontend is
            hosted at <span className="font-bold text-blue">Vercel</span>,
            database is in{' '}
            <span className="font-bold text-blue">PlanetScale</span> and
            I&apos;m using the service of{' '}
            <span className="font-bold text-blue">AWS Bucket</span> for store
            application images. In addition to authentication oauth with{' '}
            <span className="font-bold text-blue">Google</span> and{' '}
            <span className="font-bold text-blue">Github</span>.
          </p>
        </>
      ),
    },
  },
}
