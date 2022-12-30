import { useEffect, useState } from "react"
import { Card } from "../../components"
import { getData, postData } from "../../utils/apiHandler"
import './Home.css'

const Home = () => {
    // State config
    const [languages, setLanguages] = useState([])
    const [sourceLanguage, setSourceLanguage] = useState('en')
    const [targetLanguage, setTargetLanguage] = useState('ar')
    const [query, setQuery] = useState('')
    const [result, setResult] = useState('')
    // Effect handling
    // Get languages first
    useEffect(() => {
      getData('languages').then(data=>setLanguages(data?.languages) )
    }, [])

    // Get results
    useEffect(() => {
      if (query) {
        const encodedParams = new URLSearchParams();
        encodedParams.append("q", query);
        encodedParams.append("target", targetLanguage);
        encodedParams.append("source", sourceLanguage);
  
        postData('',encodedParams).then(data => setResult(data?.translations[0]?.translatedText))
      }
    }, [sourceLanguage, targetLanguage, query])

    // console.log(result);

    const handleChange = (e) => {
      setQuery(e.target.value);
    }
  return (
    <div className='container'>
      
      <div className="home__cards">
        <Card 
          text={query}
          languages={languages}
          language={sourceLanguage}
          setLanguage={setSourceLanguage}
          source
          onChange={handleChange}
        />
        <Card 
          text={result} 
          languages={languages} 
          language={targetLanguage} 
          setLanguage={setTargetLanguage} 
          target 
          onChange={() => console.log('This just a target!')}
        />
      </div>
    </div>
  )
}

export default Home