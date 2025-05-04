import { BuildCurrentDataProps, IExampleData } from "@/types";

export default function buildCurrentData({ issuedDTS, timeDifferences }: BuildCurrentDataProps): IExampleData[] {
  const letters = ["F", "D", "B"];
  const names = [
    "Stringer Stringerownia",
    "Laminator 1",
    "NorthGlass H6",
  ];
  const descriptions = [
    "Stringer 2/S10",
    "Laminator nr.1 Bootsolar H6",
    "Szlifierka szkła Benteler M1+M2",
  ];
  const maintainerNotes = [
    "Wstążka nie trafia na pada celki",
    "Przerobienie gniazd",
    "Wstążka nie trafia na pada celki",
  ];
  const maintainers = [
    "Janusz Jankowski",
    "Paweł Pawłowski",
    "Tadeusz Mocny",
  ];
  const priorities = [1, undefined, 2];

  return issuedDTS.map((issuedDate, i) => ({
    content: {
      letter: letters[i],
      name: names[i],
      issuedDate,
      description: descriptions[i],
    },
    details: {
      serviceTime: timeDifferences[i],
      maintainerNote: maintainerNotes[i],
      maintainer: maintainers[i],
      ...(priorities[i] !== undefined && { priority: priorities[i] }),
    },
  }));
}
