/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MapRotation } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MapStatCardOverridesProps = {
    MapStatCard?: PrimitiveOverrideProps<FlexProps>;
    "Map Img"?: PrimitiveOverrideProps<ImageProps>;
    "Card Area39471839"?: PrimitiveOverrideProps<FlexProps>;
    "Text Group39471840"?: PrimitiveOverrideProps<FlexProps>;
    "Server Name"?: PrimitiveOverrideProps<TextProps>;
    "Map Title"?: PrimitiveOverrideProps<TextProps>;
    "Card Area39471823"?: PrimitiveOverrideProps<FlexProps>;
    "Text Group39471824"?: PrimitiveOverrideProps<FlexProps>;
    "Blue Team name "?: PrimitiveOverrideProps<TextProps>;
    "Text Group39471832"?: PrimitiveOverrideProps<FlexProps>;
    "Blue Team Score"?: PrimitiveOverrideProps<TextProps>;
    "Text Group39471834"?: PrimitiveOverrideProps<FlexProps>;
    "Red Team Name"?: PrimitiveOverrideProps<TextProps>;
    "Text Group39471836"?: PrimitiveOverrideProps<FlexProps>;
    "Red Team Score"?: PrimitiveOverrideProps<TextProps>;
    "Card Area39471808"?: PrimitiveOverrideProps<FlexProps>;
    "Text Group39471812"?: PrimitiveOverrideProps<FlexProps>;
    "Next Map Label"?: PrimitiveOverrideProps<TextProps>;
    "Map Author Label"?: PrimitiveOverrideProps<TextProps>;
    "Map Source Label"?: PrimitiveOverrideProps<TextProps>;
    "Text Group39471818"?: PrimitiveOverrideProps<FlexProps>;
    "Next Map Name"?: PrimitiveOverrideProps<TextProps>;
    "Author Name"?: PrimitiveOverrideProps<TextProps>;
    "Link to  Map Source"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MapStatCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    mapRotation?: MapRotation;
} & {
    overrides?: MapStatCardOverridesProps | undefined | null;
}>;
export default function MapStatCard(props: MapStatCardProps): React.ReactElement;
