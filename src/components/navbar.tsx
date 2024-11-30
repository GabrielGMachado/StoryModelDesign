import Link from "next/link";
import { Search, ShoppingBag } from "lucide-react";
import Image from "next/image";

export default function Navbar () {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
                <Link href='/' className="text-2xl font-extrabold text-white">
                    StoreModel
                </Link>

                <form action="" className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
                    <Search className="w-5 h-5 text-zinc-500"/>
                    <input type="text" placeholder="Search Products" className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"/>
                </form>
            </div>


            <div className="flex items-center gap-4">
                <div className="items-center flex gap-2">
                    <ShoppingBag className="h-4 w-4"/>
                    <span className="text-sm">Cart (0)</span>
                </div>

                <div className="w-px h-4 bg-zinc-700"></div>
                <Link href='/' className="flex items-center gap-3 hover:underline">
                <span className="text-sm">Account</span>
                <Image src="https://github.com/GabrielGMachado.png" className="h-8 w-8 rounded-full" width={32} height={32} alt="user"/>
                </Link>
            </div>
        </div>
    );
}