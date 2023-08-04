/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DiscordOverridesProps = {
    Discord?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type DiscordProps = React.PropsWithChildren<Partial<IconProps> & {
    overrides?: DiscordOverridesProps | undefined | null;
}>;
export default function Discord(props: DiscordProps): React.ReactElement;
