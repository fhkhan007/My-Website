// menuItems.js

import {
  FcNightPortrait,
  FcHome,
  FcTodoList,
  FcContacts,
  FcFactory,
  FcSalesPerformance,
} from "react-icons/fc";

import { MdBiotech, MdCastForEducation } from "react-icons/md";

export const menuItems = [
  { id: "home", icon: FcHome, label: "Home" },
  { id: "about", icon: FcNightPortrait, label: "About" },
  { id: "workexperience", icon: FcFactory, label: "Work Experience" },
  { id: "techstack", icon: MdBiotech, label: "Tech Stack", color: "orange" },
  {
    id: "education",
    icon: MdCastForEducation,
    label: "Education",
    color: "yellow",
  },
  { id: "project", icon: FcTodoList, label: "Projects" },
  { id: "testimonial", icon: FcSalesPerformance, label: "Testimonial" },
  { id: "contactsection", icon: FcContacts, label: "Contact" },
];
