import { useNavigate } from "react-router-dom"

const useUtil = () => {
    const navigate = useNavigate()
    const handleNavigate = (path) => {
        const main = document.querySelector('main')
        main.classList.remove("active")

        setTimeout(() => {
            main.classList.add("active")
            navigate(path)
        }, 100)
    }

    const handleLink = (event, ref) => {
        event.preventDefault()
        const main = document.querySelector('main')
        main.classList.remove("active")

        setTimeout(() => {
            main.classList.add("active")
            navigate((new URL(ref.href)).pathname)
        }, 100)
    }
    return {
        handleNavigate,
        handleLink
    }
}

export default useUtil
