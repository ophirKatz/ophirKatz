import { Col, Menu, Row } from 'antd';

import FlexFiller from '../shared-components/FlexFiller';
import styles from '../styles/HeaderComponent.module.css';

const HeaderComponent = () => {
	return (
		<Row wrap={false}>
			<Col flex="none">
				<div style={{ padding: '0 16px' }}>
					<div className={styles.logo} />
				</div>
			</Col>
			<FlexFiller />
			<Col>
				<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
					<Menu.Item key="1">Home</Menu.Item>
					<Menu.Item key="2">About</Menu.Item>
					<Menu.Item key="3">Blog</Menu.Item>
				</Menu>
			</Col>
		</Row>
	);
}

export default HeaderComponent;