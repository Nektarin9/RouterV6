import express, {Request} from 'express';
import {getLocation, getOneLocation} from "../controller/location";
import {mapLocation} from "../helpers/mapLocation";


const router = express.Router({ mergeParams: true });



router.get("/", async (req, res) => {
	try {
		const location = await getLocation();
		res.send(location.map((item) => mapLocation(item)));
	}
	catch (error) {
		res.send({ error: true });
	}
});

router.get("/:id", async (req: Request<{ id: string | number }>, res) => {
	try {
		const oneLocation = await getOneLocation(req.params.id);
		res.send(mapLocation(oneLocation));
	} catch {
		res.send({ error: true });
	}
});


export default router;
