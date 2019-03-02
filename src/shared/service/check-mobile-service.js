const mobileScreen = 600
const tabletScreen = 960

export function screenIsMobile() {
  return window.innerWidth <= mobileScreen
}

export function screenIsTablet() {
  return window.innerWidth <= tabletScreen && window.innerWidth > mobileScreen
}