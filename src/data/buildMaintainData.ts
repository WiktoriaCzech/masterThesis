import { IExampleData } from "@/types";
import { BuildDataProps } from "@/types";

export default function buildMaintainData({ issuedDTS }: BuildDataProps): IExampleData[] {
  const letters = ["C", "F", "D", "C"];
  const names = [
    "MBH2",
    "ManipulatorPVH2",
    "PrasaPSIH6",
    "MBH2",
  ];
  const descriptions = [
    "Myjka Benteler",
    "Manipulator PV H2 (monodragon)",
    "Prasa ciśnieniowa H6",
    "Myjka Benteler",
  ];
  const maintainerNotes = [
    "Wymiana wody",
    "Smarowanie łożysk",
    "Wymiana butli z Argonem",
    "Wymiana wody",
  ];

  return letters.map((letter, i) => ({
    content: {
      letter,
      name: names[i],
      description: descriptions[i],
    },
    details: {
      maintainerNote: maintainerNotes[i],
      comingServiceDate: issuedDTS[i],
    },
  }));
}
