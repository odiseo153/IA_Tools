import  { useState } from 'react';
import useLLM from 'usellm';

export default function TextToImage() {
    const [prompt, setPrompt] = useState("");
    const [image, setImage] = useState("");
    const llm = useLLM({ serviceUrl: "https://usellm.org/api/llm" });

    async function handleGenerateClick() {
        setImage("");
        const { images } = await llm.generateImage({ prompt });
        setImage(images[0]);
    }


    return (
        <div className="">

            <div className="container mx-auto px-4 py-8 flex flex-wrap justify-center">
                <div className="w-full md:w-2/3 lg:w-1/2 xl:w-2/3 md:pr-6">
                    <div className="flex flex-col space-y-4">
                        <h1 className="text-2xl font-bold">Generacion De imagenes</h1>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="prompt" className="text-sm font-medium">Prompt</label>
                            <textarea id="prompt" value={prompt}
                                onChange={(e) => setPrompt(e.target.value)} className="w-full border border-gray-300 rounded-md px-2 py-1"></textarea>
                        </div>
                        <button onClick={handleGenerateClick} className="bg-blue-500 text-white px-6 py-2 rounded-md font-bold hover:bg-blue-700">Generate</button>
                    </div>
                </div>

                <div className="w-full md:w-1/3 lg:w-1/2 xl:w-1/3 mt-8 md:mt-0">
                    <div className="top-50 left-50 w-96 mt-5 border-8 rounded-2xl border-sky-500">
                        <div className="h-96 w-full rounded-5 p-5">
                            <img className="object-cover h-full w-full" src={image} alt="." />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}








