import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface BreadCrumbsProps {
	className?: string;
	links: { label: string; href: string, isTarget: boolean }[];
}

const BreadCrumbsContainer = ({ className, links }: BreadCrumbsProps) => {
	return (
		<div className={className}>
			{links.map((link, index) => (
				<span className="span-page" key={index}>
					<Link className={link.isTarget ? 'target-text' : 'text'} to={link.href}>{link.label}</Link>
				</span>
			))}
		</div>
	);
};

export const BreadCrumbs = styled(BreadCrumbsContainer)`
	display: flex;
	align-items: center;
	font-size: 16px;
	border-radius: 5px;
	.text {
		color: white;
	}
	.text:hover {
		color: #83ee08
	}
	.target-text {
		color: #83ee08;
	}
	.span-page {
		padding: 5px;
		margin: 0;
	}

`;
