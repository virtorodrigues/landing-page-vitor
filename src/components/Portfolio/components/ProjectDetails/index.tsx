import { motion } from 'framer-motion'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faXmark } from '@fortawesome/free-solid-svg-icons'
import { ReactElement } from 'react'
import { animationVariantLeftToRight } from '@/utils/AnimationsConst'
import { useTranslator } from '@/hooks/useTranslator'

interface ProjectDetailsProps {
  name: string
  description: ReactElement
  videoPath: string
  githubRepositoryLinkRedirect: string
  onlineLinkRedirect: string
  backgroundPath: string
}

export function ProjectDetails({
  name,
  description,
  videoPath,
  githubRepositoryLinkRedirect,
  onlineLinkRedirect,
  backgroundPath,
}: ProjectDetailsProps) {
  const translator = useTranslator()
  const learnMore = translator.learnMore
  const seeItOnlineText = translator.seeItOnline

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <motion.div
          initial={'offscreen'}
          whileInView="onscreen"
          variants={animationVariantLeftToRight}
          viewport={{ once: true, amount: 0.05 }}
          whileHover={{
            scale: 1.1,
            contentVisibility: 'visible',
            zIndex: 9999,
          }}
          transition={{
            type: 'spring',
            stiffness: 800,
            damping: 17,
          }}
          style={{
            backgroundImage: `url(${backgroundPath})`,
          }}
          className={`flex items-end justify-center rounded-lg bg-cover bg-center text-5xl font-bold text-blue hover:cursor-pointer`}
        >
          <div className="mt-64 w-full rounded-b-lg bg-gray-light p-2 text-center text-lg text-blue dark:bg-gray-dark">
            {learnMore}
          </div>
        </motion.div>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed inset-0 z-[99999] h-screen w-screen bg-[#00000075]" />
        <AlertDialog.Content className="fixed left-2/4 top-2/4 z-[999999] max-h-full max-w-full translate-x-[-50%] translate-y-[-50%] overflow-auto rounded-lg bg-white p-10 dark:bg-gray-dark xs:w-full lg:max-w-7xl">
          <AlertDialog.Title className="text-4xl font-bold">
            {name}
          </AlertDialog.Title>
          <span className="mt-2 flex h-1 w-32 rounded bg-gradient-to-r from-purple to-blue" />

          <AlertDialog.Cancel className="fixed right-6 top-6 leading-none">
            <FontAwesomeIcon
              icon={faXmark}
              size="lg"
              className="text-inherit"
            />
          </AlertDialog.Cancel>
          <div className="mt-12 flex xs:flex-col lg:flex-row">
            <video width="600" controls autoPlay>
              <source src={videoPath} type="video/mp4" />
              Your browser does not support HTML video.
            </video>
            <div className="xs-w-auto lg-w-max overflow-auto text-lg xs:ml-0 xs:mt-12 xs:max-h-48 lg:ml-8 lg:mt-0 lg:max-h-80">
              {description}
            </div>
          </div>
          <div className="mt-12 flex">
            <a
              href={githubRepositoryLinkRedirect}
              target="_blank"
              rel="noreferrer"
              className="delay-70 flex items-center rounded-lg border-2 border-blue px-8 py-2 font-bold text-blue transition ease-in hover:scale-110 hover:bg-blue hover:text-black"
            >
              <FontAwesomeIcon
                icon={faGithubAlt}
                size="lg"
                className="text-inherit mr-2"
              />
              Github
            </a>
            <a
              href={onlineLinkRedirect}
              target="_blank"
              rel="noreferrer"
              className="delay-70 ml-8 flex items-center rounded-lg border-2 border-blue px-8 py-2 font-bold text-blue transition ease-in hover:scale-110 hover:bg-blue hover:text-black"
            >
              <FontAwesomeIcon
                icon={faGlobe}
                size="lg"
                className="text-inherit mr-2"
              />
              {seeItOnlineText}
            </a>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}
