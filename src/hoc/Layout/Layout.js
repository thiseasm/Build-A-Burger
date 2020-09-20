import React, { Component } from 'react';

import Auxiliary from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.css';

class Layout extends Component {
	state = {
		showSideDrawer: true
	};

	sideDrawerClosedHandler = () => {
		this.setState({ showSideDrawer: false });
	};

	sideDrawerToggleHandler = () => {
		this.setState(prevState => {
			return { showSideDrawer: !prevState.showSideDrawer };
		});
	};

	render() {
		return (
			<Auxiliary>
				<Toolbar clicked={this.sideDrawerOpenedHandler} />
				<SideDrawer
					open={this.state.showSideDrawer}
					closed={this.sideDrawerToggleHandler}
				/>
				<main className={classes.Content}>{this.props.children}</main>
			</Auxiliary>
		);
	}
}

export default Layout;
