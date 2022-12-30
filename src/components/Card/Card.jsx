import './styles.css'

const Card = ({ languages, language, setLanguage, text , source, target, onChange }) => {
  const languageNames = new Intl.DisplayNames(['en'], {
    type: 'language'
  });
  return (
    <div className='card'>
        {/* <ul className='card__header'>
            <li className='card__header-item'>{languageNames.of(language)}</li>
        </ul> */}
        <select 
          className='card__select'
          onChange={(e)=> setLanguage(e.target.value)}
        >
          {languages?.map(lang=>(
            <option
              key={lang.language}
              className='card__select-option' 
              value={lang.language}
            >
              {languageNames.of(lang.language)}
            </option>
          ))}
        </select>
        <hr />
        <div className='card__content'>
            <textarea 
              className='card__content-textarea'
              onChange={onChange}
              value={text}
            >
            </textarea>
        </div>
    </div>
  )
}

export default Card