export const sideMenuActions = {
  ON: 'SIDE_MENU_ON',
  OFF: 'SIDE_MENU_OFF'
}

export const sideMenuActionCreator = {
  toggleSideMenu: (isOpen) => ({
    type: isOpen ? sideMenuActions.OFF : sideMenuActions.ON
  })
}