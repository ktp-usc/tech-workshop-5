import React from "react";
import { Button } from "@/components/ui/button";

const ButtonsPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-6">
            <h1 className="text-3xl font-bold mb-4">Button Example</h1>
            <div className="flex flex-wrap gap-2 items-center justify-center">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
            </div>
        </div>
    );
};
export default ButtonsPage;
