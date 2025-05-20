"use dom";

import "@/globals.css";

import { Button } from "@/components/ui/button";

export default function Index() {
	return (
		<div className="flex flex-col items-center justify-center h-screen p-2">
			<Button variant="outline">Hello, world!</Button>
		</div>
	);
}
