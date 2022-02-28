



class Loading extends Component {
	componentDidMount() {
		const isLoggedIn = false;
		this.props.navigation.navigate(isLoggedIn ? "App" : "Login");
	}

	render() {
		return <Text>Loading screen</Text>;
	}
}