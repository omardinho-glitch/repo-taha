import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import todolist from '@/public/todolist.jpg'

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Project",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Licence en Télécommunications",
    location: "Université de Boumerdès",
    description:
      "Titulaire d’une licence en Télécommunications obtenue en 2023. J’ai développé des compétences solides dans les réseaux, les systèmes de communication et les technologies modernes.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2023",
  },
  {
    title: "Stage Pratique – Centre de Transmission",
    location: "Bordj El Kiffan, Algérie",
    description:
      "Stage pratique au centre de transmission de Bordj El Kiffan où j’ai renforcé mes compétences en réseaux, télécommunications et gestion des infrastructures techniques.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Chef de Projet – Forage Hydraulique",
    location: "Algérie",
    description:
      "Deux ans d’expérience en tant que chef de projet dans une entreprise de forage hydraulique. Responsable de la coordination, du suivi des équipes et de la réalisation de projets techniques. Titulaire d’un certificat accrédité en forage.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Master 2 Réseaux & Télécommunications",
    location: "Université de Boumerdès",
    description:
      "Actuellement étudiant en Master 2 dans la spécialité Réseaux et Télécommunications. Je continue d’approfondir mes connaissances en systèmes avancés, administration réseau et technologies de communication.",
    icon: React.createElement(FaReact),
    date: "2023 - Présent",
  },
] as const;


export const projectsData = [
  {
    title: "To-Do List App",
    description:
      "Une application simple et moderne permettant d’ajouter, supprimer et gérer des tâches. Ce projet m’a permis de pratiquer les bases du développement web, la gestion d’état et la création d’interfaces propres et réactives.",
    tags: ["React", "JavaScript", "CSS"],
    imageUrl: todolist,
  },
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Git",
  "Networking",
  "Linux",
  "Cisco",
  "Prisma",
  "MongoDB",
  "SQL",
  "Python",
  "Framer Motion",
] as const;
