import React, { Component } from 'react';
import Link from 'next/link';
import { Jumbotron } from 'reactstrap';

class Index extends Component {
	render() {
		return (
			<Jumbotron>
				<h1 className="display-3">Hello, world!</h1>
				<p className="lead">
					This is a simple hero unit, a simple Jumbotron-style component for
					calling extra attention to featured content or information.
				</p>
				<hr className="my-2" />
				<p>
					It uses utility classes for typography and spacing to space content
					out within the larger container.
				</p>
				<p className="lead">
					<Link href="/about">
						<a>Learn More</a>
					</Link>
				</p>
			</Jumbotron>
		);
	}
}

export default Index;
