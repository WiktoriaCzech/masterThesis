import { IExampleData } from "@/types";
import { BuildLatestDataProps } from "@/types";

export default function buildLatestData({ issuedDTS, completedDTS, completedTimeDifferences }: BuildLatestDataProps): IExampleData[] {
  const letters = ["A", "D", "B"];
  const names = [
    "ManipulatorPVH2",
    "LWenH2",
    "TIOKH1",
  ];
  const descriptions = [
    "Manipulator PV H2 (monodragon)",
    "Laminator Wenhoner Variolam",
    "Tiokolarka H1 (LL)",
  ];

  const categories = [
    "Diagnostyka / Naprawa",
    "Diagnostyka / Naprawa",
    "Diagnostyka / Naprawa",
  ];

  const maintainerNotes = [
    "Brak ciśnienia w układzie podawania",
    "Przerobienie gniazd",
    "Brak ciśnienia w układzie podawania",
  ];

  const maintainers = [
    "Mariusz Kowalski",
    "Kamil Dzięciołek",
    "Amadeusz Mozart",
  ];

  const priorities = [3, 2, undefined];

  return issuedDTS.map((issuedDate, i) => ({
    content: {
      letter: letters[i],
      name: names[i],
      issuedDate,
      completedDate: completedDTS[i],
      description: descriptions[i],
    },
    details: {
      serviceTime: completedTimeDifferences[i],
      category: categories[i],
      maintainerNote: maintainerNotes[i],
      maintainer: maintainers[i],
      ...(priorities[i] !== undefined && { priority: priorities[i] }),
    },
  }));
}
