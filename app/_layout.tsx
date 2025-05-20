import { Stack } from "expo-router";

export default function RootLayout() {
	return (
		<Stack>
			<Stack.Screen name="index" />
			<Stack.Screen
				name="modal"
				options={{
					title: "Profile",
					headerShown: false,
					presentation: "formSheet",
					gestureDirection: "vertical",
					animation: "slide_from_bottom",
					sheetGrabberVisible: true,
					sheetInitialDetentIndex: 0,
					sheetAllowedDetents: [0.5, 0.75, 1],
					sheetCornerRadius: 30,
					sheetExpandsWhenScrolledToEdge: true,
					sheetElevation: 24,
				}}
			/>
		</Stack>
	);
}
