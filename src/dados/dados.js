import towerImg from '../images/computer/computer-1.png'
import phoneImg from '../images/phone/phone-1.png'
import bookImg from '../images/laptop/laptop-3.png'
import headphoneImg from '../images/headphone/headphone-white.png'

export const data = [
    {
        nome: "Orus Tower",
        descricao: "Powerful. Fast. Elegant.",
        img: towerImg,
        secao : {
            titulo: "Welcome to Orus!",
            texto1: "We're a brazilian tech company founded in 2020.",
            texto2: "Our main products consists of fast computers, elegant phones and quality accessories for everyone."
        }
    },
    {
        nome: "Orus Phone",
        descricao: "The perfect phone for you.",
        img: phoneImg,
        secao : {
            titulo: "Our Main Goal?",
            texto1: "We understand how tech can be expensive, however, we wish to change that. Our goal is to offer accessible products to everyone.",
            texto2: null
        }
    },
    {
        nome: "Orus Book",
        descricao: "Portable. Beautiful. Powerful.",
        img: bookImg,
        secao : {
            titulo: null,
            texto1: "And by everyone, we mean engineers, designers, content creators, artists and many more(well, everyone).",
            texto2: null
        }
    },
    {
        nome: "Orus Headphone",
        descricao: "Your new travel companion.",
        img: headphoneImg,
        secao : {
            titulo: null,
            texto1: null,
            texto2: null
        }
    }
]