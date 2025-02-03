import express, { Request } from 'express';
import {getCharacters, getOneCharacter} from "../controller/characters";
import {mapCharacters} from "../helpers/mapCharacters";


const router = express.Router({ mergeParams: true });


router.get("/", async (req, res) => {
	try {
		const characters = await getCharacters();
		res.send(characters.map((item) => mapCharacters(item)));
	}
	catch (error) {
		res.send({ error: true });
	}
});

router.get("/:id", async (req: Request<{ id: string | number }>, res) => {
	try {
		const oneCharacter = await getOneCharacter(req.params.id);
		res.send(mapCharacters(oneCharacter));
	} catch {
		res.send({ error: true });
	}
});


export default router;
