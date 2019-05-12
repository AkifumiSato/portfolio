interface ILayoutElavation {
  back: number;
  base: number;
  item: number;
  itemContained: number;
  itemFixed: number;
  fixed: number;
  fixedContained: number;
  overlay: number;
  overlayContained: number;
}

export const zIndex: ILayoutElavation = {
  back: -1,
  base: 0,
  item: 1,
  itemContained: 2,
  itemFixed: 3,
  fixed: 4,
  fixedContained: 5,
  overlay: 6,
  overlayContained: 7,
}
