import express, {Request} from 'express';
import {getEpisodes, getOneEpisodes} from "../controller/episodes";
import {mapEpisodes} from "../helpers/mapEpisodes";


const router = express.Router({ mergeParams: true });



router.get("/", async (req, res) => {
	try {
		const episodes = await getEpisodes();
		res.send(episodes.map((item) => mapEpisodes(item)));
	}
	catch (error) {
		res.send({ error: true });
	}
});

router.get("/:id", async (req: Request<{ id: string | number }>, res) => {
	try {
		const oneEpisodes = await getOneEpisodes(req.params.id);
		res.send(mapEpisodes(oneEpisodes));
	} catch {
		res.send({ error: true });
	}
});


export default router;
