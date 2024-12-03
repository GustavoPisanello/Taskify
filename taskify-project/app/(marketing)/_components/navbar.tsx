/* Here we have an folder that is unacessable and invisible to other components unless you import them It's created with an underscore before the folder's name. It doesn't make part of the router system as well.*/
/* Components don't use  "default" in Next js. Only Layouts and Pages */

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Navbar = () => {
    return (
        <div className="fixed top-0 w-full h-14 px-8 border-b shadow-sm bg-white flex items-center">
            <div className="md:max-w-screen-xl mx-auto flex items-center w-full justify-between">
                <Logo/>
                <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
                    <Button size="sm" variant="outline" asChild>
                        <Link href="/sign-in">
                            Login
                        </Link>
                    </Button>
                    <Button size="sm" asChild>
                        <Link href="/sign-up">
                            Get Taskify for free
                        </Link> 
                    </Button>
                </div>
            </div>
        </div>
    );
};