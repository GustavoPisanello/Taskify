import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

import { Plus } from "lucide-react";

export const Navbar = () => {
    return (
        <nav className="fixed z-50 px-8 top-0 w-full justify-between h-14 border-b shadow-sm bg-white flex items-center">
            <div className="flex items-center gap-x-4">
                <div className="hidden md:flex">
                    <Logo/>
                </div>
                <Button size="sm" className="rounded-sm hidden md:block h-auto py-1.5 px-2">
                    Create
                </Button>
                <Button size="sm" className="rounded-sm block md:hidden">
                    <Plus  className="h-4 w-4"/>
                </Button>
            </div>
            <div className="flex items-center gap-x-4">
                <OrganizationSwitcher
                    hidePersonal
                    afterCreateOrganizationUrl="/organization/:id"
                    afterSelectOrganizationUrl="/organization/:id"
                    afterLeaveOrganizationUrl="/select-org"
                    appearance={{
                        elements: {
                            rootBox: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }
                        }
                    }}
                />
                <UserButton
                appearance={{
                    elements: {
                        avatarBox: {
                             height: 30,
                             width: 30
                        }
                    }
                }}
            />
            </div>
           
        </nav>
    );
};