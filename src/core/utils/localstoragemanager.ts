export const LSManager = {
  // token
  setToken: (token: string) => localStorage.setItem('TOKEN', token),
  getToken: () => localStorage.getItem('TOKEN')?.toString(),
  removeToken: () => localStorage.remove('TOKEN'),

  //language
  setLanguage: (lang: string) => localStorage.setItem('LANG', lang),
  getLanguage: () => localStorage.getItem('LANG')?.toString(),

  // clear all data in local storage
  clearSite: () => localStorage.clear(),
}
