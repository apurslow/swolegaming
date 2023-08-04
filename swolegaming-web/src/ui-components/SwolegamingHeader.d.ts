/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SwolegamingHeaderOverridesProps = {
    SwolegamingHeader?: PrimitiveOverrideProps<FlexProps>;
    "Frame 5"?: PrimitiveOverrideProps<FlexProps>;
    "Discord Icon"?: PrimitiveOverrideProps<IconProps>;
    Home?: PrimitiveOverrideProps<TextProps>;
    Servers?: PrimitiveOverrideProps<TextProps>;
    "Leader Boards"?: PrimitiveOverrideProps<TextProps>;
    Patreon?: PrimitiveOverrideProps<TextProps>;
    News?: PrimitiveOverrideProps<TextProps>;
    "About Us"?: PrimitiveOverrideProps<TextProps>;
    Contact?: PrimitiveOverrideProps<TextProps>;
    actions?: PrimitiveOverrideProps<FlexProps>;
    Button39481855?: PrimitiveOverrideProps<ButtonProps>;
    Button39481856?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type SwolegamingHeaderProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SwolegamingHeaderOverridesProps | undefined | null;
}>;
export default function SwolegamingHeader(props: SwolegamingHeaderProps): React.ReactElement;
