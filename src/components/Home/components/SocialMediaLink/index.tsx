import { ReactElement, ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, Variants } from "framer-motion";

import Link from "next/link";
import {
  IconLookup,
  IconDefinition,
  findIconDefinition,
} from "@fortawesome/fontawesome-svg-core";

interface SocialMediaLinkProps {
  icon: IconDefinition;
  href: string;
  color: string;
}

export function SocialMediaLink({ icon, href, color }: SocialMediaLinkProps) {
  return (
    <Link href={href} target="_blank" rel="noreferrer">
      <motion.div
        whileHover={{ scale: 1.3, rotate: 45 }}
        whileTap={{ scale: 0.9 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 10,
          duration: 2,
        }}
      >
        <FontAwesomeIcon icon={icon} size="2xl" className={color} />
      </motion.div>
    </Link>
  );
}
