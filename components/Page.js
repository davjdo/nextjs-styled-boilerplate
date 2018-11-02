import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import StyledPage from './styles/page';
import theme from './styles/theme';
import Inner from './styles/inner';
import Meta from './Meta';

class Page extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<StyledPage>
					<GlobalStyle />
					<Meta />
					<Inner>{this.props.children}</Inner>
				</StyledPage>
			</ThemeProvider>
		);
	}
}

export default Page;
