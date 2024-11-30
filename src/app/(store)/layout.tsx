import Navbar from "@/components/navbar";
import { ReactNode } from "react";

export default function StoreLayout ({ children }: { children: ReactNode }) {
    return <div>
        <Navbar/>
        { children }
        </div>
}