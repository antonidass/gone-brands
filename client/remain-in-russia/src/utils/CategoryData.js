export const categoryDict = {
  0: "Любой",
  1: "Технологии",
  2: "Авто",
  3: "Сервисы",
  4: "Общепит",
  5: "Логистика",
  6: "Одежда",
  7: "Потребление",
  8: "Финансы",
  9: "Развлечения и игры",
};

export function getKeyByValue(value) {
  return Object.keys(categoryDict).find((key) => categoryDict[key] === value);
}
