import styled from 'styled-components';
import { BackButton } from '../base/back-button/back-button.tsx';
import { BreadCrumbs } from '../base/bread-crumbs/breadСrumbs.tsx';

interface LinksType {
	label: string;
	href: string,
	isTarget: boolean
}

const TopPanelContainer = ({className, links}: {className?: string, links: LinksType[]}) => {
	return <div className={className}>
		<BackButton />
		<BreadCrumbs links={links} />
	</div>
}


export const TopPanel = styled(TopPanelContainer)`
	display: flex;
	gap: 15px;
`
