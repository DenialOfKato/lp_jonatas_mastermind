'use client'
import axios from 'axios';
import { useState } from 'react';

export default function Formtrue() {
    const [data, setData] = useState({
        nome: '',
        email: '',
        tel: ''
    });

    const [ message, setMessage] = useState("");
    
    const valorInput = (e: { target: { name: any; value: any; }; }) => setData({...data, [e.target.name]: e.target.value});

    const sendForm = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        
        const options = {
        method: 'POST',
        url: '/api/form',
        headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.6.1'},
        data: {nome: `${data.nome}`, email: `${data.email}`, telefone: `${data.tel}`}
        };

        axios.request(options).then(function (response) {
        console.log(response.data);
        }).catch(function (error) {
        console.error(error);
        });

        window.location.href = "/obrigado";
    }

    return (
        <>
            <div className="text-center bg-blue-primary rounded-[10px] justify-center items-center gap-2.5 px-[10%] py-[20px] relative bottom-[40px] mb-[-40px] max-w-[400px] ">
                <span className="text-white text-xl uppercase font-bold">Preencha o formulário</span><span className="text-white text-xl uppercase"> para receber o seu acesso.</span>
            </div>
            {message ? <p>{message}</p> : ""}
            <form action="post" className="flex flex-col gap-4 w-full max-w-[260px]" onSubmit={sendForm}>
                    <input className="w-full h-[45px] bg-neutral-100 rounded-[10px] border border-blue-primary text-blue-primary text-sm px-5 py-2" type="text" placeholder="Nome Completo" name="nome" onChange={valorInput}></input>
                    <input className="h-[45px] bg-neutral-100 rounded-[10px] border border-blue-primary text-blue-primary text-sm px-5 py-2" type="tel" placeholder="DDD + WhatsApp" pattern="[0-9]{11}" name='tel' onChange={valorInput}></input>
                    <input className="h-[45px] bg-neutral-100 rounded-[10px] border border-blue-primary text-blue-primary text-sm px-5 py-2" type="email" placeholder="Seu Melhor E-mail" name='email' onChange={valorInput}></input>
                    <input className="h-[45px] bg-amber-500 rounded-[10px] text-center text-white text-sm hover:cursor-pointer" type="submit" value="Inscrever-se"></input>
            </form>
        </>
    )
}