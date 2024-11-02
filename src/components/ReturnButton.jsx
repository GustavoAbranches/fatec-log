import { Link } from "react-router-dom";
import { Undo2 } from 'lucide-react';

export default function ReturnButton() {
    return(
        <div className="flex justify-start items-center px-24 py-10 w-full h-2">
            <button className="flex flex-row text-red-500 font-thin text-lg">
            <Undo2 className="text-red-500 scale-x-[-1]"/>
                <Link to={'/'}>
                    Volte para a página inicial
                </Link>
            </button>
        </div>
    );
};