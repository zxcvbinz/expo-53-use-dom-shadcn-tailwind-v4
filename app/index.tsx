"use dom";

import "@/globals.css";

import { Button } from "@/components/ui/button";
import { useRouter } from "expo-router";
export default function Index() {
	const router = useRouter();
	return (
		<div className="flex flex-col w-screen items-center justify-center h-screen p-2">
			<Button variant="outline" onClick={() => router.push("/modal")}>
				Open Modal
			</Button>
		</div>
	);
}
