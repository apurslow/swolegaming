/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SwolegamingvideoIntroOverridesProps = {
    SwolegamingvideoIntro?: PrimitiveOverrideProps<FlexProps>;
    "vlc-record-2022-07-16-10h17m56s-07-15-2022.mp4- 1"?: PrimitiveOverrideProps<ImageProps>;
    "Type Lock Up"?: PrimitiveOverrideProps<FlexProps>;
    "SWOLE GAMING"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type SwolegamingvideoIntroProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SwolegamingvideoIntroOverridesProps | undefined | null;
}>;
export default function SwolegamingvideoIntro(props: SwolegamingvideoIntroProps): React.ReactElement;
