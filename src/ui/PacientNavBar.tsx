"use client";

import { Hospital, Search, PowerIcon } from 'lucide-react';
import Link from 'next/link';
import cerrarSesion from '../lib/session';
import UserOptionsButton from './UserOptionsButton';

export default function NavBarPacient() {
    return (
        <nav className="bg-[#025951] text-[#F2F2F2] shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center w-full h-16">
                    <Link href="/" className="flex items-center space-x-2">
                        <Hospital className="h-8 w-8 text-[#04D99D]" />
                        <span className="text-xl font-bold">Hospitales 2000</span>
                    </Link>

                    <div className="flex space-x-1">
                        <div className='flex items-center'>
                            <span className="text-md font-medium mr-4 ml-4 ">Paciente</span>
                        </div>
                        <UserOptionsButton />
                    </div>
                </div>
            </div>
        </nav>
    );
}
