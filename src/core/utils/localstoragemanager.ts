export const LSManager = {
  // token
  setToken: (token: string) => localStorage.setItem('access-token', token),
  getToken: () => localStorage.getItem('access-token')?.toString(),
  removeToken: () => localStorage.remove('access-token'),

  //language
  setLanguage: (lang: string) => localStorage.setItem('LANG', lang),
  getLanguage: () => localStorage.getItem('LANG')?.toString(),

  // clear all data in local storage
  clearSite: () => localStorage.clear(),
}
