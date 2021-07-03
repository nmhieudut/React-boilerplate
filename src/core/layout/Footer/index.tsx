import i18n from 'plugins/i18n'
import { useState } from 'react'
import { LSManager } from 'core/utils/localstoragemanager'
import Select from 'core/components/common/Select'
import t from 'core/utils/translation'
import { langValues } from 'constants/language'
const Footer = () => {
  const defaultLang = LSManager.getLanguage()?.toString()
  const [defaultLanguage, setDefaultLanguage] = useState(defaultLang)

  const switchLanguage = (lang: string) => {
    setDefaultLanguage(lang)
    i18n.changeLanguage(lang)
    LSManager.setLanguage(lang)
  }
  return (
    <div className="relative footer">
      <div className="max-w-screen-2xl mx-auto pt-6 px-20 flex">
        <div className="flex items-center">
          {t('header.footer.changeLocale')}:
          <Select
            className="ml-2 p-2"
            onChangeSelect={switchLanguage}
            options={langValues}
            selected={defaultLanguage}
          />
        </div>
      </div>
    </div>
  )
}

export default Footer
