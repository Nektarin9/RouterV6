import {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectHasMode, selectLoading, selectPage} from "../redux/app-slice/appSelectors.ts";
import {fetchCharacters, fetchEpisodes, fetchLocation} from "../redux/api/actions";

type CategoryType = "Characters" | "Episodes" | "Location";

export const useInfinityScroll = ( category: CategoryType) => {
	const loading = useSelector(selectLoading);
	const page = useSelector(selectPage);
	const hasMode = useSelector(selectHasMode);
	const observer = useRef<IntersectionObserver | null>(null);
	const lastItemRef = useRef<HTMLAnchorElement | null>(null);
	const dispatch = useDispatch();

	const handleObserver = (entries: IntersectionObserverEntry[]) => {
		const lastItem = entries[0];
		if (lastItem.isIntersecting && !loading && hasMode) {
			if (category === "Characters") {
				dispatch(fetchCharacters({ page: page + 1 }));
			}
			else if (category === "Episodes") {
				dispatch(fetchEpisodes({ page: page + 1 }));
			}
			else if (category === "Location") {
				dispatch(fetchLocation({ page: page + 1 }));
			}
		}
	};

	useEffect(() => {
		observer.current = new IntersectionObserver(handleObserver);
		if (lastItemRef.current) {
			observer.current.observe(lastItemRef.current);
		}

		return () => {
			if (lastItemRef.current && observer.current) {
				observer.current.unobserve(lastItemRef.current);
			}
		};
	}, [lastItemRef, loading]);

	return { lastItemRef };
}
