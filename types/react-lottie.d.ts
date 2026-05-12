declare module "react-lottie" {
    import type { ComponentType } from "react";

    export type LottieOptions = {
        loop?: boolean;
        autoplay?: boolean;
        animationData?: unknown;
        rendererSettings?: unknown;
        [key: string]: unknown;
    };

    interface ReactLottieProps {
        options: LottieOptions;
        height?: number | string;
        width?: number | string;
        [key: string]: unknown;
    }

    const Lottie: ComponentType<ReactLottieProps>;
    export default Lottie;
}

