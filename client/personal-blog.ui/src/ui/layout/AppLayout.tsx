import FooterComponent from './FooterComponent';
import Head from 'next/head';
import HeaderComponent from './HeaderComponent';
import { Layout } from 'antd';
import styles from '../styles/AppLayout.module.css';

const { Header, Content, Footer } = Layout;

const AppLayout = ({ children, title }) => {
	return (
		<Layout className="layout">
			<Head>
				<title>{title}</title>
			</Head>
			<Header className={styles.header}>
				<HeaderComponent />
			</Header>
			<Content className={styles.content}>
				<div>{children}</div>
			</Content>
			<Footer>
				<FooterComponent />
			</Footer>
		</Layout>
	);
}

export default AppLayout;
