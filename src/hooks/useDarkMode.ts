import { LSManager } from 'utils/localstoragemanager';
import { useState, useEffect } from 'react'

export const useDarkMode = () => {
  const [theme, setTheme] = useState('dark')

  const setMode = (mode: string) => {
    LSManager.setTheme(mode)
    setTheme(mode)
  }

  const toggleTheme = () => {
    theme === 'dark' ? setMode('light') : setMode('dark')
  }

  useEffect(() => {
    const localTheme = LSManager.getTheme()
    localTheme ? setTheme(localTheme) : setMode('dark')
  }, [])

  return [theme, toggleTheme]
}
