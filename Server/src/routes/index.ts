import express from 'express'

import characters from "./characters";
import location from "./location";
import episodes from "./episodes";

const router = express.Router({ mergeParams: true });


router.use('/characters', characters);
router.use('/location', location);
router.use('/episodes', episodes);

export default router;
