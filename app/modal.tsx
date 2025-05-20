import { StyleSheet, Text, View } from "react-native";

export default function Modal() {
	return (
		<View style={styles.container}>
			<Text>Ciao</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 25,
		justifyContent: "center",
		alignItems: "center",
	},
});
