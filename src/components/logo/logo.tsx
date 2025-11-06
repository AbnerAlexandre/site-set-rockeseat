import Image from "next/image";
import Link from "next/link";

export function Logo() {
    return ( 
        <div className="flex h-16 items-center justify-between">
            <Link href={"/"}>
                <Image src={"/logo.svg"} alt="Logo site" width={116} height={32} />
            </Link>
        </div>
    )
}