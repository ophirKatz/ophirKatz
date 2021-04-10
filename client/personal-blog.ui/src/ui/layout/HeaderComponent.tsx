import { Col, Menu, Row } from 'antd';

import FlexFiller from '../shared-components/FlexFiller';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const HeaderComponent = () => {
	return (
		<Row wrap={false}>
			<Col flex="none">
				<div className={styles.logoContainer}>
					<div className={styles.logo} />
				</div>
			</Col>
			<FlexFiller />
			<Col>
				<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
					<Menu.Item key="1"><Link href="/">Home</Link></Menu.Item>
					<Menu.Item key="2"><Link href="/about">About</Link></Menu.Item>
					<Menu.Item key="3"><Link href="/blog">Blog</Link></Menu.Item>
				</Menu>
			</Col>
		</Row>
	);
}

export default HeaderComponent;