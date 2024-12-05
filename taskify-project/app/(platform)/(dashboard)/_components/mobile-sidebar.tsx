"use=client"

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar"
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Sidebar } from "./sidebar";

export const MobileSidebar = () => {

    const onOpen = useMobileSidebar((state) => state.onOpen);
    const onClose = useMobileSidebar((state) => state.onClose);
    const isOpen = useMobileSidebar((state) => state.isOpen);

    const pathName = usePathname();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        onClose();
    }, [pathName, onClose]);


    if (!isMounted){
        return null;
    };

    return (
        <>
            <Button
                onClick={onOpen}
                className="block md:hidden"
                variant="ghost"
            >
                <Menu className="h-4 w-4"/>
            </Button>
            <Sheet>
                <SheetContent>
                    <Sidebar/>
                </SheetContent>
            </Sheet>
        </>
    )
}