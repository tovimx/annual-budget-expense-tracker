"use client";

import { useState } from "react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { DollarSign, Wallet, Building } from "lucide-react";

// Sample data for income sources and accounts
const incomeSources = [
    { id: "salary", name: "Salary" },
    { id: "freelance", name: "Freelance Work" },
    { id: "investments", name: "Investments" },
    { id: "gifts", name: "Gifts" },
];

const accounts = [
    { id: "checking", name: "Checking Account" },
    { id: "savings", name: "Savings Account" },
    { id: "investment", name: "Investment Account" },
    { id: "cash", name: "Cash" },
];

export default function IncomeFormComponent() {
    const [source, setSource] = useState("");
    const [amount, setAmount] = useState("");
    const [account, setAccount] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Income registered:", { source, amount, account });
        // Here you would typically send this data to your backend or state management system
    };

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                    Nuevo Ingreso
                </CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="incomeSource">Income Source</Label>
                        <Select
                            value={source}
                            onValueChange={setSource}
                            required>
                            <SelectTrigger id="incomeSource">
                                <SelectValue placeholder="Select income source" />
                            </SelectTrigger>
                            <SelectContent>
                                {incomeSources.map((src) => (
                                    <SelectItem key={src.id} value={src.id}>
                                        {src.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="amount">Amount (MXN)</Label>
                        <div className="relative">
                            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            <Input
                                id="amount"
                                type="number"
                                placeholder="0.00"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="pl-10"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="destinationAccount">
                            Destination Account
                        </Label>
                        <Select
                            value={account}
                            onValueChange={setAccount}
                            required>
                            <SelectTrigger id="destinationAccount">
                                <SelectValue placeholder="Select destination account" />
                            </SelectTrigger>
                            <SelectContent>
                                {accounts.map((acc) => (
                                    <SelectItem key={acc.id} value={acc.id}>
                                        {acc.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button type="submit" className="w-full">
                        Registrar
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
}
