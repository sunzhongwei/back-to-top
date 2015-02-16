var BackToTop = React.createClass({displayName: "BackToTop",
    getInitialState: function() {
        return {style: {
			display: "none"
		}};
    },

    componentDidMount: function() {
		window.addEventListener("scroll", this.handleScroll);
    },

	handleClick: function(e) {
		e.preventDefault();
		window.scrollTo(0, 0);
	},

	handleScroll: function() {
		var scrollTop = document.getElementsByTagName("body")[0].scrollTop;
		if (scrollTop > 100) {
			this.setState({style: {
				display: "",
				position: "fixed",
				bottom: "30px",
				"margin-left": "90%"
			}});
		} else {
			this.setState({style: {
				display: "none"
			}});
		}
    },

	render: function() {
		return (
  			React.createElement("span", {onClick: this.handleClick, style: this.state.style}, "返回页首")
		);
	}
});

React.render(
  React.createElement(BackToTop, null),
  document.getElementById('back-to-top')
);
