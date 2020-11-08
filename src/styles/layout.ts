type LayoutElevation = {
  back: number
  base: number
  item: number
  itemContained: number
  itemFixed: number
  fluid: number
  fixedContained: number
  overlay: number
  overlayContained: number
}

export const zIndex: LayoutElevation = {
  back: -1,
  base: 0,
  item: 1,
  itemContained: 2,
  itemFixed: 3,
  fluid: 4,
  fixedContained: 5,
  overlay: 6,
  overlayContained: 7,
}
