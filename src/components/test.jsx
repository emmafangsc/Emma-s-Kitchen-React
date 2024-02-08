<div className="languageButton border-[red] border-[1px] flex gap-[1px] justify-center items-center text-[14px] w-[3rem] py-1 px-1 bg-yellow text-black hover:bg-black hover:text-yellow cursor-pointer shadow-md rounded" onClick={showLanguageMenuDesktop}>
  language
      <FaCaretDown />
  </div>
  {languageMenuDesktop && (
      <div className="languageMenu flex-col absolute bg-black p-[1rem] top-[2rem] right-0 rounded-[10px] shadow-lg w-[6rem]" >
          <ul className="text-[12px] text-yellow text-center">
              <li className="pb-2 cursor-pointer hover:text-white"  onClick={() => changeLanguage('en')}>{t('languagebutton.english')}</li>
              <li className="pb-2 cursor-pointer hover:text-white" onClick={() => changeLanguage('zh')}>{t('languagebutton.chinese')}</li>                                        
          </ul>
      </div>
  )}