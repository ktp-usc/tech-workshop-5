"use client";

import React, { FormEvent, useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";

const InputPage = () => {
    const [email, setEmail] = useState("");

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        toast.success(`Saved: ${email}`);
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-6">
            <h1 className="text-3xl font-bold">Quick Form Example</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-sm">
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <Button type="submit" className="w-full">Submit</Button>
            </form>
        </div>
    );
};
export default InputPage;