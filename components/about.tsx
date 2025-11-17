"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Sur moi</SectionHeading>
      <p className="mb-3">
        Passionné par les{" "}
        <span className="font-medium">technologies</span>, j’ai développé un fort intérêt pour la programmation, 
        les systèmes réseaux et la construction d’applications modernes.{" "}
        <span className="font-medium">J’aime particulièrement le côté résolution de problèmes, cette sensation d’avancer étape par étape jusqu’à 
          trouver la solution la plus élégante.</span>.{" "}
        <span >Mon domaine de prédilection touche au développement web,
           aux réseaux et aux systèmes intelligents. Je suis constamment en train d’explorer de nouveaux outils,
            d’expérimenter des technologies récentes et d'améliorer ma manière de créer des projets robustes, 
            performants et modernes.</span>Quand je ne programme pas, j’aime jouer aux jeux vidéo, regarder des films et passer du temps avec mon chien. J’adore aussi apprendre à travers différents sujets. En ce moment, je m’intéresse beaucoup à l’histoire, à la philosophie, et j’apprends également à jouer du piano. 
      </p>
    </motion.section>
  );
}
