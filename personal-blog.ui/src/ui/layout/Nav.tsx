import { EditOutlined, HomeOutlined, QuestionOutlined } from '@ant-design/icons';

import { Button } from 'antd';
import Link from 'next/link';

const NavButton = ({ href, text, icon }) => {
	return (
		<Link href={href}>
			<Button type="link" icon={icon}>
				{text}
			</Button>
		</Link>
	);
};

const Nav = ({ }) => {
	return (
		<>
			<NavButton href="/" text="Home" icon={<HomeOutlined />} />
			<NavButton href="/about" text="About" icon={<QuestionOutlined />} />
			<NavButton href="/blog" text="Blog" icon={<EditOutlined />} />
		</>
	);
};

export default Nav;
