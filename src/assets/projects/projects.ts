import chordokuImage from "./chordoku.png";
import memoryGameImage from "./memory_game.png";
import crudImage from "./crud.png";
export interface ProjectType {
  name: string;
  image: string;
  description: string;
  github?: string;
  deployed?: string;
}

export const projects: ProjectType[] = [
  {
    name: "Chordoku",
    image: chordokuImage,
    description: "A web app to learn chords",
    deployed: "https://www.chordoku.com.ar",
  },
  {
    name: "Memory Game",
    image: memoryGameImage,
    description: "A memory game",
    github: "https://github.com/FedericoDeniard/memory_game",
    deployed: "https://federicodeniard.github.io/memory_game/",
  },
  {
    name: "CRUD Vue",
    image: crudImage,
    description: "A simple CRUD app",
    github: "https://github.com/FedericoDeniard/CRUD-Vue",
  },
];
