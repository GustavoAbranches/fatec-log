import ibis from "../assets/hospedagem_img/hotel_ibis.png"
import osasco from "../assets/hospedagem_img/hotel_osasco.png"
import budge from "../assets/hospedagem_img/hotel_budge.png"
import barueri from "../assets/hospedagem_img/hotel_barueri.png"
import voa from "../assets/hospedagem_img/hotel_voa.png"

const hotelData = [
    {
        id: 1,
        nome: "Hotel Ibis",
        unidade: "Unidade Tamboré",
        endereco: "Avenida Marcos Penteado de Ulhoa, Rodrigues 1111, Tamboré 06460040 BARUERI",
        avaliacao: "4,5 estrelas",
        contato: "+55 11 4208-1100",
        img: ibis
    },
    {
        id: 2,
        nome: "Hotel Ibis Osasco",
        unidade: "Unidade Osasco",
        endereco: "Avenida Dos Autonomistas 2435 06194 050 Osasco",
        avaliacao: "4,1 estrelas",
        contato: "+55 11 2813-7200",
        img: osasco,
    },
    {
        id: 3,
        nome: "Hotel Ibis budget",
        unidade: "Budget Tamboré",
        endereco: "Av. Marcos Penteado de Ulhoa Rodrigues, 1055 - Tamboré, Barueri - SP, 06460-040",
        avaliacao: "4,0 estrelas",
        contato: "+55 11 2813-7200",
        img: budge,
    },
    {
        id: 4,
        nome: "VOA San José Palace Hotel",
        unidade: "",
        endereco: "R. Dr. Mariano Jatathy Marcondes Ferraz, 215 - Centro, Osasco - SP, 06097-010",
        avaliacao: "4,0 estrelas",
        contato: "+55 11 3232-5666",
        img: voa,
    },
    {
        id: 5,
        nome: "Lummina Barueri",
        unidade: "",
        endereco: "Av. Anápolis, 584 - Vila Nilva, Barueri - SP, 06404-250",
        avaliacao: "4,3 estrelas",
        contato: "+55 11 2543-4343",
        img: barueri,
    },
];

// Modelo 
// {
//     id: 1,
//     nome: "",
//     unidade: "",
//     endereco: "",
//     avaliacao: "",
//     contato: ""      ,
// },

export default hotelData;