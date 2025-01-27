import type { Engine } from "tsparticles-engine";
import { OutOfCanvasUpdater } from "./OutOfCanvasUpdater";

/**
 * @param engine - The engine instance loading this plugin
 */
export async function loadOutModesUpdater(engine: Engine): Promise<void> {
    await engine.addParticleUpdater("outModes", (container) => new OutOfCanvasUpdater(container));
}
