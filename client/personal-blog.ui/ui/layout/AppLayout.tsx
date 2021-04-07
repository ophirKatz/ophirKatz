import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import { Layout } from 'antd';
import styles from '../styles/AppLayout.module.css';

const { Header, Content, Footer } = Layout;

const AppLayout = ({ children }) => {
	return (
		<Layout className="layout">
			<Header className={styles.header}>
				<HeaderComponent />
			</Header>
			{/* TODO : Take styles from module */}
			<Content style={{ padding: '0 50px' }} className={styles.content}>
				<div>{children}</div>
			</Content>
			<Footer>
				<FooterComponent />
			</Footer>
		</Layout>
	);
}

export default AppLayout;
