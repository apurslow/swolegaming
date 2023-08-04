/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MapRotation } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MapRotationUpdateFormInputValues = {
    MapName?: string;
    MapSource?: string;
    MapAuthor?: string;
    ImgSRC?: string;
    LastUpdated?: string;
    UGC?: number;
};
export declare type MapRotationUpdateFormValidationValues = {
    MapName?: ValidationFunction<string>;
    MapSource?: ValidationFunction<string>;
    MapAuthor?: ValidationFunction<string>;
    ImgSRC?: ValidationFunction<string>;
    LastUpdated?: ValidationFunction<string>;
    UGC?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MapRotationUpdateFormOverridesProps = {
    MapRotationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    MapName?: PrimitiveOverrideProps<TextFieldProps>;
    MapSource?: PrimitiveOverrideProps<TextFieldProps>;
    MapAuthor?: PrimitiveOverrideProps<TextFieldProps>;
    ImgSRC?: PrimitiveOverrideProps<TextFieldProps>;
    LastUpdated?: PrimitiveOverrideProps<TextFieldProps>;
    UGC?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MapRotationUpdateFormProps = React.PropsWithChildren<{
    overrides?: MapRotationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    mapRotation?: MapRotation;
    onSubmit?: (fields: MapRotationUpdateFormInputValues) => MapRotationUpdateFormInputValues;
    onSuccess?: (fields: MapRotationUpdateFormInputValues) => void;
    onError?: (fields: MapRotationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MapRotationUpdateFormInputValues) => MapRotationUpdateFormInputValues;
    onValidate?: MapRotationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MapRotationUpdateForm(props: MapRotationUpdateFormProps): React.ReactElement;
