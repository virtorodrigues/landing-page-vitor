import { motion } from "framer-motion";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faXmark } from "@fortawesome/free-solid-svg-icons";
import { ReactNode, ReactElement } from "react";

interface ProjectDetailsProps {
  name: string;
  description: ReactElement;
  videoPath: string;
  githubRepositoryLinkRedirect: string;
  onlineLinkRedirect: string;
  backgroundPath: string;
}

export function ProjectDetails({
  name,
  description,
  videoPath,
  githubRepositoryLinkRedirect,
  onlineLinkRedirect,
  backgroundPath,
}: ProjectDetailsProps) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <motion.div
          initial={{ contentVisibility: "hidden" }}
          whileHover={{
            scale: 1.2,
            contentVisibility: "visible",
            zIndex: 9999,
          }}
          transition={{
            type: "spring",
            stiffness: 800,
            damping: 17,
          }}
          className={`text-blue font-bold rounded-lg flex items-center justify-center bg-cover bg-center bg-no-repeat hover:bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/${backgroundPath}')] bg-[url('/${backgroundPath}')] hover:cursor-pointer text-5xl`}
        >
          <div className="mt-80 w-full bg-gray-dark text-blue rounded-b-lg text-center text-lg p-2">
            ver mais
          </div>
        </motion.div>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="h-screen w-screen fixed inset-0 bg-[#00000075]" />
        <AlertDialog.Content className="bg-gray-dark max-w-7xl rounded-lg fixed left-2/4 top-2/4 translate-y-[-50%] translate-x-[-50%] p-10">
          <AlertDialog.Title className="text-4xl font-bold">
            {name}
          </AlertDialog.Title>
          <span className="flex h-1 w-32 rounded mt-2 bg-gradient-to-r from-purple to-blue" />

          <AlertDialog.Cancel className="top-6 fixed right-6 leading-none">
            <FontAwesomeIcon
              icon={faXmark}
              size="lg"
              className="text-inherit"
            />
          </AlertDialog.Cancel>
          <div className="text-white mt-6 flex">
            <video width="600" controls autoPlay>
              <source src={videoPath} type="video/mp4" />
              Your browser does not support HTML video.
            </video>
            <div className="ml-8 w-max text-lg">{description}</div>
          </div>
          <div className="flex mt-12">
            <a
              href={githubRepositoryLinkRedirect}
              target="_blank"
              rel="noreferrer"
              className="text-blue transition ease-in delay-70 hover:scale-110 hover:bg-blue hover:text-black font-bold rounded-lg border-2 border-blue px-8 py-2 flex items-center"
            >
              <FontAwesomeIcon
                icon={faGithubAlt}
                size="lg"
                className="mr-2 text-inherit"
              />
              Github
            </a>
            <a
              href={onlineLinkRedirect}
              target="_blank"
              rel="noreferrer"
              className="text-blue ml-8 transition ease-in delay-70 hover:scale-110 hover:bg-blue hover:text-black font-bold rounded-lg border-2 border-blue px-8 py-2 flex items-center"
            >
              <FontAwesomeIcon
                icon={faGlobe}
                size="lg"
                className="mr-2 text-inherit"
              />
              Ver online
            </a>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
