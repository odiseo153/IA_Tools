/* eslint-disable @typescript-eslint/no-unused-vars */
import useLLM from 'usellm';
import { useState } from 'react';
import Loading from './Loading';

interface Mensajes {
    resultados: string,
    request: string
}


export default function TextToText() {


    const llm = useLLM({ serviceUrl: "https://usellm.org/api/llm" });
   // const [result, setResult] = useState("");
    const [request, setRequest] = useState("");
    const [mensajes, setMensajes] = useState<Mensajes[]>([]);
    const [loading, setLoading] = useState<boolean>();
    let cuenta = 0;

 

    const handleClick = async () => {
        cuenta++;
        setLoading(false)
        try {
            await llm.chat({
                messages: [{ role: "user", content: request }],
                stream: true,
            }).then(re => {

                setMensajes([...mensajes, { request, resultados: re.message.content }])
            });
            //setMensajes([...mensajes, { request, resultados: result }])
            setRequest("")
        } catch (error) {
            console.error("Something went wrong!", error);
        }
        setLoading(true)
    }

    const limpiar = () => {
        setMensajes([]);
    }




    return (
        <div className="flex items-start gap-2.5">
            <div className="flex  rounded-lg flex flex-col items-center justify-center w-full bg-gray-100 text-gray-800 p-10" style={{ height: "760px" }}>

                <div className="flex flex-col border-black border-4 flex-grow w-full rounded-lg overflow-hidden" style={{ backgroundColor: '#1e293b' }}>
                    <button
                        onClick={limpiar}
                        className="w-20 bg-yellow-500 text-white px-6 py-2 rounded-md font-bold hover:bg-blue-700"
                    >
                        <i className="fa-solid fa-trash"></i>
                    </button>
                    
                    <div className="flex flex-col w-full  flex-grow  p-4 overflow-auto">

                        {!loading && mensajes.length == 0 && cuenta != 0 &&
                            <div>
                                <Loading />
                                <p>Cargando conversacion.....</p>
                            </div>
                        }

                        <div className="overflow-y-auto" style={{ maxHeight: "760px" }}>
                            {mensajes.map((e, i) => {
                                return (
                                    <div key={i}>

                                        {!loading &&
                                            <Loading />
                                        }
                                        <div className="flex w-full mt-2 space-x-3 ml-auto justify-end">
                                            <div>
                                                <span className="text-xs text-gray-500 leading-none">Odiseo</span>
                                                <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                                                    <p className="text-sm">{e.request || "Hi"}</p>
                                                </div>
                                            </div>
                                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300">
                                                <img alt='.' className='rounded-full' src='https://th.bing.com/th/id/OIG4.xTzbhKveqi6mY0vrNVHd?pid=ImgGn' />
                                            </div>
                                        </div>
                                        <div className="flex w-full mt-2 space-x-3">
                                            <div className="flex-shrink-0 h-10 rounded-full w-10 bg-gray-300">
                                                <img alt='.' className='rounded-full' src='https://th.bing.com/th/id/OIG1.n9LbWSWOTIj72CiKU4O0?pid=ImgGn' />
                                            </div>
                                            <div>
                                                <span className="text-xs text-gray-500 leading-none">IA Modelo</span>
                                                <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                                                    <p className="text-sm">{e.resultados}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })}

                        </div>



                    </div>




                    <div className="bg-gray-300 border-black border-4 p-4 flex items-center">


                        <input
                            onChange={e => setRequest(e.target.value)}
                            value={request}
                            className="ml-1 flex-grow h-10 rounded px-3 text-sm"
                            type="text"
                            placeholder="Escribe tu mensaje"
                        />
                        <button
                            onClick={handleClick}
                            className="ml-3 bg-blue-500 text-white px-6 py-2 rounded-md font-bold hover:bg-blue-700"
                        >
                            <i className="fa-solid fa-paper-plane"></i>
                        </button>


                    </div>


                </div>
            </div>
        </div>
    );
}
