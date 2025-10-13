import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const DialogPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-6">
            <h1 className="text-3xl font-bold mb-4">Dialog Example</h1>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">Open</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Dialog Title</DialogTitle>
                        <DialogDescription>Dialog Description</DialogDescription>
                    </DialogHeader>
                    <p>Dialog Content</p>
                    <Button variant="outline">Other Dialog Content</Button>
                </DialogContent>
            </Dialog>
        </div>
    );
};
export default DialogPage;
