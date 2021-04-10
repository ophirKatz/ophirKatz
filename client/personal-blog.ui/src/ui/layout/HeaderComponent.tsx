import { Col, Row } from 'antd';

import FlexFiller from '../shared-components/FlexFiller';
import Nav from './Nav';
import styles from '../styles/Header.module.css';

const HeaderComponent = () => {
	return (
		<Row wrap={false}>
			<Col flex="none">
				<div className={styles.logoContainer}>
					<img src="/logo-light.png" className={styles.logo} />
				</div>
			</Col>
			<FlexFiller />
			<Col>
				<Nav />
			</Col>
		</Row>
	);
}

export default HeaderComponent;