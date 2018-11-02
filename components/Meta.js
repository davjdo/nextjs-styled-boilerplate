import React from 'react';
import Head from 'next/head';
import bootstrapStyle from 'bootstrap/dist/css/bootstrap.css';

const Meta = () => (
	<Head>
		<title>NextJS boilerplate</title>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta charSet="utf-8" />
		<style dangerouslySetInnerHTML={{ __html: bootstrapStyle }} />
	</Head>
);

export default Meta;
