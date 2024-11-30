import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link href="/" className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-start">
        <Image src="/moletom-never-stop-learning 1.png" className="group-hover:scale-105 duration-200" width={980} height={980} quality={100} alt=""/>
        <div className="flex items-center h-12 absolute bottom-28 right-28 max-w-[250px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom Never Stop Learning</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">$24</span>
        </div>
      </Link>

      <Link href="/" className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-start">
        <Image src="/moletom-java.png" className="group-hover:scale-105 duration-200" width={980} height={980} quality={100} alt=""/>
        <div className="flex items-center h-12 absolute bottom-10 right-10 max-w-[250px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom Never Stop Learning</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">$24</span>
        </div>
      </Link>

      <Link href="/" className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-start">
        <Image src="/moletom-ia-p-devs.png" className="group-hover:scale-105 duration-200" width={980} height={980} quality={100} alt=""/>
        <div className="flex items-center h-12 absolute bottom-10 right-10 max-w-[250px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom Never Stop Learning</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">$24</span>
        </div>
      </Link>
      
    </div>
  );
}
