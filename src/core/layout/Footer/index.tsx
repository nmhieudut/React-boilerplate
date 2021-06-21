import i18n from 'plugins/i18n'
import { useState } from 'react'
import { LSManager } from 'core/utils/localstoragemanager'
import Select from 'core/components/common/Select'
import t from "core/utils/translation"

const Footer = () => {
  const langValues = [
    {
      value: 'en',
      text: 'English',
    },
    {
      value: 'vi',
      text: 'Vietnamese',
    },
  ]
  const defaultLang = LSManager.getLanguage()?.toString()
  const [defaultLanguage, setDefaultLanguage] = useState(defaultLang)
  
  const switchLanguage = (lang: string) => {
    setDefaultLanguage(lang)
    i18n.changeLanguage(lang)
    LSManager.setLanguage(lang)
    window.location.reload()
  }
  console.log('Footer render', defaultLanguage)
  return (
    <div className="footer">
      <div className="max-w-screen-2xl mx-auto">
        <div className="wrapper pt-6 px-20">
          <div>
            {t("content.footer.changeLocale")}: {" "}
            <Select
              callback={switchLanguage}
              values={langValues}
              selected={defaultLanguage}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
