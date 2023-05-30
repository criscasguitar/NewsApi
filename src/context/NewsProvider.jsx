import { useState, useEffect, createContext } from "react";
import axios from "axios";

const NewsContext = createContext()

const NewsProvider = ({children}) => {
    const [category, setCategory] = useState('general')
    const [noticias, setNoticias] = useState([])
    const [pagina, setPage] = useState(1)
    const [totalNews, setTotalNews] = useState(0)

    useEffect(() => {
        const consultarApi = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=100&apiKey=${import.meta.env.VITE_API_KEY}`

            const {data} = await axios(url)

            setNoticias(data.articles)
            setTotalNews(data.totalResults)
            setPage(1)
        }
        consultarApi()
    }, [category])

    useEffect(() => {
        const consultarApi = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&${pagina}&category=${category}&pageSize=100&apiKey=${import.meta.env.VITE_API_KEY}`

            const {data} = await axios(url)

            setNoticias(data.articles)
            setTotalNews(data.totalResults)
        }
        consultarApi()
    }, [pagina])

    const handleChangeCategory = e => {
        setCategory(e.target.value)
    }

    const handleChangePage = (e, valor) => {
        setPage(valor)
    }

    return (
        <NewsContext.Provider
            value={{
                category,
                handleChangeCategory,
                noticias,
                totalNews,
                handleChangePage,
                pagina
            }}
        >
            {children}
        </NewsContext.Provider>
    )
}

export {
    NewsProvider
}

export default NewsContext