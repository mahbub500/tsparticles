import type { IAnimation } from "../../Interfaces/IAnimation";
import type { IOptionLoader } from "../../Interfaces/IOptionLoader";
import type { RangeValue } from "../../../Types/RangeValue";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
import { setRangeValue } from "../../../Utils/NumberUtils";

export class GradientAngleAnimation implements IAnimation, IOptionLoader<IAnimation> {
    count: RangeValue;
    decay: RangeValue;
    enable;
    speed: RangeValue;
    sync;

    constructor() {
        this.count = 0;
        this.enable = false;
        this.speed = 0;
        this.decay = 0;
        this.sync = false;
    }

    load(data?: RecursivePartial<IAnimation>): void {
        if (!data) {
            return;
        }

        if (data.count !== undefined) {
            this.count = setRangeValue(data.count);
        }

        if (data.enable !== undefined) {
            this.enable = data.enable;
        }

        if (data.speed !== undefined) {
            this.speed = setRangeValue(data.speed);
        }

        if (data.decay !== undefined) {
            this.decay = setRangeValue(data.decay);
        }

        if (data.sync !== undefined) {
            this.sync = data.sync;
        }
    }
}